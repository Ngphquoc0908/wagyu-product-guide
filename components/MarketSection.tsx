"use client";

import React, { useState } from 'react';
import { MarketEntry } from '@/types/wagyu';
import { Store, ExternalLink, Search, ChevronRight, X } from 'lucide-react';
import { InstagramIcon } from '@/components/Icons';
import { Language, translations } from '@/lib/i18n';

interface MarketSectionProps {
  entries: MarketEntry[];
  currentLang?: Language;
}

export default function MarketSection({ entries, currentLang = 'vi' }: MarketSectionProps) {
  const [search, setSearch] = useState<string>('');
  const [selectedEntry, setSelectedEntry] = useState<MarketEntry | null>(null);

  const t = translations[currentLang].marketSection;

  const filtered = entries.filter(e => {
    return !search ||
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.description.toLowerCase().includes(search.toLowerCase()) ||
      e.notes.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="space-y-6">
      
      {/* Intro Header */}
      <div className="sandstone-surface p-6 rounded-2xl border border-neutral-800 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-[#ef4444] font-black text-xs uppercase tracking-wider mb-1">
            <Store className="w-4 h-4" />
            <span className={currentLang === 'ja' ? 'font-jp' : ''}>{t.subtitle}</span>
          </div>
          <h3 className={`font-display text-2xl font-black text-white ${currentLang === 'ja' ? 'font-jp' : ''}`}>
            {t.title}
          </h3>
          <p className={`text-sm text-neutral-400 mt-1 max-w-2xl font-normal ${currentLang === 'ja' ? 'font-jp' : ''}`}>
            {t.desc}
          </p>
        </div>

        {/* Search */}
        <div className="w-full md:w-72">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-neutral-500" />
            <input
              type="text"
              placeholder={currentLang === 'ja' ? '市場・企業名で検索...' : currentLang === 'en' ? 'Search market, wholesaler...' : 'Tìm đơn vị, công ty, thành phố...'}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-neutral-700 text-sm focus:outline-none focus:border-[#ef4444] bg-neutral-900 text-white placeholder-neutral-500"
            />
          </div>
        </div>
      </div>

      {/* Grid of Market Entries */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            className="sandstone-surface p-5 rounded-2xl border border-neutral-800 shadow-md hover:border-[#ef4444] transition flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700">
                  {item.id}
                </span>
                {item.urls.some(u => u.includes('instagram.com')) && (
                  <span className="text-red-400 flex items-center gap-1 text-[11px] font-semibold">
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </span>
                )}
              </div>

              <h4 className="font-display font-extrabold text-white text-base leading-snug line-clamp-2 font-jp">
                {item.name}
              </h4>

              {item.description && (
                <p className="text-xs text-neutral-400 mt-2 line-clamp-3 leading-relaxed font-jp">
                  {item.description}
                </p>
              )}

              {item.notes && (
                <div className="mt-3 p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-[11px] text-neutral-400 line-clamp-2 font-jp">
                  {item.notes}
                </div>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between">
              <button
                onClick={() => setSelectedEntry(item)}
                className="text-xs font-bold text-[#ef4444] hover:text-white inline-flex items-center gap-1 transition"
              >
                <span className={currentLang === 'ja' ? 'font-jp' : ''}>
                  {currentLang === 'ja' ? '詳細を見る' : currentLang === 'en' ? 'Details' : 'Xem chi tiết'}
                </span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              {item.urls.length > 0 && (
                <a
                  href={item.urls[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full bg-neutral-800 hover:bg-[#dc2626] text-white transition"
                  title={currentLang === 'ja' ? '外部リンクを開く' : 'Truy cập liên kết'}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal Detail for Market Entry */}
      {selectedEntry && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#141414] w-full max-w-2xl rounded-3xl p-6 border border-neutral-800 text-neutral-100 shadow-2xl relative">
            <button
              onClick={() => setSelectedEntry(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-950/80 text-red-300 border border-red-800 inline-block mb-3">
              {selectedEntry.id}
            </span>

            <h3 className="font-display text-2xl font-black text-white leading-snug font-jp">
              {selectedEntry.name}
            </h3>

            <div className="mt-4 space-y-4 text-sm text-neutral-300">
              {selectedEntry.description && (
                <div className="bg-neutral-900 p-4 rounded-xl border border-neutral-800 font-jp leading-relaxed">
                  <h5 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">
                    {currentLang === 'ja' ? '概要・紹介' : currentLang === 'en' ? 'Overview' : 'Thông tin & Giới thiệu'}
                  </h5>
                  <p>{selectedEntry.description}</p>
                </div>
              )}

              {selectedEntry.notes && (
                <div className="bg-neutral-900 p-4 rounded-xl border border-neutral-800 font-jp leading-relaxed">
                  <h5 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">
                    {currentLang === 'ja' ? '特記事項・データ' : currentLang === 'en' ? 'Notes & Details' : 'Ghi chú & Dữ liệu'}
                  </h5>
                  <p className="whitespace-pre-line">{selectedEntry.notes}</p>
                </div>
              )}

              {selectedEntry.urls.length > 0 && (
                <div className="pt-2">
                  <h5 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                    {currentLang === 'ja' ? '公式ウェブサイト・関連リンク' : currentLang === 'en' ? 'Official Links' : 'Liên kết website & Trang chính thức'}:
                  </h5>
                  <div className="space-y-1.5">
                    {selectedEntry.urls.map((url, uIdx) => (
                      <a
                        key={uIdx}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs text-neutral-300 hover:text-white transition"
                      >
                        <span className="truncate max-w-[420px] font-mono">{url}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#ef4444]" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}