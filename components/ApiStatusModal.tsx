"use client";

import React from 'react';
import { X, AlertTriangle, RefreshCw } from 'lucide-react';
import { DEFAULT_API_URL } from '@/lib/api';

interface ApiStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLive: boolean;
  onRefresh: () => void;
  isLoading: boolean;
}

export default function ApiStatusModal({ isOpen, onClose, isLive, onRefresh, isLoading }: ApiStatusModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#141414] max-w-xl w-full rounded-3xl p-6 shadow-2xl border border-neutral-800 relative space-y-5 text-neutral-100">
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded-full ${isLive ? 'bg-emerald-500' : 'bg-red-500'}`} />
            <h3 className="font-display text-lg font-black text-white">
              {isLive ? 'Kết Nối Google Apps Script: Live' : 'Đang Dùng Bản Dữ Liệu Sẵn Sàng'}
            </h3>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="bg-neutral-900 p-4 rounded-2xl border border-neutral-800 text-xs space-y-2 font-mono break-all text-neutral-300">
          <div className="font-bold text-neutral-400">API Endpoint hiện tại:</div>
          <div className="text-[#ef4444]">{DEFAULT_API_URL}</div>
        </div>

        {!isLive && (
          <div className="bg-red-950/40 border border-red-900/60 rounded-2xl p-4 text-xs text-red-200 space-y-2 leading-relaxed">
            <div className="flex items-center gap-2 font-bold text-red-300">
              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
              <span>Cách kích hoạt kết nối Live từ Google Sheet của bạn:</span>
            </div>
            <ol className="list-decimal list-inside space-y-1 text-neutral-300 font-normal">
              <li>Mở Google Apps Script trong Google Sheet của bạn.</li>
              <li>Bấm nút xanh <b>Triển khai</b> (Deploy) $\rightarrow$ <b>Quản lý tùy chọn triển khai</b> (Manage deployments).</li>
              <li>Bấm biểu tượng <b>Chỉnh sửa</b> (icon cây bút).</li>
              <li>Tại mục <b>Người có quyền truy cập</b> (Who has access), chọn: <b>Bất kỳ ai</b> (Anyone).</li>
              <li>Bấm <b>Triển khai</b> (Deploy) rồi quay lại đây bấm nút &quot;Thử đồng bộ lại&quot;.</li>
            </ol>
            <p className="text-[11px] text-neutral-400 italic pt-1 font-normal">
              * Lưu ý: Hiện tại Web App vẫn hiển thị 100% dữ liệu đầy đủ từ file dữ liệu đính kèm nên bạn hoàn toàn có thể tra cứu và sử dụng trơn tru!
            </p>
          </div>
        )}

        <div className="flex items-center justify-between pt-2">
          <button
            onClick={onRefresh}
            disabled={isLoading}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#dc2626] hover:bg-red-600 text-white text-xs font-bold transition disabled:opacity-50 shadow-md shadow-red-950/60"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
            <span>Thử đồng bộ lại ngay</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold"
          >
            Đóng
          </button>
        </div>

      </div>
    </div>
  );
}