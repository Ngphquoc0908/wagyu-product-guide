"use client";

import React, { useState } from 'react';
import { WagyuDocument } from '@/types/wagyu';
import { BookOpen, ExternalLink, Download, Search } from 'lucide-react';
import { Language, translations } from '@/lib/i18n';

interface DocumentsSectionProps {
  documents: WagyuDocument[];
  currentLang?: Language;
}

export default function DocumentsSection({ documents, currentLang = 'vi' }: DocumentsSectionProps) {
  const [search, setSearch] = useState<string>('');

  const t = translations[currentLang].docsSection;

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
              placeholder={currentLang === 'ja' ? '規格・資料を検索...' : currentLang === 'en' ? 'Search documents, specs...' : 'Tìm kiếm tài liệu, cẩm nang...'}
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
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-950/80 text-red-300 border border-red-800">
                  {doc.id}
                </span>
                {doc.websiteHub && (
                  <span className="text-[10px] text-neutral-500 font-mono">
                    {doc.websiteHub}
                  </span>
                )}
              </div>

              <h4 className="font-display font-bold text-white text-base leading-snug font-jp">
                {doc.title}
              </h4>

              {doc.description && (
                <p className="text-xs text-neutral-400 mt-2 line-clamp-3 leading-relaxed font-jp">
                  {doc.description}
                </p>
              )}
            </div>

            {/* Links and PDF buttons */}
            <div className="mt-4 pt-3 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-2">
              <span className="text-[11px] text-neutral-500">
                {doc.urls.length} {currentLang === 'ja' ? '件の参照リンク' : currentLang === 'en' ? 'source links' : 'nguồn tư liệu'}
              </span>

              <div className="flex flex-wrap gap-1.5">
                {doc.urls.map((url, uIdx) => (
                  <a
                    key={uIdx}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-700 hover:border-[#ef4444] hover:text-white text-neutral-300 text-xs font-semibold transition"
                  >
                    <span>{url.toLowerCase().endsWith('.pdf') ? 'PDF' : (currentLang === 'ja' ? '閲覧' : currentLang === 'en' ? 'View' : 'Xem')}</span>
                    {url.toLowerCase().endsWith('.pdf') ? (
                      <Download className="w-3 h-3 text-red-400" />
                    ) : (
                      <ExternalLink className="w-3 h-3 text-neutral-400" />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}