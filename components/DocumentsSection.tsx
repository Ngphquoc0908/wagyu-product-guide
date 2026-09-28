"use client";

import React, { useState } from 'react';
import { WagyuDocument } from '@/types/wagyu';
import { BookOpen, ExternalLink, Download, Search } from 'lucide-react';

interface DocumentsSectionProps {
  documents: WagyuDocument[];
}

export default function DocumentsSection({ documents }: DocumentsSectionProps) {
  const [search, setSearch] = useState<string>('');

  const filtered = documents.filter(doc => {
    return !search || 
      doc.title.toLowerCase().includes(search.toLowerCase()) || 
      doc.description.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="space-y-6">
      
      {/* Intro Header */}
      <div className="sandstone-surface p-6 rounded-2xl border border-neutral-800 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-[#ef4444] font-black text-xs uppercase tracking-wider mb-1">
            <BookOpen className="w-4 h-4" />
            <span>Thư Viện Tài Liệu Chính Thức &amp; Cẩm Nang Wagyu (Documents Hub)</span>
          </div>
          <h3 className="font-display text-2xl font-black text-white">
            Tất Cả Tài Liệu &amp; Sách Hướng Dẫn Wagyu Nhật Bản
          </h3>
          <p className="text-sm text-neutral-400 mt-1 max-w-2xl font-normal">
            Bao gồm tài liệu phân loại JMGA, cẩm nang sử dụng logo Wagyu thống nhất (JLEC), sách ảnh hướng dẫn học tập về thịt bò nội địa Nhật Bản.
          </p>
        </div>

        {/* Search */}
        <div className="w-full md:w-72">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-neutral-500" />
            <input
              type="text"
              placeholder="Tìm kiếm tài liệu, cẩm nang..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-neutral-700 text-sm focus:outline-none focus:border-[#ef4444] bg-neutral-900 text-white placeholder-neutral-500"
            />
          </div>
        </div>
      </div>

      {/* Documents List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((doc, idx) => (
          <div
            key={idx}
            className="sandstone-surface p-5 rounded-2xl border border-neutral-800 shadow-md hover:border-[#ef4444] transition flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-[#dc2626] text-white flex items-center justify-center font-bold text-xs">
                  {doc.id || idx + 1}
                </span>
                <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                  Tài Liệu Chính Thức
                </span>
              </div>

              <h4 className="font-display font-extrabold text-white text-sm leading-snug">
                {doc.title}
              </h4>

              <p className="mt-2 text-xs text-neutral-400 line-clamp-3 leading-relaxed font-normal">
                {doc.description}
              </p>
            </div>

            {/* Links / Download Buttons */}
            <div className="mt-4 pt-3 border-t border-neutral-800/80 flex flex-wrap gap-2 items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {doc.urls.map((u, uIdx) => {
                  const isPdf = u.toLowerCase().endsWith('.pdf');
                  return (
                    <a
                      key={uIdx}
                      href={u}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition ${
                        isPdf
                          ? 'bg-red-950/80 text-red-300 hover:bg-red-900 border border-red-800'
                          : 'bg-neutral-800 text-neutral-200 hover:bg-neutral-700 border border-neutral-700'
                      }`}
                    >
                      {isPdf ? <Download className="w-3 h-3" /> : <ExternalLink className="w-3 h-3" />}
                      <span>{isPdf ? 'Tải PDF' : 'Mở Link'}</span>
                    </a>
                  );
                })}
              </div>

              <span className="text-[11px] text-neutral-500 font-medium">
                {doc.websiteHub ? `Hub #${doc.websiteHub}` : ''}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}