import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SSP Labs | Institutional-Grade Financial Infrastructure",
  description:
    "Built by hedge fund operators who've managed hundreds of millions in capital. We architect the systems that power alpha generation, tokenization, and market infrastructure for DeFi and CeFi.",
  keywords: [
    "DeFi infrastructure",
    "CeFi infrastructure",
    "algorithmic trading",
    "tokenization",
    "market making",
    "blockchain indexers",
    "hedge fund technology",
  ],
  openGraph: {
    title: "SSP Labs | Institutional-Grade Financial Infrastructure",
    description:
      "Built by hedge fund operators. Institutional-grade infrastructure for DeFi and CeFi.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
