<template>
  <div class="financial-slide-wrapper">
    <!-- Header -->
    <div class="deck-kicker">{{ t("Financial feasibility · Stage 4 · Fred David Ch. 8 framework") }}</div>
    <div class="slide-header-row">
      <div class="title-block">
        <h2 class="slide-title">{{ t("3-Year Pro Forma Financial Statements & Strategic Financing") }}</h2>
        <p class="slide-subtitle">
          {{ t("Financial forecast (2021–2023) derived from Matahari.xlsx Part II: Halting 4 consecutive loss years (-Rp 3.53T) through Hyfresh margin lift, Hypermart rightsizing, and disciplined self-funding.") }}
        </p>
      </div>

      <!-- Tab Buttons -->
      <div class="tab-controls">
        <button 
          type="button" 
          class="tab-btn" 
          :class="{ 'is-active': activeTab === 'income' }"
          :aria-pressed="activeTab === 'income'"
          @click="activeTab = 'income'"
        >
          {{ t("Income Statement") }}
        </button>
        <button 
          type="button" 
          class="tab-btn" 
          :class="{ 'is-active': activeTab === 'balance' }"
          :aria-pressed="activeTab === 'balance'"
          @click="activeTab = 'balance'"
        >
          {{ t("Balance Sheet") }}
        </button>
        <button 
          type="button" 
          class="tab-btn" 
          :class="{ 'is-active': activeTab === 'epsebit' }"
          :aria-pressed="activeTab === 'epsebit'"
          @click="activeTab = 'epsebit'"
        >
          {{ t("EPS / EBIT Analysis") }}
        </button>
      </div>
    </div>

    <!-- 3-Metric Executive Top Bar -->
    <div class="fin-kpi-bar">
      <div class="fin-kpi-card">
        <span class="fin-kpi-tag">{{ t("REVENUE TRAJECTORY") }}</span>
        <div class="fin-kpi-val">Rp 6.75T → Rp 7.51T</div>
        <div class="fin-kpi-sub">{{ t("+11.4% Growth via 50 New Hyfresh Compact Stores & Dark Hubs") }}</div>
      </div>
      <div class="fin-kpi-card">
        <span class="fin-kpi-tag">{{ t("EBIT TURNAROUND") }}</span>
        <div class="fin-kpi-val">-Rp 140B → +Rp 1,428B</div>
        <div class="fin-kpi-sub">{{ t("Halts 4-Year Loss; Gross Margin Expands from 19.4% to 50.0%") }}</div>
      </div>
      <div class="fin-kpi-card">
        <span class="fin-kpi-tag">{{ t("STRATEGIC FINANCING") }}</span>
        <div class="fin-kpi-val">{{ t("Rp 0 New Bank Debt") }}</div>
        <div class="fin-kpi-sub">{{ t("Rp 450B CapEx 100% Self-Funded; Preserves BNI Covenants & Zero EPS Dilution") }}</div>
      </div>
    </div>

    <!-- Tab 1: Pro Forma Income Statement -->
    <div v-if="activeTab === 'income'" class="fin-content-view">
      <div class="table-card">
        <div class="table-header">
          <span class="table-title">{{ t("Pro Forma Income Statement (2019A–2023P) · In Millions of Rupiah") }}</span>
          <span class="table-source">{{ t("Source: Matahari.xlsx Sheet 'Projected Statements' & Case 23 Exhibit 2") }}</span>
        </div>
        <div class="table-scroll">
          <table class="fin-table">
            <thead>
              <tr>
                <th class="th-item">{{ t("Line Item") }}</th>
                <th class="th-hist">2019A</th>
                <th class="th-hist">2020A</th>
                <th class="th-proj">2021P</th>
                <th class="th-proj">2022P</th>
                <th class="th-proj">2023P</th>
                <th class="th-note">{{ t("Strategic Rationale & Drivers") }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="td-bold">{{ t("Revenues (Sales)") }}</td>
                <td class="td-num">8,654,646</td>
                <td class="td-num">6,746,594</td>
                <td class="td-num td-proj">6,881,526</td>
                <td class="td-num td-proj">7,087,972</td>
                <td class="td-num td-proj td-highlight">7,513,250</td>
                <td class="td-desc">{{ t("+2% '21, +3% '22, +6% '23 driven by 50 compact Hyfresh stores") }}</td>
              </tr>
              <tr>
                <td>{{ t("Cost of Goods Sold (COGS)") }}</td>
                <td class="td-num">7,074,249</td>
                <td class="td-num">5,439,936</td>
                <td class="td-num td-proj">3,440,763</td>
                <td class="td-num td-proj">3,543,986</td>
                <td class="td-num td-proj">3,756,625</td>
                <td class="td-desc">{{ t("Stabilized at 50% through direct farm procurement & exit from low-margin wholesale") }}</td>
              </tr>
              <tr class="row-subtotal">
                <td class="td-bold">{{ t("Gross Profit") }}</td>
                <td class="td-num td-bold">1,580,397</td>
                <td class="td-num td-bold">1,306,658</td>
                <td class="td-num td-bold td-proj">3,440,763</td>
                <td class="td-num td-bold td-proj">3,543,986</td>
                <td class="td-num td-bold td-proj">3,756,625</td>
                <td class="td-desc td-bold">{{ t("Gross margin recovers from 19.4% (2020) to 50.0% (2021–2023)") }}</td>
              </tr>
              <tr>
                <td>{{ t("Operating Expenses (OpEx)") }}</td>
                <td class="td-num">1,776,502</td>
                <td class="td-num">1,446,926</td>
                <td class="td-num td-proj">2,133,273</td>
                <td class="td-num td-proj">2,197,271</td>
                <td class="td-num td-proj">2,329,108</td>
                <td class="td-desc">{{ t("31% of revenue; Hypermart rightsizing cuts Rp 180B lease costs") }}</td>
              </tr>
              <tr class="row-highlight">
                <td class="td-bold">{{ t("EBIT (Operating Income)") }}</td>
                <td class="td-num td-loss">-196,105</td>
                <td class="td-num td-loss">-140,268</td>
                <td class="td-num td-bold td-profit">1,307,490</td>
                <td class="td-num td-bold td-profit">1,346,715</td>
                <td class="td-num td-bold td-profit">1,427,517</td>
                <td class="td-desc td-profit">{{ t("Operating turnaround achieved in Year 1; reverses 4 years of operating losses") }}</td>
              </tr>
              <tr>
                <td>{{ t("Net Finance Costs (Interest)") }}</td>
                <td class="td-num">118,496</td>
                <td class="td-num">267,419</td>
                <td class="td-num td-proj">267,519</td>
                <td class="td-num td-proj">267,516</td>
                <td class="td-num td-proj">267,513</td>
                <td class="td-desc">{{ t("Preserved without debt surge; Rp 0 new bank debt required") }}</td>
              </tr>
              <tr>
                <td class="td-bold">{{ t("EBT (Pretax Income)") }}</td>
                <td class="td-num td-loss">-314,601</td>
                <td class="td-num td-loss">-407,687</td>
                <td class="td-num td-bold td-proj">1,039,971</td>
                <td class="td-num td-bold td-proj">1,079,199</td>
                <td class="td-num td-bold td-proj">1,160,004</td>
                <td class="td-desc">{{ t("Swings to +Rp 1.04T pre-tax profit in 2021") }}</td>
              </tr>
              <tr>
                <td>{{ t("Tax Expense") }}</td>
                <td class="td-num">238,073</td>
                <td class="td-num">-2,380</td>
                <td class="td-num td-proj">239,193</td>
                <td class="td-num td-proj">248,216</td>
                <td class="td-num td-proj">290,001</td>
                <td class="td-desc">{{ t("Corporate tax rate applied: 23% in 2021–2022, 25% in 2023") }}</td>
              </tr>
              <tr class="row-total">
                <td class="td-bold">{{ t("Net Income (PAT)") }}</td>
                <td class="td-num td-loss">-552,674</td>
                <td class="td-num td-loss">-405,307</td>
                <td class="td-num td-bold td-profit">800,778</td>
                <td class="td-num td-bold td-profit">830,983</td>
                <td class="td-num td-bold td-profit">870,003</td>
                <td class="td-desc td-profit">{{ t("Cumulative net profit of Rp 2.50T over 3 years; restores equity base") }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Tab 2: Pro Forma Balance Sheet -->
    <div v-else-if="activeTab === 'balance'" class="fin-content-view">
      <div class="table-card">
        <div class="table-header">
          <span class="table-title">{{ t("Pro Forma Balance Sheet (2019A–2023P) · In Millions of Rupiah") }}</span>
          <span class="table-source">{{ t("Source: Matahari.xlsx Sheet 'Projected Statements' & Case 23 Exhibit 3") }}</span>
        </div>
        <div class="table-scroll">
          <table class="fin-table">
            <thead>
              <tr>
                <th class="th-item">{{ t("Balance Sheet Line Item") }}</th>
                <th class="th-hist">2019A</th>
                <th class="th-hist">2020A</th>
                <th class="th-proj">2021P</th>
                <th class="th-proj">2022P</th>
                <th class="th-proj">2023P</th>
                <th class="th-note">{{ t("Solvency & Working Capital Impact") }}</th>
              </tr>
            </thead>
            <tbody>
              <tr class="row-section"><td colspan="7">{{ t("ASSETS") }}</td></tr>
              <tr>
                <td>{{ t("Cash & Short-Term Investments") }}</td>
                <td class="td-num">304,295</td>
                <td class="td-num">299,805</td>
                <td class="td-num td-proj">481,707</td>
                <td class="td-num td-proj">496,158</td>
                <td class="td-num td-proj">525,928</td>
                <td class="td-desc">{{ t("Strengthened by +Rp 120B non-core asset sales & negative cash cycle") }}</td>
              </tr>
              <tr>
                <td>{{ t("Accounts Receivable") }}</td>
                <td class="td-num">220,079</td>
                <td class="td-num">193,210</td>
                <td class="td-num td-proj">481,707</td>
                <td class="td-num td-proj">496,158</td>
                <td class="td-num td-proj">525,928</td>
                <td class="td-desc">{{ t("7% of revenue; predominantly instant consumer cash & digital e-wallets") }}</td>
              </tr>
              <tr>
                <td>{{ t("Inventories") }}</td>
                <td class="td-num">1,191,567</td>
                <td class="td-num">964,503</td>
                <td class="td-num td-proj">481,707</td>
                <td class="td-num td-proj">496,158</td>
                <td class="td-num td-proj">525,928</td>
                <td class="td-desc">{{ t("Lean inventory model: turnover accelerates from 5.6x to 7.1x via compact fresh format") }}</td>
              </tr>
              <tr>
                <td>{{ t("Other Current Assets") }}</td>
                <td class="td-num">188,106</td>
                <td class="td-num">77,748</td>
                <td class="td-num td-proj">1,238,675</td>
                <td class="td-num td-proj">1,275,835</td>
                <td class="td-num td-proj">1,352,385</td>
                <td class="td-desc">{{ t("18% of revenue") }}</td>
              </tr>
              <tr class="row-subtotal">
                <td class="td-bold">{{ t("Total Current Assets") }}</td>
                <td class="td-num td-bold">1,904,047</td>
                <td class="td-num td-bold">1,535,266</td>
                <td class="td-num td-bold td-proj">2,683,796</td>
                <td class="td-num td-bold td-proj">2,764,309</td>
                <td class="td-num td-bold td-proj">2,930,169</td>
                <td class="td-desc td-bold">{{ t("Current assets expand +74.8% by 2021, restoring liquidity buffer") }}</td>
              </tr>
              <tr>
                <td>{{ t("Net Property, Plant & Equipment") }}</td>
                <td class="td-num">926,287</td>
                <td class="td-num">789,871</td>
                <td class="td-num td-proj">791,121</td>
                <td class="td-num td-proj">792,371</td>
                <td class="td-num td-proj">793,621</td>
                <td class="td-desc">{{ t("Net PP&E additions reflect compact fit-outs net of hypermarket downsizings") }}</td>
              </tr>
              <tr>
                <td>{{ t("Other Long-Term Assets & Leases") }}</td>
                <td class="td-num">990,475</td>
                <td class="td-num">2,185,374</td>
                <td class="td-num td-proj">550,522</td>
                <td class="td-num td-proj">567,038</td>
                <td class="td-num td-proj">601,060</td>
                <td class="td-desc">{{ t("PSAK 73 lease reduction achieved by rightsizing 45 hypermarket stores") }}</td>
              </tr>
              <tr class="row-total">
                <td class="td-bold">{{ t("Total Assets") }}</td>
                <td class="td-num td-bold">3,820,809</td>
                <td class="td-num td-bold">4,510,511</td>
                <td class="td-num td-bold td-proj">4,025,439</td>
                <td class="td-num td-bold td-proj">4,123,718</td>
                <td class="td-num td-bold td-proj">4,324,850</td>
                <td class="td-desc td-bold">{{ t("Balance sheet de-bulked from excess mall liabilities") }}</td>
              </tr>
              <tr class="row-section"><td colspan="7">{{ t("LIABILITIES & STOCKHOLDERS' EQUITY") }}</td></tr>
              <tr>
                <td>{{ t("Total Current Liabilities (AP & Short-Term)") }}</td>
                <td class="td-num">2,618,390</td>
                <td class="td-num">2,763,099</td>
                <td class="td-num td-proj">2,821,426</td>
                <td class="td-num td-proj">2,906,069</td>
                <td class="td-num td-proj">3,080,433</td>
                <td class="td-desc">{{ t("Supplier trade payables maintained smoothly without overdue disputes") }}</td>
              </tr>
              <tr>
                <td>{{ t("Long-Term Bank Debt") }}</td>
                <td class="td-num">250,000</td>
                <td class="td-num">0</td>
                <td class="td-num td-proj">2,000</td>
                <td class="td-num td-proj">2,000</td>
                <td class="td-num td-proj">2,000</td>
                <td class="td-desc">{{ t("Minimal external borrowing; preserves BNI credit line for seasonal safety") }}</td>
              </tr>
              <tr class="row-highlight">
                <td class="td-bold">{{ t("Total Stockholders' Equity") }}</td>
                <td class="td-num td-loss">530,681</td>
                <td class="td-num td-loss">184,734</td>
                <td class="td-num td-bold td-profit">1,202,013</td>
                <td class="td-num td-bold td-profit">2,033,000</td>
                <td class="td-num td-bold td-profit">2,903,003</td>
                <td class="td-desc td-profit">{{ t("Equity surges from Rp 185B back to Rp 2.90T via retained operating profits") }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Tab 3: EPS/EBIT Financing Analysis -->
    <div v-else-if="activeTab === 'epsebit'" class="fin-content-view">
      <div class="epsebit-grid">
        <!-- Left Table: 3 Financing Scenarios -->
        <div class="table-card">
          <div class="table-header">
            <span class="table-title">{{ t("EPS / EBIT Strategic Financing Matrix (Matahari.xlsx Sheet 'EPS_EBIT')") }}</span>
            <span class="table-source">{{ t("Capital Needed: Rp 5,000M (Rp 5.0B) · Tax Rate: 23% · Interest Rate: 5.0%") }}</span>
          </div>
          <table class="fin-table">
            <thead>
              <tr>
                <th>{{ t("Financing Plan") }}</th>
                <th>{{ t("Pessimistic EBIT") }}<br><small>(Rp 10,000M)</small></th>
                <th>{{ t("Realistic EBIT") }}<br><small>(Rp 15,000M)</small></th>
                <th>{{ t("Optimistic EBIT") }}<br><small>(Rp 18,000M)</small></th>
                <th>{{ t("Strategic Assessment") }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="td-bold">{{ t("Plan A: 100% Stock") }}<br><small>Issue 1.96M Shares</small></td>
                <td class="td-num">Rp 7,700M<br><small>EPS: Rp 1.71</small></td>
                <td class="td-num">Rp 11,550M<br><small>EPS: Rp 2.56</small></td>
                <td class="td-num">Rp 13,860M<br><small>EPS: Rp 3.07</small></td>
                <td class="td-desc">{{ t("Dilutes existing shareholders; depressed P/E makes share issuance unattractive") }}</td>
              </tr>
              <tr>
                <td class="td-bold">{{ t("Plan B: 100% Debt") }}<br><small>Rp 5,000M Debt @ 5%</small></td>
                <td class="td-num">Rp 7,508M<br><small>EPS: Rp 2.94</small></td>
                <td class="td-num">Rp 11,358M<br><small>EPS: Rp 4.45</small></td>
                <td class="td-num">Rp 13,668M<br><small>EPS: Rp 5.36</small></td>
                <td class="td-desc">{{ t("Higher EPS, but introduces Rp 250M interest burden & covenant breach risk") }}</td>
              </tr>
              <tr class="row-winner">
                <td class="td-bold td-winner">
                  {{ t("★ RECOMMENDED:") }}<br>
                  <strong>{{ t("Internal Self-Funding") }}</strong>
                </td>
                <td class="td-num td-bold td-winner">
                  Rp 7,700M<br><small>EPS: Rp 3.02</small>
                </td>
                <td class="td-num td-bold td-winner">
                  Rp 11,550M<br><small>EPS: Rp 4.53</small>
                </td>
                <td class="td-num td-bold td-winner">
                  Rp 13,860M<br><small>EPS: Rp 5.44</small>
                </td>
                <td class="td-desc td-bold td-winner">
                  {{ t("BEST OF BOTH WORLDS: Zero shareholder dilution, Zero debt interest, Preserves Rp 400B BNI covenant completely") }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Right Card: Why Self-Funding Wins -->
        <div class="rationale-card">
          <div class="rationale-header">
            <span class="rat-tag">{{ t("CAPITAL ALLOCATION DEFENSE") }}</span>
            <div class="rat-title">{{ t("Why Turnaround Strategy Rejects Both Debt & Equity") }}</div>
          </div>
          <div class="rat-body">
            <div class="rat-item">
              <span class="rat-bullet">1</span>
              <div>
                <strong>{{ t("Averting Equity Dilution:") }}</strong>
                <p>{{ t("MPPA stock crashed from Rp 2,550 peak during 2020. Issuing equity at depressed valuations severely dilutes loyal shareholders and Lippo ownership.") }}</p>
              </div>
            </div>
            <div class="rat-item">
              <span class="rat-bullet">2</span>
              <div>
                <strong>{{ t("Protecting BNI Debt Covenants:") }}</strong>
                <p>{{ t("MPPA entered 2021 with negative EBITDA and strict bank covenants. Adding new bank debt risks covenant default; keeping bank debt at Rp 0 secures the business.") }}</p>
              </div>
            </div>
            <div class="rat-item">
              <span class="rat-bullet">3</span>
              <div>
                <strong>{{ t("The Rp 450B Self-Funding Engine:") }}</strong>
                <p>{{ t("By liquidating non-core SmartClub/FMX (+Rp 120B) and optimizing inventory (+Rp 150B), MPPA self-funds the 50-store Hyfresh rollout without a single rupiah of external capital.") }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Footer Single Thread Bar -->
    <div class="fin-footer-bar">
      <div>
        <strong>{{ t("Turnaround Single Thread:") }}</strong>
        <span>{{ t("Rp 450B CapEx self-funded → 50 Hyfresh stores generate Rp 1.5T fresh sales → Reverses -Rp 140B operating loss to +Rp 1.43T EBIT by 2023 → Equity restored to Rp 2.90T.") }}</span>
      </div>
      <div>
        <span class="cite-pill">{{ t("Excel Part II: Projected Statements, EPS_EBIT, Financial Statements") }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  language: {
    type: String,
    default: 'id'
  },
  t: {
    type: Function,
    default: (str) => str
  }
});

const activeTab = ref('income');
</script>

<style scoped>
.financial-slide-wrapper {
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
.financial-slide-wrapper::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0.65cqw;
  background: #df0036;
}

.financial-slide-wrapper::after {
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
  font-size: 0.86cqw;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #df0036;
  margin-bottom: 0.1cqw;
}

.slide-header-row {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 0.85cqw;
  gap: 1cqw;
}

.title-block {
  flex: 1;
  min-width: 0;
  max-width: 72cqw; /* Guarantees no collision with MPPA logo */
}

.slide-title {
  font-size: 2cqw;
  font-family: inherit;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.02em;
  line-height: 1.15;
  margin: 0 0 0.1cqw;
}

.slide-subtitle {
  font-size: 0.86cqw;
  color: #475569;
  line-height: 1.25;
  margin: 0;
}

/* Tabs */
.tab-controls {
  display: flex;
  gap: 0.3cqw;
  flex-shrink: 0;
}
.tab-btn {
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  color: #475569;
  font-size: 0.80cqw;
  font-weight: 700;
  padding: 0.35cqw 0.75cqw;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.15s ease;
}
.tab-btn:hover {
  background: #e2e8f0;
  color: #0f172a;
}
.tab-btn.is-active {
  background: #0f172a;
  color: #ffffff;
  border-color: #0f172a;
}

/* 3-Metric Top Bar */
.fin-kpi-bar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 0.9cqw;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
}
.fin-kpi-card {
  min-width: 0;
  padding: 0.65cqw 0.85cqw;
  display: flex;
  flex-direction: column;
}
.fin-kpi-card + .fin-kpi-card {
  border-inline-start: 1px solid #e2e8f0;
}
.fin-kpi-tag {
  color: #475569;
  font-size: 0.69cqw;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 0.1cqw;
}

.fin-kpi-val {
  font-size: 1.45cqw;
  font-weight: 900;
  color: #0f172a;
  line-height: 1.15;
}
.fin-kpi-sub {
  font-size: 0.77cqw;
  color: #64748b;
  line-height: 1.2;
}

/* Content View */
.fin-content-view {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
}

.table-card {
  background: #ffffff;
  border: 1.5px solid #e2e8f0;
  border-radius: 6px;
  min-height: 0;
  min-width: 0;
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
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.2cqw 0.6cqw;
}
.table-title {
  font-size: 0.86cqw;
  font-weight: 800;
  color: #0f172a;
}
.table-source {
  font-size: 0.75cqw;
  color: #64748b;
}

.table-scroll {
  min-height: 0;
  overflow: auto;
}

.fin-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.83cqw;
  line-height: 1.25;
}
.fin-table th {
  background: #f1f5f9;
  color: #334155;
  font-weight: 800;
  padding: 0.45cqw 0.55cqw;
  text-align: right;
  border-bottom: 1.5px solid #cbd5e1;
  white-space: nowrap;
}
.fin-table th.th-item { text-align: left; }
.fin-table th.th-note { text-align: left; width: 32%; }
.fin-table td {
  padding: 0.40cqw 0.55cqw;
  border-bottom: 1px solid #f1f5f9;
}
.td-num { text-align: right; font-variant-numeric: tabular-nums; }
.td-bold { font-weight: 800; color: #0f172a; }
.td-desc { font-size: 0.77cqw; color: #64748b; }

.td-proj { color: #334155; }
.td-highlight { font-weight: 800; color: #0f172a; }
.td-loss { color: #dc2626; font-weight: 700; }
.td-profit { color: #16a34a; font-weight: 800; }

.row-subtotal td {
  background: #f8fafc;
  border-top: 1px solid #cbd5e1;
  border-bottom: 1px solid #cbd5e1;
}
.row-highlight td {
  background: #f0fdf4;
  border-top: 1.5px solid #86efac;
  border-bottom: 1.5px solid #86efac;
}
.row-total td {
  background: #ecfdf5;
  border-top: 2px solid #059669;
  border-bottom: 2px solid #059669;
}
.row-section td {
  background: #f1f5f9;
  font-weight: 800;
  color: #1e293b;
  font-size: 0.77cqw;
  letter-spacing: 0.05em;
  padding: 0.2cqw 0.55cqw;
}

/* Tab 3: EPS/EBIT Grid */
.epsebit-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.75fr) minmax(0, 1fr);
  gap: 1cqw;
  align-items: start;
  min-height: 0;
  overflow: auto;
}
.epsebit-grid .fin-table th { white-space: normal; }
.row-winner td {
  background: #f0fdf4;
  border-top: 2px solid #16a34a;
  border-bottom: 2px solid #16a34a;
}
.td-winner { color: #15803d !important; }

.rationale-card {
  background: #ffffff;
  border: 1.5px solid #e2e8f0;
  border-radius: 6px;
  padding: 0.8cqw 0.9cqw;
  display: flex;
  flex-direction: column;
}
.rationale-header {
  border-bottom: 1px solid #f1f5f9;
  padding-bottom: 0.3cqw;
  margin-bottom: 0.35cqw;
}
.rat-tag {
  font-size: 0.69cqw;
  font-weight: 800;
  color: #df0036;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.rat-title {
  font-size: 1.13cqw;
  font-weight: 800;
  color: #0f172a;
}
.rat-body {
  display: flex;
  flex-direction: column;
  gap: 0.7cqw;
}
.rat-item {
  display: flex;
  gap: 0.5cqw;
  align-items: flex-start;
}
.rat-bullet {
  width: 1.2cqw;
  height: 1.2cqw;
  border-radius: 50%;
  background: #f1f5f9;
  color: #0f172a;
  font-size: 0.83cqw;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 0.05cqw;
}
.rat-item div strong {
  font-size: 0.91cqw;
  color: #0f172a;
  display: block;
}
.rat-item div p {
  font-size: 0.80cqw;
  color: #475569;
  line-height: 1.3;
  margin: 0.1cqw 0 0;
}

/* Footer Bar */
.fin-footer-bar {
  margin-top: 0.7cqw;
  gap: 0.65cqw;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 0.25cqw 0.75cqw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.80cqw;
  color: #475569;
  min-height: 2cqw;
}
.fin-footer-bar strong {
  color: #0f172a;
}
.cite-pill {
  font-size: 0.69cqw;
  font-weight: 700;
  color: #64748b;
  background: #e2e8f0;
  padding: 0.08cqw 0.35cqw;
  border-radius: 3px;
  white-space: nowrap;
}
</style>
