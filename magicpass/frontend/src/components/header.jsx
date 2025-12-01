import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">✦</span>
              </div>
              <span className="font-bold text-xl text-primary">Magic Pass</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#cta" className="text-foreground hover:text-primary transition-colors">
              Get Started
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Outline Button */}
            <a href="/visitor">
              <button className="px-4 py-2 border border-primary text-primary rounded-md font-medium hover:bg-primary/10 transition">
                For Visitors
              </button>
            </a>

            {/* Solid Button */}
            <a href="/admin">
              <button className="px-4 py-2 bg-primary text-white rounded-md font-medium hover:bg-primary/80 transition">
                Launch App
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <nav className="flex flex-col gap-3 pt-4">
              <a href="#features" className="text-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
                How It Works
              </a>
              <a href="#cta" className="text-foreground hover:text-primary transition-colors">
                Get Started
              </a>

              <div className="flex gap-2 pt-2">
                <a href="/visitor" className="flex-1">
                  <button className="w-full px-4 py-2 border border-primary text-primary rounded-md font-medium hover:bg-primary/10 transition">
                    For Visitors
                  </button>
                </a>

                <a href="/admin" className="flex-1">
                  <button className="w-full px-4 py-2 bg-primary text-white rounded-md font-medium hover:bg-primary/80 transition">
                    Launch App
                  </button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
