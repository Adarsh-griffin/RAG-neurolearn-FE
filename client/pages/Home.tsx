import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function Home() {
  const features = [
    {
      icon: "📤",
      title: "Upload Documents",
      description: "Upload PDFs and documents for analysis",
      href: "/upload",
    },
    {
      icon: "🤖",
      title: "Interactive Learning",
      description: "Learn with guided content and multimedia",
      href: "/learning",
    },
    {
      icon: "❓",
      title: "Q&A Chat",
      description: "Ask questions and get instant answers",
      href: "/qa",
    },
    {
      icon: "✅",
      title: "Assessment",
      description: "Test your knowledge with quizzes",
      href: "/assessment",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Copy */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <h1 className="text-4xl lg:text-5xl font-light text-muted-foreground mb-6 tracking-wide">
              EDUCATION
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                to="/upload"
                className="px-8 py-3 bg-[hsl(var(--button-lavender))] text-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                GET STARTED
              </Link>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="flex items-center justify-center order-1 lg:order-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F05fcc19a498f483e81b585a8672de805%2F5199103e3f334277be1ec939b7466872?format=webp&width=800"
              alt="Student learning with AI"
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 lg:py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.href}
                className="group p-6 rounded-xl border border-border hover:border-primary/40 hover:shadow-md transition-all duration-300 hover:bg-muted/50"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our platform and begin your journey to mastering new skills and knowledge.
          </p>
          <Link
            to="/upload"
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
