import './globals.css';
import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BroCars - Buy & Sell Used Cars',
  description: '  Dwarka\'s most trusted platform to buy and sell used cars. Get best deals on pre-owned cars with warranty and easy EMI options.',
  keywords: 'used cars, buy cars, sell cars, car finance, car loan, EMI calculator, BroCars',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
