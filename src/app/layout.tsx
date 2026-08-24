import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const viewport: Viewport = {
  themeColor: "#11141c",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Chaughule Balaji — Full-Stack Developer & Team Leader | Data Scientist",
  description:
    "Full-Stack Developer and Team Leader with 2 years of practical experience building scalable web applications, secure e-commerce architectures, and cloud infrastructure across Next.js, React, Node.js, NestJS, TypeScript, PostgreSQL, and AWS.",
  keywords: [
    "Chaughule Balaji",
    "Balaji Chaughule",
    "Full-Stack Developer",
    "Team Leader",
    "Data Scientist",
    "Next.js Developer",
    "React Developer",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "TypeScript",
    "Software Engineer",
    "YJ Developers",
  ],
  authors: [{ name: "Chaughule Balaji", url: "https://chaughulebalaji.tech" }],
  creator: "Chaughule Balaji",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chaughulebalaji.tech",
    title: "Chaughule Balaji — Full-Stack Developer & Team Leader",
    description:
      "Engineering scalable web applications, e-commerce architectures, and robust cloud systems.",
    siteName: "Chaughule Balaji Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaughule Balaji — Full-Stack Developer & Team Leader",
    description:
      "Engineering scalable web applications, e-commerce architectures, and robust cloud systems.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark scroll-smooth">
      <body
        className="min-h-screen bg-background text-foreground antialiased selection:bg-blue-600 selection:text-white"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
