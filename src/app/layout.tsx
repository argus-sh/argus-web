import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Argus SH - Simple, Powerful CLI Tools",
  description:
    "Thoughtfully designed command-line utilities for the modern developer. Building a new class of CLI tools with simplicity, type-safety, and elegance.",
  keywords: [
    "CLI",
    "command-line",
    "developer tools",
    "TypeScript",
    "argus-ts",
    "terminal",
  ],
  authors: [{ name: "Argus SH" }],
  openGraph: {
    title: "Argus SH - Simple, Powerful CLI Tools",
    description:
      "Thoughtfully designed command-line utilities for the modern developer",
    url: "https://argus.sh",
    siteName: "Argus SH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Argus SH - Simple, Powerful CLI Tools",
    description:
      "Thoughtfully designed command-line utilities for the modern developer",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${garamond.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
