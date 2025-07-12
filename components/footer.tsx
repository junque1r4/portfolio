"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      className="py-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
    >
      <div className="container-xl">
        <div className="flex flex-col md:flex-row justify-center items-center text-center">
          <p className="meta-text text-foreground-secondary flex items-center gap-2">
            Made after a lot of vibe coding by{" "}
            <a
              href="https://x.com/thecharlover"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline"
            >
              Juaaumm
            </a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
