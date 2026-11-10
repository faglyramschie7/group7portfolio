<template>
  <article class="roadmap-slide">
    <header class="roadmap-header">
      <div class="deck-kicker">{{ copy.kicker }}</div>
      <h2>{{ copy.title }}</h2>
      <p>{{ copy.subtitle }}</p>
    </header>

    <div class="roadmap-phases">
      <section v-for="phase in copy.phases" :key="phase.years" class="roadmap-phase">
        <div class="phase-media" :class="{ 'phase-funding': !phase.image }">
          <figure v-if="phase.image">
            <img :src="phase.image.src" :alt="phase.image.alt" />
            <figcaption><a :href="phase.image.url" target="_blank" rel="noopener">{{ phase.image.credit }}</a></figcaption>
          </figure>
          <template v-else>
            <span>{{ phase.mediaLabel }}</span>
            <strong>{{ phase.amount }}</strong>
            <small>{{ phase.breakdown }}</small>
          </template>
        </div>
        <div class="phase-body">
          <p class="phase-years">{{ phase.years }}</p>
          <h3>{{ phase.title }}</h3>
          <ul>
            <li v-for="task in phase.tasks" :key="task">{{ task }}</li>
          </ul>
        </div>
      </section>
    </div>

    <div class="roadmap-decision">
      <strong>{{ copy.decision }}</strong>
      <p>{{ copy.recommendation }}</p>
    </div>
    <footer class="roadmap-footer">
      <span>{{ copy.sources }}</span>
      <strong>{{ slideNumber }}</strong>
    </footer>
  </article>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  slideNumber: String,
  language: { type: String, default: 'id' }
});

const hyfresh = {
  src: '/assets/roadmap-hyfresh.jpg',
  url: 'https://www.trenasia.id/tren-bisnis/grup-lippo-rogoh-kocek-rp80-miliar-matahari-putra-buka-16-gerai-hyfresh',
  credit: 'Hyfresh / TrenAsia'
};
const grabmart = {
  src: '/assets/roadmap-grabmart.jpg',
  url: 'https://www.grab.com/id/en/press/business/mppa-kolaborasi-dengan-grabmart-membawa-pengalaman-belanja-baru-di-platform-omni-channel-di-tengah-covid-19/',
  credit: 'MPPA × GrabMart / Grab'
};

const english = {
  kicker: 'Implementation · Proposed plan',
  title: 'MPPA’s turnaround roadmap',
  subtitle: 'Free up cash first, then expand Hyfresh and use Hypermart stores to fill online orders.',
  phases: [
    {
      years: '01 · 2021', title: 'Free up cash',
      mediaLabel: 'Estimated savings and proceeds', amount: 'Rp 300B',
      breakdown: 'Rp 180B lease savings over five years + Rp 120B from asset sales',
      tasks: ['Renegotiate 15 mall leases.', 'Sell or close loss-making SmartClub and FMX operations.']
    },
    {
      years: '02 · 2022–2023', title: 'Roll out the new formats',
      image: { ...hyfresh, alt: 'Shoppers at a Hyfresh supermarket' },
      tasks: ['Target 50 compact Hyfresh stores.', 'Adapt 45 Hypermart backrooms to pack online orders.']
    },
    {
      years: '03 · 2024–2025', title: 'Expand what works',
      image: { ...grabmart, alt: 'MPPA and Grab representatives at an in-store GrabMart pickup point' },
      tasks: ['Grow delivery through partners like GrabMart and Shopee.', 'Track cash flow and reduce fresh-food waste.']
    }
  ],
  decision: 'QSPM decision',
  recommendation: 'Prioritize Hyfresh (6.620). Use smaller Hypermart stores and online order hubs (5.460) to support the rollout.',
  sources: 'Sources · Case 23, pp. 587–596 · Fred David, ch. 7–9 · Matahari.xlsx'
};

const indonesian = {
  kicker: 'Implementasi · Usulan rencana',
  title: 'Peta jalan pemulihan MPPA',
  subtitle: 'Longgarkan arus kas terlebih dahulu, lalu perluas Hyfresh dan gunakan gerai Hypermart untuk menyiapkan pesanan online.',
  phases: [
    {
      years: '01 · 2021', title: 'Longgarkan arus kas',
      mediaLabel: 'Perkiraan penghematan dan hasil penjualan', amount: 'Rp 300 miliar',
      breakdown: 'Rp 180 miliar penghematan sewa selama lima tahun + Rp 120 miliar dari penjualan aset',
      tasks: ['Negosiasikan ulang 15 kontrak sewa mal.', 'Jual atau tutup unit SmartClub dan FMX yang merugi.']
    },
    {
      years: '02 · 2022–2023', title: 'Jalankan format baru',
      image: { ...hyfresh, alt: 'Pelanggan berbelanja di supermarket Hyfresh' },
      tasks: ['Targetkan 50 gerai Hyfresh berukuran kecil.', 'Siapkan ruang belakang di 45 gerai Hypermart untuk mengemas pesanan online.']
    },
    {
      years: '03 · 2024–2025', title: 'Perluas yang berhasil',
      image: { ...grabmart, alt: 'Perwakilan MPPA dan Grab di titik pengambilan pesanan GrabMart' },
      tasks: ['Perluas layanan antar melalui mitra seperti GrabMart dan Shopee.', 'Pantau arus kas dan kurangi produk segar yang terbuang.']
    }
  ],
  decision: 'Keputusan QSPM',
  recommendation: 'Prioritaskan Hyfresh (6,620). Perkecil gerai Hypermart dan gunakan ruangnya untuk menyiapkan pesanan online (5,460) guna mendukung ekspansi.',
  sources: 'Sumber · Kasus 23, hlm. 587–596 · Fred David, bab 7–9 · Matahari.xlsx'
};

const copy = computed(() => props.language === 'id' ? indonesian : english);
</script>

<style scoped>
.roadmap-slide {
  container-type: inline-size;
  aspect-ratio: 16 / 9;
  display: flex;
  flex-direction: column;
  gap: 1.05cqw;
  box-sizing: border-box;
  background: #fff;
  color: #201b21;
  padding: 2.25cqw 3.65cqw 1.45cqw;
  border-left: .65cqw solid #df0036;
}

.roadmap-header {
  display: block;
  padding: 0 8cqw 0 0;
  border: 0;
  background: url('/assets/mppa-logo.png') right top / 6cqw auto no-repeat;
}

.roadmap-header h2 {
  margin: .32cqw 0;
  font-family: inherit;
  font-size: 3.2cqw;
  line-height: 1.06;
}

.roadmap-header p,
.roadmap-decision p {
  margin: 0;
  font-size: 1.25cqw;
  line-height: 1.4;
}

.roadmap-phases {
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.1cqw;
}

.roadmap-phase {
  display: flex;
  flex-direction: column;
  min-height: 0;
  margin: 0;
  overflow: hidden;
  border: 1px solid #e5dce0;
  border-radius: .75cqw;
  background: #fff;
}

.phase-media {
  flex: 1;
  min-height: 0;
  position: relative;
}

.phase-media figure {
  position: absolute;
  inset: 0;
  margin: 0;
}

.phase-media img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.phase-media figcaption {
  position: absolute;
  right: .55cqw;
  bottom: .5cqw;
  padding: .18cqw .4cqw;
  border-radius: .2cqw;
  background: #fff;
  font-size: .65cqw;
}

.phase-media a {
  color: #402d36;
}

.phase-funding {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: .5cqw;
  padding: 1.4cqw;
  background: #f8ebef;
  color: #8c1737;
}

.phase-funding span,
.phase-years,
.roadmap-decision strong {
  font-size: .8cqw;
  font-weight: 800;
  letter-spacing: .08em;
  text-transform: uppercase;
}

.phase-funding strong {
  font-size: 3.35cqw;
  line-height: 1;
}

.phase-funding small {
  max-width: 24ch;
  font-size: 1.05cqw;
  line-height: 1.35;
}

.phase-body {
  box-sizing: border-box;
  min-height: 12.5cqw;
  padding: 1.1cqw 1.35cqw;
}

.phase-years {
  margin: 0 0 .35cqw;
  color: #a3002e;
}

.phase-body h3 {
  margin: 0;
  font-size: 1.75cqw;
  line-height: 1.15;
}

.phase-body ul {
  margin: .65cqw 0 0;
  padding-left: 1.15cqw;
  font-size: 1.25cqw;
  line-height: 1.4;
}

.phase-body li + li {
  margin-top: .38cqw;
}

.roadmap-decision {
  display: flex;
  align-items: baseline;
  gap: .85cqw;
  background: #edf7f2;
  color: #164b3c;
  border-left: .27cqw solid #1b795a;
  border-radius: .35cqw;
  padding: .7cqw 1cqw;
}

.roadmap-decision strong {
  flex-shrink: 0;
}

.roadmap-footer {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #e5dce0;
  padding-top: .45cqw;
  color: #625863;
  font-size: .78cqw;
}

.roadmap-footer strong {
  color: #a3002e;
}
</style>
