import type { Metadata } from "next";
import Navbar from '../app/components/Navbar/Navbar';
import Footer from '../app/components/Footer/Footer'; // Importez le Footer
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NFT Tailwind Template",
  description: "Generated by create next app",
  icons: '/favicon.ico',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar /> {/* Affichez la Navbar en haut */}
        {children}  {/* Contenu principal de la page */}
        <Footer />  {/* Affichez le Footer en bas */}
      </body>
    </html>
  );
}
