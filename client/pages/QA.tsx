import { Link } from "react-router-dom";

export function QAPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-20">
          <div className="text-6xl mb-6">❓</div>
          <h1 className="text-4xl font-light text-foreground mb-4 tracking-wide">Q&A CHAT</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
            Ask questions about your uploaded documents and get instant answers.
            Our tutor is ready to help you master any topic.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/upload"
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Upload a Document First
            </Link>
            <Link
              to="/"
              className="px-8 py-3 border-2 border-border text-foreground rounded-lg font-semibold hover:bg-muted/50 transition-colors"
            >
              Back to Home
            </Link>
          </div>

          <div className="mt-16 bg-muted/20 rounded-lg p-8 text-left max-w-2xl mx-auto border border-border">
            <h3 className="font-semibold text-foreground mb-4">Coming Soon:</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <span className="text-primary font-bold">→</span>
                <span>Document selector dropdown</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary font-bold">→</span>
                <span>Chat interface with tutor avatar</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary font-bold">→</span>
                <span>Voice input and text-to-speech</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary font-bold">→</span>
                <span>Suggested questions for quick learning</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary font-bold">→</span>
                <span>Real-time responses</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
