import { Link } from "react-router-dom";

export function LearningPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-20">
          <div className="text-6xl mb-6">📚</div>
          <h1 className="text-4xl font-light text-foreground mb-4 tracking-wide">LEARNING CENTER</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
            Experience personalized learning with AI-guided content, synchronized video,
            and real-time text progression for optimal comprehension.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/upload"
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Start Learning
            </Link>
            <Link
              to="/"
              className="px-8 py-3 border-2 border-border text-foreground rounded-lg font-semibold hover:bg-muted/50 transition-colors"
            >
              Back to Home
            </Link>
          </div>

          <div className="mt-16 bg-muted/20 rounded-lg p-8 text-left max-w-3xl mx-auto border border-border">
            <h3 className="font-semibold text-foreground mb-6">3-Column Learning Layout:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 border border-border">
                <div className="text-3xl mb-3">🤖</div>
                <h4 className="font-semibold text-foreground mb-2">Left Column</h4>
                <p className="text-sm text-muted-foreground">
                  AI avatar video with audio controls and synchronized narration
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-border">
                <div className="text-3xl mb-3">📖</div>
                <h4 className="font-semibold text-foreground mb-2">Middle Column</h4>
                <p className="text-sm text-muted-foreground">
                  Current text content with auto-scrolling synchronized to video playback
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-border">
                <div className="text-3xl mb-3">👀</div>
                <h4 className="font-semibold text-foreground mb-2">Right Column</h4>
                <p className="text-sm text-muted-foreground">
                  Upcoming text preview to prepare for what comes next
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <span>🔗</span> Bottom Section
              </h4>
              <p className="text-muted-foreground mb-4 text-sm">
                Reference links and additional resources with yellow background highlighting
              </p>
              <div className="bg-accent/20 rounded-lg p-4 border border-accent/30">
                <p className="text-sm text-muted-foreground">
                  📌 Quick access to source materials, definitions, and related learning resources
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-muted/20 rounded-lg p-8 border border-border max-w-3xl mx-auto">
            <h4 className="font-semibold text-foreground mb-4">Key Features:</h4>
            <ul className="space-y-3 text-muted-foreground text-left">
              <li className="flex items-center gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Video + synchronized text for immersive learning</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>AI avatar narration with audio controls</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Auto-scroll content tracking with playback</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Preview upcoming content for better comprehension</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Reference links and supplementary resources</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
