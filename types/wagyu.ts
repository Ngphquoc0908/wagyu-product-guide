export interface WagyuCut {
  group: string; // "THÂN TRƯỚC Forequarter" | "THĂN Loin" | "BỤNG Short plate brisket" | "MÔNG Round"
  h1: string;
  h2: string;
  code: string;
  nameEn: string;
  nameJpFarm: string;
  nameJpReading: string;
  nameKatakanaRomaji: string;
  nameVn: string;
  description: string;
  link?: string;
  cookingSuggestionsVn?: string;
  cookingSuggestionsTags?: string;
  recipes50?: string[];
  youtubeGuide?: string;
  muscleInfo?: string;
  originName?: string;
  fatRating?: string;
  tendernessRating?: string;
  rarityRating?: string;
  farmDetail?: string;
  cookingRecommendation?: string;
  weightReference?: string;
  yieldRate?: string;
}

export interface WagyuDocument {
  id: string;
  title: string;
  urls: string[];
  description: string;
  websiteHub: string;
}

export interface KobeReference {
  group: string;
  title: string;
  url: string;
}

export interface MarketEntry {
  id: string;
  name: string;
  description: string;
  notes: string;
  urls: string[];
}

export interface FullDataset {
  counts: {
    cuts: number;
    documents: number;
    kobe: number;
    market: number;
  };
  cuts: WagyuCut[];
  documents: WagyuDocument[];
  kobe: KobeReference[];
  market: MarketEntry[];
}