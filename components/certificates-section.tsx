"use client";

import { motion } from "framer-motion";

const certificates = [
  {
    id: 0,
    title: "Exin Secure Programming Foundation",
    issuer: "Exin",
    year: "2019",
    description:
      "Foundation-level certification covering secure programming principles, common vulnerabilities, and secure coding practices to build robust and secure software applications.",
    link: "https://www.exin.com/certifications/exin-secure-programming-foundation/",
  },
  {
    id: 1,
    title: "Certified Blockchain Security Professional™",
    issuer: "Blockchain Council",
    year: "Ongoing",
    description:
      "Advanced certification program focusing on blockchain security fundamentals, smart contract security, cryptographic protocols, and security best practices for decentralized applications.",
    link: "https://www.blockchain-council.org/certifications/certified-blockchain-security-professional/",
  },
];

export function CertificatesSection() {
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
    <section id="certificates" className="section-spacing">
      <div className="container-xl">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="section-title mb-24"
        >
          Certificates
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certificates.map((certificate) => (
            <motion.div key={certificate.id} variants={itemVariants}>
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block py-8 border-t border-foreground/10 transition-all duration-500 ease-out"
              >
                <div className="flex items-center justify-between">
                  <h3 className="project-title text-foreground/80 group-hover:text-foreground transition-colors duration-500 ease-out">
                    {certificate.title}
                  </h3>
                  <div className="meta-text text-foreground-secondary">
                    {certificate.year}
                  </div>
                </div>

                {/* Certificate description that appears on hover */}
                <div className="max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-500 ease-out">
                  <p className="project-description text-foreground-secondary max-w-2xl pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 ease-out">
                    {certificate.description}
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
