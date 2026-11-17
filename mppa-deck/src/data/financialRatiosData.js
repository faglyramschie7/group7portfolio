// Reconciled Year-by-Year Derivation Data for All 14 Financial Ratios (Slide 35)
// Every single numerator & denominator pulls directly from Slide 33 Income Statement & Balance Sheet.

export const financialRatiosDetailData = {
  current_ratio: {
    key: 'current_ratio',
    tag: 'LIQUIDITY RATIO · SHORT-TERM SOLVENCY',
    tagId: 'RASIO LIKUIDITAS · SOLVABILITAS JANGKA PENDEK',
    statusPill: '0.56x (2020A) → 1.11x (2023P)',
    statusPillId: '0,56x (2020A) → 1,11x (2023P)',
    statusClass: 'badge-profit',
    title: 'Current Ratio: Short-Term Asset Coverage (0.56x → 1.11x)',
    titleId: 'Rasio Lancar: Cakupan Aset Jangka Pendek (0,56x → 1,11x)',
    sub: 'Total Current Assets ÷ Total Current Liabilities',
    subId: 'Total Aset Lancar ÷ Total Liabilitas Jangka Pendek',
    borderColor: '#137333',
    formulaText: 'Total Current Assets (Balance Sheet) ÷ Total Current Liabilities (Balance Sheet)',
    formulaTextId: 'Total Aset Lancar (Neraca) ÷ Total Liabilitas Lancar (Neraca)',
    benchmark: 'Supermarket norm 1.0x–1.3x (because shoppers pay cash immediately while supplier bills sit in payables). Recovers above 1.0x by 2023P.',
    benchmarkId: 'Patokan supermarket 1,0x–1,3x (karena pembeli bayar tunai sementara tagihan pemasok masuk utang usaha). Pulih di atas 1,0x pada 2023P.',
    kpis: [
      { label: '2019A', val: '0.73x', sub: 'Pre-COVID squeeze' },
      { label: '2020A', val: '0.56x', sub: 'Acute cash crunch', isLoss: true },
      { label: '2021P', val: '0.76x', sub: 'Cash builds, AP drops' },
      { label: '2022P', val: '0.89x', sub: 'Approaching 1.0x' },
      { label: '2023P', val: '1.11x', sub: 'Full 1.0x+ safety cover', isHighlight: true, isProfit: true }
    ],
    calcRows: [
      { year: '2019A', num: '1,904,047', den: '2,618,390', expr: '1,904,047 ÷ 2,618,390', res: '0.73x' },
      { year: '2020A', num: '1,535,266', den: '2,763,099', expr: '1,535,266 ÷ 2,763,099', res: '0.56x' },
      { year: '2021P', num: '1,484,653', den: '1,953,117', expr: '1,484,653 ÷ 1,953,117', res: '0.76x' },
      { year: '2022P', num: '1,675,304', den: '1,890,334', expr: '1,675,304 ÷ 1,890,334', res: '0.89x' },
      { year: '2023P', num: '2,068,114', den: '1,860,376', expr: '2,068,114 ÷ 1,860,376', res: '1.11x' }
    ],
    meaning: 'In 2020, MPPA had only Rp 0.56 in short-term assets for every Rp 1.00 of bills due within a year, which triggered supplier delays. Rebuilding Cash to Rp 941B while clearing SmartClub AP pushes Current Assets back above Current Liabilities (1.11x) by 2023P.'
  },

  quick_ratio: {
    key: 'quick_ratio',
    tag: 'LIQUIDITY RATIO · ACID TEST',
    tagId: 'RASIO LIKUIDITAS · UJI ASAM (RASIO CEPAT)',
    statusPill: '0.21x (2020A) → 0.71x (2023P)',
    statusPillId: '0,21x (2020A) → 0,71x (2023P)',
    statusClass: 'badge-profit',
    title: 'Quick Ratio: Instant Cash Cover Excluding Inventory (0.21x → 0.71x)',
    titleId: 'Rasio Cepat: Likuiditas Tanpa Bergantung Stok (0,21x → 0,71x)',
    sub: '(Total Current Assets − Inventories) ÷ Total Current Liabilities',
    subId: '(Total Aset Lancar − Persediaan) ÷ Total Liabilitas Jangka Pendek',
    borderColor: '#137333',
    formulaText: '(Total Current Assets − Inventories) ÷ Total Current Liabilities (Balance Sheet)',
    formulaTextId: '(Total Aset Lancar − Persediaan) ÷ Total Liabilitas Lancar (Neraca)',
    benchmark: 'In high-turnover grocery retail, a Quick Ratio of 0.50x–0.80x is healthy because store shelves convert quickly into daily register cash.',
    benchmarkId: 'Pada ritel sembako perputaran cepat, Rasio Cepat 0,50x–0,80x sudah sehat karena stok berputar cepat menjadi uang tunai harian.',
    kpis: [
      { label: '2019A', val: '0.27x', sub: 'Tight cash buffer' },
      { label: '2020A', val: '0.21x', sub: 'Distressed', isLoss: true },
      { label: '2021P', val: '0.41x', sub: '+95% recovery' },
      { label: '2022P', val: '0.51x', sub: 'Covers >50% immediately' },
      { label: '2023P', val: '0.71x', sub: '3.4x higher than 2020A', isHighlight: true, isProfit: true }
    ],
    calcRows: [
      { year: '2019A', num: '712,480', den: '2,618,390', expr: '(1,904,047 − 1,191,567) ÷ 2,618,390', res: '0.27x' },
      { year: '2020A', num: '570,763', den: '2,763,099', expr: '(1,535,266 − 964,503) ÷ 2,763,099', res: '0.21x' },
      { year: '2021P', num: '796,500', den: '1,953,117', expr: '(1,484,653 − 688,153) ÷ 1,953,117', res: '0.41x' },
      { year: '2022P', num: '966,507', den: '1,890,334', expr: '(1,675,304 − 708,797) ÷ 1,890,334', res: '0.51x' },
      { year: '2023P', num: '1,316,789', den: '1,860,376', expr: '(2,068,114 − 751,325) ÷ 1,860,376', res: '0.71x' }
    ],
    meaning: 'Shows how much short-term bills MPPA can cover WITHOUT selling a single item off store shelves. Growing cash to Rp 941B lifts quick coverage more than 3x from 0.21x to 0.71x.'
  },

  debt_to_assets: {
    key: 'debt_to_assets',
    tag: 'LEVERAGE RATIO · BALANCE SHEET WEIGHT',
    tagId: 'RASIO LEVERAGE · BEBAN KEWAJIBAN NERACA',
    statusPill: '95.9% (2020A) → 86.9% (2023P)',
    statusPillId: '95,9% (2020A) → 86,9% (2023P)',
    statusClass: 'badge-brand',
    title: 'Total Liabilities / Total Assets (95.9% → 86.9%)',
    titleId: 'Total Liabilitas / Total Aset (95,9% → 86,9%)',
    sub: '(Current Liabilities + LT Bank Debt + LT Lease Liabilities) ÷ Total Assets',
    subId: '(Liabilitas Lancar + Utang Bank JP + Liabilitas Sewa JP) ÷ Total Aset',
    borderColor: '#0369a1',
    formulaText: 'Total Liabilities (Balance Sheet) ÷ Total Assets (Balance Sheet)',
    formulaTextId: 'Total Liabilitas (Neraca) ÷ Total Aset (Neraca)',
    benchmark: 'Includes capitalized multi-year PSAK 73 mall leases (Note 19). Cutting lease commitments and retaining earnings steadily brings leverage back down toward pre-PSAK 73 levels (~86%).',
    benchmarkId: 'Termasuk kapitalisasi sewa mal PSAK 73 jangka panjang (Catatan 19). Pemotongan sewa dan laba ditahan mengembalikan rasio mendekati level pra-PSAK 73 (~86%).',
    kpis: [
      { label: '2019A', val: '86.1%', sub: 'Pre-PSAK 73' },
      { label: '2020A', val: '95.9%', sub: 'Peak lease + loss squeeze', isLoss: true },
      { label: '2021P', val: '96.9%', sub: 'ROU downsizing base' },
      { label: '2022P', val: '94.1%', sub: '-2.8 pts improvement' },
      { label: '2023P', val: '86.9%', sub: '-9.0 pts vs 2020A', isHighlight: true, isProfit: true }
    ],
    calcRows: [
      { year: '2019A', num: '3,290,128', den: '3,820,809', expr: '(2,618,390 + 250,000 + 421,738) ÷ 3,820,809', res: '86.1%' },
      { year: '2020A', num: '4,325,777', den: '4,510,511', expr: '(2,763,099 + 0 + 1,562,678) ÷ 4,510,511', res: '95.9%' },
      { year: '2021P', num: '3,315,795', den: '3,423,148', expr: '(1,953,117 + 0 + 1,362,678) ÷ 3,423,148', res: '96.9%' },
      { year: '2022P', num: '3,153,012', den: '3,350,049', expr: '(1,890,334 + 0 + 1,262,678) ÷ 3,350,049', res: '94.1%' },
      { year: '2023P', num: '3,023,054', den: '3,479,109', expr: '(1,860,376 + 0 + 1,162,678) ÷ 3,479,109', res: '86.9%' }
    ],
    meaning: 'In 2020, losses shrank equity to just 4.1% of assets (meaning liabilities made up 95.9%!). Retaining Rp 271.3B cumulative profit and cutting long-term leases rebuilds the equity cushion to 13.1% by 2023P, lowering Total Liabilities / Assets back to 86.9%.'
  },

  debt_to_equity: {
    key: 'debt_to_equity',
    tag: 'SOLVENCY RATIO · BANK BORROWING',
    tagId: 'RASIO SOLVABILITAS · PINJAMAN BANK',
    statusPill: 'Held at 0.0% (Rp 0 New Long-Term Bank Debt)',
    statusPillId: 'Dijaga di 0,0% (Tanpa Utang Bank Jangka Panjang Baru)',
    statusClass: 'badge-profit',
    title: 'Long-term Bank Debt / Equity (Held at 0.0%)',
    titleId: 'Utang Bank Jangka Panjang / Ekuitas (Tetap 0,0%)',
    sub: 'Long-Term Bank Debt ÷ Total Stockholders’ Equity',
    subId: 'Utang Bank Jangka Panjang ÷ Total Ekuitas Pemegang Saham',
    borderColor: '#137333',
    formulaText: 'Long-Term Bank Debt (Balance Sheet) ÷ Total Stockholders’ Equity (Balance Sheet)',
    formulaTextId: 'Utang Bank Jangka Panjang (Neraca) ÷ Total Ekuitas (Neraca)',
    benchmark: 'BNI ceiling on net debt / equity covenants is typically 2.50x (250%). Staying at 0.0% LT bank debt keeps MPPA completely clear of bank leverage pressure.',
    benchmarkId: 'Batas utang BNI umumnya 2,50x (250%). Menjaga utang bank JP di 0,0% menghindarkan MPPA dari tekanan pinjaman baru.',
    kpis: [
      { label: '2019A', val: '47.1%', sub: 'Rp 250B LT loan' },
      { label: '2020A', val: '0.0%', sub: 'Zero LT bank debt' },
      { label: '2021P', val: '0.0%', sub: '100% self-funded' },
      { label: '2022P', val: '0.0%', sub: '100% self-funded' },
      { label: '2023P', val: '0.0%', sub: 'Rp 0 new LT borrowing', isHighlight: true, isProfit: true }
    ],
    calcRows: [
      { year: '2019A', num: '250,000', den: '530,681', expr: '250,000 ÷ 530,681', res: '47.1%' },
      { year: '2020A', num: '0', den: '184,734', expr: '0 ÷ 184,734', res: '0.0%' },
      { year: '2021P', num: '0', den: '107,353', expr: '0 ÷ 107,353', res: '0.0%' },
      { year: '2022P', num: '0', den: '197,037', expr: '0 ÷ 197,037', res: '0.0%' },
      { year: '2023P', num: '0', den: '456,055', expr: '0 ÷ 456,055', res: '0.0%' }
    ],
    meaning: 'Matches Note 15 (zero long-term bank loans at year-end 2020; only the Rp 500B short-term revolving line exists) and our Slide 30 policy to self-fund every Rupiah of CapEx without borrowing long-term.'
  },

  tie: {
    key: 'tie',
    tag: 'INTEREST COVERAGE · LENDER SAFETY',
    tagId: 'CAKUPAN BUNGA · KEAMANAN KREDITOR',
    statusPill: '-0.52x (2020A) → +2.43x (2023P)',
    statusPillId: '-0,52x (2020A) → +2,43x (2023P)',
    statusClass: 'badge-profit',
    title: 'Times-Interest-Earned (TIE): -0.52x → +2.43x',
    titleId: 'Rasio Cakupan Bunga (TIE): -0,52x → +2,43x',
    sub: 'Operating Profit (EBIT) ÷ Net Finance Costs (Interest & PSAK 73 Lease Finance)',
    subId: 'Laba Usaha (EBIT) ÷ Biaya Keuangan Neto (Bunga Bank & Sewa PSAK 73)',
    borderColor: '#137333',
    formulaText: 'EBIT (Income Statement) ÷ Net Finance Costs (Income Statement)',
    formulaTextId: 'EBIT / Laba Usaha (Laba Rugi) ÷ Biaya Keuangan Neto (Laba Rugi)',
    benchmark: 'Lenders look for TIE ≥ 2.00x. Swings from negative coverage in 2019–2020 to +2.43x by 2023P through both higher EBIT and lower lease interest.',
    benchmarkId: 'Kreditor mensyaratkan TIE ≥ 2,00x. Berbalik dari negatif pada 2019–2020 menjadi +2,43x pada 2023P melalui kenaikan EBIT dan penurunan bunga sewa.',
    kpis: [
      { label: '2019A', val: '-1.65x', sub: 'EBIT loss', isLoss: true },
      { label: '2020A', val: '-0.52x', sub: 'EBIT loss + PSAK 73 int.', isLoss: true },
      { label: '2021P', val: '0.69x', sub: 'Positive EBIT covers 69%' },
      { label: '2022P', val: '1.48x', sub: 'Covers interest 1.5x', isProfit: true },
      { label: '2023P', val: '2.43x', sub: 'Clears 2.0x covenant floor', isHighlight: true, isProfit: true }
    ],
    calcRows: [
      { year: '2019A', num: '-196,105', den: '118,496', expr: '-196,105 ÷ 118,496', res: '-1.65x' },
      { year: '2020A', num: '-140,268', den: '267,419', expr: '-140,268 ÷ 267,419', res: '-0.52x' },
      { year: '2021P', num: '+172,038', den: '249,419', expr: '172,038 ÷ 249,419', res: '0.69x' },
      { year: '2022P', num: '+354,399', den: '239,419', expr: '354,399 ÷ 239,419', res: '1.48x' },
      { year: '2023P', num: '+563,494', den: '231,419', expr: '563,494 ÷ 231,419', res: '2.43x' }
    ],
    meaning: 'Notice why TIE reaches +2.43x: Operating Profit (EBIT) climbs to +Rp 563.5B while Net Finance Costs drop by Rp 36B/yr as 15 mall leases are renegotiated under PSAK 73.'
  },

  inv_turnover: {
    key: 'inv_turnover',
    tag: 'ACTIVITY RATIO · STOCK SPEED',
    tagId: 'RASIO AKTIVITAS · PERPUTARAN PERSEDIAAN',
    statusPill: '5.64x (2020A) → 7.60x–7.90x (Projected)',
    statusPillId: '5,64x (2020A) → 7,60x–7,90x (Proyeksi)',
    statusClass: 'badge-profit',
    title: 'Inventory Turnover: Faster Fresh Stock Velocity (5.64x → 7.60x)',
    titleId: 'Perputaran Persediaan: Arus Barang Segar Lebih Cepat (5,64x → 7,60x)',
    sub: 'Cost of Goods Sold (COGS) ÷ Ending Inventories',
    subId: 'Beban Pokok Penjualan (HPP) ÷ Persediaan Akhir',
    borderColor: '#137333',
    formulaText: 'Cost of Goods Sold (Income Statement) ÷ Inventories (Balance Sheet)',
    formulaTextId: 'Beban Pokok Penjualan / HPP (Laba Rugi) ÷ Persediaan (Neraca)',
    benchmark: 'Modern supermarkets turn inventory 7.0x–10.0x per year (~36–52 days). Dropping slow appliances and wholesale bulk stock lifts turnover +35%.',
    benchmarkId: 'Supermarket modern memutar stok 7,0x–10,0x/tahun (~36–52 hari). Melepas elektronik lambat laku dan SmartClub menaikkan perputaran +35%.',
    kpis: [
      { label: '2019A', val: '5.94x', sub: '61.4 days stock' },
      { label: '2020A', val: '5.64x', sub: '64.7 days stock' },
      { label: '2021P', val: '7.90x', sub: '46.2 days stock', isProfit: true },
      { label: '2022P', val: '7.75x', sub: '47.1 days stock' },
      { label: '2023P', val: '7.60x', sub: '48.0 days stock', isHighlight: true, isProfit: true }
    ],
    calcRows: [
      { year: '2019A', num: '7,074,249', den: '1,191,567', expr: '7,074,249 ÷ 1,191,567', res: '5.94x' },
      { year: '2020A', num: '5,439,936', den: '964,503', expr: '5,439,936 ÷ 964,503', res: '5.64x' },
      { year: '2021P', num: '5,436,406', den: '688,153', expr: '5,436,406 ÷ 688,153', res: '7.90x' },
      { year: '2022P', num: '5,493,178', den: '708,797', expr: '5,493,178 ÷ 708,797', res: '7.75x' },
      { year: '2023P', num: '5,710,070', den: '751,325', expr: '5,710,070 ÷ 751,325', res: '7.60x' }
    ],
    meaning: 'Using our exact COGS (5.44T–5.71T) and lean Inventories (10% of sales = 688B–751B), inventory sells out every ~46–48 days instead of sitting 65 days in hypermarket warehouses.'
  },

  fixed_asset_turnover: {
    key: 'fixed_asset_turnover',
    tag: 'ACTIVITY RATIO · STORE EQUIPMENT PRODUCTIVITY',
    tagId: 'RASIO AKTIVITAS · PRODUKTIVITAS ASET TETAP',
    statusPill: '8.54x (2020A) → 9.47x (2023P)',
    statusPillId: '8,54x (2020A) → 9,47x (2023P)',
    statusClass: 'badge-brand',
    title: 'Fixed Assets Turnover: Sales per Rupiah of Store Equipment',
    titleId: 'Perputaran Aset Tetap: Efisiensi Penjualan per Aset Gerai',
    sub: 'Revenues (Sales) ÷ Net Property, Plant & Equipment',
    subId: 'Pendapatan (Penjualan) ÷ Aset Tetap Neto (PP&E)',
    borderColor: '#0369a1',
    formulaText: 'Revenues (Income Statement) ÷ Net Property, Plant & Equipment (Balance Sheet)',
    formulaTextId: 'Pendapatan (Laba Rugi) ÷ Aset Tetap Neto (Neraca)',
    benchmark: 'Retail benchmark 7.0x–9.5x. Returns slightly above MPPA’s own pre-COVID 2019 level (9.34x → 9.47x).',
    benchmarkId: 'Patokan ritel 7,0x–9,5x. Kembali melampaui level pra-pandemi MPPA 2019 (9,34x → 9,47x).',
    kpis: [
      { label: '2019A', val: '9.34x', sub: 'Pre-COVID productivity' },
      { label: '2020A', val: '8.54x', sub: 'COVID traffic dip' },
      { label: '2021P', val: '8.70x', sub: 'Rollout begins' },
      { label: '2022P', val: '8.95x', sub: 'More compact stores' },
      { label: '2023P', val: '9.47x', sub: 'Matches 2019 efficiency', isHighlight: true, isProfit: true }
    ],
    calcRows: [
      { year: '2019A', num: '8,654,646', den: '926,287', expr: '8,654,646 ÷ 926,287', res: '9.34x' },
      { year: '2020A', num: '6,746,594', den: '789,871', expr: '6,746,594 ÷ 789,871', res: '8.54x' },
      { year: '2021P', num: '6,881,526', den: '791,121', expr: '6,881,526 ÷ 791,121', res: '8.70x' },
      { year: '2022P', num: '7,087,972', den: '792,371', expr: '7,087,972 ÷ 792,371', res: '8.95x' },
      { year: '2023P', num: '7,513,250', den: '793,621', expr: '7,513,250 ÷ 793,621', res: '9.47x' }
    ],
    meaning: 'Spending Rp 90B/yr carefully on compact Hyfresh equipment (Rp 4.5B/store) and dark-hub conversions generates higher sales without bloating fixed assets.'
  },

  total_asset_turnover: {
    key: 'total_asset_turnover',
    tag: 'ACTIVITY RATIO · CAPITAL EFFICIENCY',
    tagId: 'RASIO AKTIVITAS · EFISIENSI TOTAL ASET',
    statusPill: '1.50x (2020A) → 2.16x (2023P)',
    statusPillId: '1,50x (2020A) → 2,16x (2023P)',
    statusClass: 'badge-profit',
    title: 'Total Assets Turnover: Back Near 2019 Efficiency (1.50x → 2.16x)',
    titleId: 'Perputaran Total Aset: Kembali Efisien (1,50x → 2,16x)',
    sub: 'Revenues (Sales) ÷ Total Assets',
    subId: 'Pendapatan (Penjualan) ÷ Total Aset',
    borderColor: '#137333',
    formulaText: 'Revenues (Income Statement) ÷ Total Assets (Balance Sheet)',
    formulaTextId: 'Pendapatan (Laba Rugi) ÷ Total Aset (Neraca)',
    benchmark: 'Pre-PSAK 73 MPPA generated 2.27x sales on assets. Trimming bloated mall lease assets restores turnover from 1.50x back up to 2.16x.',
    benchmarkId: 'Sebelum PSAK 73, MPPA mencetak 2,27x penjualan atas aset. Merampingkan aset sewa mal memulihkan perputaran dari 1,50x ke 2,16x.',
    kpis: [
      { label: '2019A', val: '2.27x', sub: 'Pre-PSAK 73 norm' },
      { label: '2020A', val: '1.50x', sub: 'Diluted by ROU leases' },
      { label: '2021P', val: '2.01x', sub: 'Lease footprint slims' },
      { label: '2022P', val: '2.12x', sub: 'Compact store scale' },
      { label: '2023P', val: '2.16x', sub: '+44% asset efficiency', isHighlight: true, isProfit: true }
    ],
    calcRows: [
      { year: '2019A', num: '8,654,646', den: '3,820,809', expr: '8,654,646 ÷ 3,820,809', res: '2.27x' },
      { year: '2020A', num: '6,746,594', den: '4,510,511', expr: '6,746,594 ÷ 4,510,511', res: '1.50x' },
      { year: '2021P', num: '6,881,526', den: '3,423,148', expr: '6,881,526 ÷ 3,423,148', res: '2.01x' },
      { year: '2022P', num: '7,087,972', den: '3,350,049', expr: '7,087,972 ÷ 3,350,049', res: '2.12x' },
      { year: '2023P', num: '7,513,250', den: '3,479,109', expr: '7,513,250 ÷ 3,479,109', res: '2.16x' }
    ],
    meaning: 'In 2020, capitalization of long-term mall leases pushed Total Assets up to Rp 4.51T while sales fell, dropping asset turnover to 1.50x. Resizing hypermarkets and exiting bad leases restores Total Asset Turnover to 2.16x.'
  },

  ar_turnover: {
    key: 'ar_turnover',
    tag: 'ACTIVITY RATIO · RECEIVABLES COLLECTION',
    tagId: 'RASIO AKTIVITAS · PERPUTARAN PIUTANG',
    statusPill: '34.92x (2020A) → 28.57x (Projected)',
    statusPillId: '34,92x (2020A) → 28,57x (Proyeksi)',
    statusClass: 'badge-brand',
    title: 'Accounts Receivable Turnover (34.92x → 28.57x)',
    titleId: 'Perputaran Piutang Usaha (34,92x → 28,57x)',
    sub: 'Revenues (Sales) ÷ Accounts Receivable',
    subId: 'Pendapatan (Penjualan) ÷ Piutang Usaha',
    borderColor: '#475569',
    formulaText: 'Revenues (Income Statement) ÷ Accounts Receivable (Balance Sheet)',
    formulaTextId: 'Pendapatan (Laba Rugi) ÷ Piutang Usaha (Neraca)',
    benchmark: 'Supermarket benchmark 20x–40x. Slight shift from 34.92x to 28.57x matches 3.5% AR/Sales as online delivery apps settle every few weeks.',
    benchmarkId: 'Patokan supermarket 20x–40x. Pergeseran tipis ke 28,57x mencerminkan porsi kliring aplikasi pengiriman daring.',
    kpis: [
      { label: '2019A', val: '39.33x', sub: '2.54% AR/Sales' },
      { label: '2020A', val: '34.92x', sub: '2.86% AR/Sales' },
      { label: '2021P', val: '28.57x', sub: '3.50% AR/Sales' },
      { label: '2022P', val: '28.57x', sub: '3.50% AR/Sales' },
      { label: '2023P', val: '28.57x', sub: 'Fast collection', isHighlight: true }
    ],
    calcRows: [
      { year: '2019A', num: '8,654,646', den: '220,079', expr: '8,654,646 ÷ 220,079', res: '39.33x' },
      { year: '2020A', num: '6,746,594', den: '193,210', expr: '6,746,594 ÷ 193,210', res: '34.92x' },
      { year: '2021P', num: '6,881,526', den: '240,853', expr: '6,881,526 ÷ 240,853', res: '28.57x' },
      { year: '2022P', num: '7,087,972', den: '248,079', expr: '7,087,972 ÷ 248,079', res: '28.57x' },
      { year: '2023P', num: '7,513,250', den: '262,964', expr: '7,513,250 ÷ 262,964', res: '28.57x' }
    ],
    meaning: 'Walk-in shoppers pay instantly, while GrabMart/Shopee settlements take ~2–3 weeks. Setting Accounts Receivable at 3.5% of sales yields an exact 28.57x turnover.'
  },

  collection_period: {
    key: 'collection_period',
    tag: 'ACTIVITY RATIO · DAYS TO COLLECT CASH',
    tagId: 'RASIO AKTIVITAS · PERIODE PENAGIHAN (HARI)',
    statusPill: '10.5 Days (2020A) → 12.8 Days (Projected)',
    statusPillId: '10,5 Hari (2020A) → 12,8 Hari (Proyeksi)',
    statusClass: 'badge-brand',
    title: 'Average Collection Period (10.5 → 12.8 Days)',
    titleId: 'Periode Penagihan Rata-Rata (10,5 → 12,8 Hari)',
    sub: '365 Days ÷ Accounts Receivable Turnover',
    subId: '365 Hari ÷ Perputaran Piutang Usaha',
    borderColor: '#475569',
    formulaText: '365 ÷ (Revenues ÷ Accounts Receivable)',
    formulaTextId: '365 ÷ (Pendapatan ÷ Piutang Usaha)',
    benchmark: 'Modern grocery norm 7–20 days. At 12.8 days, MPPA collects money quickly even as online delivery scales.',
    benchmarkId: 'Standar ritel bahan pokok 7–20 hari. Di 12,8 hari, pencairan kas MPPA tetap sangat cepat seiring tumbuhnya pesanan daring.',
    kpis: [
      { label: '2019A', val: '9.3 days', sub: 'Instant cash dominant' },
      { label: '2020A', val: '10.5 days', sub: 'COVID online shift starts' },
      { label: '2021P', val: '12.8 days', sub: 'In-store + app mix' },
      { label: '2022P', val: '12.8 days', sub: 'In-store + app mix' },
      { label: '2023P', val: '12.8 days', sub: 'Safe working capital', isHighlight: true }
    ],
    calcRows: [
      { year: '2019A', num: '365', den: '39.33x', expr: '365 ÷ 39.325', res: '9.3 days' },
      { year: '2020A', num: '365', den: '34.92x', expr: '365 ÷ 34.918', res: '10.5 days' },
      { year: '2021P', num: '365', den: '28.57x', expr: '365 ÷ 28.571', res: '12.8 days' },
      { year: '2022P', num: '365', den: '28.57x', expr: '365 ÷ 28.571', res: '12.8 days' },
      { year: '2023P', num: '365', den: '28.57x', expr: '365 ÷ 28.571', res: '12.8 days' }
    ],
    meaning: 'Measures average days to collect cash from customers and marketplace partners. Under 15 days ensures cash flows into MPPA’s bank account well before supplier invoices come due.'
  },

  gross_profit_margin: {
    key: 'gross_profit_margin',
    tag: 'PROFITABILITY RATIO · PRODUCT MARGIN',
    tagId: 'RASIO PROFITABILITAS · MARGIN LABA KOTOR',
    statusPill: '18.8% Historical Avg → 24.0% Target',
    statusPillId: 'Rata-rata Historis 18,8% → Target 24,0%',
    statusClass: 'badge-profit',
    title: 'Gross Profit Margin: 19.4% → 24.0% Gradual Lift',
    titleId: 'Margin Laba Kotor: Kenaikan Bertahap 19,4% → 24,0%',
    sub: 'Gross Profit ÷ Revenues (Sales) × 100%',
    subId: 'Laba Kotor ÷ Pendapatan (Penjualan) × 100%',
    borderColor: '#137333',
    formulaText: 'Gross Profit (Income Statement) ÷ Revenues (Income Statement)',
    formulaTextId: 'Laba Kotor (Laba Rugi) ÷ Pendapatan (Laba Rugi)',
    benchmark: 'Asian supermarket benchmark 21%–25%. Replaces unrealistic 50% template assumption with gradual 5.2-point improvement.',
    benchmarkId: 'Patokan supermarket Asia 21%–25%. Mengganti asumsi 50% yang tidak realistis dengan kenaikan bertahap 5,2 poin.',
    kpis: [
      { label: '2019A', val: '18.3%', sub: '1,580.4B GP' },
      { label: '2020A', val: '19.4%', sub: '1,306.7B GP' },
      { label: '2021P', val: '21.0%', sub: 'SmartClub exit + cold chain' },
      { label: '2022P', val: '22.5%', sub: 'Private label Value Plus' },
      { label: '2023P', val: '24.0%', sub: 'Realistic grocery target', isHighlight: true, isProfit: true }
    ],
    calcRows: [
      { year: '2019A', num: '1,580,397', den: '8,654,646', expr: '1,580,397 ÷ 8,654,646', res: '18.3%' },
      { year: '2020A', num: '1,306,658', den: '6,746,594', expr: '1,306,658 ÷ 6,746,594', res: '19.4%' },
      { year: '2021P', num: '1,445,120', den: '6,881,526', expr: '1,445,120 ÷ 6,881,526', res: '21.0%' },
      { year: '2022P', num: '1,594,794', den: '7,087,972', expr: '1,594,794 ÷ 7,087,972', res: '22.5%' },
      { year: '2023P', num: '1,803,180', den: '7,513,250', expr: '1,803,180 ÷ 7,513,250', res: '24.0%' }
    ],
    meaning: 'Driven by three concrete operational levers while honoring formal FMCG contracts: (1) less produce spoilage via 66,755 m² cold storage, (2) Value Plus house-brand staples (+300–500 bps margin), and (3) closing low-margin SmartClub wholesale.'
  },

  operating_profit_margin: {
    key: 'operating_profit_margin',
    tag: 'PROFITABILITY RATIO · CORE OPERATIONS',
    tagId: 'RASIO PROFITABILITAS · MARGIN LABA USAHA',
    statusPill: '-2.1% (2020A) → +7.5% (2023P)',
    statusPillId: '-2,1% (2020A) → +7,5% (2023P)',
    statusClass: 'badge-profit',
    title: 'Operating Profit Margin: -2.1% → +7.5%',
    titleId: 'Margin Laba Usaha: -2,1% → +7,5%',
    sub: 'Operating Profit (EBIT) ÷ Revenues (Sales) × 100%',
    subId: 'Laba Usaha (EBIT) ÷ Pendapatan (Penjualan) × 100%',
    borderColor: '#137333',
    formulaText: 'EBIT (Income Statement) ÷ Revenues (Income Statement) = Gross Margin % − OpEx %',
    formulaTextId: 'EBIT (Laba Rugi) ÷ Pendapatan (Laba Rugi) = Margin Kotor % − Rasio OpEx %',
    benchmark: 'Healthy supermarket norm 4.0%–8.0%. Achieves positive +2.5% in Year 1 and +7.5% by Year 3.',
    benchmarkId: 'Standar supermarket sehat 4,0%–8,0%. Mencapai +2,5% di Tahun 1 dan +7,5% di Tahun 3.',
    kpis: [
      { label: '2019A', val: '-2.3%', sub: '18.3% GP − 20.5% OpEx', isLoss: true },
      { label: '2020A', val: '-2.1%', sub: '19.4% GP − 21.5% OpEx', isLoss: true },
      { label: '2021P', val: '+2.5%', sub: '21.0% GP − 18.5% OpEx', isProfit: true },
      { label: '2022P', val: '+5.0%', sub: '22.5% GP − 17.5% OpEx', isProfit: true },
      { label: '2023P', val: '+7.5%', sub: '24.0% GP − 16.5% OpEx', isHighlight: true, isProfit: true }
    ],
    calcRows: [
      { year: '2019A', num: '-196,105', den: '8,654,646', expr: '-196,105 ÷ 8,654,646', res: '-2.3%' },
      { year: '2020A', num: '-140,268', den: '6,746,594', expr: '-140,268 ÷ 6,746,594', res: '-2.1%' },
      { year: '2021P', num: '+172,038', den: '6,881,526', expr: '172,038 ÷ 6,881,526', res: '+2.5%' },
      { year: '2022P', num: '+354,399', den: '7,087,972', expr: '354,399 ÷ 7,087,972', res: '+5.0%' },
      { year: '2023P', num: '+563,494', den: '7,513,250', expr: '563,494 ÷ 7,513,250', res: '+7.5%' }
    ],
    meaning: 'Every year improves cleanly because Gross Margin climbs (+5.2 pts total) while shrinking oversized hypermarkets and cutting 15 mall rents lower OpEx (-4.5 pts total).'
  },

  roa: {
    key: 'roa',
    tag: 'PROFITABILITY RATIO · ASSET RETURNS',
    tagId: 'RASIO PROFITABILITAS · IMBAL HASIL ASET (ROA)',
    statusPill: '-9.0% (2020A) → +7.4% (2023P)',
    statusPillId: '-9,0% (2020A) → +7,4% (2023P)',
    statusClass: 'badge-profit',
    title: 'Return on Assets (ROA): -9.0% → +7.4%',
    titleId: 'Imbal Hasil atas Aset (ROA): -9,0% → +7,4%',
    sub: 'Net Income (PAT) ÷ Total Assets × 100%',
    subId: 'Laba Bersih (PAT) ÷ Total Aset × 100%',
    borderColor: '#137333',
    formulaText: 'Net Income (Income Statement) ÷ Total Assets (Balance Sheet)',
    formulaTextId: 'Laba Bersih (Laba Rugi) ÷ Total Aset (Neraca)',
    benchmark: 'Supermarket peer average 4.5%–7.5%. Rebounds cleanly from -9.0% in 2020A to +2.7% (2022P) and +7.4% (2023P).',
    benchmarkId: 'Rata-rata ritel sembako 4,5%–7,5%. Pulih dari -9,0% (2020A) menjadi +2,7% (2022P) dan +7,4% (2023P).',
    kpis: [
      { label: '2019A', val: '-14.5%', sub: 'Severe asset drag', isLoss: true },
      { label: '2020A', val: '-9.0%', sub: 'ROU lease bloat', isLoss: true },
      { label: '2021P', val: '-2.3%', sub: 'Loss cut 75%', isLoss: true },
      { label: '2022P', val: '+2.7%', sub: 'Turns positive', isProfit: true },
      { label: '2023P', val: '+7.4%', sub: 'Peer-leading ROA', isHighlight: true, isProfit: true }
    ],
    calcRows: [
      { year: '2019A', num: '-552,674', den: '3,820,809', expr: '-552,674 ÷ 3,820,809', res: '-14.5%' },
      { year: '2020A', num: '-405,307', den: '4,510,511', expr: '-405,307 ÷ 4,510,511', res: '-9.0%' },
      { year: '2021P', num: '-77,381', den: '3,423,148', expr: '-77,381 ÷ 3,423,148', res: '-2.3%' },
      { year: '2022P', num: '+89,684', den: '3,350,049', expr: '89,684 ÷ 3,350,049', res: '+2.7%' },
      { year: '2023P', num: '+259,018', den: '3,479,109', expr: '259,018 ÷ 3,479,109', res: '+7.4%' }
    ],
    meaning: 'Return on Assets flips positive in Year 2 (+2.7%) and hits +7.4% in Year 3 because MPPA both returns to net profitability (+Rp 259B) and slims unproductive ROU mall lease assets.'
  },

  roe: {
    key: 'roe',
    tag: 'PROFITABILITY RATIO · SHAREHOLDER RETURNS',
    tagId: 'RASIO PROFITABILITAS · IMBAL HASIL EKUITAS (ROE)',
    statusPill: '-219.4% (2020A) → +56.8% (2023P)',
    statusPillId: '-219,4% (2020A) → +56,8% (2023P)',
    statusClass: 'badge-profit',
    title: 'Return on Equity (ROE): -219.4% → +56.8%',
    titleId: 'Imbal Hasil atas Ekuitas (ROE): -219,4% → +56,8%',
    sub: 'Net Income (PAT) ÷ Total Stockholders’ Equity × 100%',
    subId: 'Laba Bersih (PAT) ÷ Total Ekuitas Pemegang Saham × 100%',
    borderColor: '#137333',
    formulaText: 'Net Income (Income Statement) ÷ Total Stockholders’ Equity (Balance Sheet)',
    formulaTextId: 'Laba Bersih (Laba Rugi) ÷ Total Ekuitas (Neraca)',
    benchmark: 'ROE is high (+45% to +57%) initially because 4 years of losses shrank the equity denominator down to Rp 185B–Rp 456B; normalizes smoothly toward 20%–25% as retained earnings accumulate post-2023.',
    benchmarkId: 'ROE tinggi (+45% hingga +57%) di awal karena akumulasi rugi sebelumnya mengecilkan ekuitas dasar (Rp 185M–Rp 456M); akan menormalisasi ke ~20%–25% seiring pemulihan modal.',
    kpis: [
      { label: '2019A', val: '-104.1%', sub: 'Equity eroding', isLoss: true },
      { label: '2020A', val: '-219.4%', sub: 'Near equity wipeout', isLoss: true },
      { label: '2021P', val: '-72.1%', sub: 'Year-1 rollout loss', isLoss: true },
      { label: '2022P', val: '+45.5%', sub: 'Flips strongly positive', isProfit: true },
      { label: '2023P', val: '+56.8%', sub: 'Zero share dilution', isHighlight: true, isProfit: true }
    ],
    calcRows: [
      { year: '2019A', num: '-552,674', den: '530,681', expr: '-552,674 ÷ 530,681', res: '-104.1%' },
      { year: '2020A', num: '-405,307', den: '184,734', expr: '-405,307 ÷ 184,734', res: '-219.4%' },
      { year: '2021P', num: '-77,381', den: '107,353', expr: '-77,381 ÷ 107,353', res: '-72.1%' },
      { year: '2022P', num: '+89,684', den: '197,037', expr: '89,684 ÷ 197,037', res: '+45.5%' },
      { year: '2023P', num: '+259,018', den: '456,055', expr: '259,018 ÷ 456,055', res: '+56.8%' }
    ],
    meaning: 'Notice why ROE in 2022P–2023P is high (+45.5% and +56.8%): Net Income (+Rp 89.7B / +Rp 259.0B) is divided by a still-rebuilding equity base (Rp 197B / Rp 456B). As profits retain after 2023, ROE settles naturally into a healthy 20–25% long-term range.'
  }
};
