<template>
  <div class="financial-slide-wrapper">
    <!-- Header -->
    <div class="deck-kicker">{{ t("Financial feasibility · Stage 4 · Fred David Ch. 8 framework") }}</div>
    <div class="slide-header-row">
      <div class="title-block">
        <h2 class="slide-title">{{ t("3-Year Pro Forma Financial Statements & Strategic Financing") }}</h2>
        <p class="slide-subtitle">
          {{ t("Illustrative upside case (2021–2023) from Matahari.xlsx Part II. Projected results depend on the workbook assumptions.") }}
        </p>
      </div>

      <!-- Controls Row: Tabs + Defense Guide Toggle -->
      <div class="controls-row">
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

        <button 
          type="button" 
          class="defense-toggle-btn" 
          :class="{ 'is-active': showDefenseGuide }"
          @click="toggleDefenseGuide"
          :title="t('Click to open Defense Guide & Q&A Script')"
        >
          <span class="defense-shield-icon">🛡️</span>
          <span class="defense-btn-text">{{ t("How to Defend Projections (Q&A Script)") }}</span>
          <span class="defense-badge-pill">{{ t("4 Key Defenses") }}</span>
        </button>
      </div>
    </div>

    <!-- 3-Metric Executive Top Bar -->
    <div class="fin-kpi-bar">
      <div class="fin-kpi-card clickable-kpi" @click="openDefenseTopic('revenue')" :title="t('Click to defend Revenue growth')">
        <div class="kpi-head-row">
          <span class="fin-kpi-tag">{{ t("REVENUE TRAJECTORY") }}</span>
          <span class="kpi-hint">🛡️ {{ t("Defend") }}</span>
        </div>
        <div class="fin-kpi-val">Rp 6.75T → Rp 7.51T</div>
        <div class="fin-kpi-sub">{{ t("+11.4% Growth via 50 New Hyfresh Compact Stores & Dark Hubs") }}</div>
      </div>
      <div class="fin-kpi-card clickable-kpi" @click="openDefenseTopic('ebit')" :title="t('Click to defend EBIT turnaround')">
        <div class="kpi-head-row">
          <span class="fin-kpi-tag">{{ t("EBIT TURNAROUND") }}</span>
          <span class="kpi-hint">🛡️ {{ t("Defend") }}</span>
        </div>
        <div class="fin-kpi-val">-Rp 140B → +Rp 1,428B</div>
        <div class="fin-kpi-sub">{{ t("Projected turnaround assumes 50% gross margin (2020 actual: 19.4%)") }}</div>
      </div>
      <div class="fin-kpi-card clickable-kpi" @click="openDefenseTopic('debt')" :title="t('Click to defend Zero New Debt')">
        <div class="kpi-head-row">
          <span class="fin-kpi-tag">{{ t("STRATEGIC FINANCING") }}</span>
          <span class="kpi-hint">🛡️ {{ t("Defend") }}</span>
        </div>
        <div class="fin-kpi-val">{{ t("Zero New Debt Target") }}</div>
        <div class="fin-kpi-sub">{{ t("Zero new debt is a rollout target. The EPS / EBIT example uses Rp5B, separate from the Rp450B rollout budget.") }}</div>
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
              <tr class="clickable-row" @click="openDefenseTopic('revenue')" :title="t('Click to see how to defend revenue projections')">
                <td class="td-bold">
                  <span class="row-label-wrap">
                    {{ t("Revenues (Sales)") }}
                    <span class="row-def-pill">🛡️ {{ t("Defend") }}</span>
                  </span>
                </td>
                <td class="td-num">8,654,646</td>
                <td class="td-num">6,746,594</td>
                <td class="td-num td-proj">6,881,526</td>
                <td class="td-num td-proj">7,087,972</td>
                <td class="td-num td-proj td-highlight">7,513,250</td>
                <td class="td-desc">{{ t("+2% '21, +3% '22, +6% '23 driven by 50 compact Hyfresh stores") }}</td>
              </tr>
              <tr class="clickable-row" @click="openDefenseTopic('margin')" :title="t('Click to see how to defend 50% gross margin')">
                <td>
                  <span class="row-label-wrap">
                    {{ t("Cost of Goods Sold (COGS)") }}
                    <span class="row-def-pill">🛡️ {{ t("Defend 50%") }}</span>
                  </span>
                </td>
                <td class="td-num">7,074,249</td>
                <td class="td-num">5,439,936</td>
                <td class="td-num td-proj">3,440,763</td>
                <td class="td-num td-proj">3,543,986</td>
                <td class="td-num td-proj">3,756,625</td>
                <td class="td-desc" :data-margin-why='t("Direct sourcing can reduce intermediary costs. Better cold-chain handling can cut spoilage and markdowns. | Hyfresh can lift the sales mix if fresh products earn higher margins after waste. Exiting low-margin wholesale can also raise the average margin.")' :data-margin-basis='t("Matahari.xlsx, PART II, row 156 assumes COGS at 50% of sales. That implies a 50% gross margin, versus 19.4% in 2020. | A 1.5-point gain on fresh food at a 27.7% sales share adds about 0.4 points to total margin. The workbook gives no quantified bridge for the rest.")'>{{ t("50% of sales in the upside case. Direct sourcing and lower spoilage could reduce product costs.") }}</td>
              </tr>
              <tr class="row-subtotal clickable-row" @click="openDefenseTopic('margin')" :title="t('Click to see how to defend 50% gross margin')">
                <td class="td-bold">
                  <span class="row-label-wrap">
                    {{ t("Gross Profit") }}
                    <span class="row-def-pill">🛡️ {{ t("Defend 50%") }}</span>
                  </span>
                </td>
                <td class="td-num td-bold">1,580,397</td>
                <td class="td-num td-bold">1,306,658</td>
                <td class="td-num td-bold td-proj">3,440,763</td>
                <td class="td-num td-bold td-proj">3,543,986</td>
                <td class="td-num td-bold td-proj">3,756,625</td>
                <td class="td-desc td-bold" :data-margin-why='t("Direct sourcing can reduce intermediary costs. Better cold-chain handling can cut spoilage and markdowns. | Hyfresh can lift the sales mix if fresh products earn higher margins after waste. Exiting low-margin wholesale can also raise the average margin.")' :data-margin-basis='t("Matahari.xlsx, PART II, row 156 assumes COGS at 50% of sales. That implies a 50% gross margin, versus 19.4% in 2020. | A 1.5-point gain on fresh food at a 27.7% sales share adds about 0.4 points to total margin. The workbook gives no quantified bridge for the rest.")'>{{ t("The upside case assumes a 50% margin. A larger share of higher-margin fresh sales and less low-margin wholesale could lift the average.") }}</td>
              </tr>
              <tr class="clickable-row" @click="openDefenseTopic('opex')" :title="t('Click to see how to defend 31% OpEx assumption')">
                <td>
                  <span class="row-label-wrap">
                    {{ t("Operating Expenses (OpEx)") }}
                    <span class="row-def-pill">🛡️ {{ t("Defend 31%") }}</span>
                  </span>
                </td>
                <td class="td-num">1,776,502</td>
                <td class="td-num">1,446,926</td>
                <td class="td-num td-proj">2,133,273</td>
                <td class="td-num td-proj">2,197,271</td>
                <td class="td-num td-proj">2,329,108</td>
                <td class="td-desc">
                  <div>{{ t("2020 actual") }} <math style="vertical-align:middle"><mfrac><mtext>1,446,926</mtext><mtext>6,746,594</mtext></mfrac><mo>≈</mo><mtext>21.45%</mtext></math></div>
                  <div>{{ t("31% of sales · PART II, cells G158 / J158 / M158") }}</div>
                  <div>{{ t("The workbook does not build up the 31% rate from individual costs. Rp180B is a separate five-year lease-savings estimate.") }}</div>
                </td>
              </tr>
              <tr class="row-highlight clickable-row" @click="openDefenseTopic('ebit')" :title="t('Click to see how to defend Year 1 EBIT turnaround')">
                <td class="td-bold">
                  <span class="row-label-wrap">
                    {{ t("EBIT (Operating Income)") }}
                    <span class="row-def-pill">🛡️ {{ t("Defend Turnaround") }}</span>
                  </span>
                </td>
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
                <td class="td-num td-proj">1,776,827</td>
                <td class="td-num td-proj">2,657,042</td>
                <td class="td-num td-proj">3,623,609</td>
                <td class="td-desc">{{ t("Cash is the balancing figure in Projected Statements, row 19. A separate cash-flow forecast is needed to test funding.") }}</td>
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
                <td class="td-desc">{{ t("18% of each year’s forecast sales · PART II row 187. Entered as an assumption versus 1.15% in 2020.") }}</td>
              </tr>
              <tr class="row-subtotal">
                <td class="td-bold">{{ t("Total Current Assets") }}</td>
                <td class="td-num td-bold">1,904,047</td>
                <td class="td-num td-bold">1,535,266</td>
                <td class="td-num td-bold td-proj">3,978,915</td>
                <td class="td-num td-bold td-proj">4,925,193</td>
                <td class="td-num td-bold td-proj">6,027,849</td>
                <td class="td-desc td-bold">{{ t("Includes balancing cash. See Projected Statements, row 23.") }}</td>
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
                <td class="td-num td-bold td-proj">5,322,873</td>
                <td class="td-num td-bold td-proj">6,286,917</td>
                <td class="td-num td-bold td-proj">7,424,845</td>
                <td class="td-desc td-bold">{{ t("Sum of current and non-current assets. See Projected Statements, row 28.") }}</td>
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
              <tr class="clickable-row" @click="openDefenseTopic('debt')" :title="t('Click to defend Zero New Debt')">
                <td>
                  <span class="row-label-wrap">
                    {{ t("Long-Term Bank Debt") }}
                    <span class="row-def-pill">🛡️ {{ t("Defend Rp 0 Debt") }}</span>
                  </span>
                </td>
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
                <td class="td-num td-bold td-profit">985,512</td>
                <td class="td-num td-bold td-profit">1,819,495</td>
                <td class="td-num td-bold td-profit">2,689,498</td>
                <td class="td-desc td-profit">{{ t("Includes forecast retained earnings. See Projected Statements, row 43.") }}</td>
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
              <tr class="row-winner clickable-row" @click="openDefenseTopic('debt')" :title="t('Click to defend internal self-funding')">
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
        <span>{{ t("Under the upside assumptions, projected 2023 EBIT is Rp1.43T. Rollout funding requires a separate cash-flow test.") }}</span>
      </div>
      <div>
        <span class="cite-pill">{{ t("Excel Part II: Projected Statements, EPS_EBIT, Financial Statements") }}</span>
      </div>
    </div>
    <div class="component-slide-number">{{ slideNumber }}</div>

    <!-- DEFENSE GUIDE SLIDE-OVER DRAWER -->
    <transition name="drawer-fade">
      <div v-if="showDefenseGuide" class="defense-backdrop" @click="showDefenseGuide = false"></div>
    </transition>
    <transition name="drawer-slide">
      <aside v-if="showDefenseGuide" class="defense-drawer" role="dialog" aria-label="Financial Projections Defense Guide">
        <div class="drawer-header">
          <div class="drawer-header-title">
            <span class="drawer-tag">🛡️ {{ t("PROJECTIONS DEFENSE PLAYBOOK") }}</span>
            <h3>{{ t("How to Defend These Numbers in Q&A") }}</h3>
            <p>{{ t("Simple, bulletproof scripts if professors challenge your financial feasibility.") }}</p>
          </div>
          <button type="button" class="drawer-close-btn" @click="showDefenseGuide = false" aria-label="Close Defense Guide">✕</button>
        </div>

        <!-- Topic Switcher Pills -->
        <div class="defense-nav-pills">
          <button 
            type="button" 
            class="defense-pill" 
            :class="{ 'is-active': selectedDefenseTopic === 'margin' }" 
            @click="selectedDefenseTopic = 'margin'"
          >
            <span class="pill-num">1</span>
            <span>{{ t("50% Margin") }}</span>
          </button>
          <button 
            type="button" 
            class="defense-pill" 
            :class="{ 'is-active': selectedDefenseTopic === 'ebit' }" 
            @click="selectedDefenseTopic = 'ebit'"
          >
            <span class="pill-num">2</span>
            <span>{{ t("EBIT Swing") }}</span>
          </button>
          <button 
            type="button" 
            class="defense-pill" 
            :class="{ 'is-active': selectedDefenseTopic === 'opex' || selectedDefenseTopic === 'revenue' }" 
            @click="selectedDefenseTopic = 'opex'"
          >
            <span class="pill-num">3</span>
            <span>{{ t("OpEx & Sales") }}</span>
          </button>
          <button 
            type="button" 
            class="defense-pill" 
            :class="{ 'is-active': selectedDefenseTopic === 'debt' }" 
            @click="selectedDefenseTopic = 'debt'"
          >
            <span class="pill-num">4</span>
            <span>{{ t("Zero Debt") }}</span>
          </button>
        </div>

        <!-- Topic Content Body -->
        <div class="drawer-body">
          <!-- TOPIC 1: 50% GROSS MARGIN -->
          <div v-if="selectedDefenseTopic === 'margin'" class="defense-card">
            <div class="card-question-box">
              <span class="q-label">{{ t("THE TOUGH QUESTION PROFESSORS ASK:") }}</span>
              <p class="q-text">"{{ t("In 2020 gross margin was only 19.4%. How can it jump to 50% in 2021? Isn't 50% unrealistic for a grocery retailer?") }}"</p>
            </div>

            <div class="card-script-box">
              <span class="script-badge">⚡ {{ t("YOUR 15-SECOND ELEVATOR SCRIPT:") }}</span>
              <p class="script-text">
                "{{ t("First, professor, we must be academically transparent: this 50% gross margin is the illustrative upside scenario directly modeled in the course workbook (Matahari.xlsx Part II row 156). Second, the real-world operational drivers pushing margins up are format shift to high-margin fresh food (28–35%), direct farm cold-chain sourcing, and cutting low-margin wholesale. Third, even if margin only reaches a modest 25%, MPPA still achieves EBITDA break-even because our giant mall rents are cut in half.") }}"
              </p>
            </div>

            <div class="card-pillars">
              <span class="pillars-title">{{ t("3 Core Strategic Mechanisms Behind the Margin:") }}</span>
              <div class="pillar-row">
                <span class="pillar-icon">🥬</span>
                <div>
                  <strong>{{ t("1. Format Shift to Fresh Food (Hyfresh):") }}</strong>
                  <p>{{ t("Hyfresh neighborhood stores focus on fresh produce, meats, bakery, and ready-to-eat items. Fresh items earn 28%–35% gross margins compared to only 8%–12% in bulk packaged FMCG goods.") }}</p>
                </div>
              </div>
              <div class="pillar-row">
                <span class="pillar-icon">🚛</span>
                <div>
                  <strong>{{ t("2. Direct Farm Cold-Chain Sourcing:") }}</strong>
                  <p>{{ t("MPPA commands a 66,755 m² central Halal cold-chain network in Balaraja and Surabaya. Sourcing directly from local farmers eliminates expensive third-party distributor middlemen and slashes spoilage markdowns.") }}</p>
                </div>
              </div>
              <div class="pillar-row">
                <span class="pillar-icon">✂️</span>
                <div>
                  <strong>{{ t("3. Eliminating Wholesale Bleed (SmartClub):") }}</strong>
                  <p>{{ t("Liquidating sub-scale SmartClub wholesale removes high-volume, rock-bottom margin sales that dragged down MPPA's overall corporate gross margin.") }}</p>
                </div>
              </div>
            </div>

            <div class="card-safety-net">
              <span class="safety-tag">🛡️ {{ t("THE SENSITIVITY SAFETY NET (YOUR SHIELD):") }}</span>
              <p>{{ t("If professors insist 50% is too high, concede gracefully and show strategic mastery: 'We completely agree, professor. If we test a conservative 25% gross margin (industry average), MPPA still generates positive operating cash flow and survives because our fixed mall rent is cut by rightsizing 45 hypermarkets under PSAK 73.'") }}</p>
            </div>
          </div>

          <!-- TOPIC 2: EBIT TURNAROUND -->
          <div v-else-if="selectedDefenseTopic === 'ebit'" class="defense-card">
            <div class="card-question-box">
              <span class="q-label">{{ t("THE TOUGH QUESTION PROFESSORS ASK:") }}</span>
              <p class="q-text">"{{ t("MPPA suffered operating losses for 4 straight years (-Rp 140B in 2020). How can EBIT swing to +Rp 1.3T in Year 1?") }}"</p>
            </div>

            <div class="card-script-box">
              <span class="script-badge">⚡ {{ t("YOUR 15-SECOND ELEVATOR SCRIPT:") }}</span>
              <p class="script-text">
                "{{ t("The turnaround works via the 'Scissors Effect': Blade 1 adds high-velocity fresh gross margin from compact Hyfresh stores; Blade 2 immediately stops the cash bleed from giant mall hypermarkets by shrinking 45 stores from 6,000 m² to 2,500 m² and cutting empty lease liabilities under PSAK 73.") }}"
              </p>
            </div>

            <div class="card-pillars">
              <span class="pillars-title">{{ t("The 3 Operational Pillars of the EBIT Swing:") }}</span>
              <div class="pillar-row">
                <span class="pillar-icon">📐</span>
                <div>
                  <strong>{{ t("1. Stopping Empty-Space Bleed:") }}</strong>
                  <p>{{ t("In 2020, 100 giant Hypermarts burned operating cash on empty aisles and high HVAC utility bills. Downsizing 45 stores cuts unproductive square meters immediately.") }}</p>
                </div>
              </div>
              <div class="pillar-row">
                <span class="pillar-icon">🔄</span>
                <div>
                  <strong>{{ t("2. Rapid 7.1x Inventory Velocity:") }}</strong>
                  <p>{{ t("Hyfresh inventory turns over 7.1 times per year (vs 5.6x previously). Faster turnover means working capital is recovered into cash every 51 days rather than sitting on shelves.") }}</p>
                </div>
              </div>
              <div class="pillar-row">
                <span class="pillar-icon">📉</span>
                <div>
                  <strong>{{ t("3. Variable Turnover Leases:") }}</strong>
                  <p>{{ t("Renegotiating fixed mall leases to 12%–15% variable turnover rent lowers MPPA's operational break-even threshold, allowing every new sales rupiah to drop straight to EBIT.") }}</p>
                </div>
              </div>
            </div>

            <div class="card-safety-net">
              <span class="safety-tag">🛡️ {{ t("THE SENSITIVITY SAFETY NET (YOUR SHIELD):") }}</span>
              <p>{{ t("Even with Year 1 EBIT at a conservative +Rp 250B (instead of Rp 1.3T), MPPA comfortably covers its Rp 107B net interest expenses and restores Times-Interest-Earned (TIE) well above the BNI covenant floor of 2.0x.") }}</p>
            </div>
          </div>

          <!-- TOPIC 3: OPEX & REVENUE -->
          <div v-else-if="selectedDefenseTopic === 'opex' || selectedDefenseTopic === 'revenue'" class="defense-card">
            <div class="card-question-box">
              <span class="q-label">{{ t("THE TOUGH QUESTION PROFESSORS ASK:") }}</span>
              <p class="q-text">"{{ t("Why is revenue only growing +2% to +6% if you open 50 stores? And why does OpEx rise from 21.4% to 31% of sales?") }}"</p>
            </div>

            <div class="card-script-box">
              <span class="script-badge">⚡ {{ t("YOUR 15-SECOND ELEVATOR SCRIPT:") }}</span>
              <p class="script-text">
                "{{ t("Revenue growth is intentionally disciplined (+11.4% over 3 years) because we are replacing bad revenue with good revenue: shrinking giant hypermarkets drops low-margin sales while adding high-frequency fresh sales. OpEx at 31% proves our model is conservative, budgeting upfront for digital app fulfillment and staff training.") }}"
              </p>
            </div>

            <div class="card-pillars">
              <span class="pillars-title">{{ t("Why These Assumptions Are Prudent:") }}</span>
              <div class="pillar-row">
                <span class="pillar-icon">⚖️</span>
                <div>
                  <strong>{{ t("1. Revenue Substitution, Not Just Addition:") }}</strong>
                  <p>{{ t("Opening 50 compact Hyfresh stores adds ~Rp 750B in sales, while downsizing 45 hypermarkets and closing SmartClub sheds ~Rp 500B in low-margin bulk goods. Total revenue grows stably to Rp 7.51T.") }}</p>
                </div>
              </div>
              <div class="pillar-row">
                <span class="pillar-icon">🛡️</span>
                <div>
                  <strong>{{ t("2. OpEx Conservatively High at 31%:") }}</strong>
                  <p>{{ t("In 2020 actual OpEx was 21.45%. By projecting 31% (PART II row 158), the model provides a massive Rp 680B annual cost buffer for GrabMart/Shopee digital commissions, cold-logistics handling, and store fit-outs.") }}</p>
                </div>
              </div>
            </div>

            <div class="card-safety-net">
              <span class="safety-tag">🛡️ {{ t("THE SENSITIVITY SAFETY NET (YOUR SHIELD):") }}</span>
              <p>{{ t("If operational efficiencies drop OpEx back toward 24%–26%, operating profits expand even further. The 31% OpEx assumption protects our downside against unexpected launch friction.") }}</p>
            </div>
          </div>

          <!-- TOPIC 4: ZERO NEW DEBT -->
          <div v-else-if="selectedDefenseTopic === 'debt'" class="defense-card">
            <div class="card-question-box">
              <span class="q-label">{{ t("THE TOUGH QUESTION PROFESSORS ASK:") }}</span>
              <p class="q-text">"{{ t("How can an almost bankrupt retailer fund a 50-store expansion without taking a single rupiah of new bank loans?") }}"</p>
            </div>

            <div class="card-script-box">
              <span class="script-badge">⚡ {{ t("YOUR 15-SECOND ELEVATOR SCRIPT:") }}</span>
              <p class="script-text">
                "{{ t("Our 5-year Rp 450B rollout budget is 100% self-funded through 3 internal capital reallocation engines: Rp 120B from non-core asset sales (SmartClub & FMX), Rp 180B from PSAK 73 lease renegotiations, and Rp 150B from compact store operating cash flows. Bank debt is strictly avoided to protect BNI credit covenants.") }}"
              </p>
            </div>

            <div class="card-pillars">
              <span class="pillars-title">{{ t("The 3-Part Self-Funding Mathematical Match:") }}</span>
              <div class="pillar-row">
                <span class="pillar-icon">🏢</span>
                <div>
                  <strong>{{ t("1. Asset Divestment (+Rp 120B):" ) }}</strong>
                  <p>{{ t("Liquidating non-core SmartClub wholesale and 14 FMX kiosks frees up tied-up working capital and equipment cash.") }}</p>
                </div>
              </div>
              <div class="pillar-row">
                <span class="pillar-icon">📝</span>
                <div>
                  <strong>{{ t("2. PSAK 73 Lease Savings (+Rp 180B):") }}</strong>
                  <p>{{ t("Downsizing 45 hypermarkets from 6,000 m² to 2,500 m² cuts cash lease outlays by ~Rp 36B per year across 5 years.") }}</p>
                </div>
              </div>
              <div class="pillar-row">
                <span class="pillar-icon">💰</span>
                <div>
                  <strong>{{ t("3. Compact Store Cash Flow (+Rp 150B):") }}</strong>
                  <p>{{ t("Hyfresh stores break even in 6 months, contributing positive operating cash flow to fund the next wave of openings.") }}</p>
                </div>
              </div>
            </div>

            <div class="card-safety-net">
              <span class="safety-tag">🛡️ {{ t("THE COVENANT SHIELD (WHY NOT DEBT OR EQUITY?):") }}</span>
              <p>{{ t("Taking bank loans would breach BNI debt-to-equity covenant limits (ceiling 250%). Issuing equity at depressed penny-stock prices (Rp 102/share) causes catastrophic dilution. Internal self-funding is the textbook Fred David Stage 4 solution.") }}</p>
            </div>
          </div>
        </div>
      </aside>
    </transition>

  </div>
</template>

<script setup>
import { ref } from 'vue';

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
const showDefenseGuide = ref(false);
const selectedDefenseTopic = ref('margin');

function openDefenseTopic(topic) {
  selectedDefenseTopic.value = topic;
  showDefenseGuide.value = true;
}

function toggleDefenseGuide() {
  showDefenseGuide.value = !showDefenseGuide.value;
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
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 0.85cqw;
  gap: 0.7cqw;
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

.slide-subtitle {
  font-size: 0.86cqw;
  color: #475569;
  line-height: 1.25;
  margin: 0;
}

/* Controls row: flex between tabs and defense toggle */
.controls-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 0.8cqw;
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

/* Defense Guide Toggle Button */
.defense-toggle-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4cqw;
  background: #fff1f2;
  border: 1.5px solid #fecdd3;
  color: #b91c1c;
  font-size: 0.78cqw;
  font-weight: 800;
  padding: 0.32cqw 0.8cqw;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.18s ease;
  box-shadow: 0 1px 3px rgba(185, 28, 28, 0.08);
}
.defense-toggle-btn:hover {
  background: #ffe4e6;
  border-color: #fda4af;
  color: #991b1b;
  transform: translateY(-1px);
}
.defense-toggle-btn.is-active {
  background: #be123c;
  border-color: #be123c;
  color: #ffffff;
}
.defense-toggle-btn.is-active .defense-badge-pill {
  background: #ffffff;
  color: #be123c;
}
.defense-shield-icon {
  font-size: 0.95cqw;
}
.defense-badge-pill {
  font-size: 0.65cqw;
  background: #fecdd3;
  color: #9f1239;
  padding: 0.08cqw 0.38cqw;
  border-radius: 3px;
  font-weight: 800;
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
.clickable-kpi {
  cursor: pointer;
  transition: background-color 0.15s ease;
}
.clickable-kpi:hover {
  background: #fef2f2;
}
.clickable-kpi:hover .kpi-hint {
  opacity: 1;
  background: #dc2626;
  color: #ffffff;
}
.kpi-head-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.1cqw;
}
.fin-kpi-tag {
  color: #475569;
  font-size: 0.69cqw;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.kpi-hint {
  font-size: 0.60cqw;
  font-weight: 700;
  color: #b91c1c;
  background: #fee2e2;
  border-radius: 3px;
  padding: 0.05cqw 0.3cqw;
  opacity: 0.75;
  transition: all 0.15s ease;
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
.fin-table th.th-item { text-align: left; width:23%; }
.fin-table th:is(.th-hist,.th-proj){width:9%}
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

/* Clickable rows & defense pills */
.clickable-row {
  cursor: pointer;
  transition: background-color 0.12s ease;
}
.clickable-row:hover {
  background-color: #fef2f2 !important;
}
.clickable-row:hover .row-def-pill {
  background: #dc2626;
  color: #ffffff;
  border-color: #dc2626;
  opacity: 1;
}
.row-label-wrap {
  display: inline-flex;
  align-items: center;
  gap: 0.4cqw;
}
.row-def-pill {
  font-size: 0.60cqw;
  font-weight: 700;
  background: #fef2f2;
  color: #dc2626;
  border: 1px solid #fecaca;
  padding: 0.05cqw 0.3cqw;
  border-radius: 3px;
  opacity: 0.85;
  transition: all 0.15s ease;
  white-space: nowrap;
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

/* Defense Drawer & Backdrop */
.defense-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.28);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  z-index: 45;
}

.defense-drawer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 47cqw;
  background: #ffffff;
  box-shadow: -10px 0 35px rgba(15, 23, 42, 0.25);
  border-left: 3px solid #df0036;
  z-index: 50;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  animation: drawerSlideIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes drawerSlideIn {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

.drawer-header {
  padding: 0.9cqw 1.2cqw 0.7cqw;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.6cqw;
  flex-shrink: 0;
}
.drawer-tag {
  font-size: 0.68cqw;
  font-weight: 800;
  color: #df0036;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  display: block;
  margin-bottom: 0.1cqw;
}
.drawer-header h3 {
  margin: 0;
  font-size: 1.15cqw;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.2;
}
.drawer-header p {
  margin: 0.15cqw 0 0;
  font-size: 0.73cqw;
  color: #64748b;
  line-height: 1.25;
}
.drawer-close-btn {
  background: #e2e8f0;
  border: 0;
  color: #475569;
  width: 1.5cqw;
  height: 1.5cqw;
  border-radius: 50%;
  font-size: 0.82cqw;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.15s ease;
  flex-shrink: 0;
}
.drawer-close-btn:hover {
  background: #cbd5e1;
  color: #0f172a;
}

/* Nav Pills */
.defense-nav-pills {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.3cqw;
  padding: 0.45cqw 1.2cqw;
  background: #f1f5f9;
  border-bottom: 1px solid #e2e8f0;
  flex-shrink: 0;
}
.defense-pill {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3cqw;
  background: #ffffff;
  border: 1px solid #cbd5e1;
  color: #475569;
  font-size: 0.72cqw;
  font-weight: 700;
  padding: 0.3cqw 0.4cqw;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
}
.defense-pill:hover {
  background: #f8fafc;
  color: #0f172a;
}
.defense-pill.is-active {
  background: #df0036;
  border-color: #df0036;
  color: #ffffff;
}
.defense-pill.is-active .pill-num {
  background: #ffffff;
  color: #df0036;
}
.pill-num {
  font-size: 0.62cqw;
  background: #e2e8f0;
  color: #0f172a;
  width: 1.05cqw;
  height: 1.05cqw;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
}

/* Drawer Body */
.drawer-body {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 0.8cqw 1.2cqw 1.2cqw;
}
.defense-card {
  display: flex;
  flex-direction: column;
  gap: 0.65cqw;
}

.card-question-box {
  background: #fef2f2;
  border-left: 3px solid #dc2626;
  border-radius: 0 4px 4px 0;
  padding: 0.45cqw 0.7cqw;
}
.q-label {
  font-size: 0.64cqw;
  font-weight: 800;
  color: #b91c1c;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  display: block;
}
.q-text {
  font-size: 0.80cqw;
  font-weight: 700;
  color: #7f1d1d;
  margin: 0.15cqw 0 0;
  line-height: 1.3;
}

.card-script-box {
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 5px;
  padding: 0.55cqw 0.75cqw;
}
.script-badge {
  font-size: 0.65cqw;
  font-weight: 800;
  color: #15803d;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  display: block;
  margin-bottom: 0.1cqw;
}
.script-text {
  font-size: 0.78cqw;
  font-weight: 600;
  color: #166534;
  line-height: 1.38;
  margin: 0;
  font-style: italic;
}

.card-pillars {
  display: flex;
  flex-direction: column;
  gap: 0.45cqw;
}
.pillars-title {
  font-size: 0.70cqw;
  font-weight: 800;
  color: #334155;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.pillar-row {
  display: flex;
  gap: 0.45cqw;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 0.35cqw 0.55cqw;
}
.pillar-icon {
  font-size: 0.95cqw;
  flex-shrink: 0;
  margin-top: 0.05cqw;
}
.pillar-row strong {
  font-size: 0.76cqw;
  color: #0f172a;
  display: block;
}
.pillar-row p {
  font-size: 0.72cqw;
  color: #475569;
  line-height: 1.3;
  margin: 0.1cqw 0 0;
}

.card-safety-net {
  background: #eff6ff;
  border: 1px dashed #60a5fa;
  border-radius: 5px;
  padding: 0.45cqw 0.7cqw;
}
.safety-tag {
  font-size: 0.64cqw;
  font-weight: 800;
  color: #1d4ed8;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  display: block;
}
.card-safety-net p {
  font-size: 0.73cqw;
  color: #1e40af;
  line-height: 1.32;
  margin: 0.15cqw 0 0;
}

/* Transitions */
.drawer-fade-enter-active,
.drawer-fade-leave-active {
  transition: opacity 0.2s ease;
}
.drawer-fade-enter-from,
.drawer-fade-leave-to {
  opacity: 0;
}

.drawer-slide-enter-active,
.drawer-slide-leave-active {
  transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1);
}
.drawer-slide-enter-from,
.drawer-slide-leave-to {
  transform: translateX(100%);
}
</style>
