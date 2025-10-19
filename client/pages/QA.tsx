import { Link } from "react-router-dom";

export function QAPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-20">
          <div className="text-6xl mb-4">❓</div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Q&A Chat</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ask questions about your uploaded documents and get instant AI-powered answers.
            Our intelligent tutor is ready to help you master any topic.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/upload"
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Upload a Document First
            </Link>
            <Link
              to="/"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
            >
              Back to Home
            </Link>
          </div>

          <div className="mt-16 bg-gray-50 rounded-lg p-8 text-left max-w-2xl mx-auto">
            <h3 className="font-semibold text-foreground mb-4">Coming Soon Features:</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <span className="text-primary">→</span>
                <span>Document selector dropdown to switch between uploaded files</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary">→</span>
                <span>Chat interface with AI tutor avatar (🤖)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary">→</span>
                <span>Voice input button with text-to-speech</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary">→</span>
                <span>Suggested question buttons for quick learning</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary">→</span>
                <span>Real-time AI responses with streaming</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
