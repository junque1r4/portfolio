"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: 0,
    title: "Cybersecurity Engineer - MBWay",
    company: "MBWay",
    year: "2024 - Present",
    description:
      "Executed the end-to-end vulnerability management lifecycle for a critical financial platform's core infrastructure. Identified, assessed, and drove the remediation of security risks across an on-premise environment of over 2000 servers to enhance overall system resilience and ensure compliance.",
    link: "https://www.mbway.pt/",
  },
  {
    id: 1,
    title: "Cybersecurity Engineer - Alelo",
    company: "Alelo",
    year: "2022 - 2024",
    description:
      "Managed the vulnerability management program, implemented and validated PCI-DSS security controls, coached engineering teams on secure coding.",
    link: "https://www.alelo.com.br/",
  },
  {
    id: 2,
    title: "Cybersecurity Engineer - Vivo",
    company: "Vivo",
    year: "2019 - 2022",
    description:
      "Performed in-depth code reviews, analyzed third-party penetration testing reports, and automated security tasks using Python for major enterprise clients.",
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
                <div className="max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-500 ease-out">
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
