import type { Metadata } from "next";
import { Inter, Manrope, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { personJsonLd, siteConfig, websiteJsonLd } from "@/lib/metadata";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-serif-accent", display: "swap", style: ["italic", "normal"] });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.baseUrl),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    locale: "en_IN",
    siteName: "Pratham Wankhade — Portfolio",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: siteConfig.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/og.svg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('pw-theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='dark';}})();`,
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }} />
      </head>
      <body
        id="top"
        className={`${manrope.variable} ${inter.variable} ${fraunces.variable} ${jetbrains.variable} flex min-h-full flex-col`}
        style={{ fontFamily: "var(--font-body)" }}
      >
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
