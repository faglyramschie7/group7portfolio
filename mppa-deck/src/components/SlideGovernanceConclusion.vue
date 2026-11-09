<template>
  <div class="governance-slide-wrapper">
    <!-- Header -->
    <div class="deck-kicker">{{ t("Strategic execution · Stage 4 · Fred David Ch. 7 & Ch. 9 framework") }}</div>
    <div class="slide-header-row">
      <div class="title-block">
        <h2 class="slide-title">{{ t("Turnaround Execution Roadmap & Executive Conclusion (2021–2025)") }}</h2>
        <p class="slide-subtitle">
          {{ t("Synthesizing Fred David's 4-stage strategic management framework into an unbroken golden thread, delivering self-funded profitability, debt covenant safety, and restored shareholder value.") }}
        </p>
      </div>

      <!-- Turnaround Status Badge -->
      <div class="exec-badge">
        <span class="badge-tag">{{ t("BOARDROOM RECOMMENDATION") }}</span>
        <span class="badge-val">{{ t("Unanimous Strategic Approval") }}</span>
      </div>
    </div>

    <!-- 3-Metric Executive Milestone Bar -->
    <div class="exec-kpi-bar">
      <div class="exec-kpi-card">
        <span class="exec-kpi-tag tag-blue">{{ t("PHASE 1: CAPITAL RELIEF") }}</span>
        <div class="exec-kpi-val">+Rp 300.0B Cash</div>
        <div class="exec-kpi-sub">{{ t("Rp 180B lease restructuring + Rp 120B non-core asset sales self-fund turnaround.") }}</div>
      </div>
      <div class="exec-kpi-card">
        <span class="exec-kpi-tag tag-green">{{ t("PHASE 2: FORMAT TRANSFORMATION") }}</span>
        <div class="exec-kpi-val">50 Hyfresh Stores</div>
        <div class="exec-kpi-sub">{{ t("High-margin fresh grocery (>35% mix) across 5 Java clusters + 45 dark fulfillment hubs.") }}</div>
      </div>
      <div class="exec-kpi-card">
        <span class="exec-kpi-tag tag-purple">{{ t("PHASE 3: EQUITY RECONSTITUTION") }}</span>
        <div class="exec-kpi-val">+Rp 2.50T Net Profit</div>
        <div class="exec-kpi-sub">{{ t("Restores equity from Rp 185B back to Rp 2.69T with zero shareholder dilution.") }}</div>
      </div>
    </div>

    <!-- Master Two-Column Strategic Synthesis Grid -->
    <div class="exec-grid">
      <!-- Left Column: 5-Year Phased Execution Roadmap -->
      <div class="roadmap-card">
        <div class="card-header">
          <span class="header-title">{{ t("5-Year Phased Implementation Roadmap (2021–2025)") }}</span>
          <span class="header-source">{{ t("Fred David Ch. 7 Strategy Implementation") }}</span>
        </div>
        <div class="roadmap-body">
          <!-- Phase 1 -->
          <div class="phase-block phase-1">
            <div class="phase-hdr">
              <span class="phase-tag">{{ t("PHASE 1 · 2021 (MONTHS 1–12)") }}</span>
              <strong class="phase-name">{{ t("Retrenchment & Solvency Stabilization") }}</strong>
            </div>
            <ul class="phase-tasks">
              <li><strong>{{ t("Executive Governance:") }}</strong> {{ t("Appoint Chief Operating Officer (COO) to relieve CFO from retail operations.") }}</li>
              <li><strong>{{ t("Asset Divestitures:") }}</strong> {{ t("Orderly liquidation of SmartClub wholesale & 14 FMX kiosks; unlock +Rp 120B cash.") }}</li>
              <li><strong>{{ t("Occupancy Relief:") }}</strong> {{ t("Renegotiate 15 anchor hypermarket mall leases; reduce annual PSAK 73 burden by Rp 36B.") }}</li>
              <li><strong>{{ t("Covenant Defense:") }}</strong> {{ t("Freeze bank borrowing; preserve BNI Rp 500B credit facility with TIE > 4.8x.") }}</li>
            </ul>
          </div>

          <!-- Phase 2 -->
          <div class="phase-block phase-2">
            <div class="phase-hdr">
              <span class="phase-tag">{{ t("PHASE 2 · 2022–2023 (MONTHS 13–36)") }}</span>
              <strong class="phase-name">{{ t("Core Format Rollout & O2O Dark Hub Retrofit") }}</strong>
            </div>
            <ul class="phase-tasks">
              <li><strong>{{ t("Hyfresh Expansion:") }}</strong> {{ t("Roll out 50 compact supermarkets (500–1,000 m²) across Java clusters (Rp 225B CapEx).") }}</li>
              <li><strong>{{ t("Dark Store Activation:") }}</strong> {{ t("Retrofit 45 oversized hypermarket backrooms into micro-fulfillment dark hubs (Rp 135B).") }}</li>
              <li><strong>{{ t("Supply Chain Direct:") }}</strong> {{ t("Direct farm contracting with 750+ Java growers; achieve 50.0% gross margin.") }}</li>
              <li><strong>{{ t("EBIT Turnaround:") }}</strong> {{ t("Generate +Rp 1,307B (2021) and +Rp 1,346B (2022) operating profit.") }}</li>
            </ul>
          </div>

          <!-- Phase 3 -->
          <div class="phase-block phase-3">
            <div class="phase-hdr">
              <span class="phase-tag">{{ t("PHASE 3 · 2024–2025 (MONTHS 37–60)") }}</span>
              <strong class="phase-name">{{ t("Market Leadership & Shareholder Value Harvest") }}</strong>
            </div>
            <ul class="phase-tasks">
              <li><strong>{{ t("Omnichannel Scale:") }}</strong> {{ t("Expand 30-minute rapid delivery to 25%+ of total revenue via GrabMart & Shopee.") }}</li>
              <li><strong>{{ t("Cold Logistics Moat:") }}</strong> {{ t("Maximize 66,755 m² central DC throughput; lower shrinkage below 1.2%.") }}</li>
              <li><strong>{{ t("Free Cash Flow:") }}</strong> {{ t("Achieve negative cash conversion cycle; restore positive retained earnings.") }}</li>
              <li><strong>{{ t("Dividend Resumption:") }}</strong> {{ t("Resume conservative dividend payouts once accumulated deficit is fully erased.") }}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Right Column: The Fred David "Single Thread" Synthesis -->
      <div class="synthesis-card">
        <div class="card-header">
          <span class="header-tag">{{ t("THE STRATEGIC GOLDEN THREAD") }}</span>
          <h3 class="synthesis-title">{{ t("Complete 4-Stage Framework Harmonization") }}</h3>
        </div>
        <div class="synthesis-body">
          <div class="thread-step">
            <div class="step-num">1</div>
            <div class="step-content">
              <strong>{{ t("Stage 1: Input Matrices (IFE = 2.36 · EFE = 2.68 · CPM)") }}</strong>
              <p>{{ t("Exposed dangerous exposure to oversized mall leases (PSAK 73: Rp 2.25T) and identified massive growth in neighborhood fresh perishable grocery demand.") }}</p>
            </div>
          </div>

          <div class="thread-step">
            <div class="step-num">2</div>
            <div class="step-content">
              <strong>{{ t("Stage 2: Matching Matrices (SPACE · BCG · IE · GSM)") }}</strong>
              <p>{{ t("All 4 matrices aligned: SPACE mandated Defensive retrenchment (-1.0, -0.6); BCG classified Hypermart as transitioning Cash Cow/Dog; IE placed MPPA in Cell V.") }}</p>
            </div>
          </div>

          <div class="thread-step">
            <div class="step-num">3</div>
            <div class="step-content">
              <strong>{{ t("Stage 3: Decision Matrix (QSPM: TAS 6.620 vs. 5.460)") }}</strong>
              <p>{{ t("Quantitatively proved Strategy 1 (Hyfresh compact rollout) decisively beats pure hypermarket rightsizing (+1.160 point lead), while retaining rightsizing as a self-funder.") }}</p>
            </div>
          </div>

          <div class="thread-step highlight-step">
            <div class="step-num step-star">4</div>
            <div class="step-content">
              <strong>{{ t("Stage 4: Implementation, Governance & Finance") }}</strong>
              <p>{{ t("Created COO format-level SBUs; self-funded Rp 450B CapEx with Rp 0 bank debt; preserved BNI covenants (TIE 5.3x); reconstituted equity from Rp 185B to Rp 2.69T.") }}</p>
            </div>
          </div>

          <!-- Boardroom Sign-off Callout -->
          <div class="signoff-box">
            <div class="signoff-tag">{{ t("EXECUTIVE BOARD RESOLUTION") }}</div>
            <p>{{ t("The strategic turnaround of PT Matahari Putra Prima Tbk is fully formulated, mathematically validated across all pro forma statements, and ready for immediate boardroom adoption.") }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer / Sources Bar -->
    <div class="gov-footer-bar">
      <div class="footer-left">
        <strong>{{ t("Final Conclusion:") }}</strong>
        <span>{{ t("100% self-funded, covenant-compliant, and operationally rigorous turnaround strategy for PT Matahari Putra Prima Tbk (MPPA).") }}</span>
      </div>
      <div class="footer-right">
        <span class="cite-pill">{{ t("Fred David Ch. 7, 8 & 9 · Case 23 pp. 587–596 · Slide 36 / 36") }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
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
</script>

<style scoped>
.governance-slide-wrapper {
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
.governance-slide-wrapper::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0.65cqw;
  background: #df0036;
}

.governance-slide-wrapper::after {
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

.exec-badge {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: #fdf2f4;
  border: 1px solid #fecdd3;
  border-radius: 4px;
  padding: 0.2cqw 0.6cqw;
  flex-shrink: 0;
}

.badge-tag {
  font-size: 0.46cqw;
  font-weight: 800;
  color: #df0036;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.badge-val {
  font-size: 0.62cqw;
  font-weight: 800;
  color: #9f1239;
}

/* 3-Metric Top Bar */
.exec-kpi-bar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75cqw;
  margin-bottom: 0.4cqw;
}

.exec-kpi-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 0.35cqw 0.75cqw;
  display: flex;
  flex-direction: column;
}

.exec-kpi-tag {
  font-size: 0.5cqw;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 0.1cqw;
}

.tag-blue { color: #0284c7; }
.tag-green { color: #15803d; }
.tag-purple { color: #7c3aed; }

.exec-kpi-val {
  font-size: 1.05cqw;
  font-weight: 900;
  color: #0f172a;
  line-height: 1.15;
}

.exec-kpi-sub {
  font-size: 0.56cqw;
  color: #64748b;
  line-height: 1.2;
}

/* Master Grid */
.exec-grid {
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: 0.75cqw;
  flex: 1;
  min-height: 0;
}

.roadmap-card {
  background: #ffffff;
  border: 1.5px solid #e2e8f0;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.card-header {
  padding: 0.3cqw 0.75cqw;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-title {
  font-size: 0.62cqw;
  font-weight: 800;
  color: #0f172a;
}

.header-source {
  font-size: 0.52cqw;
  color: #64748b;
}

.roadmap-body {
  padding: 0.4cqw 0.65cqw;
  display: flex;
  flex-direction: column;
  gap: 0.35cqw;
  flex: 1;
  overflow-y: auto;
}

.phase-block {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-left: 3.5px solid #cbd5e1;
  border-radius: 4px;
  padding: 0.3cqw 0.5cqw;
}

.phase-1 { border-left-color: #df0036; background: #fffdfd; }
.phase-2 { border-left-color: #0284c7; background: #f0f9ff; }
.phase-3 { border-left-color: #16a34a; background: #f0fdf4; }

.phase-hdr {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.15cqw;
}

.phase-tag {
  font-size: 0.46cqw;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.phase-1 .phase-tag { color: #df0036; }
.phase-2 .phase-tag { color: #0284c7; }
.phase-3 .phase-tag { color: #16a34a; }

.phase-name {
  font-size: 0.6cqw;
  color: #0f172a;
}

.phase-tasks {
  margin: 0;
  padding-left: 1cqw;
  font-size: 0.54cqw;
  line-height: 1.3;
  color: #475569;
}

.phase-tasks li {
  margin-bottom: 0.08cqw;
}

.phase-tasks strong {
  color: #1e293b;
}

/* Right Column: Synthesis Card */
.synthesis-card {
  background: #ffffff;
  border: 1.5px solid #e2e8f0;
  border-radius: 6px;
  padding: 0.4cqw 0.75cqw;
  display: flex;
  flex-direction: column;
}

.header-tag {
  font-size: 0.48cqw;
  font-weight: 800;
  color: #df0036;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  display: block;
  margin-bottom: 0.08cqw;
}

.synthesis-title {
  font-size: 0.78cqw;
  font-weight: 800;
  color: #0f172a;
  margin: 0;
}

.synthesis-body {
  display: flex;
  flex-direction: column;
  gap: 0.3cqw;
  flex: 1;
  margin-top: 0.3cqw;
}

.thread-step {
  display: flex;
  gap: 0.4cqw;
  align-items: flex-start;
  background: #f8fafc;
  border: 1px solid #f1f5f9;
  border-radius: 4px;
  padding: 0.25cqw 0.45cqw;
}

.thread-step.highlight-step {
  background: #f0fdf4;
  border-color: #86efac;
}

.step-num {
  width: 1cqw;
  height: 1cqw;
  border-radius: 50%;
  background: #e2e8f0;
  color: #0f172a;
  font-size: 0.54cqw;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 0.05cqw;
}

.step-star {
  background: #16a34a;
  color: #ffffff;
}

.step-content strong {
  font-size: 0.6cqw;
  color: #0f172a;
  display: block;
}

.step-content p {
  font-size: 0.52cqw;
  color: #475569;
  line-height: 1.25;
  margin: 0.05cqw 0 0;
}

.highlight-step .step-content strong {
  color: #15803d;
}

.signoff-box {
  background: #fdf2f4;
  border: 1px solid #fecdd3;
  border-radius: 4px;
  padding: 0.3cqw 0.5cqw;
  margin-top: auto;
}

.signoff-tag {
  font-size: 0.48cqw;
  font-weight: 800;
  color: #df0036;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 0.05cqw;
}

.signoff-box p {
  font-size: 0.52cqw;
  color: #9f1239;
  line-height: 1.25;
  margin: 0;
  font-weight: 600;
}

/* Footer Bar */
.gov-footer-bar {
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

.gov-footer-bar strong {
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
