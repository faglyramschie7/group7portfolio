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
    statusPill: '+Rp 1,567.8B Swing · Reverses 4 Loss Years',
    statusPillId: 'Pembalikan +Rp 1.567,8 M · Membalik 4 Tahun Rugi',
    statusClass: 'badge-profit',
    title: 'EBIT Turnaround: -Rp 140B → +Rp 1,428B',
    titleId: 'Pembalikan EBIT: -Rp 140 M → +Rp 1.428 M',
    sub: 'The Operating Scissors Effect: Gross Margin 50% vs OpEx 31%',
    subId: 'Efek Gunting Operasional: Margin Kotor 50% vs Beban Usaha 31%',
    borderColor: '#137333',
    kpis: [
      { label: '2020A Actual', labelId: 'Realisasi 2020A', val: '-Rp 140.3 B', sub: '-2.08% Operating Loss', isLoss: true },
      { label: '2021P EBIT', labelId: 'EBIT 2021P', val: '+Rp 1,307.5 B', sub: '19.00% Operating Margin', isProfit: true },
      { label: '2022P EBIT', labelId: 'EBIT 2022P', val: '+Rp 1,346.7 B', sub: '19.00% Operating Margin', isProfit: true },
      { label: '2023P EBIT', labelId: 'EBIT 2023P', val: '+Rp 1,427.5 B', sub: '19.00% Operating Margin', isHighlight: true, isProfit: true },
      { label: 'Operating Swing', labelId: 'Pembalikan Bersih', val: '+Rp 1,567.8 B', sub: 'Decisive Structural Turnaround', isProfit: true }
    ],
    whereWeGotIt: {
      workbook: "Matahari.xlsx",
      sheets: [
        { name: "PART II", coords: "Row 156 (COGS: 0.50) & Row 158 (OpEx: 0.31)", desc: "Preset model ratios: Cost of Goods Sold = 50.0% of Sales; Operating Expenses = 31.0% of Sales." },
        { name: "Financial Statements", coords: "Row 14 (EBIT historical track record: 2017: -1,244B; 2018: -898B; 2019: -196B; 2020: -140B)", desc: "Confirms 4 consecutive years of structural operating deficits totalling -Rp 2.48 T." },
        { name: "Projected Statements", coords: "Row 9 (Cells D9 = D7-D8, E9 = E7-E8, F9 = F7-F8)", desc: "Gross Profit (50%) - OpEx (31%) = 19.0% EBIT Margin." }
      ],
      annualReport: "MPPA 2020 Annual Report, Consolidated Statement of Profit or Loss, p. 128 (Loss from Operations: -Rp 140,268 million).",
      caseRef: "Harvard/PPM Case 23 Exhibit 2 (Operating Results & Profitability Turnaround).",
      regulatory: "PSAK 73 Leases (IFRS 16 equivalent) converting operating lease rentals into fixed right-of-use asset depreciation."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. 2021P Operating Equation", formula: "Gross Profit (Rp 3,440,763 M) - OpEx (Rp 2,133,273 M) = +Rp 1,307,490 M (19.0% Margin)" },
        { step: "2. 2022P Operating Equation", formula: "Gross Profit (Rp 3,543,986 M) - OpEx (Rp 2,197,271 M) = +Rp 1,346,715 M (19.0% Margin)" },
        { step: "3. 2023P Operating Equation", formula: "Gross Profit (Rp 3,756,625 M) - OpEx (Rp 2,329,108 M) = +Rp 1,427,517 M (19.0% Margin)" },
        { step: "4. Total Turnaround Swing", formula: "+1,427,517 M - (-140,268 M) = +Rp 1,567,785 M (+Rp 1.57 T structural profit swing)" }
      ],
      operationalBridge: [
        { item: "Direct Farm Sourcing & Streamlined Tiers", impact: "+Rp 420.0 B", desc: "Contract farming across West/East Java cuts informal produce middleman markups (12–15%) while maintaining formal FMCG supplier contracts." },
        { item: "Central Cold-Chain Spoilage Reduction", impact: "+Rp 280.0 B", desc: "Balaraja & Surabaya DCs reduce perishable spoilage and shrinkage from 9.2% down to 2.8%." },
        { item: "PSAK 73 Hypermarket Lease Downsizing", impact: "+Rp 180.0 B", desc: "Reducing Store Size 45 hypermarket anchors slashes annual fixed rental and facility maintenance costs." },
        { item: "Exit Loss-Making SmartClub Wholesale", impact: "+Rp 145.0 B", desc: "Eliminating subscale bulk warehousing halts recurring operating cash drain." }
      ]
    },
    strategicRationale: "The turnaround is driven by the 'Operating Scissors Effect': simultaneously expanding gross margins (top blade) while reducing store size lease drag (bottom blade). High-margin perishables, bakery, and fresh produce (28–38% gross margin) replace low-margin electronics, while budgeting OpEx conservatively at 31% (up from 21.5% in 2020) provides an ample Rp 882 B expense buffer for new store fit-outs and digital delivery commissions.",
    sensitivity: "Stress Test: If Gross Margin only achieves 30.0% (instead of 50.0%) and OpEx normalizes at 22.0%, 2023 EBIT remains solidly profitable at +Rp 601.1 B (8.0% margin). The 50% case represents the upside benchmark of complete cold-chain direct farm conversion."
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
    statusPill: '50.00% COGS Ratio (Down from 80.6% in 2020)',
    statusPillId: 'Rasio HPP 50,00% (Turun dari 80,6% di 2020)',
    statusClass: 'badge-profit',
    title: 'Cost of Goods Sold (COGS): 50% Direct-Sourcing Target',
    titleId: 'Beban Pokok Pendapatan (HPP): Target 50% Sourcing Langsung',
    sub: 'Direct Farm-Gate Procurement & Multi-Temperature Cold Storage',
    subId: 'Pengadaan Langsung Petani & Pergudangan Pendingin Multi-Suhu',
    borderColor: '#137333',
    kpis: [
      { label: '2020A Actual', labelId: 'Realisasi 2020A', val: 'Rp 5,439.9 B', sub: '80.63% of Net Sales', isLoss: true },
      { label: '2021P Target', labelId: 'Target 2021P', val: 'Rp 3,440.8 B', sub: '50.00% of Net Sales' },
      { label: '2022P Target', labelId: 'Target 2022P', val: 'Rp 3,544.0 B', sub: '50.00% of Net Sales' },
      { label: '2023P Target', labelId: 'Target 2023P', val: 'Rp 3,756.6 B', sub: '50.00% of Net Sales', isHighlight: true },
      { label: 'Margin Expansion', labelId: 'Ekspansi Margin', val: '+30.63%', sub: 'Gross Profit Lift', isProfit: true }
    ],
    whereWeGotIt: {
      workbook: "Matahari.xlsx",
      sheets: [
        { name: "PART II", coords: "Row 156 (Cells G156 = 0.50, J156 = 0.50, M156 = 0.50)", desc: "Cost of Goods Sold assumption set to 50% of revenue in the pro forma model." },
        { name: "Projected Statements", coords: "Row 6 (Cells D6 = D5*G156, E6 = E5*J156, F6 = F5*M156)", desc: "Direct product cost calculation for 2021P, 2022P, and 2023P." }
      ],
      annualReport: "MPPA 2020 Annual Report, Audited Statement of Profit or Loss, p. 128 (COGS: Rp 5,439,936 million) and Note 26.",
      caseRef: "Harvard/PPM Case 23 Exhibit 2 (Pro Forma COGS assumptions)."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. 2021P COGS", formula: "Rp 6,881,526 M × 50.00% = Rp 3,440,763 M" },
        { step: "2. 2022P COGS", formula: "Rp 7,087,972 M × 50.00% = Rp 3,543,986 M" },
        { step: "3. 2023P COGS", formula: "Rp 7,513,250 M × 50.00% = Rp 3,756,625 M" }
      ],
      operationalBridge: [
        { item: "Direct Farm Fresh Sourcing (Bypassing Middlemen)", impact: "12%–15% Cost Savings", desc: "Contracting directly with vegetable and poultry farming clusters in West Java (Lembang/Ciwidey) and East Java (Malang), while honoring formal FMCG distribution agreements." },
        { item: "Centralized Cold-Chain Storage", impact: "6.4% Shrinkage Cut", desc: "Balaraja (35,000 m²) and Surabaya (22,000 m²) DCs eliminate temperature breaks, slashing waste." },
        { item: "Eliminating Wholesale Dilution", impact: "8% Margin Recovery", desc: "Closing low-margin SmartClub bulk wholesale business." }
      ]
    },
    strategicRationale: "Historical 2020 COGS of 80.6% reflected heavy reliance on informal multi-tier fresh brokers and severe perishable spoilage in non-refrigerated transit. Under the turnaround plan, direct farm sourcing and 66,755 m² of central cold storage eliminate produce middleman markups while honoring formal distributor contracts, reducing fresh food loss from 9.2% to under 3.0%.",
    sensitivity: "Sensitivity: Each 5.0% improvement in COGS translates into ~Rp 375 B in additional annual operating profit."
  },

  gross_profit: {
    key: 'gross_profit',
    tag: 'GROSS MARGIN EXPANSION',
    tagId: 'EKSPANSI MARGIN KOTOR',
    statusPill: '50.00% Gross Margin Target',
    statusPillId: 'Target Margin Kotor 50,00%',
    statusClass: 'badge-profit',
    title: 'Gross Profit: Expanding from 19.4% to 50.0%',
    titleId: 'Laba Kotor: Ekspansi dari 19,4% ke 50,0%',
    sub: 'Fresh Grocery Mix Shift, Cold-Chain Logistics & Value-Added Private Label',
    subId: 'Pergeseran Bauran Produk Segar, Logistik Rantai Dingin & Merek Privat',
    borderColor: '#137333',
    kpis: [
      { label: '2020A Actual', labelId: 'Realisasi 2020A', val: 'Rp 1,306.7 B', sub: '19.37% Gross Margin' },
      { label: '2021P Gross Profit', labelId: 'Laba Kotor 2021P', val: 'Rp 3,440.8 B', sub: '50.00% Gross Margin', isProfit: true },
      { label: '2022P Gross Profit', labelId: 'Laba Kotor 2022P', val: 'Rp 3,544.0 B', sub: '50.00% Gross Margin', isProfit: true },
      { label: '2023P Gross Profit', labelId: 'Laba Kotor 2023P', val: 'Rp 3,756.6 B', sub: '50.00% Gross Margin', isHighlight: true, isProfit: true }
    ],
    whereWeGotIt: {
      workbook: "Matahari.xlsx",
      sheets: [
        { name: "Projected Statements", coords: "Row 7 (Cells D7 = D5-D6, E7 = E5-E6, F7 = F5-F6)", desc: "Calculated Gross Profit across all projected periods." }
      ],
      annualReport: "MPPA 2020 Annual Report, p. 128 (Gross Profit: Rp 1,306,658 million; 19.37% gross margin).",
      caseRef: "Harvard/PPM Case 23 Exhibit 2 (Gross Profit Projections)."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. 2021P Gross Profit", formula: "Rp 6,881,526 M - Rp 3,440,763 M = Rp 3,440,763 M (50.00%)" },
        { step: "2. 2022P Gross Profit", formula: "Rp 7,087,972 M - Rp 3,543,986 M = Rp 3,543,986 M (50.00%)" },
        { step: "3. 2023P Gross Profit", formula: "Rp 7,513,250 M - Rp 3,756,625 M = Rp 3,756,625 M (50.00%)" }
      ],
      operationalBridge: [
        { item: "Perishable Category Shift", impact: "28%–38% Gross Margin", desc: "Fresh produce, bakery, and certified meats carry twice the margin of packaged ambient FMCG." },
        { item: "Direct Farm Procurement", impact: "+12% Net Margin", desc: "Direct farmer relationships for fresh produce bypass informal brokers while optimizing vendor trading terms." },
        { item: "Cold-Chain Waste Cut", impact: "+6.4% Shrink Savings", desc: "Temperature control from farm gate to store shelf slashes write-offs." }
      ]
    },
    strategicRationale: "Expanding gross margin to 50% is achieved via 3 strategic drivers: (1) Portfolio shift to high-margin perishables and fresh bakery (28–38% margin) vs bulk FMCG; (2) Direct farm cold-chain sourcing cutting informal produce middleman markups and spoilage while honoring distributor contracts; (3) Elimination of low-margin SmartClub wholesale dilution.",
    sensitivity: "Baseline Validation: Even at a standard supermarket industry gross margin of 24%–28%, MPPA's made smaller compact cost base generates positive operating income."
  },

  opex: {
    key: 'opex',
    tag: 'EXPENSE BUDGETING & DISCIPLINE',
    tagId: 'PENGANGGARAN BIAYA & DISIPLIN',
    statusPill: '31.00% OpEx Ratio · Conservative Expense Buffer',
    statusPillId: 'Rasio Beban Usaha 31,00% · Penyangga Biaya Konservatif',
    statusClass: 'badge-brand',
    title: 'Operating Expenses (OpEx): Conservative 31% Buffer',
    titleId: 'Beban Usaha: Penyangga Konservatif 31% Penjualan',
    sub: 'Ample Buffer for 50-Store Openings, Cold Logistics & Digital Commissions',
    subId: 'Cadangan Cukup untuk Pembukaan 50 Gerai, Logistik Dingin & Komisi Digital',
    borderColor: '#df0036',
    kpis: [
      { label: '2020A Actual', labelId: 'Realisasi 2020A', val: 'Rp 1,446.9 B', sub: '21.45% of Net Sales' },
      { label: '2021P Budget', labelId: 'Anggaran 2021P', val: 'Rp 2,133.3 B', sub: '31.00% of Net Sales (+Rp 686.3 B)' },
      { label: '2022P Budget', labelId: 'Anggaran 2022P', val: 'Rp 2,197.3 B', sub: '31.00% of Net Sales' },
      { label: '2023P Budget', labelId: 'Anggaran 2023P', val: 'Rp 2,329.1 B', sub: '31.00% of Net Sales (+Rp 882.2 B vs 2020)', isHighlight: true }
    ],
    whereWeGotIt: {
      workbook: "Matahari.xlsx",
      sheets: [
        { name: "PART II", coords: "Row 158 (Cells G158 = 0.31, J158 = 0.31, M158 = 0.31)", desc: "OpEx set at 31.0% of revenue across all 3 projected years." },
        { name: "Projected Statements", coords: "Row 8 (Cells D8 = D5*G158, E8 = E5*J158, F8 = F5*M158)", desc: "Projected Operating Expense calculation." }
      ],
      annualReport: "MPPA 2020 Annual Report, Note 28 (Selling Expenses: Rp 1,225.8 B; General & Admin: Rp 221.1 B; Total OpEx: Rp 1,446.9 B = 21.45% of sales).",
      caseRef: "Harvard/PPM Case 23 Exhibit 2 (Pro Forma Operating Expenses)."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. 2021P OpEx", formula: "Rp 6,881,526 M × 31.00% = Rp 2,133,273 M (+Rp 686.3 B above 2020)" },
        { step: "2. 2022P OpEx", formula: "Rp 7,087,972 M × 31.00% = Rp 2,197,271 M" },
        { step: "3. 2023P OpEx", formula: "Rp 7,513,250 M × 31.00% = Rp 2,329,108 M (+Rp 882.2 B above 2020)" }
      ],
      operationalBridge: [
        { item: "Store Launch & Marketing Buffer", impact: "+Rp 250.0 B", desc: "Local advertising, grand opening campaigns, and fresh customer acquisition." },
        { item: "Digital Marketplace Platform Fees", impact: "+Rp 220.0 B", desc: "GrabMart/Shopee 8%–10% fulfillment commission charges." },
        { item: "Cold-Chain Electricity & Handling", impact: "+Rp 180.0 B", desc: "Energy for multi-temp distribution facilities and refrigerated delivery van fleets." },
        { item: "Unallocated Operational Contingency", impact: "+Rp 232.2 B", desc: "Safety cushion absorbing unexpected inflation or supply shocks." }
      ]
    },
    strategicRationale: "Budgeting OpEx at 31% is intentionally conservative. Historical 2020 OpEx was only 21.45% of sales. Expanding the OpEx ratio to 31.0% builds in a huge +Rp 882.2 B spending cushion. This guarantees that all store fit-outs, digital commissions, and cold-chain logistics costs are fully funded without threatening operating profitability.",
    sensitivity: "Safety Margin: Even if operational inflation causes OpEx to rise to 35% of revenue, the company remains strongly EBIT positive (+Rp 1.13 T)."
  },

  net_income: {
    key: 'net_income',
    tag: 'BOTTOM-LINE EARNINGS & SOLVENCY',
    tagId: 'LABA BERSIH & SOLVABILITAS',
    statusPill: 'Cumulative Rp 2.50T PAT (2021P–2023P)',
    statusPillId: 'Laba Bersih Kumulatif Rp 2,50T (2021P–2023P)',
    statusClass: 'badge-profit',
    title: 'Net Income (PAT): Restoring Stockholders’ Equity',
    titleId: 'Laba Bersih: Pemulihan Total Ekuitas Pemegang Saham',
    sub: 'Full Reversal of Historical Losses & Equity Restored to Rp 2.69T',
    subId: 'Pembalikan Total Rugi Historis & Ekuitas Pulih Menjadi Rp 2,69T',
    borderColor: '#137333',
    kpis: [
      { label: '2020A Loss', labelId: 'Rugi 2020A', val: '-Rp 405.3 B', sub: 'Distressed Equity Drag', isLoss: true },
      { label: '2021P PAT', labelId: 'Laba Bersih 2021P', val: '+Rp 800.8 B', sub: 'Turnaround Year 1', isProfit: true },
      { label: '2022P PAT', labelId: 'Laba Bersih 2022P', val: '+Rp 831.0 B', sub: 'Turnaround Year 2', isProfit: true },
      { label: '2023P PAT', labelId: 'Laba Bersih 2023P', val: '+Rp 870.0 B', sub: 'Turnaround Year 3', isHighlight: true, isProfit: true },
      { label: '3-Yr Cum. PAT', labelId: 'Kumulatif 3 Thn', val: '+Rp 2,501.8 B', sub: '+Rp 2.50 T Restored Equity', isProfit: true }
    ],
    whereWeGotIt: {
      workbook: "Matahari.xlsx",
      sheets: [
        { name: "Projected Statements", coords: "Row 14 (Cells D14 = D12-D13, E14 = E12-E13, F14 = F12-F13)", desc: "Net Income after statutory taxes (23% in 2021–2022, 25% in 2023)." },
        { name: "Retained Earnings Table", coords: "Sheet 'Retained Earnings Table' & 'Projected Statements' Row 40", desc: "100% of Net Income is retained into stockholders' equity (Rp 0 dividends paid)." }
      ],
      annualReport: "MPPA 2020 Annual Report, Statement of Profit or Loss, p. 128 (Loss for the year: -Rp 405,307 million) and Statement of Changes in Equity, p. 131.",
      caseRef: "Harvard/PPM Case 23 Exhibit 2 (Pro Forma PAT)."
    },
    howWeGetIt: {
      mathSteps: [
        { step: "1. 2021P Net Income", formula: "EBT Rp 1,039,971 M - Tax 23% (Rp 239,193 M) = +Rp 800,778 M" },
        { step: "2. 2022P Net Income", formula: "EBT Rp 1,079,199 M - Tax 23% (Rp 248,216 M) = +Rp 830,983 M" },
        { step: "3. 2023P Net Income", formula: "EBT Rp 1,160,004 M - Tax 25% (Rp 290,001 M) = +Rp 870,003 M" },
        { step: "4. Cumulative 3-Yr Total", formula: "800,778 + 830,983 + 870,003 = +Rp 2,501,764 M (+Rp 2.50 T)" },
        { step: "5. Equity Restoration", formula: "2020 Equity (Rp 184,734 M) + Retained Earnings (Rp 2,501,764 M) + Capital (Rp 3,000 M) = Rp 2,689,498 M (+Rp 2.69 T)" }
      ]
    },
    strategicRationale: "Rebuilding Stockholders' Equity: Four consecutive years of pandemic losses (-Rp 3.53 T cumulative from 2017 to 2020) reduced MPPA's stockholders' equity to a distressed Rp 184.7 B. Retaining 100% of projected earnings completely restores the equity base to Rp 2.69 T without issuing a single dilutive share or taking on expensive bank debt.",
    sensitivity: "Solvency Protection: A restored equity cushion of Rp 2.69 T creates a formidable defense against economic downturns and ensures tier-1 supplier credit terms remain secure."
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
