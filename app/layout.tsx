import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SSR Amritapuri | Amrita Vishwa Vidyapeetham",
  description:
    "Student Social Responsibility (SSR) is a credit-based academic program, where we inspire and mentor the youth to run real-time community projects and come up with state-of-the-art solutions in order to address social issues, thereby evolve oneself altruistically and set an example for others to follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
