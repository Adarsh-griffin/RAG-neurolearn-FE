import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="px-3 py-1.5 bg-primary text-white rounded-sm text-xs font-bold tracking-wide">
              LOGO
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-12">
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Products
            </Link>
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Company
            </Link>
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Contact us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-foreground hover:text-primary transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
