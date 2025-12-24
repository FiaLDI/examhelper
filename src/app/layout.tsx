import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";


const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin", "cyrillic"],
})

export const metadata: Metadata = {
  title: "Leonid Viktorovich",
  description: "Resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased bg-[#323232]`}
      >
        {children}
      </body>
    </html>
  );
}
