import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../global.css";
import Footer from "@/Components/Footer/Footer";
import LenisProvider from "@/Components/Common/LenisProvider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "SRMD",
  description: "SRMD divine Touch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}>
        {/* <LenisProvider> */}
          {children}

          <Footer />
        {/* </LenisProvider> */}
      </body>
    </html>
  );
}

