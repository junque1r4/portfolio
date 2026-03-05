"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: 0,
    title: "Founder & AI Integration Consultant - Intelligentsia Lab",
    company: "Intelligentsia Lab",
    year: "March 2025 - Present",
    description:
      "Security-first AI consultancy. Building MathCanvas and Tabula. AI integration consulting for startups and enterprises. SIEM/SOAR architecture, DevSecOps pipelines, and Rust backend engineering.",
    link: "https://junqueira.work",
  },
  {
    id: 1,
    title: "Cybersecurity Engineer - KWAN / SIBS (MBWay)",
    company: "KWAN -- assigned to SIBS (MBWay)",
    year: "2024 - 2025",
    description:
      "Threat modeling and security architecture for critical financial platform. GDPR & PCI-DSS compliance. Designed security controls for Azure cloud infrastructure. Detection & incident response. CI/CD pipeline security hardening.",
    link: "https://www.mbway.pt/",
  },
  {
    id: 2,
    title: "Application Security Analyst - act digital / Alelo Brasil",
    company: "act digital -- assigned to Alelo Brasil",
    year: "2022 - 2024",
    description:
      "Vulnerability management program ownership. LGPD compliance and PCI-DSS security controls. Security awareness training for engineering teams. Identity and access management.",
    link: "https://www.alelo.com.br/",
  },
  {
    id: 3,
    title: "Software Security Analyst - Compass.uol",
    company: "Compass.uol -- Vivo, Frete.com, Assai, BoaCompra",
    year: "2019 - 2022",
    description:
      "PCI-DSS compliance and vulnerability management across multiple enterprise clients. LGPD privacy reviews. Code review and secure development guidance. Third-party risk assessment. Security automation with Python.",
    link: "https://vivo.com.br/",
  },
];

export function ExperienceSection() {
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
    <section id="experience" className="section-spacing">
      <div className="container-xl">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="section-title mb-24"
        >
          Working Experience
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((experience) => (
            <motion.div key={experience.id} variants={itemVariants}>
              <a
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block py-8 border-t border-foreground/10 transition-all duration-500 ease-out"
              >
                <div className="flex items-center justify-between">
                  <h3 className="project-title text-foreground/80 group-hover:text-foreground transition-colors duration-500 ease-out">
                    {experience.title}
                  </h3>
                  <div className="meta-text text-foreground-secondary">
                    {experience.year}
                  </div>
                </div>

                {/* Experience description that appears on hover */}
                <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 ease-out">
                  <p className="project-description text-foreground-secondary max-w-2xl pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 ease-out">
                    {experience.description}
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
