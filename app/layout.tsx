import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

const body = Manrope({ variable: "--font-body", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://hot-daily-deals.vercel.app"),
  title: "Hot Daily Deals — The bin store where the price drops every day · Orange, NJ",
  description:
    "Brand-new Amazon overstock and returns, restocked every week on Main Street in Orange, New Jersey. One flat price across the whole store, and it falls a little lower every single day. Come early for the pick, come late for the steal.",
  openGraph: {
    title: "Hot Daily Deals · Orange, NJ",
    description: "The bin store where the price drops every day. Brand-new finds, restocked weekly on Main St.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${body.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=gambetta@400,401,500,501,600,601,700&display=swap"
        />
      </head>
      <body className="hdd-body min-h-screen">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
