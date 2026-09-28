"use client";

import React, { useState } from 'react';
import { MarketEntry } from '@/types/wagyu';
import { Store, ExternalLink, Search, ChevronRight, X } from 'lucide-react';
import { InstagramIcon } from '@/components/Icons';

interface MarketSectionProps {
  entries: MarketEntry[];
}

export default function MarketSection({ entries }: MarketSectionProps) {
  const [search, setSearch] = useState<string>('');
  const [selectedEntry, setSelectedEntry] = useState<MarketEntry | null>(null);

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
            <span>Thị Trường Bán Buôn, Sàn Đấu Giá &amp; Cửa Hàng Thịt Bò Nhật</span>
          </div>
          <h3 className="font-display text-2xl font-black text-white">
            Hệ Thống Đơn Vị Phân Phối &amp; Đào Tạo Nghề Thịt Tại Nhật Bản
          </h3>
          <p className="text-sm text-neutral-400 mt-1 max-w-2xl font-normal">
            Các trường đào tạo chính quy (Federal Meat Academy), công ty thu mua đấu giá nguyên con (Shodaken, Shinsei-ya), xưởng pha lóc sỉ và shop bán lẻ Kuroge Wagyu.
          </p>
        </div>

        {/* Search */}
        <div className="w-full md:w-72">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-neutral-500" />
            <input
              type="text"
              placeholder="Tìm đơn vị, công ty, thành phố..."
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
              <div className="flex items-center gap-2 mb-2">
                <span className="w-7 h-7 rounded-full bg-red-950/80 border border-red-800 text-red-300 flex items-center justify-center font-bold text-xs">
                  {item.id || idx + 1}
                </span>
                <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                  Đơn Vị Chuyên Môn
                </span>
              </div>

              <h4 className="font-display font-extrabold text-white text-sm leading-snug line-clamp-2">
                {item.name}
              </h4>

              <p className="mt-2 text-xs text-neutral-400 line-clamp-3 leading-relaxed font-normal">
                {item.description || item.notes}
              </p>
            </div>

            {/* Actions */}
            <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                {item.urls.map((u, uIdx) => {
                  const isInsta = u.includes('instagram.com');
                  return (
                    <a
                      key={uIdx}
                      href={u}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={u}
                      className={`p-1.5 rounded-full border transition ${
                        isInsta
                          ? 'bg-rose-950/80 text-rose-300 border-rose-800 hover:bg-rose-900'
                          : 'bg-neutral-800 text-neutral-300 border-neutral-700 hover:bg-neutral-700'
                      }`}
                    >
                      {isInsta ? <InstagramIcon className="w-3.5 h-3.5" /> : <ExternalLink className="w-3.5 h-3.5" />}
                    </a>
                  );
                })}
              </div>

              <button
                onClick={() => setSelectedEntry(item)}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#ef4444] hover:underline"
              >
                <span>Xem hồ sơ</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedEntry && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#141414] max-w-2xl w-full rounded-3xl p-6 shadow-2xl border border-neutral-800 relative space-y-4 text-neutral-100">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-red-950/80 text-red-300 border border-red-800">
                  Hồ Sơ Doanh Nghiệp #{selectedEntry.id}
                </span>
                <h3 className="font-display text-lg font-black text-white mt-2">
                  {selectedEntry.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedEntry(null)}
                className="p-2 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {selectedEntry.description && (
              <div className="bg-neutral-900 p-4 rounded-xl border border-neutral-800 text-sm text-neutral-300 whitespace-pre-line leading-relaxed max-h-72 overflow-y-auto font-normal">
                {selectedEntry.description}
              </div>
            )}

            {selectedEntry.notes && (
              <div className="bg-red-950/30 p-4 rounded-xl border border-red-900/50 text-xs text-red-200 whitespace-pre-line">
                <span className="font-bold text-red-400">Ghi chú bổ sung: </span>
                {selectedEntry.notes}
              </div>
            )}

            {selectedEntry.urls.length > 0 && (
              <div className="pt-2 flex flex-wrap gap-2">
                {selectedEntry.urls.map((u, i) => (
                  <a
                    key={i}
                    href={u}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#dc2626] text-white text-xs font-semibold hover:bg-red-600 shadow-md"
                  >
                    <span>Truy cập Website / Instagram</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            )}

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedEntry(null)}
                className="px-4 py-1.5 rounded-full bg-neutral-800 text-white text-xs font-bold hover:bg-neutral-700"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}