import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hacktoberfest.awslpu.in"),
  title: "Hacktoberfest @ LPU",
  description:
    "Hacktoberfest at Lovely Professional University — build, contribute, and celebrate open source with AWS Student Builder Group LPU.",
  keywords: [
    "Hacktoberfest",
    "Hacktoberfest LPU",
    "Open Source",
    "AWS Student Builder Group",
    "LPU",
    "Lovely Professional University",
  ],
  authors: [
    {
      name: "AWS Student Builder Group LPU",
    },
  ],
  creator: "AWS Student Builder Group LPU",
  openGraph: {
    title: "Hacktoberfest @ LPU",
    description:
      "Build. Contribute. Celebrate Open Source at Lovely Professional University.",
    url: "https://hacktoberfest.awslpu.in",
    siteName: "Hacktoberfest @ LPU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hacktoberfest @ LPU",
    description:
      "Build. Contribute. Celebrate Open Source at Lovely Professional University.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}