"use client";

import React from 'react';
import Image from 'next/image';
import { Award, ShieldCheck, Flame, BookOpen, Layers } from 'lucide-react';

interface HeroProps {
  totalCuts: number;
  totalDocs: number;
  totalKobe: number;
  totalMarket: number;
}

export default function Hero({ totalCuts, totalDocs, totalKobe, totalMarket }: HeroProps) {
  return (
    <section className="relative overflow-hidden pb-12 sm:pb-16 border-b border-neutral-800">
      
      {/* 1. Full-Width Blended Hero Image Banner */}
      <div className="relative w-full h-[360px] sm:h-[460px] md:h-[540px] lg:h-[620px] overflow-hidden bg-black select-none">
        {/* The Kuroge Wagyu Cattle Image */}
        <Image
          src="/hero-wagyu-cattle.png"
          alt="Bò đen Kuroge Wagyu Nhật Bản - Dòng dõi Tajima thuần chủng"
          fill
          priority
          quality={95}
          className="object-cover object-center transform scale-100 transition-transform duration-1000 ease-out hover:scale-105"
          sizes="100vw"
        />

        {/* Seamless Blend Overlays into the dark sandstone background */}
        {/* Bottom smooth fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-[#0c0a09]/60 to-transparent" />
        
        {/* Top soft shadow under Navbar */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#0c0a09]/90 to-transparent pointer-events-none" />
        
        {/* Lateral vignette (left & right edges) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a09]/80 via-transparent to-[#0c0a09]/80 pointer-events-none" />

        {/* Floating badge inside banner */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-center px-4 w-full max-w-4xl pointer-events-none">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-white text-xs sm:text-sm font-bold tracking-wider shadow-2xl border border-red-500/40 uppercase">
            <Flame className="w-4 h-4 fill-[#ef4444] text-[#ef4444]" />
            <span>Kuroge Washu • Japanese Black Cattle &amp; Tajima Lineage</span>
          </div>
        </div>
      </div>

      {/* 2. Main Content & Headlines */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 sm:pt-12">
        
        {/* Headline in White & Radiant Red */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase leading-none">
            <span className="text-white">WAGYU </span>
            <span className="text-[#ef4444]">PRODUCT </span>
            <span className="text-white">GUIDE</span>
          </h1>

          <div className="mt-4 flex flex-col items-center justify-center">
            <h2 className="text-lg sm:text-2xl font-bold tracking-wide uppercase text-neutral-300">
              BY WAGYU EXPERTS, FOR CULINARY MASTERS
            </h2>
            <div className="w-24 h-1 bg-[#ef4444] rounded-full my-2.5 shadow-sm shadow-red-500/50" />
            <p className="text-xs sm:text-sm font-bold text-[#ef4444] tracking-widest uppercase">
              JAPAN ARTISAN QUALITY
            </p>
          </div>

          <p className="mt-4 text-sm sm:text-base text-neutral-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Hệ thống tra cứu các bộ phận/phần cắt Wagyu chuẩn hóa theo 4 vùng thân thịt chính, tích hợp thông tin giải phẫu cơ học, đánh giá vân mỡ, cẩm nang phân hạng JMGA, Bò Kobe và sàn đấu giá, chợ thịt Nhật Bản &amp; các tài liệu về Wagyu.
          </p>
        </div>

        {/* 3. 4 Stats Cards in Dark Sandstone */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          
          <div className="sandstone-surface p-4 rounded-2xl border border-neutral-800 shadow-md hover:border-[#ef4444] transition group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-950/80 border border-red-800/60 flex items-center justify-center text-[#ef4444] group-hover:bg-[#ef4444] group-hover:text-white transition">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-black text-white">{totalCuts || 45}</div>
                <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Bộ Phận Chuẩn</div>
              </div>
            </div>
          </div>

          <div className="sandstone-surface p-4 rounded-2xl border border-neutral-800 shadow-md hover:border-neutral-500 transition group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-neutral-800/80 border border-neutral-700 flex items-center justify-center text-neutral-200 group-hover:bg-white group-hover:text-black transition">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-black text-white">4 Vùng</div>
                <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Thân Thịt Lớn</div>
              </div>
            </div>
          </div>

          <div className="sandstone-surface p-4 rounded-2xl border border-neutral-800 shadow-md hover:border-[#ef4444] transition group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-950/80 border border-red-800/60 flex items-center justify-center text-[#ef4444] group-hover:bg-[#ef4444] group-hover:text-white transition">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-black text-white">{totalDocs || 77}</div>
                <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Tài Liệu &amp; Specs</div>
              </div>
            </div>
          </div>

          <div className="sandstone-surface p-4 rounded-2xl border border-neutral-800 shadow-md hover:border-neutral-500 transition group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-neutral-800/80 border border-neutral-700 flex items-center justify-center text-neutral-200 group-hover:bg-white group-hover:text-black transition">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-black text-white">{totalKobe || 23} + {totalMarket || 60}</div>
                <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Kobe &amp; Chợ Sỉ</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}