# PROJECT HANDOFF & CONTINUATION GUIDE
**PT Matahari Putra Prima Tbk (MPPA) — Strategic Management Case Study**
*Course: Corporate Strategy (Semester 3) | Group 7*
*Repository:* `git@github.com:faglyramschie7/group7portfolio.git` (Branch: `main`)
*Last Updated:* November 9, 2026 (Commit: `c8052c0` & subsequent handoff commit)

---

## 1. Executive Summary & Project Baseline

This repository houses the complete interactive web-based case analysis and 30-slide board presentation for **PT Matahari Putra Prima Tbk (MPPA)**. The study applies the complete strategic management formulation framework by **Fred R. David & Forest R. David** (*Strategic Management: A Competitive Advantage Approach, Concepts and Cases*, Pearson 17th/18th Ed.).

- **Baseline Year:** FY2020 (Textbook Case 23 pp. 588–596; Audited MPPA 2020 & 2019 Annual Reports).
- **Planning Horizon:** 2021–2025 (5-Year Strategic Transformation Plan).
- **Central Core Tension:** MPPA suffered severe sales declines (-22% in 2020 to Rp 6.75T) and liquidity drain due to oversized hypermarkets (6,000–8,000 m² floorplates) burdened by massive long-term mall leases (PSAK 73 lease liabilities of Rp 2,253.2B in Note 19) and heavy interest expenses. The central mandate is executing a **100% self-funded turnaround** into high-yield neighborhood fresh supermarkets (Hyfresh) and on-demand dark stores without violating Bank Negara Indonesia (BNI) debt rollover covenants (Note 15) or requiring external shareholder dilution.

---

## 2. Repository File Structure & Setup

```
CASE STUDY PRESENTATION/
├── mppa-case-study.html          # Core application (Notes, PowerPoint, Ideas Board, Handoff)
├── Matahari.xlsx                 # Complete workbook model (Financials, IFE, EFE, CPM, SPACE, BCG, IE, GSM, QSPM)
├── assets/
│   ├── translations-id.js        # Full Indonesian localization dictionary
│   ├── styles.css & mppa.css     # Design tokens, typography, executive layouts
│   ├── vue.global.prod.js        # Standalone Vue 3 runtime (ZERO build steps needed)
│   └── [photos & logos]          # Real MPPA store photography and brand marks
├── sources/                      # Evidence ledgers in JSON (PESTLE, Five Forces, CPM)
├── AR2020.pdf & AR2019.pdf       # Audited Primary Annual Reports
├── Fred David - Strategic...pdf  # Textbook framework reference
├── README.md                     # General repository documentation
└── HANDOFF.md                    # This master handoff document
```

### Zero-Build Architecture
- **No `npm install`, `vite`, or `webpack` needed!** The application runs 100% in pure HTML5, CSS3, and standalone Vue 3 runtime (`assets/vue.global.prod.js`).
- Open `mppa-case-study.html` in any modern browser (Chrome, Edge, Safari, Firefox) to run the full application offline.

---

## 3. Current Completed State (All 30 Slides)

### Stage 1: Input Stage
- **Slides 1–8: Corporate Profile & Financial Baseline:** Revenue mix (Hypermart 84.5%, Foodmart/Primo 10.3%, Hyfresh 5.2%), historical turnaround milestones, store format economics.
- **Slides 9–14: External Macro Environment:** PESTLE analysis, digital grocery retail adoption, food waste/loss economics (Bappenas study).
- **Slides 15–18: Industry Competition:** Porter's Five Forces, 6-firm Competitive Profile Matrix (CPM) comparing MPPA against Indomaret, Alfamart, Transmart, Alfamidi, and LotteMart Indonesia.
- **Slides 19–20: Audited Matrix Weights:** External Factor Evaluation (EFE = 2.68) and Internal Factor Evaluation (IFE = 2.36).

### Stage 2: Matching Stage
- **Slide 21: TOWS / SWOT Matrix:** 8 actionable strategic clusters matching internal strengths/weaknesses with external opportunities/threats.
- **Slide 22: SPACE Matrix:** Vector (X: -1.0, Y: -0.6) positioning MPPA in the **Defensive Quadrant**, mandating retrenchment, cost reduction, and selective market penetration.
- **Slide 23: BCG Growth-Share Matrix:** Hypermart identified as a cash-draining "Dog/Cash Cow" transition, with Hyfresh positioned as a rapid-growth "Star/Question Mark".
- **Slide 24: Internal-External (IE) Matrix:** MPPA corporate plots in Cell V (Hold and Maintain), with Hyfresh in Cell II (Grow and Build) and SmartClub/FMX in Cell IX (Harvest/Divest).
- **Slide 25: Grand Strategy Matrix (GSM):** Corporate MPPA in Quadrant III (Slow Growth, Weak Position) requiring retrenchment, while Hyfresh sits in Quadrant II.

### Stage 3: Decision Stage
- **Slide 26: Quantitative Strategic Planning Matrix (QSPM):**
  - **Strategy 1 (Accelerate Hyfresh Compact Store Rollout & 'Hy-' Consolidation):** Total Attractiveness Score (TAS) = **6.620** (Decisive Winner).
  - **Strategy 2 (Rightsizing Hypermarkets into Hybrid O2O Dark Stores):** TAS = **5.460** (Retained as operational self-funding enabler).

### Stage 4: Implementation & Financial Feasibility
- **Slide 28: Stage 2 Matching Strategy Taxonomy:** Comprehensive breakdown of Intensive Growth, Defensive Restructuring, and Supply Chain Integration.
- **Slide 29: Strategic Recommendations (The Transformation Triad):**
  1. *Strategy 1 (Primary Growth):* Deploy 50 compact neighborhood Hyfresh stores (500–1,000 m²).
  2. *Strategy 2 (Operational Efficiency):* Downsize 45 hypermarkets from 7,000 m² to 2,500–3,500 m², retrofitting backrooms into cold-chain dark fulfillment hubs (GrabMart, Shopee, Tokopedia).
  3. *Strategy 3 (Balance Sheet Protection):* Convert fixed mall leases under PSAK 73 to variable turnover rent, and liquidate non-core assets (SmartClub & FMX).
- **Slide 30: Capital Budgeting & Self-Funding Model (2021–2025):** Detailed below.

---

## 4. Slide 30 Architecture: Dual-Tab Master Model

Slide 30 is built with an interactive dual-tab sub-navigation allowing the board to inspect both the **audit-grade financial accounting** and the **geospatial physical store expansion map**:

```
Slide 30 Sub-Navigation
├── Tab 1: [📊 Sources & Uses Budgeting]
└── Tab 2: [🗺️ Store Rollout Expansion Map (50 Hyfresh & 45 Dark Stores)]
```

### Tab 1: Sources & Uses Budgeting Model
- **Capital Discipline:** Strict **Rp 450.0 Billion** 5-Year Capital Budget (~Rp 90.0B/year deployment).
- **100% Self-Funded (Rp 0 External Bank Debt):**
  - `+Rp 180.0B` (40.0%): PSAK 73 / IFRS 16 lease renegotiation savings across 15 anchor mall leases (~Rp 36B/yr cash relief).
  - `+Rp 150.0B` (33.3%): Reinvested positive operational EBITDA from rightsized stores and Hyfresh cash generation.
  - `+Rp 120.0B` (26.7%): Asset liquidation proceeds from divesting 2 SmartClub wholesale centers and 14 subscale FMX kiosks.
- **Capital Uses (Deployment):**
  - `Rp 225.0B` (50.0%): Fit-out of 50 new Hyfresh compact supermarkets (@ Rp 4.5B avg unit cost).
  - `Rp 135.0B` (30.0%): Retrofitting 45 large hypermarket backrooms into dark fulfillment hubs (@ Rp 3.0B avg unit cost).
  - `Rp 90.0B` (20.0%): Cold-chain distribution center modernization and omnichannel inventory routing.
- **Audit-Grade Accounting Inspector:**
  - Double-entry ledger flows: `Debit: Lease Liabilities (Rp 180.0B) | Credit: Financing Cash Flow Relief`.
  - Financial references: AR2020 Notes 12, 15, 19, 20 & 28.
  - Credit Covenants: Preserves BNI Rp 500B credit facility rollover covenants by keeping Debt/Equity < 2.5x (declining to 0.45x) and Interest Coverage > 2.0x (improving to 3.85x).

### Tab 2: Store Rollout Expansion Map & Logistics Network
- **Interactive Geospatial SVG Map:** High-definition contours of the Indonesian archipelago with focus on the **Java Economic Spine (88% of rollout / 44 stores)**.
- **3 Central Cold-Chain Distribution Centers:**
  1. 🔷 **Balaraja Central DC** (31,500 m² - Banten/Jabodetabek, Halal multi-temp facility).
  2. 🔷 **Surabaya DC** (22,255 m² - East Java, Central Java, Bali regional hub).
  3. 🔷 **Medan / Siborong-borong Hub** (13,000 m² - North Sumatra consolidation).
- **5 Geographic Expansion Clusters (Interactive Filter & Pins):**
  - **Jabodetabek & Banten (Cluster 1):** 22 Stores (44% · Rp 99.0B) + 18 Dark Hubs | Catchments: BSD City, Bintaro Jaya, Alam Sutera, Harapan Indah, Grand Galaxy, Sentul.
  - **Greater Bandung & West Java (Cluster 2):** 8 Stores (16% · Rp 36.0B) + 7 Dark Hubs | Catchments: Bandung Timur, Cimahi, Cirebon, Karawang. Lembang farm-direct sourcing.
  - **Central Java & DIY (Cluster 3):** 8 Stores (16% · Rp 36.0B) + 5 Dark Hubs | Catchments: Semarang (Banyumanik), Solo, Sleman/Yogyakarta, Kudus.
  - **East Java & Surabaya (Cluster 4):** 8 Stores (16% · Rp 36.0B) + 8 Dark Hubs | Catchments: Surabaya (Citraland, Rungkut), Sidoarjo, Malang. Direct Batu fruit/dairy links.
  - **Bali & Outer Islands (Cluster 5):** 4 Stores (8% · Rp 18.0B) + 7 Dark Hubs | Catchments: Denpasar/Badung (Bali), Medan, Makassar.
- **Dynamic Regional Inspector:** Shows live metrics, target catchments, cold-chain routing mechanics, 5-year opening schedule (2021–2025), and competitive moats.
- **Bottom 5-Cluster Deployment Grid:** Eliminates vertical whitespace, matching the exact height of Tab 1 (~520px).

---

## 5. Bilingual Support (EN & ID)

The entire presentation is 100% localized in:
- 🇬🇧 **English (EN)**
- 🇮🇩 **Indonesian (ID)** (via `assets/translations-id.js`)

Toggle between languages at any time using the header pills (`🇮🇩 ID` / `🇬🇧 EN`) or keyboard controls. All charts, inspectors, tooltips, and map details translate synchronously.

---

## 6. How to Continue Work on Another Computer

### Step 1: Pull Latest Repository
```bash
cd "CASE STUDY PRESENTATION"
git pull origin main
```
Verify that `git log -1` shows commit `c8052c0` (or the subsequent handoff commit).

### Step 2: Open Presentation in Browser
```bash
# macOS
open mppa-case-study.html

# Windows
start mppa-case-study.html

# Linux
xdg-open mppa-case-study.html
```

### Step 3: Quick Navigation Shortcuts (Browser Console)
You can directly control the Vue presentation from the browser developer console (`F12` or `Cmd+Option+I`):
```javascript
// Switch to PowerPoint Presentation View
window.setView('powerpoint');

// Jump directly to Slide 30 (0-indexed: index 29)
window.showSlide(29);

// Switch between Slide 30 tabs
window.switchCapexTab('budget'); // Tab 1: Financial Budgeting
window.switchCapexTab('map');    // Tab 2: Geospatial Map

// Select specific map regions in Tab 2
window.selectMapRegion('jabo');  // Jabodetabek
window.selectMapRegion('wjava'); // West Java
window.selectMapRegion('cjava'); // Central Java
window.selectMapRegion('ejava'); // East Java
window.selectMapRegion('outer'); // Bali & Outer
window.selectMapRegion('all');   // National View

// Toggle Language
// Click the ID / EN button in the top header
```

### Step 4: Verification Check (Playwright / Node)
If Python and Playwright are installed on the new machine:
```bash
python3 -c "
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={'width': 1920, 'height': 1080})
    page.goto('file://' + __import__('os').path.abspath('mppa-case-study.html'))
    page.evaluate('window.setView(\"powerpoint\"); window.showSlide(29);')
    page.screenshot(path='test_slide30.png')
    print('Slide 30 rendered with 0 errors!')
"
```

---

## 7. Key Data Grounding & Citations

1. **Lease Liabilities & PSAK 73:**
   - AR2020 Note 19: Present value of future lease payments = Rp 2,253.2B.
   - AR2020 Note 28: Rental expense of Rp 166.2B in FY2020. Renegotiating 15 anchor leases provides ~Rp 36B/year cash relief.
2. **Bank Credit Facilities & Covenants:**
   - AR2020 Note 15: PT Bank Negara Indonesia (Persero) Tbk (BNI) short-term and investment facilities (Rp 500.0B). Covenants require Debt/Equity < 2.5x and Interest Coverage > 2.0x.
3. **Logistics Footprint:**
   - AR2020 p. 6 & Exhibit 6: 611,490 m² total retail space across 73 cities. Central Cold Distribution Centers in Balaraja (31,500 m²), Surabaya (22,255 m²), and Siborong-borong (13,000 m²).

---

## 8. Git Status & Log Reference
- **Active Branch:** `main`
- **Remote:** `origin/main` (`https://github.com/faglyramschie7/group7portfolio.git`)
- **Working Tree:** Clean (all files staged, committed, and pushed).
