import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-white border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 NeuroLearn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
