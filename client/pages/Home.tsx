import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function Home() {
  const features = [
    {
      icon: "📤",
      title: "Upload Documents",
      description: "Upload PDFs and documents for AI-powered analysis",
      href: "/upload",
    },
    {
      icon: "🤖",
      title: "AI Learning",
      description: "Learn with personalized AI-guided content",
      href: "/learning",
    },
    {
      icon: "❓",
      title: "Q&A Chat",
      description: "Ask questions and get instant AI-powered answers",
      href: "/qa",
    },
    {
      icon: "✅",
      title: "Assessment",
      description: "Test your knowledge with AI-generated quizzes",
      href: "/assessment",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Learn Smarter with <span className="text-primary">AI</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform your learning experience with NeuroLearn. Upload documents,
              engage with AI tutors, and master any subject through personalized
              learning paths and intelligent assessments.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                to="/upload"
                className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                Get Started <ArrowRight size={20} />
              </Link>
              <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column - Illustration Placeholder */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-8xl mb-4">🎓</div>
                  <p className="text-2xl font-semibold text-primary">NeuroLearn</p>
                  <p className="text-muted-foreground mt-2">AI-Powered Learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Powerful Features for <span className="text-primary">Better Learning</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the future of education with our comprehensive AI-powered
              learning platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.href}
                className="group bg-white rounded-xl p-8 shadow-sm border border-border hover:shadow-lg hover:border-primary transition-all duration-300"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                  Explore <ArrowRight size={18} className="ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Learning?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of students who are already learning smarter with NeuroLearn
          </p>
          <Link
            to="/upload"
            className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Learning Free
          </Link>
        </div>
      </section>
    </div>
  );
}
