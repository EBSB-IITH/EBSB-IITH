import type { Metadata, Viewport } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar";

const leagueSpartan = League_Spartan({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "EBSB IITH",
  description: "EBSB Club Website of IITH",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width'
}

export default function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" id="html">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`relative ${leagueSpartan.className} antialiased `}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
