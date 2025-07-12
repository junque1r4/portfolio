"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, Download } from "lucide-react";
import { useScrollContext } from "./smooth-scroll-provider";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { currentSection } = useScrollContext();

  const navItems = [
    { name: "Projects", href: "#work", id: "work" },
    { name: "Work", href: "#experience", id: "experience" },
    { name: "Certificates", href: "#certificates", id: "certificates" },
    { name: "About", href: "#about", id: "about" },
    { name: "Across the Web", href: "#across-the-web", id: "across-the-web" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 py-8 md:py-12 transition-all duration-500 ${
          scrolled ? "backdrop-blur-sm bg-background/70" : ""
        }`}
      >
        <div className="container-xl flex items-center justify-between">
          <a href="#" className="nav-text font-medium">
            JJ
          </a>

          <div className="hidden md:flex items-center space-x-16">
            <nav className="flex space-x-16">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`nav-text transition-colors duration-500 ${
                    currentSection === item.id
                      ? "text-foreground"
                      : "text-foreground-secondary hover:text-foreground"
                  }`}
                >
                  {item.name}
                  {currentSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="h-px bg-foreground mt-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            <a
              href="https://github.com/junque1r4/portfolio/blob/master/files/CV_original.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 nav-text text-foreground-secondary hover:text-foreground transition-colors duration-500 group"
            >
              <Download className="h-4 w-4 group-hover:translate-y-0.5 transition-transform duration-300" />
              <span>CV</span>
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <a
              href="https://github.com/junque1r4/portfolio/blob/master/files/CV_original.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-all duration-300 text-foreground"
              aria-label="Download CV"
            >
              <Download className="h-4 w-4" />
            </a>
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-all duration-300 text-foreground"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu as a separate component */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
