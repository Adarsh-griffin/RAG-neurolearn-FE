import { useState, useRef } from "react";
import { Upload, CheckCircle, AlertCircle } from "lucide-react";

export function UploadPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number }>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    processFiles(droppedFiles);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      processFiles(selectedFiles);
    }
  };

  const processFiles = (newFiles: File[]) => {
    const validFiles = newFiles.filter((file) => {
      if (!file.type.includes("pdf") && !file.name.endsWith(".pdf")) {
        return false;
      }
      if (file.size > 50 * 1024 * 1024) {
        return false;
      }
      return true;
    });

    if (validFiles.length > 0) {
      setFiles((prev) => [...prev, ...validFiles]);
      validFiles.forEach((file) => {
        simulateUpload(file);
      });
    }
  };

  const simulateUpload = (file: File) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 40;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
      }
      setUploadProgress((prev) => ({
        ...prev,
        [file.name]: progress,
      }));
    }, 300);
  };

  const removeFile = (fileName: string) => {
    setFiles((prev) => prev.filter((f) => f.name !== fileName));
    setUploadProgress((prev) => {
      const updated = { ...prev };
      delete updated[fileName];
      return updated;
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">📤 Upload Documents</h1>
          <p className="text-lg text-muted-foreground">
            Upload your PDF documents and let our AI analyze them for personalized learning
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Upload Area */}
          <div className="lg:col-span-2">
            {/* Drop Zone */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors ${
                isDragging
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="mb-4">
                <Upload
                  size={48}
                  className={`mx-auto ${
                    isDragging ? "text-primary" : "text-muted-foreground"
                  }`}
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Drop your files here
              </h3>
              <p className="text-muted-foreground mb-4">
                or click to browse from your computer
              </p>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept=".pdf"
                onChange={handleFileSelect}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Select Files
              </button>
            </div>

            {/* File List */}
            {files.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Uploaded Files ({files.length})
                </h3>
                <div className="space-y-4">
                  {files.map((file) => {
                    const progress = uploadProgress[file.name] || 0;
                    const isComplete = progress >= 100;

                    return (
                      <div
                        key={file.name}
                        className="bg-gray-50 rounded-lg p-4 border border-border hover:border-primary/50 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              {isComplete ? (
                                <CheckCircle size={20} className="text-green-500" />
                              ) : (
                                <div className="w-5 h-5 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                              )}
                              <span className="font-medium text-foreground break-all">
                                {file.name}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span>{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                              <span>•</span>
                              <span>{Math.round(progress)}%</span>
                            </div>
                            <div className="mt-2 bg-white rounded-full h-2 border border-border overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-primary to-primary/70 transition-all"
                                style={{ width: `${progress}%` }}
                              />
                            </div>
                          </div>
                          <button
                            onClick={() => removeFile(file.name)}
                            className="text-muted-foreground hover:text-destructive transition-colors text-sm font-medium"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {files.some((f) => (uploadProgress[f.name] || 0) >= 100) && (
                  <button className="mt-6 w-full px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                    Continue to Learning
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Supported Formats */}
            <div className="bg-blue-50 rounded-lg p-6 border border-primary/20">
              <h4 className="font-semibold text-foreground mb-4">📋 Supported Formats</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> PDF files
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Max 50MB per file
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Multiple files supported
                </li>
              </ul>
            </div>

            {/* Process Explanation */}
            <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
              <h4 className="font-semibold text-foreground mb-4">🔄 How It Works</h4>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="font-bold text-primary min-w-fit">1.</span>
                  <span>Upload your PDF documents</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary min-w-fit">2.</span>
                  <span>AI analyzes content and extracts key concepts</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary min-w-fit">3.</span>
                  <span>Create personalized learning paths</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary min-w-fit">4.</span>
                  <span>Practice with Q&A and assessments</span>
                </li>
              </ol>
            </div>

            {/* Tips */}
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span>💡</span> Pro Tips
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Use clear, legible PDFs for best results</li>
                <li>• Technical documents work great</li>
                <li>• Multi-page PDFs are supported</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
