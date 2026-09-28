"use client";

import React from 'react';
import { WagyuCut } from '@/types/wagyu';
import { PlayCircle, ChevronRight } from 'lucide-react';

interface CutCardProps {
  cut: WagyuCut;
  onSelect: (cut: WagyuCut) => void;
  showAnatomy?: boolean;
}

export default function CutCard({ cut, onSelect, showAnatomy = false }: CutCardProps) {
  const getGroupBadgeColor = (group: string) => {
    if (group.includes('THÂN TRƯỚC') || group.includes('Forequarter')) {
      return 'bg-red-950/80 text-red-300 border-red-800/80';
    }
    if (group.includes('THĂN') || group.includes('Loin')) {
      return 'bg-neutral-800 text-white border-neutral-700';
    }
    if (group.includes('BỤNG') || group.includes('Short plate')) {
      return 'bg-amber-950/80 text-amber-300 border-amber-800/80';
    }
    if (group.includes('MÔNG') || group.includes('Round')) {
      return 'bg-rose-950/80 text-rose-300 border-rose-800/80';
    }
    return 'bg-neutral-800 text-neutral-300 border-neutral-700';
  };

  const cookingTags = (cut.cookingSuggestionsTags || cut.cookingSuggestionsVn || '')
    .split(/[※,]/)
    .map(t => t.trim())
    .filter(t => t.length > 1 && t.length < 25)
    .slice(0, 3);

  return (
    <div
      onClick={() => onSelect(cut)}
      className="group relative sandstone-surface rounded-2xl border border-neutral-800 shadow-md hover:shadow-2xl hover:border-[#ef4444] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer p-5"
    >
      <div>
        {/* Top Bar: Numbered Badge & Group */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#dc2626] text-white flex items-center justify-center font-bold text-xs shadow-md shadow-red-950/60 group-hover:scale-105 transition">
              {cut.code || cut.h1 || cut.h2 || '#'}
            </div>
            <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${getGroupBadgeColor(cut.group)}`}>
              {cut.group.replace(/Forequarter|Loin|Short plate brisket|Round/gi, '').trim()}
            </span>
          </div>

          {cut.youtubeGuide && (
            <span className="flex items-center gap-1 text-[11px] font-semibold text-red-400 bg-red-950/80 px-2 py-0.5 rounded-full border border-red-800">
              <PlayCircle className="w-3.5 h-3.5" />
              <span>Video</span>
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-display font-extrabold text-lg text-white group-hover:text-[#ef4444] transition leading-snug">
          {cut.nameEn}
        </h3>
        <p className="text-sm font-semibold text-[#ef4444] mt-0.5 line-clamp-1">
          {cut.nameVn}
        </p>

        {/* Japanese Nomenclature */}
        <div className="mt-2 text-xs text-neutral-400 font-medium space-y-0.5">
          {cut.nameKatakanaRomaji && (
            <div className="font-semibold text-neutral-300">{cut.nameKatakanaRomaji}</div>
          )}
          {cut.nameJpFarm && (
            <div className="text-[11px] text-neutral-500 line-clamp-1">{cut.nameJpFarm.split('\n')[0]}</div>
          )}
        </div>

        {/* Ratings Bar - All stars are PURE WHITE (text-white) */}
        {(cut.fatRating || cut.tendernessRating || cut.rarityRating) && (
          <div className="mt-3 pt-2.5 border-t border-neutral-800/80 flex items-center gap-4 text-xs font-semibold text-neutral-300">
            {cut.fatRating && (
              <div className="flex items-center gap-1">
                <span className="text-neutral-500 text-[11px]">Vân mỡ:</span>
                <span className="text-white drop-shadow-sm font-bold tracking-tighter">{cut.fatRating}</span>
              </div>
            )}
            {cut.tendernessRating && (
              <div className="flex items-center gap-1">
                <span className="text-neutral-500 text-[11px]">Mềm:</span>
                <span className="text-white drop-shadow-sm font-bold tracking-tighter">{cut.tendernessRating}</span>
              </div>
            )}
            {cut.rarityRating && (
              <div className="flex items-center gap-1">
                <span className="text-neutral-500 text-[11px]">Hiếm:</span>
                <span className="text-white drop-shadow-sm font-bold tracking-tighter">{cut.rarityRating}</span>
              </div>
            )}
          </div>
        )}

        {/* Description */}
        <p className="mt-3 text-xs text-neutral-400 line-clamp-2 leading-relaxed">
          {cut.description || cut.farmDetail || "Nhấn để xem phân tích chi tiết bộ phận..."}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {cookingTags.slice(0, 2).map((tag, idx) => (
            <span key={idx} className="text-[10px] font-medium bg-neutral-800/90 text-neutral-300 border border-neutral-700 px-2 py-0.5 rounded-md">
              {tag}
            </span>
          ))}
        </div>

        <button className="inline-flex items-center gap-1 text-xs font-bold text-[#ef4444] group-hover:text-white group-hover:translate-x-0.5 transition">
          <span>Chi tiết</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}