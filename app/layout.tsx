import React from "react";
import "css/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { OFFICIAL_DOMAIN_URL } from "./constants";

const inter = Inter({
  style: "normal",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: [],
});

export const metadata: Metadata = {
  title: "Abrasoft | Software Development",
  description: "Abrasoft is a software development company.",
  icons: [
    { url: "/favicon.ico", sizes: "any" },
    { type: "image/x-icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
    { type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
    { type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
    {
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: OFFICIAL_DOMAIN_URL,
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
