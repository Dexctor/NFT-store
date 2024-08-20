import type { Metadata } from "next";
import Navbar from '../app/components/Navbar/Navbar';
import Footer from '../app/components/Footer/Footer';
import { Inter } from "next/font/google";
import "./globals.css";
import ClientProvider from '../app/components/ClientProvider';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <ClientProvider>
          <Navbar />
          {children}
          <Footer />
        </ClientProvider>
      </body>
    </html>
  );
}