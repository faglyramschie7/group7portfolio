<template>
  <article class="deck-slide company-history" :aria-label="t('Company development')">
    <div class="deck-kicker">{{ t('Company background · History') }}</div>
    <h2>{{ t('Company development') }}</h2>
    <div class="history-grid">
      <button
        v-for="milestone in milestones"
        :key="milestone.year"
        type="button"
        class="history-card"
        :aria-describedby="'history-' + milestone.year"
        @pointermove="moveTooltip($event, milestone)"
        @pointerleave="closeTooltip"
        @focus="focusTooltip($event, milestone)"
        @blur="closeTooltip"
        @click="focusTooltip($event, milestone)"
        @keydown.esc.stop="closeTooltip"
      >
        <span class="history-visual" :class="{ 'has-logo': milestone.logo }">
          <span v-if="milestone.split" class="history-split">
            <span class="history-split-brand">
              <img src="/assets/mppa-logo.png" alt="">
              <strong>MPPA</strong>
            </span>
            <span class="history-split-arrow" aria-hidden="true">→</span>
            <span class="history-split-brand">
              <img src="/assets/matahari-department-store-logo.svg" alt="">
              <strong>LPPF</strong>
            </span>
          </span>
          <img v-else :src="'assets/' + milestone.image" alt="">
          <span :id="'history-' + milestone.year" hidden>{{ milestone[language].description }}</span>
        </span>
        <span class="history-caption">
          <strong>{{ milestone.year }}</strong>
          <span>{{ milestone[language].title }}</span>
        </span>
      </button>
    </div>
    <Teleport to="#powerpoint-view">
      <Transition name="history-tooltip">
        <span v-if="activeMilestone" ref="tooltip" class="history-tooltip" aria-hidden="true"
          :style="{ left: tooltipLeft + 'px', top: tooltipTop + 'px' }">
          {{ activeMilestone[language].description }}
        </span>
      </Transition>
    </Teleport>
    <div class="deck-footer">
      <span>
        {{ language === 'id' ? 'Gambar ilustratif' : 'Illustrative images' }} ·
        <a href="https://mppa.co.id/misc/AR/ASR2023.pdf#page=6" target="_blank" rel="noopener">{{ language === 'id' ? 'Linimasa MPPA' : 'MPPA timeline' }}</a> ·
        <a href="https://www.matahari.com/corporate/media/corporate/reports/ar-2015.pdf" target="_blank" rel="noopener">{{ language === 'id' ? 'Pemisahan usaha' : 'Department store split' }}</a> ·
        <a href="https://matahari.com/en/pages/about-us" target="_blank" rel="noopener">{{ language === 'id' ? 'Logo Matahari' : 'Matahari logo' }}</a> ·
        <a href="https://commons.wikimedia.org/wiki/File:Fruit_section_of_a_grocery_store.jpg" target="_blank" rel="noopener">{{ language === 'id' ? 'Foto supermarket' : 'Supermarket photo' }}</a> ·
        <a href="https://commons.wikimedia.org/wiki/File:IDX-building.jpg" target="_blank" rel="noopener">{{ language === 'id' ? 'Foto gedung bursa' : 'Stock exchange photo credit' }}</a>
      </span>
      <span>02 / {{ total }}</span>
    </div>
  </article>
</template>

<script setup>
import { nextTick, ref, shallowRef } from 'vue';

defineProps({
  language: { type: String, required: true },
  t: { type: Function, required: true },
  total: { type: Number, required: true }
});

const activeMilestone = shallowRef(null);
const tooltip = ref(null);
const tooltipLeft = ref(0);
const tooltipTop = ref(0);

async function showTooltip(milestone, x, y) {
  if (activeMilestone.value !== milestone) {
    activeMilestone.value = milestone;
    await nextTick();
  }
  if (activeMilestone.value !== milestone || !tooltip.value) return;
  const { offsetWidth: width, offsetHeight: height } = tooltip.value;
  tooltipLeft.value = Math.max(8, Math.min(x - width / 2, window.innerWidth - width - 8));
  tooltipTop.value = y >= height + 20
    ? y - height - 12
    : Math.min(y + 12, window.innerHeight - height - 8);
}

function moveTooltip(event, milestone) {
  if (event.pointerType !== 'touch') showTooltip(milestone, event.clientX, event.clientY);
}

function focusTooltip(event, milestone) {
  if (event.type === 'focus' && !event.currentTarget.matches(':focus-visible')) return;
  if (event.type === 'click' && event.pointerType === 'mouse') return;
  const card = event.currentTarget.getBoundingClientRect();
  showTooltip(milestone, card.left + card.width / 2, card.top);
}

function closeTooltip() {
  activeMilestone.value = null;
}

const milestones = [
  {
    year: 1986, image: 'mppa-logo.png', logo: true,
    en: { title: 'MPPA established', description: 'MPPA was established to manage a national department store chain.' },
    id: { title: 'MPPA didirikan', description: 'MPPA didirikan untuk mengelola jaringan toko serba ada nasional.' }
  },
  {
    year: 1992, image: 'idx-building.jpg',
    en: { title: 'Public listing', description: 'MPPA listed its shares on the Jakarta and Surabaya stock exchanges.' },
    id: { title: 'Pencatatan saham perdana', description: 'MPPA mencatatkan sahamnya di Bursa Efek Jakarta dan Bursa Efek Surabaya.' }
  },
  {
    year: 1995, image: 'history-grocery-produce.jpg',
    en: { title: 'Supermarket operations began', description: 'MPPA began operating supermarkets, adding grocery retail to its department store business.' },
    id: { title: 'Operasi supermarket dimulai', description: 'MPPA mulai mengoperasikan supermarket dan menambah bisnis ritel kebutuhan sehari-hari.' }
  },
  {
    year: 2004, image: 'hypermart-store.jpg',
    en: { title: 'Hypermart launched', description: 'MPPA opened its first Hypermart, a large-format store selling groceries and household goods.' },
    id: { title: 'Hypermart diluncurkan', description: 'MPPA membuka Hypermart pertama, gerai berformat besar yang menjual bahan makanan dan kebutuhan rumah tangga.' }
  },
  {
    year: '2009–2010', split: true,
    en: { title: 'Department stores split off', description: 'In 2009, Matahari Department Store became a separate company (LPPF). In 2010, PT Meadow Indonesia, backed by CVC, acquired a controlling stake in Matahari Department Store (LPPF). MPPA continued to run Hypermart and its other grocery stores.' },
    id: { title: 'Pemisahan bisnis department store', description: 'Pada 2009, Matahari Department Store menjadi perusahaan terpisah (LPPF). Pada 2010, PT Meadow Indonesia, yang didukung CVC, mengakuisisi saham pengendali Matahari Department Store (LPPF). MPPA tetap mengelola Hypermart dan gerai bahan makanan lainnya.' }
  },
  {
    year: 2018, image: 'hypermart-logo.png', logo: true,
    en: { title: 'Hypermart Mobile pilot', description: 'MPPA opened seven stores across its formats and piloted online shopping at four Hypermart stores in Greater Jakarta.' },
    id: { title: 'Uji coba Hypermart Mobile', description: 'MPPA membuka tujuh gerai lintas format dan menguji belanja daring di empat gerai Hypermart di Jabodetabek.' }
  },
  {
    year: 2019, image: 'hyfresh-store.jpg',
    en: { title: 'Hyfresh launched', description: 'MPPA introduced a neighborhood supermarket centered on fresh food and everyday groceries.' },
    id: { title: 'Hyfresh diluncurkan', description: 'MPPA memperkenalkan supermarket komunitas yang berfokus pada produk segar dan kebutuhan sehari-hari.' }
  }
];
</script>

<style scoped>
.company-history {
  padding: 3.2% 5.5% 7%;
}
.history-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.15cqw;
  margin-top: 1cqw;
}
.history-card {
  display: block;
  min-width: 0;
  padding: 0;
  border: 1px solid #e4dce0;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  color: #29272b;
  font: inherit;
  text-align: left;
  cursor: pointer;
}
.history-card:focus-visible {
  outline: 2px solid #df0036;
  outline-offset: 2px;
}
.history-visual {
  position: relative;
  display: block;
  height: 12.7cqw;
  background: #f7f4f5;
}
.history-visual img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.history-visual.has-logo img {
  padding: 2.4cqw 4cqw;
  object-fit: contain;
}
.history-split {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  align-items: center;
  gap: .6cqw;
  height: 100%;
  padding: .85cqw;
}
.history-split-brand {
  display: grid;
  justify-items: center;
  gap: .3cqw;
  font-size: .85cqw;
}
.history-split-brand img {
  height: 3.4cqw;
  object-fit: contain;
}
.history-split-arrow {
  color: #b80030;
  font-size: 1.6cqw;
}
.history-caption {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: .25cqw .65cqw;
  padding: .65cqw .8cqw;
  font-size: 1cqw;
  font-weight: 700;
}
.history-caption strong {
  color: #b80030;
  font-size: 1.35cqw;
}
.history-tooltip {
  position: fixed;
  z-index: 10000;
  width: min(340px, calc(100vw - 16px));
  padding: 10px 13px;
  border-radius: 8px;
  background: #281c24;
  color: #fff;
  box-shadow: 0 5px 20px #281c2440;
  font: 14px/1.45 Arial, sans-serif;
  pointer-events: none;
}
@media (prefers-reduced-motion: no-preference) {
  .history-tooltip-enter-active,
  .history-tooltip-leave-active {
    transition: opacity 180ms ease;
  }
  .history-tooltip-enter-from,
  .history-tooltip-leave-to {
    opacity: 0;
  }
}
</style>
