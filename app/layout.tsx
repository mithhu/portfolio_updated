import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahamudul Hasan Mithhu — Software Engineer",
  description:
    "Software Engineer 2 at Skyscanner. Building considered web experiences, full-stack systems, and OpenMemory: a local-first memory app with published ML research.",
  authors: [{ name: "Mahamudul Hasan Mithhu" }],
  openGraph: {
    title: "Mahamudul Hasan Mithhu — Software Engineer",
    description:
      "Selected work, engineering notes, and a career building products. Currently at Skyscanner.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
