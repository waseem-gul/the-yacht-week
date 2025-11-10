import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import content from "@/data/content.json";

export const metadata: Metadata = {
  title: {
    default: `${content.site.name} - ${content.site.tagline}`,
    template: `%s | ${content.site.name}`,
  },
  description:
    "Join thousands of adventurers sailing the world's most beautiful waters. Experience unforgettable sailing adventures with The Yacht Week.",
  keywords: [
    "yacht week",
    "sailing",
    "adventure",
    "mediterranean",
    "caribbean",
    "yacht charter",
    "sailing holiday",
  ],
  authors: [{ name: content.site.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: content.site.name,
    title: `${content.site.name} - ${content.site.tagline}`,
    description:
      "Join thousands of adventurers sailing the world's most beautiful waters.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${content.site.name} - ${content.site.tagline}`,
    description:
      "Join thousands of adventurers sailing the world's most beautiful waters.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: content.site.name,
    description: "Join thousands of adventurers sailing the world's most beautiful waters. Experience unforgettable sailing adventures with The Yacht Week.",
    url: "https://www.theyachtweek.com",
    logo: "https://www.theyachtweek.com/logo.png",
    sameAs: [
      "https://www.instagram.com/theyachtweek",
      "https://www.facebook.com/theyachtweek",
      "https://twitter.com/theyachtweek",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: ["English"],
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          Skip to main content
        </a>
        <Header />
        <main className="pt-16 lg:pt-20" id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

