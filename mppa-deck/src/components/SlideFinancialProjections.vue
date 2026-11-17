<template>
  <div class="financial-slide-wrapper">
    <!-- Header -->
    <div class="deck-kicker fw-kicker-row">
      <div class="fw-kicker-lead">
        <span class="fw-badge fw-badge-how" style="background:#047857;">{{ language === 'id' ? '5W1H · KEUANGAN' : '5W1H · HOW MUCH' }}</span>
        <span class="fw-kicker-text">{{ t("Financial feasibility · Stage 4 · Fred David Ch. 8 framework") }}</span>
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
      <div class="title-block">
        <h2 class="slide-title">{{ t("3-Year Pro Forma Financial Statements & Strategic Financing") }}</h2>
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
      <!-- Card 1: Revenue Trajectory -->
      <div 
        class="fin-kpi-card is-clickable"
        role="button"
        tabindex="0"
        :aria-label="language === 'id' ? 'Lihat rincian pertumbuhan pendapatan' : 'View revenue growth details'"
        @click="openDetail('revenue')"
        @keydown.enter="openDetail('revenue')"
      >
        <div class="kpi-card-top">
          <span class="fin-kpi-tag">{{ t("REVENUE TRAJECTORY") }}</span>
          <div class="kpi-top-badges">
            <span class="kpi-badge badge-brand">{{ t("+11.4% Net Growth") }}</span>
            <span class="kpi-hint-pill">🔍 {{ language === 'id' ? 'Rincian' : 'Details' }} ↗</span>
          </div>
        </div>
        <div class="fin-kpi-val">
          <span class="kpi-from">Rp 6.75T</span>
          <span class="kpi-arrow">→</span>
          <span class="kpi-to">Rp 7.51T</span>
        </div>
        <div class="kpi-driver-tags">
          <span class="driver-tag">{{ t("50 Hyfresh Stores") }}</span>
          <span class="driver-tag">{{ t("45 Online Order Centers") }}</span>
        </div>
      </div>

      <!-- Card 2: EBIT Turnaround -->
      <div 
        class="fin-kpi-card is-clickable"
        role="button"
        tabindex="0"
        :aria-label="language === 'id' ? 'Lihat rincian pembalikan EBIT' : 'View EBIT turnaround details'"
        @click="openDetail('ebit')"
        @keydown.enter="openDetail('ebit')"
      >
        <div class="kpi-card-top">
          <span class="fin-kpi-tag">{{ t("EBIT TURNAROUND") }}</span>
          <div class="kpi-top-badges">
            <span class="kpi-badge badge-profit">{{ t("+Rp 704B Swing") }}</span>
            <span class="kpi-hint-pill">🔍 {{ language === 'id' ? 'Rincian' : 'Details' }} ↗</span>
          </div>
        </div>
        <div class="fin-kpi-val">
          <span class="kpi-loss">-Rp 140B</span>
          <span class="kpi-arrow">→</span>
          <span class="kpi-profit">+Rp 563B</span>
        </div>
        <div class="kpi-driver-tags">
          <span class="driver-tag">{{ t("Cold-Chain & Private Label") }}</span>
          <span class="driver-tag">{{ t("Rent & Store Size Cuts") }}</span>
        </div>
      </div>

      <!-- Card 3: Strategic Financing -->
      <div 
        class="fin-kpi-card is-clickable"
        role="button"
        tabindex="0"
        :aria-label="language === 'id' ? 'Lihat rincian pendanaan strategis' : 'View strategic financing details'"
        @click="openDetail('debt')"
        @keydown.enter="openDetail('debt')"
      >
        <div class="kpi-card-top">
          <span class="fin-kpi-tag">{{ t("STRATEGIC FINANCING") }}</span>
          <div class="kpi-top-badges">
            <span class="kpi-badge badge-brand">{{ t("100% Self-Funded") }}</span>
            <span class="kpi-hint-pill">🔍 {{ language === 'id' ? 'Rincian' : 'Details' }} ↗</span>
          </div>
        </div>
        <div class="fin-kpi-val">
          <span class="kpi-to">{{ t("Zero New Bank Debt") }}</span>
        </div>
        <div class="kpi-driver-tags">
          <span class="driver-tag">{{ t("Asset Sales (+Rp120B)") }}</span>
          <span class="driver-tag">{{ t("Lease Savings (+Rp180B)") }}</span>
        </div>
      </div>
    </div>

    <!-- Tab 1: Pro Forma Income Statement -->
    <div v-if="activeTab === 'income'" class="fin-content-view">
      <div class="table-card">
        <div class="table-header">
          <span class="table-title">{{ t("Pro Forma Income Statement (2019A–2023P) · In Millions of Rupiah") }}</span>
          <span class="table-source">{{ t("Source: MPPA AR2020 Audited Statements & 2019–2020 Anchored Turnaround Model") }} · <em>{{ language === 'id' ? 'Klik baris mana saja untuk sumber & tabel' : 'Click any row for sources & math table' }}</em></span>
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
                <th class="th-note">{{ t("Strategic Rationale & Operational Drivers") }}</th>
              </tr>
            </thead>
            <tbody>
              <tr class="clickable-row" @click="openDetail('revenue')" title="Click for detailed mathematical derivation">
                <td class="td-bold"><span class="row-inspect-label"><span>{{ t("Revenues (Sales)") }}</span><span class="row-inspect-icon" aria-hidden="true">↗</span></span></td>
                <td class="td-num">8,654,646</td>
                <td class="td-num">6,746,594</td>
                <td class="td-num td-proj">6,881,526</td>
                <td class="td-num td-proj">7,087,972</td>
                <td class="td-num td-proj td-highlight">7,513,250</td>
                <td class="td-desc">{{ t("+2% ('21), +3% ('22), +6% ('23): Net growth reflects opening 50 compact Hyfresh stores (+Rp750B) while reducing store size 45 hypermarkets and closing SmartClub (-Rp500B low-margin bulk sales).") }}</td>
              </tr>
              <tr class="clickable-row" @click="openDetail('cogs')" title="Click for COGS breakdown and 2019–2020 baseline">
                <td><span class="row-inspect-label"><span>{{ t("Cost of Goods Sold (COGS)") }}</span><span class="row-inspect-icon" aria-hidden="true">↗</span></span></td>
                <td class="td-num">7,074,249</td>
                <td class="td-num">5,439,936</td>
                <td class="td-num td-proj">5,436,406</td>
                <td class="td-num td-proj">5,493,178</td>
                <td class="td-num td-proj">5,710,070</td>
                <td class="td-desc">{{ t("Anchored to 2019–2020 avg (81.2%), improving gradually to 79.0% ('21), 77.5% ('22), and 76.0% ('23) via cold-chain waste cuts, Value Plus private label, and SmartClub exit.") }}</td>
              </tr>
              <tr class="row-subtotal clickable-row" @click="openDetail('gross_profit')" title="Click for Gross Margin expansion drivers">
                <td class="td-bold"><span class="row-inspect-label"><span>{{ t("Gross Profit") }}</span><span class="row-inspect-icon" aria-hidden="true">↗</span></span></td>
                <td class="td-num td-bold">1,580,397</td>
                <td class="td-num td-bold">1,306,658</td>
                <td class="td-num td-bold td-proj">1,445,120</td>
                <td class="td-num td-bold td-proj">1,594,794</td>
                <td class="td-num td-bold td-proj">1,803,180</td>
                <td class="td-desc td-bold">{{ t("Gross margin expands realistically from 18.8% (2019–2020 avg) to 21.0% ('21), 22.5% ('22), and 24.0% ('23) via fresh grocery mix shift and private label.") }}</td>
              </tr>
              <tr class="clickable-row" @click="openDetail('opex')" title="Click for OpEx reduction analysis">
                <td><span class="row-inspect-label"><span>{{ t("Operating Expenses (OpEx)") }}</span><span class="row-inspect-icon" aria-hidden="true">↗</span></span></td>
                <td class="td-num">1,776,502</td>
                <td class="td-num">1,446,926</td>
                <td class="td-num td-proj">1,273,082</td>
                <td class="td-num td-proj">1,240,395</td>
                <td class="td-num td-proj">1,239,686</td>
                <td class="td-desc">
                  <div>{{ t("OpEx drops from 21.0% (2019–2020 avg) to 18.5% ('21), 17.5% ('22), and 16.5% ('23) as 15 mall lease renegotiations, shrinking 45 hypermarkets, and closing 16 losing stores cut rent and utilities.") }}</div>
                </td>
              </tr>
              <tr class="clickable-row" @click="openDetail('ebit')" title="Click for EBIT turnaround formula & year-by-year table">
                <td class="td-bold td-profit"><span class="row-inspect-label"><span>{{ t("EBIT (Operating Income)") }}</span><span class="row-inspect-icon" aria-hidden="true">↗</span></span></td>
                <td class="td-num td-loss">-196,105</td>
                <td class="td-num td-loss">-140,268</td>
                <td class="td-num td-bold td-profit">172,038</td>
                <td class="td-num td-bold td-profit">354,399</td>
                <td class="td-num td-bold td-profit">563,494</td>
                <td class="td-desc td-profit">{{ t("Operating profit turns positive in Year 1 (+Rp 172B) and scales to +Rp 563B by 2023 through realistic margin gains paired with lower store rent and operating overhead.") }}</td>
              </tr>
              <tr class="clickable-row" @click="openDetail('net_finance')" title="Click for Net Finance Costs & PSAK 73 lease relief breakdown">
                <td><span class="row-inspect-label"><span>{{ t("Net Finance Costs (Interest)") }}</span><span class="row-inspect-icon" aria-hidden="true">↗</span></span></td>
                <td class="td-num">118,496</td>
                <td class="td-num">267,419</td>
                <td class="td-num td-proj">249,419</td>
                <td class="td-num td-proj">239,419</td>
                <td class="td-num td-proj">231,419</td>
                <td class="td-desc">{{ t("Decreases by Rp 18B ('21), Rp 28B ('22), and Rp 36B ('23) as PSAK 73 mall lease renegotiations reduce lease liabilities (Rp 166.2B lease interest base in 2020) with zero new bank debt.") }}</td>
              </tr>
              <tr class="clickable-row" @click="openDetail('ebt')" title="Click for EBT pretax calculation & year-by-year table">
                <td class="td-bold"><span class="row-inspect-label"><span>{{ t("EBT (Pretax Income)") }}</span><span class="row-inspect-icon" aria-hidden="true">↗</span></span></td>
                <td class="td-num td-loss">-314,601</td>
                <td class="td-num td-loss">-407,687</td>
                <td class="td-num td-loss">-77,381</td>
                <td class="td-num td-bold td-proj">114,980</td>
                <td class="td-num td-bold td-proj">332,075</td>
                <td class="td-desc">{{ t("Pretax loss narrows from -Rp 408B to -Rp 77B in 2021 during rollout, then turns profitable at +Rp 115B (2022) and +Rp 332B (2023).") }}</td>
              </tr>
              <tr class="clickable-row" @click="openDetail('tax')" title="Click for Indonesian 22% tax calculation & sources">
                <td><span class="row-inspect-label"><span>{{ t("Tax Expense") }}</span><span class="row-inspect-icon" aria-hidden="true">↗</span></span></td>
                <td class="td-num">238,073</td>
                <td class="td-num">-2,380</td>
                <td class="td-num td-proj">0</td>
                <td class="td-num td-proj">25,296</td>
                <td class="td-num td-proj">73,057</td>
                <td class="td-desc">{{ t("2021 reflects tax-loss shield (negative EBT); 2022–2023 apply Indonesia's statutory 22% corporate income tax rate.") }}</td>
              </tr>
              <tr class="row-total clickable-row" @click="openDetail('net_income')" title="Click for Net Income & equity roll-forward details">
                <td class="td-bold td-profit"><span class="row-inspect-label"><span>{{ t("Net Income (PAT)") }}</span><span class="row-inspect-icon" aria-hidden="true">↗</span></span></td>
                <td class="td-num td-loss">-552,674</td>
                <td class="td-num td-loss">-405,307</td>
                <td class="td-num td-loss">-77,381</td>
                <td class="td-num td-bold td-profit">89,684</td>
                <td class="td-num td-bold td-profit">259,018</td>
                <td class="td-desc td-profit">{{ t("Loss narrows by 81% in 2021 and swings to +Rp 89.7B (2022) and +Rp 259.0B (2023), adding +Rp 271.3B cumulative net profit without new debt or dilution.") }}</td>
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
          <span class="table-source">{{ t("Source: MPPA AR2020 pp. 126–127 & Reconciled 3-Statement Roll-Forward") }} · <em>{{ language === 'id' ? 'Klik baris mana saja untuk sumber & rumus' : 'Click any row for sources & formula' }}</em></span>
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
              <tr class="clickable-row" @click="openDetail('bs_cash')" title="Click for Cash & Cash Equivalents breakdown">
                <td><span class="row-inspect-label"><span>{{ t("Cash & Short-Term Investments") }}</span><span class="row-inspect-icon" aria-hidden="true">↗</span></span></td>
                <td class="td-num">304,295</td>
                <td class="td-num">299,805</td>
                <td class="td-num td-proj">452,424</td>
                <td class="td-num td-proj">612,108</td>
                <td class="td-num td-proj">941,126</td>
                <td class="td-desc">{{ t("Cash reserve triples from Rp 300B to Rp 941B via positive operating cash flow, SmartClub/FMX sales, and leaner inventory.") }}</td>
              </tr>
              <tr class="clickable-row" @click="openDetail('bs_ar')" title="Click for Accounts Receivable formula & collection days">
                <td><span class="row-inspect-label"><span>{{ t("Accounts Receivable") }}</span><span class="row-inspect-icon" aria-hidden="true">↗</span></span></td>
                <td class="td-num">220,079</td>
                <td class="td-num">193,210</td>
                <td class="td-num td-proj">240,853</td>
                <td class="td-num td-proj">248,079</td>
                <td class="td-num td-proj">262,964</td>
                <td class="td-desc">{{ t("Modeled at 3.5% of sales (~12.8 collection days) reflecting instant store cash/QRIS plus GrabMart & Shopee settlements.") }}</td>
              </tr>
              <tr class="clickable-row" @click="openDetail('bs_inventory')" title="Click for Inventories reduction & turnover breakdown">
                <td><span class="row-inspect-label"><span>{{ t("Inventories") }}</span><span class="row-inspect-icon" aria-hidden="true">↗</span></span></td>
                <td class="td-num">1,191,567</td>
                <td class="td-num">964,503</td>
                <td class="td-num td-proj">688,153</td>
                <td class="td-num td-proj">708,797</td>
                <td class="td-num td-proj">751,325</td>
                <td class="td-desc">{{ t("Lean inventory model (10.0% of sales; 7.6x–7.9x turnover): SmartClub/FMX stock exit and fresh focus release trapped cash.") }}</td>
              </tr>
              <tr class="clickable-row" @click="openDetail('bs_other_ca')" title="Click for Other Current Assets breakdown">
                <td><span class="row-inspect-label"><span>{{ t("Other Current Assets") }}</span><span class="row-inspect-icon" aria-hidden="true">↗</span></span></td>
                <td class="td-num">188,106</td>
                <td class="td-num">77,748</td>
                <td class="td-num td-proj">103,223</td>
                <td class="td-num td-proj">106,320</td>
                <td class="td-num td-proj">112,699</td>
                <td class="td-desc">{{ t("Held at 1.5% of revenue (matching 2019–2020 avg 1.66%) for prepaid VAT, supplier advances, and store deposits.") }}</td>
              </tr>
              <tr class="row-subtotal clickable-row" @click="openDetail('bs_total_ca')" title="Click for Total Current Assets sum & liquidity ratios">
                <td class="td-bold"><span class="row-inspect-label"><span>{{ t("Total Current Assets") }}</span><span class="row-inspect-icon" aria-hidden="true">↗</span></span></td>
                <td class="td-num td-bold">1,904,047</td>
                <td class="td-num td-bold">1,535,266</td>
                <td class="td-num td-bold td-proj">1,484,653</td>
                <td class="td-num td-bold td-proj">1,675,304</td>
                <td class="td-num td-bold td-proj">2,068,114</td>
                <td class="td-desc td-bold">{{ t("Liquidity recovers steadily: Current Ratio strengthens from 0.56x (2020A) to 0.76x ('21), 0.89x ('22), and 1.11x ('23).") }}</td>
              </tr>
              <tr class="clickable-row" @click="openDetail('bs_ppe')" title="Click for Net PP&E CapEx vs depreciation schedule">
                <td><span class="row-inspect-label"><span>{{ t("Net Property, Plant & Equipment") }}</span><span class="row-inspect-icon" aria-hidden="true">↗</span></span></td>
                <td class="td-num">926,287</td>
                <td class="td-num">789,871</td>
                <td class="td-num td-proj">791,121</td>
                <td class="td-num td-proj">792,371</td>
                <td class="td-num td-proj">793,621</td>
                <td class="td-desc">{{ t("Reflects Rp 90B/yr disciplined CapEx (50 Hyfresh stores, 45 resizes, 3 DCs) balanced by Rp 88.8B/yr depreciation.") }}</td>
              </tr>
              <tr class="clickable-row" @click="openDetail('bs_other_lta')" title="Click for ROU lease assets & deposits breakdown">
                <td><span class="row-inspect-label"><span>{{ t("Other Long-Term Assets & ROU Leases") }}</span><span class="row-inspect-icon" aria-hidden="true">↗</span></span></td>
                <td class="td-num">990,475</td>
                <td class="td-num">2,185,374</td>
                <td class="td-num td-proj">1,147,374</td>
                <td class="td-num td-proj">882,374</td>
                <td class="td-num td-proj">617,374</td>
                <td class="td-desc">{{ t("PSAK 73 Right-of-Use mall lease assets shrink as 45 hypermarkets resize and 15 fixed anchor leases switch to revenue-share.") }}</td>
              </tr>
              <tr class="row-total clickable-row" @click="openDetail('bs_total_assets')" title="Click for Total Assets sum & verification">
                <td class="td-bold"><span class="row-inspect-label"><span>{{ t("Total Assets") }}</span><span class="row-inspect-icon" aria-hidden="true">↗</span></span></td>
                <td class="td-num td-bold">3,820,809</td>
                <td class="td-num td-bold">4,510,511</td>
                <td class="td-num td-bold td-proj">3,423,148</td>
                <td class="td-num td-bold td-proj">3,350,049</td>
                <td class="td-num td-bold td-proj">3,479,109</td>
                <td class="td-desc td-bold">{{ t("Balances identically to Total Liabilities + Equity; Total Asset Turnover rises from 1.50x to 2.16x.") }}</td>
              </tr>
              <tr class="row-section"><td colspan="7">{{ t("LIABILITIES & STOCKHOLDERS' EQUITY") }}</td></tr>
              <tr class="clickable-row" @click="openDetail('bs_current_liab')" title="Click for Current Liabilities paydown breakdown">
                <td><span class="row-inspect-label"><span>{{ t("Total Current Liabilities (AP & Short-Term)") }}</span><span class="row-inspect-icon" aria-hidden="true">↗</span></span></td>
                <td class="td-num">2,618,390</td>
                <td class="td-num">2,763,099</td>
                <td class="td-num td-proj">1,953,117</td>
                <td class="td-num td-proj">1,890,334</td>
                <td class="td-num td-proj">1,860,376</td>
                <td class="td-desc">{{ t("Drops from Rp 2.76T as overdue supplier AP normalizes and short-term lease obligations decline.") }}</td>
              </tr>
              <tr class="clickable-row" @click="openDetail('bs_lt_debt')" title="Click for Long-Term Bank Debt & zero-borrowing policy">
                <td><span class="row-inspect-label"><span>{{ t("Long-Term Bank Debt") }}</span><span class="row-inspect-icon" aria-hidden="true">↗</span></span></td>
                <td class="td-num">250,000</td>
                <td class="td-num">0</td>
                <td class="td-num td-proj">0</td>
                <td class="td-num td-proj">0</td>
                <td class="td-num td-proj">0</td>
                <td class="td-desc">{{ t("Held at Rp 0 (0.0% LT Bank Debt / Equity); 100% self-funded rollout avoids adding new bank loans.") }}</td>
              </tr>
              <tr class="clickable-row" @click="openDetail('bs_lt_lease')" title="Click for Long-Term PSAK 73 Lease Liabilities breakdown">
                <td><span class="row-inspect-label"><span>{{ t("Long-Term Lease & Other Liabilities") }}</span><span class="row-inspect-icon" aria-hidden="true">↗</span></span></td>
                <td class="td-num">421,738</td>
                <td class="td-num">1,562,678</td>
                <td class="td-num td-proj">1,362,678</td>
                <td class="td-num td-proj">1,262,678</td>
                <td class="td-num td-proj">1,162,678</td>
                <td class="td-desc">{{ t("PSAK 73 non-current mall lease obligations (Note 19) decline -Rp 400B as anchor mall contracts are restructured.") }}</td>
              </tr>
              <tr class="row-highlight clickable-row" @click="openDetail('bs_equity')" title="Click for Stockholders' Equity exact roll-forward">
                <td class="td-bold td-profit"><span class="row-inspect-label"><span>{{ t("Total Stockholders' Equity") }}</span><span class="row-inspect-icon" aria-hidden="true">↗</span></span></td>
                <td class="td-num td-loss">530,681</td>
                <td class="td-num td-loss">184,734</td>
                <td class="td-num td-loss">107,353</td>
                <td class="td-num td-bold td-profit">197,037</td>
                <td class="td-num td-bold td-profit">456,055</td>
                <td class="td-desc td-profit">{{ t("Exact roll-forward (Prior Equity + PAT): rebuilds 2.5x from distressed Rp 184.7B (2020) to Rp 456.1B (2023) without dilution.") }}</td>
              </tr>
              <tr class="row-total clickable-row" @click="openDetail('bs_total_liab_eq')" title="Click for Total Liabilities & Equity balance verification">
                <td class="td-bold"><span class="row-inspect-label"><span>{{ t("Total Liabilities & Stockholders' Equity") }}</span><span class="row-inspect-icon" aria-hidden="true">↗</span></span></td>
                <td class="td-num td-bold">3,820,809</td>
                <td class="td-num td-bold">4,510,511</td>
                <td class="td-num td-bold td-proj">3,423,148</td>
                <td class="td-num td-bold td-proj">3,350,049</td>
                <td class="td-num td-bold td-proj">3,479,109</td>
                <td class="td-desc td-bold">{{ t("Matches Total Assets exactly across all 5 years (zero discrepancy).") }}</td>
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
            <span class="table-source">{{ t("Capital Needed: Rp 5,000M (Rp 5.0B) · Tax Rate: 23% · Interest Rate: 5.0%") }} · <em>{{ language === 'id' ? 'Klik baris untuk rincian formula' : 'Click row for formula breakdown' }}</em></span>
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
              <tr class="clickable-row" @click="openDetail('epsebit_stock')" title="Click for 100% Stock dilution formula & EPS table">
                <td class="td-bold"><span class="row-inspect-label"><span>{{ t("Plan A: 100% Stock") }}</span><span class="row-inspect-icon" aria-hidden="true">↗</span></span><small>Issue 1.96M Shares</small></td>
                <td class="td-num">Rp 7,700M<br><small>EPS: Rp 1.71</small></td>
                <td class="td-num">Rp 11,550M<br><small>EPS: Rp 2.56</small></td>
                <td class="td-num">Rp 13,860M<br><small>EPS: Rp 3.07</small></td>
                <td class="td-desc">{{ t("Dilutes existing shareholders; depressed P/E makes share issuance unattractive") }}</td>
              </tr>
              <tr class="clickable-row" @click="openDetail('epsebit_debt')" title="Click for 100% Debt interest cost & covenant risk breakdown">
                <td class="td-bold"><span class="row-inspect-label"><span>{{ t("Plan B: 100% Debt") }}</span><span class="row-inspect-icon" aria-hidden="true">↗</span></span><small>Rp 5,000M Debt @ 5%</small></td>
                <td class="td-num">Rp 7,508M<br><small>EPS: Rp 2.94</small></td>
                <td class="td-num">Rp 11,358M<br><small>EPS: Rp 4.45</small></td>
                <td class="td-num">Rp 13,668M<br><small>EPS: Rp 5.36</small></td>
                <td class="td-desc">{{ t("Higher EPS, but introduces Rp 250M interest burden & breach of loan conditions risk") }}</td>
              </tr>
              <tr class="row-winner clickable-row" @click="openDetail('epsebit')">
                <td class="td-bold td-winner">
                  <span class="row-inspect-label"><span>{{ t("★ RECOMMENDED:") }}</span><span class="row-inspect-icon" aria-hidden="true">↗</span></span>
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
                  {{ t("OPTIMAL STRATEGIC CHOICE: Zero shareholder dilution, zero interest burden, preserves Rp400B BNI credit covenant completely.") }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Right Card: Why Self-Funding Wins -->
        <div class="rationale-card is-clickable" @click="openDetail('debt')" title="Click for detailed capital allocation breakdown">
          <div class="rationale-header">
            <span class="rat-tag">{{ t("CAPITAL ALLOCATION RATIONALE") }}</span>
            <div class="rat-title">{{ t("Why Strategy Prioritizes Internal Self-Funding") }} <span class="row-inspect-icon">↗</span></div>
          </div>
          <div class="rat-body">
            <div class="rat-item">
              <span class="rat-bullet">1</span>
              <div>
                <strong>{{ t("Preventing Shareholder Dilution:") }}</strong>
                <p>{{ t("MPPA stock was heavily depressed during 2020. Issuing equity at distressed penny-stock levels causes extreme dilution to existing shareholders and anchor sponsor ownership.") }}</p>
              </div>
            </div>
            <div class="rat-item">
              <span class="rat-bullet">2</span>
              <div>
                <strong>{{ t("Safeguarding BNI Loan Conditions:") }}</strong>
                <p>{{ t("Adding bank debt introduces rigid debt-service coverage ratios and risks covenant default; keeping long-term bank debt near zero protects financial independence.") }}</p>
              </div>
            </div>
            <div class="rat-item">
              <span class="rat-bullet">3</span>
              <div>
                <strong>{{ t("The Rp 450B Self-Funding Engine:") }}</strong>
                <p>{{ t("Liquidating non-core SmartClub and FMX (+Rp120B) combined with lease cash savings (+Rp180B) and compact store operating cash (+Rp150B) fully covers the 50-store CapEx budget.") }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Footer Single Thread Bar -->
    <div class="fin-footer-bar">
      <div>
        <strong>{{ t("Turnaround Integration:") }}</strong>
        <span>{{ t("Capital reallocation from large-format leases into 50 compact fresh stores achieves EBIT turnaround (+Rp563.5B) with zero new external debt.") }}</span>
      </div>
      <div>
        <span class="cite-pill">{{ t("Excel Part II: Projected Statements, EPS_EBIT, Financial Statements") }}</span>
      </div>
    </div>

    <!-- Slide-Over Sidebar Drawer -->
    <dialog 
      ref="detailDrawer" 
      class="matrix-detail fin-detail" 
      aria-labelledby="fin-detail-title"
      @click.self="closeDetail"
    >
      <header class="matrix-detail-head" :style="{ borderTopColor: selectedDetail.borderColor || '#df0036' }">
        <div class="matrix-detail-head-main">
          <div class="matrix-meta-bar">
            <span class="matrix-kind-badge">{{ language === 'id' ? selectedDetail.tagId : selectedDetail.tag }}</span>
            <span class="matrix-status-pill" :class="selectedDetail.statusClass">{{ language === 'id' ? selectedDetail.statusPillId : selectedDetail.statusPill }}</span>
          </div>
          <h3 id="fin-detail-title">{{ language === 'id' ? selectedDetail.titleId : selectedDetail.title }}</h3>
          <p class="matrix-detail-sub">{{ language === 'id' ? selectedDetail.subId : selectedDetail.sub }}</p>
        </div>
        <button 
          type="button" 
          class="matrix-detail-close" 
          :aria-label="language === 'id' ? 'Tutup rincian' : 'Close details'"
          @click="closeDetail" 
          autofocus
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </header>

      <div ref="detailContent" class="matrix-detail-scroll">
        <!-- 1. Executive Summary Grid -->
        <section class="matrix-detail-section">
          <div class="matrix-section-header">
            <span class="matrix-sec-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            </span>
            <h4>{{ language === 'id' ? 'Ringkasan Eksekutif' : 'At a Glance' }}</h4>
          </div>
          <div class="matrix-kpi-grid">
            <div 
              v-for="(kpi, idx) in selectedDetail.kpis" 
              :key="idx" 
              class="matrix-kpi-card"
              :class="{ 'kpi-full': kpi.isHighlight }"
            >
              <span class="matrix-kpi-label">{{ language === 'id' ? kpi.labelId : kpi.label }}</span>
              <div class="matrix-kpi-val-row">
                <span 
                  class="matrix-kpi-val" 
                  :class="{ 'kpi-loss': kpi.isLoss, 'kpi-profit': kpi.isProfit }"
                >
                  {{ kpi.val }}
                </span>
              </div>
              <span class="matrix-kpi-sub">{{ kpi.sub }}</span>
            </div>
          </div>
        </section>

        <!-- 1b. Year-by-Year Exact Numbers & Sources Table -->
        <section v-if="selectedDetail.yearTable && selectedDetail.yearTable.length" class="matrix-detail-section">
          <div class="matrix-section-header">
            <span class="matrix-sec-icon" style="color:#0369a1;">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="9" y1="4" x2="9" y2="20"/></svg>
            </span>
            <h4>{{ language === 'id' ? 'Rincian Angka Per Tahun & Sumber Asli' : 'Year-by-Year Breakdown & Where Each Number Comes From' }}</h4>
          </div>
          <div class="matrix-calc-card fin-year-table-card">
            <table class="fin-year-table">
              <thead>
                <tr>
                  <th>{{ language === 'id' ? 'Periode' : 'Period' }}</th>
                  <th class="num">{{ language === 'id' ? 'Nilai (Rp Juta)' : 'Value (Rp M)' }}</th>
                  <th>{{ language === 'id' ? 'Cara Hitung / Rumus' : 'Exact Calculation / Formula' }}</th>
                  <th>{{ language === 'id' ? 'Sumber / Pendorong' : 'Where We Got It (Source / Driver)' }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, yIdx) in selectedDetail.yearTable" :key="yIdx">
                  <td class="yr-col">{{ row.year }}</td>
                  <td class="num val-col">{{ row.val }}</td>
                  <td class="formula-col">{{ row.formula }}</td>
                  <td class="src-col">{{ row.source }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- 2. Where Did We Get The Numbers? (Source & Model Coordinates) -->
        <section class="matrix-detail-section">
          <div class="matrix-section-header">
            <span class="matrix-sec-icon" style="color:#df0036;">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </span>
            <h4>{{ language === 'id' ? 'Dari Mana Angka Ini Diperoleh? (Sumber & Koordinat Sel)' : 'Where Did We Get The Numbers? (Data Sources & Cells)' }}</h4>
          </div>
          <div class="matrix-calc-card">
            <div class="fin-source-head">
              <strong>📊 {{ selectedDetail.whereWeGotIt.workbook }}</strong>
            </div>
            <div v-for="(sheet, sIdx) in selectedDetail.whereWeGotIt.sheets" :key="sIdx" class="fin-sheet-item">
              <div class="fin-sheet-tag">Sheet: <strong>{{ sheet.name }}</strong> · {{ sheet.coords }}</div>
              <div class="fin-sheet-desc">{{ sheet.desc }}</div>
            </div>
            <div class="fin-doc-sources">
              <div class="fin-doc-row">
                <span class="fin-doc-label">📄 {{ language === 'id' ? 'Laporan Tahunan' : 'Annual Report' }}:</span>
                <span>{{ selectedDetail.whereWeGotIt.annualReport }}</span>
              </div>
              <div v-if="selectedDetail.whereWeGotIt.caseRef" class="fin-doc-row">
                <span class="fin-doc-label">📑 {{ language === 'id' ? 'Studi Kasus' : 'Case Study' }}:</span>
                <span>{{ selectedDetail.whereWeGotIt.caseRef }}</span>
              </div>
              <div v-if="selectedDetail.whereWeGotIt.regulatory" class="fin-doc-row">
                <span class="fin-doc-label">⚖️ {{ language === 'id' ? 'Regulasi / Syarat Pinjaman' : 'Regulatory / Covenant' }}:</span>
                <span>{{ selectedDetail.whereWeGotIt.regulatory }}</span>
              </div>
            </div>
          </div>
        </section>

        <!-- 3. How We Get It (Mathematical Derivation & Formulas) -->
        <section class="matrix-detail-section">
          <div class="matrix-section-header">
            <span class="matrix-sec-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="16" y1="2" x2="16" y2="6"/></svg>
            </span>
            <h4>{{ language === 'id' ? 'Bagaimana Kami Menghitungnya? (Kalkulasi Matematis)' : 'How We Get It (Mathematical Derivation)' }}</h4>
          </div>
          <div class="matrix-calc-card">
            <div v-for="(math, mIdx) in selectedDetail.howWeGetIt.mathSteps" :key="mIdx" class="fin-math-step">
              <div class="fin-step-title">{{ math.step }}</div>
              <div class="fin-step-formula">{{ math.formula }}</div>
            </div>
          </div>
          <!-- Operational Bridge if available -->
          <div v-if="selectedDetail.howWeGetIt.operationalBridge" class="fin-bridge-card">
            <div class="fin-bridge-title">{{ language === 'id' ? 'Jembatan Operasional & Alokasi Modal:' : 'Operational Bridge & Capital Breakdown:' }}</div>
            <div v-for="(bItem, bIdx) in selectedDetail.howWeGetIt.operationalBridge" :key="bIdx" class="fin-bridge-row">
              <div class="fin-bridge-left">
                <strong>{{ bItem.item }}</strong>
                <small>{{ bItem.desc }}</small>
              </div>
              <span class="fin-bridge-val">{{ bItem.impact }}</span>
            </div>
          </div>
        </section>

        <!-- 4. Strategic Rationale & Operational Logic -->
        <section class="matrix-detail-section">
          <div class="matrix-section-header">
            <span class="matrix-sec-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 21H3V3"/><path d="M7 14l4-4 4 4 6-6"/></svg>
            </span>
            <h4>{{ language === 'id' ? 'Rasional Strategis & Pendorong Operasional' : 'Strategic Rationale & Operating Drivers' }}</h4>
          </div>
          <div class="matrix-card matrix-analysis-card">
            <p>{{ selectedDetail.strategicRationale }}</p>
          </div>
        </section>

        <!-- 5. Sensitivity & Measures To Meet Loan Conditions -->
        <section v-if="selectedDetail.sensitivity" class="matrix-detail-section">
          <div class="matrix-section-header">
            <span class="matrix-sec-icon" style="color:#df0036;">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            </span>
            <h4>{{ language === 'id' ? 'Uji Sensitivitas & Perlindungan Syarat Pinjaman' : 'Sensitivity & Measures To Meet Loan Conditions' }}</h4>
          </div>
          <div class="matrix-card matrix-rec-card">
            <div class="matrix-rec-title">{{ language === 'id' ? 'Pertahanan Proyeksi:' : 'Defending the Projections:' }}</div>
            <p class="matrix-rec-body">{{ selectedDetail.sensitivity }}</p>
          </div>
        </section>

        <!-- 6. Evidence Sources -->
        <section class="matrix-detail-section matrix-sources-container">
          <div class="matrix-section-header">
            <span class="matrix-sec-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            </span>
            <h4>{{ language === 'id' ? 'Dokumen Sumber & Bukti' : 'Evidence & Model Sources' }}</h4>
          </div>
          <div class="matrix-sources-list">
            <a href="Matahari.xlsx" target="_blank" class="matrix-source-pill" download>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              Matahari.xlsx (PART II & Projected Statements)
            </a>
            <a href="AR2020.pdf" target="_blank" class="matrix-source-pill" rel="noopener">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              MPPA AR2020 Audited Financial Statements
            </a>
            <span class="matrix-source-pill">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              Fred R. David Ch. 8 (Pro Forma Statements)
            </span>
          </div>
        </section>
      </div>
    </dialog>

    <div class="component-slide-number">{{ slideNumber }}</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { financialDetailData } from '../data/financialProjectionsData.js';

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

const activeTab = ref('income');
const selectedDetailKey = ref('revenue');
const detailDrawer = ref(null);
const detailContent = ref(null);

const selectedDetail = computed(() => {
  return financialDetailData[selectedDetailKey.value] || financialDetailData.revenue;
});

function openDetail(key) {
  if (financialDetailData[key]) {
    selectedDetailKey.value = key;
  }
  if (detailDrawer.value && !detailDrawer.value.open) {
    detailDrawer.value.showModal();
    if (detailContent.value) {
      detailContent.value.scrollTop = 0;
    }
  }
}

function closeDetail() {
  if (detailDrawer.value && detailDrawer.value.open) {
    detailDrawer.value.close();
  }
}
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
  align-items: flex-end;
  margin-bottom: 0.85cqw;
  gap: 1cqw;
}

.title-block {
  flex: 1;
  min-width: 0;
  max-width: 72cqw;
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
  gap: 0.75cqw;
  margin-bottom: 0.85cqw;
}

.fin-kpi-card {
  background: #faf7f9;
  border: 1px solid #ebdbe2;
  border-top: 3px solid #df0036;
  border-radius: 6px;
  padding: 0.55cqw 0.85cqw 0.5cqw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 1px 3px rgba(48, 37, 43, 0.04);
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
  min-width: 0;
}

.fin-kpi-card.is-clickable {
  cursor: pointer;
}

.fin-kpi-card.is-clickable:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(223, 0, 54, 0.12);
  border-color: #df0036;
}

.fin-kpi-card.is-clickable:focus-visible {
  outline: 2px solid #df0036;
  outline-offset: 2px;
}

.kpi-card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.2cqw;
}

.kpi-top-badges {
  display: flex;
  align-items: center;
  gap: 0.3cqw;
}

.fin-kpi-tag {
  color: #73616c;
  font-size: 0.68cqw;
  font-weight: 800;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.kpi-badge {
  font-size: 0.62cqw;
  font-weight: 800;
  padding: 0.1cqw 0.45cqw;
  border-radius: 4px;
  letter-spacing: 0.02em;
  white-space: nowrap;
}

.badge-brand {
  background: #fcebf0;
  color: #b6002d;
  border: 1px solid #f8ccd7;
}

.badge-profit {
  background: #e6f4ea;
  color: #137333;
  border: 1px solid #ceead6;
}

.kpi-hint-pill {
  font-size: 0.55cqw;
  font-weight: 700;
  background: #ffffff;
  border: 1px solid #ebdbe2;
  color: #b6002d;
  padding: 0.08cqw 0.35cqw;
  border-radius: 3px;
  letter-spacing: 0.02em;
  white-space: nowrap;
}

.fin-kpi-val {
  font-size: 1.35cqw;
  font-weight: 900;
  color: #1e181c;
  line-height: 1.15;
  display: flex;
  align-items: baseline;
  gap: 0.35cqw;
  font-variant-numeric: tabular-nums;
  margin-bottom: 0.35cqw;
}

.kpi-from {
  color: #625762;
}

.kpi-loss {
  color: #b6002d;
  font-weight: 800;
}

.kpi-arrow {
  color: #a89ba3;
  font-weight: 600;
  font-size: 1.05cqw;
}

.kpi-to {
  color: #1e181c;
  font-weight: 900;
}

.kpi-profit {
  color: #137333;
  font-weight: 900;
}

.kpi-driver-tags {
  display: flex;
  gap: 0.35cqw;
  flex-wrap: wrap;
}

.driver-tag {
  font-size: 0.64cqw;
  font-weight: 600;
  background: #ffffff;
  border: 1px solid #ebdbe2;
  color: #4a3b43;
  padding: 0.1cqw 0.4cqw;
  border-radius: 3px;
  line-height: 1.25;
  white-space: nowrap;
}

/* Content View */
.fin-content-view {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
}

.fin-content-view > .table-card {
  flex: 1;
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
  flex: 1;
  min-height: 0;
  overflow: auto;
}

.fin-content-view > .table-card .fin-table {
  min-height: 100%;
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
.fin-table th.th-item { text-align: left; width: 22%; }
.fin-table th:is(.th-hist, .th-proj) { width: 8.5%; }
.fin-table th.th-note { text-align: left; width: 35%; }
.fin-table td {
  padding: 0.40cqw 0.55cqw;
  border-bottom: 1px solid #f1f5f9;
}
.td-num { text-align: right; font-variant-numeric: tabular-nums; }
.td-bold { font-weight: 800; color: #0f172a; }
.td-desc { font-size: 0.77cqw; color: #475569; line-height: 1.35; }

.row-inspect-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .35cqw;
}
.row-inspect-icon {
  font-size: 0.65cqw;
  color: #df0036;
  opacity: 0.6;
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.clickable-row {
  cursor: pointer;
  transition: background-color 0.12s ease;
}
.clickable-row:hover {
  background-color: #faf5f7 !important;
}
.clickable-row:hover .row-inspect-icon {
  opacity: 1;
  transform: translate(1px, -1px);
}

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
  transition: transform 0.15s ease, border-color 0.15s ease;
}
.rationale-card.is-clickable {
  cursor: pointer;
}
.rationale-card.is-clickable:hover {
  border-color: #df0036;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
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

/* Drawer Detail Content Custom Styling */
.fin-source-head {
  font-size: 13px;
  color: #1e181c;
  margin-bottom: 8px;
  padding-bottom: 6px;
  border-bottom: 1px solid #cbd5e1;
}
.fin-sheet-item {
  margin-bottom: 8px;
  padding-left: 6px;
  border-left: 2px solid #df0036;
}
.fin-sheet-item:last-of-type {
  margin-bottom: 10px;
}
.fin-sheet-tag {
  font-size: 12px;
  color: #0f172a;
}
.fin-sheet-desc {
  font-size: 11.5px;
  color: #64748b;
  line-height: 1.35;
}
.fin-doc-sources {
  margin-top: 10px;
  padding-top: 8px;
  border-top: 1px dashed #cbd5e1;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.fin-doc-row {
  font-size: 11.5px;
  line-height: 1.4;
  color: #334155;
}
.fin-doc-label {
  font-weight: 700;
  color: #0f172a;
  margin-right: 4px;
}

.fin-math-step {
  margin-bottom: 8px;
  padding-bottom: 6px;
  border-bottom: 1px solid #e2e8f0;
}
.fin-math-step:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}
.fin-step-title {
  font-size: 11.5px;
  font-weight: 700;
  color: #475569;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.fin-step-formula {
  font-size: 13px;
  font-weight: 600;
  color: #0f172a;
  font-variant-numeric: tabular-nums;
  margin-top: 2px;
}

.fin-bridge-card {
  background: #ffffff;
  border: 1px solid #ebdbe2;
  border-radius: 6px;
  padding: 10px 12px;
  margin-top: 8px;
}
.fin-bridge-title {
  font-size: 11.5px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #73616c;
  margin-bottom: 6px;
}
.fin-bridge-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
  padding: 5px 0;
  border-bottom: 1px solid #f1f5f9;
}
.fin-bridge-row:last-child {
  border-bottom: none;
  font-weight: 700;
  padding-top: 7px;
  margin-top: 2px;
  border-top: 1px solid #ebdbe2;
}
.fin-bridge-left {
  display: flex;
  flex-direction: column;
}
.fin-bridge-left strong {
  font-size: 12px;
  color: #1e181c;
}
.fin-bridge-left small {
  font-size: 11px;
  color: #64748b;
  line-height: 1.3;
}
.fin-bridge-val {
  font-size: 12.5px;
  font-weight: 700;
  color: #137333;
  white-space: nowrap;
}
.fin-year-table-card {
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
  line-height: 1.35;
}
.fin-year-table tr:last-child td {
  border-bottom: none;
}
.fin-year-table td.yr-col {
  font-weight: 800;
  color: #0f172a;
  white-space: nowrap;
}
.fin-year-table td.val-col {
  font-weight: 800;
  color: #0f172a;
}
.fin-year-table td.formula-col {
  font-weight: 600;
  color: #1e293b;
}
.fin-year-table td.src-col {
  color: #475569;
}
</style>
