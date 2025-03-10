import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar";
import ScrollTop from "@/components/scrollTop";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MegaFun",
  description: "Generated by create next app",
};

const role = "admin";
const isLoggedIn = true;
const userId = 123456;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar role={role} isLoggedIn={isLoggedIn} userId={userId} />
        {children}
        <ScrollTop />
        <Footer role={role} userId={userId} />
      </body>
    </html>
  );
}
