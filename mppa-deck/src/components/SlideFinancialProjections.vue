<template>
  <div class="financial-slide-wrapper">
    <!-- Header -->
    <div class="deck-kicker">{{ t("Financial feasibility · Stage 4 · Fred David Ch. 8 framework") }}</div>
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
          <span class="driver-tag">{{ t("45 Dark Hubs") }}</span>
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
            <span class="kpi-badge badge-profit">{{ t("+Rp 1.57T Swing") }}</span>
            <span class="kpi-hint-pill">🔍 {{ language === 'id' ? 'Rincian' : 'Details' }} ↗</span>
          </div>
        </div>
        <div class="fin-kpi-val">
          <span class="kpi-loss">-Rp 140B</span>
          <span class="kpi-arrow">→</span>
          <span class="kpi-profit">+Rp 1,428B</span>
        </div>
        <div class="kpi-driver-tags">
          <span class="driver-tag">{{ t("Fresh Grocery Margin") }}</span>
          <span class="driver-tag">{{ t("Lease Rightsizing") }}</span>
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
          <span class="table-source">{{ t("Source: Matahari.xlsx Sheet 'Projected Statements' & Audited Financial Reports") }} · <em>{{ language === 'id' ? 'Klik baris untuk rincian formula & sumber' : 'Click any row for formula & sources' }}</em></span>
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
                <td class="td-bold td-interactive">{{ t("Revenues (Sales)") }} <span class="row-inspect-icon">↗</span></td>
                <td class="td-num">8,654,646</td>
                <td class="td-num">6,746,594</td>
                <td class="td-num td-proj">6,881,526</td>
                <td class="td-num td-proj">7,087,972</td>
                <td class="td-num td-proj td-highlight">7,513,250</td>
                <td class="td-desc">{{ t("+2% ('21), +3% ('22), +6% ('23): Net growth reflects opening 50 compact Hyfresh stores (+Rp750B) while rightsizing 45 hypermarkets and closing SmartClub (-Rp500B low-margin bulk sales).") }}</td>
              </tr>
              <tr class="clickable-row" @click="openDetail('cogs')" title="Click for COGS breakdown and direct farm sourcing model">
                <td class="td-interactive">{{ t("Cost of Goods Sold (COGS)") }} <span class="row-inspect-icon">↗</span></td>
                <td class="td-num">7,074,249</td>
                <td class="td-num">5,439,936</td>
                <td class="td-num td-proj">3,440,763</td>
                <td class="td-num td-proj">3,543,986</td>
                <td class="td-num td-proj">3,756,625</td>
                <td class="td-desc">{{ t("COGS reduced to 50% of sales through direct farm procurement, bypassing distributor markups and leveraging 66,755 m² central cold-chain storage to slash perishable waste.") }}</td>
              </tr>
              <tr class="row-subtotal clickable-row" @click="openDetail('gross_profit')" title="Click for Gross Margin expansion drivers">
                <td class="td-bold td-interactive">{{ t("Gross Profit") }} <span class="row-inspect-icon">↗</span></td>
                <td class="td-num td-bold">1,580,397</td>
                <td class="td-num td-bold">1,306,658</td>
                <td class="td-num td-bold td-proj">3,440,763</td>
                <td class="td-num td-bold td-proj">3,543,986</td>
                <td class="td-num td-bold td-proj">3,756,625</td>
                <td class="td-desc td-bold">{{ t("Gross margin expands to 50% via 3 strategic drivers: (1) Portfolio shift to high-margin perishables & fresh bakery (28–35% margin) vs bulk FMCG; (2) Direct farm cold-chain sourcing cutting middleman margins & spoilage; (3) Elimination of low-margin SmartClub wholesale dilution.") }}</td>
              </tr>
              <tr class="clickable-row" @click="openDetail('opex')" title="Click for OpEx buffer analysis">
                <td class="td-interactive">{{ t("Operating Expenses (OpEx)") }} <span class="row-inspect-icon">↗</span></td>
                <td class="td-num">1,776,502</td>
                <td class="td-num">1,446,926</td>
                <td class="td-num td-proj">2,133,273</td>
                <td class="td-num td-proj">2,197,271</td>
                <td class="td-num td-proj">2,329,108</td>
                <td class="td-desc">
                  <div>{{ t("OpEx budgeted conservatively at 31% of revenue (vs 21.5% in 2020), providing an ample cost buffer for 50-store fit-outs, cold-logistics handling, and GrabMart/Shopee digital O2O fulfillment commissions.") }}</div>
                </td>
              </tr>
              <tr class="row-highlight clickable-row" @click="openDetail('ebit')" title="Click for EBIT turnaround formula & bridge">
                <td class="td-bold td-interactive td-profit">{{ t("EBIT (Operating Income)") }} <span class="row-inspect-icon">↗</span></td>
                <td class="td-num td-loss">-196,105</td>
                <td class="td-num td-loss">-140,268</td>
                <td class="td-num td-bold td-profit">1,307,490</td>
                <td class="td-num td-bold td-profit">1,346,715</td>
                <td class="td-num td-bold td-profit">1,427,517</td>
                <td class="td-desc td-profit">{{ t("Turnaround driven by operational scissors effect: high-yield compact fresh store gross profit combined with PSAK 73 lease expense reduction from rightsizing 45 large hypermarket anchor spaces.") }}</td>
              </tr>
              <tr class="clickable-row" @click="openDetail('debt')" title="Click for debt and covenant details">
                <td class="td-interactive">{{ t("Net Finance Costs (Interest)") }} <span class="row-inspect-icon">↗</span></td>
                <td class="td-num">118,496</td>
                <td class="td-num">267,419</td>
                <td class="td-num td-proj">267,519</td>
                <td class="td-num td-proj">267,516</td>
                <td class="td-num td-proj">267,513</td>
                <td class="td-desc">{{ t("Interest expense maintained without surge; transformation is 100% self-funded without new bank debt, strictly protecting BNI credit covenants.") }}</td>
              </tr>
              <tr>
                <td class="td-bold">{{ t("EBT (Pretax Income)") }}</td>
                <td class="td-num td-loss">-314,601</td>
                <td class="td-num td-loss">-407,687</td>
                <td class="td-num td-bold td-proj">1,039,971</td>
                <td class="td-num td-bold td-proj">1,079,199</td>
                <td class="td-num td-bold td-proj">1,160,004</td>
                <td class="td-desc">{{ t("Pretax profit swings to +Rp 1.04T in 2021 and reaches +Rp 1.16T by 2023, decisively reversing historical structural deficits.") }}</td>
              </tr>
              <tr>
                <td>{{ t("Tax Expense") }}</td>
                <td class="td-num">238,073</td>
                <td class="td-num">-2,380</td>
                <td class="td-num td-proj">239,193</td>
                <td class="td-num td-proj">248,216</td>
                <td class="td-num td-proj">290,001</td>
                <td class="td-desc">{{ t("Corporate tax rate applied: statutory 23% in 2021–2022, 25% in 2023, reflecting full compliance with Indonesian fiscal regulations.") }}</td>
              </tr>
              <tr class="row-total clickable-row" @click="openDetail('net_income')" title="Click for Net Income & equity restoration details">
                <td class="td-bold td-interactive td-profit">{{ t("Net Income (PAT)") }} <span class="row-inspect-icon">↗</span></td>
                <td class="td-num td-loss">-552,674</td>
                <td class="td-num td-loss">-405,307</td>
                <td class="td-num td-bold td-profit">800,778</td>
                <td class="td-num td-bold td-profit">830,983</td>
                <td class="td-num td-bold td-profit">870,003</td>
                <td class="td-desc td-profit">{{ t("Cumulative net profit of Rp 2.50T over 3 years completely restores stockholders' equity base to +Rp 2.69T without shareholder dilution.") }}</td>
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
          <span class="table-source">{{ t("Source: Matahari.xlsx Sheet 'Projected Statements' & Case 23 Exhibit 3") }} · <em>{{ language === 'id' ? 'Klik baris untuk rincian formula & sumber' : 'Click any row for formula & sources' }}</em></span>
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
              <tr class="clickable-row" @click="openDetail('debt')">
                <td class="td-interactive">{{ t("Cash & Short-Term Investments") }} <span class="row-inspect-icon">↗</span></td>
                <td class="td-num">304,295</td>
                <td class="td-num">299,805</td>
                <td class="td-num td-proj">1,776,827</td>
                <td class="td-num td-proj">2,657,042</td>
                <td class="td-num td-proj">3,623,609</td>
                <td class="td-desc">{{ t("Accumulated cash reserve generated by high-velocity compact store operations and positive working capital cycle.") }}</td>
              </tr>
              <tr>
                <td>{{ t("Accounts Receivable") }}</td>
                <td class="td-num">220,079</td>
                <td class="td-num">193,210</td>
                <td class="td-num td-proj">481,707</td>
                <td class="td-num td-proj">496,158</td>
                <td class="td-num td-proj">525,928</td>
                <td class="td-desc">{{ t("Maintained at 7% of revenue; predominantly instant consumer cash transactions and digital e-wallet settlements.") }}</td>
              </tr>
              <tr class="clickable-row" @click="openDetail('revenue')">
                <td class="td-interactive">{{ t("Inventories") }} <span class="row-inspect-icon">↗</span></td>
                <td class="td-num">1,191,567</td>
                <td class="td-num">964,503</td>
                <td class="td-num td-proj">481,707</td>
                <td class="td-num td-proj">496,158</td>
                <td class="td-num td-proj">525,928</td>
                <td class="td-desc">{{ t("Lean inventory model: turnover accelerates from 5.6x to 7.1x via compact fresh format, freeing up Rp150B in working capital.") }}</td>
              </tr>
              <tr>
                <td>{{ t("Other Current Assets") }}</td>
                <td class="td-num">188,106</td>
                <td class="td-num">77,748</td>
                <td class="td-num td-proj">1,238,675</td>
                <td class="td-num td-proj">1,275,835</td>
                <td class="td-num td-proj">1,352,385</td>
                <td class="td-desc">{{ t("Working capital buffers for prepaid inventory procurement and store operational guarantees.") }}</td>
              </tr>
              <tr class="row-subtotal">
                <td class="td-bold">{{ t("Total Current Assets") }}</td>
                <td class="td-num td-bold">1,904,047</td>
                <td class="td-num td-bold">1,535,266</td>
                <td class="td-num td-bold td-proj">3,978,915</td>
                <td class="td-num td-bold td-proj">4,925,193</td>
                <td class="td-num td-bold td-proj">6,027,849</td>
                <td class="td-desc td-bold">{{ t("Liquidity expands decisive: Current Ratio strengthens from 0.56x (2020) to 1.96x (2023), ending supplier freezes.") }}</td>
              </tr>
              <tr>
                <td>{{ t("Net Property, Plant & Equipment") }}</td>
                <td class="td-num">926,287</td>
                <td class="td-num">789,871</td>
                <td class="td-num td-proj">791,121</td>
                <td class="td-num td-proj">792,371</td>
                <td class="td-num td-proj">793,621</td>
                <td class="td-desc">{{ t("Disciplined Net PP&E reflects 50 compact Hyfresh store fit-outs offset by hypermarket space downsizing.") }}</td>
              </tr>
              <tr>
                <td>{{ t("Other Long-Term Assets & Leases") }}</td>
                <td class="td-num">990,475</td>
                <td class="td-num">2,185,374</td>
                <td class="td-num td-proj">550,522</td>
                <td class="td-num td-proj">567,038</td>
                <td class="td-num td-proj">601,060</td>
                <td class="td-desc">{{ t("PSAK 73 right-of-use asset liabilities reduced substantially by rightsizing 45 anchor hypermarket leases.") }}</td>
              </tr>
              <tr class="row-total">
                <td class="td-bold">{{ t("Total Assets") }}</td>
                <td class="td-num td-bold">3,820,809</td>
                <td class="td-num td-bold">4,510,511</td>
                <td class="td-num td-bold td-proj">5,322,873</td>
                <td class="td-num td-bold td-proj">6,286,917</td>
                <td class="td-num td-bold td-proj">7,424,845</td>
                <td class="td-desc td-bold">{{ t("Total asset base grows soundly to Rp 7.42T, supported by operational cash generation and high-yield stores.") }}</td>
              </tr>
              <tr class="row-section"><td colspan="7">{{ t("LIABILITIES & STOCKHOLDERS' EQUITY") }}</td></tr>
              <tr>
                <td>{{ t("Total Current Liabilities (AP & Short-Term)") }}</td>
                <td class="td-num">2,618,390</td>
                <td class="td-num">2,763,099</td>
                <td class="td-num td-proj">2,821,426</td>
                <td class="td-num td-proj">2,906,069</td>
                <td class="td-num td-proj">3,080,433</td>
                <td class="td-desc">{{ t("Supplier trade payables managed smoothly with shortened payment cycles, restoring tier-1 supplier trust.") }}</td>
              </tr>
              <tr class="clickable-row" @click="openDetail('debt')" title="Click for debt and self-funding sources">
                <td class="td-interactive">{{ t("Long-Term Bank Debt") }} <span class="row-inspect-icon">↗</span></td>
                <td class="td-num">250,000</td>
                <td class="td-num">0</td>
                <td class="td-num td-proj">2,000</td>
                <td class="td-num td-proj">2,000</td>
                <td class="td-num td-proj">2,000</td>
                <td class="td-desc">{{ t("Zero new bank borrowing; preserves BNI credit line covenants (ceiling 250% debt-to-equity) without financial distress.") }}</td>
              </tr>
              <tr class="row-highlight clickable-row" @click="openDetail('net_income')" title="Click for equity restoration details">
                <td class="td-bold td-interactive td-profit">{{ t("Total Stockholders' Equity") }} <span class="row-inspect-icon">↗</span></td>
                <td class="td-num td-loss">530,681</td>
                <td class="td-num td-loss">184,734</td>
                <td class="td-num td-bold td-profit">985,512</td>
                <td class="td-num td-bold td-profit">1,819,495</td>
                <td class="td-num td-bold td-profit">2,689,498</td>
                <td class="td-desc td-profit">{{ t("Equity base surges from distressed Rp185B back to Rp2.69T via accumulated retained earnings, restoring solvency.") }}</td>
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
              <tr class="clickable-row" @click="openDetail('epsebit')">
                <td class="td-bold td-interactive">{{ t("Plan A: 100% Stock") }} <span class="row-inspect-icon">↗</span><br><small>Issue 1.96M Shares</small></td>
                <td class="td-num">Rp 7,700M<br><small>EPS: Rp 1.71</small></td>
                <td class="td-num">Rp 11,550M<br><small>EPS: Rp 2.56</small></td>
                <td class="td-num">Rp 13,860M<br><small>EPS: Rp 3.07</small></td>
                <td class="td-desc">{{ t("Dilutes existing shareholders; depressed P/E makes share issuance unattractive") }}</td>
              </tr>
              <tr class="clickable-row" @click="openDetail('epsebit')">
                <td class="td-bold td-interactive">{{ t("Plan B: 100% Debt") }} <span class="row-inspect-icon">↗</span><br><small>Rp 5,000M Debt @ 5%</small></td>
                <td class="td-num">Rp 7,508M<br><small>EPS: Rp 2.94</small></td>
                <td class="td-num">Rp 11,358M<br><small>EPS: Rp 4.45</small></td>
                <td class="td-num">Rp 13,668M<br><small>EPS: Rp 5.36</small></td>
                <td class="td-desc">{{ t("Higher EPS, but introduces Rp 250M interest burden & covenant breach risk") }}</td>
              </tr>
              <tr class="row-winner clickable-row" @click="openDetail('epsebit')">
                <td class="td-bold td-winner td-interactive">
                  {{ t("★ RECOMMENDED:") }} <span class="row-inspect-icon">↗</span><br>
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
                <strong>{{ t("Safeguarding BNI Debt Covenants:") }}</strong>
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
        <span>{{ t("Capital reallocation from large-format leases into 50 compact fresh stores achieves EBIT turnaround (+Rp1.43T) with zero new external debt.") }}</span>
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
                <span class="fin-doc-label">⚖️ {{ language === 'id' ? 'Regulasi / Kovenan' : 'Regulatory / Covenant' }}:</span>
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

        <!-- 5. Sensitivity & Covenant Safeguards -->
        <section v-if="selectedDetail.sensitivity" class="matrix-detail-section">
          <div class="matrix-section-header">
            <span class="matrix-sec-icon" style="color:#df0036;">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            </span>
            <h4>{{ language === 'id' ? 'Uji Sensitivitas & Perlindungan Kovenan' : 'Sensitivity & Covenant Safeguards' }}</h4>
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

.td-interactive {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
</style>
