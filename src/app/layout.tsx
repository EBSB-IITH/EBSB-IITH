import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-foreground">
          <div className={'flex flex-row py-6 align-middle justify-center'}>
            <Image
              src="/ebsb-logo.png"
              alt="EBSB Logo"
              width={60}
              height={60}
              className={'mx-8'}
            />
            <NavBar />
            <Image
              src="/iith-logo.png"
              alt="EBSB Logo"
              width={45}
              height={45}
              className={'mx-8'}
            />
          </div>
        </div>

        {children}
        <Footer />
      </body>
    </html>
  );
}
