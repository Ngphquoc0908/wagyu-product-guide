import initialData from '@/data/initialData.json';
import { FullDataset, WagyuCut } from '@/types/wagyu';

export const DEFAULT_API_URL = "https://script.google.com/macros/s/AKfycbz8U41CsTVRMMvXwAphiC3OCXDZBXCLSVIFVgyGBcPvAkbTNXR8e9ZTf_tN9tjYC1OS/exec";

export async function fetchWagyuData(customUrl?: string): Promise<{ data: FullDataset; isLive: boolean; error?: string }> {
  const url = customUrl || DEFAULT_API_URL;
  
  try {
    const res = await fetch(`${url}?sheet=all&cache=false`, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
      cache: 'no-store'
    });

    const contentType = res.headers.get("content-type") || "";
    if (!res.ok || !contentType.includes("application/json")) {
      console.warn("API did not return JSON (possible Google authentication redirect). Using local high-fidelity dataset.");
      return { data: initialData as FullDataset, isLive: false, error: "Cần đổi quyền truy cập trong Google Apps Script sang 'Anyone' (Bất kỳ ai)" };
    }

    const json = await res.json();
    if (json.status === "success" && json.sheets) {
      // Map sheets into FullDataset format if needed
      const summaryList = json.sheets.summary || [];
      const viFullList = json.sheets.viFull || [];
      
      // Combine summary + viFull if both exist
      const viMap = new Map();
      viFullList.forEach((item: WagyuCut) => viMap.set(item.code || item.nameEn, item));

      const mergedCuts = summaryList.map((item: WagyuCut) => {
        const fullDetail = viMap.get(item.code || item.nameEn) || {};
        return {
          ...item,
          ...fullDetail,
          recipes50: item.recipes50 || fullDetail.recipes50 || [],
          youtubeGuide: item.youtubeGuide || fullDetail.youtubeGuide || ''
        };
      });

      return {
        data: {
          counts: {
            cuts: mergedCuts.length || initialData.counts.cuts,
            documents: (json.sheets.documents || []).length || initialData.counts.documents,
            kobe: (json.sheets.kobe || []).length || initialData.counts.kobe,
            market: (json.sheets.market || []).length || initialData.counts.market
          },
          cuts: mergedCuts.length ? mergedCuts : (initialData.cuts as WagyuCut[]),
          documents: json.sheets.documents?.length ? json.sheets.documents : initialData.documents,
          kobe: json.sheets.kobe?.length ? json.sheets.kobe : initialData.kobe,
          market: json.sheets.market?.length ? json.sheets.market : initialData.market
        },
        isLive: true
      };
    }
    return { data: initialData as FullDataset, isLive: false };
  } catch (err: any) {
    console.warn("Fetch failed, falling back to bundled dataset:", err.message);
    return { data: initialData as FullDataset, isLive: false, error: err.message };
  }
}