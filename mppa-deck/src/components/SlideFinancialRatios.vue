<template>
  <div class="ratios-slide-wrapper">
    <!-- Header -->
    <div class="deck-kicker fw-kicker-row">
      <div class="fw-kicker-lead">
        <span class="fw-badge fw-badge-who" style="background:#475569;">{{ language === 'id' ? '5W1H · KONTROL' : '5W1H · CONTROL' }}</span>
        <span class="fw-kicker-text">{{ t("Original upside case · Ratios depend on the forecast assumptions") }}</span>
      </div>
      <div class="fw-stepper" role="navigation" aria-label="5W1H Framework">
        <span class="fw-stepper-label">5W1H:</span>
        <button type="button" class="fw-stepper-pill" data-fw="what"><span class="fw-pill-code">WHAT</span><span class="fw-pill-title">{{ language === 'id' ? 'Rencana' : 'Action Plan' }}</span></button>
        <button type="button" class="fw-stepper-pill" data-fw="how"><span class="fw-pill-code">HOW</span><span class="fw-pill-title">{{ language === 'id' ? 'Anggaran' : 'Budget' }}</span></button>
        <button type="button" class="fw-stepper-pill" data-fw="where"><span class="fw-pill-code">WHERE</span><span class="fw-pill-title">{{ language === 'id' ? 'Peta' : 'Store Map' }}</span></button>
        <button type="button" class="fw-stepper-pill" data-fw="who"><span class="fw-pill-code">{{ language === 'id' ? 'SIAPA' : 'WHO' }}</span><span class="fw-pill-title">{{ language === 'id' ? 'Struktur' : 'Org' }}</span></button>
        <button type="button" class="fw-stepper-pill" data-fw="why"><span class="fw-pill-code">WHY</span><span class="fw-pill-title">{{ language === 'id' ? 'Visi' : 'Vision' }}</span></button>
        <button type="button" class="fw-stepper-pill" data-fw="when"><span class="fw-pill-code">WHEN</span><span class="fw-pill-title">{{ language === 'id' ? 'Peta Jalan' : 'Roadmap' }}</span></button>
      </div>
    </div>
    <div class="slide-header-row">
      <h2 class="slide-title">{{ language === 'id' ? 'Rasio keuangan MPPA' : 'MPPA financial ratios' }}</h2>
    </div>

    <!-- 3-Metric Executive Ratio Bar -->
    <div class="ratio-kpi-bar">
      <div class="ratio-kpi-card">
        <span class="ratio-kpi-tag">{{ language === 'id' ? 'Rasio lancar' : 'Current ratio' }}</span>
        <div class="ratio-kpi-val">0.56x → 1.97x</div>
        <div class="ratio-kpi-sub">{{ t("Current Ratio recovers +252%; Quick Ratio surges from 0.21x to 1.79x.") }}</div>
      </div>
      <div class="ratio-kpi-card">
        <span class="ratio-kpi-tag">{{ language === 'id' ? 'Cakupan bunga' : 'Interest coverage' }}</span>
        <div class="ratio-kpi-val">−0.52x → 5.34x</div>
        <div class="ratio-kpi-sub">{{ t("Projected interest cover is based on the upside forecast. MPPA did not publish the bank’s required minimum.") }}</div>
      </div>
      <div class="ratio-kpi-card">
        <span class="ratio-kpi-tag">{{ language === 'id' ? 'Margin laba usaha' : 'Operating profit margin' }}</span>
        <div class="ratio-kpi-val">−2.1% → +19.0%</div>
        <div class="ratio-kpi-sub">{{ t("Gross margin reaches 50.0%; ROE rebounds from -219.4% to +32.3%.") }}</div>
      </div>
    </div>

    <!-- Master 14-Ratio Grid -->
    <div class="ratio-content-grid">
      <!-- Left: Comprehensive 14 Ratios Table -->
      <div class="table-card">
        <div class="table-header">
          <span class="table-title">{{ language === 'id' ? '14 rasio keuangan' : '14 financial ratios' }}</span>
          <span class="table-source">{{ language === 'id' ? 'Audited 2019A–2020A vs Proforma 2021P–2023P · Arahkan kursor untuk formula & patokan' : 'Audited 2019A–2020A vs. Pro Forma 2021P–2023P · Hover row for formula & benchmark' }}</span>
        </div>
        <div class="table-scroll">
          <table class="ratio-table">
            <thead>
              <tr>
                <th class="th-name">{{ t("Financial Ratio") }}</th>
                <th class="th-hist">2019A</th>
                <th class="th-hist">2020A</th>
                <th class="th-proj">2021P</th>
                <th class="th-proj">2022P</th>
                <th class="th-proj">2023P</th>
                <th class="th-eval">{{ language === 'id' ? 'Apa artinya' : 'What it means' }}</th>
              </tr>
            </thead>
            <tbody>
              <!-- 1. Liquidity -->
              <tr class="row-section"><td colspan="7">{{ t("1. LIQUIDITY RATIOS (WORKING CAPITAL BUFFER)") }}</td></tr>
              <tr data-ratio="current_ratio">
                <td class="td-bold">{{ t("Current Ratio (x)") }}</td>
                <td class="td-num">0.73</td>
                <td class="td-num td-loss">0.56</td>
                <td class="td-num td-proj">1.41</td>
                <td class="td-num td-proj">1.70</td>
                <td class="td-num td-bold td-profit">1.97</td>
                <td class="td-desc">{{ t("Recovers above retail standard (1.2–1.5x); ends cash squeeze.") }}</td>
              </tr>
              <tr data-ratio="quick_ratio">
                <td class="td-bold">{{ t("Quick Ratio (x)") }}</td>
                <td class="td-num">0.27</td>
                <td class="td-num td-loss">0.21</td>
                <td class="td-num td-proj">1.24</td>
                <td class="td-num td-proj">1.53</td>
                <td class="td-num td-bold td-profit">1.79</td>
                <td class="td-desc">{{ t("Acid-test buffer eliminates risk of trade supplier payment freezes.") }}</td>
              </tr>

              <!-- 2. Leverage & Solvency -->
              <tr class="row-section"><td colspan="7">{{ t("2. LEVERAGE & SOLVENCY RATIOS (CAPITAL STRUCTURE & COVENANTS)") }}</td></tr>
              <tr data-ratio="debt_to_assets">
                <td class="td-bold">{{ t("Total Liab / Total Assets (%)") }}</td>
                <td class="td-num">86.1%</td>
                <td class="td-num td-loss">95.9%</td>
                <td class="td-num td-proj">81.5%</td>
                <td class="td-num td-proj">71.1%</td>
                <td class="td-num td-bold td-profit">63.8%</td>
                <td class="td-desc">{{ t("De-bulks balance sheet by 32 percentage points via lease rightsizing.") }}</td>
              </tr>
              <tr data-ratio="debt_to_equity">
                <td class="td-bold">{{ t("Long-term Bank Debt / Equity (%)") }}</td>
                <td class="td-num">47.1%</td>
                <td class="td-num">0.0%</td>
                <td class="td-num td-proj">0.2%</td>
                <td class="td-num td-proj">0.1%</td>
                <td class="td-num td-bold td-profit">0.1%</td>
                <td class="td-desc td-profit">{{ t("This ratio uses long-term bank debt only. The loan tests refer to net debt, which is a different measure.") }}</td>
              </tr>
              <tr class="row-highlight" data-ratio="tie">
                <td class="td-bold">{{ t("Times-Interest-Earned (TIE)") }}</td>
                <td class="td-num td-loss">-1.65x</td>
                <td class="td-num td-loss">-0.52x</td>
                <td class="td-num td-bold td-profit">4.89x</td>
                <td class="td-num td-bold td-profit">5.03x</td>
                <td class="td-num td-bold td-profit">5.34x</td>
                <td class="td-desc td-profit">{{ t("The model divides operating profit by net finance costs. The bank’s cash-based test may use different figures.") }}</td>
              </tr>

              <!-- 3. Operating Velocity -->
              <tr class="row-section"><td colspan="7">{{ t("3. OPERATING VELOCITY & ASSET EFFICIENCY RATIOS") }}</td></tr>
              <tr data-ratio="inv_turnover">
                <td class="td-bold">{{ t("Inventory Turnover (x)") }}</td>
                <td class="td-num">5.94x</td>
                <td class="td-num">5.64x</td>
                <td class="td-num td-proj">7.14x</td>
                <td class="td-num td-proj">7.14x</td>
                <td class="td-num td-bold td-proj">7.14x</td>
                <td class="td-desc">{{ t("Turnover accelerates +27% due to compact fresh perishable velocity.") }}</td>
              </tr>
              <tr data-ratio="fixed_asset_turnover">
                <td class="td-bold">{{ t("Fixed Assets Turnover (x)") }}</td>
                <td class="td-num">9.34x</td>
                <td class="td-num">8.54x</td>
                <td class="td-num td-proj">8.70x</td>
                <td class="td-num td-proj">8.95x</td>
                <td class="td-num td-proj">9.47x</td>
                <td class="td-desc">{{ t("Higher retail revenue density per m² of store floorplate.") }}</td>
              </tr>
              <tr data-ratio="total_asset_turnover">
                <td class="td-bold">{{ t("Total Assets Turnover (x)") }}</td>
                <td class="td-num">2.27x</td>
                <td class="td-num">1.50x</td>
                <td class="td-num td-proj">1.29x</td>
                <td class="td-num td-proj">1.13x</td>
                <td class="td-num td-proj">1.01x</td>
                <td class="td-desc">{{ t("Normalizes as massive PSAK 73 right-of-use asset base is stabilized.") }}</td>
              </tr>
              <tr data-ratio="ar_turnover">
                <td class="td-bold">{{ t("Accounts Receivable Turnover (x)") }}</td>
                <td class="td-num">39.33x</td>
                <td class="td-num">34.92x</td>
                <td class="td-num td-proj">14.29x</td>
                <td class="td-num td-proj">14.29x</td>
                <td class="td-num td-proj">14.29x</td>
                <td class="td-desc">{{ t("Reflects credit settlements with marketplace partners (Grab, Shopee).") }}</td>
              </tr>
              <tr data-ratio="collection_period">
                <td class="td-bold">{{ t("Average Collection Period (days)") }}</td>
                <td class="td-num">9.3</td>
                <td class="td-num">10.5</td>
                <td class="td-num td-proj">25.6</td>
                <td class="td-num td-proj">25.5</td>
                <td class="td-num td-proj">25.6</td>
                <td class="td-desc">{{ t("Retail consumers pay instantly; marketplace clearing runs on 25-day cycles.") }}</td>
              </tr>

              <!-- 4. Profitability -->
              <tr class="row-section"><td colspan="7">{{ t("4. PROFITABILITY & SHAREHOLDER VALUE CREATION") }}</td></tr>
              <tr data-ratio="gross_profit_margin">
                <td class="td-bold">{{ t("Gross Profit Margin (%)") }}</td>
                <td class="td-num">18.3%</td>
                <td class="td-num">19.4%</td>
                <td class="td-num td-bold td-profit">50.0%</td>
                <td class="td-num td-bold td-profit">50.0%</td>
                <td class="td-num td-bold td-profit">50.0%</td>
                <td class="td-desc td-profit">{{ t("Direct farm fresh procurement + optimizing vendor terms within contracts.") }}</td>
              </tr>
              <tr data-ratio="operating_profit_margin">
                <td class="td-bold">{{ t("Operating Profit Margin (%)") }}</td>
                <td class="td-num td-loss">-2.3%</td>
                <td class="td-num td-loss">-2.1%</td>
                <td class="td-num td-bold td-profit">19.0%</td>
                <td class="td-num td-bold td-profit">19.0%</td>
                <td class="td-num td-bold td-profit">19.0%</td>
                <td class="td-desc td-profit">{{ t("Decisive turnaround; halts 4 consecutive loss years (-Rp 3.53T).") }}</td>
              </tr>
              <tr data-ratio="roa">
                <td class="td-bold">{{ t("Return on Assets (ROA %)") }}</td>
                <td class="td-num td-loss">-14.5%</td>
                <td class="td-num td-loss">-9.0%</td>
                <td class="td-num td-bold td-profit">15.0%</td>
                <td class="td-num td-bold td-profit">13.2%</td>
                <td class="td-num td-bold td-profit">11.7%</td>
                <td class="td-desc td-profit">{{ t("Surpasses grocery retail industry average (~4.5–6.0%).") }}</td>
              </tr>
              <tr class="row-total" data-ratio="roe">
                <td class="td-bold">{{ t("Return on Equity (ROE %)") }}</td>
                <td class="td-num td-loss">-104.1%</td>
                <td class="td-num td-loss">-219.4%</td>
                <td class="td-num td-bold td-profit">81.3%</td>
                <td class="td-num td-bold td-profit">45.7%</td>
                <td class="td-num td-bold td-profit">32.3%</td>
                <td class="td-desc td-profit">{{ t("Restores equity base from Rp 185B back to Rp 2.69T with zero dilution.") }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>

    <aside class="loan-note">
      <strong>{{ language === 'id' ? 'Pinjaman BNI · Catatan 15' : 'BNI loan · Note 15' }}</strong>
      <p>{{ language === 'id'
        ? 'MPPA telah menarik Rp500 miliar pada akhir 2020. Laporan 2020 menyebutkan bahwa persyaratan pinjaman dipenuhi atau pengecualian diperoleh. Proyeksi rasio belum membuktikan kepatuhan di masa depan.'
        : 'MPPA had drawn Rp500 billion by year-end 2020. It reported meeting its loan conditions or obtaining a waiver. Projected ratios do not establish future compliance.' }}</p>
    </aside>

    <div class="ratios-footer-bar">
      <div class="footer-right">
        <span class="cite-pill">{{ t("Matahari.xlsx Sheet 'Ratios' · AR2020 Note 15 · Fred David Ch. 8") }} · {{ slideNumber }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  slideNumber: String,
  language: {
    type: String,
    default: 'id'
  },
  t: {
    type: Function,
    default: (str) => str
  }
});
</script>

<style scoped>
.ratios-slide-wrapper {
  aspect-ratio: 16 / 9;
  background: #ffffff;
  color: #1e293b;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.4cqw 3.2cqw 1.2cqw;
  box-sizing: border-box;
  overflow: hidden;
  container-type: inline-size;
}

/* Signature Red Left Border & Top-Right MPPA Logo */
.ratios-slide-wrapper::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0.65cqw;
  background: #df0036;
}

.ratios-slide-wrapper::after {
  content: '';
  position: absolute;
  top: 1.2cqw;
  right: 3.2cqw;
  width: 6cqw;
  height: 2cqw;
  background: url('/assets/mppa-logo.png') right center / contain no-repeat;
  pointer-events: none;
}

.deck-kicker {
  font-size: 0.74cqw;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #df0036;
  margin-bottom: 0.2cqw;
}

.slide-header-row {
  margin-bottom: .65cqw;
  padding-right: 8cqw;
}

.slide-title {
  font-family: inherit;
  font-size: 2.25cqw;
  font-weight: 800;
  line-height: 1.1;
  margin: 0;
}

/* 3-Metric Top Bar */
.ratio-kpi-bar {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-bottom: .5cqw;
  border: 1px solid #e8dfe3;
  border-top: 2px solid #df0036;
  border-radius: 6px;
  background: #faf8f9;
}

.ratio-kpi-card {
  display: flex;
  flex-direction: column;
  padding: .45cqw .75cqw;
}

.ratio-kpi-card + .ratio-kpi-card {
  border-left: 1px solid #e8dfe3;
}

.ratio-kpi-tag {
  margin-bottom: .12cqw;
  color: #5e4e56;
  font-size: .67cqw;
  font-weight: 800;
  letter-spacing: .05em;
  text-transform: uppercase;
}

.ratio-kpi-val {
  font-size: 1.45cqw;
  font-weight: 900;
  color: #0f172a;
  line-height: 1.15;
}

.ratio-kpi-sub {
  font-size: 0.77cqw;
  color: #5e4e56;
  line-height: 1.2;
}

/* Master Grid */
.ratio-content-grid {
  display: flex;
  flex: 1;
  min-height: 0;
}

.table-card {
  flex: 1;
  min-width: 0;
  background: #ffffff;
  border: 1.5px solid #e2e8f0;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.table-header {
  padding: 0.3cqw 0.75cqw;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.table-title {
  font-size: 0.74cqw;
  font-weight: 800;
  color: #0f172a;
}

.table-source {
  font-size: 0.68cqw;
  color: #64748b;
}

.table-scroll {
  flex: 1;
  overflow-y: auto;
}

.ratio-table {
  min-height: 100%;
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  font-size: 0.85cqw;
  line-height: 1.25;
}

.ratio-table th {
  position: sticky;
  top: 0;
  background: #f1f5f9;
  color: #334155;
  font-weight: 800;
  padding: 0.28cqw 0.45cqw;
  text-align: right;
  border-bottom: 1.5px solid #cbd5e1;
  white-space: nowrap;
}

.ratio-table th.th-name { text-align: left; width: 26%; }
.ratio-table th.th-eval { text-align: left; width: 37%; }

.ratio-table td {
  padding: 0.22cqw 0.45cqw;
  border-bottom: 1px solid #f1f5f9;
}

.td-bold { font-weight: 800; color: #0f172a; }
.td-num { text-align: right; font-variant-numeric: tabular-nums; }
.td-proj { color: #0369a1; }
.td-desc { font-size: 0.77cqw; color: #64748b; line-height: 1.2; }

.td-loss { color: #dc2626; font-weight: 700; }
.td-profit { color: #16a34a; font-weight: 800; }

.ratio-table tbody tr:not(.row-section) {
  cursor: pointer;
  transition: background-color 0.12s ease;
}

.ratio-table tbody tr:not(.row-section):hover {
  background: #fdf2f5 !important;
}

.ratio-table tbody tr.row-highlight:hover td {
  background: #e6f9ee !important;
}

.ratio-table tbody tr.row-total:hover td {
  background: #def7ec !important;
}

.row-section td {
  background: #f1f5f9;
  font-weight: 800;
  color: #1e293b;
  font-size: 0.68cqw;
  letter-spacing: 0.05em;
  padding: 0.18cqw 0.45cqw;
}

.row-highlight td {
  background: #f0fdf4;
  border-top: 1.5px solid #86efac;
  border-bottom: 1.5px solid #86efac;
}

.row-total td {
  background: #ecfdf5;
  border-top: 1.5px solid #059669;
  border-bottom: 1.5px solid #059669;
}

.loan-note {
  display: flex;
  align-items: baseline;
  gap: .75cqw;
  margin-top: .5cqw;
  padding: .45cqw .75cqw;
  border-left: 3px solid #597493;
  border-radius: 4px;
  background: #eff4fa;
  color: #263d59;
  font-size: .75cqw;
  line-height: 1.3;
}

.loan-note strong {
  flex-shrink: 0;
}

.loan-note p {
  margin: 0;
}

.ratios-footer-bar {
  display: flex;
  justify-content: flex-end;
  margin-top: .35cqw;
  color: #475569;
  font-size: .65cqw;
}
</style>
