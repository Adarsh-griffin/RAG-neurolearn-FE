import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center text-white text-sm font-bold">
              🧠
            </div>
            <span className="text-foreground">NeuroLearn</span>
          </Link>

          <div className="hidden md:flex gap-8">
            <Link
              to="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              to="/upload"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Upload
            </Link>
            <Link
              to="/qa"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Q&A
            </Link>
            <Link
              to="/learning"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Learning
            </Link>
            <Link
              to="/assessment"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Assessment
            </Link>
          </div>

          <div className="hidden md:flex gap-4">
            <button className="text-sm font-medium text-primary hover:underline">
              Sign in
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
