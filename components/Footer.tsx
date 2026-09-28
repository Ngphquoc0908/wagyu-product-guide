"use client";

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-neutral-400 py-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col">
            <div className="font-display font-black text-xl text-white tracking-wider">
              WAGYU <span className="text-[#ef4444]">MASTER</span>
            </div>
            <p className="text-xs text-neutral-400 mt-1 font-medium">
              Handbook &amp; Japanese Wagyu Product Classification System - Design &amp; Curated by Jay
            </p>
          </div>

          <div className="text-center md:text-right text-xs text-neutral-500 space-y-1 font-normal">
            <p>Dữ liệu tích hợp từ JMGA, Toyonishi Farm, Hiệp hội Bò Kobe &amp; Cẩm nang Wagyu Master.</p>
            <p>© 2026 Wagyu Master. Tra cứu tiêu chuẩn các bộ phận thịt bò Nhật Bản.</p>
          </div>

        </div>
      </div>
    </footer>
  );
}