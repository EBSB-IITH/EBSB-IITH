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
