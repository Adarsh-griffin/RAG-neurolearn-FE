import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiService, AssessmentQuestion, AssessmentFeedback } from "../lib/api";
import { BookOpen, CheckCircle, XCircle, RotateCcw, ArrowLeft } from "lucide-react";

type AssessmentState = 'welcome' | 'question' | 'answer' | 'feedback';

export function AssessmentPage() {
  const navigate = useNavigate();
  const [currentState, setCurrentState] = useState<AssessmentState>('welcome');
  const [question, setQuestion] = useState<string>('');
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const generateQuestion = async () => {
    setIsLoading(true);
    setError('');
    try {
      const response: AssessmentQuestion = await apiService.generateAssessment();
      setQuestion(response.question);
      setCurrentState('question');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate question');
    } finally {
      setIsLoading(false);
    }
  };

  const submitAnswer = async () => {
    if (!userAnswer.trim()) {
      setError('Please enter an answer before submitting');
      return;
    }

    setIsLoading(true);
    setError('');
    try {
      const response: AssessmentFeedback = await apiService.submitAssessment(question, userAnswer);
      setFeedback(response.feedback);
      setCurrentState('feedback');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit answer');
    } finally {
      setIsLoading(false);
    }
  };

  const resetAssessment = () => {
    setQuestion('');
    setUserAnswer('');
    setFeedback('');
    setError('');
    setCurrentState('welcome');
  };

  const startAnswering = () => {
    setCurrentState('answer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
            <Link
              to="/"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Back to Home</span>
            </Link>
          <div className="h-4 w-px bg-gray-300"></div>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
            <BookOpen size={28} className="text-indigo-600" />
            Assessment Center
          </h1>
          </div>

        {/* Error Display */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center gap-2">
              <XCircle size={20} className="text-red-600" />
              <p className="text-red-800 font-medium">Error</p>
            </div>
            <p className="text-red-700 mt-1">{error}</p>
          </div>
        )}

        {/* Welcome State */}
        {currentState === 'welcome' && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen size={40} className="text-indigo-600" />
                  </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready for Assessment?</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Test your understanding with AI-generated questions based on your latest uploaded document. 
                Get personalized feedback and improve your learning.
              </p>
              
              <div className="space-y-4">
                <button
                  onClick={generateQuestion}
                  disabled={isLoading}
                  className="w-full max-w-md mx-auto px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Generating Question...
                    </>
                  ) : (
                    <>
                      <BookOpen size={20} />
                      Generate Question
                    </>
                  )}
                    </button>
                
                <p className="text-sm text-gray-500">
                  Questions are generated from your most recently uploaded document
                </p>
                  </div>
                </div>
              </div>
        )}

        {/* Question State */}
        {currentState === 'question' && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <h2 className="text-xl font-semibold text-gray-800">Generated Question</h2>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-indigo-500">
                <p className="text-lg text-gray-800 leading-relaxed">{question}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={startAnswering}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                <CheckCircle size={20} />
                Start Answering
              </button>
              <button
                onClick={resetAssessment}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <RotateCcw size={20} />
                New Question
              </button>
            </div>
          </div>
        )}

        {/* Answer State */}
        {currentState === 'answer' && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                <h2 className="text-xl font-semibold text-gray-800">Your Answer</h2>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6 border-l-4 border-indigo-500">
                <p className="text-sm text-gray-600 mb-2">Question:</p>
                <p className="text-gray-800">{question}</p>
              </div>

              <div className="space-y-4">
                <label className="block">
                  <span className="text-sm font-medium text-gray-700 mb-2 block">Your Answer:</span>
                      <textarea
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Type your answer here..."
                    className="w-full p-4 border border-gray-300 rounded-lg text-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    rows={6}
                  />
                </label>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={submitAnswer}
                disabled={isLoading || !userAnswer.trim()}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <CheckCircle size={20} />
                        Submit Answer
                  </>
                )}
              </button>
              <button
                onClick={() => setCurrentState('question')}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Back to Question
                      </button>
                    </div>
          </div>
        )}

        {/* Feedback State */}
        {currentState === 'feedback' && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <h2 className="text-xl font-semibold text-gray-800">Assessment Feedback</h2>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6 border-l-4 border-indigo-500">
                <p className="text-sm text-gray-600 mb-2">Question:</p>
                <p className="text-gray-800 mb-4">{question}</p>
                <p className="text-sm text-gray-600 mb-2">Your Answer:</p>
                <p className="text-gray-800">{userAnswer}</p>
              </div>

              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle size={24} className="text-green-600 mt-1" />
                  <h3 className="text-lg font-semibold text-green-800">AI Tutor Feedback</h3>
                </div>
                <div className="prose prose-sm max-w-none">
                  <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">{feedback}</p>
                  </div>
                </div>
              </div>

            <div className="flex gap-4">
              <button
                onClick={resetAssessment}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                <RotateCcw size={20} />
                New Assessment
              </button>
              <button
                onClick={() => setCurrentState('answer')}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {/* Assessment Features */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Assessment Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen size={16} className="text-indigo-600" />
                  </div>
                        <div>
                  <h4 className="font-semibold text-gray-800">AI-Generated Questions</h4>
                  <p className="text-sm text-gray-600">Questions tailored to your uploaded documents</p>
                        </div>
                      </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={16} className="text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Instant Feedback</h4>
                  <p className="text-sm text-gray-600">Get detailed explanations and corrections</p>
                      </div>
                    </div>
                  </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <RotateCcw size={16} className="text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Unlimited Practice</h4>
                  <p className="text-sm text-gray-600">Generate new questions anytime</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <XCircle size={16} className="text-indigo-600" />
            </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Constructive Criticism</h4>
                  <p className="text-sm text-gray-600">Learn from mistakes with helpful guidance</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
