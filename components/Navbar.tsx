"use client";

import React from 'react';
import { RefreshCw } from 'lucide-react';

interface NavbarProps {
  isLive: boolean;
  onRefresh: () => void;
  isLoading: boolean;
  onOpenApiModal: () => void;
}

export default function Navbar({ onRefresh, isLoading }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 bg-[#0c0a09]/95 backdrop-blur-md border-b border-neutral-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Title (Clean luxury typography in White & Red) */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2.5">
              <span className="font-display font-black text-2xl sm:text-3xl tracking-wider text-white">
                WAGYU <span className="text-[#ef4444]">MASTER</span>
              </span>
              <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700">
                Japan Quality
              </span>
            </div>
            <p className="text-xs text-neutral-400 font-medium tracking-wide">
              Japanese Wagyu Cuts &amp; Specifications Guide
            </p>
          </div>

          {/* Right Header: Client-facing badge & discreet refresh */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-neutral-300 bg-neutral-900 border border-neutral-800">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
              <span>Official Handbook</span>
            </span>

            {/* Discreet Refresh Button */}
            <button
              onClick={onRefresh}
              disabled={isLoading}
              title="Cập nhật dữ liệu mới nhất"
              className="p-2 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-700 transition shadow-xs disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin text-[#ef4444]' : ''}`} />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
