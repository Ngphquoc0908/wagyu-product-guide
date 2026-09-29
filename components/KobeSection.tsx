"use client";

import React, { useState } from 'react';
import { KobeReference } from '@/types/wagyu';
import { Award, ExternalLink, Search } from 'lucide-react';
import { Language, translations } from '@/lib/i18n';

interface KobeSectionProps {
  items: KobeReference[];
  currentLang?: Language;
}

export default function KobeSection({ items, currentLang = 'vi' }: KobeSectionProps) {
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [search, setSearch] = useState<string>('');

  const t = translations[currentLang].kobeSection;

  const groups = Array.from(new Set(items.map(i => i.group).filter(Boolean)));

  const filteredItems = items.filter(item => {
    const matchGroup = selectedGroup === 'all' || item.group === selectedGroup;
    const matchSearch = !search || item.title.toLowerCase().includes(search.toLowerCase()) || item.group.toLowerCase().includes(search.toLowerCase());
    return matchGroup && matchSearch;
  });

  return (
    <div className="space-y-6">
      
      {/* Intro Header */}
      <div className="sandstone-surface p-6 rounded-2xl border border-neutral-800 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-[#ef4444] font-black text-xs uppercase tracking-wider mb-1">
            <Award className="w-4 h-4" />
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
              placeholder={currentLang === 'ja' ? '神戸牛資料を検索...' : currentLang === 'en' ? 'Search Kobe records...' : 'Tìm tài liệu Kobe...'}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-neutral-700 text-sm focus:outline-none focus:border-[#ef4444] bg-neutral-900 text-white placeholder-neutral-500"
            />
          </div>
        </div>
      </div>

      {/* Filter Tabs by Group */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setSelectedGroup('all')}
          className={`px-4 py-2 rounded-full text-xs font-bold transition whitespace-nowrap ${
            selectedGroup === 'all'
              ? 'bg-[#dc2626] text-white shadow-md shadow-red-950/60'
              : 'sandstone-surface hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800'
          }`}
        >
          {currentLang === 'ja' ? `すべての項目 (${items.length})` : currentLang === 'en' ? `All Items (${items.length})` : `Tất cả (${items.length})`}
        </button>
        {groups.map((group) => (
          <button
            key={group}
            onClick={() => setSelectedGroup(group)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition whitespace-nowrap ${
              selectedGroup === group
                ? 'bg-[#dc2626] text-white shadow-md shadow-red-950/60'
                : 'sandstone-surface hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            {group}
          </button>
        ))}
      </div>

      {/* Kobe References Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item, idx) => (
          <div
            key={idx}
            className="sandstone-surface p-5 rounded-2xl border border-neutral-800 shadow-md hover:border-[#ef4444] hover:shadow-xl transition flex flex-col justify-between"
          >
            <div>
              <span className="text-[11px] font-bold text-red-300 bg-red-950/80 px-2.5 py-0.5 rounded-full border border-red-800">
                {item.group}
              </span>
              <h4 className="font-display font-extrabold text-white mt-2.5 text-sm leading-snug font-jp">
                {item.title}
              </h4>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between">
              <span className="text-xs text-neutral-500 font-mono truncate max-w-[180px]">
                {item.url ? new URL(item.url).hostname : ''}
              </span>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-800 hover:bg-[#dc2626] text-white text-xs font-semibold transition"
              >
                <span>{currentLang === 'ja' ? 'アクセス' : currentLang === 'en' ? 'Open Link' : 'Truy cập'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}