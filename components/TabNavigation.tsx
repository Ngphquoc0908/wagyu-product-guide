"use client";

import React from 'react';
import { Layers, BookOpen, Award, Store, Activity } from 'lucide-react';

export type MainTabType = 'cuts' | 'anatomy' | 'documents' | 'kobe' | 'market';

interface TabNavigationProps {
  activeTab: MainTabType;
  onChangeTab: (tab: MainTabType) => void;
  counts: {
    cuts: number;
    documents: number;
    kobe: number;
    market: number;
  };
}

export default function TabNavigation({ activeTab, onChangeTab, counts }: TabNavigationProps) {
  const tabs = [
    {
      id: 'cuts' as MainTabType,
      label: '45 Bộ Phận Wagyu',
      sub: 'Summary & Recipes',
      badge: counts.cuts,
      icon: Layers
    },
    {
      id: 'anatomy' as MainTabType,
      label: 'Giải Phẫu Chuyên Sâu',
      sub: 'Cơ, Tỷ Lệ & Vân Mỡ',
      badge: counts.cuts,
      icon: Activity
    },
    {
      id: 'kobe' as MainTabType,
      label: 'Tiêu Chuẩn Bò Kobe',
      sub: 'GI No.3 & DNA',
      badge: counts.kobe,
      icon: Award
    },
    {
      id: 'documents' as MainTabType,
      label: 'Cẩm Nang & Tài Liệu',
      sub: 'JMGA & JLEC Manuals',
      badge: counts.documents,
      icon: BookOpen
    },
    {
      id: 'market' as MainTabType,
      label: 'Thị Trường & Chợ Sỉ',
      sub: 'Đấu Giá & Trường Thịt',
      badge: counts.market,
      icon: Store
    }
  ];

  return (
    <div className="w-full bg-[#0c0a09] py-5 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Segmented Tab Bar in Dark Sandstone */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-1.5 p-1.5 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-inner">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => onChangeTab(tab.id)}
                className={`relative flex flex-col items-center justify-center py-3.5 px-3 rounded-xl transition-all duration-200 text-center ${
                  isActive
                    ? 'bg-[#dc2626] text-white shadow-lg shadow-red-950/70 font-bold scale-[1.01]'
                    : 'sandstone-surface hover:bg-neutral-800 text-neutral-300 hover:text-white font-semibold border border-neutral-800/80'
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-neutral-400'}`} />
                  <span className="text-xs sm:text-sm tracking-tight">{tab.label}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] opacity-90">
                  <span className="hidden sm:inline text-[10px] uppercase tracking-wider">{tab.sub}</span>
                  <span className={`px-1.5 py-0.2 rounded-full font-bold text-[10px] ${
                    isActive ? 'bg-black/60 text-white' : 'bg-neutral-800 text-neutral-300 border border-neutral-700'
                  }`}>
                    {tab.badge}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}