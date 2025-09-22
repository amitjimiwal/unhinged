import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ClerkProvider } from "@clerk/nextjs";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unhinged Resume Generator",
  description:
    "Create your most chaotic and unhinged resume with our fun resume builder!",
  openGraph: {
    title: "Unhinged Resume Generator",
    description:
      "Create your most chaotic and unhinged resume with our fun resume builder!",
    images: [
      {
        url: "https://res.cloudinary.com/dejzy9q65/image/upload/v1757753393/Screenshot_2025-09-13_at_2.13.38_PM_glv8fa.png",
        width: 1200,
        height: 630,
        alt: "Unhinged Resume",
      },
    ],
    siteName: "Unhinged Resume",
  },
  twitter: {
    images: [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Analytics />
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
