import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "@/stack/server";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "GTM Agency UK | Go-To-Market Strategy Consultants | GTM Quest",
    template: "%s | GTM Quest"
  },
  description: "AI-powered GTM agency helping UK companies launch and scale. Free GTM strategy tools, expert consultants, and comprehensive go-to-market resources. Get your custom GTM plan today.",
  keywords: ["gtm agency", "gtm agency uk", "go-to-market strategy", "gtm consultant", "gtm strategy", "product launch", "market entry", "gtm planning", "b2b gtm", "saas gtm"],
  authors: [{ name: "GTM Quest" }],
  creator: "GTM Quest",
  publisher: "GTM Quest",
  metadataBase: new URL("https://gtm.quest"),
  alternates: {
    canonical: "https://gtm.quest",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://gtm.quest",
    siteName: "GTM Quest - GTM Agency UK Specialist",
    title: "AI-Powered GTM Agency | Go-To-Market Strategy UK",
    description: "Free GTM strategy tools and expert consultants. Chat with our AI to create your custom go-to-market plan.",
    // Images auto-generated from app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "GTM Quest | AI-Powered GTM Agency",
    description: "Free GTM strategy tools and expert consultants. Get your custom go-to-market plan.",
    site: "@gtmquest",
    creator: "@gtmquest",
    // Images auto-generated from app/twitter-image.tsx
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD Structured Data for the site
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://gtm.quest/#organization",
  name: "GTM Quest",
  alternateName: ["GTM Quest", "GTMQuest", "GTM Agency UK", "GTM Agency", "Go-to-Market Agency"],
  url: "https://gtm.quest",
  logo: {
    "@type": "ImageObject",
    url: "https://gtm.quest/logo.svg",
    width: "512",
    height: "512"
  },
  image: "https://gtm.quest/logo.svg",
  description: "AI-powered GTM agency providing free strategy tools, expert consultants, and comprehensive go-to-market resources for UK companies.",
  foundingDate: "2025",
  sameAs: [
    "https://twitter.com/gtmquest",
    "https://linkedin.com/company/gtmquest"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: "https://gtm.quest/contact",
    availableLanguage: "English"
  },
  areaServed: {
    "@type": "Country",
    name: "United Kingdom"
  }
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "GTM Quest",
  alternateName: ["GTM Quest", "GTMQuest", "GTM Agency UK"],
  url: "https://gtm.quest",
  description: "AI-powered GTM agency with free strategy tools and expert consultants. Get your custom go-to-market plan.",
  inLanguage: "en-GB",
  publisher: {
    "@type": "Organization",
    name: "GTM Quest",
    url: "https://gtm.quest",
    logo: {
      "@type": "ImageObject",
      url: "https://gtm.quest/logo.svg"
    }
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://gtm.quest/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-white text-gray-900`}
      >
        <StackProvider app={stackServerApp}>
          <StackTheme>
            <Suspense fallback={<div className="h-16 bg-white border-b border-gray-200" />}>
              <Navigation />
            </Suspense>
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <CookieConsent />
          </StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}
