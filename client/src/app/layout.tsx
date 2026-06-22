import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientScript from "@/components/ClientScript";

export const metadata: Metadata = {
  title: "CodeVector — Discover products you'll love",
  description: "Browse thousands of products across dozens of categories. Find exactly what you need with our curated catalog.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-olive-950 font-sans">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
        <ClientScript />
      </body>
    </html>
  );
}
