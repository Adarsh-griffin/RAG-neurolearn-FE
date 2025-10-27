/**
 * API service for connecting React frontend with Flask backend
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export interface UploadResponse {
  message: string;
  filename: string;
  status: string;
  fileId?: string;
}

export interface ProcessingStatus {
  status: 'processing' | 'completed' | 'not_found';
  message: string;
  hasExplanation?: boolean;
}

export interface FileInfo {
  _id: string;
  filename: string;
  uploadDate: string;
  size: number;
}

export interface QAResponse {
  answer: string;
  sources?: string[];
}

export interface AssessmentQuestion {
  question: string;
}

export interface AssessmentFeedback {
  feedback: string;
}

export interface TTSResponse {
  audio_url: string;
}

export interface ReferenceLink {
  title: string;
  url: string;
  description?: string;
}

class ApiService {
  private baseURL: string;

  constructor(baseURL: string = API_BASE_URL) {
    this.baseURL = baseURL;
  }

  // Upload file
  async uploadFile(file: File): Promise<UploadResponse> {
    const formData = new FormData();
    formData.append('pdf', file);

    const response = await fetch(`${this.baseURL}/api/upload`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Upload failed');
    }

    return response.json();
  }

  // Get uploaded files
  async getFiles(): Promise<FileInfo[]> {
    const response = await fetch(`${this.baseURL}/api/files`);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to fetch files');
    }

    return response.json();
  }

  // Ask question
  async askQuestion(question: string): Promise<QAResponse> {
    const response = await fetch(`${this.baseURL}/api/qa`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to get answer');
    }

    return response.json();
  }

  // Get text content
  async getText(): Promise<string> {
    const response = await fetch(`${this.baseURL}/api/get_text`);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to fetch text');
    }

    const data = await response.json();
    return data.script_text || '';
  }

  // Get reference links
  async getLinks(): Promise<ReferenceLink[]> {
    const response = await fetch(`${this.baseURL}/api/get_links`);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to fetch links');
    }

    const data = await response.json();
    const links = data.links || [];
    
    // Convert string links to ReferenceLink objects if needed
    return links.map((link: string | ReferenceLink) => {
      if (typeof link === 'string') {
        return {
          title: this.extractTitleFromUrl(link),
          url: link,
          description: undefined
        };
      }
      return link;
    });
  }

  private extractTitleFromUrl(url: string): string {
    try {
      const urlObj = new URL(url);
      const hostname = urlObj.hostname.replace('www.', '');
      const pathname = urlObj.pathname.split('/').pop() || '';
      
      if (pathname) {
        return pathname.replace(/[-_]/g, ' ').replace(/\.[^/.]+$/, '');
      }
      return hostname;
    } catch {
      return url;
    }
  }

  // Generate assessment question
  async generateAssessment(): Promise<AssessmentQuestion> {
    const response = await fetch(`${this.baseURL}/api/assessment/generate`);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to generate assessment');
    }

    return response.json();
  }

  // Submit assessment answer
  async submitAssessment(question: string, answer: string): Promise<AssessmentFeedback> {
    const response = await fetch(`${this.baseURL}/api/assessment/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question,
        answer
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to submit assessment');
    }

    return response.json();
  }

  // Text-to-Speech for learning
  async learningTTS(text: string): Promise<string> {
    const response = await fetch(`${this.baseURL}/api/learning-tts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'TTS failed');
    }

    const data: TTSResponse = await response.json();
    return data.audio_url;
  }

  // Text-to-Speech for Q&A
  async qaTTS(text: string): Promise<string> {
    const response = await fetch(`${this.baseURL}/api/qa-tts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'TTS failed');
    }

    const data: TTSResponse = await response.json();
    return data.audio_url;
  }

  // Voice input for Q&A
  async qaVoice(audioFile: File): Promise<QAResponse> {
    const formData = new FormData();
    formData.append('audio', audioFile);

    const response = await fetch(`${this.baseURL}/api/qa-voice`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Voice processing failed');
    }

    return response.json();
  }

  // Check processing status
  async checkProcessingStatus(filename: string): Promise<ProcessingStatus> {
    const response = await fetch(`${this.baseURL}/api/processing-status/${encodeURIComponent(filename)}`);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to check processing status');
    }

    return response.json();
  }

  // Test connection
  async testConnection(): Promise<boolean> {
    try {
      await this.getFiles();
      return true;
    } catch (error) {
      console.error('Backend connection test failed:', error);
      return false;
    }
  }
}

export const apiService = new ApiService();
