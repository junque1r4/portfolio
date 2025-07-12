import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";

// Current timestamp to force cache refresh
const timestamp = new Date().getTime();

export const metadata: Metadata = {
  title: "JOÃO JUNQUEIRA | Cybersecurity Engineer & Developer",
  description:
    "Portfolio of JOÃO JUNQUEIRA, a cybersecurity engineer and developer creating secure digital experiences.",
  metadataBase: new URL("https://junqueira.work"),
  openGraph: {
    title: "JOÃO JUNQUEIRA | Cybersecurity Engineer & Developer",
    description:
      "Portfolio of JOÃO JUNQUEIRA, a cybersecurity engineer and developer creating secure digital experiences.",
    url: "https://junqueira.work",
    siteName: "JOÃO JUNQUEIRA",
    images: [
      {
        url: `/images/og-image.png?v=${timestamp}`,
        width: 1200,
        height: 630,
        alt: "JOÃO JUNQUEIRA",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JOÃO JUNQUEIRA | Cybersecurity Engineer & Developer",
    description:
      "Portfolio of JOÃO JUNQUEIRA, a cybersecurity engineer and developer creating secure digital experiences.",
    images: [`/images/og-image.png?v=${timestamp}`],
    creator: "@thecharlover",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Force refresh of social media cache with timestamp */}
        <meta
          property="og:image"
          content={`https://pbs.twimg.com/profile_images/1924757770013745154/v46T0yH7_400x400.jpg`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="JOÃO JUNQUEIRA" />
        <meta property="og:image:type" content="image/png" />

        <meta
          name="twitter:image"
          content={`https://pbs.twimg.com/profile_images/1924757770013745154/v46T0yH7_400x400.jpg`}
        />
        <meta name="twitter:image:alt" content="JOÃO JUNQUEIRA" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* LinkedIn specific */}
        <meta
          property="og:image:secure_url"
          content={`https://pbs.twimg.com/profile_images/1924757770013745154/v46T0yH7_400x400.jpg`}
        />

        {/* Additional social media tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://junqueira.work" />
        <meta
          property="og:title"
          content="JOÃO JUNQUEIRA | Cybersecurity Engineer & Developer"
        />
        <meta
          property="og:description"
          content="Portfolio of JOÃO JUNQUEIRA, a cybersecurity engineer and developer creating secure digital experiences."
        />
        <meta property="og:site_name" content="JOÃO JUNQUEIRA" />

        {/* Cache control for better refreshing */}
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
