import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { PortfolioProvider } from '@/context/PortfolioContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pungki - Personal Portfolio',
  description: 'Personal portfolio website showcasing my work and experience',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <PortfolioProvider>
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
        </PortfolioProvider>
      </body>
    </html>
  );
}
