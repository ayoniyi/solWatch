import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Favicon from "@/public/favicon.ico";
import "./globals.css";
import "./ham.css";
import "aos/dist/aos.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solana Watch",
  description: "The First AI Wearables of Crypto.",
  icons: [{ rel: "icon", url: Favicon.src }],
  // icons: {
  //   icon: [
  //     {
  //       url: Favicon.src,
  //     },
  //   ],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
