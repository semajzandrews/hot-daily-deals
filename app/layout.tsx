import type { Metadata } from "next";
import { Bodoni_Moda, Inter, Italiana } from "next/font/google";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

const display = Bodoni_Moda({ variable: "--font-display", subsets: ["latin"], weight: ["400","500","600"], style: ["normal","italic"] });
const body = Inter({ variable: "--font-body", subsets: ["latin"] });
const script = Italiana({ variable: "--font-script", subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Edgar Jewelry — Heirloom craft on Central Ave, Orange NJ",
  description: "Hand-set diamonds, custom rings, repairs, and appraisals. A 99-review neighborhood jeweler kept quietly excellent on Central Avenue, Orange NJ.",
  openGraph: { title: "Edgar Jewelry · Orange NJ", description: "Heirloom craft. Custom + repairs.", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${script.variable} antialiased`}>
      <body className="bg-velvet text-diamond velvet-grain min-h-screen">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
