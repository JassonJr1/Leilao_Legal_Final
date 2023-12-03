import NavBar from "@/components/layout/header/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./providers";
import FooterWithSocialMediaIcons from "@/components/layout/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leilão Legal",
  description: "Leilão de Centavos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col  min-h-screen justify-between`}
      >
        <NextAuthProvider>
          <header>
            <NavBar />
          </header>
          <div>{children}</div>
          <footer className="flex flex-col w-[80%] m-auto">
            <FooterWithSocialMediaIcons />
          </footer>
        </NextAuthProvider>
      </body>
    </html>
  );
}
