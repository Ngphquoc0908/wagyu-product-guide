"use client";

import React from 'react';
import { RefreshCw } from 'lucide-react';
import { Language, translations } from '@/lib/i18n';

interface NavbarProps {
  onRefresh: () => void;
  isLoading: boolean;
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function Navbar({
  onRefresh,
  isLoading,
  currentLang,
  onLanguageChange
}: NavbarProps) {
  const t = translations[currentLang].navbar;

  return (
    <header className="sticky top-0 z-40 bg-[#0c0a09]/95 backdrop-blur-md border-b border-neutral-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-3">
          
          {/* Brand Title (Clean luxury typography in White & Red) */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <span className="font-display font-black text-xl sm:text-2xl md:text-3xl tracking-wider text-white">
                WAGYU <span className="text-[#ef4444]">MASTER</span>
              </span>
              <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700">
                Japan Quality
              </span>
            </div>
            <p className={`text-xs text-neutral-400 font-medium tracking-wide ${currentLang === 'ja' ? 'font-jp' : ''}`}>
              {t.brandSub}
            </p>
          </div>

          {/* Right Header: Language Switcher & Controls */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Handbook Badge */}
            <span className="hidden lg:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-neutral-300 bg-neutral-900 border border-neutral-800">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
              <span className={currentLang === 'ja' ? 'font-jp' : ''}>{t.badge}</span>
            </span>

            {/* Language Switcher: Tiếng Việt (Bản gốc) | English | 日本語 */}
            <div className="flex items-center p-1 rounded-full bg-neutral-900 border border-neutral-800 shadow-inner">
              <button
                type="button"
                onClick={() => onLanguageChange('vi')}
                className={`px-2.5 sm:px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                  currentLang === 'vi'
                    ? 'bg-[#dc2626] text-white shadow-md shadow-red-950/60'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Tiếng Việt (Bản chuẩn gốc)"
              >
                <span>🇻🇳</span>
                <span className="hidden sm:inline">VI</span>
              </button>

              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 sm:px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                  currentLang === 'en'
                    ? 'bg-[#dc2626] text-white shadow-md shadow-red-950/60'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="English (Wagyu Specs)"
              >
                <span>🇬🇧</span>
                <span className="hidden sm:inline">EN</span>
              </button>

              <button
                type="button"
                onClick={() => onLanguageChange('ja')}
                className={`px-2.5 sm:px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                  currentLang === 'ja'
                    ? 'bg-[#dc2626] text-white shadow-md shadow-red-950/60'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="日本語 (和牛部位ハンドブック)"
              >
                <span>🇯🇵</span>
                <span className="font-jp">日</span>
                <span className="hidden sm:inline font-jp">本語</span>
              </button>
            </div>

            {/* Discreet Refresh Button */}
            <button
              onClick={onRefresh}
              disabled={isLoading}
              title={t.refreshTooltip}
              className="p-2 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-700 transition shadow-xs disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin text-[#ef4444]' : ''}`} />
            </button>

          </div>

        </div>
      </div>
    </header>
  );
}
