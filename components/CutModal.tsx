"use client";

import React from 'react';
import { WagyuCut } from '@/types/wagyu';
import { X, ExternalLink, Utensils, BookOpen, Activity } from 'lucide-react';
import { YoutubeIcon } from '@/components/Icons';

interface CutModalProps {
  cut: WagyuCut | null;
  onClose: () => void;
}

export default function CutModal({ cut, onClose }: CutModalProps) {
  if (!cut) return null;

  const getYoutubeEmbed = (url?: string) => {
    if (!url) return null;
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    return match ? match[1] : null;
  };

  const ytId = getYoutubeEmbed(cut.youtubeGuide);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#141414] w-full max-w-4xl rounded-3xl shadow-2xl border border-neutral-800 overflow-hidden flex flex-col max-h-[90vh] text-neutral-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-[#141414]/95 backdrop-blur-md px-6 py-4 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#dc2626] text-white flex items-center justify-center font-bold text-sm shadow-md">
              {cut.code || cut.h1 || cut.h2 || '#'}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-display text-xl sm:text-2xl font-black text-white">
                  {cut.nameEn}
                </h2>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-red-950/80 text-red-300 border border-red-800">
                  {cut.group}
                </span>
              </div>
              <p className="text-sm font-semibold text-[#ef4444]">
                {cut.nameVn} • <span className="font-medium text-neutral-400">{cut.nameKatakanaRomaji}</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Ratings & Key Specs Grid - All stars are PURE WHITE (text-white) */}
          {(cut.fatRating || cut.tendernessRating || cut.rarityRating || cut.weightReference) && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {cut.fatRating && (
                <div className="bg-neutral-900/90 p-3 rounded-xl border border-neutral-800">
                  <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Đánh Giá Vân Mỡ</div>
                  <div className="text-xl font-black text-white tracking-tight mt-0.5 drop-shadow-sm">{cut.fatRating}</div>
                </div>
              )}
              {cut.tendernessRating && (
                <div className="bg-neutral-900/90 p-3 rounded-xl border border-neutral-800">
                  <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Độ Mềm</div>
                  <div className="text-xl font-black text-white tracking-tight mt-0.5 drop-shadow-sm">{cut.tendernessRating}</div>
                </div>
              )}
              {cut.rarityRating && (
                <div className="bg-neutral-900/90 p-3 rounded-xl border border-neutral-800">
                  <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Độ Hiếm</div>
                  <div className="text-xl font-black text-white tracking-tight mt-0.5 drop-shadow-sm">{cut.rarityRating}</div>
                </div>
              )}
              {cut.weightReference && (
                <div className="bg-neutral-900/90 p-3 rounded-xl border border-neutral-800">
                  <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Khối Lượng</div>
                  <div className="text-xs font-bold text-neutral-200 line-clamp-2 mt-0.5">{cut.weightReference}</div>
                </div>
              )}
            </div>
          )}

          {/* YouTube Cutting Guide Video */}
          {ytId && (
            <div className="bg-black rounded-2xl overflow-hidden border border-neutral-800 shadow-lg">
              <div className="px-4 py-2.5 bg-neutral-900 text-white flex items-center justify-between text-xs font-semibold border-b border-neutral-800">
                <span className="flex items-center gap-2">
                  <YoutubeIcon className="w-4 h-4 text-red-500" />
                  Video Hướng Dẫn Cắt Lóc Thịt (Japanese Beef Cutting Guide)
                </span>
                <a
                  href={cut.youtubeGuide}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white flex items-center gap-1"
                >
                  Mở YouTube <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${ytId}`}
                  title="Japanese Wagyu Beef Cutting Guide"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* Muscle Anatomy & Structure */}
          {cut.muscleInfo && (
            <div className="sandstone-surface p-5 rounded-2xl border border-neutral-800 shadow-sm">
              <h4 className="flex items-center gap-2 text-sm font-extrabold text-[#ef4444] uppercase tracking-wider mb-2">
                <Activity className="w-4 h-4" />
                Cấu Trúc Giải Phẫu Học &amp; Các Cơ Chính
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed whitespace-pre-line font-normal">
                {cut.muscleInfo}
              </p>
            </div>
          )}

          {/* Detailed Description */}
          {(cut.farmDetail || cut.description) && (
            <div className="sandstone-surface p-5 rounded-2xl border border-neutral-800 shadow-sm">
              <h4 className="flex items-center gap-2 text-sm font-extrabold text-white uppercase tracking-wider mb-2">
                <BookOpen className="w-4 h-4" />
                Đặc Điểm &amp; Hương Vị (Tiêu Chuẩn Toyonishi Farm)
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed whitespace-pre-line font-normal">
                {cut.farmDetail || cut.description}
              </p>
            </div>
          )}

          {/* Cooking Suggestions */}
          {(cut.cookingSuggestionsVn || cut.cookingRecommendation) && (
            <div className="sandstone-surface p-5 rounded-2xl border border-neutral-800 shadow-sm">
              <h4 className="flex items-center gap-2 text-sm font-extrabold text-[#ef4444] uppercase tracking-wider mb-2">
                <Utensils className="w-4 h-4" />
                Gợi Ý Chế Biến &amp; Món Ăn Khuyên Dùng
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed whitespace-pre-line mb-3 font-normal">
                {cut.cookingSuggestionsVn || cut.cookingRecommendation}
              </p>

              {cut.recipes50 && cut.recipes50.length > 0 && (
                <div className="mt-3 pt-3 border-t border-neutral-800">
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                    Công thức tham khảo (50 Wagyu Recipes):
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cut.recipes50.map((recipe, idx) => (
                      <span key={idx} className="text-xs font-semibold bg-neutral-900 text-neutral-200 border border-neutral-700 px-3 py-1 rounded-full">
                        {recipe}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Yield */}
          {cut.yieldRate && (
            <div className="bg-neutral-900 p-4 rounded-xl border border-neutral-800 text-xs text-neutral-300">
              <span className="font-bold text-white">Tỷ Lệ Thu Hồi Tham Khảo: </span>
              {cut.yieldRate}
            </div>
          )}

          {/* External Links */}
          {cut.link && (
            <div className="flex items-center justify-end">
              <a
                href={cut.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#ef4444] hover:underline"
              >
                <span>Xem tư liệu hình ảnh gốc / Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-[#181818] px-6 py-3 border-t border-neutral-800 flex items-center justify-between">
          <span className="text-xs text-neutral-500">Wagyu Master Product Guide</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold transition"
          >
            Đóng
          </button>
        </div>

      </div>
    </div>
  );
}