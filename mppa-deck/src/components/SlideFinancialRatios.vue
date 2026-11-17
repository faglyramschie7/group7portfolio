<template>
  <div class="ratios-slide-wrapper">
    <!-- Header -->
    <div class="deck-kicker fw-kicker-row">
      <div class="fw-kicker-lead">
        <span class="fw-badge fw-badge-who" style="background:#475569;">{{ language === 'id' ? '5W1H · KONTROL' : '5W1H · CONTROL' }}</span>
        <span class="fw-kicker-text">{{ t("Realistic turnaround case · Ratios synced to Slide 31 Pro Forma statements") }}</span>
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

    <!-- 3-Metric Executive Ratio Bar (Clickable) -->
    <div class="ratio-kpi-bar">
      <div class="ratio-kpi-card is-clickable" role="button" tabindex="0" @click="openRatioDetail('current_ratio')" @keydown.enter="openRatioDetail('current_ratio')">
        <span class="ratio-kpi-tag">{{ language === 'id' ? 'Rasio lancar' : 'Current ratio' }} <span class="kpi-hint">↗</span></span>
        <div class="ratio-kpi-val">0.56x → 1.11x</div>
        <div class="ratio-kpi-sub">{{ t("Recovers above 1.0x as Cash triples to Rp 941B; Quick Ratio lifts 0.21x → 0.71x.") }}</div>
      </div>
      <div class="ratio-kpi-card is-clickable" role="button" tabindex="0" @click="openRatioDetail('tie')" @keydown.enter="openRatioDetail('tie')">
        <span class="ratio-kpi-tag">{{ language === 'id' ? 'Cakupan bunga' : 'Interest coverage' }} <span class="kpi-hint">↗</span></span>
        <div class="ratio-kpi-val">−0.52x → +2.43x</div>
        <div class="ratio-kpi-sub">{{ t("EBIT (+Rp 563.5B) ÷ Lower PSAK 73 Finance Costs (Rp 231.4B) clears 2.0x in 2023P.") }}</div>
      </div>
      <div class="ratio-kpi-card is-clickable" role="button" tabindex="0" @click="openRatioDetail('operating_profit_margin')" @keydown.enter="openRatioDetail('operating_profit_margin')">
        <span class="ratio-kpi-tag">{{ language === 'id' ? 'Margin laba usaha' : 'Operating profit margin' }} <span class="kpi-hint">↗</span></span>
        <div class="ratio-kpi-val">−2.1% → +7.5%</div>
        <div class="ratio-kpi-sub">{{ t("Gross margin reaches 24.0%; ROA rebounds to +7.4% & ROE to +56.8%.") }}</div>
      </div>
    </div>

    <!-- Master 14-Ratio Grid -->
    <div class="ratio-content-grid">
      <!-- Left: Comprehensive 14 Ratios Table -->
      <div class="table-card">
        <div class="table-header">
          <span class="table-title">{{ language === 'id' ? '14 rasio keuangan (Klik baris mana saja untuk tabel rumus)' : '14 financial ratios (Click any row for exact math & sources)' }}</span>
          <span class="table-source">{{ language === 'id' ? 'Reconciled: Auditan 2019A–2020A vs Proforma 2021P–2023P' : 'Reconciled: Audited 2019A–2020A vs. Pro Forma 2021P–2023P' }}</span>
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
              <tr data-ratio="current_ratio" @click="openRatioDetail('current_ratio')" title="Click for exact Current Assets ÷ Current Liabilities table">
                <td class="td-bold"><span class="row-inspect-label"><span>{{ t("Current Ratio (x)") }}</span><span class="row-inspect-icon">↗</span></span></td>
                <td class="td-num">0.73</td>
                <td class="td-num td-loss">0.56</td>
                <td class="td-num td-proj">0.76</td>
                <td class="td-num td-proj">0.89</td>
                <td class="td-num td-bold td-profit">1.11</td>
                <td class="td-desc">{{ t("Recovers above 1.0x supermarket safety floor; ends supplier cash squeeze.") }}</td>
              </tr>
              <tr data-ratio="quick_ratio" @click="openRatioDetail('quick_ratio')" title="Click for exact Quick Ratio math table">
                <td class="td-bold"><span class="row-inspect-label"><span>{{ t("Quick Ratio (x)") }}</span><span class="row-inspect-icon">↗</span></span></td>
                <td class="td-num">0.27</td>
                <td class="td-num td-loss">0.21</td>
                <td class="td-num td-proj">0.41</td>
                <td class="td-num td-proj">0.51</td>
                <td class="td-num td-bold td-profit">0.71</td>
                <td class="td-desc">{{ t("More than triples instant liquidity (0.21x → 0.71x) as Cash grows to Rp 941B.") }}</td>
              </tr>

              <!-- 2. Leverage & Solvency -->
              <tr class="row-section"><td colspan="7">{{ t("2. LEVERAGE & SOLVENCY RATIOS (CAPITAL STRUCTURE & COVENANTS)") }}</td></tr>
              <tr data-ratio="debt_to_assets" @click="openRatioDetail('debt_to_assets')" title="Click for exact Total Liabilities ÷ Total Assets table">
                <td class="td-bold"><span class="row-inspect-label"><span>{{ t("Total Liab / Total Assets (%)") }}</span><span class="row-inspect-icon">↗</span></span></td>
                <td class="td-num">86.1%</td>
                <td class="td-num td-loss">95.9%</td>
                <td class="td-num td-proj">96.9%</td>
                <td class="td-num td-proj">94.1%</td>
                <td class="td-num td-bold td-profit">86.9%</td>
                <td class="td-desc">{{ t("Drops 9.0 pts back near 2019 norm via lease cuts and retained earnings.") }}</td>
              </tr>
              <tr data-ratio="debt_to_equity" @click="openRatioDetail('debt_to_equity')" title="Click for LT Bank Debt ÷ Equity breakdown">
                <td class="td-bold"><span class="row-inspect-label"><span>{{ t("Long-term Bank Debt / Equity (%)") }}</span><span class="row-inspect-icon">↗</span></span></td>
                <td class="td-num">47.1%</td>
                <td class="td-num">0.0%</td>
                <td class="td-num td-proj">0.0%</td>
                <td class="td-num td-proj">0.0%</td>
                <td class="td-num td-bold td-profit">0.0%</td>
                <td class="td-desc td-profit">{{ t("Held at 0.0% LT bank debt; 100% self-funded plan adds zero new bank loans.") }}</td>
              </tr>
              <tr class="row-highlight" data-ratio="tie" @click="openRatioDetail('tie')" title="Click for exact EBIT ÷ Net Finance Costs table">
                <td class="td-bold"><span class="row-inspect-label"><span>{{ t("Times-Interest-Earned (TIE)") }}</span><span class="row-inspect-icon">↗</span></span></td>
                <td class="td-num td-loss">-1.65x</td>
                <td class="td-num td-loss">-0.52x</td>
                <td class="td-num td-proj">0.69x</td>
                <td class="td-num td-proj">1.48x</td>
                <td class="td-num td-bold td-profit">2.43x</td>
                <td class="td-desc td-profit">{{ t("EBIT (+Rp 563.5B) ÷ lower PSAK 73 finance costs (Rp 231.4B) clears 2.0x in 2023P.") }}</td>
              </tr>

              <!-- 3. Operating Velocity -->
              <tr class="row-section"><td colspan="7">{{ t("3. OPERATING VELOCITY & ASSET EFFICIENCY RATIOS") }}</td></tr>
              <tr data-ratio="inv_turnover" @click="openRatioDetail('inv_turnover')" title="Click for COGS ÷ Inventories calculation table">
                <td class="td-bold"><span class="row-inspect-label"><span>{{ t("Inventory Turnover (x)") }}</span><span class="row-inspect-icon">↗</span></span></td>
                <td class="td-num">5.94x</td>
                <td class="td-num">5.64x</td>
                <td class="td-num td-proj">7.90x</td>
                <td class="td-num td-proj">7.75x</td>
                <td class="td-num td-bold td-proj">7.60x</td>
                <td class="td-desc">{{ t("Improves +35% (5.64x → 7.60x) by shifting from slow non-food to daily fresh goods.") }}</td>
              </tr>
              <tr data-ratio="fixed_asset_turnover" @click="openRatioDetail('fixed_asset_turnover')" title="Click for Revenues ÷ Net PP&E calculation table">
                <td class="td-bold"><span class="row-inspect-label"><span>{{ t("Fixed Assets Turnover (x)") }}</span><span class="row-inspect-icon">↗</span></span></td>
                <td class="td-num">9.34x</td>
                <td class="td-num">8.54x</td>
                <td class="td-num td-proj">8.70x</td>
                <td class="td-num td-proj">8.95x</td>
                <td class="td-num td-proj">9.47x</td>
                <td class="td-desc">{{ t("Higher sales density per Rupiah of store equipment (returns above 2019 level).") }}</td>
              </tr>
              <tr data-ratio="total_asset_turnover" @click="openRatioDetail('total_asset_turnover')" title="Click for Revenues ÷ Total Assets calculation table">
                <td class="td-bold"><span class="row-inspect-label"><span>{{ t("Total Assets Turnover (x)") }}</span><span class="row-inspect-icon">↗</span></span></td>
                <td class="td-num">2.27x</td>
                <td class="td-num">1.50x</td>
                <td class="td-num td-proj">2.01x</td>
                <td class="td-num td-proj">2.12x</td>
                <td class="td-num td-proj">2.16x</td>
                <td class="td-desc">{{ t("Rebounds +44% (1.50x → 2.16x) as bloated mall ROU lease assets shrink.") }}</td>
              </tr>
              <tr data-ratio="ar_turnover" @click="openRatioDetail('ar_turnover')" title="Click for Revenues ÷ AR calculation table">
                <td class="td-bold"><span class="row-inspect-label"><span>{{ t("Accounts Receivable Turnover (x)") }}</span><span class="row-inspect-icon">↗</span></span></td>
                <td class="td-num">39.33x</td>
                <td class="td-num">34.92x</td>
                <td class="td-num td-proj">28.57x</td>
                <td class="td-num td-proj">28.57x</td>
                <td class="td-num td-proj">28.57x</td>
                <td class="td-desc">{{ t("Fast collection combining instant checkout with GrabMart/Shopee payouts.") }}</td>
              </tr>
              <tr data-ratio="collection_period" @click="openRatioDetail('collection_period')" title="Click for 365 ÷ AR Turnover calculation table">
                <td class="td-bold"><span class="row-inspect-label"><span>{{ t("Average Collection Period (days)") }}</span><span class="row-inspect-icon">↗</span></span></td>
                <td class="td-num">9.3</td>
                <td class="td-num">10.5</td>
                <td class="td-num td-proj">12.8</td>
                <td class="td-num td-proj">12.8</td>
                <td class="td-num td-proj">12.8</td>
                <td class="td-desc">{{ t("Under 13 days average collection—cash lands fast before supplier bills come due.") }}</td>
              </tr>

              <!-- 4. Profitability -->
              <tr class="row-section"><td colspan="7">{{ t("4. PROFITABILITY & SHAREHOLDER VALUE CREATION") }}</td></tr>
              <tr data-ratio="gross_profit_margin" @click="openRatioDetail('gross_profit_margin')" title="Click for Gross Profit ÷ Revenues calculation table">
                <td class="td-bold"><span class="row-inspect-label"><span>{{ t("Gross Profit Margin (%)") }}</span><span class="row-inspect-icon">↗</span></span></td>
                <td class="td-num">18.3%</td>
                <td class="td-num">19.4%</td>
                <td class="td-num td-proj">21.0%</td>
                <td class="td-num td-proj">22.5%</td>
                <td class="td-num td-bold td-profit">24.0%</td>
                <td class="td-desc td-profit">{{ t("Gradual +5.2 pt lift via cold-chain spoilage cuts, Value Plus, & SmartClub exit.") }}</td>
              </tr>
              <tr data-ratio="operating_profit_margin" @click="openRatioDetail('operating_profit_margin')" title="Click for EBIT ÷ Revenues calculation table">
                <td class="td-bold"><span class="row-inspect-label"><span>{{ t("Operating Profit Margin (%)") }}</span><span class="row-inspect-icon">↗</span></span></td>
                <td class="td-num td-loss">-2.3%</td>
                <td class="td-num td-loss">-2.1%</td>
                <td class="td-num td-proj">2.5%</td>
                <td class="td-num td-proj">5.0%</td>
                <td class="td-num td-bold td-profit">7.5%</td>
                <td class="td-desc td-profit">{{ t("Gross margin gains paired with mall rent & store size OpEx cuts flip EBIT positive.") }}</td>
              </tr>
              <tr data-ratio="roa" @click="openRatioDetail('roa')" title="Click for Net Income ÷ Total Assets calculation table">
                <td class="td-bold"><span class="row-inspect-label"><span>{{ t("Return on Assets (ROA %)") }}</span><span class="row-inspect-icon">↗</span></span></td>
                <td class="td-num td-loss">-14.5%</td>
                <td class="td-num td-loss">-9.0%</td>
                <td class="td-num td-loss">-2.3%</td>
                <td class="td-num td-proj">2.7%</td>
                <td class="td-num td-bold td-profit">7.4%</td>
                <td class="td-desc td-profit">{{ t("Turns net positive (+2.7%) in 2022P and reaches +7.4% by 2023P.") }}</td>
              </tr>
              <tr class="row-total" data-ratio="roe" @click="openRatioDetail('roe')" title="Click for Net Income ÷ Stockholders' Equity calculation table">
                <td class="td-bold"><span class="row-inspect-label"><span>{{ t("Return on Equity (ROE %)") }}</span><span class="row-inspect-icon">↗</span></span></td>
                <td class="td-num td-loss">-104.1%</td>
                <td class="td-num td-loss">-219.4%</td>
                <td class="td-num td-loss">-72.1%</td>
                <td class="td-num td-proj">45.5%</td>
                <td class="td-num td-bold td-profit">56.8%</td>
                <td class="td-desc td-profit">{{ t("High Year 2–3 ROE rebuilds thin equity (Rp 185B → Rp 456B) with zero dilution.") }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>

    <!-- Interactive Slide-Over Sidebar Drawer for Every Ratio -->
    <dialog
      ref="ratioDrawer"
      class="matrix-detail fin-detail"
      aria-labelledby="ratio-detail-title"
      @click.self="closeRatioDetail"
    >
      <header class="matrix-detail-head" :style="{ borderTopColor: selectedRatio.borderColor || '#df0036' }">
        <div class="matrix-detail-head-main">
          <div class="matrix-meta-bar">
            <span class="matrix-kind-badge">{{ language === 'id' ? selectedRatio.tagId : selectedRatio.tag }}</span>
            <span class="matrix-status-pill" :class="selectedRatio.statusClass">{{ language === 'id' ? selectedRatio.statusPillId : selectedRatio.statusPill }}</span>
          </div>
          <h3 id="ratio-detail-title">{{ language === 'id' ? selectedRatio.titleId : selectedRatio.title }}</h3>
          <p class="matrix-detail-sub">{{ language === 'id' ? selectedRatio.subId : selectedRatio.sub }}</p>
        </div>
        <button
          type="button"
          class="matrix-detail-close"
          :aria-label="language === 'id' ? 'Tutup rincian' : 'Close details'"
          @click="closeRatioDetail"
          autofocus
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </header>

      <div ref="ratioContent" class="matrix-detail-scroll">
        <!-- 1. At a Glance -->
        <section class="matrix-detail-section">
          <div class="matrix-section-header">
            <span class="matrix-sec-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            </span>
            <h4>{{ language === 'id' ? 'Ringkasan 5 Tahun' : 'At a Glance (2019A–2023P)' }}</h4>
          </div>
          <div class="matrix-kpi-grid">
            <div v-for="(kpi, idx) in selectedRatio.kpis" :key="idx" class="matrix-kpi-card" :class="{ 'kpi-full': kpi.isHighlight }">
              <span class="matrix-kpi-label">{{ kpi.label }}</span>
              <div class="matrix-kpi-val-row">
                <span class="matrix-kpi-val" :class="{ 'kpi-loss': kpi.isLoss, 'kpi-profit': kpi.isProfit }">{{ kpi.val }}</span>
              </div>
              <span class="matrix-kpi-sub">{{ kpi.sub }}</span>
            </div>
          </div>
        </section>

        <!-- 2. Exact Math Year-by-Year Table -->
        <section class="matrix-detail-section">
          <div class="matrix-section-header">
            <span class="matrix-sec-icon" style="color:#df0036;">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="9" y1="4" x2="9" y2="20"/></svg>
            </span>
            <h4>{{ language === 'id' ? 'Rumus & Perhitungan Per Tahun (Dari Laporan Keuangan)' : 'Exact Formula & Year-by-Year Calculation (From Financial Statements)' }}</h4>
          </div>
          <div class="matrix-calc-card ratio-formula-box">
            <div><strong>{{ language === 'id' ? 'Rumus:' : 'Formula:' }}</strong> {{ language === 'id' ? selectedRatio.formulaTextId : selectedRatio.formulaText }}</div>
            <div style="margin-top:4px;color:#475569;"><strong>{{ language === 'id' ? 'Patokan Industri:' : 'Benchmark:' }}</strong> {{ language === 'id' ? selectedRatio.benchmarkId : selectedRatio.benchmark }}</div>
          </div>
          <div class="matrix-calc-card ratio-math-card">
            <table class="fin-year-table">
              <thead>
                <tr>
                  <th>{{ language === 'id' ? 'Periode' : 'Period' }}</th>
                  <th class="num">{{ language === 'id' ? 'Pembilang' : 'Numerator' }}</th>
                  <th class="num">{{ language === 'id' ? 'Penyebut' : 'Denominator' }}</th>
                  <th>{{ language === 'id' ? 'Perhitungan' : 'Exact Math' }}</th>
                  <th class="num">{{ language === 'id' ? 'Rasio' : 'Result' }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(r, idx) in selectedRatio.calcRows" :key="idx">
                  <td class="yr-col">{{ r.year }}</td>
                  <td class="num">{{ r.num }}</td>
                  <td class="num">{{ r.den }}</td>
                  <td class="formula-col">{{ r.expr }}</td>
                  <td class="num val-col">{{ r.res }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- 3. Plain-English Explanation -->
        <section class="matrix-detail-section">
          <div class="matrix-section-header">
            <span class="matrix-sec-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 21H3V3"/><path d="M7 14l4-4 4 4 6-6"/></svg>
            </span>
            <h4>{{ language === 'id' ? 'Arti Angka Ini & Alasan Perubahan' : 'What These Numbers Mean & Why They Improve' }}</h4>
          </div>
          <div class="matrix-card matrix-analysis-card">
            <p>{{ selectedRatio.meaning }}</p>
          </div>
        </section>
      </div>
    </dialog>

    <aside class="loan-note">
      <strong>{{ language === 'id' ? 'Pinjaman BNI · Catatan 15' : 'BNI loan · Note 15' }}</strong>
      <p>{{ language === 'id'
        ? 'MPPA telah menarik Rp500 miliar pada akhir 2020. Laporan 2020 menyebutkan bahwa persyaratan pinjaman dipenuhi atau pengecualian diperoleh. Proyeksi rasio belum membuktikan kepatuhan di masa depan.'
        : 'MPPA had drawn Rp500 billion by year-end 2020. It reported meeting its loan conditions or obtaining a waiver. Projected ratios do not establish future compliance.' }}</p>
    </aside>

    <div class="ratios-footer-bar">
      <div class="footer-right">
        <span class="cite-pill">{{ t("Synced to Slide 33 Income Statement & Balance Sheet · AR2020 Note 15 · Fred David Ch. 8") }} · {{ slideNumber }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { financialRatiosDetailData } from '../data/financialRatiosData.js';

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

const selectedRatioKey = ref('current_ratio');
const ratioDrawer = ref(null);
const ratioContent = ref(null);

const selectedRatio = computed(() => {
  return financialRatiosDetailData[selectedRatioKey.value] || financialRatiosDetailData.current_ratio;
});

function openRatioDetail(key) {
  if (financialRatiosDetailData[key]) {
    selectedRatioKey.value = key;
  }
  if (ratioDrawer.value && !ratioDrawer.value.open) {
    ratioDrawer.value.showModal();
    if (ratioContent.value) {
      ratioContent.value.scrollTop = 0;
    }
  }
}

function closeRatioDetail() {
  if (ratioDrawer.value && ratioDrawer.value.open) {
    ratioDrawer.value.close();
  }
}
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

.ratio-table th.th-name { text-align: left; width: 24%; }
.ratio-table th.th-hist, .ratio-table th.th-proj { width: 8.6%; }
.ratio-table th.th-eval { text-align: left; width: 33%; }

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

.ratio-kpi-card.is-clickable {
  cursor: pointer;
  transition: background-color 0.15s ease;
}
.ratio-kpi-card.is-clickable:hover {
  background: #fdf2f5;
}
.kpi-hint {
  color: #df0036;
  font-weight: 900;
  margin-left: 4px;
}
.row-inspect-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.35cqw;
}
.row-inspect-icon {
  color: #df0036;
  font-weight: 900;
  font-size: 0.85em;
  opacity: 0.72;
  flex-shrink: 0;
}
.ratio-table tbody tr:hover .row-inspect-icon {
  opacity: 1;
}
.ratio-formula-box {
  font-size: 12px;
  line-height: 1.4;
  margin-bottom: 8px;
}
.ratio-math-card {
  padding: 0;
  overflow: hidden;
}
.fin-year-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 11.5px;
}
.fin-year-table th {
  text-align: left;
  background: #f8fafc;
  color: #475569;
  font-weight: 800;
  font-size: 10.5px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 6px 8px;
  border-bottom: 1.5px solid #cbd5e1;
}
.fin-year-table th.num,
.fin-year-table td.num {
  text-align: right;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.fin-year-table td {
  padding: 6px 8px;
  border-bottom: 1px solid #f1f5f9;
  color: #334155;
  vertical-align: top;
}
.fin-year-table tr:last-child td {
  border-bottom: none;
}
.fin-year-table td.yr-col,
.fin-year-table td.val-col {
  font-weight: 800;
  color: #0f172a;
}
.fin-year-table td.formula-col {
  font-weight: 600;
  color: #1e293b;
}
</style>
