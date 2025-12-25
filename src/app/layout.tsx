import { Roboto } from "next/font/google";
import "./globals.css";
import { LanguageInit } from "@/features/language-switcher/ui/LanguageInit";
import { getLang } from "@/shared/utils/server/getLang";
import { ModalContainer } from "@/features/open-modal";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto-sans",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = await getLang();

  return (
    <html lang={lang}>
      <body className={`${roboto.variable} antialiased bg-[#323232]`}>
        <LanguageInit lang={lang} />
        {children}
        <ModalContainer />
      </body>
    </html>
  );
}
