<template>
  <div class="valuation-slide-wrapper">
    <!-- Header -->
    <div class="deck-kicker">{{ t("Original upside case · Valuation depends on the projected earnings") }}</div>
    <div class="slide-header-row">
      <div class="title-block">
        <h2 class="slide-title">{{ t("Corporate Valuation Analysis: MPPA vs. Alfamart Benchmark") }}</h2>
        <p class="slide-subtitle">
          {{ t("Evaluating firm worth using Fred David's 4-method framework (Net Worth, 5x Net Income, P/E Multiple, Market Cap) derived from Matahari.xlsx Sheet 'Company Valuation'") }}
        </p>
      </div>

      <!-- Live Benchmark Pill -->
      <div class="peer-pill">
        <span class="peer-tag">{{ t("RETAIL PEER BENCHMARK") }}</span>
        <span class="peer-name">PT Sumber Alfaria Trijaya Tbk (AMRT)</span>
      </div>
    </div>

    <!-- 3-Metric Executive Valuation Bar -->
    <div class="val-kpi-bar">
      <div class="val-kpi-card">
        <span class="val-kpi-tag tag-blue">{{ t("MARKET CAPITALIZATION (METHOD 4)") }}</span>
        <div class="val-kpi-val">Rp 768.0B <span class="val-kpi-peer">vs. AMRT Rp 32.80T</span></div>
        <div class="val-kpi-sub">{{ t("MPPA trades at ~2.3% of Alfamart's valuation, pricing in deep distress.") }}</div>
      </div>
      <div class="val-kpi-card">
        <span class="val-kpi-tag tag-green">{{ t("NET WORTH METHOD (METHOD 1)") }}</span>
        <div class="val-kpi-val">Rp 182.4B <span class="val-kpi-peer">vs. AMRT Rp 7.40T</span></div>
        <div class="val-kpi-sub">{{ t("Tangible book value battered by -Rp 3.53T cumulative 4-year losses.") }}</div>
      </div>
      <div class="val-kpi-card">
        <span class="val-kpi-tag tag-purple">{{ t("TURNAROUND INTRINSIC UPSIDE") }}</span>
        <div class="val-kpi-val">Rp 4.35T – Rp 13.05T</div>
        <div class="val-kpi-sub">{{ t("At 2023P PAT of Rp 870B: 5x earnings = Rp 4.35T; at 15x peer P/E = Rp 13.05T.") }}</div>
      </div>
    </div>

    <!-- Master Two-Column Valuation Grid -->
    <div class="val-grid">
      <!-- Left Column: The 4 Methods Table -->
      <div class="table-card">
        <div class="table-header">
          <span class="table-title">{{ t("Fred David 4-Method Valuation Matrix · In Millions of Rupiah") }}</span>
          <span class="table-source">{{ t("Source: Matahari.xlsx 'Company Valuation' & IDX 2020 Filings") }}</span>
        </div>
        <div class="table-scroll">
          <table class="val-table">
            <thead>
              <tr>
                <th class="th-num">#</th>
                <th class="th-method">{{ t("Valuation Approach") }}</th>
                <th class="th-calc">{{ t("Mathematical Formula") }}</th>
                <th class="th-mppa">MPPA (Turnaround)</th>
                <th class="th-peer">Alfamart (AMRT)</th>
                <th class="th-note">{{ t("Strategic Assessment") }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="td-center">1</td>
                <td class="td-bold">{{ t("Net Worth Method") }}</td>
                <td class="td-formula">Stockholders' Equity − Intangibles</td>
                <td class="td-num td-highlight">Rp 182,419M</td>
                <td class="td-num">Rp 7,397,900M</td>
                <td class="td-desc">{{ t("Conservative tangible asset floor; ignores future operating cash generation.") }}</td>
              </tr>
              <tr>
                <td class="td-center">2</td>
                <td class="td-bold">{{ t("Net Income × 5") }}</td>
                <td class="td-formula">5-Year Earnings Multiple</td>
                <td class="td-num td-loss">-Rp 2,026,535M</td>
                <td class="td-num td-profit">Rp 5,305,000M</td>
                <td class="td-desc td-loss">{{ t("Distorted by COVID loss (-Rp 405B); swings to +Rp 4.35T upon 2023P recovery.") }}</td>
              </tr>
              <tr>
                <td class="td-center">3</td>
                <td class="td-bold">{{ t("Price-Earnings Multiple") }}</td>
                <td class="td-formula">(Share Price ÷ EPS) × Net Income</td>
                <td class="td-num">Rp 767,958M</td>
                <td class="td-num">Rp 32,803,960M</td>
                <td class="td-desc">{{ t("Algebraically identical to Method 4: (P / EPS) × NI = P × Shares.") }}</td>
              </tr>
              <tr>
                <td class="td-center">4</td>
                <td class="td-bold">{{ t("Outstanding Shares") }}</td>
                <td class="td-formula"># Shares Outstanding × Stock Price</td>
                <td class="td-num td-highlight">Rp 767,958M</td>
                <td class="td-num">Rp 32,803,960M</td>
                <td class="td-desc">{{ t("7,529M shares @ Rp 102; prices in extreme liquidity distress discount.") }}</td>
              </tr>
              <tr class="row-average">
                <td class="td-center td-bold">Σ</td>
                <td class="td-bold">{{ t("Textbook Method Average") }}</td>
                <td class="td-formula">(Method 1 + 2 + 3 + 4) ÷ 4</td>
                <td class="td-num td-bold td-loss">-Rp 77,050M</td>
                <td class="td-num td-bold td-profit">Rp 19,577,705M</td>
                <td class="td-desc td-bold td-loss">{{ t("Economically distorted; mixes accounting equity with negative COVID losses.") }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Right Column: Critical Methodological Analysis -->
      <div class="critique-card">
        <div class="critique-header">
          <span class="crit-tag">{{ t("CRITICAL EVALUATION · FRED DAVID CH. 8 SLIDE 35") }}</span>
          <h3 class="crit-title">{{ t("Why Averaging the 4 Methods is Methodologically Flawed") }}</h3>
        </div>
        <div class="crit-body">
          <div class="crit-item">
            <div class="crit-icon">1</div>
            <div class="crit-text">
              <strong>{{ t("Method 3 ≡ Method 4 Redundancy") }}</strong>
              <p>{{ t("(Share Price / EPS) × Net Income simplifies algebraically to Price × Shares. Averaging all four methods double-counts market capitalization (50% weight), heavily biasing valuation toward volatile equity sentiment.") }}</p>
            </div>
          </div>

          <div class="crit-item">
            <div class="crit-icon">2</div>
            <div class="crit-text">
              <strong>{{ t("Averaging Negative Restructuring Losses") }}</strong>
              <p>{{ t("Mixing positive tangible net worth (+Rp 182.4B) with a negative 5-year multiple (-Rp 2.03T) produces an artificial negative valuation (-Rp 77.1B). A going concern generating Rp 6.75T in annual cash sales cannot have negative value.") }}</p>
            </div>
          </div>

          <div class="crit-item">
            <div class="crit-icon">3</div>
            <div class="crit-text">
              <strong>{{ t("Distressed Penny Stock vs. Real Logistics Moat") }}</strong>
              <p>{{ t("At Rp 102/share, MPPA's Rp 768.0B market cap reflects bankruptcy fear, completely ignoring Rp 789.9B in net PP&E and 66,755 m² of multi-temperature Halal cold chain distribution centers across Java and Sumatra.") }}</p>
            </div>
          </div>

          <div class="crit-item highlight-crit">
            <div class="crit-icon icon-star">★</div>
            <div class="crit-text">
              <strong>{{ t("Normalized Post-Turnaround Target (2023P)") }}</strong>
              <p>{{ t("Upon executing the 50-store Hyfresh rollout, MPPA achieves +Rp 870.0B Net Income. At 5x earnings = Rp 4.35T. Applying a 15x peer retail P/E yields an intrinsic target of Rp 13.05T (Rp 1,733/share), unlocking 17.0x shareholder value.") }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer / Sources Bar -->
    <div class="val-footer-bar">
      <div class="footer-left">
        <strong>{{ t("Strategic Grounding:") }}</strong>
        <span>{{ t("Fred David 4-method average is severely distorted by restructuring losses. Real enterprise value is unlocked via normalized post-turnaround cash flow (+Rp 870B PAT by 2023).") }}</span>
      </div>
      <div class="footer-right">
        <span class="cite-pill">{{ t("Matahari.xlsx Sheet 'Company Valuation' · Fred David Ch. 8") }} · {{ slideNumber }}</span>
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
.valuation-slide-wrapper {
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
.valuation-slide-wrapper::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0.65cqw;
  background: #df0036;
}

.valuation-slide-wrapper::after {
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
  font-size: 0.62cqw;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #df0036;
  margin-bottom: 0.2cqw;
}

.slide-header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 0.35cqw;
  gap: 1cqw;
}

.title-block {
  flex: 1;
  min-width: 0;
  max-width: 72cqw;
}

.slide-title {
  font-size: 1.35cqw;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.02em;
  line-height: 1.15;
  margin: 0 0 0.1cqw;
}

.slide-subtitle {
  font-size: 0.62cqw;
  color: #475569;
  line-height: 1.25;
  margin: 0;
}

.peer-pill {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: #f8fafc;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  padding: 0.2cqw 0.6cqw;
  flex-shrink: 0;
}

.peer-tag {
  font-size: 0.46cqw;
  font-weight: 800;
  color: #0284c7;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.peer-name {
  font-size: 0.62cqw;
  font-weight: 800;
  color: #0f172a;
}

/* 3-Metric Top Bar */
.val-kpi-bar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75cqw;
  margin-bottom: 0.4cqw;
}

.val-kpi-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 0.35cqw 0.75cqw;
  display: flex;
  flex-direction: column;
}

.val-kpi-tag {
  font-size: 0.5cqw;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 0.1cqw;
}

.tag-blue { color: #0284c7; }
.tag-green { color: #15803d; }
.tag-purple { color: #7c3aed; }

.val-kpi-val {
  font-size: 1.05cqw;
  font-weight: 900;
  color: #0f172a;
  line-height: 1.15;
}

.val-kpi-peer {
  font-size: 0.58cqw;
  font-weight: 600;
  color: #64748b;
  margin-left: 0.3cqw;
}

.val-kpi-sub {
  font-size: 0.56cqw;
  color: #64748b;
  line-height: 1.2;
}

/* Master 2-Column Grid */
.val-grid {
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  gap: 0.75cqw;
  flex: 1;
  min-height: 0;
}

.table-card {
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
  font-size: 0.62cqw;
  font-weight: 800;
  color: #0f172a;
}

.table-source {
  font-size: 0.52cqw;
  color: #64748b;
}

.table-scroll {
  flex: 1;
  overflow-y: auto;
}

.val-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.58cqw;
  line-height: 1.25;
}

.val-table th {
  background: #f1f5f9;
  color: #334155;
  font-weight: 800;
  padding: 0.3cqw 0.5cqw;
  text-align: right;
  border-bottom: 1.5px solid #cbd5e1;
  white-space: nowrap;
}

.val-table th.th-num { text-align: center; width: 4%; }
.val-table th.th-method { text-align: left; width: 22%; }
.val-table th.th-calc { text-align: left; width: 24%; }
.val-table th.th-note { text-align: left; width: 24%; }

.val-table td {
  padding: 0.32cqw 0.5cqw;
  border-bottom: 1px solid #f1f5f9;
}

.td-center { text-align: center; color: #64748b; font-weight: 700; }
.td-bold { font-weight: 800; color: #0f172a; }
.td-formula { font-size: 0.54cqw; color: #475569; font-family: monospace; }
.td-num { text-align: right; font-variant-numeric: tabular-nums; font-weight: 700; }
.td-desc { font-size: 0.54cqw; color: #64748b; line-height: 1.2; }

.td-highlight { color: #0284c7; font-weight: 800; }
.td-loss { color: #dc2626; }
.td-profit { color: #16a34a; }

.row-average td {
  background: #fef2f2;
  border-top: 1.5px solid #fca5a5;
  border-bottom: 1.5px solid #fca5a5;
}

/* Right Column: Critique Card */
.critique-card {
  background: #ffffff;
  border: 1.5px solid #e2e8f0;
  border-radius: 6px;
  padding: 0.4cqw 0.75cqw;
  display: flex;
  flex-direction: column;
}

.critique-header {
  border-bottom: 1px solid #f1f5f9;
  padding-bottom: 0.2cqw;
  margin-bottom: 0.3cqw;
}

.crit-tag {
  font-size: 0.48cqw;
  font-weight: 800;
  color: #df0036;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  display: block;
  margin-bottom: 0.08cqw;
}

.crit-title {
  font-size: 0.78cqw;
  font-weight: 800;
  color: #0f172a;
  margin: 0;
}

.crit-body {
  display: flex;
  flex-direction: column;
  gap: 0.35cqw;
  flex: 1;
}

.crit-item {
  display: flex;
  gap: 0.45cqw;
  align-items: flex-start;
  background: #f8fafc;
  border: 1px solid #f1f5f9;
  border-radius: 5px;
  padding: 0.3cqw 0.5cqw;
}

.crit-item.highlight-crit {
  background: #f0fdf4;
  border-color: #86efac;
}

.crit-icon {
  width: 1.1cqw;
  height: 1.1cqw;
  border-radius: 50%;
  background: #e2e8f0;
  color: #0f172a;
  font-size: 0.56cqw;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 0.05cqw;
}

.icon-star {
  background: #16a34a;
  color: #ffffff;
}

.crit-text strong {
  font-size: 0.62cqw;
  color: #0f172a;
  display: block;
}

.crit-text p {
  font-size: 0.54cqw;
  color: #475569;
  line-height: 1.25;
  margin: 0.08cqw 0 0;
}

.highlight-crit .crit-text strong {
  color: #15803d;
}

/* Footer Bar */
.val-footer-bar {
  margin-top: 0.35cqw;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 0.25cqw 0.75cqw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.56cqw;
  color: #475569;
  min-height: 1.8cqw;
}

.val-footer-bar strong {
  color: #0f172a;
}

.cite-pill {
  font-size: 0.5cqw;
  font-weight: 700;
  color: #64748b;
  background: #e2e8f0;
  padding: 0.08cqw 0.35cqw;
  border-radius: 3px;
  white-space: nowrap;
}
</style>
