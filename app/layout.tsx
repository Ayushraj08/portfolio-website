import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayush's Portfolio",
  description: "My portfolio made with Next.js, TypeScript and Tailwind CSS",
  icons: {
    icon: "/favicon-v2.ico",              // Default favicon
    shortcut: "/favicon-v2.ico",          // For legacy browsers
    apple: "/apple-touch-icon.png",    // For iOS home screen
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
