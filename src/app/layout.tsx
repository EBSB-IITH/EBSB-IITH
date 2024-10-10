import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Footer from "@/components/Footer"

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-stone-300">
          <div className={'flex flex-row mr-36 py-4 align-middle justify-center'}>
            <Image
              src="/ebsb-logo.png"
              alt="EBSB Logo"
              width={60}
              height={60}
              className={'mx-8'}
            />
            <NavBar />
          </div>
        </div>

        {children}
        <Footer />
      </body>
    </html>
  );
}
