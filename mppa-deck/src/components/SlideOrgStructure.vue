<template>
  <div class="org-slide-wrapper">
    <!-- Header -->
    <div class="deck-kicker">{{ t("Strategic governance · Stage 4 · Fred David Ch. 7 framework") }}</div>
    <div class="org-slide-header-row">
      <div class="header-titles">
        <h2 class="org-slide-title">{{ t("Proposed Organizational Structure: Divisional Design by Format") }}</h2>
        <p class="org-slide-subtitle">
          {{ t("Restructured under Fred David Chapter 7 & Case pp. 587–588: Resolving CEO Elliot Dickson's span bottleneck via a dedicated COO, instituting 4 format-level SBU profit centers, and elevating cold logistics and omnichannel enablers.") }}
        </p>
      </div>

      <!-- Controls: Fit, Expand, Zoom -->
      <div class="chart-toolbar">
        <button type="button" @click="handleFit" class="tool-btn" :title="t('Fit to Screen')">
          <span>⛶</span> {{ t('Fit') }}
        </button>
        <button type="button" @click="handleZoomIn" class="tool-btn icon-btn" :title="t('Zoom In')">＋</button>
        <button type="button" @click="handleZoomOut" class="tool-btn icon-btn" :title="t('Zoom Out')">－</button>
        <button type="button" @click="handleExpandAll" class="tool-btn" :title="t('Expand All Nodes')">
          {{ t('Expand All') }}
        </button>
      </div>
    </div>

    <!-- D3 Org Chart Canvas -->
    <div class="chart-wrapper">
      <div ref="chartContainer" class="chart-container"></div>
    </div>

    <!-- Focus / Strategic Single-Thread Footer Bar -->
    <div class="org-focus-bar">
      <div class="focus-title">
        <span class="focus-tag">{{ selectedDetail.badge }}</span>
        <strong>{{ selectedDetail.title }}</strong>
        <span class="focus-desc">{{ selectedDetail.mandate }}</span>
      </div>
      <div class="focus-cite">
        <span class="cite-pill">{{ t("Case pp. 587–588, Exhibit 1 · Fred David Strategic Management Ch. 7") }}</span>
      </div>
    </div>
    <dialog ref="detailDrawer" class="matrix-detail" aria-labelledby="org-detail-title"
      @click.self="detailDrawer.close()">
      <header class="matrix-detail-head">
        <div class="matrix-detail-head-main">
          <span class="matrix-kind-badge">{{ selectedNode.tag }}</span>
          <h3 id="org-detail-title">{{ selectedNode.role }}</h3>
          <strong>{{ selectedNode.name }}</strong>
        </div>
        <button type="button" class="matrix-detail-close" :aria-label="language === 'id' ? 'Tutup' : 'Close'"
          @click="detailDrawer.close()" autofocus>×</button>
      </header>
      <div ref="detailContent" class="org-detail-content">
        <section class="org-at-a-glance">
          <h4>{{ language === 'id' ? 'Ringkasan peran' : 'At a glance' }}</h4>
          <p>{{ selectedNode.desc }}</p>
          <p><strong>{{ selectedNode.kpi }}</strong></p>
        </section>
        <figure class="org-detail-photo">
          <img :src="'assets/' + selectedPhoto.file" alt="">
          <figcaption>{{ selectedPhoto.caption }}</figcaption>
        </figure>
        <section>
          <h4>{{ language === 'id' ? 'Tanggung jawab' : 'What they do' }}</h4>
          <p>{{ selectedNode.responsibilities }}</p>
        </section>
        <section>
          <h4>{{ language === 'id' ? 'Alasan peran ini dibentuk' : 'Why this role is in the proposed structure' }}</h4>
          <p>{{ selectedNode.rationale }}</p>
        </section>
        <section v-if="reportingRole">
          <h4>{{ language === 'id' ? 'Melapor kepada' : 'Reports to' }}</h4>
          <p>{{ reportingRole }}</p>
        </section>
        <section v-if="directReports.length">
          <h4>{{ language === 'id' ? 'Bawahan langsung' : 'Direct reports' }}</h4>
          <ul>
            <li v-for="report in directReports" :key="report.id">{{ report.role }}</li>
          </ul>
        </section>
        <p class="org-detail-source">{{ t("Case pp. 587–588, Exhibit 1 · Fred David Strategic Management Ch. 7") }}</p>
      </div>
    </dialog>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, computed, nextTick } from 'vue';
import { OrgChart } from 'd3-org-chart';

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

const chartContainer = ref(null);
const detailDrawer = ref(null);
const detailContent = ref(null);
const rolePhotos = {
  board: ['mall-anchor.jpg', 'Mall locations illustrate the lease exposure the board oversees.', 'Lokasi mal menggambarkan risiko sewa yang diawasi dewan.'],
  ceo: ['foodmart-store.jpg', 'Foodmart illustrates the retail portfolio the CEO must prioritize.', 'Foodmart menggambarkan portofolio ritel yang menjadi tanggung jawab CEO.'],
  cfo: ['mall-anchor.jpg', 'Mall leases are a focus of the CFO’s cash and covenant planning.', 'Sewa gerai di mal menjadi fokus perencanaan kas dan kovenan CFO.'],
  coo: ['hypermart-store.jpg', 'Hypermart illustrates the store operations the COO coordinates across formats.', 'Hypermart menggambarkan operasi gerai lintas format yang dikoordinasikan COO.'],
  cio: ['dark-store.jpg', 'Digital fulfillment relies on the order and inventory systems the CIO integrates.', 'Pemenuhan pesanan digital bergantung pada integrasi sistem pesanan dan persediaan oleh CIO.'],
  chro: ['supermarket-checkout.jpg', 'Store operations illustrate where staffing and retraining are put into practice.', 'Operasi gerai menggambarkan penerapan penempatan staf dan pelatihan ulang.'],
  sbu1: ['hyfresh-store.jpg', 'Hyfresh is the compact supermarket format this team expands.', 'Hyfresh adalah format supermarket kompak yang dikembangkan tim ini.'],
  sbu2: ['hypermart-store.jpg', 'Hypermart is the format targeted for store resizing and fulfillment conversions.', 'Hypermart adalah format yang ditargetkan untuk penyesuaian luas gerai dan konversi ruang penyiapan pesanan.'],
  sbu3: ['primo-store.jpg', 'Foodmart Primo represents the premium formats managed by this unit.', 'Foodmart Primo mewakili format premium yang dikelola unit ini.'],
  sbu4: ['fmx-store.jpg', 'FMX is one of the non-core formats in the proposed exit plan.', 'FMX adalah salah satu format non-inti dalam rencana pelepasan.'],
  enablers: ['dark-store.jpg', 'Dark hubs illustrate a shared capability used by the retail formats.', 'Dark hub menggambarkan fasilitas bersama yang digunakan berbagai format ritel.'],
  logistics: ['cold-storage.jpg', 'Temperature-controlled storage illustrates the team’s cold-chain responsibilities.', 'Penyimpanan bersuhu terkendali menggambarkan tanggung jawab tim atas rantai dingin.'],
  omni: ['dark-store.jpg', 'Dark hubs prepare online orders for delivery.', 'Dark hub menyiapkan pesanan daring untuk dikirim.'],
  procurement: ['hyfresh-store.jpg', 'Hyfresh is a retail outlet for the fresh assortment this team sources.', 'Hyfresh menjual produk segar yang dipasok oleh tim pengadaan.']
};
let chartInstance = null;
const selectedNodeId = ref('coo');

// Define Tree Data
const treeData = computed(() => {
  const isId = props.language === 'id';
  return [
    // Tier 1: Governance
    {
      id: 'board',
      parentId: '',
      role: isId ? 'Dewan Komisaris' : 'Board of Commissioners',
      name: isId ? 'Pengawasan Independen' : 'Independent Oversight',
      tag: isId ? 'TATA KELOLA KORPORAT' : 'GOVERNANCE & AUDIT',
      theme: '#475569',
      bg: '#f8fafc',
      desc: isId ? 'Komite Audit & Risiko · Pemisahan Pihak Berelasi Lippo' : 'Audit & Risk Committee · Public Governance Separation',
      responsibilities: isId ? "Menelaah rencana pemulihan, pelaporan keuangan, dan risiko utama melalui komite audit dan risiko." : "Reviews management’s turnaround plan, financial reporting, and major risks through the audit and risk committee.",
      rationale: isId ? "Memisahkan pengawasan dari eksekutif yang mengambil keputusan operasional dan belanja." : "Makes oversight independent of the executives making operating and spending decisions.",
      kpi: isId ? 'Mandat: Kepatuhan Pasar Modal & Transparansi' : 'Mandate: Capital Market Compliance & Integrity'
    },
    // Tier 2: CEO
    {
      id: 'ceo',
      parentId: 'board',
      role: isId ? 'Presiden Direktur & CEO' : 'President Director & CEO',
      name: 'Elliot Dickson',
      tag: isId ? 'KEPEMIMPINAN STRATEGIS' : 'APEX STRATEGY & SOLVENCY',
      theme: '#df0036',
      bg: '#fffdfd',
      desc: isId ? 'Strategi Pemulihan · Alokasi Modal Rp 450M · Kovenan BNI' : 'Turnaround Strategy · CapEx Allocation · BNI Debt Covenants',
      responsibilities: isId ? "Menetapkan prioritas pemulihan, menyetujui alokasi modal, dan menimbang ekspansi, penyesuaian gerai, serta likuiditas." : "Sets turnaround priorities, approves capital allocation, and resolves trade-offs between expansion, store resizing, and liquidity.",
      rationale: isId ? "Menetapkan satu penanggung jawab pemulihan sementara COO mengelola operasi harian." : "Gives the turnaround one accountable executive while the COO runs day-to-day operations.",
      kpi: isId ? 'Target: Hentikan Rugi 4 Tahun (-Rp 3,53T) · Pembiayaan Mandiri' : 'Target: Halt 4 Loss Years (-Rp 3.53T) · Self-Funding'
    },
    // Tier 3: Corporate Staff & COO (reporting to CEO)
    {
      id: 'cfo',
      parentId: 'ceo',
      role: isId ? 'Direktur Keuangan (CFO)' : 'Chief Financial Officer (CFO)',
      name: 'Herry Senjaya',
      tag: isId ? 'KEUANGAN & UTANG' : 'FINANCE & SOLVENCY',
      theme: '#0284c7',
      bg: '#f8fafc',
      desc: isId ? 'Keringanan Sewa PSAK 73 · Kovenan Utang BNI Tanpa Utang Baru' : 'PSAK 73 Lease Relief & BNI Debt Covenants with Rp 0 Bank Debt',
      responsibilities: isId ? "Memproyeksikan kas, mengevaluasi restrukturisasi sewa, dan memantau belanja serta ruang terhadap batas kovenan BNI." : "Forecasts cash, evaluates lease restructuring, and tracks spending and BNI covenant headroom.",
      rationale: isId ? "Memastikan likuiditas dan kovenan dipertimbangkan sebelum dana investasi dialokasikan." : "Puts liquidity and covenant monitoring alongside investment decisions before funds are committed.",
      kpi: isId ? 'Target: Pertahankan Batas Kredit BNI Rp 400M' : 'Target: Preserve Rp 400B BNI Covenant'
    },
    {
      id: 'coo',
      parentId: 'ceo',
      role: isId ? 'Direktur Operasional (COO)' : 'Chief Operating Officer (COO)',
      name: isId ? 'Operasional Ritel & Pasokan' : 'Retail Formats & Supply Chain',
      tag: isId ? '★ PENUNJUKAN BARU · KASUS HLM. 588 ★' : '★ NEW APPOINTMENT · CASE P. 588 ★',
      theme: '#0052cc',
      bg: '#f0f7ff',
      isLead: true,
      desc: isId ? 'Atasi Hambatan Rentang Kendali CEO (Eksibit 1); Pimpin 4 SBU & DC Dingin' : 'Resolves CEO Span Bottleneck (Exhibit 1); Commands 4 SBUs & Cold DC',
      responsibilities: isId ? "Meninjau kinerja empat unit usaha, mengoordinasikan pembukaan gerai, dan menangani masalah lintas format." : "Reviews performance across the four business units, coordinates store rollouts, and resolves operating issues that span formats.",
      rationale: isId ? "Mengurangi beban operasional langsung CEO dan memberi pimpinan format satu jalur eskalasi." : "Reduces the CEO’s direct operating workload and gives format leaders one point of escalation.",
      kpi: isId ? 'Bebaskan CEO dari Pemadaman Masalah Operasional Harian' : 'Unburdens CEO & CFO from Retail Firefighting'
    },
    {
      id: 'cio',
      parentId: 'ceo',
      role: isId ? 'Direktur TI (CIO)' : 'Chief Information Officer (CIO)',
      name: 'Iwan Goenadi',
      tag: isId ? 'TEKNOLOGI & ERP' : 'TECHNOLOGY & APIS',
      theme: '#4f46e5',
      bg: '#f8fafc',
      desc: isId ? 'Integrasi ERP SAP, API Grab/Shopee & Prakiraan Permintaan' : 'SAP Retail ERP, Grab/Shopee APIs & Demand Forecasting',
      responsibilities: isId ? "Mengelola ERP ritel, data persediaan, peramalan permintaan, dan integrasi platform pengiriman." : "Owns the retail ERP, inventory data, demand forecasting, and integrations with delivery platforms.",
      rationale: isId ? "Satu penanggung jawab TI menjaga konsistensi data persediaan gerai, gudang, dan kanal daring." : "One technology owner keeps stores, warehouses, and online channels working from consistent inventory data.",
      kpi: isId ? 'Target: Waktu Integrasi API <30 Detik' : 'Target: Real-Time Dark Hub Inventory Routing'
    },
    {
      id: 'chro',
      parentId: 'ceo',
      role: isId ? 'Direktur SDM (CHRO)' : 'Chief HR Officer (CHRO)',
      name: 'Lydiawati Kurniawan',
      tag: isId ? 'SUMBER DAYA MANUSIA' : 'HUMAN CAPITAL',
      theme: '#7c3aed',
      bg: '#f8fafc',
      desc: isId ? 'Pelatihan Ulang Produk Segar & Petugas Pengambil Pesanan Dark Hub' : 'Fresh Produce Retraining & Dark-Store Digital Pickers',
      responsibilities: isId ? "Merencanakan kebutuhan tenaga kerja dan melatih ulang karyawan untuk produk segar, gerai kompak, serta penyiapan pesanan digital." : "Plans staffing and retrains employees for fresh-food handling, smaller stores, and digital order picking.",
      rationale: isId ? "Memastikan kesiapan tenaga kerja saat konversi dan pembukaan gerai mengubah peran serta keterampilan." : "Makes workforce readiness part of each conversion and rollout, where roles and skills change.",
      kpi: isId ? 'Target: 1.200 Staf Tersertifikasi Penanganan Segar' : 'Target: 1,200 Certified Fresh Advisors'
    },
    // Tier 4: Divisional SBUs (reporting to COO)
    {
      id: 'sbu1',
      parentId: 'coo',
      role: isId ? 'Presiden · Supermarket Hyfresh' : 'President · Hyfresh Supermarkets',
      name: isId ? 'Supermarket Segar Permukiman' : 'Compact Neighborhood Fresh',
      tag: isId ? 'SBU 1 · PERTUMBUHAN UTAMA (QSPM #1)' : 'SBU 1 · CORE GROWTH (QSPM #1)',
      theme: '#15803d',
      bg: '#f0fdf4',
      badgeClass: 'badge-growth',
      desc: isId ? '50 Gerai Kompak Baru (500–1.000 m²) · Porsi Produk Segar >35%' : '50 Compact Stores (500–1,000 m²) · >35% Farm-Fresh Mix',
      responsibilities: isId ? "Memilih lokasi, membuka gerai kompak, serta mengelola produk segar, tenaga kerja, dan laba gerai Hyfresh." : "Selects sites, opens compact stores, and manages Hyfresh’s fresh assortment, labor, and store profitability.",
      rationale: isId ? "Memberi format ekspansi penanggung jawab tersendiri karena struktur biaya supermarket kompak berbeda dari hipermarket." : "Gives the expansion format its own owner because compact supermarkets have different economics from hypermarkets.",
      kpi: isId ? '🎯 Target: Penjualan Rp 1.500M 2025 · EBITDA Positif' : '🎯 Target: Rp 1,500B Sales by 2025 · Positive EBITDA'
    },
    {
      id: 'sbu2',
      parentId: 'coo',
      role: isId ? 'Presiden · Hypermart & Rightsizing' : 'President · Hypermart & Rightsizing',
      name: isId ? 'Restrukturisasi Format Besar' : 'Footprint Downsizing & Dark Hubs',
      tag: isId ? 'SBU 2 · RESTRUKTURISASI (QSPM #2)' : 'SBU 2 · RESTRUCTURING (QSPM #2)',
      theme: '#1d4ed8',
      bg: '#eff6ff',
      badgeClass: 'badge-rightsize',
      desc: isId ? 'Perkecil 45 Gerai (30–40%) · Ubah Area Belakang Menjadi Dark Hub' : 'Downsize 45 Stores by 30–40% · Convert Backrooms to Dark Hubs',
      responsibilities: isId ? "Memilih gerai yang akan diperkecil, menata ulang area penjualan, dan mengoordinasikan konversi ruang belakang untuk pesanan daring." : "Selects stores to resize, redesigns selling space, and coordinates backroom conversions for online fulfillment.",
      rationale: isId ? "Menetapkan satu penanggung jawab untuk menjaga kinerja gerai sambil menekan biaya ruang dan menambah kapasitas penyiapan pesanan." : "Assigns one owner to protect store performance while reducing space costs and adding fulfillment capacity.",
      kpi: isId ? '🎯 Target: Pangkas Liabilitas Sewa Rp 180M' : '🎯 Target: Cut Rp 180B Lease Debt · Negative Cash Cycle'
    },
    {
      id: 'sbu3',
      parentId: 'coo',
      role: isId ? 'Presiden · Primo Gourmet & Boston' : 'President · Primo Gourmet & Boston',
      name: isId ? 'Ritel Spesialis Margin Tinggi' : 'High-Margin Specialty Halo',
      tag: isId ? 'SBU 3 · SPESIALIS PREMIUM' : 'SBU 3 · PREMIUM SPECIALTY',
      theme: '#b45309',
      bg: '#fefce8',
      badgeClass: 'badge-specialty',
      desc: isId ? '9 Gerai Gourmet Foodmart Primo + 62 Gerai Farmasi Boston HBC' : '9 Foodmart Primo Gourmet + 62 Boston Health & Beauty Pods',
      responsibilities: isId ? "Mengelola pilihan produk, harga, standar layanan, dan laba gerai Primo serta Boston." : "Manages assortment, pricing, service standards, and profitability across Primo and Boston outlets.",
      rationale: isId ? "Memberi format khusus perhatian tersendiri karena pelanggan, margin, dan kebutuhan layanannya berbeda dari ritel kebutuhan sehari-hari." : "Gives specialty formats dedicated attention because their customers, margins, and service needs differ from mass grocery.",
      kpi: isId ? '🎯 Target: Marjin Kotor 28–32% · Keranjang Premium' : '🎯 Target: 28–32% Gross Margins · +15% Basket Spend'
    },
    {
      id: 'sbu4',
      parentId: 'coo',
      role: isId ? 'Kepala · Kantor Likuidasi Non-Inti' : 'Head · Non-Core Liquidation Office',
      name: isId ? 'Satgas Divestasi SmartClub & FMX' : 'SmartClub & FMX Liquidation Taskforce',
      tag: isId ? 'SBU 4 · DIVESTASI 2021–2022' : 'SBU 4 · DIVESTITURE TASKFORCE',
      theme: '#be123c',
      bg: '#fff1f2',
      badgeClass: 'badge-exit',
      desc: isId ? 'Pelepasan Tertib Grosir SmartClub & 14 Kios FMX per 2022' : 'Orderly Exit of SmartClub Wholesale & 14 FMX Kiosks by 2022',
      responsibilities: isId ? "Mengoordinasikan penghabisan stok, penjualan aset, dan penutupan operasi SmartClub serta FMX." : "Coordinates stock clearance, asset sales, and the closure of SmartClub and FMX operations.",
      rationale: isId ? "Memisahkan pekerjaan penutupan dari ekspansi dan menetapkan penanggung jawab pemulihan kas serta penyelesaian kewajiban." : "Separates exit work from growth operations and gives leadership a clear owner for recovering cash and closing obligations.",
      kpi: isId ? '🎯 Target: Lepas Kas +Rp 120M · Hentikan Beban EBITDA' : '🎯 Target: Unlock +Rp 120B Cash · Zero EBITDA Burn'
    },
    // Tier 4: Shared Enablers Group (reporting to COO)
    {
      id: 'enablers',
      parentId: 'coo',
      role: isId ? 'Pusat Keunggulan Rantai Pasok & O2O' : 'Supply Chain & Digital Enablers Hub',
      name: isId ? 'Infrastruktur Pendukung Lintas Format' : 'Cross-Format Operational Moat',
      tag: isId ? 'KEMAMPUAN BERSAMA (ENABLERS)' : 'SHARED ENABLERS (REPORTING TO COO)',
      theme: '#0f766e',
      bg: '#f0fdfa',
      badgeClass: 'badge-enabler',
      desc: isId ? 'Mengelola 3 DC Dingin Halal & Platform Pengiriman Digital 30 Menit' : 'Managing 3 Halal Cold DCs & 30-Min Rapid Fulfillment Platform',
      responsibilities: isId ? "Mengoordinasikan layanan logistik, penyiapan pesanan digital, dan pengadaan lintas format ritel." : "Coordinates logistics, digital fulfillment, and sourcing services across the retail formats.",
      rationale: isId ? "Layanan bersama memungkinkan penggunaan infrastruktur dan standar yang sama dengan tanggung jawab kinerja tetap pada masing-masing format." : "Shared services let the formats use the same infrastructure and operating standards while keeping responsibility for their own results.",
      kpi: isId ? 'Target: Layanan Pemenuhan 99,2% & Ketepatan Suhu Produk' : 'Target: 99.2% Order Fill Rate & Fresh Temperature Integrity'
    },
    // Tier 5: The 3 VPs under Enablers
    {
      id: 'logistics',
      parentId: 'enablers',
      role: isId ? 'VP · Rantai Pasok & Logistik Dingin' : 'VP · Supply Chain & Cold Logistics',
      name: isId ? 'Keunggulan Rantai Dingin Nasional' : 'National Halal Cold-Chain Moat',
      tag: isId ? 'RANTAI DINGIN HALAL (66.755 M²)' : 'HALAL COLD-CHAIN MOAT',
      theme: '#0284c7',
      bg: '#f8fafc',
      desc: isId ? '3 DC Multi-Suhu (Balaraja, Cibitung, Porong) · Rute Dingin Petani' : '3 Multi-Temp Central DCs (66,755 m²) · Direct Farm Cold Routing',
      responsibilities: isId ? "Mengelola pusat distribusi bersuhu beragam dan merencanakan rute berpendingin dari pemasok ke gerai." : "Runs multi-temperature distribution centers and plans refrigerated routes from suppliers to stores.",
      rationale: isId ? "Koordinasi terpusat membantu menjaga standar rantai dingin dan menggabungkan pengiriman lintas format." : "Central coordination helps maintain cold-chain standards and consolidates deliveries across formats.",
      kpi: isId ? 'Target: Susut Produk Segar <1,5% (Standar Industri 4%)' : 'Target: Perishable Shrink <1.5%'
    },
    {
      id: 'omni',
      parentId: 'enablers',
      role: isId ? 'VP · Perdagangan Digital & Omnichannel' : 'VP · Omnichannel & Digital Commerce',
      name: isId ? 'Pengiriman Kilat 30 Menit' : '30-Minute Rapid Delivery',
      tag: isId ? 'EKSEKUSI OMNICHANNEL O2O' : '30-MIN RAPID FULFILLMENT',
      theme: '#4338ca',
      bg: '#f8fafc',
      desc: isId ? 'Kemitraan GrabMart, Shopee & Tokopedia · Dark Hub Hypermart' : 'GrabMart, Shopee & Tokopedia Unified Routing · Dark Hubs',
      responsibilities: isId ? "Mengelola kemitraan platform, mengarahkan pesanan ke gerai atau dark hub, dan memantau kinerja pengiriman." : "Manages marketplace partnerships, routes orders to stores or dark hubs, and tracks delivery performance.",
      rationale: isId ? "Menetapkan satu penanggung jawab pemenuhan pesanan lintas platform dan format, dari pengalihan pesanan hingga serah terima." : "Gives online fulfillment one owner across platforms and formats, from order routing through handoff.",
      kpi: isId ? 'Target: Kontribusi O2O 12–15% dari Total Penjualan' : 'Target: 12–15% O2O Sales Contribution'
    },
    {
      id: 'procurement',
      parentId: 'enablers',
      role: isId ? 'VP · Pengadaan & Pasokan Petani' : 'VP · Merchandising & Farm Sourcing',
      name: 'Kyutae Park',
      tag: isId ? '750+ KEMITRAAN PETANI LOKAL' : '750+ DIRECT FARM CONTRACTS',
      theme: '#15803d',
      bg: '#f8fafc',
      desc: isId ? 'Kemitraan Petani Langsung · Algoritma Diskon Dinamis Kadaluarsa' : 'Direct Farmer Sourcing · Dynamic Expiry Markdown Algorithms',
      responsibilities: isId ? "Bernegosiasi langsung dengan petani dan mengoordinasikan pembelian produk segar serta diskon untuk stok mendekati kedaluwarsa." : "Negotiates directly with farmers and coordinates fresh-product purchasing and markdowns for stock nearing expiry.",
      rationale: isId ? "Menghubungkan keputusan pengadaan dengan margin produk segar dan pengurangan limbah di seluruh gerai." : "Connects sourcing decisions with fresh margins and waste reduction across stores.",
      kpi: isId ? 'Target: Margin Produk Segar 24% & Nir-Limbah Makanan' : 'Target: 24% Fresh Margin & Zero Food Waste'
    }
  ];
});

// Selected Node Details for Focus Bar
const selectedNode = computed(() => treeData.value.find(node => node.id === selectedNodeId.value));
const selectedPhoto = computed(() => {
  const [file, english, indonesian] = rolePhotos[selectedNodeId.value];
  return { file, caption: props.language === 'id' ? indonesian : english };
});
const directReports = computed(() => treeData.value.filter(node => node.parentId === selectedNodeId.value));
const reportingRole = computed(() => treeData.value.find(node => node.id === selectedNode.value.parentId)?.role);
const selectedDetail = computed(() => {
  const node = selectedNode.value;
  return {
    badge: node.tag,
    title: `${node.role} (${node.name}):`,
    mandate: `${node.desc} — ${node.kpi}`
  };
});

function renderChart() {
  if (!chartContainer.value) return;

  // Clear previous chart if any
  chartContainer.value.innerHTML = '';

  const chart = new OrgChart()
    .container(chartContainer.value)
    .data(treeData.value)
    .duration(0)
    .nodeWidth((d) => {
      if (d.data.id === 'coo' || d.data.id === 'ceo') return 270;
      if (d.data.id === 'board' || d.data.id === 'enablers') return 250;
      if (d.data.id.startsWith('sbu')) return 230;
      return 210;
    })
    .nodeHeight((d) => {
      if (d.data.id.startsWith('sbu')) return 145;
      if (d.data.id === 'coo' || d.data.id === 'ceo') return 120;
      if (d.data.id === 'board' || d.data.id === 'enablers') return 120;
      return 130;
    })
    .childrenMargin((d) => 35)
    .compactMarginBetween((d) => 20)
    .compactMarginPair((d) => 25)
    .neighbourMargin((a, b) => 20)
    .siblingsMargin((d) => 20)
    // Place the control in the connector gap below the card.
    .nodeButtonWidth(() => 24)
    .nodeButtonHeight(() => 24)
    .nodeButtonX(() => -12)
    .nodeButtonY(() => 3)
    .buttonContent(({ node }) => {
      return `<div style="background:#ffffff;border:1.5px solid #94a3b8;border-radius:50%;box-sizing:border-box;width:22px;height:22px;margin:1px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;color:#334155;cursor:pointer;">
        ${node.children ? '−' : '+' + node.data._directSubordinates}
      </div>`;
    })
    .nodeContent((d) => {
      const isSelected = d.data.id === selectedNodeId.value;
      const theme = d.data.theme || '#475569';
      const bg = d.data.bg || '#ffffff';
      const isLead = d.data.isLead;

      return `
        <div class="org-chart-node ${isSelected ? 'node-selected' : ''}" data-org-id="${d.data.id}" style="
          width: 100%;
          height: 100%;
          background: ${bg};
          border: 1.5px solid ${isLead ? '#0052cc' : '#cbd5e1'};
          border-top: 4px solid ${theme};
          border-radius: 7px;
          padding: 8px 10px;
          box-sizing: border-box;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
          font-family: Arial, Helvetica, sans-serif;
        ">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
              <span style="font-size:8px;font-weight:800;color:${theme};letter-spacing:0.06em;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                ${d.data.tag}
              </span>
            </div>
            <div style="font-size:11px;font-weight:800;color:#0f172a;line-height:1.2;margin-bottom:2px;">
              ${d.data.role}
            </div>
            <div style="font-size:10px;font-weight:700;color:#334155;margin-bottom:4px;">
              ${d.data.name}
            </div>
            <div style="font-size:8.5px;color:#64748b;line-height:1.25;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">
              ${d.data.desc}
            </div>
          </div>
          <div style="font-size:8.5px;font-weight:700;color:${theme};background:rgba(255,255,255,0.7);padding:2px 4px;border-radius:3px;border-top:1px dashed #e2e8f0;margin-top:4px;line-height:1.25;overflow-wrap:anywhere;flex-shrink:0;">
            ${d.data.kpi}
          </div>
        </div>
      `;
    })
    .onNodeClick((node) => {
      selectedNodeId.value = node.data.id;
      chartContainer.value.querySelector('.node-selected')?.classList.remove('node-selected');
      chartContainer.value.querySelector(`[data-org-id="${node.data.id}"]`)?.classList.add('node-selected');
      if (detailDrawer.value && !detailDrawer.value.open) {
        detailDrawer.value.showModal();
        detailContent.value.scrollTop = 0;
      }
    });

  if (chartInstance) {
    chart.render();
  } else {
    chart.expandAll();
  }
  chart.fit();
  chartInstance = chart;
}

function handleFit() {
  if (chartInstance) chartInstance.fit();
}
function handleZoomIn() {
  if (chartInstance) chartInstance.zoomIn();
}
function handleZoomOut() {
  if (chartInstance) chartInstance.zoomOut();
}
function handleExpandAll() {
  if (chartInstance) {
    chartInstance.expandAll().fit();
  }
}

let resizeObserver = null;

onMounted(() => {
  nextTick(() => {
    setTimeout(() => {
      renderChart();
    }, 120);

    if (window.ResizeObserver && chartContainer.value) {
      resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          if (entry.contentRect.width > 50 && chartInstance) {
            chartInstance.fit();
          }
        }
      });
      resizeObserver.observe(chartContainer.value);
    }
  });
});

onUnmounted(() => {
  if (resizeObserver) {
    resizeObserver.disconnect();
    resizeObserver = null;
  }
});

watch(() => props.language, () => {
  nextTick(() => {
    renderChart();
  });
});
</script>

<style scoped>
.org-slide-wrapper {
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
.org-slide-wrapper::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0.65cqw;
  background: #df0036;
}

.org-slide-wrapper::after {
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
  margin-bottom: 0.1cqw;
}

.org-slide-header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 0.3cqw;
  gap: 1cqw;
}

.header-titles {
  flex: 1;
  min-width: 0;
  max-width: 76cqw; /* Guarantees no collision with MPPA logo */
}

.org-slide-title {
  font-size: 1.35cqw;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.02em;
  line-height: 1.15;
  margin: 0 0 0.1cqw;
}

.org-slide-subtitle {
  font-size: 0.64cqw;
  color: #475569;
  line-height: 1.25;
  margin: 0;
}

/* Toolbar Controls */
.chart-toolbar {
  display: flex;
  align-items: center;
  gap: 0.35cqw;
  flex-shrink: 0;
}
.tool-btn {
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  color: #334155;
  font-size: 0.58cqw;
  font-weight: 700;
  padding: 0.2cqw 0.55cqw;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.2cqw;
  transition: all 0.15s ease;
}
.tool-btn:hover {
  background: #e2e8f0;
  color: #0f172a;
  border-color: #94a3b8;
}
.icon-btn {
  padding: 0.2cqw 0.4cqw;
  font-size: 0.7cqw;
}

/* Canvas Area */
.chart-wrapper {
  flex: 1;
  min-height: 0;
  position: relative;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: #fafbfc;
  overflow: hidden;
}

.chart-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

/* Focus Bar */
.org-focus-bar {
  margin-top: 0.35cqw;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 0.25cqw 0.75cqw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.58cqw;
  color: #475569;
  min-height: 2cqw;
}
.focus-title {
  display: flex;
  align-items: center;
  gap: 0.4cqw;
  flex: 1;
  min-width: 0;
}
.focus-tag {
  font-size: 0.5cqw;
  font-weight: 800;
  color: #ffffff;
  background: #0284c7;
  padding: 0.1cqw 0.4cqw;
  border-radius: 3px;
  white-space: nowrap;
}
.focus-title strong {
  color: #0f172a;
  white-space: nowrap;
}
.focus-desc {
  color: #334155;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.focus-cite {
  white-space: nowrap;
  margin-left: 0.8cqw;
}
.cite-pill {
  font-size: 0.5cqw;
  font-weight: 700;
  color: #64748b;
  background: #e2e8f0;
  padding: 0.08cqw 0.35cqw;
  border-radius: 3px;
}
.org-detail-content {
  padding: 20px 24px;
  overflow: auto;
}
.org-at-a-glance {
  padding: 14px;
  background: #f7f5f6;
  border-radius: 8px;
}
.org-at-a-glance p + p {
  margin-top: 6px;
}
.org-detail-photo {
  margin: 16px 0;
}
.org-detail-photo img {
  display: block;
  width: 100%;
  aspect-ratio: 3 / 1;
  object-fit: cover;
  border-radius: 8px;
}
.org-detail-photo figcaption,
.org-detail-content .org-detail-source {
  margin-top: 8px;
  color: #635962;
  font-size: 12px;
}
.org-detail-content ul {
  margin: 4px 0 0;
  padding-left: 20px;
}
.org-detail-content section + section {
  border-top: 1px solid #ebdbe2;
  margin-top: 16px;
  padding-top: 16px;
}
.org-detail-content h4 {
  color: #a4002b;
  margin: 0 0 4px;
}
.org-detail-content p {
  margin: 0;
}
.chart-container :deep(.node-selected) {
  outline: 2px solid #df0036;
  outline-offset: -2px;
}
</style>
