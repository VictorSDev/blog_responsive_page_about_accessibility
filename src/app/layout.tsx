import type { Metadata } from "next";
import "./globals.css";
import { fonts } from "./fonts";

export const metadata: Metadata = {
  title: "Aplicativo Web Teste Acessivel",
  description: "Aplicativo Web Teste Acessivel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={fonts.rubik.variable}>
      <body>{children}</body>
    </html>
  );
}
