/* eslint-disable react/no-children-prop */

import type { Metadata } from "next";
import Navbar from '../app/components/Navbar/Navbar';
import Footer from '../app/components/Footer/Footer';
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "NFT Store",
  description: "Découvrez et achetez des NFTs uniques sur notre plateforme.",
  icons: {
    icon: '/favicon.ico', 
  },
};

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
   
            <Navbar />
            {children}
            <Footer />
 
      </body>
    </html>
  );
}