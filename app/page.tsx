"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TabNavigation, { MainTabType } from '@/components/TabNavigation';
import CutCard from '@/components/CutCard';
import CutModal from '@/components/CutModal';
import KobeSection from '@/components/KobeSection';
import DocumentsSection from '@/components/DocumentsSection';
import MarketSection from '@/components/MarketSection';
import Footer from '@/components/Footer';
import initialData from '@/data/initialData.json';
import { fetchWagyuData } from '@/lib/api';
import { WagyuCut, FullDataset } from '@/types/wagyu';
import { Language, translations } from '@/lib/i18n';
import { Search } from 'lucide-react';

export default function HomePage() {
  const [data, setData] = useState<FullDataset>(initialData as FullDataset);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [mainTab, setMainTab] = useState<MainTabType>('cuts');
  const [currentLang, setCurrentLang] = useState<Language>('vi');

  // Filter & Search states for Cuts
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [searchCut, setSearchCut] = useState<string>('');
  const [selectedCut, setSelectedCut] = useState<WagyuCut | null>(null);
  const [ratingFilter, setRatingFilter] = useState<string>('all');

  const t = translations[currentLang];

  const loadData = async () => {
    setIsLoading(true);
    const res = await fetchWagyuData();
    setData(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const primalGroups = [
    { id: 'all', label: t.filters.groups.all },
    { id: 'forequarter', label: t.filters.groups.forequarter, keyword: 'THÂN TRƯỚC' },
    { id: 'loin', label: t.filters.groups.loin, keyword: 'THĂN' },
    { id: 'short_plate', label: t.filters.groups.short_plate, keyword: 'BỤNG' },
    { id: 'round', label: t.filters.groups.round, keyword: 'MÔNG' }
  ];

  const filteredCuts = data.cuts.filter(cut => {
    let matchGroup = true;
    if (selectedGroup !== 'all') {
      const targetGroup = primalGroups.find(g => g.id === selectedGroup);
      if (targetGroup && targetGroup.keyword) {
        matchGroup = cut.group.includes(targetGroup.keyword);
      }
    }

    let matchSearch = true;
    if (searchCut) {
      const q = searchCut.toLowerCase();
      matchSearch = 
        cut.nameEn.toLowerCase().includes(q) ||
        cut.nameVn.toLowerCase().includes(q) ||
        cut.nameKatakanaRomaji.toLowerCase().includes(q) ||
        (cut.nameJpFarm || '').toLowerCase().includes(q) ||
        (cut.nameJpReading || '').toLowerCase().includes(q) ||
        cut.description.toLowerCase().includes(q) ||
        (cut.cookingSuggestionsVn || '').toLowerCase().includes(q) ||
        (cut.muscleInfo || '').toLowerCase().includes(q);
    }

    let matchRating = true;
    if (ratingFilter === 'high_fat') {
      matchRating = (cut.fatRating || '').length >= 3;
    } else if (ratingFilter === 'tender') {
      matchRating = (cut.tendernessRating || '').length >= 4;
    } else if (ratingFilter === 'rare') {
      matchRating = (cut.rarityRating || '').length >= 3;
    }

    return matchGroup && matchSearch && matchRating;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#0c0a09] text-neutral-100">
      
      {/* 1. Header with Language Switcher (No Google Sheet badges or links) */}
      <Navbar
        onRefresh={loadData}
        isLoading={isLoading}
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
      />

      {/* 2. Hero Section with Wagyu Master Building Banner */}
      <Hero
        totalCuts={data.counts.cuts}
        totalDocs={data.counts.documents}
        totalKobe={data.counts.kobe}
        totalMarket={data.counts.market}
        currentLang={currentLang}
      />

      {/* 3. Tab Switcher Bar */}
      <TabNavigation
        activeTab={mainTab}
        onChangeTab={setMainTab}
        counts={data.counts}
        currentLang={currentLang}
      />

      {/* 4. Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        
        {/* VIEW 1 & 2: 45 Bộ Phận Wagyu / Giải Phẫu */}
        {(mainTab === 'cuts' || mainTab === 'anatomy') && (
          <div className="space-y-6">
            
            {/* Quick Filter Bar in Dark Sandstone */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 sandstone-surface p-4 rounded-2xl border border-neutral-800 shadow-md">
              
              {/* Group filter buttons */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {primalGroups.map((g) => {
                  const isSelected = selectedGroup === g.id;
                  return (
                    <button
                      key={g.id}
                      onClick={() => setSelectedGroup(g.id)}
                      className={`px-3.5 py-2 rounded-full text-xs font-bold transition whitespace-nowrap ${
                        currentLang === 'ja' ? 'font-jp' : ''
                      } ${
                        isSelected
                          ? 'bg-[#dc2626] text-white shadow-md shadow-red-950/60'
                          : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white border border-neutral-700'
                      }`}
                    >
                      {g.label}
                    </button>
                  );
                })}
              </div>

              {/* Search & Extra Filters */}
              <div className="flex items-center gap-2">
                <div className="relative flex-1 sm:w-64">
                  <Search className="w-4 h-4 absolute left-3.5 top-3 text-neutral-400" />
                  <input
                    type="text"
                    placeholder={t.filters.searchPlaceholder}
                    value={searchCut}
                    onChange={(e) => setSearchCut(e.target.value)}
                    className={`w-full pl-10 pr-4 py-2 rounded-full border border-neutral-700 text-xs sm:text-sm focus:outline-none focus:border-[#ef4444] bg-neutral-900 text-white placeholder-neutral-400 ${
                      currentLang === 'ja' ? 'font-jp' : ''
                    }`}
                  />
                </div>

                <select
                  value={ratingFilter}
                  onChange={(e) => setRatingFilter(e.target.value)}
                  className={`px-3 py-2 rounded-full border border-neutral-700 bg-neutral-900 text-xs font-semibold text-neutral-200 focus:outline-none focus:border-[#ef4444] ${
                    currentLang === 'ja' ? 'font-jp' : ''
                  }`}
                >
                  <option value="all">{t.filters.filterAll}</option>
                  <option value="tender">{t.filters.filterTender}</option>
                  <option value="high_fat">{t.filters.filterFat}</option>
                  <option value="rare">{t.filters.filterRare}</option>
                </select>
              </div>

            </div>

            {/* Results count & view indication */}
            <div className="flex items-center justify-between text-xs font-bold text-neutral-400 px-1">
              <span className={currentLang === 'ja' ? 'font-jp' : ''}>
                {t.filters.showing(filteredCuts.length, data.cuts.length)}
              </span>
              <span className={currentLang === 'ja' ? 'font-jp' : ''}>
                {mainTab === 'anatomy' ? t.filters.modeAnatomy : t.filters.modeSummary}
              </span>
            </div>

            {/* Cuts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredCuts.map((cut, idx) => (
                <CutCard
                  key={cut.code || idx}
                  cut={cut}
                  onSelect={setSelectedCut}
                  showAnatomy={mainTab === 'anatomy'}
                  currentLang={currentLang}
                />
              ))}
            </div>

            {filteredCuts.length === 0 && (
              <div className="text-center py-16 sandstone-surface rounded-2xl border border-neutral-800">
                <p className={`text-neutral-400 text-sm ${currentLang === 'ja' ? 'font-jp' : ''}`}>
                  {currentLang === 'ja'
                    ? '該当する部位が見つかりませんでした。別のキーワードでお試しください。'
                    : currentLang === 'en'
                    ? 'No matching cuts found. Try a different search query or clear filters.'
                    : 'Không tìm thấy bộ phận phù hợp với từ khóa hoặc bộ lọc.'}
                </p>
              </div>
            )}

          </div>
        )}

        {/* VIEW 2: Kobe References */}
        {mainTab === 'kobe' && (
          <KobeSection items={data.kobe} currentLang={currentLang} />
        )}

        {/* VIEW 3: Documents & Manuals */}
        {mainTab === 'documents' && (
          <DocumentsSection documents={data.documents} currentLang={currentLang} />
        )}

        {/* VIEW 4: Market & Wholesalers */}
        {mainTab === 'market' && (
          <MarketSection entries={data.market} currentLang={currentLang} />
        )}

      </main>

      {/* Detail Cut Modal */}
      <CutModal
        cut={selectedCut}
        onClose={() => setSelectedCut(null)}
        currentLang={currentLang}
      />

      {/* Footer */}
      <Footer currentLang={currentLang} />

    </div>
  );
}