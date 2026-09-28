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
      <body className="antialiased min-h-screen text-neutral-100 bg-[#0c0a09] font-serif selection:bg-red-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}