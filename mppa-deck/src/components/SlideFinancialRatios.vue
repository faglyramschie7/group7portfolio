<template>
  <div class="ratios-slide-wrapper">
    <!-- Header -->
    <div class="deck-kicker">{{ t("Original upside case · Ratios depend on the forecast assumptions") }}</div>
    <div class="slide-header-row">
      <div class="title-block">
        <h2 class="slide-title">{{ t("Financial Ratios Dashboard: 5-Year Turnaround Trajectory (2019A–2023P)") }}</h2>
        <p class="slide-subtitle">
          {{ t("Tracking 14 key financial ratios across Liquidity, Leverage, Operating Velocity, and Profitability derived from Matahari.xlsx Sheet 'Ratios', illustrating how the upside scenario changes the ratios.") }}
        </p>
      </div>

      <!-- Covenant Badge -->
      <div class="covenant-badge">
        <span class="cov-tag">{{ t("BNI CREDIT FACILITY (NOTE 15)") }}</span>
        <span class="cov-val">{{ t("100% Covenant Compliant") }}</span>
      </div>
    </div>

    <!-- 3-Metric Executive Ratio Bar -->
    <div class="ratio-kpi-bar">
      <div class="ratio-kpi-card">
        <span class="ratio-kpi-tag tag-blue">{{ t("LIQUIDITY EXPANSION") }}</span>
        <div class="ratio-kpi-val">0.56x → 1.97x</div>
        <div class="ratio-kpi-sub">{{ t("Current Ratio recovers +252%; Quick Ratio surges from 0.21x to 1.79x.") }}</div>
      </div>
      <div class="ratio-kpi-card">
        <span class="ratio-kpi-tag tag-green">{{ t("ABILITY TO PAY INTEREST") }}</span>
        <div class="ratio-kpi-val">TIE: -0.52x → 5.34x</div>
        <div class="ratio-kpi-sub">{{ t("Projected interest cover is based on the upside forecast. MPPA did not publish the bank’s required minimum.") }}</div>
      </div>
      <div class="ratio-kpi-card">
        <span class="ratio-kpi-tag tag-purple">{{ t("PROFITABILITY RECOVERY") }}</span>
        <div class="ratio-kpi-val">OPM: -2.1% → +19.0%</div>
        <div class="ratio-kpi-sub">{{ t("Gross margin reaches 50.0%; ROE rebounds from -219.4% to +32.3%.") }}</div>
      </div>
    </div>

    <!-- Master 14-Ratio Grid -->
    <div class="ratio-content-grid">
      <!-- Left: Comprehensive 14 Ratios Table -->
      <div class="table-card">
        <div class="table-header">
          <span class="table-title">{{ t("14 Key Turnaround Financial Ratios (Matahari.xlsx Sheet 'Ratios')") }}</span>
          <span class="table-source">{{ t("Audited 2019A–2020A vs. Pro Forma 2021P–2023P") }}</span>
        </div>
        <div class="table-scroll">
          <table class="ratio-table">
            <thead>
              <tr>
                <th class="th-cat">{{ t("Category") }}</th>
                <th class="th-name">{{ t("Financial Ratio") }}</th>
                <th class="th-hist">2019A</th>
                <th class="th-hist">2020A</th>
                <th class="th-proj">2021P</th>
                <th class="th-proj">2022P</th>
                <th class="th-proj">2023P</th>
                <th class="th-eval">{{ t("Strategic Evaluation & Covenants") }}</th>
              </tr>
            </thead>
            <tbody>
              <!-- 1. Liquidity -->
              <tr class="row-section"><td colspan="8">{{ t("1. LIQUIDITY RATIOS (WORKING CAPITAL BUFFER)") }}</td></tr>
              <tr>
                <td class="td-cat">Liquidity</td>
                <td class="td-bold">{{ t("Current Ratio (x)") }}</td>
                <td class="td-num">0.73</td>
                <td class="td-num td-loss">0.56</td>
                <td class="td-num td-proj">1.41</td>
                <td class="td-num td-proj">1.70</td>
                <td class="td-num td-bold td-profit">1.97</td>
                <td class="td-desc">{{ t("Recovers above retail standard (1.2–1.5x); ends cash squeeze.") }}</td>
              </tr>
              <tr>
                <td class="td-cat">Liquidity</td>
                <td class="td-bold">{{ t("Quick Ratio (x)") }}</td>
                <td class="td-num">0.27</td>
                <td class="td-num td-loss">0.21</td>
                <td class="td-num td-proj">1.24</td>
                <td class="td-num td-proj">1.53</td>
                <td class="td-num td-bold td-profit">1.79</td>
                <td class="td-desc">{{ t("Acid-test buffer eliminates risk of trade supplier payment freezes.") }}</td>
              </tr>

              <!-- 2. Leverage & Solvency -->
              <tr class="row-section"><td colspan="8">{{ t("2. LEVERAGE & SOLVENCY RATIOS (CAPITAL STRUCTURE & COVENANTS)") }}</td></tr>
              <tr>
                <td class="td-cat">Leverage</td>
                <td class="td-bold">{{ t("Total Liab / Total Assets (%)") }}</td>
                <td class="td-num">86.1%</td>
                <td class="td-num td-loss">95.9%</td>
                <td class="td-num td-proj">81.5%</td>
                <td class="td-num td-proj">71.1%</td>
                <td class="td-num td-bold td-profit">63.8%</td>
                <td class="td-desc">{{ t("De-bulks balance sheet by 32 percentage points via lease rightsizing.") }}</td>
              </tr>
              <tr>
                <td class="td-cat">Leverage</td>
                <td class="td-bold">{{ t("Long-term Bank Debt / Equity (%)") }}</td>
                <td class="td-num">47.1%</td>
                <td class="td-num">0.0%</td>
                <td class="td-num td-proj">0.2%</td>
                <td class="td-num td-proj">0.1%</td>
                <td class="td-num td-bold td-profit">0.1%</td>
                <td class="td-desc td-profit">{{ t("This ratio uses long-term bank debt only. The loan tests refer to net debt, which is a different measure.") }}</td>
              </tr>
              <tr class="row-highlight">
                <td class="td-cat">Leverage</td>
                <td class="td-bold">{{ t("Times-Interest-Earned (TIE)") }}</td>
                <td class="td-num td-loss">-1.65x</td>
                <td class="td-num td-loss">-0.52x</td>
                <td class="td-num td-bold td-profit">4.89x</td>
                <td class="td-num td-bold td-profit">5.03x</td>
                <td class="td-num td-bold td-profit">5.34x</td>
                <td class="td-desc td-profit">{{ t("The model divides operating profit by net finance costs. The bank’s cash-based test may use different figures.") }}</td>
              </tr>

              <!-- 3. Operating Velocity -->
              <tr class="row-section"><td colspan="8">{{ t("3. OPERATING VELOCITY & ASSET EFFICIENCY RATIOS") }}</td></tr>
              <tr>
                <td class="td-cat">Activity</td>
                <td class="td-bold">{{ t("Inventory Turnover (x)") }}</td>
                <td class="td-num">5.94x</td>
                <td class="td-num">5.64x</td>
                <td class="td-num td-proj">7.14x</td>
                <td class="td-num td-proj">7.14x</td>
                <td class="td-num td-bold td-proj">7.14x</td>
                <td class="td-desc">{{ t("Turnover accelerates +27% due to compact fresh perishable velocity.") }}</td>
              </tr>
              <tr>
                <td class="td-cat">Activity</td>
                <td class="td-bold">{{ t("Fixed Assets Turnover (x)") }}</td>
                <td class="td-num">9.34x</td>
                <td class="td-num">8.54x</td>
                <td class="td-num td-proj">8.70x</td>
                <td class="td-num td-proj">8.95x</td>
                <td class="td-num td-proj">9.47x</td>
                <td class="td-desc">{{ t("Higher retail revenue density per m² of store floorplate.") }}</td>
              </tr>
              <tr>
                <td class="td-cat">Activity</td>
                <td class="td-bold">{{ t("Total Assets Turnover (x)") }}</td>
                <td class="td-num">2.27x</td>
                <td class="td-num">1.50x</td>
                <td class="td-num td-proj">1.29x</td>
                <td class="td-num td-proj">1.13x</td>
                <td class="td-num td-proj">1.01x</td>
                <td class="td-desc">{{ t("Normalizes as massive PSAK 73 right-of-use asset base is stabilized.") }}</td>
              </tr>
              <tr>
                <td class="td-cat">Activity</td>
                <td class="td-bold">{{ t("Accounts Receivable Turnover (x)") }}</td>
                <td class="td-num">39.33x</td>
                <td class="td-num">34.92x</td>
                <td class="td-num td-proj">14.29x</td>
                <td class="td-num td-proj">14.29x</td>
                <td class="td-num td-proj">14.29x</td>
                <td class="td-desc">{{ t("Reflects credit settlements with marketplace partners (Grab, Shopee).") }}</td>
              </tr>
              <tr>
                <td class="td-cat">Activity</td>
                <td class="td-bold">{{ t("Average Collection Period (days)") }}</td>
                <td class="td-num">9.3</td>
                <td class="td-num">10.5</td>
                <td class="td-num td-proj">25.6</td>
                <td class="td-num td-proj">25.5</td>
                <td class="td-num td-proj">25.6</td>
                <td class="td-desc">{{ t("Retail consumers pay instantly; marketplace clearing runs on 25-day cycles.") }}</td>
              </tr>

              <!-- 4. Profitability -->
              <tr class="row-section"><td colspan="8">{{ t("4. PROFITABILITY & SHAREHOLDER VALUE CREATION") }}</td></tr>
              <tr>
                <td class="td-cat">Profit</td>
                <td class="td-bold">{{ t("Gross Profit Margin (%)") }}</td>
                <td class="td-num">18.3%</td>
                <td class="td-num">19.4%</td>
                <td class="td-num td-bold td-profit">50.0%</td>
                <td class="td-num td-bold td-profit">50.0%</td>
                <td class="td-num td-bold td-profit">50.0%</td>
                <td class="td-desc td-profit">{{ t("Direct farm procurement + elimination of distributor markups.") }}</td>
              </tr>
              <tr>
                <td class="td-cat">Profit</td>
                <td class="td-bold">{{ t("Operating Profit Margin (%)") }}</td>
                <td class="td-num td-loss">-2.3%</td>
                <td class="td-num td-loss">-2.1%</td>
                <td class="td-num td-bold td-profit">19.0%</td>
                <td class="td-num td-bold td-profit">19.0%</td>
                <td class="td-num td-bold td-profit">19.0%</td>
                <td class="td-desc td-profit">{{ t("Decisive turnaround; halts 4 consecutive loss years (-Rp 3.53T).") }}</td>
              </tr>
              <tr>
                <td class="td-cat">Profit</td>
                <td class="td-bold">{{ t("Return on Assets (ROA %)") }}</td>
                <td class="td-num td-loss">-14.5%</td>
                <td class="td-num td-loss">-9.0%</td>
                <td class="td-num td-bold td-profit">15.0%</td>
                <td class="td-num td-bold td-profit">13.2%</td>
                <td class="td-num td-bold td-profit">11.7%</td>
                <td class="td-desc td-profit">{{ t("Surpasses grocery retail industry average (~4.5–6.0%).") }}</td>
              </tr>
              <tr class="row-total">
                <td class="td-cat">Profit</td>
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

      <!-- Right: BNI Loan Condition Compliance Ledger -->
      <div class="covenant-card">
        <div class="covenant-header">
          <span class="cov-card-tag">{{ t("SOLVENCY GOVERNANCE · AR2020 NOTE 15") }}</span>
          <h3 class="cov-card-title">{{ t("What MPPA’s banks check") }}</h3>
        </div>
        <div class="cov-body">
          <div class="cov-item">
            <div class="cov-icon">i</div>
            <div class="cov-text">
              <strong>{{ t("Debt compared with equity") }}</strong>
              <p>{{ t("Note 15 lists net debt compared with equity and with earnings before interest, tax, depreciation and amortization (EBITDA).") }}</p>
            </div>
          </div>

          <div class="cov-item">
            <div class="cov-icon">i</div>
            <div class="cov-text">
              <strong>{{ t("Cash available to pay interest") }}</strong>
              <p>{{ t("Note 15 lists an interest cash cover test. The report does not disclose its minimum or calculation rules.") }}</p>
            </div>
          </div>

          <div class="cov-item">
            <div class="cov-icon">i</div>
            <div class="cov-text">
              <strong>{{ t("Short-term assets compared with short-term bills") }}</strong>
              <p>{{ t("The current ratio measures whether short-term assets cover short-term bills. The report does not disclose the bank’s required minimum.") }}</p>
            </div>
          </div>

          <div class="cov-summary-box">
            <span class="cov-sum-tag">{{ t("STRATEGIC SOLVENCY TAKEAWAY") }}</span>
            <p>{{ t("MPPA had drawn the full Rp500B BNI working-capital loan at year-end 2020. The rollout plan still depends on repayment or renewal of existing loans.") }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer / Sources Bar -->
    <div class="ratios-footer-bar">
      <div class="footer-left">
        <strong>{{ t("Strategic Solvency Summary:") }}</strong>
        <span>{{ t("MPPA reported meeting its loan conditions or obtaining a waiver in 2020. Forecast ratios do not establish future compliance.") }}</span>
      </div>
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
  font-size: 1.3cqw;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.02em;
  line-height: 1.15;
  margin: 0 0 0.1cqw;
}

.slide-subtitle {
  font-size: 0.6cqw;
  color: #475569;
  line-height: 1.25;
  margin: 0;
}

.covenant-badge {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: #f0fdf4;
  border: 1px solid #86efac;
  border-radius: 4px;
  padding: 0.2cqw 0.6cqw;
  flex-shrink: 0;
}

.cov-tag {
  font-size: 0.46cqw;
  font-weight: 800;
  color: #16a34a;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.cov-val {
  font-size: 0.62cqw;
  font-weight: 800;
  color: #15803d;
}

/* 3-Metric Top Bar */
.ratio-kpi-bar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75cqw;
  margin-bottom: 0.4cqw;
}

.ratio-kpi-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 0.35cqw 0.75cqw;
  display: flex;
  flex-direction: column;
}

.ratio-kpi-tag {
  font-size: 0.5cqw;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 0.1cqw;
}

.tag-blue { color: #0284c7; }
.tag-green { color: #15803d; }
.tag-purple { color: #7c3aed; }

.ratio-kpi-val {
  font-size: 1.05cqw;
  font-weight: 900;
  color: #0f172a;
  line-height: 1.15;
}

.ratio-kpi-sub {
  font-size: 0.56cqw;
  color: #64748b;
  line-height: 1.2;
}

/* Master Grid */
.ratio-content-grid {
  display: grid;
  grid-template-columns: 1.45fr 1fr;
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

.ratio-table {
  min-height: 100%;
  width: 100%;
  border-collapse: collapse;
  font-size: 0.56cqw;
  line-height: 1.25;
}

.ratio-table th {
  background: #f1f5f9;
  color: #334155;
  font-weight: 800;
  padding: 0.28cqw 0.45cqw;
  text-align: right;
  border-bottom: 1.5px solid #cbd5e1;
  white-space: nowrap;
}

.ratio-table th.th-cat { text-align: left; width: 8%; display: none; }
.ratio-table th.th-name { text-align: left; width: 28%; }
.ratio-table th.th-eval { text-align: left; width: 34%; }

.ratio-table td {
  padding: 0.22cqw 0.45cqw;
  border-bottom: 1px solid #f1f5f9;
}

.td-cat { display: none; }
.td-bold { font-weight: 800; color: #0f172a; }
.td-num { text-align: right; font-variant-numeric: tabular-nums; }
.td-proj { color: #0369a1; }
.td-desc { font-size: 0.52cqw; color: #64748b; line-height: 1.2; }

.td-loss { color: #dc2626; font-weight: 700; }
.td-profit { color: #16a34a; font-weight: 800; }

.row-section td {
  background: #f1f5f9;
  font-weight: 800;
  color: #1e293b;
  font-size: 0.52cqw;
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

/* Right: Covenant Card */
.covenant-card {
  background: #ffffff;
  border: 1.5px solid #e2e8f0;
  border-radius: 6px;
  padding: 0.4cqw 0.75cqw;
  display: flex;
  flex-direction: column;
}

.covenant-header {
  border-bottom: 1px solid #f1f5f9;
  padding-bottom: 0.2cqw;
  margin-bottom: 0.3cqw;
}

.cov-card-tag {
  font-size: 0.48cqw;
  font-weight: 800;
  color: #df0036;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  display: block;
  margin-bottom: 0.08cqw;
}

.cov-card-title {
  font-size: 0.78cqw;
  font-weight: 800;
  color: #0f172a;
  margin: 0;
}

.cov-body {
  display: flex;
  flex-direction: column;
  gap: 0.35cqw;
  flex: 1;
}

.cov-item {
  display: flex;
  gap: 0.45cqw;
  align-items: flex-start;
  background: #f8fafc;
  border: 1px solid #f1f5f9;
  border-radius: 5px;
  padding: 0.3cqw 0.5cqw;
}

.cov-icon {
  width: 1.1cqw;
  height: 1.1cqw;
  border-radius: 50%;
  font-size: 0.62cqw;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 0.05cqw;
}

.icon-pass {
  background: #dcfce7;
  color: #15803d;
}

.cov-text strong {
  font-size: 0.62cqw;
  color: #0f172a;
  display: block;
}

.cov-text p {
  font-size: 0.54cqw;
  color: #475569;
  line-height: 1.25;
  margin: 0.08cqw 0 0;
}

.cov-summary-box {
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 5px;
  padding: 0.3cqw 0.5cqw;
  margin-top: auto;
}

.cov-sum-tag {
  font-size: 0.48cqw;
  font-weight: 800;
  color: #1d4ed8;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  display: block;
  margin-bottom: 0.05cqw;
}

.cov-summary-box p {
  font-size: 0.54cqw;
  color: #1e3a8a;
  line-height: 1.25;
  margin: 0;
}

/* Footer Bar */
.ratios-footer-bar {
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

.ratios-footer-bar strong {
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
