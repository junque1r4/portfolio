"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 0,
    title: "Workspace MCP",
    category: "Rust / Developer Tools",
    year: "2024",
    description:
      "A Model Context Protocol (MCP) server built in Rust that provides workspace analysis capabilities, allowing AI assistants to understand project structure and codebase context efficiently.",
    link: "https://github.com/junque1r4/workspace-context-mcp",
  },
  {
    id: 1,
    title: "Solana Money Laundry Scanner",
    category: "Rust / Blockchain Security",
    year: "2024",
    description:
      "A Rust-based tool for analyzing Solana blockchain transactions to detect potential money laundering patterns and suspicious activities in the decentralized finance ecosystem.",
    link: "https://github.com/junque1r4/thehackerdex",
  },
  {
    id: 2,
    title: "Compliance Audit tool",
    category: "Python / Security Automation",
    year: "2024",
    description:
      "A Python-based compliance auditing tool that automates security assessments and regulatory compliance checks, streamlining the audit process for organizations.",
    link: "https://github.com/junque1r4/Audit-Checker",
  },
];
export function WorkSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="work" className="section-spacing">
      <div className="container-xl">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="section-title mb-24"
        >
          Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block py-8 border-t border-foreground/10 transition-all duration-500 ease-out"
              >
                <div className="flex items-center justify-between">
                  <h3 className="project-title text-foreground/80 group-hover:text-foreground transition-colors duration-500 ease-out">
                    {project.title}
                  </h3>
                  <div className="meta-text text-foreground-secondary">
                    {project.year}
                  </div>
                </div>

                {/* Project description that appears on hover */}
                <div className="max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 ease-out">
                  <p className="project-description text-foreground-secondary max-w-2xl pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 ease-out">
                    {project.description}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
          <motion.div
            variants={itemVariants}
            className="border-t border-foreground/10 mt-0"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
}
