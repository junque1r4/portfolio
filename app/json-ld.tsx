import Script from "next/script";

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "JOÃO JUNQUEIRA",
    url: "https://x.com/thecharlover",
    image: "https://x.com/thecharlover/photo",
    jobTitle: "Cybersecurity Engineer & Developer",
    description:
      "Portfolio of JOÃO JUNQUEIRA, a designer and developer creating digital experiences.",
    sameAs: [
      "https://www.linkedin.com/in/joao-victor-junqueira-1b9114164/",
      "https://github.com/junque1r4",
      "https://x.com/thecharlover",
      "https://t.me/jvjunqueira",
    ],
  };

  return (
    <Script id="json-ld" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(jsonLd)}
    </Script>
  );
}
