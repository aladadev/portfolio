import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";

import "./globals.css";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { profile } from "@/data/profile";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
});

// This metadata object controls the default title and description for the static site.
// WHY: Centralized metadata improves SEO and keeps page identity aligned with the profile data source.
export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: profile.seoDescription,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

// This root layout wraps every page with fonts, navigation, and footer chrome.
// WHY: App Router layouts are the shared shell of a Next.js app, similar to having a top-level Scaffold that persists across screens.
export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body>
        <div className="site-shell editorial-grid py-4 sm:py-6 lg:py-8">
          <Navbar email={profile.email} />
          <div className="min-w-0">
            <main id="main-content">{children}</main>
            <Footer currentYear={new Date().getFullYear()} />
          </div>
        </div>
      </body>
    </html>
  );
}
