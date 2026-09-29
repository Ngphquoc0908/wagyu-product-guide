export type Language = 'vi' | 'en' | 'ja';

export interface Translations {
  navbar: {
    brandSub: string;
    badge: string;
    refreshTooltip: string;
  };
  hero: {
    title1: string;
    title2: string;
    title3: string;
    subtitle: string;
    quality: string;
    description: string;
    hqBadge: string;
    metrics: {
      cuts: string;
      quarters: string;
      docs: string;
      market: string;
    };
  };
  tabs: {
    cuts: { label: string; sub: string };
    anatomy: { label: string; sub: string };
    kobe: { label: string; sub: string };
    documents: { label: string; sub: string };
    market: { label: string; sub: string };
  };
  filters: {
    groups: {
      all: string;
      forequarter: string;
      loin: string;
      short_plate: string;
      round: string;
    };
    searchPlaceholder: string;
    filterAll: string;
    filterTender: string;
    filterFat: string;
    filterRare: string;
    showing: (shown: number, total: number) => string;
    modeSummary: string;
    modeAnatomy: string;
  };
  cards: {
    fat: string;
    tenderness: string;
    rarity: string;
    details: string;
    video: string;
  };
  modal: {
    fatEval: string;
    tenderEval: string;
    rarityEval: string;
    weightEval: string;
    videoGuide: string;
    anatomySection: string;
    cookingSection: string;
    recipesSection: string;
    specsSection: string;
    close: string;
  };
  kobeSection: {
    title: string;
    subtitle: string;
    desc: string;
  };
  docsSection: {
    title: string;
    subtitle: string;
    desc: string;
  };
  marketSection: {
    title: string;
    subtitle: string;
    desc: string;
  };
  footer: {
    copyright: string;
    tagline: string;
  };
}

export const translations: Record<Language, Translations> = {
  vi: {
    navbar: {
      brandSub: 'Japanese Wagyu Cuts & Specifications Guide',
      badge: 'Official Handbook',
      refreshTooltip: 'Cập nhật dữ liệu mới nhất'
    },
    hero: {
      title1: 'WAGYU ',
      title2: 'PRODUCT ',
      title3: 'GUIDE',
      subtitle: 'BY WAGYU EXPERTS, FOR CULINARY MASTERS',
      quality: 'JAPAN ARTISAN QUALITY',
      description: 'Hệ thống tra cứu các bộ phận/phần cắt Wagyu chuẩn hóa theo 4 vùng thân thịt chính, tích hợp thông tin giải phẫu cơ học, đánh giá vân mỡ, cẩm nang phân hạng JMGA, Bò Kobe và sàn đấu giá, chợ thịt Nhật Bản & các tài liệu về Wagyu.',
      hqBadge: '和の達人 • WAGYU MASTER® JAPAN HEADQUARTERS',
      metrics: {
        cuts: 'Bộ Phận Chuẩn',
        quarters: 'Thân Thịt Lớn',
        docs: 'Tài Liệu & Specs',
        market: 'Kobe & Chợ Sỉ'
      }
    },
    tabs: {
      cuts: { label: '45 Bộ Phận Wagyu', sub: 'Tổng Hợp & Chế Biến' },
      anatomy: { label: 'Giải Phẫu Chuyên Sâu', sub: 'Cơ, Tỷ Lệ & Vân Mỡ' },
      kobe: { label: 'Tiêu Chuẩn Bò Kobe', sub: 'GI No.3 & DNA' },
      documents: { label: 'Cẩm Nang & Tài Liệu', sub: 'JMGA & JLEC Manuals' },
      market: { label: 'Thị Trường & Chợ Sỉ', sub: 'Đấu Giá & Trường Thịt' }
    },
    filters: {
      groups: {
        all: 'Tất Cả Bộ Phận (45)',
        forequarter: 'Thân Trước - Forequarter (15)',
        loin: 'Thăn - Loin (5)',
        short_plate: 'Bụng - Short Plate (9)',
        round: 'Mông & Đùi - Round (16)'
      },
      searchPlaceholder: 'Tìm tên, Romaji, món ăn...',
      filterAll: 'Mọi độ mềm/mỡ',
      filterTender: 'Độ mềm cao (4-5★)',
      filterFat: 'Nhiều vân mỡ (3-5★)',
      filterRare: 'Phần hiếm (Rare cuts)',
      showing: (shown: number, total: number) => `Hiển thị ${shown} / ${total} bộ phận Wagyu`,
      modeSummary: 'Chế độ: Tổng hợp & Chế biến',
      modeAnatomy: 'Chế độ: Giải phẫu cơ học'
    },
    cards: {
      fat: 'Vân mỡ:',
      tenderness: 'Mềm:',
      rarity: 'Hiếm:',
      details: 'Chi tiết',
      video: 'Video'
    },
    modal: {
      fatEval: 'Đánh Giá Vân Mỡ',
      tenderEval: 'Độ Mềm',
      rarityEval: 'Độ Hiếm',
      weightEval: 'Khối Lượng',
      videoGuide: 'Video Hướng Dẫn Cắt Lóc Thịt (Japanese Beef Cutting Guide)',
      anatomySection: 'Thông Tin Giải Phẫu & Cấu Trúc Cơ Học',
      cookingSection: 'Khuyến Nghị Món Ăn & Phương Pháp Chế Biến',
      recipesSection: 'Món Ăn Tiêu Biểu Từ Bộ Phận Này',
      specsSection: 'Quy Chuẩn Chế Biến & Sơ Chế Thực Tế',
      close: 'Đóng'
    },
    kobeSection: {
      title: 'HỆ THỐNG TIÊU CHUẨN BÒ KOBE (GI NO.3)',
      subtitle: 'KOBE BEEF OFFICIAL SPECIFICATIONS & CERTIFICATION',
      desc: 'Quy chuẩn chứng nhận chỉ dẫn địa lý GI số 3 của Bò Kobe: dòng dõi giống bò đen Tajima thuần chủng Hyogo, tỷ lệ cẩm thạch BMS từ cấp 6 trở lên, trọng lượng thịt tối ưu và truy xuất gia phả 10 đời.'
    },
    docsSection: {
      title: 'CẨM NANG & TÀI LIỆU CHUYÊN SÂU WAGYU',
      subtitle: 'JMGA, JLEC & OFFICIAL MEAT GRADING MANUALS',
      desc: 'Kho lưu trữ 77 tài liệu chuyên khảo về tiêu chuẩn phân hạng thịt bò Nhật Bản JMGA, hướng dẫn giải phẫu lóc thịt JLEC, thông số xuất khẩu và cẩm nang ẩm thực.'
    },
    marketSection: {
      title: 'THỊ TRƯỜNG & CHỢ ĐẤU GIÁ THỊT NHẬT BẢN',
      subtitle: 'CENTRAL MEAT WHOLESALE MARKETS & AUCTION HUBS',
      desc: 'Cổng thông tin tra cứu các trường đấu giá thịt lớn nhất Nhật Bản (Tokyo Shibaura, Osaka, Sendai...), lịch sàn đấu giá gia súc và danh bạ đơn vị xuất khẩu thịt chính ngạch.'
    },
    footer: {
      copyright: 'Handbook & Japanese Wagyu Product Classification System - Design & Curated by Jay',
      tagline: 'Dữ liệu được chuẩn hóa và tổng hợp từ Hiệp hội Phân hạng Thịt Nhật Bản (JMGA) & Bộ Nông Lâm Thủy Sản Nhật Bản (MAFF).'
    }
  },
  en: {
    navbar: {
      brandSub: 'Japanese Wagyu Cuts & Specifications Guide',
      badge: 'Official Handbook',
      refreshTooltip: 'Refresh to latest data'
    },
    hero: {
      title1: 'WAGYU ',
      title2: 'PRODUCT ',
      title3: 'GUIDE',
      subtitle: 'BY WAGYU EXPERTS, FOR CULINARY MASTERS',
      quality: 'JAPAN ARTISAN QUALITY',
      description: 'Comprehensive Japanese Wagyu cuts specification handbook standardized across 4 primal quarters, featuring anatomical muscle data, marbling & tenderness ratings, JMGA grading, Kobe GI standards, and Tokyo wholesale market guides.',
      hqBadge: '和の達人 • WAGYU MASTER® JAPAN HEADQUARTERS',
      metrics: {
        cuts: 'Standard Cuts',
        quarters: 'Primal Quarters',
        docs: 'Docs & Specs',
        market: 'Kobe & Wholesale'
      }
    },
    tabs: {
      cuts: { label: '45 Wagyu Cuts', sub: 'Summary & Specs' },
      anatomy: { label: 'Anatomy & Muscle', sub: 'Fat, Yield & Cuts' },
      kobe: { label: 'Kobe Beef Standards', sub: 'GI No.3 & DNA' },
      documents: { label: 'Manuals & Docs', sub: 'JMGA & JLEC Specs' },
      market: { label: 'Markets & Wholesale', sub: 'Auctions & Market Hubs' }
    },
    filters: {
      groups: {
        all: 'All Cuts (45)',
        forequarter: 'Forequarter (15)',
        loin: 'Loin (5)',
        short_plate: 'Short Plate & Brisket (9)',
        round: 'Round & Leg (16)'
      },
      searchPlaceholder: 'Search cut name, Romaji, dishes...',
      filterAll: 'All tenderness/marbling',
      filterTender: 'High tenderness (4-5★)',
      filterFat: 'Rich marbling (3-5★)',
      filterRare: 'Rare cuts',
      showing: (shown: number, total: number) => `Showing ${shown} of ${total} Wagyu cuts`,
      modeSummary: 'Mode: Summary & Recipes',
      modeAnatomy: 'Mode: Muscle Anatomy'
    },
    cards: {
      fat: 'Marbling:',
      tenderness: 'Tender:',
      rarity: 'Rarity:',
      details: 'Details',
      video: 'Video'
    },
    modal: {
      fatEval: 'Marbling Score',
      tenderEval: 'Tenderness',
      rarityEval: 'Rarity',
      weightEval: 'Approx Weight',
      videoGuide: 'Japanese Beef Cutting Guide Video',
      anatomySection: 'Anatomical Structure & Muscle Information',
      cookingSection: 'Culinary Recommendations & Cooking Methods',
      recipesSection: 'Signature Dishes From This Cut',
      specsSection: 'Butchery & Processing Specifications',
      close: 'Close'
    },
    kobeSection: {
      title: 'KOBE BEEF OFFICIAL SPECIFICATIONS (GI NO.3)',
      subtitle: 'KOBE BEEF OFFICIAL SPECIFICATIONS & CERTIFICATION',
      desc: 'Geographical Indication GI No. 3 certification standards for Kobe beef: purebred Hyogo Tajima bloodline, BMS marbling grade 6 or higher, optimum carcass weight, and 10-generation pedigree verification.'
    },
    docsSection: {
      title: 'WAGYU MANUALS & OFFICIAL SPECIFICATIONS',
      subtitle: 'JMGA, JLEC & OFFICIAL MEAT GRADING MANUALS',
      desc: 'Repository of 77 official technical monographs covering JMGA carcass grading, JLEC butchery and muscle separation manuals, export protocols, and culinary guides.'
    },
    marketSection: {
      title: 'JAPAN CENTRAL MEAT WHOLESALE MARKETS',
      subtitle: 'CENTRAL MEAT WHOLESALE MARKETS & AUCTION HUBS',
      desc: 'Directory of major Japanese wholesale meat auction hubs (Tokyo Shibaura, Osaka Nanko, Sendai, etc.), carcass auction calendars, and accredited export suppliers.'
    },
    footer: {
      copyright: 'Handbook & Japanese Wagyu Product Classification System - Design & Curated by Jay',
      tagline: 'Standardized data compiled from Japan Meat Grading Association (JMGA) and Ministry of Agriculture, Forestry and Fisheries (MAFF).'
    }
  },
  ja: {
    navbar: {
      brandSub: '和牛部位・解体・格付け専門ハンドブック',
      badge: '公式ハンドブック',
      refreshTooltip: '最新データに更新'
    },
    hero: {
      title1: 'WAGYU ',
      title2: 'PRODUCT ',
      title3: 'GUIDE',
      subtitle: '和牛の匠が贈る、至高の肉部位解体・選定ガイド',
      quality: '日本最高峰の牛肉文化',
      description: '枝肉4大部位（前・ロース・バラ・もも）に基づき、全45部位の解剖学的特徴・霜降り肉質評価・歩留基準・JMGA格付け・神戸牛GI規格・食肉市場データを網羅した専門ハンドブック。',
      hqBadge: '和の達人 • WAGYU MASTER® JAPAN HEADQUARTERS',
      metrics: {
        cuts: '標準部位',
        quarters: '大分割部位',
        docs: '専門資料・規格',
        market: '神戸牛＆市場'
      }
    },
    tabs: {
      cuts: { label: '和牛45部位', sub: '概要と特徴' },
      anatomy: { label: '解剖・筋肉構造', sub: '霜降り・歩留・肉質' },
      kobe: { label: '神戸牛基準', sub: '地理的表示GI No.3' },
      documents: { label: '格付け・公式資料', sub: 'JMGA / JLEC規格' },
      market: { label: '食肉市場・卸売', sub: '東京食肉市場・競り' }
    },
    filters: {
      groups: {
        all: '全45部位',
        forequarter: '前（かた・ネック） (15)',
        loin: 'ロース（リブロース・サーロイン） (5)',
        short_plate: 'バラ（ともばら） (9)',
        round: 'もも（内もも・らんぷ） (16)'
      },
      searchPlaceholder: '部位名、ローマ字、料理で検索...',
      filterAll: 'すべての肉質',
      filterTender: '高柔らかさ (4-5★)',
      filterFat: '高霜降り (3-5★)',
      filterRare: '希少部位',
      showing: (shown: number, total: number) => `表示中: ${shown} / ${total} 部位`,
      modeSummary: '表示モード: 概要＆調理法',
      modeAnatomy: '表示モード: 解剖筋肉構造'
    },
    cards: {
      fat: '霜降り:',
      tenderness: '柔らかさ:',
      rarity: '希少度:',
      details: '詳細を見る',
      video: '解体動画'
    },
    modal: {
      fatEval: 'BMS霜降り評価',
      tenderEval: '肉質・柔らかさ',
      rarityEval: '希少度ランク',
      weightEval: '標準重量・歩留',
      videoGuide: '和牛小割・脱骨・整形動画（Cutting Guide）',
      anatomySection: '解剖学的特徴・筋肉構造情報',
      cookingSection: 'おすすめ料理・調理法（焼肉・ステーキ・すき焼き）',
      recipesSection: 'この部位を使った代表的な料理',
      specsSection: '実務脱骨・規格・処理詳細',
      close: '閉じる'
    },
    kobeSection: {
      title: '神戸ビーフ公式基準（地理的表示 GI NO.3）',
      subtitle: 'KOBE BEEF OFFICIAL SPECIFICATIONS & CERTIFICATION',
      desc: '兵庫県産但馬牛血統、BMS 6番以上、厳格な歩留規格、10代遡及可能な血統管理を満たした神戸牛のGI公式規格概要。'
    },
    docsSection: {
      title: '和牛公式資料・格付けハンドブック',
      subtitle: 'JMGA, JLEC & OFFICIAL MEAT GRADING MANUALS',
      desc: '日本食肉格付協会（JMGA）歩留等級・肉質等級基準、JLEC食肉解体マニュアル、輸出規格を含む全77資料のアーカイブ。'
    },
    marketSection: {
      title: '全国主要食肉市場・中央卸売市場',
      subtitle: 'CENTRAL MEAT WHOLESALE MARKETS & AUCTION HUBS',
      desc: '東京都中央卸売市場食肉市場（芝浦）をはじめとする主要競り市場、取引動向、認定輸出事業者の総合情報。'
    },
    footer: {
      copyright: 'Handbook & Japanese Wagyu Product Classification System - Design & Curated by Jay',
      tagline: '日本食肉格付協会（JMGA）および農林水産省（MAFF）公認規格に基づく体系的ハンドブック。'
    }
  }
};
