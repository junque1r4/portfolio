"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="section-spacing">
      <div className="container-xl">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="section-title mb-24"
        >
          About
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col space-y-16"
          >
            <div>
              <p className="body-text text-foreground-secondary">
                Cybersecurity analyst and developer safeguarding digital assets
                and infrastructure across the Web2 and Web3 ecosystems.
              </p>
            </div>

            <div>
              <p className="body-text text-foreground-secondary">
                Currently at{" "}
                <a
                  href="https://www.mbway.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-medium transition-colors duration-300"
                >
                  MBWay
                </a>
                , securing a PCI-DSS compliant infrastructure of over 2000
                servers.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col space-y-16"
          >
            <div>
              <p className="body-text text-foreground-secondary">
                I believe in building proactive, resilient security solutions
                that not only defend against threats but also foster user trust
                and enable innovation.
              </p>
            </div>

            <div>
              <p className="body-text text-foreground-secondary">
                When I'm not hunting for threats or doing code reviews, I enjoy
                discovering new places and city walks, brewing coffee, and
                exploring new OSINT techniques.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
