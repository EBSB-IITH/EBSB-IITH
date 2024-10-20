import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar";
import Link from "next/link";

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
        className={`${leagueSpartan.className} antialiased `}
      >
        <div className="absolute top-0 z-20 w-full">
          <div className={'flex flex-row pt-4 px-4 lg:py-6 align-middle justify-between lg:justify-center'}>
            <Link href="/">
              <Image
                src="/ebsb-logo.png"
                alt="EBSB Logo"
                width={60}
                height={60}
                className={'hidden lg:block lg:mx-8'}
              />
            </Link>

            <NavBar />
            <Link href="/">
              <Image
                src="/ebsb-logo.png"
                alt="EBSB Logo"
                width={50}
                height={50}
                className={'block lg:hidden lg:mx-8'}
              />
            </Link>
            <Image
              src="/iith-logo.png"
              alt="EBSB Logo"
              width={45}
              height={45}
              className={'hidden lg:block lg:mx-8'}
            />
          </div>
        </div>

        {children}
        <Footer />
      </body>
    </html>
  );
}
