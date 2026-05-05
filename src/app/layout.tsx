import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Abdalla Diaa | Frontend Developer Portfolio",
  description:
    "Modern, premium portfolio of Abdalla Diaa, a Frontend Developer specialized in React, Next.js, and high-end animations.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Abdalla Diaa",
    "Web Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
