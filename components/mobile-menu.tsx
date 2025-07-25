"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";
import { useScrollContext } from "./smooth-scroll-provider";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { currentSection } = useScrollContext();
  const [mounted, setMounted] = useState(false);

  // Handle navigation click
  const handleNavClick = (href: string) => {
    // Close the menu
    onClose();

    // Small delay to ensure menu closes smoothly before scrolling
    setTimeout(() => {
      // Navigate to the section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  const navItems = [
    { name: "Projects", href: "#work", id: "work" },
    { name: "Work", href: "#experience", id: "experience" },
    { name: "Certificates", href: "#certificates", id: "certificates" },
    { name: "About", href: "#about", id: "about" },
    { name: "Across the Web", href: "#across-the-web", id: "across-the-web" },
  ];

  // Only mount the portal on the client side
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  // Use createPortal to render the menu at the root level of the DOM
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] isolate">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#1a1a1c]/95 backdrop-blur-md"
            onClick={onClose}
            style={{ zIndex: 1 }}
          />

          {/* Menu panel */}
          <motion.div
            initial={{ translateX: "100%" }}
            animate={{ translateX: 0 }}
            exit={{ translateX: "100%" }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-[#1a1a1c] shadow-xl flex flex-col h-full"
            style={{ zIndex: 2, willChange: "transform" }}
          >
            <div className="flex justify-between items-center p-6 border-b border-foreground/10">
              <span className="nav-text">Menu</span>
              <button
                onClick={onClose}
                className="text-foreground-secondary hover:text-foreground transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-8">
              <nav className="flex flex-col space-y-8 px-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`mobile-nav-text ${
                      currentSection === item.id
                        ? "text-foreground"
                        : "text-foreground-secondary hover:text-foreground"
                    } transition-colors duration-300 relative pl-4`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    {currentSection === item.id && (
                      <motion.span
                        layoutId="activeMenuIndicator"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-foreground rounded-full"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            <div className="border-t border-foreground/10 p-6 space-y-4">
              <a
                href="https://github.com/junque1r4/portfolio/blob/master/files/CV_original.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 contact-text text-foreground hover:text-foreground transition-colors duration-300 group"
                onClick={onClose}
              >
                <Download className="h-5 w-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                <span>Download CV</span>
              </a>
              <p className="meta-text text-foreground-secondary">
                &copy; {new Date().getFullYear()} JOÃO JUNQUEIRA
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
