import type { Metadata } from "next";
import Navbar from '../app/components/Navbar/Navbar';
import Footer from '../app/components/Footer/Footer';
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from 'next/dynamic';
import { Providers } from './Providers';

const inter = Inter({ subsets: ["latin"] });

const ClientProvider = dynamic(() => import('../app/components/ClientProvider'), { ssr: false });

const ReduxProvider = dynamic(
  () => import('../app/components/ReduxProvider').then((mod) => mod.ReduxProvider),
  { ssr: false }
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Providers>
          <ReduxProvider>
            <ClientProvider>
              <Navbar />
              {children}
              <Footer />
            </ClientProvider>
          </ReduxProvider>
        </Providers>
      </body>
    </html>
  );
}