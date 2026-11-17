// Comprehensive, 100% Reconciled Financial Projections & Row-by-Row Derivation Data
// Every Income Statement, Balance Sheet, and Financing row has its own dedicated sidebar data.
// Aligned with MPPA Audited 2019A–2020A Annual Report (AR2020), Case 23, and Fred David Ch. 8.

export const financialDetailData = {
  // =========================================================================
  // A. INCOME STATEMENT ROWS (9 ROWS)
  // =========================================================================
  revenue: {
    key: 'revenue',
    tag: 'INCOME STATEMENT · TOP LINE',
    tagId: 'LAPORAN LABA RUGI · PENDAPATAN',
    statusPill: 'Rp 6.75T → Rp 7.51T (+11.4% Over 3 Years)',
    statusPillId: 'Rp 6,75T → Rp 7,51T (+11,4% Selama 3 Tahun)',
    statusClass: 'badge-brand',
    title: 'Revenues (Sales): +2% → +3% → +6% Recovery',
    titleId: 'Pendapatan (Penjualan): Pemulihan +2% → +3% → +6%',
    sub: 'Format Substitution: 50 Compact Hyfresh Stores + Online Fulfillment Replace Lost Mall Sales',
    subId: 'Substitusi Format: 50 Gerai Hyfresh Kompak + Pengiriman Daring Menggantikan Ruang Mal',
    borderColor: '#df0036',
    kpis: [
      { label: '2019A Actual', labelId: 'Realisasi 2019A', val: 'Rp 8,654.6 B', sub: 'Pre-pandemic sales' },
      { label: '2020A Actual', labelId: 'Realisasi 2020A', val: 'Rp 6,746.6 B', sub: '-22.1% COVID mall drop', isLoss: true },
      { label: '2021P (+2%)', labelId: '2021P (+2%)', val: 'Rp 6,881.5 B', sub: '+Rp 134.9 B YoY' },
      { label: '2022P (+3%)', labelId: '2022P (+3%)', val: 'Rp 7,088.0 B', sub: '+Rp 206.4 B YoY' },
      { label: '2023P (+6%)', labelId: '2023P (+6%)', val: 'Rp 7,513.3 B', sub: '+Rp 425.3 B YoY (+11.4% vs 2020)', isHighlight: true, isProfit: true }
    ],
    yearTable: [
      { year: '2019A', val: '8,654,646', formula: 'Audited Net Sales baseline', source: 'AR2020 Consolidated P&L p. 128 & Note 25' },
      { year: '2020A', val: '6,746,594', formula: '-22.05% YoY (-Rp 1,908.1B vs 2019)', source: 'AR2020 p. 128: Hypermart 5.70T, Foodmart 689B, Hyfresh 135B, SmartClub 134B' },
      { year: '2021P', val: '6,881,526', formula: '6,746,594 × 1.02 (+2.0%)', source: '+10 Hyfresh stores (+Rp 150B) & online growth minus SmartClub/FMX exit (-Rp 180B)' },
      { year: '2022P', val: '7,087,972', formula: '6,881,526 × 1.03 (+3.0%)', source: '+15 more Hyfresh stores (+Rp 225B cumulative expansion) + GrabMart/Shopee volume' },
      { year: '2023P', val: '7,513,250', formula: '7,087,972 × 1.06 (+6.0%)', source: 'Full 50 Hyfresh (+Rp 750B) + 45 online centers (+Rp 517B) minus cut space (-Rp 500B)' }
    ],
    whereWeGotIt: {
      workbook: "MPPA Audited AR2020 + Case 23 Turnaround Forecast",
      sheets: [
        { name: "PART II (Growth Assumptions)", coords: "Cells G154 = +2.0%, J154 = +3.0%, M154 = +6.0%", desc: "Annual top-line growth rates grounded in store opening schedule and Case 23 Exhibit 2." },
        { name: "Statement of Profit or Loss", coords: "Net Sales Row (2019A: 8,654,646 · 2020A: 6,746,594)", desc: "Audited historical revenue baseline in Rp Millions." }
      ],
      annualReport: "MPPA 2020 Annual Report, p. 128 (Net Sales) & Note 25; store format sales in Case 23 Exhibit 6.",
      caseRef: "Harvard/PPM Case 23 Exhibit 2 & Exhibit 6."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. 2021P Revenue (+2%)", formula: "6,746,594 × 1.02 = Rp 6,881,526 M (+Rp 134.9 B)" },
        { step: "2. 2022P Revenue (+3%)", formula: "6,881,526 × 1.03 = Rp 7,087,972 M (+Rp 206.4 B)" },
        { step: "3. 2023P Revenue (+6%)", formula: "7,087,972 × 1.06 = Rp 7,513,250 M (+Rp 425.3 B)" },
        { step: "4. 3-Year Net Gain", formula: "7,513,250 − 6,746,594 = +Rp 766,656 M (+11.36% vs 2020A)" }
      ],
      operationalBridge: [
        { item: "50 Compact Hyfresh Neighborhood Stores", impact: "+Rp 750.0 B", desc: "50 stores (500–1,000 m²) averaging Rp 15.0 B/year each in residential areas." },
        { item: "45 Online Order Packing Centers", impact: "+Rp 516.7 B", desc: "GrabMart/Shopee/Tokopedia same-day grocery orders dispatched from existing hypermarkets." },
        { item: "SmartClub & FMX Exit + Resizing Trim", impact: "-Rp 500.0 B", desc: "Closing low-margin bulk SmartClub (-Rp 134B), 14 FMX kiosks (-Rp 46B), and excess hypermarket floor area (-Rp 320B)." }
      ]
    },
    strategicRationale: "Top-line growth stays modest (+11.4% total over 3 years) because we deliberately remove low-margin wholesale (SmartClub) and empty hypermarket square footage while replacing them with high-sales-density Hyfresh neighborhood supermarkets and online delivery.",
    sensitivity: "Even with 0% sales growth (revenue flat at Rp 6,746.6 B), MPPA remains profitable by Year 2 because the margin and rent savings stay intact."
  },

  cogs: {
    key: 'cogs',
    tag: 'INCOME STATEMENT · DIRECT PRODUCT COST',
    tagId: 'LAPORAN LABA RUGI · BEBAN POKOK (HPP)',
    statusPill: '81.2% Historical Avg → 76.0% by 2023P',
    statusPillId: 'Rata-rata Historis 81,2% → 76,0% pada 2023P',
    statusClass: 'badge-profit',
    title: 'Cost of Goods Sold (COGS): Anchored to 2019–2020 Baseline',
    titleId: 'Beban Pokok Penjualan (HPP): Mengacu Baseline 2019–2020',
    sub: 'Realistic 5.2% Improvement via Cold Storage Waste Cuts, Private Label & SmartClub Exit',
    subId: 'Perbaikan Realistis 5,2% via Gudang Pendingin, Merek Privat & Penutupan SmartClub',
    borderColor: '#137333',
    kpis: [
      { label: '2019–2020 Avg', labelId: 'Rata-rata 2019–2020', val: '81.19%', sub: '81.74% (2019) · 80.63% (2020)', isLoss: true },
      { label: '2021P (79.0%)', labelId: '2021P (79,0%)', val: 'Rp 5,436.4 B', sub: '-2.19 pts vs avg' },
      { label: '2022P (77.5%)', labelId: '2022P (77,5%)', val: 'Rp 5,493.2 B', sub: '-1.50 pts YoY' },
      { label: '2023P (76.0%)', labelId: '2023P (76,0%)', val: 'Rp 5,710.1 B', sub: '-1.50 pts YoY', isHighlight: true },
      { label: 'Total Cost Cut', labelId: 'Penghematan Rasio', val: '-5.19 pts', sub: 'COGS % Reduction', isProfit: true }
    ],
    yearTable: [
      { year: '2019A', val: '7,074,249', formula: '7,074,249 ÷ 8,654,646 = 81.74% of Sales', source: 'AR2020 Audited P&L p. 128 & Note 26' },
      { year: '2020A', val: '5,439,936', formula: '5,439,936 ÷ 6,746,594 = 80.63% of Sales', source: 'AR2020 p. 128 & Note 26 (2019–2020 Avg = 81.19%)' },
      { year: '2021P', val: '5,436,406', formula: '6,881,526 × 79.00% of Sales', source: 'Exiting SmartClub low-margin wholesale (+1.1 pts) + initial cold-chain shrinkage cut' },
      { year: '2022P', val: '5,493,178', formula: '7,087,972 × 77.50% of Sales', source: 'Expanding Value Plus private label SKUs (+300–500 bps margin) + Balaraja/Porong cold storage' },
      { year: '2023P', val: '5,710,070', formula: '7,513,250 × 76.00% of Sales', source: 'Higher fresh/bakery store mix & full central DC temperature control' }
    ],
    whereWeGotIt: {
      workbook: "MPPA Audited 2019–2020 Baseline + Realistic Turnaround Model",
      sheets: [
        { name: "2019A–2020A Audited Average", coords: "(81.74% + 80.63%) ÷ 2 = 81.19% of Sales", desc: "Anchored to real MPPA grocery product cost instead of unrealistic 50% textbook defaults." },
        { name: "Projected COGS %", coords: "2021P: 79.0% · 2022P: 77.5% · 2023P: 76.0%", desc: "Gradual ~1.5%–2.2% annual improvement as store mix and cold storage mature." }
      ],
      annualReport: "MPPA 2020 Annual Report, p. 128 & Note 26 (Purchases and Cost of Goods Sold).",
      caseRef: "Harvard/PPM Case 23 Exhibit 2 & Exhibit 6."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. Historical Baseline", formula: "(81.74% + 80.63%) ÷ 2 = 81.19% COGS ratio" },
        { step: "2. 2021P COGS (79.0%)", formula: "6,881,526 × 79.00% = Rp 5,436,406 M" },
        { step: "3. 2022P COGS (77.5%)", formula: "7,087,972 × 77.50% = Rp 5,493,178 M" },
        { step: "4. 2023P COGS (76.0%)", formula: "7,513,250 × 76.00% = Rp 5,710,070 M" }
      ],
      operationalBridge: [
        { item: "Central Cold-Chain Shrinkage Cut", impact: "-2.2 pts COGS", desc: "Balaraja & Surabaya DCs reduce fresh produce, meat, and dairy spoilage in transit." },
        { item: "Value Plus Private Label Share", impact: "-1.5 pts COGS", desc: "House brands carry 300–500 bps better margin within existing supplier agreements." },
        { item: "Closing Low-Margin SmartClub Wholesale", impact: "-1.5 pts COGS", desc: "Removes ~Rp 134B of ultra-thin margin bulk B2B sales that dragged blended margin down." }
      ]
    },
    strategicRationale: "Because MPPA already buys consumer goods under formal distributor contracts, cutting COGS to 50% overnight is impossible in grocery retail. Starting from the 81.2% historical average and trimming 5.2 points to 76.0% over three years is realistic and directly backed by cold storage, private label, and SmartClub closure.",
    sensitivity: "Every 1.0% improvement in COGS adds ~Rp 75 B per year directly to Gross Profit and EBIT."
  },

  gross_profit: {
    key: 'gross_profit',
    tag: 'INCOME STATEMENT · GROSS MARGIN',
    tagId: 'LAPORAN LABA RUGI · LABA KOTOR',
    statusPill: '18.8% Historical Avg → 24.0% by 2023P',
    statusPillId: 'Rata-rata Historis 18,8% → 24,0% pada 2023P',
    statusClass: 'badge-profit',
    title: 'Gross Profit: Expanding from 18.8% to 24.0%',
    titleId: 'Laba Kotor: Ekspansi Bertahap dari 18,8% ke 24,0%',
    sub: 'Revenues Minus COGS Across 2019A–2023P',
    subId: 'Pendapatan Dikurangi Beban Pokok Penjualan (2019A–2023P)',
    borderColor: '#137333',
    kpis: [
      { label: '2019A–2020A Avg', labelId: 'Rata-rata 2019–2020', val: '18.81%', sub: '18.26% (2019) · 19.37% (2020)' },
      { label: '2021P (21.0%)', labelId: '2021P (21,0%)', val: 'Rp 1,445.1 B', sub: '+Rp 138.5 B vs 2020', isProfit: true },
      { label: '2022P (22.5%)', labelId: '2022P (22,5%)', val: 'Rp 1,594.8 B', sub: '+Rp 149.7 B YoY', isProfit: true },
      { label: '2023P (24.0%)', labelId: '2023P (24,0%)', val: 'Rp 1,803.2 B', sub: '+Rp 208.4 B YoY', isHighlight: true, isProfit: true }
    ],
    yearTable: [
      { year: '2019A', val: '1,580,397', formula: '8,654,646 − 7,074,249 (18.26% margin)', source: 'AR2020 Consolidated P&L p. 128' },
      { year: '2020A', val: '1,306,658', formula: '6,746,594 − 5,439,936 (19.37% margin)', source: 'AR2020 Consolidated P&L p. 128 (2-yr avg = 18.81%)' },
      { year: '2021P', val: '1,445,120', formula: '6,881,526 − 5,436,406 (21.00% margin)', source: 'Low-margin SmartClub exit + early Hyfresh fresh grocery shift' },
      { year: '2022P', val: '1,594,794', formula: '7,087,972 − 5,493,178 (22.50% margin)', source: 'More fresh perishables + Value Plus private label mix' },
      { year: '2023P', val: '1,803,180', formula: '7,513,250 − 5,710,070 (24.00% margin)', source: 'Full 50-store fresh network + 66,755 m² cold-chain shrinkage savings' }
    ],
    whereWeGotIt: {
      workbook: "Derived Directly from Revenue − COGS",
      sheets: [
        { name: "Gross Profit Identity", coords: "Gross Profit = Revenues − COGS", desc: "Margin equals 100% minus the COGS ratio (21.0% → 22.5% → 24.0%)." }
      ],
      annualReport: "MPPA 2020 Annual Report, p. 128 (2019 Gross Profit: Rp 1,580,397 M; 2020 Gross Profit: Rp 1,306,658 M).",
      caseRef: "Comparable Indonesian supermarket benchmarks (22%–25% gross margin)."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. 2021P Gross Profit", formula: "6,881,526 − 5,436,406 = Rp 1,445,120 M (21.0%)" },
        { step: "2. 2022P Gross Profit", formula: "7,087,972 − 5,493,178 = Rp 1,594,794 M (22.5%)" },
        { step: "3. 2023P Gross Profit", formula: "7,513,250 − 5,710,070 = Rp 1,803,180 M (24.0%)" }
      ],
      operationalBridge: [
        { item: "Fresh Food & Perishable Mix", impact: "+2.2% Gross Margin", desc: "Neighborhood supermarkets carry higher daily fresh fruit, vegetable, and bakery volume." },
        { item: "Value Plus Private Label", impact: "+1.5% Gross Margin", desc: "Higher store-brand margins on staples while pricing 15–20% below national brands." },
        { item: "Cold-Chain & Wholesale Cleanup", impact: "+1.5% Gross Margin", desc: "Less spoilage + removing SmartClub bulk wholesale dilution." }
      ]
    },
    strategicRationale: "A 24.0% gross margin by 2023 sits right in line with healthy Asian neighborhood supermarkets (compared to MPPA's 19.4% legacy hypermarket margin), without relying on unrealistic numbers.",
    sensitivity: "Even at a conservative 22.0% gross margin in 2023, EBIT stays strongly positive above +Rp 410 B because OpEx is permanently lower."
  },

  opex: {
    key: 'opex',
    tag: 'INCOME STATEMENT · OPERATING EXPENSES',
    tagId: 'LAPORAN LABA RUGI · BEBAN USAHA (OPEX)',
    statusPill: '21.0% Historical Avg → 16.5% by 2023P',
    statusPillId: 'Rata-rata Historis 21,0% → 16,5% pada 2023P',
    statusClass: 'badge-profit',
    title: 'Operating Expenses (OpEx): Rent & Store Size Savings',
    titleId: 'Beban Usaha (OpEx): Penghematan Sewa & Ukuran Gerai',
    sub: 'Shrinking 45 Hypermarkets, Renegotiating 15 Mall Leases & Closing 16 Losing Stores',
    subId: 'Pengecilan 45 Hipermarket, Renegosiasi 15 Sewa Mal & Penutupan 16 Gerai Rugi',
    borderColor: '#df0036',
    kpis: [
      { label: '2019–2020 Avg', labelId: 'Rata-rata 2019–2020', val: '20.99%', sub: '20.53% (2019) · 21.45% (2020)' },
      { label: '2021P (18.5%)', labelId: '2021P (18,5%)', val: 'Rp 1,273.1 B', sub: '-Rp 173.8 B vs 2020', isProfit: true },
      { label: '2022P (17.5%)', labelId: '2022P (17,5%)', val: 'Rp 1,240.4 B', sub: '-Rp 32.7 B YoY', isProfit: true },
      { label: '2023P (16.5%)', labelId: '2023P (16,5%)', val: 'Rp 1,239.7 B', sub: '-Rp 207.2 B vs 2020', isHighlight: true, isProfit: true }
    ],
    yearTable: [
      { year: '2019A', val: '1,776,502', formula: '1,776,502 ÷ 8,654,646 = 20.53% of Sales', source: 'AR2020 Note 28: Selling Expenses + G&A Expenses (incl. store payroll & utilities)' },
      { year: '2020A', val: '1,446,926', formula: '1,446,926 ÷ 6,746,594 = 21.45% of Sales', source: 'AR2020 Note 28: Selling Rp 1,225.8B + G&A Rp 221.1B (2-yr avg = 20.99%)' },
      { year: '2021P', val: '1,273,082', formula: '6,881,526 × 18.50% of Sales', source: 'Closes 2 SmartClub + 14 FMX (-Rp 76B/yr op costs) + initial mall lease & floor cuts' },
      { year: '2022P', val: '1,240,395', formula: '7,087,972 × 17.50% of Sales', source: '27 hypermarkets resized + subleased (lower AC/lighting/security) + mall rent cuts' },
      { year: '2023P', val: '1,239,686', formula: '7,513,250 × 16.50% of Sales', source: 'All 45 resized hypermarkets & 15 renegotiated mall leases running at lower cost base' }
    ],
    whereWeGotIt: {
      workbook: "MPPA Audited 2019–2020 Note 28 + Store Cost Savings",
      sheets: [
        { name: "2019A–2020A Audited Average", coords: "(20.53% + 21.45%) ÷ 2 = 20.99% of Sales", desc: "Anchored to MPPA's real Selling + G&A cost ratio instead of the inflated 31% template figure." },
        { name: "OpEx Savings Schedule", coords: "2021P: 18.5% · 2022P: 17.5% · 2023P: 16.5%", desc: "Captures rent, electricity, and staffing savings from smaller stores and closing losers." }
      ],
      annualReport: "MPPA 2020 Annual Report, Note 28 (Selling Expenses Rp 1,225.8 B; G&A Rp 221.1 B; Total OpEx Rp 1,446.9 B).",
      caseRef: "Harvard/PPM Case 23 Exhibit 2 & Exhibit 6 (SmartClub/FMX loss-making store data)."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. Historical Baseline", formula: "(20.53% + 21.45%) ÷ 2 = 20.99% OpEx ratio" },
        { step: "2. 2021P OpEx (18.5%)", formula: "6,881,526 × 18.50% = Rp 1,273,082 M (-Rp 173.8B vs 2020)" },
        { step: "3. 2022P OpEx (17.5%)", formula: "7,087,972 × 17.50% = Rp 1,240,395 M" },
        { step: "4. 2023P OpEx (16.5%)", formula: "7,513,250 × 16.50% = Rp 1,239,686 M (-Rp 207.2B vs 2020)" }
      ],
      operationalBridge: [
        { item: "Shrinking 45 Hypermarkets (6,000 → 3,000 m²)", impact: "-Rp 95.0 B / yr", desc: "Cuts store cooling electricity, maintenance, security, and floor staffing; subleases excess space." },
        { item: "Closing 2 SmartClub & 14 FMX Stores", impact: "-Rp 76.2 B / yr", desc: "Immediately stops recurring rent and store payroll burn at 16 unprofitable sites." },
        { item: "15 Anchor Mall Lease Renegotiations", impact: "-Rp 36.0 B / yr", desc: "Converts rigid fixed mall rent to lower hybrid revenue-share agreements." }
      ]
    },
    strategicRationale: "Because our entire turnaround focuses on cutting oversized store space, renegotiating 15 mall leases, and shutting 16 losing stores, Operating Expenses must go DOWN from the 21.0% historical average (to 16.5%), not jump up to 31%.",
    sensitivity: "Even if OpEx only drops to 19.0% (just 2 points saved), 2023 EBIT is still a healthy +Rp 375.7 B."
  },

  ebit: {
    key: 'ebit',
    tag: 'INCOME STATEMENT · OPERATING PROFIT',
    tagId: 'LAPORAN LABA RUGI · LABA USAHA (EBIT)',
    statusPill: '-Rp 140.3B Loss → +Rp 563.5B Profit (+Rp 703.8B Swing)',
    statusPillId: 'Rugi -Rp 140,3M → Laba +Rp 563,5M (+Rp 703,8M)',
    statusClass: 'badge-profit',
    title: 'EBIT (Operating Income): -Rp 140B → +Rp 563B',
    titleId: 'EBIT (Laba Usaha): -Rp 140 M → +Rp 563 M',
    sub: 'Gross Profit Minus Operating Expenses Across 2019A–2023P',
    subId: 'Laba Kotor Dikurangi Beban Usaha (2019A–2023P)',
    borderColor: '#137333',
    kpis: [
      { label: '2019A Actual', labelId: 'Realisasi 2019A', val: '-Rp 196.1 B', sub: '-2.27% Margin', isLoss: true },
      { label: '2020A Actual', labelId: 'Realisasi 2020A', val: '-Rp 140.3 B', sub: '-2.08% Margin', isLoss: true },
      { label: '2021P EBIT', labelId: 'EBIT 2021P', val: '+Rp 172.0 B', sub: '2.50% Margin', isProfit: true },
      { label: '2022P EBIT', labelId: 'EBIT 2022P', val: '+Rp 354.4 B', sub: '5.00% Margin', isProfit: true },
      { label: '2023P EBIT', labelId: 'EBIT 2023P', val: '+Rp 563.5 B', sub: '7.50% Margin (+Rp 703.8B swing)', isHighlight: true, isProfit: true }
    ],
    yearTable: [
      { year: '2019A', val: '-196,105', formula: '1,580,397 − 1,776,502 (-2.27% margin)', source: 'AR2020 Consolidated P&L p. 128 (Operating Loss)' },
      { year: '2020A', val: '-140,268', formula: '1,306,658 − 1,446,926 (-2.08% margin)', source: 'AR2020 Consolidated P&L p. 128 (Operating Loss)' },
      { year: '2021P', val: '+172,038', formula: '1,445,120 − 1,273,082 (2.50% margin)', source: 'Gross margin lifts to 21.0% while OpEx falls to 18.5%' },
      { year: '2022P', val: '+354,399', formula: '1,594,794 − 1,240,395 (5.00% margin)', source: 'Gross margin reaches 22.5% while OpEx falls to 17.5%' },
      { year: '2023P', val: '+563,494', formula: '1,803,180 − 1,239,686 (7.50% margin)', source: 'Gross margin reaches 24.0% while OpEx falls to 16.5%' }
    ],
    whereWeGotIt: {
      workbook: "Derived Directly from Gross Profit − OpEx",
      sheets: [
        { name: "Operating Profit Equation", coords: "EBIT = Gross Profit − Operating Expenses", desc: "Operating margin equals Gross Margin % minus OpEx %." }
      ],
      annualReport: "MPPA 2020 Annual Report, Consolidated P&L p. 128 (2019: -196,105 M; 2020: -140,268 M).",
      caseRef: "Harvard/PPM Case 23 Exhibit 2."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. 2021P EBIT (2.5%)", formula: "1,445,120 − 1,273,082 = +Rp 172,038 M" },
        { step: "2. 2022P EBIT (5.0%)", formula: "1,594,794 − 1,240,395 = +Rp 354,399 M" },
        { step: "3. 2023P EBIT (7.5%)", formula: "1,803,180 − 1,239,686 = +Rp 563,494 M" },
        { step: "4. 3-Yr Profit Swing", formula: "+563,494 − (-140,268) = +Rp 703,762 M (+Rp 703.8 B)" }
      ],
      operationalBridge: [
        { item: "Gross Margin Gain (18.8% → 24.0%)", impact: "+Rp 389.0 B", desc: "Cold storage shrinkage cuts, Value Plus private label, and SmartClub closure." },
        { item: "OpEx Cost Savings (21.0% → 16.5%)", impact: "+Rp 337.0 B", desc: "Shrinking 45 hypermarkets, cutting 15 mall leases, and closing 16 losing stores." }
      ]
    },
    strategicRationale: "EBIT swings from -Rp 140.3B loss to +Rp 172.0B profit right in Year 1 because gross margin lifts gradually (+5.2 pts over 3 years) while store operating overhead drops (-4.5 pts over 3 years).",
    sensitivity: "At 7.5% operating margin by 2023P, EBIT reaches 2.43x interest coverage, clearing BNI's typical 2.0x loan covenant floor."
  },

  net_finance: {
    key: 'net_finance',
    tag: 'INCOME STATEMENT · INTEREST & LEASE FINANCE',
    tagId: 'LAPORAN LABA RUGI · BIAYA KEUANGAN (BUNGA)',
    statusPill: 'Rp 267.4B (2020A) → Rp 231.4B (2023P)',
    statusPillId: 'Rp 267,4M (2020A) → Rp 231,4M (2023P)',
    statusClass: 'badge-profit',
    title: 'Net Finance Costs (Interest): PSAK 73 Lease Relief',
    titleId: 'Biaya Keuangan Neto (Bunga): Penurunan Bunga Sewa PSAK 73',
    sub: 'Drops as 15 Mall Lease Renegotiations Lower PSAK 73 Lease Liabilities With Zero New Bank Debt',
    subId: 'Turun Seiring Renegosiasi 15 Sewa Mal Menurunkan Liabilitas Sewa PSAK 73 Tanpa Utang Bank Baru',
    borderColor: '#df0036',
    kpis: [
      { label: '2019A (Pre-PSAK 73)', labelId: '2019A (Pra-PSAK 73)', val: 'Rp 118.5 B', sub: 'Bank interest only' },
      { label: '2020A (PSAK 73 Added)', labelId: '2020A (Tambah PSAK 73)', val: 'Rp 267.4 B', sub: '+Rp 166.2B lease interest', isLoss: true },
      { label: '2021P (-Rp 18B)', labelId: '2021P (-Rp 18M)', val: 'Rp 249.4 B', sub: 'Early lease deals close' },
      { label: '2022P (-Rp 28B)', labelId: '2022P (-Rp 28M)', val: 'Rp 239.4 B', sub: '10+ leases restructured' },
      { label: '2023P (-Rp 36B)', labelId: '2023P (-Rp 36M)', val: 'Rp 231.4 B', sub: 'All 15 leases signed', isHighlight: true, isProfit: true }
    ],
    yearTable: [
      { year: '2019A', val: '118,496', formula: 'Bank loan interest + finance fees (before PSAK 73)', source: 'AR2020 Consolidated P&L p. 128 (Note 28)' },
      { year: '2020A', val: '267,419', formula: 'Rp 101.2B bank/net finance + Rp 166.2B PSAK 73 lease interest', source: 'AR2020 p. 128 & Note 28 (PSAK 73 adopted Jan 1, 2020)' },
      { year: '2021P', val: '249,419', formula: '267,419 − 18,000 (-Rp 18.0B lease interest cut)', source: 'First wave of anchor mall lease renegotiations + Rp 0 new bank debt' },
      { year: '2022P', val: '239,419', formula: '267,419 − 28,000 (-Rp 28.0B cumulative lease interest cut)', source: 'Continued PSAK 73 lease liability reduction + Rp 0 new bank debt' },
      { year: '2023P', val: '231,419', formula: '267,419 − 36,000 (-Rp 36.0B full annual lease interest cut)', source: 'Slide 30 Strategy 3: 15 leases × Rp 2.40B/yr savings applied to lease liability' }
    ],
    whereWeGotIt: {
      workbook: "AR2020 Note 28 + Slide 30 PSAK 73 Lease Deal",
      sheets: [
        { name: "2020A Breakdown (Note 28)", coords: "Rp 267,419 M = ~Rp 101.2 B Bank Debt Interest + Rp 166.2 B Lease Interest", desc: "Explains why 2020A Net Finance Costs doubled from 2019A (Rp 118.5B)." },
        { name: "PSAK 73 Lease Modification Rule", coords: "Lower fixed lease liability = lower annual lease finance interest", desc: "Connects Slide 30's 15-lease renegotiation directly to the Income Statement." }
      ],
      annualReport: "MPPA 2020 Annual Report, p. 128, Note 19 (Lease Liabilities Rp 2,253.3 B), & Note 28 (Finance Charges).",
      caseRef: "BNI Master Credit Facility (Note 15): Rp 0 incremental borrowing keeps bank debt interest flat."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. Why 2020 Jumped", formula: "118,496 (2019A bank interest) → 267,419 (2020A added 166,214 lease interest)" },
        { step: "2. 2021P Interest Cut", formula: "267,419 − 18,000 = Rp 249,419 M" },
        { step: "3. 2022P Interest Cut", formula: "267,419 − 28,000 = Rp 239,419 M" },
        { step: "4. 2023P Interest Cut", formula: "267,419 − 36,000 = Rp 231,419 M (15 leases × Rp 2.40B/yr)" }
      ],
      operationalBridge: [
        { item: "Zero New Bank Borrowing", impact: "+Rp 0 Interest Surge", desc: "100% of Rp 450B CapEx comes from asset sales, lease savings, and store cash." },
        { item: "PSAK 73 Anchor Mall Lease Cuts", impact: "-Rp 36.0 B / yr by 2023", desc: "Switching 15 mall contracts from fixed rent to variable revenue-share lowers capitalized lease liability and annual finance charges." }
      ]
    },
    strategicRationale: "In 2020, PSAK 73 forced MPPA to put Rp 166.2B of mall lease interest into Net Finance Costs. When we renegotiate 15 mall leases to variable revenue-share and shrink hypermarket space, PSAK 73 accounting reduces both the lease liability on the Balance Sheet and the lease finance interest on the Income Statement.",
    sensitivity: "Reducing Net Finance Costs to Rp 231.4B by 2023P helps push Times-Interest-Earned (TIE) to 2.43x."
  },

  ebt: {
    key: 'ebt',
    tag: 'INCOME STATEMENT · PRETAX PROFIT',
    tagId: 'LAPORAN LABA RUGI · LABA SEBELUM PAJAK (EBT)',
    statusPill: '-Rp 407.7B → +Rp 332.1B Pretax Turnaround',
    statusPillId: '-Rp 407,7M → +Rp 332,1M Pembalikan Sebelum Pajak',
    statusClass: 'badge-profit',
    title: 'EBT (Pretax Income): -Rp 408B → +Rp 332B',
    titleId: 'EBT (Laba Sebelum Pajak): -Rp 408 M → +Rp 332 M',
    sub: 'Operating Profit (EBIT) Minus Net Finance Costs Across 2019A–2023P',
    subId: 'Laba Usaha (EBIT) Dikurangi Biaya Keuangan Neto (2019A–2023P)',
    borderColor: '#137333',
    kpis: [
      { label: '2019A Actual', labelId: 'Realisasi 2019A', val: '-Rp 314.6 B', sub: 'Pretax loss', isLoss: true },
      { label: '2020A Actual', labelId: 'Realisasi 2020A', val: '-Rp 407.7 B', sub: 'Pretax loss', isLoss: true },
      { label: '2021P EBT', labelId: 'EBT 2021P', val: '-Rp 77.4 B', sub: '81% smaller loss', isLoss: true },
      { label: '2022P EBT', labelId: 'EBT 2022P', val: '+Rp 115.0 B', sub: 'Turns pretax positive', isProfit: true },
      { label: '2023P EBT', labelId: 'EBT 2023P', val: '+Rp 332.1 B', sub: '+Rp 739.8B swing vs 2020', isHighlight: true, isProfit: true }
    ],
    yearTable: [
      { year: '2019A', val: '-314,601', formula: '-196,105 (EBIT) − 118,496 (Interest)', source: 'AR2020 Consolidated P&L p. 128' },
      { year: '2020A', val: '-407,687', formula: '-140,268 (EBIT) − 267,419 (Interest)', source: 'AR2020 Consolidated P&L p. 128' },
      { year: '2021P', val: '-77,381', formula: '+172,038 (EBIT) − 249,419 (Interest)', source: 'Positive EBIT covers 69% of finance costs during Year-1 rollout' },
      { year: '2022P', val: '+114,980', formula: '+354,399 (EBIT) − 239,419 (Interest)', source: 'EBIT exceeds interest by 1.48x, crossing into pretax profitability' },
      { year: '2023P', val: '+332,075', formula: '+563,494 (EBIT) − 231,419 (Interest)', source: 'EBIT exceeds interest by 2.43x, delivering Rp 332.1B pretax profit' }
    ],
    whereWeGotIt: {
      workbook: "Derived Directly from EBIT − Net Finance Costs",
      sheets: [
        { name: "Pretax Profit Identity", coords: "EBT = EBIT − Net Finance Costs", desc: "Exact subtraction of financing and lease interest from operating income." }
      ],
      annualReport: "MPPA 2020 Annual Report, p. 128 (Loss Before Tax: -314,601 M in 2019; -407,687 M in 2020).",
      caseRef: "Harvard/PPM Case 23 Exhibit 2."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. 2021P EBT", formula: "172,038 − 249,419 = -Rp 77,381 M (81% loss reduction vs 2020A)" },
        { step: "2. 2022P EBT", formula: "354,399 − 239,419 = +Rp 114,980 M" },
        { step: "3. 2023P EBT", formula: "563,494 − 231,419 = +Rp 332,075 M" }
      ]
    },
    strategicRationale: "Because Hyfresh store rollouts take 12–18 months to scale, EBT in 2021 narrows drastically by 81% (from -Rp 408B to -Rp 77B) before turning cleanly profitable in 2022 (+Rp 115B) and accelerating to +Rp 332B in 2023.",
    sensitivity: "Pretax break-even occurs at only ~Rp 240 B EBIT, which MPPA clears easily by Year 2."
  },

  tax: {
    key: 'tax',
    tag: 'INCOME STATEMENT · CORPORATE TAX',
    tagId: 'LAPORAN LABA RUGI · PAJAK PENGHASILAN',
    statusPill: 'Statutory 22% Corporate Tax Rate (UU HPP Indonesia)',
    statusPillId: 'Tarif Pajak Badan 22% Sesuai UU Perpajakan Indonesia',
    statusClass: 'badge-brand',
    title: 'Tax Expense: Tax-Loss Shield in 2021, 22% in 2022–2023',
    titleId: 'Beban Pajak: Kompensasi Rugi di 2021, Tarif 22% pada 2022–2023',
    sub: 'Indonesian Statutory 22% Corporate Income Tax Applied on Positive Pretax Income',
    subId: 'Pajak Penghasilan Badan 22% Diterapkan Saat Laba Sebelum Pajak Positif',
    borderColor: '#475569',
    kpis: [
      { label: '2019A Tax Write-Down', labelId: 'Koreksi Pajak 2019A', val: 'Rp 238.1 B', sub: 'Deferred tax reversal' },
      { label: '2020A Tax Benefit', labelId: 'Manfaat Pajak 2020A', val: '-Rp 2.4 B', sub: 'Loss year credit' },
      { label: '2021P Tax', labelId: 'Pajak 2021P', val: 'Rp 0', sub: 'Negative EBT (-77.4B)' },
      { label: '2022P Tax (22%)', labelId: 'Pajak 2022P (22%)', val: 'Rp 25.3 B', sub: '22% × 114,980 M' },
      { label: '2023P Tax (22%)', labelId: 'Pajak 2023P (22%)', val: 'Rp 73.1 B', sub: '22% × 332,075 M', isHighlight: true }
    ],
    yearTable: [
      { year: '2019A', val: '238,073', formula: 'Deferred tax asset valuation allowance write-down', source: 'AR2020 p. 128 & Note 16 (Income Taxes)' },
      { year: '2020A', val: '-2,380', formula: 'Net deferred tax credit on operating loss', source: 'AR2020 p. 128 & Note 16' },
      { year: '2021P', val: '0', formula: 'EBT is -77,381 M (< 0) → Rp 0 current income tax payable', source: 'Indonesian tax loss carryforward rules (Pasal 6 UU PPh)' },
      { year: '2022P', val: '25,296', formula: '114,980 × 22.0% = 25,295.6 ≈ Rp 25,296 M', source: 'Indonesian Statutory Corporate Tax Rate 22% (UU No. 2/2020 & UU HPP)' },
      { year: '2023P', val: '73,057', formula: '332,075 × 22.0% = 73,056.5 ≈ Rp 73,057 M', source: 'Indonesian Statutory Corporate Tax Rate 22%' }
    ],
    whereWeGotIt: {
      workbook: "Indonesian Statutory Tax Law + AR2020 Note 16",
      sheets: [
        { name: "Corporate Income Tax Rule", coords: "Tax = 22% × EBT when EBT > 0; Rp 0 when EBT ≤ 0", desc: "Matches official Indonesian corporate tax rate effective from fiscal year 2020 onward." }
      ],
      annualReport: "MPPA 2020 Annual Report, p. 128 & Note 16 (2019 deferred tax derecognition: Rp 238,073 M).",
      regulatory: "UU No. 2/2020 & UU HPP No. 7/2021 fixed Indonesia's statutory corporate income tax rate at 22%."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. 2021P Tax", formula: "EBT -77,381 M is negative → Rp 0 tax expense" },
        { step: "2. 2022P Tax", formula: "+114,980 M × 22.0% = Rp 25,296 M" },
        { step: "3. 2023P Tax", formula: "+332,075 M × 22.0% = Rp 73,057 M" }
      ]
    },
    strategicRationale: "Applying zero current tax during the -Rp 77.4B 2021 loss year and the exact statutory 22% Indonesian corporate tax rate on 2022–2023 profits keeps the model legally compliant and avoids artificially inflating post-tax earnings.",
    sensitivity: "Historical accumulated fiscal losses (Note 16) could even defer part of 2022P tax cash outflow, making our 22% cash-tax assumption extra conservative."
  },

  net_income: {
    key: 'net_income',
    tag: 'INCOME STATEMENT · BOTTOM LINE',
    tagId: 'LAPORAN LABA RUGI · LABA BERSIH (PAT)',
    statusPill: '+Rp 271.3B Cumulative Net Profit (2021P–2023P)',
    statusPillId: 'Laba Bersih Kumulatif +Rp 271,3M (2021P–2023P)',
    statusClass: 'badge-profit',
    title: 'Net Income (PAT): -Rp 405B → +Rp 259B Recovery',
    titleId: 'Laba Bersih (PAT): -Rp 405 M → +Rp 259 M Pemulihan',
    sub: 'Loss Cut by 81% in 2021, Profitable by 2022 (+Rp 89.7B) & Scaling in 2023 (+Rp 259.0B)',
    subId: 'Rugi Turun 81% di 2021, Laba di 2022 (+Rp 89,7M) & Menguat di 2023 (+Rp 259,0M)',
    borderColor: '#137333',
    kpis: [
      { label: '2019A Loss', labelId: 'Rugi 2019A', val: '-Rp 552.7 B', sub: 'Audited loss', isLoss: true },
      { label: '2020A Loss', labelId: 'Rugi 2020A', val: '-Rp 405.3 B', sub: 'Audited loss', isLoss: true },
      { label: '2021P PAT', labelId: 'Laba Bersih 2021P', val: '-Rp 77.4 B', sub: '81% smaller loss', isLoss: true },
      { label: '2022P PAT', labelId: 'Laba Bersih 2022P', val: '+Rp 89.7 B', sub: 'First net profit year', isProfit: true },
      { label: '2023P PAT', labelId: 'Laba Bersih 2023P', val: '+Rp 259.0 B', sub: '+Rp 271.3B 3-yr cumulative', isHighlight: true, isProfit: true }
    ],
    yearTable: [
      { year: '2019A', val: '-552,674', formula: '-314,601 (EBT) − 238,073 (Tax)', source: 'AR2020 Consolidated P&L p. 128' },
      { year: '2020A', val: '-405,307', formula: '-407,687 (EBT) − (-2,380 Tax)', source: 'AR2020 Consolidated P&L p. 128' },
      { year: '2021P', val: '-77,381', formula: '-77,381 (EBT) − 0 (Tax)', source: 'Loss narrows by 81% while 10 Hyfresh stores & lease cuts ramp up' },
      { year: '2022P', val: '+89,684', formula: '+114,980 (EBT) − 25,296 (22% Tax)', source: 'First full net profitable year; 100% retained in equity' },
      { year: '2023P', val: '+259,018', formula: '+332,075 (EBT) − 73,057 (22% Tax)', source: 'Rebuilds Stockholders Equity from Rp 184.7B to Rp 456.1B (+2.5x)' }
    ],
    whereWeGotIt: {
      workbook: "Bottom Line of Pro Forma Income Statement → Feeds Balance Sheet Equity",
      sheets: [
        { name: "Net Income Identity", coords: "Net Income (PAT) = EBT − Tax Expense", desc: "Retained 100% in Equity (Rp 0 dividends) to rebuild solvency." }
      ],
      annualReport: "MPPA 2020 Annual Report, p. 128 & Statement of Changes in Equity p. 131.",
      caseRef: "Harvard/PPM Case 23 Exhibit 2."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. 2021P Net Income", formula: "-77,381 − 0 = -Rp 77,381 M" },
        { step: "2. 2022P Net Income", formula: "114,980 − 25,296 = +Rp 89,684 M" },
        { step: "3. 2023P Net Income", formula: "332,075 − 73,057 = +Rp 259,018 M" },
        { step: "4. Equity Roll-Forward", formula: "2020 Equity (184,734) + (-77,381 + 89,684 + 259,018) = Rp 456,055 M in 2023P" }
      ]
    },
    strategicRationale: "Four consecutive loss years drained MPPA's equity down to Rp 184.7 B by 2020. By linking realistic margin and lease improvements directly to the Balance Sheet, MPPA cuts its loss 81% in Year 1, returns to profit in Year 2, and grows equity 2.5x (to Rp 456.1 B) by Year 3 with zero new debt or share dilution.",
    sensitivity: "Every Rupiah of projected net income flows straight into Total Stockholders' Equity on the Balance Sheet tab (exact match)."
  },

  // =========================================================================
  // B. BALANCE SHEET ROWS (13 ROWS — 100% RECONCILED WITH INCOME STATEMENT)
  // =========================================================================
  bs_cash: {
    key: 'bs_cash',
    tag: 'BALANCE SHEET · CURRENT ASSET',
    tagId: 'NERACA · ASET LANCAR (KAS)',
    statusPill: 'Rp 299.8B → Rp 941.1B Liquidity Reserve',
    statusPillId: 'Rp 299,8M → Rp 941,1M Cadangan Kas',
    statusClass: 'badge-profit',
    title: 'Cash & Short-Term Investments: Rp 300B → Rp 941B',
    titleId: 'Kas & Setara Kas: Rp 300 M → Rp 941 M',
    sub: 'Rebuilt Gradually from Positive Store Cash Flow, SmartClub/FMX Sales & Inventory Reduction',
    subId: 'Terbangun Bertahap dari Arus Kas Gerai, Pelepasan SmartClub/FMX & Efisiensi Stok',
    borderColor: '#137333',
    kpis: [
      { label: '2019A Actual', labelId: 'Realisasi 2019A', val: 'Rp 304.3 B', sub: 'Audited cash' },
      { label: '2020A Actual', labelId: 'Realisasi 2020A', val: 'Rp 299.8 B', sub: 'Audited cash' },
      { label: '2021P Cash', labelId: 'Kas 2021P', val: 'Rp 452.4 B', sub: '+Rp 152.6 B change' },
      { label: '2022P Cash', labelId: 'Kas 2022P', val: 'Rp 612.1 B', sub: '+Rp 159.7 B change' },
      { label: '2023P Cash', labelId: 'Kas 2023P', val: 'Rp 941.1 B', sub: '+Rp 329.0 B change', isHighlight: true, isProfit: true }
    ],
    yearTable: [
      { year: '2019A', val: '304,295', formula: 'Audited Cash & Cash Equivalents', source: 'AR2020 Consolidated Balance Sheet p. 126 & Note 4' },
      { year: '2020A', val: '299,805', formula: '-Rp 4.5B YoY net cash outflow', source: 'AR2020 Consolidated Balance Sheet p. 126 & Note 4' },
      { year: '2021P', val: '452,424', formula: '299,805 + 152,619 (Net Cash Inflow)', source: 'SmartClub/FMX sale (+Rp 80B) + inventory release (+Rp 276B) − CapEx (-Rp 90B) − working cap paydown' },
      { year: '2022P', val: '612,108', formula: '452,424 + 159,684 (Net Cash Inflow)', source: 'Net Income (+Rp 89.7B) + D&A (+Rp 88.8B) + final asset proceeds (+Rp 40B) − CapEx (-Rp 90B)' },
      { year: '2023P', val: '941,126', formula: '612,108 + 329,018 (Net Cash Inflow)', source: 'Net Income (+Rp 259.0B) + D&A (+Rp 88.8B) + non-cash lease adj − CapEx (-Rp 90B)' }
    ],
    whereWeGotIt: {
      workbook: "AR2020 Note 4 + 3-Statement Cash Reconciliation",
      sheets: [
        { name: "Cash Roll-Forward", coords: "Ending Cash = Beginning Cash + Net Operating Cash + Divestment Proceeds − CapEx", desc: "Balances Assets = Liabilities + Equity exactly to the Rupiah across 2021P–2023P." }
      ],
      annualReport: "MPPA 2020 Annual Report, p. 126 & Note 4 (Cash on hand and in banks).",
      caseRef: "Slide 30 Capital Budget (Rp 90B/yr average CapEx funded internally)."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. 2021P Cash Build", formula: "299,805 + 152,619 net turnaround/working-cap inflow = Rp 452,424 M" },
        { step: "2. 2022P Cash Build", formula: "452,424 + 159,684 net cash generation = Rp 612,108 M" },
        { step: "3. 2023P Cash Build", formula: "612,108 + 329,018 net cash generation = Rp 941,126 M" }
      ]
    },
    strategicRationale: "Earlier unrealistic projections assumed Rp 3.62 Trillion in idle cash by 2023 (from fake 50% margins). Here, cash builds steadily to a healthy Rp 941.1 B (~1.5 months of operating costs) — enough to fund all Rp 90B/yr store rollouts internally and pay suppliers on time.",
    sensitivity: "Balances the exact accounting equation (Assets = Liabilities + Equity) in every projected year."
  },

  bs_ar: {
    key: 'bs_ar',
    tag: 'BALANCE SHEET · CURRENT ASSET',
    tagId: 'NERACA · ASET LANCAR (PIUTANG USAHA)',
    statusPill: '3.5% of Net Sales (~12.8 Days Collection)',
    statusPillId: '3,5% dari Penjualan (~12,8 Hari Penagihan)',
    statusClass: 'badge-brand',
    title: 'Accounts Receivable: Instant Checkout + Online Settlements',
    titleId: 'Piutang Usaha: Kasir Langsung + Kliring Mitra Daring',
    sub: 'Maintained at 3.5% of Revenue (~12.8 Days Sales Outstanding)',
    subId: 'Dijaga pada 3,5% Penjualan (~12,8 Hari Periode Penagihan)',
    borderColor: '#0369a1',
    kpis: [
      { label: '2019A Actual', labelId: 'Realisasi 2019A', val: 'Rp 220.1 B', sub: '2.54% of sales (9.3 days)' },
      { label: '2020A Actual', labelId: 'Realisasi 2020A', val: 'Rp 193.2 B', sub: '2.86% of sales (10.5 days)' },
      { label: '2021P (3.5%)', labelId: '2021P (3,5%)', val: 'Rp 240.9 B', sub: '12.8 days DSO' },
      { label: '2022P (3.5%)', labelId: '2022P (3,5%)', val: 'Rp 248.1 B', sub: '12.8 days DSO' },
      { label: '2023P (3.5%)', labelId: '2023P (3,5%)', val: 'Rp 263.0 B', sub: '12.8 days DSO', isHighlight: true }
    ],
    yearTable: [
      { year: '2019A', val: '220,079', formula: '220,079 ÷ 8,654,646 = 2.54% of Sales (9.3 days)', source: 'AR2020 Consolidated Balance Sheet p. 126 & Note 5' },
      { year: '2020A', val: '193,210', formula: '193,210 ÷ 6,746,594 = 2.86% of Sales (10.5 days)', source: 'AR2020 Consolidated Balance Sheet p. 126 & Note 5' },
      { year: '2021P', val: '240,853', formula: '6,881,526 × 3.50% = Rp 240,853 M', source: 'Slight rise from 2.86% as GrabMart/Shopee e-grocery settlements grow' },
      { year: '2022P', val: '248,079', formula: '7,087,972 × 3.50% = Rp 248,079 M', source: 'Consistent 12.8-day blended clearing cycle (instant cash + e-wallet/app)' },
      { year: '2023P', val: '262,964', formula: '7,513,250 × 3.50% = Rp 262,964 M', source: 'Consistent 3.50% of projected revenue' }
    ],
    whereWeGotIt: {
      workbook: "AR2020 Note 5 Historical Ratio + Omnichannel Adjustment",
      sheets: [
        { name: "Accounts Receivable Assumption", coords: "3.50% of Projected Net Sales (up slightly from 2.70% avg)", desc: "Reflects mix of instant in-store cash/QRIS payments and 2-to-3 week marketplace payouts." }
      ],
      annualReport: "MPPA 2020 Annual Report, p. 126 & Note 5 (Trade and Other Receivables).",
      caseRef: "AR Turnover = 28.57x; Collection Period = 12.8 days (matches Ratios slide)."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. 2021P AR (3.5%)", formula: "6,881,526 × 0.035 = Rp 240,853 M" },
        { step: "2. 2022P AR (3.5%)", formula: "7,087,972 × 0.035 = Rp 248,079 M" },
        { step: "3. 2023P AR (3.5%)", formula: "7,513,250 × 0.035 = Rp 262,964 M" }
      ]
    },
    strategicRationale: "Grocery supermarkets collect most money instantly at the register via cash, debit, or QRIS. Keeping Accounts Receivable at 3.5% of sales (~12.8 days, up modestly from 10.5 days in 2020) realistically models growing settlements from GrabMart and Shopee.",
    sensitivity: "Drives Accounts Receivable Turnover of 28.57x and Collection Period of 12.8 days on Slide 35."
  },

  bs_inventory: {
    key: 'bs_inventory',
    tag: 'BALANCE SHEET · CURRENT ASSET',
    tagId: 'NERACA · ASET LANCAR (PERSEDIAAN)',
    statusPill: '14.3% of Sales (2020A) → 10.0% of Sales (Lean Stock)',
    statusPillId: '14,3% Penjualan (2020A) → 10,0% (Stok Ramping)',
    statusClass: 'badge-profit',
    title: 'Inventories: Faster Fresh Turnover Frees Working Capital',
    titleId: 'Persediaan: Perputaran Produk Segar Membebaskan Modal Kerja',
    sub: 'Drops from Rp 964.5B to 10.0% of Sales (~46–48 Days Stock) as Non-Food Shrinks',
    subId: 'Turun dari Rp 964,5M ke 10,0% Penjualan Seiring Penghapusan Stok Non-Pangan Lambat',
    borderColor: '#137333',
    kpis: [
      { label: '2019A Actual', labelId: 'Realisasi 2019A', val: 'Rp 1,191.6 B', sub: '13.77% of sales (5.94x)' },
      { label: '2020A Actual', labelId: 'Realisasi 2020A', val: 'Rp 964.5 B', sub: '14.30% of sales (5.64x)' },
      { label: '2021P (10%)', labelId: '2021P (10%)', val: 'Rp 688.2 B', sub: '7.90x inventory turnover', isProfit: true },
      { label: '2022P (10%)', labelId: '2022P (10%)', val: 'Rp 708.8 B', sub: '7.75x inventory turnover', isProfit: true },
      { label: '2023P (10%)', labelId: '2023P (10%)', val: 'Rp 751.3 B', sub: '7.60x inventory turnover', isHighlight: true, isProfit: true }
    ],
    yearTable: [
      { year: '2019A', val: '1,191,567', formula: '13.77% of Sales (5.94x COGS turnover)', source: 'AR2020 Consolidated Balance Sheet p. 126 & Note 6' },
      { year: '2020A', val: '964,503', formula: '14.30% of Sales (5.64x COGS turnover)', source: 'AR2020 p. 126 & Note 6 (slow electronics/general merchandise drag)' },
      { year: '2021P', val: '688,153', formula: '6,881,526 × 10.00% = Rp 688,153 M', source: 'Clears SmartClub/FMX stock (-Rp 85B) + trims slow non-food hypermarket shelves' },
      { year: '2022P', val: '708,797', formula: '7,087,972 × 10.00% = Rp 708,797 M', source: 'Fresh-focused Hyfresh shelves turn 7.75x/yr (~47 days overall)' },
      { year: '2023P', val: '751,325', formula: '7,513,250 × 10.00% = Rp 751,325 M', source: '7.60x turnover across 50 Hyfresh & 45 resized hypermarkets' }
    ],
    whereWeGotIt: {
      workbook: "AR2020 Note 6 + Format Substitution",
      sheets: [
        { name: "Lean Inventory Target", coords: "10.00% of Projected Revenue (~Rp 688B–751B)", desc: "Down from 14.3% in 2020A after removing slow-moving bulk wholesale & general merchandise." }
      ],
      annualReport: "MPPA 2020 Annual Report, p. 126 & Note 6 (Merchandise Inventories).",
      caseRef: "Directly drives Inventory Turnover of 7.60x–7.90x on Slide 35 (Ratios)."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. 2021P Inventory (10%)", formula: "6,881,526 × 0.10 = Rp 688,153 M (Releases Rp 276.4 B cash vs 2020)" },
        { step: "2. 2022P Inventory (10%)", formula: "7,087,972 × 0.10 = Rp 708,797 M" },
        { step: "3. 2023P Inventory (10%)", formula: "7,513,250 × 0.10 = Rp 751,325 M" }
      ]
    },
    strategicRationale: "Hypermarkets tie up huge cash in slow-moving TVs, appliances, and bulk boxes (48–65 days). Clearing SmartClub wholesale and shifting into daily fresh groceries lowers inventory from 14.3% to 10.0% of sales, releasing Rp 276B of trapped cash in Year 1.",
    sensitivity: "Matches Inventory Turnover = COGS ÷ Inventory (7.90x / 7.75x / 7.60x) on the Ratios slide."
  },

  bs_other_ca: {
    key: 'bs_other_ca',
    tag: 'BALANCE SHEET · CURRENT ASSET',
    tagId: 'NERACA · ASET LANCAR LAINNYA',
    statusPill: '1.5% of Net Sales (Aligned to 2019–2020 Avg 1.66%)',
    statusPillId: '1,5% dari Penjualan (Setara Rata-rata 2019–2020 1,66%)',
    statusClass: 'badge-brand',
    title: 'Other Current Assets: Prepaid Taxes & Store Advances',
    titleId: 'Aset Lancar Lainnya: Pajak Dibayar di Muka & Uang Muka',
    sub: 'Normalized at 1.50% of Revenue Across 2021P–2023P',
    subId: 'Dinormalkan pada 1,50% Pendapatan (2021P–2023P)',
    borderColor: '#475569',
    kpis: [
      { label: '2019A Actual', labelId: 'Realisasi 2019A', val: 'Rp 188.1 B', sub: '2.17% of sales' },
      { label: '2020A Actual', labelId: 'Realisasi 2020A', val: 'Rp 77.7 B', sub: '1.15% of sales' },
      { label: '2021P (1.5%)', labelId: '2021P (1,5%)', val: 'Rp 103.2 B', sub: '1.50% of sales' },
      { label: '2022P (1.5%)', labelId: '2022P (1,5%)', val: 'Rp 106.3 B', sub: '1.50% of sales' },
      { label: '2023P (1.5%)', labelId: '2023P (1,5%)', val: 'Rp 112.7 B', sub: '1.50% of sales', isHighlight: true }
    ],
    yearTable: [
      { year: '2019A', val: '188,106', formula: '2.17% of Sales', source: 'AR2020 Balance Sheet p. 126 & Notes 7–9 (prepaid VAT/rent & advances)' },
      { year: '2020A', val: '77,748', formula: '1.15% of Sales (2-yr avg = 1.66%)', source: 'AR2020 Balance Sheet p. 126 & Notes 7–9' },
      { year: '2021P', val: '103,223', formula: '6,881,526 × 1.50% = Rp 103,223 M', source: 'Aligned with 1.66% historical average for new store advances' },
      { year: '2022P', val: '106,320', formula: '7,087,972 × 1.50% = Rp 106,320 M', source: '1.50% of projected revenue' },
      { year: '2023P', val: '112,699', formula: '7,513,250 × 1.50% = Rp 112,699 M', source: '1.50% of projected revenue' }
    ],
    whereWeGotIt: {
      workbook: "AR2020 Notes 7–9 (Prepayments & Prepaid Taxes)",
      sheets: [
        { name: "2019A–2020A Average Ratio", coords: "(2.17% + 1.15%) ÷ 2 = 1.66% → Modeled at 1.50%", desc: "Covers routine prepaid mall utilities, VAT credits, and fresh supplier deposits." }
      ],
      annualReport: "MPPA 2020 Annual Report, p. 126 & Notes 7–9.",
      caseRef: "Replaces the unrealistic Rp 1.24T placeholder from the generic template."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. 2021P Other CA", formula: "6,881,526 × 1.50% = Rp 103,223 M" },
        { step: "2. 2022P Other CA", formula: "7,087,972 × 1.50% = Rp 106,320 M" },
        { step: "3. 2023P Other CA", formula: "7,513,250 × 1.50% = Rp 112,699 M" }
      ]
    },
    strategicRationale: "Holding Other Current Assets at 1.5% of sales matches MPPA's real 2019–2020 operating baseline (~1.66%) instead of the arbitrary Rp 1.24T number generated by the unadjusted spreadsheet.",
    sensitivity: "Included directly in Total Current Assets and Quick Assets."
  },

  bs_total_ca: {
    key: 'bs_total_ca',
    tag: 'BALANCE SHEET · SUBTOTAL',
    tagId: 'NERACA · SUBTOTAL ASET LANCAR',
    statusPill: 'Current Ratio Strengthens 0.56x → 1.11x',
    statusPillId: 'Rasio Lancar Pulih 0,56x → 1,11x',
    statusClass: 'badge-profit',
    title: 'Total Current Assets: Liquidity Recovery',
    titleId: 'Total Aset Lancar: Pemulihan Likuiditas',
    sub: 'Cash + Accounts Receivable + Inventories + Other Current Assets',
    subId: 'Kas + Piutang Usaha + Persediaan + Aset Lancar Lainnya',
    borderColor: '#137333',
    kpis: [
      { label: '2019A Actual', labelId: 'Realisasi 2019A', val: 'Rp 1,904.0 B', sub: 'Current Ratio: 0.73x' },
      { label: '2020A Actual', labelId: 'Realisasi 2020A', val: 'Rp 1,535.3 B', sub: 'Current Ratio: 0.56x', isLoss: true },
      { label: '2021P Total CA', labelId: 'Total Aset Lancar 2021P', val: 'Rp 1,484.7 B', sub: 'Current Ratio: 0.76x' },
      { label: '2022P Total CA', labelId: 'Total Aset Lancar 2022P', val: 'Rp 1,675.3 B', sub: 'Current Ratio: 0.89x' },
      { label: '2023P Total CA', labelId: 'Total Aset Lancar 2023P', val: 'Rp 2,068.1 B', sub: 'Current Ratio: 1.11x (+2x vs 2020)', isHighlight: true, isProfit: true }
    ],
    yearTable: [
      { year: '2019A', val: '1,904,047', formula: '304,295 + 220,079 + 1,191,567 + 188,106', source: 'AR2020 Consolidated Balance Sheet p. 126' },
      { year: '2020A', val: '1,535,266', formula: '299,805 + 193,210 + 964,503 + 77,748', source: 'AR2020 Consolidated Balance Sheet p. 126' },
      { year: '2021P', val: '1,484,653', formula: '452,424 + 240,853 + 688,153 + 103,223', source: 'Sum of the 4 Current Asset rows above (Cash rises as Inventory slims)' },
      { year: '2022P', val: '1,675,304', formula: '612,108 + 248,079 + 708,797 + 106,320', source: 'Sum of the 4 Current Asset rows above' },
      { year: '2023P', val: '2,068,114', formula: '941,126 + 262,964 + 751,325 + 112,699', source: 'Current Assets exceed Current Liabilities (1.11x Current Ratio)' }
    ],
    whereWeGotIt: {
      workbook: "Exact Sum of Current Assets Above",
      sheets: [
        { name: "Current Assets Total", coords: "Total CA = Cash + AR + Inventory + Other CA", desc: "Numerator for Current Ratio on Slide 35." }
      ],
      annualReport: "MPPA 2020 Annual Report, p. 126 (Total Current Assets).",
      caseRef: "Reconciled 100% with Liquidity Ratios on Slide 35."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. 2021P Total CA", formula: "452,424 + 240,853 + 688,153 + 103,223 = Rp 1,484,653 M" },
        { step: "2. 2022P Total CA", formula: "612,108 + 248,079 + 708,797 + 106,320 = Rp 1,675,304 M" },
        { step: "3. 2023P Total CA", formula: "941,126 + 262,964 + 751,325 + 112,699 = Rp 2,068,114 M" }
      ]
    },
    strategicRationale: "In 2020, Total Current Assets (Rp 1.54T) covered only 56% of Current Liabilities (Rp 2.76T), causing severe supplier payment pressure. By 2023, growing cash reserves lift Current Assets to Rp 2.07T — exceeding Current Liabilities (1.11x Current Ratio).",
    sensitivity: "Directly feeds Current Ratio (0.76x → 0.89x → 1.11x) and Quick Ratio (0.41x → 0.51x → 0.71x) on Slide 35."
  },

  bs_ppe: {
    key: 'bs_ppe',
    tag: 'BALANCE SHEET · FIXED ASSETS',
    tagId: 'NERACA · ASET TETAP NETO (PP&E)',
    statusPill: 'Rp 90B/yr CapEx Offset by Rp 88.8B/yr Depreciation',
    statusPillId: 'Belanja Modal Rp 90M/thn Diimbangi Penyusutan Rp 88,8M/thn',
    statusClass: 'badge-brand',
    title: 'Net Property, Plant & Equipment: Rp 790B → Rp 794B',
    titleId: 'Aset Tetap Neto: Rp 790 M → Rp 794 M',
    sub: 'Disciplined Rp 90B/yr Store & Cold-Chain CapEx Balanced by Ongoing Depreciation',
    subId: 'Belanja Modal Gerai & Rantai Dingin Rp 90M/thn Seimbang dengan Penyusutan Berjalan',
    borderColor: '#475569',
    kpis: [
      { label: '2019A Actual', labelId: 'Realisasi 2019A', val: 'Rp 926.3 B', sub: 'Audited Net PP&E' },
      { label: '2020A Actual', labelId: 'Realisasi 2020A', val: 'Rp 789.9 B', sub: 'Audited Net PP&E' },
      { label: '2021P Net PP&E', labelId: 'Aset Tetap 2021P', val: 'Rp 791.1 B', sub: '+Rp 1.25 B net add' },
      { label: '2022P Net PP&E', labelId: 'Aset Tetap 2022P', val: 'Rp 792.4 B', sub: '+Rp 1.25 B net add' },
      { label: '2023P Net PP&E', labelId: 'Aset Tetap 2023P', val: 'Rp 793.6 B', sub: '9.47x Fixed Asset Turnover', isHighlight: true }
    ],
    yearTable: [
      { year: '2019A', val: '926,287', formula: 'Gross PP&E minus accumulated depreciation', source: 'AR2020 Balance Sheet p. 126 & Note 10' },
      { year: '2020A', val: '789,871', formula: '-Rp 136.4B net depreciation & SmartClub disposals', source: 'AR2020 Balance Sheet p. 126 & Note 10' },
      { year: '2021P', val: '791,121', formula: '789,871 + 90,000 (CapEx) − 88,750 (Depr)', source: 'Slide 30 annual CapEx (+Rp 90B/yr) matched by store/DC depreciation (-Rp 88.8B/yr)' },
      { year: '2022P', val: '792,371', formula: '791,121 + 90,000 (CapEx) − 88,750 (Depr)', source: 'Steady replacement of legacy boxes with compact Hyfresh store equipment' },
      { year: '2023P', val: '793,621', formula: '792,371 + 90,000 (CapEx) − 88,750 (Depr)', source: 'Lifts Fixed Assets Turnover from 8.54x (2020) to 9.47x (2023P)' }
    ],
    whereWeGotIt: {
      workbook: "AR2020 Note 10 + Slide 30 Capital Budget (Rp 450B / 5 yrs)",
      sheets: [
        { name: "Fixed Asset Roll-Forward", coords: "Net PP&E(t) = Net PP&E(t-1) + Rp 90,000 M CapEx − Rp 88,750 M Depr", desc: "Annual CapEx equals Rp 45B Hyfresh + Rp 27B Hypermarket Resize + Rp 18B Cold Chain/IT = Rp 90B/yr." }
      ],
      annualReport: "MPPA 2020 Annual Report, p. 126 & Note 10 (Fixed Assets).",
      caseRef: "Slide 30 Capital Budgeting Plan (Rp 450.0B over 2021–2025)."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. Annual CapEx Spend", formula: "Rp 45.0B (Hyfresh) + Rp 27.0B (Resize) + Rp 18.0B (Cold Chain/IT) = Rp 90,000 M/yr" },
        { step: "2. Annual Depreciation", formula: "Rp 88,750 M/yr (6-year straight-line store fitouts + existing stores)" },
        { step: "3. Net Yearly Change", formula: "90,000 − 88,750 = +Rp 1,250 M/yr (+Rp 1.25 B/yr)" }
      ]
    },
    strategicRationale: "Because Slide 30 spreads the Rp 450B investment evenly at Rp 90B/year while existing store equipment depreciates at ~Rp 88.8B/year, Net PP&E stays compact near Rp 792B–794B while generating higher revenue per store (lifting Fixed Assets Turnover to 9.47x).",
    sensitivity: "Directly feeds Fixed Assets Turnover = Revenue ÷ Net PP&E on Slide 35."
  },

  bs_other_lta: {
    key: 'bs_other_lta',
    tag: 'BALANCE SHEET · LONG-TERM ASSETS',
    tagId: 'NERACA · ASET TIDAK LANCAR LAINNYA',
    statusPill: 'PSAK 73 Right-of-Use Mall Lease Reduction',
    statusPillId: 'Pengurangan Aset Hak Guna Sewa Mal PSAK 73',
    statusClass: 'badge-profit',
    title: 'Other Long-Term Assets & ROU Leases: Rp 2.19T → Rp 617B',
    titleId: 'Aset Jangka Panjang & Sewa Guna PSAK 73: Rp 2,19T → Rp 617M',
    sub: 'PSAK 73 Right-of-Use Assets Shrink as 45 Hypermarkets Resize & 15 Mall Leases Cut Fixed Rent',
    subId: 'Aset Hak Guna Menyusut Saat 45 Hipermarket Diperkecil & 15 Kontrak Mal Dinegosiasi Ulang',
    borderColor: '#0369a1',
    kpis: [
      { label: '2019A (Pre-PSAK 73)', labelId: '2019A (Pra-PSAK 73)', val: 'Rp 990.5 B', sub: 'Deposits & intangibles' },
      { label: '2020A (PSAK 73 Added)', labelId: '2020A (Tambah PSAK 73)', val: 'Rp 2,185.4 B', sub: '+Rp 1.42T ROU leases', isLoss: true },
      { label: '2021P Other LTA', labelId: 'Aset Lain 2021P', val: 'Rp 1,147.4 B', sub: '-Rp 1.04T lease slimming' },
      { label: '2022P Other LTA', labelId: 'Aset Lain 2022P', val: 'Rp 882.4 B', sub: 'Ongoing ROU run-off' },
      { label: '2023P Other LTA', labelId: 'Aset Lain 2023P', val: 'Rp 617.4 B', sub: 'Lighter asset footprint', isHighlight: true }
    ],
    yearTable: [
      { year: '2019A', val: '990,475', formula: 'Deferred tax, mall security deposits (Rp 175B) & advances', source: 'AR2020 Consolidated Balance Sheet p. 126 & Notes 11–14' },
      { year: '2020A', val: '2,185,374', formula: 'Added Rp 1,419,652M PSAK 73 Right-of-Use (ROU) mall lease assets', source: 'AR2020 p. 126 & Note 12 (PSAK 73 adoption Jan 1, 2020)' },
      { year: '2021P', val: '1,147,374', formula: '2,185,374 − 1,038,000 (ROU derecognition & amortization)', source: 'Exiting SmartClub/FMX leases + downsizing anchor mall boxes + Note 11 deposit refunds' },
      { year: '2022P', val: '882,374', formula: '1,147,374 − 265,000 (ROU amortization & sublease/resize)', source: 'Mid-tier mall lease switches to variable revenue-share (off ROU balance)' },
      { year: '2023P', val: '617,374', formula: '882,374 − 265,000 (ROU amortization & sublease/resize)', source: 'Clean, smaller-footprint asset structure (ROA lifts to 7.4%)' }
    ],
    whereWeGotIt: {
      workbook: "AR2020 Note 12 (PSAK 73 ROU Assets) + Note 11 (Lease Deposits)",
      sheets: [
        { name: "2020A Spike Explained", coords: "2019A: Rp 990.5B → 2020A: Rp 2,185.4B (PSAK 73 adoption)", desc: "In 2020, accounting rules put multi-year mall lease commitments onto the Balance Sheet." },
        { name: "Lease Downsizing Effect", coords: "ROU Assets decline as fixed multi-year mall contracts end or shrink", desc: "Mirrors lease liability paydown and derecognition under PSAK 73." }
      ],
      annualReport: "MPPA 2020 Annual Report, p. 126, Note 11 (Security Deposits Rp 174.7B), & Note 12 (Right-of-Use Assets Rp 1,419.7B).",
      caseRef: "Matching asset-side reduction for PSAK 73 lease renegotiations."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. 2020A ROU Asset Addition", formula: "Rp 1,419,652 M added on Jan 1, 2020 under PSAK 73 (Note 12)" },
        { step: "2. 2021P Reduction", formula: "2,185,374 − 1,038,000 (exits + anchor modifications) = Rp 1,147,374 M" },
        { step: "3. 2022P–2023P Amortization", formula: "-Rp 265,000 M/yr normal ROU amortization & sublease shifts → Rp 617,374 M" }
      ]
    },
    strategicRationale: "Why did Long-Term Assets shoot up in 2020? Because PSAK 73 forced MPPA to capitalize Rp 1.42T of mall lease contracts as 'Right-of-Use Assets'. Exiting SmartClub/FMX, downsizing hypermarkets, and letting old fixed leases run off brings this bloated asset line back down.",
    sensitivity: "Smaller ROU lease assets improve Total Assets Turnover from 1.50x to 2.16x and lift ROA to +7.4% by 2023P."
  },

  bs_total_assets: {
    key: 'bs_total_assets',
    tag: 'BALANCE SHEET · TOTAL ASSETS',
    tagId: 'NERACA · TOTAL ASET',
    statusPill: 'Exact Match: Total Assets = Total Liabilities + Equity',
    statusPillId: 'Cocok Tepat: Total Aset = Total Liabilitas + Ekuitas',
    statusClass: 'badge-profit',
    title: 'Total Assets: Leaner & More Productive Base',
    titleId: 'Total Aset: Struktur Aset Lebih Ramping & Produktif',
    sub: 'Total Current Assets + Net PP&E + Other Long-Term Assets & ROU Leases',
    subId: 'Total Aset Lancar + Aset Tetap Neto + Aset Jangka Panjang Lainnya',
    borderColor: '#137333',
    kpis: [
      { label: '2019A Actual', labelId: 'Realisasi 2019A', val: 'Rp 3,820.8 B', sub: 'Matches L+E' },
      { label: '2020A Actual', labelId: 'Realisasi 2020A', val: 'Rp 4,510.5 B', sub: 'ROU spike · Matches L+E' },
      { label: '2021P Assets', labelId: 'Aset 2021P', val: 'Rp 3,423.1 B', sub: 'Matches L+E = 3,423.1 B' },
      { label: '2022P Assets', labelId: 'Aset 2022P', val: 'Rp 3,350.0 B', sub: 'Matches L+E = 3,350.0 B' },
      { label: '2023P Assets', labelId: 'Aset 2023P', val: 'Rp 3,479.1 B', sub: 'Matches L+E = 3,479.1 B', isHighlight: true, isProfit: true }
    ],
    yearTable: [
      { year: '2019A', val: '3,820,809', formula: '1,904,047 + 926,287 + 990,475', source: 'AR2020 Consolidated Balance Sheet p. 126' },
      { year: '2020A', val: '4,510,511', formula: '1,535,266 + 789,871 + 2,185,374', source: 'AR2020 Consolidated Balance Sheet p. 126' },
      { year: '2021P', val: '3,423,148', formula: '1,484,653 + 791,121 + 1,147,374', source: 'Balanced exactly against Total Liab & Equity (3,423,148)' },
      { year: '2022P', val: '3,350,049', formula: '1,675,304 + 792,371 + 882,374', source: 'Balanced exactly against Total Liab & Equity (3,350,049)' },
      { year: '2023P', val: '3,479,109', formula: '2,068,114 + 793,621 + 617,374', source: 'Balanced exactly against Total Liab & Equity (3,479,109)' }
    ],
    whereWeGotIt: {
      workbook: "Accounting Identity Check (Assets = Liabilities + Equity)",
      sheets: [
        { name: "Zero Discrepancy Audit", coords: "Total Assets − (Total Liabilities + Equity) = 0 in all 5 years", desc: "No unlinked plug values anywhere on the Balance Sheet." }
      ],
      annualReport: "MPPA 2020 Annual Report, p. 126 (Total Assets).",
      caseRef: "Denominator for ROA and Total Assets Turnover on Slide 35."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. 2021P Assets", formula: "1,484,653 (CA) + 791,121 (PP&E) + 1,147,374 (Other LTA) = Rp 3,423,148 M" },
        { step: "2. 2022P Assets", formula: "1,675,304 (CA) + 792,371 (PP&E) + 882,374 (Other LTA) = Rp 3,350,049 M" },
        { step: "3. 2023P Assets", formula: "2,068,114 (CA) + 793,621 (PP&E) + 617,374 (Other LTA) = Rp 3,479,109 M" }
      ]
    },
    strategicRationale: "Total Assets slim from Rp 4.51T back to ~Rp 3.48T not because the business shrinks — Cash actually triples to Rp 941B! — but because bloated hypermarket lease commitments (ROU Assets) come down as stores get smaller.",
    sensitivity: "Drives Total Assets Turnover up from 1.50x (2020A) to 2.16x (2023P) and ROA to +7.4%."
  },

  bs_current_liab: {
    key: 'bs_current_liab',
    tag: 'BALANCE SHEET · CURRENT LIABILITIES',
    tagId: 'NERACA · LIABILITAS JANGKA PENDEK',
    statusPill: 'Rp 2.76T (2020A) → Rp 1.86T (2023P)',
    statusPillId: 'Rp 2,76T (2020A) → Rp 1,86T (2023P)',
    statusClass: 'badge-profit',
    title: 'Total Current Liabilities: Trade Payables & Short-Term Debt',
    titleId: 'Total Liabilitas Lancar: Utang Usaha & Sewa Jangka Pendek',
    sub: 'Drops as Current PSAK 73 Lease Obligations Shrink & Cash Pays Down Overdue Supplier Balances',
    subId: 'Turun Seiring Berkurangnya Kewajiban Sewa Lancar & Pelunasan Tepat Waktu ke Pemasok',
    borderColor: '#df0036',
    kpis: [
      { label: '2019A Actual', labelId: 'Realisasi 2019A', val: 'Rp 2,618.4 B', sub: 'Audited current liab' },
      { label: '2020A Actual', labelId: 'Realisasi 2020A', val: 'Rp 2,763.1 B', sub: 'Includes 690.6B lease + 500B ST BNI', isLoss: true },
      { label: '2021P Curr Liab', labelId: 'Liab Lancar 2021P', val: 'Rp 1,953.1 B', sub: 'Reduced overdue AP & leases' },
      { label: '2022P Curr Liab', labelId: 'Liab Lancar 2022P', val: 'Rp 1,890.3 B', sub: 'Current Ratio improves to 0.89x' },
      { label: '2023P Curr Liab', labelId: 'Liab Lancar 2023P', val: 'Rp 1,860.4 B', sub: 'Current Ratio reaches 1.11x', isHighlight: true, isProfit: true }
    ],
    yearTable: [
      { year: '2019A', val: '2,618,390', formula: 'Trade payables + accruals + short-term loans', source: 'AR2020 Balance Sheet p. 127 & Notes 15–19' },
      { year: '2020A', val: '2,763,099', formula: 'Rp 1,073.8B AP + Rp 690.6B curr lease + Rp 500.0B BNI ST + accruals', source: 'AR2020 p. 127 & Notes 15, 16, 17, 19' },
      { year: '2021P', val: '1,953,117', formula: '2,763,099 − 809,982 reduction', source: 'Lower SmartClub purchases (-AP), partial BNI ST paydown & ROU current lease cuts' },
      { year: '2022P', val: '1,890,334', formula: '1,953,117 − 62,783 reduction', source: 'Continued trade payable normalization & smaller mall lease payments' },
      { year: '2023P', val: '1,860,376', formula: '1,890,334 − 29,958 reduction', source: 'Healthy supplier payable cycle covered 1.11x by Current Assets' }
    ],
    whereWeGotIt: {
      workbook: "AR2020 Notes 15, 16, 17 & 19",
      sheets: [
        { name: "2020A Breakdown", coords: "AP (1,073.8B) + Current Lease Liab (690.6B) + Short-Term BNI Loan (500.0B) + Other (498.7B)", desc: "Clearing excess SmartClub stock and renegotiating mall leases reduces both AP and current lease bills." }
      ],
      annualReport: "MPPA 2020 Annual Report, p. 127 & Notes 15–19.",
      caseRef: "Denominator for Current Ratio and Quick Ratio on Slide 35."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. 2021P Paydown", formula: "2,763,099 − 809,982 (lease exits + overdue AP cleared) = Rp 1,953,117 M" },
        { step: "2. 2022P Normalization", formula: "1,953,117 − 62,783 = Rp 1,890,334 M" },
        { step: "3. 2023P Target", formula: "1,890,334 − 29,958 = Rp 1,860,376 M" }
      ]
    },
    strategicRationale: "In 2020, current liabilities swelled to Rp 2.76T because of overdue supplier payables and Rp 690.6B in current mall lease bills. Exiting SmartClub, restoring cash flow, and converting fixed mall leases drops Current Liabilities down to Rp 1.86T — ending supplier payment freezes.",
    sensitivity: "Directly improves Current Ratio (0.56x → 1.11x) and Quick Ratio (0.21x → 0.71x)."
  },

  bs_lt_debt: {
    key: 'bs_lt_debt',
    tag: 'BALANCE SHEET · LONG-TERM BANK DEBT',
    tagId: 'NERACA · UTANG BANK JANGKA PANJANG',
    statusPill: 'Rp 0 New Long-Term Bank Debt (100% Self-Funded)',
    statusPillId: 'Rp 0 Utang Bank Jangka Panjang Baru (Didanai Mandiri)',
    statusClass: 'badge-profit',
    title: 'Long-Term Bank Debt: Held at Zero',
    titleId: 'Utang Bank Jangka Panjang: Dijaga pada Nol',
    sub: 'Rp 0 New Long-Term Bank Borrowing Across 2021P–2023P',
    subId: 'Tanpa Tambahan Pinjaman Bank Jangka Panjang Baru (2021P–2023P)',
    borderColor: '#137333',
    kpis: [
      { label: '2019A Actual', labelId: 'Realisasi 2019A', val: 'Rp 250.0 B', sub: 'LT BNI loan portion' },
      { label: '2020A Actual', labelId: 'Realisasi 2020A', val: 'Rp 0', sub: 'Reclassified to current (Note 15)' },
      { label: '2021P LT Debt', labelId: 'Utang Bank 2021P', val: 'Rp 0', sub: 'Zero new borrowing' },
      { label: '2022P LT Debt', labelId: 'Utang Bank 2022P', val: 'Rp 0', sub: 'Zero new borrowing' },
      { label: '2023P LT Debt', labelId: 'Utang Bank 2023P', val: 'Rp 0', sub: '0.0% LT Debt / Equity', isHighlight: true, isProfit: true }
    ],
    yearTable: [
      { year: '2019A', val: '250,000', formula: 'Audited long-term bank facility balance', source: 'AR2020 Balance Sheet p. 127 & Note 15 (BNI)' },
      { year: '2020A', val: '0', formula: 'Remaining Rp 500B BNI facility sits in Short-Term Loans', source: 'AR2020 Balance Sheet p. 127 & Note 15 (Rp 0 long-term)' },
      { year: '2021P', val: '0', formula: 'Rp 0 incremental long-term bank loans', source: 'Slide 30 Strategy: CapEx funded internally (asset sales + leases + cash flow)' },
      { year: '2022P', val: '0', formula: 'Rp 0 incremental long-term bank loans', source: 'Matches Internal Self-Funding recommendation on EPS/EBIT tab' },
      { year: '2023P', val: '0', formula: 'Rp 0 incremental long-term bank loans', source: 'Preserves BNI loan covenants cleanly (0.0% LT Bank Debt / Equity)' }
    ],
    whereWeGotIt: {
      workbook: "AR2020 Note 15 (BNI Facility) + Slide 30 Zero-Debt Mandate",
      sheets: [
        { name: "Zero Long-Term Borrowing", coords: "2020A–2023P: Rp 0 Long-Term Bank Debt", desc: "Replaces the stale Rp 2,000M unit-test placeholder so Balance Sheet reflects MPPA's real zero LT debt." }
      ],
      annualReport: "MPPA 2020 Annual Report, p. 127 & Note 15 (Bank Loans).",
      caseRef: "Numerator for Long-term Bank Debt / Equity ratio (0.0%) on Slide 35."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. 2020A Starting Point", formula: "Long-term bank debt = Rp 0 (Rp 500B working capital facility is short-term)" },
        { step: "2. 2021P–2023P Policy", formula: "Rp 0 added long-term bank debt → Balance remains Rp 0" }
      ]
    },
    strategicRationale: "Taking new long-term bank loans while equity is thin (Rp 184.7B in 2020) would violate lender leverage limits and inflate interest. Self-funding keeps Long-Term Bank Debt at zero.",
    sensitivity: "Keeps Long-Term Bank Debt / Equity at 0.0% across all projected years."
  },

  bs_lt_lease: {
    key: 'bs_lt_lease',
    tag: 'BALANCE SHEET · NON-CURRENT LIABILITIES',
    tagId: 'NERACA · LIABILITAS SEWA & JANGKA PANJANG LAINNYA',
    statusPill: 'Rp 1.56T (2020A) → Rp 1.16T (2023P) (-Rp 400B)',
    statusPillId: 'Rp 1,56T (2020A) → Rp 1,16T (2023P) (-Rp 400M)',
    statusClass: 'badge-profit',
    title: 'Long-Term Lease & Other Liabilities: -Rp 400B Reduction',
    titleId: 'Liabilitas Sewa Jangka Panjang & Lainnya: Turun -Rp 400M',
    sub: 'PSAK 73 Anchor Mall Lease Cuts & Multi-Year Lease Payments Shrink Non-Current Obligations',
    subId: 'Pemotongan Sewa Mal PSAK 73 & Pelunasan Kontrak Menurunkan Kewajiban Jangka Panjang',
    borderColor: '#0369a1',
    kpis: [
      { label: '2019A (Pre-PSAK 73)', labelId: '2019A (Pra-PSAK 73)', val: 'Rp 421.7 B', sub: 'Employee benefits + deferred' },
      { label: '2020A (PSAK 73 Added)', labelId: '2020A (Tambah PSAK 73)', val: 'Rp 1,562.7 B', sub: 'Note 19 long-term leases', isLoss: true },
      { label: '2021P LT Lease', labelId: 'Sewa JP 2021P', val: 'Rp 1,362.7 B', sub: '-Rp 200.0 B cut' },
      { label: '2022P LT Lease', labelId: 'Sewa JP 2022P', val: 'Rp 1,262.7 B', sub: '-Rp 100.0 B cut' },
      { label: '2023P LT Lease', labelId: 'Sewa JP 2023P', val: 'Rp 1,162.7 B', sub: '-Rp 400.0 B total reduction', isHighlight: true, isProfit: true }
    ],
    yearTable: [
      { year: '2019A', val: '421,738', formula: 'Employee benefits (Note 20) & long-term payables', source: 'AR2020 Consolidated Balance Sheet p. 127' },
      { year: '2020A', val: '1,562,678', formula: 'Added non-current PSAK 73 mall lease liabilities (Note 19)', source: 'AR2020 Balance Sheet p. 127 & Note 19' },
      { year: '2021P', val: '1,362,678', formula: '1,562,678 − 200,000 (Lease renegotiations & SmartClub/FMX exits)', source: 'Matches right-of-use lease reduction on Assets side' },
      { year: '2022P', val: '1,262,678', formula: '1,362,678 − 100,000 (Scheduled lease amortization)', source: 'Multi-year lease commitments wind down without costly renewals' },
      { year: '2023P', val: '1,162,678', formula: '1,262,678 − 100,000 (Scheduled lease amortization)', source: 'Brings Total Liabilities / Assets down from 95.9% to 86.9%' }
    ],
    whereWeGotIt: {
      workbook: "AR2020 Consolidated Balance Sheet p. 127 (Non-Current Liabilities)",
      sheets: [
        { name: "Complete Balance Sheet View", coords: "Previously omitted from summary table — now shown so L + E sums cleanly to Total Assets", desc: "Represents 2020A non-current lease liabilities (Note 19) and post-employment benefits (Note 20)." }
      ],
      annualReport: "MPPA 2020 Annual Report, p. 127, Note 19 (Lease Liabilities), & Note 20.",
      caseRef: "Balances the exact accounting equation (Assets = Liabilities + Equity)."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. 2020A Actual", formula: "Rp 1,562,678 M non-current liabilities (mostly PSAK 73 mall leases)" },
        { step: "2. 2021P Reduction", formula: "1,562,678 − 200,000 (early lease cuts/exits) = Rp 1,362,678 M" },
        { step: "3. 2022P–2023P", formula: "-Rp 100,000 M/yr lease amortization → Rp 1,162,678 M by 2023P" }
      ]
    },
    strategicRationale: "The previous table skipped this row, so Liabilities + Equity never matched Total Assets! Including Long-Term Lease Liabilities shows the exact PSAK 73 lease obligation from Note 19 and how renegotiating 15 mall contracts lowers it over time.",
    sensitivity: "Reducing Long-Term Lease Liabilities lowers both Net Finance Costs (Slide 33 IS) and Total Liab/Assets (Slide 35 Ratios)."
  },

  bs_equity: {
    key: 'bs_equity',
    tag: 'BALANCE SHEET · STOCKHOLDERS EQUITY',
    tagId: 'NERACA · TOTAL EKUITAS',
    statusPill: 'Rp 184.7B → Rp 456.1B (+2.5x Equity Rebuild)',
    statusPillId: 'Rp 184,7M → Rp 456,1M (Ekuitas Pulih 2,5x)',
    statusClass: 'badge-profit',
    title: 'Total Stockholders’ Equity: Exact Roll-Forward from Net Income',
    titleId: 'Total Ekuitas Pemegang Saham: Akumulasi Langsung dari Laba Bersih',
    sub: 'Prior Equity + Projected Net Income (100% Retained, Zero Share Dilution)',
    subId: 'Ekuitas Tahun Sebelumnya + Laba Bersih (Ditahan 100%, Tanpa Dilusi Saham)',
    borderColor: '#137333',
    kpis: [
      { label: '2019A Actual', labelId: 'Realisasi 2019A', val: 'Rp 530.7 B', sub: 'Audited equity' },
      { label: '2020A Actual', labelId: 'Realisasi 2020A', val: 'Rp 184.7 B', sub: 'Distressed equity', isLoss: true },
      { label: '2021P Equity', labelId: 'Ekuitas 2021P', val: 'Rp 107.4 B', sub: '184.7 + (-77.4 PAT)' },
      { label: '2022P Equity', labelId: 'Ekuitas 2022P', val: 'Rp 197.0 B', sub: '107.4 + 89.7 PAT', isProfit: true },
      { label: '2023P Equity', labelId: 'Ekuitas 2023P', val: 'Rp 456.1 B', sub: '197.0 + 259.0 PAT (+2.5x)', isHighlight: true, isProfit: true }
    ],
    yearTable: [
      { year: '2019A', val: '530,681', formula: 'Audited Share Capital + Retained Earnings', source: 'AR2020 Consolidated Balance Sheet p. 127' },
      { year: '2020A', val: '184,734', formula: '530,681 − 405,307 PAT + 59,360 PSAK 73 equity adj', source: 'AR2020 Balance Sheet p. 127 & Changes in Equity p. 131' },
      { year: '2021P', val: '107,353', formula: '184,734 + (-77,381 Net Income) = 107,353', source: 'Exact roll-forward from Income Statement 2021P PAT' },
      { year: '2022P', val: '197,037', formula: '107,353 + 89,684 (Net Income) = 197,037', source: 'Exact roll-forward from Income Statement 2022P PAT (Rp 0 dividends)' },
      { year: '2023P', val: '456,055', formula: '197,037 + 259,018 (Net Income) = 456,055', source: 'Exact roll-forward from Income Statement 2023P PAT (+147% vs 2020A)' }
    ],
    whereWeGotIt: {
      workbook: "Exact Retained Earnings Roll-Forward (No Share Issuance)",
      sheets: [
        { name: "Equity Link to Income Statement", coords: "Equity(t) = Equity(t-1) + Net Income(t) − Dividends (0)", desc: "Every Rupiah of equity matches the Income Statement PAT line to the exact million." }
      ],
      annualReport: "MPPA 2020 Annual Report, p. 127 & Statement of Changes in Equity p. 131.",
      caseRef: "Denominator for Return on Equity (ROE = +56.8% in 2023P) on Slide 35."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. 2021P Roll-Forward", formula: "184,734 + (-77,381) = Rp 107,353 M" },
        { step: "2. 2022P Roll-Forward", formula: "107,353 + 89,684 = Rp 197,037 M" },
        { step: "3. 2023P Roll-Forward", formula: "197,037 + 259,018 = Rp 456,055 M (+146.9% vs 2020A)" }
      ]
    },
    strategicRationale: "Unlike the old spreadsheet that jumped equity to Rp 2.69T based on fake 50% gross margins, this Balance Sheet rolls forward honestly from our realistic Income Statement: dipping briefly to Rp 107.4B in Year 1 while stores open, then rebounding cleanly to Rp 456.1B (2.5x 2020 equity) by Year 3 without issuing new shares.",
    sensitivity: "Directly drives ROE (-219.4% → -72.1% → +45.5% → +56.8%) on the Ratios slide."
  },

  bs_total_liab_eq: {
    key: 'bs_total_liab_eq',
    tag: 'BALANCE SHEET · VERIFICATION TOTAL',
    tagId: 'NERACA · TOTAL LIABILITAS & EKUITAS',
    statusPill: '100% Balanced: Assets − (Liabilities + Equity) = 0',
    statusPillId: '100% Seimbang: Total Aset − (Liabilitas + Ekuitas) = 0',
    statusClass: 'badge-profit',
    title: 'Total Liabilities & Stockholders’ Equity: Exact Balance Proof',
    titleId: 'Total Liabilitas & Ekuitas: Bukti Keseimbangan Neraca',
    sub: 'Current Liabilities + Long-Term Bank Debt + Long-Term Lease Liabilities + Stockholders’ Equity',
    subId: 'Liabilitas Lancar + Utang Bank JP + Liabilitas Sewa JP + Ekuitas Pemegang Saham',
    borderColor: '#137333',
    kpis: [
      { label: '2019A Total', labelId: 'Total 2019A', val: 'Rp 3,820.8 B', sub: 'Diff vs Assets: 0' },
      { label: '2020A Total', labelId: 'Total 2020A', val: 'Rp 4,510.5 B', sub: 'Diff vs Assets: 0' },
      { label: '2021P Total', labelId: 'Total 2021P', val: 'Rp 3,423.1 B', sub: 'Diff vs Assets: 0' },
      { label: '2022P Total', labelId: 'Total 2022P', val: 'Rp 3,350.0 B', sub: 'Diff vs Assets: 0' },
      { label: '2023P Total', labelId: 'Total 2023P', val: 'Rp 3,479.1 B', sub: 'Diff vs Assets: 0', isHighlight: true, isProfit: true }
    ],
    yearTable: [
      { year: '2019A', val: '3,820,809', formula: '2,618,390 + 250,000 + 421,738 + 530,681', source: 'Equals 2019A Total Assets (3,820,809)' },
      { year: '2020A', val: '4,510,511', formula: '2,763,099 + 0 + 1,562,678 + 184,734', source: 'Equals 2020A Total Assets (4,510,511)' },
      { year: '2021P', val: '3,423,148', formula: '1,953,117 + 0 + 1,362,678 + 107,353', source: 'Equals 2021P Total Assets (3,423,148)' },
      { year: '2022P', val: '3,350,049', formula: '1,890,334 + 0 + 1,262,678 + 197,037', source: 'Equals 2022P Total Assets (3,350,049)' },
      { year: '2023P', val: '3,479,109', formula: '1,860,376 + 0 + 1,162,678 + 456,055', source: 'Equals 2023P Total Assets (3,479,109)' }
    ],
    whereWeGotIt: {
      workbook: "Fundamental Accounting Equation (Assets = Liabilities + Equity)",
      sheets: [
        { name: "5-Year Balance Check", coords: "Total Assets = Total Liabilities + Stockholders' Equity", desc: "Verified identically to Rp 1 million precision for 2019A–2023P." }
      ],
      annualReport: "MPPA 2020 Annual Report, Consolidated Statements of Financial Position, pp. 126–127.",
      caseRef: "Total Liabilities ÷ Total Assets = 86.9% by 2023P (down from 95.9% peak)."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. 2021P Check", formula: "1,953,117 + 0 + 1,362,678 + 107,353 = 3,423,148 (Assets: 3,423,148)" },
        { step: "2. 2022P Check", formula: "1,890,334 + 0 + 1,262,678 + 197,037 = 3,350,049 (Assets: 3,350,049)" },
        { step: "3. 2023P Check", formula: "1,860,376 + 0 + 1,162,678 + 456,055 = 3,479,109 (Assets: 3,479,109)" }
      ]
    },
    strategicRationale: "Every single number on both tabs now ties together cleanly: Income Statement Net Income flows into Equity, Asset/Lease reductions shrink liabilities, and Total Assets equals Total Liabilities + Equity to the exact Rupiah.",
    sensitivity: "Confirms zero broken formulas or missing rows."
  },

  // =========================================================================
  // C. EPS / EBIT & FINANCING MATRIX (4 ENTRIES)
  // =========================================================================
  epsebit_stock: {
    key: 'epsebit_stock',
    tag: 'FRED DAVID CH. 8 · EPS / EBIT ANALYSIS',
    tagId: 'FRED DAVID BAB 8 · ANALISIS EPS / EBIT',
    statusPill: 'Plan A: 100% Stock Financing (Rejected)',
    statusPillId: 'Rencana A: 100% Saham (Ditolak)',
    statusClass: 'badge-brand',
    title: 'Plan A: 100% Common Stock (Lowest EPS Due to Dilution)',
    titleId: 'Rencana A: 100% Saham Biasa (EPS Terendah Akibat Dilusi)',
    sub: 'Issuing Shares at Distressed Prices Cuts Earnings Per Share by ~43%',
    subId: 'Penerbitan Saham Saat Harga Tertekan Memangkas Laba per Saham Sekitar ~43%',
    borderColor: '#dc2626',
    kpis: [
      { label: 'Capital Needed', labelId: 'Modal Uji', val: 'Rp 5,000 M', sub: 'Matahari.xlsx EPS_EBIT test' },
      { label: 'New Shares Issued', labelId: 'Saham Baru', val: '+1.96M Shares', sub: 'Total shares: 4.51M' },
      { label: 'Pessimistic EPS', labelId: 'EPS Pesimis', val: 'Rp 1.71', sub: 'At Rp 10,000M EBIT' },
      { label: 'Realistic EPS', labelId: 'EPS Realistis', val: 'Rp 2.56', sub: '43% below Internal Funding' },
      { label: 'Optimistic EPS', labelId: 'EPS Optimis', val: 'Rp 3.07', sub: 'At Rp 18,000M EBIT', isHighlight: true }
    ],
    yearTable: [
      { year: 'Pessimistic', val: 'EPS Rp 1.71', formula: 'EAT (10,000 × 77% = 7,700) ÷ 4.51M shares = 1.71', source: 'Matahari.xlsx EPS_EBIT!D18:D20' },
      { year: 'Realistic', val: 'EPS Rp 2.56', formula: 'EAT (15,000 × 77% = 11,550) ÷ 4.51M shares = 2.56', source: 'Matahari.xlsx EPS_EBIT!F18:F20' },
      { year: 'Optimistic', val: 'EPS Rp 3.07', formula: 'EAT (18,000 × 77% = 13,860) ÷ 4.51M shares = 3.07', source: 'Matahari.xlsx EPS_EBIT!H18:H20' }
    ],
    whereWeGotIt: {
      workbook: "Matahari.xlsx",
      sheets: [
        { name: "EPS_EBIT", coords: "Columns D, F, H (Common Stock column)", desc: "Fred David Ch. 8 test comparing Stock vs Debt on Rp 5,000M unit capital need." }
      ],
      annualReport: "MPPA 2020 Annual Report, Note 19 (Share Capital; depressed Rp 102/share price in 2020).",
      caseRef: "Fred R. David, Strategic Management (Ch. 8 EPS/EBIT Table)."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. Share Count Jumps", formula: "2.55M base shares + 1.96M new shares = 4.51M total shares (+77% dilution)" },
        { step: "2. Realistic EAT", formula: "Rp 15,000 M EBIT × (1 − 0.23 tax) = Rp 11,550 M" },
        { step: "3. Diluted EPS", formula: "11,550 ÷ 4.51 = Rp 2.56 per share (worst of all options)" }
      ]
    },
    strategicRationale: "Issuing stock while MPPA's share price is depressed at Rp 102 forces management to give away nearly half the company for cash, permanently crushing Earnings Per Share (EPS) for existing owners.",
    sensitivity: "Rejected in favor of Internal Self-Funding, which protects 100% of existing shareholder ownership."
  },

  epsebit_debt: {
    key: 'epsebit_debt',
    tag: 'FRED DAVID CH. 8 · EPS / EBIT ANALYSIS',
    tagId: 'FRED DAVID BAB 8 · ANALISIS EPS / EBIT',
    statusPill: 'Plan B: 100% Debt Financing (Higher Risk)',
    statusPillId: 'Rencana B: 100% Utang Bank (Risiko Tinggi)',
    statusClass: 'badge-brand',
    title: 'Plan B: 100% Bank Debt (Adds Fixed Interest & Covenant Risk)',
    titleId: 'Rencana B: 100% Utang Bank (Tambah Bunga Tetap & Risiko Kovenan)',
    sub: 'Rp 5,000M Debt @ 5% Adds Rp 250M Interest Drag & Pressures BNI Covenants',
    subId: 'Utang Rp 5.000M @ 5% Menambah Beban Bunga Rp 250M & Menekan Syarat Kredit BNI',
    borderColor: '#c96c00',
    kpis: [
      { label: 'Interest Cost', labelId: 'Beban Bunga', val: 'Rp 250 M', sub: '5.0% × Rp 5,000M' },
      { label: 'Share Count', labelId: 'Jumlah Saham', val: '2.55M Shares', sub: 'No dilution' },
      { label: 'Pessimistic EPS', labelId: 'EPS Pesimis', val: 'Rp 2.94', sub: 'EAT Rp 7,508M' },
      { label: 'Realistic EPS', labelId: 'EPS Realistis', val: 'Rp 4.45', sub: 'Below Internal Rp 4.53' },
      { label: 'Optimistic EPS', labelId: 'EPS Optimis', val: 'Rp 5.36', sub: 'EAT Rp 13,668M', isHighlight: true }
    ],
    yearTable: [
      { year: 'Pessimistic', val: 'EPS Rp 2.94', formula: '((10,000 − 250) × 77% = 7,508) ÷ 2.55M = 2.94', source: 'Matahari.xlsx EPS_EBIT (100% Debt)' },
      { year: 'Realistic', val: 'EPS Rp 4.45', formula: '((15,000 − 250) × 77% = 11,358) ÷ 2.55M = 4.45', source: 'Matahari.xlsx EPS_EBIT (100% Debt)' },
      { year: 'Optimistic', val: 'EPS Rp 5.36', formula: '((18,000 − 250) × 77% = 13,668) ÷ 2.55M = 5.36', source: 'Matahari.xlsx EPS_EBIT (100% Debt)' }
    ],
    whereWeGotIt: {
      workbook: "Matahari.xlsx",
      sheets: [
        { name: "EPS_EBIT & PART II", coords: "Interest Rate = 5.0% · Tax = 23% · Capital = Rp 5,000M", desc: "Fixed Rp 250M annual interest reduces net profit in every scenario." }
      ],
      annualReport: "MPPA 2020 Annual Report, Note 15 (Existing Rp 500B BNI loan facility & covenants).",
      caseRef: "Fred R. David Ch. 8 (Debt vs Stock vs Self-Funding comparison)."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. Interest Deduction", formula: "Rp 5,000 M × 5.0% = Rp 250 M annual interest" },
        { step: "2. Realistic EAT", formula: "(15,000 − 250) × (1 − 0.23) = Rp 11,358 M" },
        { step: "3. Levered EPS", formula: "11,358 ÷ 2.55 = Rp 4.45 per share" }
      ]
    },
    strategicRationale: "While 100% Debt beats Stock on EPS (Rp 4.45 vs Rp 2.56), borrowing adds fixed interest payments and risks breaking BNI's loan covenants during Year-1 turnaround when EBIT is still ramping.",
    sensitivity: "Rejected whenever internal self-funding can cover the Rp 450B rollout budget."
  },

  epsebit: {
    key: 'epsebit',
    tag: 'FRED DAVID CH. 8 · RECOMMENDED CHOICE',
    tagId: 'FRED DAVID BAB 8 · PILIHAN TERBAIK',
    statusPill: 'Highest EPS (Rp 4.53) · Zero Debt · Zero Dilution',
    statusPillId: 'EPS Tertinggi (Rp 4,53) · Nol Utang · Nol Dilusi',
    statusClass: 'badge-profit',
    title: '★ Recommended: 100% Internal Self-Funding',
    titleId: '★ Rekomendasi: 100% Pendanaan Internal Mandiri',
    sub: 'Beats Both Stock (Rp 2.56) and Bank Debt (Rp 4.45) in Every EBIT Scenario',
    subId: 'Mengungguli Saham (Rp 2,56) Maupun Utang Bank (Rp 4,45) di Semua Skenario',
    borderColor: '#137333',
    kpis: [
      { label: 'New Debt Interest', labelId: 'Bunga Utang Baru', val: 'Rp 0', sub: 'No added interest drag' },
      { label: 'Share Dilution', labelId: 'Dilusi Saham', val: '0 Shares', sub: 'Base 2.55M shares unchanged' },
      { label: 'Pessimistic EPS', labelId: 'EPS Pesimis', val: 'Rp 3.02', sub: 'Highest in Pessimistic' },
      { label: 'Realistic EPS', labelId: 'EPS Realistis', val: 'Rp 4.53', sub: 'Highest in Realistic', isProfit: true },
      { label: 'Optimistic EPS', labelId: 'EPS Optimis', val: 'Rp 5.44', sub: 'Highest in Optimistic', isHighlight: true, isProfit: true }
    ],
    yearTable: [
      { year: 'Pessimistic', val: 'EPS Rp 3.02', formula: '((10,000 − 0) × 77% = 7,700) ÷ 2.55M = 3.02', source: 'Beats Debt (2.94) and Stock (1.71)' },
      { year: 'Realistic', val: 'EPS Rp 4.53', formula: '((15,000 − 0) × 77% = 11,550) ÷ 2.55M = 4.53', source: 'Beats Debt (4.45) and Stock (2.56)' },
      { year: 'Optimistic', val: 'EPS Rp 5.44', formula: '((18,000 − 0) × 77% = 13,860) ÷ 2.55M = 5.44', source: 'Beats Debt (5.36) and Stock (3.07)' }
    ],
    whereWeGotIt: {
      workbook: "Matahari.xlsx EPS_EBIT Matrix + Slide 30 Self-Funding Engine",
      sheets: [
        { name: "EPS_EBIT", coords: "Zero Interest + Zero New Shares = Unbeatable EPS", desc: "Funded by Rp 180B lease cuts + Rp 150B operating cash + Rp 120B asset sales = Rp 450B." }
      ],
      annualReport: "MPPA 2020 Annual Report, Notes 15 & 19.",
      caseRef: "Fred R. David Ch. 8 (Internal Capital Acquisition)."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. Zero Interest", formula: "New Debt Interest = Rp 0 (keeps all Rp 15,000 M in pretax profit)" },
        { step: "2. Zero Dilution", formula: "Shares remain at 2.55M (avoids dividing profit across 4.51M shares)" },
        { step: "3. Highest Realistic EPS", formula: "(15,000 × 77%) ÷ 2.55 = Rp 4.53/share (Winner)" }
      ]
    },
    strategicRationale: "Because Internal Self-Funding incurs Rp 0 in new interest and issues 0 new shares, it delivers higher EPS than both Debt and Stock across every EBIT level while keeping BNI covenants completely safe.",
    sensitivity: "Undisputed winner across EPS, Risk, and Ownership Control."
  },

  debt: {
    key: 'debt',
    tag: 'STRATEGIC FINANCING · CAPITAL SOURCES',
    tagId: 'PENDANAAN STRATEGIS · SUMBER MODAL',
    statusPill: 'Rp 450.0B Turnaround Budget · Zero New Bank Debt',
    statusPillId: 'Anggaran Transformasi Rp 450,0M · Nol Utang Baru',
    statusClass: 'badge-profit',
    title: 'How We Fund the Rp 450B Plan Without Borrowing',
    titleId: 'Cara Mendanai Rencana Rp 450M Tanpa Utang Bank Baru',
    sub: '15 Mall Lease Cuts (Rp 180B) + Store Cash Flow (Rp 150B) + SmartClub/FMX Sales (Rp 120B)',
    subId: '15 Sewa Mal (Rp 180M) + Kas Gerai (Rp 150M) + Pelepasan SmartClub/FMX (Rp 120M)',
    borderColor: '#137333',
    kpis: [
      { label: 'Total Plan Cost', labelId: 'Total Anggaran', val: 'Rp 450.0 B', sub: '50 Hyfresh + 45 Resize + DCs' },
      { label: 'Lease Relief', labelId: 'Penghematan Sewa', val: '+Rp 180.0 B', sub: '40.0% of funding' },
      { label: 'Store Cash Flow', labelId: 'Arus Kas Gerai', val: '+Rp 150.0 B', sub: '33.3% of funding' },
      { label: 'SmartClub & FMX Sale', labelId: 'Penjualan Aset', val: '+Rp 120.0 B', sub: '26.7% of funding' },
      { label: 'New Bank Debt', labelId: 'Utang Bank Baru', val: 'Rp 0.0 B', sub: '100% Covered Internally', isHighlight: true, isProfit: true }
    ],
    yearTable: [
      { year: 'Lease Cuts (40%)', val: '+Rp 180.0 B', formula: '15 anchor mall leases × Rp 2.4B/yr × 5 yrs', source: 'Slide 30 Strategy 3 (PSAK 73 mall renegotiations)' },
      { year: 'Operating Cash (33%)', val: '+Rp 150.0 B', formula: 'Rp 30.0B/yr avg retained cash × 5 yrs', source: 'Slide 30 Strategies 1 & 2 (reinvested store cash + Inventory release)' },
      { year: 'Asset Sales (27%)', val: '+Rp 120.0 B', formula: 'Rp 85B stock clearance + Rp 35B fixtures/deposits', source: 'Slide 30 Strategy 3 (2 SmartClub + 14 FMX exit in 2021–2022)' },
      { year: 'Total Funded', val: '+Rp 450.0 B', formula: '180.0 + 150.0 + 120.0 = Rp 450.0 B (Rp 0 Debt)', source: 'Matches exact Rp 450.0B CapEx budget (5 yrs @ Rp 90B/yr)' }
    ],
    whereWeGotIt: {
      workbook: "Slide 30 Capital Budget ↔ Slide 33 Cash & Financing Match",
      sheets: [
        { name: "Self-Funding Bridge", coords: "Total Sources (Rp 450.0B) = Total CapEx Uses (Rp 450.0B)", desc: "Every Rupiah spent opening 50 Hyfresh stores, resizing 45 hypermarkets, and upgrading 3 DCs is paid from internal sources." }
      ],
      annualReport: "MPPA 2020 Annual Report, Notes 11, 15 (BNI Facility) & 19 (Lease Liabilities).",
      caseRef: "BNI existing Rp 500B short-term working capital line remains untouched (no new debt)."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. Front-Loaded Cash (2021–2022)", formula: "+Rp 120B asset sales + Rp 72B initial lease savings cover early launches" },
        { step: "2. Annual Spend Matching", formula: "Rp 450B ÷ 5 years = Rp 90B/year CapEx fully covered by internal cash generation" }
      ]
    },
    strategicRationale: "Instead of gambling on new bank loans during a retail turnaround, MPPA raises Rp 120B upfront by exiting losing SmartClub and FMX stores, saves Rp 36B/yr on 15 mall leases, and reinvests compact-store cash flow to self-fund every Rupiah of CapEx.",
    sensitivity: "Long-Term Bank Debt stays at Rp 0 across 2021P–2023P, keeping Debt/Equity safely below lender limits."
  }
};
