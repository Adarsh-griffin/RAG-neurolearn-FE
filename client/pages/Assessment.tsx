import { Link } from "react-router-dom";

export function AssessmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-20">
          <div className="text-6xl mb-6">📝</div>
          <h1 className="text-4xl font-light text-foreground mb-4 tracking-wide">ASSESSMENT</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
            Test your understanding with generated questions and get intelligent feedback
            based on your responses.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/learning"
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Start Assessment
            </Link>
            <Link
              to="/"
              className="px-8 py-3 border-2 border-border text-foreground rounded-lg font-semibold hover:bg-muted/50 transition-colors"
            >
              Back to Home
            </Link>
          </div>

          <div className="mt-16 bg-muted/20 rounded-lg p-8 text-left max-w-3xl mx-auto border border-border">
            <h3 className="font-semibold text-foreground mb-8 text-lg">
              3-Step Assessment Flow:
            </h3>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="bg-white rounded-lg p-6 border-l-4 border-primary">
                <div className="flex items-start gap-4">
                  <div className="text-2xl font-bold text-primary bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2">Generate Question</h4>
                    <p className="text-muted-foreground text-sm mb-3 font-light">
                      Click the "Generate Question" button to get a question based on the material you've learned.
                    </p>
                    <button className="px-4 py-2 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-muted/50 transition-colors">
                      Generate Question
                    </button>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-lg p-6 border-l-4 border-primary">
                <div className="flex items-start gap-4">
                  <div className="text-2xl font-bold text-primary bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2">Answer & Submit</h4>
                    <p className="text-muted-foreground text-sm mb-3 font-light">
                      Type your answer in the textarea and click "Submit Answer".
                    </p>
                    <div className="space-y-3">
                      <textarea
                        placeholder="Enter your answer here..."
                        className="w-full p-3 border border-border rounded-lg text-sm text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                        rows={4}
                      />
                      <button className="w-full px-4 py-2 bg-primary text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
                        Submit Answer
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-lg p-6 border-l-4 border-primary">
                <div className="flex items-start gap-4">
                  <div className="text-2xl font-bold text-primary bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2">Feedback & Evaluation</h4>
                    <p className="text-muted-foreground text-sm mb-4 font-light">
                      Receive detailed feedback with explanations and suggestions for improvement.
                    </p>
                    <div className="bg-secondary/10 rounded-lg p-4 border border-secondary/30">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="text-2xl">✓</span>
                        <div>
                          <p className="font-semibold text-foreground text-sm">Great Answer!</p>
                          <p className="text-muted-foreground text-xs mt-1">
                            Your understanding is excellent. You correctly identified...
                          </p>
                        </div>
                      </div>
                      <div className="bg-white rounded p-3 border border-secondary/20 mt-3">
                        <p className="text-xs font-medium text-muted-foreground mb-2">
                          Key Points Covered:
                        </p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Correct conceptual understanding</li>
                          <li>• Proper use of terminology</li>
                          <li>• Well-structured explanation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progressive Disclosure Note */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="bg-muted/50 rounded-lg p-4 border border-border">
                <p className="text-sm text-muted-foreground font-light">
                  <strong>Progressive Disclosure:</strong> Each step is revealed after completion,
                  keeping the interface clean and focused on the current task.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-muted/20 rounded-lg p-8 border border-border max-w-3xl mx-auto">
            <h4 className="font-semibold text-foreground mb-4">Assessment Features:</h4>
            <ul className="space-y-3 text-muted-foreground text-left text-sm">
              <li className="flex items-center gap-3">
                <span className="text-primary font-bold">→</span>
                <span>Generated questions tailored to your learning material</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary font-bold">→</span>
                <span>Real-time evaluation and feedback</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary font-bold">→</span>
                <span>Detailed explanations for incorrect answers</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary font-bold">→</span>
                <span>Progress tracking and performance analytics</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary font-bold">→</span>
                <span>Adaptive difficulty based on performance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
