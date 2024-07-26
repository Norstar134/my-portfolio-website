import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deanna Woodhouse-Hawkins Portfolio",
  description: "The Portfolio Webstie for Deanna Woodhouse-Hawkins",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
      <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
