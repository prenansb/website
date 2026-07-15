import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description = `${profile.role} based in ${profile.location}. ${profile.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://prenansb.dev"),
  title: {
    default: profile.name,
    template: `%s — ${profile.name}`,
  },
  description,
  keywords: [
    "Pedro Renan",
    "Software Engineer",
    "Design Engineer",
    "React",
    "React Native",
    "Next.js",
    "Frontend",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: profile.name,
    description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: profile.name,
    description,
    creator: "@prenansb",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
