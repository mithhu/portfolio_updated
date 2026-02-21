import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Mahamudul Hasan | Senior Software Engineer",
  description:
    "Portfolio of Mahamudul Hasan Mithhu — Senior Software Engineer with 6+ years of experience in React, TypeScript, frontend architecture, and full-stack development.",
  keywords: [
    "Software Engineer",
    "Frontend Developer",
    "React",
    "TypeScript",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Mahamudul Hasan" }],
  openGraph: {
    title: "Mahamudul Hasan | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in React, TypeScript, and modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
