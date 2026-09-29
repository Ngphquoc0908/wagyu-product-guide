"use client";

import React from 'react';
import { WagyuCut } from '@/types/wagyu';
import { PlayCircle, ChevronRight } from 'lucide-react';
import { Language, translations } from '@/lib/i18n';

interface CutCardProps {
  cut: WagyuCut;
  onSelect: (cut: WagyuCut) => void;
  showAnatomy?: boolean;
  currentLang?: Language;
}

export default function CutCard({
  cut,
  onSelect,
  showAnatomy = false,
  currentLang = 'vi'
}: CutCardProps) {
  const t = translations[currentLang].cards;

  const getGroupBadge = (group: string, lang: Language) => {
    if (group.includes('THÂN TRƯỚC') || group.includes('Forequarter')) {
      return {
        label: lang === 'ja' ? '前・かた' : lang === 'en' ? 'FOREQUARTER' : 'THÂN TRƯỚC',
        color: 'bg-red-950/80 text-red-300 border-red-800/80'
      };
    }
    if (group.includes('THĂN') || group.includes('Loin')) {
      return {
        label: lang === 'ja' ? 'ロース' : lang === 'en' ? 'LOIN' : 'THĂN',
        color: 'bg-neutral-800 text-white border-neutral-700'
      };
    }
    if (group.includes('BỤNG') || group.includes('Short plate')) {
      return {
        label: lang === 'ja' ? 'バラ' : lang === 'en' ? 'SHORT PLATE' : 'BỤNG',
        color: 'bg-amber-950/80 text-amber-300 border-amber-800/80'
      };
    }
    if (group.includes('MÔNG') || group.includes('Round')) {
      return {
        label: lang === 'ja' ? 'もも' : lang === 'en' ? 'ROUND' : 'MÔNG & ĐÙI',
        color: 'bg-rose-950/80 text-rose-300 border-rose-800/80'
      };
    }
    return {
      label: group,
      color: 'bg-neutral-800 text-neutral-300 border-neutral-700'
    };
  };

  const groupInfo = getGroupBadge(cut.group, currentLang);

  const cookingTags = (cut.cookingSuggestionsTags || cut.cookingSuggestionsVn || '')
    .split(/[※,]/)
    .map(t => t.trim())
    .filter(t => t.length > 1 && t.length < 25)
    .slice(0, 3);

  // Determine primary and secondary titles according to language
  const primaryTitle =
    currentLang === 'ja'
      ? (cut.nameJpFarm ? cut.nameJpFarm.split('\n')[0] : cut.nameKatakanaRomaji || cut.nameEn)
      : currentLang === 'en'
      ? cut.nameEn
      : (cut.nameVn || cut.nameEn);

  const secondaryTitle =
    currentLang === 'ja'
      ? `${cut.nameKatakanaRomaji || ''} • ${cut.nameEn}`
      : currentLang === 'en'
      ? cut.nameVn
      : cut.nameEn;

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
            <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${groupInfo.color} ${currentLang === 'ja' ? 'font-jp' : ''}`}>
              {groupInfo.label}
            </span>
          </div>

          {cut.youtubeGuide && (
            <span className="flex items-center gap-1 text-[11px] font-semibold text-red-400 bg-red-950/80 px-2 py-0.5 rounded-full border border-red-800">
              <PlayCircle className="w-3.5 h-3.5" />
              <span>{t.video}</span>
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className={`font-display font-extrabold text-lg text-white group-hover:text-[#ef4444] transition leading-snug ${currentLang === 'ja' ? 'font-jp' : ''}`}>
          {primaryTitle}
        </h3>
        <p className={`text-sm font-semibold text-[#ef4444] mt-0.5 line-clamp-1 ${currentLang === 'ja' ? 'font-jp' : ''}`}>
          {secondaryTitle}
        </p>

        {/* Japanese Nomenclature - Strictly formatted with Noto Serif JP */}
        <div className="mt-2 text-xs text-neutral-400 font-medium space-y-0.5">
          {cut.nameKatakanaRomaji && (
            <div className="font-semibold text-neutral-300 font-jp tracking-wide">
              {cut.nameKatakanaRomaji}
            </div>
          )}
          {cut.nameJpFarm && currentLang !== 'ja' && (
            <div className="text-[11px] text-neutral-500 line-clamp-1 font-jp">
              {cut.nameJpFarm.split('\n')[0]}
            </div>
          )}
        </div>

        {/* Ratings Bar - All stars are PURE WHITE (text-white) */}
        {(cut.fatRating || cut.tendernessRating || cut.rarityRating) && (
          <div className="mt-3 pt-2.5 border-t border-neutral-800/80 flex items-center gap-4 text-xs font-semibold text-neutral-300">
            {cut.fatRating && (
              <div className="flex items-center gap-1">
                <span className={`text-neutral-500 text-[11px] ${currentLang === 'ja' ? 'font-jp' : ''}`}>
                  {t.fat}
                </span>
                <span className="text-white drop-shadow-sm font-bold tracking-tighter">{cut.fatRating}</span>
              </div>
            )}
            {cut.tendernessRating && (
              <div className="flex items-center gap-1">
                <span className={`text-neutral-500 text-[11px] ${currentLang === 'ja' ? 'font-jp' : ''}`}>
                  {t.tenderness}
                </span>
                <span className="text-white drop-shadow-sm font-bold tracking-tighter">{cut.tendernessRating}</span>
              </div>
            )}
            {cut.rarityRating && (
              <div className="flex items-center gap-1">
                <span className={`text-neutral-500 text-[11px] ${currentLang === 'ja' ? 'font-jp' : ''}`}>
                  {t.rarity}
                </span>
                <span className="text-white drop-shadow-sm font-bold tracking-tighter">{cut.rarityRating}</span>
              </div>
            )}
          </div>
        )}

        {/* Summary Description or Anatomy details */}
        {showAnatomy && cut.muscleInfo ? (
          <div className="mt-3 bg-neutral-900/90 p-2.5 rounded-xl border border-neutral-800/80">
            <span className={`text-[10px] font-bold text-red-400 block mb-1 uppercase tracking-wider ${currentLang === 'ja' ? 'font-jp' : ''}`}>
              {currentLang === 'ja' ? '解剖・筋肉構造:' : currentLang === 'en' ? 'Anatomical Structure:' : 'Cấu trúc giải phẫu:'}
            </span>
            <p className={`text-xs text-neutral-300 line-clamp-3 leading-relaxed ${currentLang === 'ja' ? 'font-jp' : ''}`}>
              {cut.muscleInfo}
            </p>
          </div>
        ) : (
          cut.description && (
            <p className={`mt-3 text-xs text-neutral-400 line-clamp-2 leading-relaxed ${currentLang === 'ja' ? 'font-jp' : ''}`}>
              {cut.description}
            </p>
          )
        )}
      </div>

      {/* Card Footer: Suggested Dishes & Action */}
      <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {cookingTags.map((tag, i) => (
            <span
              key={i}
              className={`text-[10px] font-medium bg-neutral-800/90 text-neutral-300 border border-neutral-700 px-2 py-0.5 rounded-md ${currentLang === 'ja' ? 'font-jp' : ''}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <button className="inline-flex items-center gap-1 text-xs font-bold text-[#ef4444] group-hover:text-white group-hover:translate-x-0.5 transition">
          <span className={currentLang === 'ja' ? 'font-jp' : ''}>{t.details}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}