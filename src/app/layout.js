import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Abdullah Iqbal - Full Stack Web Developer | Portfolio",
  description: "Professional full-stack web developer specializing in React, Next.js, Node.js, and modern web technologies. Available for freelance projects.",
  keywords: ["Full Stack Developer", "Web Developer", "React", "Next.js", "Node.js", "Freelance Developer", "Abdullah Iqbal"],
  authors: [{ name: "Abdullah Iqbal" }],
  creator: "Abdullah Iqbal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Abdullah Iqbal - Full Stack Web Developer",
    description: "Professional full-stack web developer specializing in React, Next.js, Node.js, and modern web technologies.",
    siteName: "Abdullah Iqbal Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abdullah Iqbal - Full Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Iqbal - Full Stack Web Developer",
    description: "Professional full-stack web developer specializing in React, Next.js, Node.js, and modern web technologies.",
    images: ["/og-image.jpg"],
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
