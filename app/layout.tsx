import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const jetbrainsMono = localFont({
  src: [
    {
      path: "../public/JetBrains Mono/JetBrainsMono-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../public/JetBrains Mono/JetBrainsMono-Italic-VariableFont_wght.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sidhartha Mallick | Mobile Engineer & Builder",
  description: "Mobile Engineer at GoPay. Building products that actually work. Build; Measure; Learn.",
  keywords: ["Mobile Development", "iOS", "Flutter", "React Native", "Software Engineer", "GoPay"],
  authors: [{ name: "Sidhartha Mallick" }],
  creator: "Sidhartha Mallick",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://msidhartha7.github.io",
    title: "Sidhartha Mallick | Mobile Engineer & Builder",
    description: "Mobile Engineer at GoPay. Building products that actually work. Build; Measure; Learn.",
    siteName: "Sidhartha Mallick",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sidhartha Mallick | Mobile Engineer & Builder",
    description: "Mobile Engineer at GoPay. Building products that actually work. Build; Measure; Learn.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${jetbrainsMono.variable} antialiased bg-black text-white min-h-screen font-mono`}
      >
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
