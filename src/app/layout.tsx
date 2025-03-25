import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digitaalgelijk - Hardware Opkopen, Recyclen en Data Verwijderen",
  description: "Uw betrouwbare partner voor hardware inkoop, recycling en veilige dataverwijdering. Wij kopen uw gebruikte computers, laptops, smartphones en tablets op, recyclen hardware en verwijderen data veilig.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  robots: "index, follow",
  applicationName: "Digitaalgelijk",
  keywords: ["IT hardware", "recycling", "dataverwijdering", "circulaire economie", "GDPR compliance"],
  authors: [{ name: "Digitaalgelijk", url: "https://digitaalgelijk.nl" }],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://digitaalgelijk.nl",
    title: "Digitaalgelijk - Uw partner voor duurzame IT-oplossingen",
    description: "Wij kopen uw gebruikte IT-apparatuur op, wissen data veilig en geven hardware een tweede leven.",
    siteName: "Digitaalgelijk",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link 
          rel="preconnect" 
          href="https://fonts.googleapis.com" 
          crossOrigin="anonymous"
        />
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#2563eb" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body
        className={`${inter.variable} antialiased min-h-screen overflow-y-auto`}
      >
        <ThemeProvider>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white focus:text-blue-600 focus:z-50">
            Spring naar hoofdinhoud
          </a>
          <Navbar />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
