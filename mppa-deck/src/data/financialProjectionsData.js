// Comprehensive Financial Projections Derivation & Source Reference Data
// Aligned with Fred R. David Ch. 8, Matahari.xlsx, Case 23, and MPPA Audited AR2020

export const financialDetailData = {
  revenue: {
    key: 'revenue',
    tag: 'REVENUE GROWTH MODEL',
    tagId: 'MODEL PERTUMBUHAN PENDAPATAN',
    statusPill: '+11.36% Net Expansion (CAGR +3.65%)',
    statusPillId: '+11,36% Pertumbuhan Bersih (CAGR +3,65%)',
    statusClass: 'badge-brand',
    title: 'Revenue Trajectory: Rp 6.75T → Rp 7.51T',
    titleId: 'Trajektori Pendapatan: Rp 6,75T → Rp 7,51T',
    sub: 'Model Assumptions, Store-Level Operating Bridge & Data Sources',
    subId: 'Asumsi Model, Jembatan Operasional Tingkat Gerai & Sumber Data',
    borderColor: '#df0036',
    kpis: [
      { label: '2020A Base', labelId: 'Basis 2020A', val: 'Rp 6,746.6 B', sub: 'Audited Net Sales' },
      { label: '2021P (+2%)', labelId: '2021P (+2%)', val: 'Rp 6,881.5 B', sub: '+Rp 134.9 B YoY' },
      { label: '2022P (+3%)', labelId: '2022P (+3%)', val: 'Rp 7,088.0 B', sub: '+Rp 206.4 B YoY' },
      { label: '2023P (+6%)', labelId: '2023P (+6%)', val: 'Rp 7,513.3 B', sub: '+Rp 425.3 B YoY', isHighlight: true },
      { label: '3-Yr Net Gain', labelId: 'Kenaikan Bersih 3 Thn', val: '+Rp 766.7 B', sub: '+11.36% Cumulative', isProfit: true }
    ],
    whereWeGotIt: {
      workbook: "Matahari.xlsx",
      sheets: [
        { name: "PART II", coords: "Row 154 (Cells G154 = 0.02, J154 = 0.03, M154 = 0.06)", desc: "Preset annual sales growth rates of +2.0% in 2021, +3.0% in 2022, and +6.0% in 2023." },
        { name: "Financial Statements", coords: "Row 6 (Cell F6 = 6,746,594)", desc: "Historical audited 2020 Net Sales baseline in millions of Rupiah." },
        { name: "Projected Statements", coords: "Row 5 (Cells D5, E5, F5)", desc: "Formula: D5 = F6*(1+G154); E5 = D5*(1+J154); F5 = E5*(1+M154)." }
      ],
      annualReport: "MPPA 2020 Annual Report, Audited Consolidated Statement of Profit or Loss, p. 128 (Net Sales: Rp 6,746,594 million) and Notes 25 & 38.",
      caseRef: "Harvard/PPM Case 23 Exhibit 2 (Pro Forma Income Statements 2021–2023) and Exhibit 8 (Competitive Retail Landscape, p. 593).",
      regulatory: "BPS Retail Sales Index (2020–2021 grocery sector contraction of -8.8% to -12.0% due to PSBB mobility caps)."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. 2021P Revenue", formula: "6,746,594 × (1 + 0.02) = 6,881,525.88 ≈ Rp 6,881,526 M (+Rp 134.9 B)" },
        { step: "2. 2022P Revenue", formula: "6,881,526 × (1 + 0.03) = 7,087,971.78 ≈ Rp 7,087,972 M (+Rp 206.4 B)" },
        { step: "3. 2023P Revenue", formula: "7,087,972 × (1 + 0.06) = 7,513,250.32 ≈ Rp 7,513,250 M (+Rp 425.3 B)" },
        { step: "4. Net Expansion", formula: "7,513,250 - 6,746,594 = +Rp 766,656 M (+11.36% total top-line turnaround)" }
      ],
      operationalBridge: [
        { item: "50 Compact Hyfresh Supermarkets", impact: "+Rp 750.0 B", desc: "50 neighborhood stores (500–1,200 m²) averaging Rp 15.0 B in annual fresh sales per store." },
        { item: "45 Hypermarket Downsizing & SmartClub Closure", impact: "-Rp 500.0 B", desc: "Eliminating subscale bulk wholesale sales and trimming excess 4,000 m² non-food suburban sales space." },
        { item: "Online And In-Store Dark-Hub Digital Re-Orders", impact: "+Rp 516.7 B", desc: "45 backroom online order centers scaling GrabMart/Shopee digital delivery to 15% of consolidated revenue." },
        { item: "Net Strategic Bridge Total", impact: "+Rp 766.7 B", desc: "Matches exact workbook projected top-line expansion." }
      ]
    },
    strategicRationale: "The revenue growth trajectory is deliberately conservative (+2% in Year 1, +3% in Year 2, +6% in Year 3), reflecting realistic consumer recovery post-PSBB restrictions. Instead of relying on mall foot-traffic surges, top-line growth is driven by format substitution: shifting capital into compact neighborhood Hyfresh stores (500–1,200 m²) with 3.5x higher sales density per square meter than legacy hypermarkets.",
    sensitivity: "Downside Scenario: If sales growth is 0.0% flat across all three years (holding sales at Rp 6,746.6 B), MPPA still achieves +Rp 1.28 T in operating profit (EBIT) due to the 50% gross margin and 31% OpEx cost structure, demonstrating substantial downside protection."
  },

  ebit: {
    key: 'ebit',
    tag: 'OPERATING INCOME TURNAROUND',
    tagId: 'PEMULIHAN LABA OPERASIONAL',
    statusPill: '+Rp 703.8B Swing · Reverses 4 Loss Years',
    statusPillId: 'Pembalikan +Rp 703,8 M · Membalik 4 Tahun Rugi',
    statusClass: 'badge-profit',
    title: 'EBIT Turnaround: -Rp 140B → +Rp 563B',
    titleId: 'Pembalikan EBIT: -Rp 140 M → +Rp 563 M',
    sub: 'Gross Margin 18.8% → 24.0% Paired with OpEx 21.0% → 16.5%',
    subId: 'Margin Kotor 18,8% → 24,0% Dipadukan Beban Usaha 21,0% → 16,5%',
    borderColor: '#137333',
    kpis: [
      { label: '2020A Actual', labelId: 'Realisasi 2020A', val: '-Rp 140.3 B', sub: '-2.08% Operating Loss', isLoss: true },
      { label: '2021P EBIT', labelId: 'EBIT 2021P', val: '+Rp 172.0 B', sub: '2.50% Operating Margin', isProfit: true },
      { label: '2022P EBIT', labelId: 'EBIT 2022P', val: '+Rp 354.4 B', sub: '5.00% Operating Margin', isProfit: true },
      { label: '2023P EBIT', labelId: 'EBIT 2023P', val: '+Rp 563.5 B', sub: '7.50% Operating Margin', isHighlight: true, isProfit: true },
      { label: 'Operating Swing', labelId: 'Pembalikan Bersih', val: '+Rp 703.8 B', sub: 'Realistic Turnaround', isProfit: true }
    ],
    whereWeGotIt: {
      workbook: "2019A–2020A Audited Baseline + Turnaround Model",
      sheets: [
        { name: "2019–2020 Historical Baseline", coords: "Avg COGS: 81.2% · Avg OpEx: 21.0%", desc: "Anchored to MPPA's audited 2019A–2020A ratios instead of generic template defaults." },
        { name: "Financial Statements", coords: "Row 14 (EBIT historical track record: 2017: -1,244B; 2018: -898B; 2019: -196B; 2020: -140B)", desc: "Confirms 4 consecutive years of structural operating deficits totalling -Rp 2.48 T." },
        { name: "Projected Operating Income", coords: "2021P: 2.5% · 2022P: 5.0% · 2023P: 7.5% EBIT Margin", desc: "Gross Profit (21.0% → 24.0%) minus OpEx (18.5% → 16.5%)." }
      ],
      annualReport: "MPPA 2020 Annual Report, Consolidated Statement of Profit or Loss, p. 128 (Loss from Operations: -Rp 140,268 million).",
      caseRef: "Harvard/PPM Case 23 Exhibit 2 (Operating Results & Profitability Turnaround).",
      regulatory: "PSAK 73 Leases (IFRS 16 equivalent) converting operating lease rentals into fixed right-of-use asset depreciation."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. 2021P Operating Equation", formula: "Gross Profit (Rp 1,445,120 M) - OpEx (Rp 1,273,082 M) = +Rp 172,038 M (2.5% Margin)" },
        { step: "2. 2022P Operating Equation", formula: "Gross Profit (Rp 1,594,794 M) - OpEx (Rp 1,240,395 M) = +Rp 354,399 M (5.0% Margin)" },
        { step: "3. 2023P Operating Equation", formula: "Gross Profit (Rp 1,803,180 M) - OpEx (Rp 1,239,686 M) = +Rp 563,494 M (7.5% Margin)" },
        { step: "4. Total Turnaround Swing", formula: "+563,494 M - (-140,268 M) = +Rp 703,762 M (+Rp 703.8 B structural profit swing)" }
      ],
      operationalBridge: [
        { item: "Fresh Cold-Chain & Private Label Lift", impact: "+Rp 210.0 B", desc: "Value Plus private label (300–500 bps higher margin) and central DC cold storage cut spoilage and lift gross margin from 18.8% to 24.0%." },
        { item: "PSAK 73 Mall Lease & Store Size Cuts", impact: "+Rp 180.0 B", desc: "Renegotiating 15 mall leases and shrinking 45 oversized hypermarkets cuts fixed rent, staffing, and electricity." },
        { item: "Exit Loss-Making SmartClub & FMX", impact: "+Rp 145.0 B", desc: "Closing 2 SmartClub centers and 14 unprofitable FMX kiosks halts recurring operating cash drain." },
        { item: "Hyfresh Neighborhood Store Scale", impact: "+Rp 168.8 B", desc: "50 compact fresh supermarkets generate 2.5x higher sales per m² than legacy hypermarkets." }
      ]
    },
    strategicRationale: "Instead of using unrealistic 50% COGS / 31% OpEx template presets, this projection anchors directly to MPPA's 2019–2020 audited average (81.2% COGS, 21.0% OpEx). Gradual gross margin gains (+5.2 pts over 3 years) combined with real store-size and rent cuts (-4.5 pts OpEx over 3 years) flip EBIT positive in Year 1 (+Rp 172B) and scale to +Rp 563.5B by 2023.",
    sensitivity: "Stress Test: Even if Gross Margin only reaches 22.0% and OpEx stays at 18.0%, 2023 EBIT remains solidly positive at +Rp 300.5B (4.0% margin)."
  },

  debt: {
    key: 'debt',
    tag: 'CAPITAL STRUCTURE & SOLVENCY',
    tagId: 'STRUKTUR MODAL & SOLVABILITAS',
    statusPill: '100% Internally Self-Funded · Rp 0 New Debt',
    statusPillId: '100% Didanai Mandiri · Rp 0 Utang Baru',
    statusClass: 'badge-brand',
    title: 'Strategic Financing: Zero New Bank Debt Target',
    titleId: 'Pendanaan Strategis: Target Nol Utang Bank Baru',
    sub: 'Rp 450B Transformation Budget Funded via Asset Sales & Lease Rationalization',
    subId: 'Anggaran Transformasi Rp 450 M Didanai dari Penjualan Aset & Rasionalisasi Sewa',
    borderColor: '#df0036',
    kpis: [
      { label: 'Required Capital', labelId: 'Modal Dibutuhkan', val: 'Rp 450.0 B', sub: '50-Store Rollout & Tech Budget' },
      { label: 'New Bank Borrowing', labelId: 'Utang Bank Baru', val: 'Rp 0', sub: 'Preserves BNI Line Covenants' },
      { label: 'New Equity Shares', labelId: 'Penerbitan Saham', val: '0 Shares', sub: 'Zero Shareholder Dilution' },
      { label: 'Internal Sources', labelId: 'Sumber Internal', val: 'Rp 450.0 B', sub: '100% Fully Covered', isProfit: true },
      { label: 'BNI D/E Covenant', labelId: 'Syarat Pinjaman D/E BNI', val: '0.07%', sub: 'Far below 250% Ceiling', isProfit: true }
    ],
    whereWeGotIt: {
      workbook: "Matahari.xlsx",
      sheets: [
        { name: "EPS_EBIT", coords: "Sheet 'EPS_EBIT' (Rows 6–25) & PART II Row 119", desc: "Analyzes financing options for capital allocation; demonstrates internal funding yields superior solvency and EPS." },
        { name: "Projected Statements", coords: "Row 34 (Cells D34 = 2,000, E34 = 2,000, F34 = 2,000)", desc: "Long-Term Bank Debt stays flat at Rp 2,000 M across all projected years." },
        { name: "PART II", coords: "Row 203 (Cells G203 = 2000, J203 = 0, M203 = 0)", desc: "Zero incremental bank borrowing budgeted." }
      ],
      annualReport: "MPPA 2020 Annual Report, Note 15 (PT Bank Negara Indonesia / BNI Credit Facilities) and Note 19 (Share Capital & Stock History).",
      caseRef: "Harvard/PPM Case 23 Exhibit 3 (Pro Forma Balance Sheet) and Exhibit 4 (Borrowing Facilities).",
      regulatory: "BNI Master Credit Agreement financial covenants: Debt-to-Equity Ratio ≤ 250% and Times-Interest-Earned (TIE) ≥ 2.0x."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. 50 Hyfresh Compact Stores", formula: "50 stores × Rp 4.05 B per fit-out = Rp 202.5 B (45.0% of capex)" },
        { step: "2. 45 Dark-Hub Digital Conversions", formula: "45 backrooms × Rp 3.00 B per hub = Rp 135.0 B (30.0% of capex)" },
        { step: "3. Central Cold-Chain DCs", formula: "Multi-temp refrigeration & fleet upgrade = Rp 67.5 B (15.0% of capex)" },
        { step: "4. Working Capital & Tech Buffer", formula: "GrabMart/Shopee API integration & fresh float = Rp 45.0 B (10.0% of capex)" },
        { step: "5. Total Required Capital", formula: "202.5 + 135.0 + 67.5 + 45.0 = Rp 450.0 B total rollout budget" }
      ],
      operationalBridge: [
        { item: "Source 1: Divestment of Non-Core Assets", impact: "+Rp 120.0 B (26.7%)", desc: "Liquidating 2 unprofitable SmartClub warehouses (+Rp 85 B) and 14 FMX convenience kiosks (+Rp 35 B)." },
        { item: "Source 2: PSAK 73 Lease Cash Savings", impact: "+Rp 180.0 B (40.0%)", desc: "Downsizing 45 hypermarkets from ~7,000 m² to ~1,500 m² saves Rp 36 B annually over 5 years." },
        { item: "Source 3: Lean Working Capital Release", impact: "+Rp 150.0 B (33.3%)", desc: "Accelerating fresh inventory turnover from 5.6x to 7.1x frees up Rp 150 B in trapped cash." },
        { item: "Total Internal Self-Funding Engine", impact: "Rp 450.0 B (100.0%)", desc: "Fully covers all rollout and tech investments without borrowing Rp 1 from banks." }
      ]
    },
    strategicRationale: "Why 100% Self-Funding is Superior: (1) Prevents Severe Shareholder Dilution: MPPA stock traded at distressed penny-stock levels (Rp 102/share) in 2020. Raising Rp 450 B via rights issue would require issuing 4.41 billion new shares, diluting existing shareholders by ~37%. (2) Protects BNI Loan Conditions: Commercial bank debt at 10.5% interest would add Rp 47.3 B in mandatory annual interest and breach BNI's 250% D/E ceiling. (3) Reallocating non-core assets enforces capital discipline and protects solvency.",
    sensitivity: "Covenant Cushion: With long-term bank debt maintained at just Rp 2.0 B against 2023 Stockholders' Equity of Rp 2,689.5 B, the Debt-to-Equity ratio is 0.07%, leaving a massive 249.93% safety margin below BNI's 250% ceiling."
  },

  cogs: {
    key: 'cogs',
    tag: 'SUPPLY CHAIN OPTIMIZATION',
    tagId: 'OPTIMASI RANTAI PASOK',
    statusPill: '81.2% Avg → 76.0% COGS Target (Realistic)',
    statusPillId: 'Rata-rata 81,2% → Target HPP 76,0% (Realistis)',
    statusClass: 'badge-profit',
    title: 'Cost of Goods Sold (COGS): Anchored to 2019–2020 Baseline',
    titleId: 'Beban Pokok Pendapatan (HPP): Mengacu Baseline 2019–2020',
    sub: 'Gradual 5.2% Improvement via Cold Storage, Private Label & SmartClub Exit',
    subId: 'Perbaikan Bertahap 5,2% via Gudang Pendingin, Merek Privat & Tutup SmartClub',
    borderColor: '#137333',
    kpis: [
      { label: '2019–2020 Avg', labelId: 'Rata-rata 2019–2020', val: '81.19%', sub: '81.74% (2019) · 80.63% (2020)', isLoss: true },
      { label: '2021P Target', labelId: 'Target 2021P', val: 'Rp 5,436.4 B', sub: '79.00% of Net Sales' },
      { label: '2022P Target', labelId: 'Target 2022P', val: 'Rp 5,493.2 B', sub: '77.50% of Net Sales' },
      { label: '2023P Target', labelId: 'Target 2023P', val: 'Rp 5,710.1 B', sub: '76.00% of Net Sales', isHighlight: true },
      { label: 'Margin Gain', labelId: 'Kenaikan Margin', val: '+5.19%', sub: 'Gradual Gross Margin Lift', isProfit: true }
    ],
    whereWeGotIt: {
      workbook: "MPPA Audited 2019–2020 Baseline + Turnaround Model",
      sheets: [
        { name: "2019A–2020A Actuals", coords: "2019: 81.74% · 2020: 80.63% → Avg: 81.19%", desc: "Anchored to audited MPPA grocery COGS ratios rather than generic 50% template defaults." },
        { name: "Projected COGS", coords: "2021P: 79.0% · 2022P: 77.5% · 2023P: 76.0% of Revenue", desc: "Realistic 1.5–2.2% annual reduction as cold-chain and private label scale." }
      ],
      annualReport: "MPPA 2020 Annual Report, Audited Statement of Profit or Loss, p. 128 (2019 COGS: Rp 7,074,249 M; 2020 COGS: Rp 5,439,936 M).",
      caseRef: "Harvard/PPM Case 23 Exhibit 2 & Exhibit 6."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. 2019–2020 Avg Baseline", formula: "(81.74% + 80.63%) ÷ 2 = 81.19% of Revenue" },
        { step: "2. 2021P COGS (79.0%)", formula: "Rp 6,881,526 M × 79.00% = Rp 5,436,406 M" },
        { step: "3. 2022P COGS (77.5%)", formula: "Rp 7,087,972 M × 77.50% = Rp 5,493,178 M" },
        { step: "4. 2023P COGS (76.0%)", formula: "Rp 7,513,250 M × 76.00% = Rp 5,710,070 M" }
      ],
      operationalBridge: [
        { item: "Centralized Cold-Chain Spoilage Cut", impact: "2.0%–2.5% Cost Savings", desc: "Balaraja (35,000 m²) and Surabaya (22,000 m²) cold DCs cut fresh produce spoilage without breaking distributor contracts." },
        { item: "Value Plus Private Label Mix", impact: "1.5%–2.0% Blended Lift", desc: "Expanding 2,000 Value Plus staple SKUs at 300–500 bps higher margin than national FMCG brands." },
        { item: "Exiting SmartClub Wholesale", impact: "1.0%–1.5% Margin Recovery", desc: "Closing low-margin bulk B2B wholesale lifts blended store gross margin." }
      ]
    },
    strategicRationale: "MPPA already operates formal FMCG distributor contracts, so cutting COGS to 50% overnight is unrealistic. Anchoring to the 2019–2020 average of 81.2% and improving by ~5.2 percentage points over 3 years (to 76.0%) reflects achievable gains from fresh cold-chain shrinkage reduction, Value Plus private label, and closing low-margin SmartClub wholesale.",
    sensitivity: "Sensitivity: Each 1.0% improvement in COGS adds ~Rp 75B in annual operating profit."
  },

  gross_profit: {
    key: 'gross_profit',
    tag: 'GROSS MARGIN EXPANSION',
    tagId: 'EKSPANSI MARGIN KOTOR',
    statusPill: '18.8% Avg → 24.0% Gross Margin Target',
    statusPillId: 'Rata-rata 18,8% → Target Margin Kotor 24,0%',
    statusClass: 'badge-profit',
    title: 'Gross Profit: Gradual Expansion from 18.8% to 24.0%',
    titleId: 'Laba Kotor: Ekspansi Bertahap dari 18,8% ke 24,0%',
    sub: 'Fresh Grocery Mix Shift, Cold-Chain Spoilage Cuts & Private Label',
    subId: 'Bauran Produk Segar, Efisiensi Rantai Dingin & Merek Privat',
    borderColor: '#137333',
    kpis: [
      { label: '2019–2020 Avg', labelId: 'Rata-rata 2019–2020', val: '18.81%', sub: '18.26% (2019) · 19.37% (2020)' },
      { label: '2021P Gross Profit', labelId: 'Laba Kotor 2021P', val: 'Rp 1,445.1 B', sub: '21.00% Gross Margin', isProfit: true },
      { label: '2022P Gross Profit', labelId: 'Laba Kotor 2022P', val: 'Rp 1,594.8 B', sub: '22.50% Gross Margin', isProfit: true },
      { label: '2023P Gross Profit', labelId: 'Laba Kotor 2023P', val: 'Rp 1,803.2 B', sub: '24.00% Gross Margin', isHighlight: true, isProfit: true }
    ],
    whereWeGotIt: {
      workbook: "MPPA Audited 2019–2020 Baseline + Turnaround Model",
      sheets: [
        { name: "Projected Gross Profit", coords: "Revenue minus COGS (2021P: 21.0% · 2022P: 22.5% · 2023P: 24.0%)", desc: "Calculated Gross Profit across all projected periods." }
      ],
      annualReport: "MPPA 2020 Annual Report, p. 128 (2019 Gross Profit: Rp 1,580,397 M / 18.26%; 2020 Gross Profit: Rp 1,306,658 M / 19.37%).",
      caseRef: "Harvard/PPM Case 23 Exhibit 2 (Gross Profit Projections)."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. 2021P Gross Profit (21.0%)", formula: "Rp 6,881,526 M - Rp 5,436,406 M = Rp 1,445,120 M" },
        { step: "2. 2022P Gross Profit (22.5%)", formula: "Rp 7,087,972 M - Rp 5,493,178 M = Rp 1,594,794 M" },
        { step: "3. 2023P Gross Profit (24.0%)", formula: "Rp 7,513,250 M - Rp 5,710,070 M = Rp 1,803,180 M" }
      ],
      operationalBridge: [
        { item: "Fresh & Perishable Mix Shift", impact: "+2.2% Margin", desc: "Neighborhood Hyfresh stores sell a higher share of fresh produce, meat, and bakery." },
        { item: "Value Plus Private Label", impact: "+1.5% Margin", desc: "300–500 bps higher margin on staple household goods vs national FMCG brands." },
        { item: "Cold-Chain Shrinkage Cut", impact: "+1.5% Margin", desc: "Lower spoilage in transit and backroom cold storage protects store gross margin." }
      ]
    },
    strategicRationale: "Expanding gross margin from the 18.8% historical average to 24.0% by 2023 matches real-world Asian supermarket benchmarks while keeping formal supplier relationships intact.",
    sensitivity: "Baseline Validation: 24.0% gross margin is in line with Indonesian neighborhood grocery peers (vs 19.4% legacy hypermarket margin)."
  },

  opex: {
    key: 'opex',
    tag: 'EXPENSE BUDGETING & DISCIPLINE',
    tagId: 'PENGANGGARAN BIAYA & DISIPLIN',
    statusPill: '21.0% Avg → 16.5% OpEx Target (Realistic)',
    statusPillId: 'Rata-rata 21,0% → Target Beban Usaha 16,5% (Realistis)',
    statusClass: 'badge-brand',
    title: 'Operating Expenses (OpEx): Rent & Store Size Savings',
    titleId: 'Beban Usaha: Penghematan Sewa & Ukuran Gerai',
    sub: 'Falling from 21.0% Avg to 16.5% via Lease Cuts, Smaller Stores & Exiting Losers',
    subId: 'Turun dari Rata-rata 21,0% ke 16,5% via Negosiasi Sewa & Penutupan Gerai Rugi',
    borderColor: '#df0036',
    kpis: [
      { label: '2019–2020 Avg', labelId: 'Rata-rata 2019–2020', val: '20.99%', sub: '20.53% (2019) · 21.45% (2020)' },
      { label: '2021P OpEx', labelId: 'Beban Usaha 2021P', val: 'Rp 1,273.1 B', sub: '18.50% of Net Sales (-Rp 173.8 B)' },
      { label: '2022P OpEx', labelId: 'Beban Usaha 2022P', val: 'Rp 1,240.4 B', sub: '17.50% of Net Sales' },
      { label: '2023P OpEx', labelId: 'Beban Usaha 2023P', val: 'Rp 1,239.7 B', sub: '16.50% of Net Sales (-Rp 207.2 B vs 2020)', isHighlight: true }
    ],
    whereWeGotIt: {
      workbook: "MPPA Audited 2019–2020 Baseline + Turnaround Cost Cuts",
      sheets: [
        { name: "2019A–2020A Actuals", coords: "2019: 20.53% · 2020: 21.45% → Avg: 20.99%", desc: "Anchored to audited Selling + G&A expenses instead of inflated 31% template default." },
        { name: "Projected OpEx", coords: "2021P: 18.5% · 2022P: 17.5% · 2023P: 16.5% of Revenue", desc: "Reflects real savings from mall lease cuts, store downsizing, and closing losing formats." }
      ],
      annualReport: "MPPA 2020 Annual Report, Note 28 (Selling Expenses: Rp 1,225.8 B; General & Admin: Rp 221.1 B; Total OpEx: Rp 1,446.9 B = 21.45% of sales).",
      caseRef: "Harvard/PPM Case 23 Exhibit 2 & Exhibit 6."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. 2019–2020 Avg Baseline", formula: "(20.53% + 21.45%) ÷ 2 = 20.99% of Revenue" },
        { step: "2. 2021P OpEx (18.5%)", formula: "Rp 6,881,526 M × 18.50% = Rp 1,273,082 M" },
        { step: "3. 2022P OpEx (17.5%)", formula: "Rp 7,087,972 M × 17.50% = Rp 1,240,395 M" },
        { step: "4. 2023P OpEx (16.5%)", formula: "Rp 7,513,250 M × 16.50% = Rp 1,239,686 M" }
      ],
      operationalBridge: [
        { item: "PSAK 73 Mall Lease Renegotiation", impact: "-Rp 36.0 B / yr", desc: "Renegotiating 15 anchor mall leases to variable revenue-share rent." },
        { item: "Downsizing 45 Hypermarkets", impact: "-Rp 95.0 B / yr", desc: "Shrinking floor area from 6,000–8,000 m² to 2,500–3,500 m² cuts AC electricity, security, and store staffing." },
        { item: "Exiting 2 SmartClub & 14 FMX Stores", impact: "-Rp 76.2 B / yr", desc: "Removes chronic loss-making store rent, payroll, and kiosk overhead." }
      ]
    },
    strategicRationale: "A turnaround plan built on shrinking oversized stores and renegotiating mall leases should lower OpEx, not raise it to 31%. Starting from MPPA's 2019–2020 average of 21.0%, OpEx drops realistically to 16.5% by 2023 as rent, electricity, and losing-store payroll are cut.",
    sensitivity: "Safety Margin: Even if OpEx stays flat at 19.0% of sales instead of 16.5%, 2023 EBIT still reaches +Rp 375.7 B."
  },

  net_income: {
    key: 'net_income',
    tag: 'BOTTOM-LINE EARNINGS & SOLVENCY',
    tagId: 'LABA BERSIH & SOLVABILITAS',
    statusPill: '+Rp 203.2B Cumulative PAT (2021P–2023P)',
    statusPillId: 'Laba Bersih Kumulatif +Rp 203,2 M (2021P–2023P)',
    statusClass: 'badge-profit',
    title: 'Net Income (PAT): Realistic Return to Profitability',
    titleId: 'Laba Bersih: Pemulihan Profitabilitas Secara Realistis',
    sub: 'Loss Narrows 76% in 2021, Turns Profitable in 2022 (+Rp 67.8B) & Scales in 2023 (+Rp 230.9B)',
    subId: 'Rugi Menyusut 76% di 2021, Untung di 2022 (+Rp 67,8 M) & Menguat di 2023 (+Rp 230,9 M)',
    borderColor: '#137333',
    kpis: [
      { label: '2020A Loss', labelId: 'Rugi 2020A', val: '-Rp 405.3 B', sub: 'Distressed Equity Drag', isLoss: true },
      { label: '2021P PAT', labelId: 'Laba Bersih 2021P', val: '-Rp 95.5 B', sub: '76% Loss Reduction', isLoss: true },
      { label: '2022P PAT', labelId: 'Laba Bersih 2022P', val: '+Rp 67.8 B', sub: 'Net Profit Break-Through', isProfit: true },
      { label: '2023P PAT', labelId: 'Laba Bersih 2023P', val: '+Rp 230.9 B', sub: 'Sustained Profitability', isHighlight: true, isProfit: true },
      { label: '3-Yr Cum. PAT', labelId: 'Kumulatif 3 Thn', val: '+Rp 203.2 B', sub: 'Zero Debt / Zero Dilution', isProfit: true }
    ],
    whereWeGotIt: {
      workbook: "MPPA Audited 2019–2020 Baseline + Turnaround Model",
      sheets: [
        { name: "Projected Net Income", coords: "EBT minus 22% statutory corporate tax (0 tax when EBT < 0)", desc: "2021P reflects store-opening ramp; 2022P–2023P deliver positive net earnings." },
        { name: "Retained Earnings", coords: "100% of net profits retained (Rp 0 dividends)", desc: "Rebuilds equity base from Rp 184.7 B to +Rp 387.9 B by 2023 without issuing shares." }
      ],
      annualReport: "MPPA 2020 Annual Report, Statement of Profit or Loss, p. 128 (Loss for the year: -Rp 405,307 million) and Statement of Changes in Equity, p. 131.",
      caseRef: "Harvard/PPM Case 23 Exhibit 2 (Pro Forma PAT)."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. 2021P Net Income", formula: "EBT (-Rp 95,481 M) - Tax (Rp 0) = -Rp 95,481 M (76% smaller loss vs 2020)" },
        { step: "2. 2022P Net Income", formula: "EBT (+Rp 86,883 M) - Tax 22% (Rp 19,114 M) = +Rp 67,769 M" },
        { step: "3. 2023P Net Income", formula: "EBT (+Rp 295,981 M) - Tax 22% (Rp 65,116 M) = +Rp 230,865 M" },
        { step: "4. Cumulative 3-Yr Total", formula: "-95,481 + 67,769 + 230,865 = +Rp 203,153 M (+Rp 203.2 B cumulative)" }
      ]
    },
    strategicRationale: "Four consecutive years of losses (-Rp 3.53 T cumulative from 2017 to 2020) pushed MPPA's equity down to Rp 184.7 B. This realistic turnaround cuts net loss by 76% in Year 1 while Hyfresh stores open, flips net positive in Year 2 (+Rp 67.8 B), and compounds to +Rp 230.9 B in Year 3 without new bank debt or share dilution.",
    sensitivity: "Solvency Protection: Turning net cash-generative without new debt preserves MPPA's supplier credit terms and BNI loan covenants."
  },

  epsebit: {
    key: 'epsebit',
    tag: 'FRED DAVID CH. 8 FRAMEWORK',
    tagId: 'KERANGKA FRED DAVID BAB 8',
    statusPill: 'Recommended: Zero Debt / Internal Funding',
    statusPillId: 'Rekomendasi: Nol Utang / Pendanaan Mandiri',
    statusClass: 'badge-profit',
    title: 'EPS / EBIT Analysis: Financing Decision Matrix',
    titleId: 'Analisis EPS / EBIT: Matriks Keputusan Pendanaan',
    sub: 'Evaluating 100% Stock vs 100% Debt vs Internal Self-Funding',
    subId: 'Evaluasi 100% Saham vs 100% Utang vs Pendanaan Mandiri',
    borderColor: '#137333',
    kpis: [
      { label: 'Unit Test Capital', labelId: 'Modal Uji Unit', val: 'Rp 5,000 M', sub: 'Matahari.xlsx PART II Row 119' },
      { label: 'Plan A: 100% Stock', labelId: 'Rencana A: 100% Saham', val: 'EPS: Rp 2.56', sub: 'Dilutes shares by 1.96M' },
      { label: 'Plan B: 100% Debt', labelId: 'Rencana B: 100% Utang', val: 'EPS: Rp 4.45', sub: 'Rp 250M interest drag' },
      { label: '★ Internal Funding', labelId: '★ Pendanaan Mandiri', val: 'EPS: Rp 4.53', sub: 'Highest Realistic EPS · Optimal Choice', isHighlight: true, isProfit: true }
    ],
    whereWeGotIt: {
      workbook: "Matahari.xlsx",
      sheets: [
        { name: "EPS_EBIT", coords: "Sheet 'EPS_EBIT' (Rows 6–25, Columns C–J)", desc: "Three-scenario matrix comparing Stock vs Debt financing at Pessimistic (10B), Realistic (15B), and Optimistic (18B) EBIT." },
        { name: "PART II", coords: "Rows 113–121 (Amount Needed = 5,000; Interest Rate = 0.05; Tax Rate = 0.23)", desc: "Parameter inputs feeding the EPS/EBIT model." }
      ],
      annualReport: "MPPA 2020 Annual Report, Note 19 (7,525,879,200 issued shares at Rp 102/share).",
      caseRef: "Fred R. David, Strategic Management (2023), Chapter 8 (EPS/EBIT Analysis)."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "Plan A (100% Stock)", formula: "Issue 1.96M shares at market price. Realistic EAT Rp 11,550 M / 4.51M shares = EPS Rp 2.56" },
        { step: "Plan B (100% Debt)", formula: "Borrow Rp 5,000 M @ 5%. Interest = Rp 250 M. EBT = Rp 14,750 M. EAT = Rp 11,358 M / 2.55M shares = EPS Rp 4.45" },
        { step: "★ Plan C (Internal Self-Funding)", formula: "Rp 0 debt, Rp 0 shares. Interest = Rp 0. EBT = Rp 15,000 M. EAT = Rp 11,550 M / 2.55M shares = EPS Rp 4.53 (Highest Realistic EPS)" }
      ]
    },
    strategicRationale: "Strategic Assessment: (1) Plan A fails because issuing shares at depressed penny-stock prices (Rp 102) causes extreme dilution for existing anchor shareholders. (2) Plan B achieves Rp 4.45 EPS but introduces debt-service risk and endangers BNI covenants. (3) Internal self-funding delivers the highest realistic EPS (Rp 4.53) with ZERO dilution and ZERO default risk.",
    sensitivity: "Strategic Decision: Internal self-funding is the undisputed winner across all strategic, governance, and financial dimensions."
  }
};
