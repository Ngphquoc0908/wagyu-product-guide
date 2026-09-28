"use client";

import React from 'react';
import { RefreshCw, ExternalLink } from 'lucide-react';

interface NavbarProps {
  isLive: boolean;
  onRefresh: () => void;
  isLoading: boolean;
  onOpenApiModal: () => void;
}

export default function Navbar({ isLive, onRefresh, isLoading, onOpenApiModal }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 bg-[#0c0a09]/95 backdrop-blur-md border-b border-neutral-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Title (Clean typography in White & Red) */}
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
              Japanese Wagyu Cuts & Specifications Guide
            </p>
          </div>

          {/* Actions & API Status */}
          <div className="flex items-center gap-3">
            {/* Status indicator */}
            <button
              onClick={onOpenApiModal}
              title="Xem trạng thái kết nối Google Sheet"
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition border ${
                isLive
                  ? 'bg-emerald-950/80 text-emerald-300 border-emerald-800 hover:bg-emerald-900'
                  : 'bg-red-950/80 text-red-300 border-red-800 hover:bg-red-900'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                  isLive ? 'bg-emerald-400' : 'bg-red-400'
                }`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${
                  isLive ? 'bg-emerald-500' : 'bg-red-500'
                }`}></span>
              </span>
              <span className="hidden md:inline">
                {isLive ? 'Google Sheet: Live Sync' : 'Dữ Liệu: Bản Chuẩn Sẵn Sàng'}
              </span>
              <span className="md:hidden">
                {isLive ? 'Live' : 'Bản Chuẩn'}
              </span>
            </button>

            {/* Sync Button */}
            <button
              onClick={onRefresh}
              disabled={isLoading}
              title="Đồng bộ lại từ Google Apps Script"
              className="p-2 rounded-full border border-neutral-700 bg-neutral-900 text-neutral-300 hover:text-white hover:border-[#ef4444] transition shadow-xs disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin text-[#ef4444]' : ''}`} />
            </button>

            {/* Google Sheet link */}
            <a
              href="https://docs.google.com/spreadsheets/d/1Q7F9c5S02Hr5kBxK6R1iqUtbF6rqisAH4bzNIwz6S-4/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ef4444] hover:bg-red-600 text-white text-xs sm:text-sm font-semibold tracking-wide transition shadow-lg shadow-red-950/50"
            >
              <span>Xem Google Sheet</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-90" />
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}