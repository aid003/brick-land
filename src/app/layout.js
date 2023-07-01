
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "КЕРАМИЧЕСКИЕ БЛОКИ",
  description: "ТЁПЛАЯ КЕРАМИКА ДЛЯ ЛЮБЫХ СТРОИТЕЛЬНЫХ ЗАДАЧ ВЫБОР ИЗ ШЕСТИ ПОПУЛЯРНЫХ БРЕНДОВ В НАЛИЧИИ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
