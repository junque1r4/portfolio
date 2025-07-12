"use client";

import { motion } from "framer-motion";
import { Copy, ExternalLink } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("sec.junqueira@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  return (
    <section id="across-the-web" className="section-spacing pb-40">
      <div className="container-xl">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="section-title mb-24"
        >
          Across the Web
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
        >
          <div className="space-y-8">
            <motion.div
              variants={itemVariants}
              className="border-b border-foreground/10 pb-4"
            >
              <div className="flex items-center justify-between">
                <span className="contact-label text-foreground/60">Email</span>
                <div className="flex items-center gap-2">
                  <a
                    href="mailto:sec.junqueira@gmail.com"
                    className="contact-text text-foreground hover:text-foreground/80 transition-colors duration-300"
                    onClick={(e) => {
                      if (window.innerWidth < 768) {
                        e.preventDefault();
                        copyEmail();
                      }
                    }}
                  >
                    sec.junqueira@gmail.com
                  </a>
                  <button
                    onClick={copyEmail}
                    className="text-foreground/40 hover:text-foreground/80 transition-colors duration-300"
                    aria-label="Copy email address"
                  >
                    <Copy className="h-3.5 w-3.5" />
                    <span className="sr-only">Copy</span>
                  </button>
                  {emailCopied && (
                    <span className="meta-text text-foreground/60 ml-1">
                      Copied
                    </span>
                  )}
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="border-b border-foreground/10 pb-4"
            >
              <div className="flex items-center justify-between">
                <span className="contact-label text-foreground/60">
                  LinkedIn
                </span>
                <a
                  href="https://www.linkedin.com/in/joao-victor-junqueira-1b9114164/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-text text-foreground hover:text-foreground/80 transition-colors duration-300 flex items-center gap-2"
                >
                  linkedin.com/in/joao-victor-junqueira-1b9114164
                  <ExternalLink className="h-3.5 w-3.5 opacity-50" />
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="border-b border-foreground/10 pb-4"
            >
              <div className="flex items-center justify-between">
                <span className="contact-label text-foreground/60">GitHub</span>
                <a
                  href="https://github.com/junque1r4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-text text-foreground hover:text-foreground/80 transition-colors duration-300 flex items-center gap-2"
                >
                  github.com/junque1r4
                  <ExternalLink className="h-3.5 w-3.5 opacity-50" />
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="border-b border-foreground/10 pb-4"
            >
              <div className="flex items-center justify-between">
                <span className="contact-label text-foreground/60">
                  X/Twitter
                </span>
                <a
                  href="https://x.com/thecharlover"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-text text-foreground hover:text-foreground/80 transition-colors duration-300 flex items-center gap-2"
                >
                  x.com/thecharlover
                  <ExternalLink className="h-3.5 w-3.5 opacity-50" />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div
              variants={itemVariants}
              className="border-b border-foreground/10 pb-4"
            >
              <div className="flex items-center justify-between">
                <span className="contact-label text-foreground/60">
                  Telegram
                </span>
                <a
                  href="https://t.me/jvjunqueira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-text text-foreground hover:text-foreground/80 transition-colors duration-300 flex items-center gap-2"
                >
                  t.me/jvjunqueira
                  <ExternalLink className="h-3.5 w-3.5 opacity-50" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
