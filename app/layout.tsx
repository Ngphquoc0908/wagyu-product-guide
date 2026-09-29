import type { Metadata } from "next";
import { Lora, Playfair_Display } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WAGYU MASTER PRODUCT GUIDE | Cẩm Nang Bộ Phận Bò Wagyu Nhật Bản",
  description: "Hệ thống tra cứu các bộ phận/phần cắt Wagyu chuẩn hóa theo 4 vùng thân thịt chính, tích hợp thông tin giải phẫu cơ học, đánh giá vân mỡ, cẩm nang phân hạng JMGA, Bò Kobe và sàn đấu giá, chợ thịt Nhật Bản & các tài liệu về Wagyu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${lora.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen text-neutral-100 bg-[#0c0a09] font-serif selection:bg-red-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}