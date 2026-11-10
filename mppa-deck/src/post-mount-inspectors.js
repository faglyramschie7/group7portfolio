// Post-mount matrix inspectors and DOM event listeners
export function initPostMountInspectors({
  inspectSpaceFactorRow, inspectSpaceDimensionCard, selectSpaceCompany,
  selectBcgDivision, bcgDivisionsData, spaceCompaniesData, spaceFactorsData,
  getActiveSpaceCompany, matrixIeRender, matrixIePreview,
}) {
  const controller = new AbortController();
  const listen = (target, type, handler) =>
    target.addEventListener(type, handler, {signal: controller.signal});
// Live External Factor Evaluation (EFE Matrix) Inspector
  function updateEfeInspector(target) {
    if (!target) return;
    const row = target.closest('.efe-row');
    const insBox = document.getElementById('efe-ins-box');
    if (!row || !row.dataset.code || !insBox) return;

    const pill = document.getElementById('efe-ins-pill');
    const title = document.getElementById('efe-ins-title');
    const source = document.getElementById('efe-ins-source');
    const body = document.getElementById('efe-ins-body');

    const typeText = window.t ? window.t(row.dataset.type) : row.dataset.type;
    const nameText = window.t ? window.t(row.dataset.name) : row.dataset.name;
    const ratingLabel = window.t ? window.t(row.dataset.ratingLabel) : row.dataset.ratingLabel;
    const rationaleText = window.t ? window.t(row.dataset.rationale) : row.dataset.rationale;
    const labelRationale = window.t ? window.t('Analytical Rationale:') : 'Analytical Rationale:';
    const labelRating = window.t ? window.t('Rating') : 'Rating';

    if (pill) {
      pill.textContent = typeText + ' ' + row.dataset.code;
      pill.className = 'efe-ins-pill ' + (row.dataset.type === 'Opportunity' ? 'efe-pill-opp' : 'efe-pill-threat');
    }
    if (title) title.textContent = nameText + ' · ' + labelRating + ' ' + row.dataset.rating + ' (' + ratingLabel + ') · W: ' + row.dataset.weight + ' (WS: ' + row.dataset.ws + ')';
    if (source) source.textContent = row.dataset.source;
    if (body) body.innerHTML = '<strong>' + labelRationale + '</strong> ' + rationaleText;

    document.querySelectorAll('.efe-row').forEach(r => r.classList.remove('is-active'));
    row.classList.add('is-active');
    insBox.classList.add('is-visible');
  }

  function hideEfeInspector() {
    const insBox = document.getElementById('efe-ins-box');
    if (insBox) insBox.classList.remove('is-visible');
    document.querySelectorAll('.efe-row').forEach(r => r.classList.remove('is-active'));
  }


  listen(document, 'click', function(e) {
    const row = e.target.closest('.efe-row');
    if (row) {
      updateEfeInspector(row);
    } else if (!e.target.closest('#efe-ins-box') && !e.target.closest('.efe-matrix-wrap')) {
      hideEfeInspector();
    }
  });

  listen(document, 'mouseleave', function(e) {
    hideEfeInspector();
  });



// Live Internal Factor Evaluation (IFE Matrix) Inspector
  function updateIfeInspector(target) {
    if (!target) return;
    const row = target.closest('.ife-row');
    const insBox = document.getElementById('ife-ins-box');
    if (!row || !row.dataset.code || !insBox) return;

    const pill = document.getElementById('ife-ins-pill');
    const title = document.getElementById('ife-ins-title');
    const source = document.getElementById('ife-ins-source');
    const body = document.getElementById('ife-ins-body');

    const typeText = window.t ? window.t(row.dataset.type) : row.dataset.type;
    const nameText = window.t ? window.t(row.dataset.name) : row.dataset.name;
    const ratingLabel = window.t ? window.t(row.dataset.ratingLabel) : row.dataset.ratingLabel;
    const rationaleText = window.t ? window.t(row.dataset.rationale) : row.dataset.rationale;
    const labelRationale = window.t ? window.t('Analytical Rationale:') : 'Analytical Rationale:';
    const labelRating = window.t ? window.t('Rating') : 'Rating';

    if (pill) {
      pill.textContent = typeText + ' ' + row.dataset.code;
      pill.className = 'ife-ins-pill ' + (row.dataset.type === 'Strength' ? 'ife-pill-str' : 'ife-pill-weak');
    }
    if (title) title.textContent = nameText + ' · ' + labelRating + ' ' + row.dataset.rating + ' (' + ratingLabel + ') · W: ' + row.dataset.weight + ' (WS: ' + row.dataset.ws + ')';
    if (source) source.textContent = row.dataset.source;
    if (body) body.innerHTML = '<strong>' + labelRationale + '</strong> ' + rationaleText;

    document.querySelectorAll('.ife-row').forEach(r => r.classList.remove('is-active'));
    row.classList.add('is-active');
    insBox.classList.add('is-visible');
  }

  function hideIfeInspector() {
    const insBox = document.getElementById('ife-ins-box');
    if (insBox) insBox.classList.remove('is-visible');
    document.querySelectorAll('.ife-row').forEach(r => r.classList.remove('is-active'));
  }


  listen(document, 'click', function(e) {
    const row = e.target.closest('.ife-row');
    if (row) {
      updateIfeInspector(row);
    } else if (!e.target.closest('#ife-ins-box') && !e.target.closest('.ife-matrix-wrap')) {
      hideIfeInspector();
    }
  });

  listen(document, 'mouseleave', function(e) {
    hideIfeInspector();
  });


// Live SWOT Analysis (Slide 21) Inspector
  function updateSwotInspector(target) {
    if (!target) return;
    const item = target.closest('.swot-item');
    const insBox = document.getElementById('swot-ins-box');
    if (!item || !item.dataset.code || !insBox) return;

    const pill = document.getElementById('swot-ins-pill');
    const title = document.getElementById('swot-ins-title');
    const source = document.getElementById('swot-ins-source');
    const body = document.getElementById('swot-ins-body');

    const type = item.dataset.type;
    const pillClass = type === 'Strength' ? 'swot-pill-s' : type === 'Weakness' ? 'swot-pill-w' : type === 'Opportunity' ? 'swot-pill-o' : 'swot-pill-t';
    const typeText = window.t ? window.t(type) : type;
    const nameText = window.t ? window.t(item.dataset.name) : item.dataset.name;
    const metricText = window.t ? window.t(item.dataset.metric) : item.dataset.metric;
    const explText = window.t ? window.t(item.dataset.expl) : item.dataset.expl;
    const labelExpl = window.t ? window.t('Diagnostic Explanation:') : 'Diagnostic Explanation:';

    if (pill) {
      pill.textContent = typeText + ' ' + item.dataset.code;
      pill.className = 'swot-ins-pill ' + pillClass;
    }
    if (title) title.textContent = nameText + ' (' + metricText + ')';
    if (source) source.textContent = item.dataset.source;
    if (body) body.innerHTML = '<strong>' + labelExpl + '</strong> ' + explText;

    document.querySelectorAll('.swot-item').forEach(i => i.classList.remove('is-active'));
    item.classList.add('is-active');
    insBox.classList.add('is-visible');
  }

  function hideSwotInspector() {
    const insBox = document.getElementById('swot-ins-box');
    if (insBox) insBox.classList.remove('is-visible');
    document.querySelectorAll('.swot-item').forEach(i => i.classList.remove('is-active'));
  }


  listen(document, 'click', function(e) {
    const item = e.target.closest('.swot-item');
    if (item) {
      updateSwotInspector(item);
    } else if (!e.target.closest('#swot-ins-box') && !e.target.closest('.swot-grid')) {
      hideSwotInspector();
    }
  });

  listen(document, 'mouseleave', function(e) {
    hideSwotInspector();
  });


// Live CPM Matrix (Slide 20) Inspector
  function updateCpmInspector(target) {
    if (!target) return;
    const cell = target.closest('.cpm-hoverable');
    const insBox = document.getElementById('cpm-ins-box');
    if (!cell || !insBox) return;

    const pill = document.getElementById('cpm-ins-pill');
    const title = document.getElementById('cpm-ins-title');
    const source = document.getElementById('cpm-ins-source');
    const body = document.getElementById('cpm-ins-body');
    const logos = document.getElementById('cpm-ins-logos');

    const company = cell.dataset.company || 'Company';
    const pillClass = cell.dataset.companyClass || 'cpm-pill-mppa';
    const factor = cell.dataset.factor || '';
    const weight = cell.dataset.weight || '';
    const rating = cell.dataset.rating || '';
    const ratingLabel = cell.dataset.ratingLabel || '';
    const score = cell.dataset.score || '';
    const evidence = cell.dataset.evidence || '';
    const sourceText = cell.dataset.source || '';

    const factorText = window.t ? window.t(factor) : factor;
    const ratingLabelText = window.t ? window.t(ratingLabel) : ratingLabel;
    const evidenceText = window.t ? window.t(evidence) : evidence;
    const labelRating = window.t ? window.t('Rating') : 'Rating';
    const labelScore = window.t ? window.t('Score') : 'Score';
    const labelWeight = window.t ? window.t('Weight') : 'Weight';
    const labelEvidence = window.t ? window.t('Evidence & Rationale:') : 'Evidence & Rationale:';

    if (pill) {
      pill.textContent = company;
      pill.className = 'cpm-ins-pill ' + pillClass;
    }
    if (title) {
      if (rating !== '—') {
        title.textContent = factorText + ' · W: ' + weight + ' · ' + labelRating + ' ' + rating + ' (' + ratingLabelText + ') · ' + labelScore + ': ' + score;
      } else {
        title.textContent = factorText + ' · ' + labelWeight + ': ' + weight;
      }
    }
    if (logos) {
      const compKey = company.toLowerCase().includes('hypermart') || company.toLowerCase().includes('mppa') ? 'hypermart' :
                      company.toLowerCase().includes('indomaret') ? 'indomaret' :
                      company.toLowerCase().includes('alfamidi') ? 'alfamidi' :
                      company.toLowerCase().includes('alfamart') ? 'alfamart' :
                      company.toLowerCase().includes('transmart') ? 'transmart' :
                      company.toLowerCase().includes('lotte') ? 'lottemart' : 'hypermart';
      logos.innerHTML = renderBrandPills(compKey);
    }
    if (source) source.textContent = sourceText;
    if (body) body.innerHTML = '<strong>' + labelEvidence + '</strong> ' + evidenceText;

    document.querySelectorAll('.cpm-hoverable').forEach(c => c.classList.remove('is-active'));
    cell.classList.add('is-active');
    insBox.classList.add('is-visible');
  }

  function hideCpmInspector() {
    const insBox = document.getElementById('cpm-ins-box');
    if (insBox) insBox.classList.remove('is-visible');
    document.querySelectorAll('.cpm-hoverable').forEach(c => c.classList.remove('is-active'));
  }


  listen(document, 'click', function(e) {
    const cell = e.target.closest('.cpm-hoverable');
    if (cell) {
      updateCpmInspector(cell);
    } else if (!e.target.closest('#cpm-ins-box') && !e.target.closest('.cpm-table-wrap')) {
      hideCpmInspector();
    }
  });

  listen(document, 'mouseleave', function(e) {
    hideCpmInspector();
  });


// Live SWOT Matrix (TOWS) (Slide 23) Inspector
    // Helper to render real brand logos dynamically
  function renderBrandPills(logoKeys) {
    if (!logoKeys) return '';
    const map = {
      'hypermart': '<div class="brand-logo-badge" title="Hypermart"><img src="/assets/hypermart-logo.png" alt="Hypermart" class="brand-logo-img"/></div>',
      'hyfresh': '<div class="brand-logo-badge" title="Hyfresh"><img src="/assets/hyfresh-logo.png" alt="Hyfresh" class="brand-logo-img"/></div>',
      'grab': '<div class="brand-logo-badge" title="GrabMart"><img src="/assets/grab-logo.svg" alt="Grab" class="brand-logo-img"/></div>',
      'ovo': '<div class="brand-logo-badge" title="OVO"><img src="/assets/ovo-logo.svg" alt="OVO" class="brand-logo-img"/></div>',
      'shopee': '<div class="brand-logo-badge" title="Shopee"><img src="/assets/shopee-logo.svg" alt="Shopee" class="brand-logo-img"/></div>',
      'happyfresh': '<div class="brand-logo-badge" title="HappyFresh"><img src="/assets/happyfresh-logo.svg" alt="HappyFresh" class="brand-logo-img"/></div>',
      'indomaret': '<div class="brand-logo-badge" title="Indomaret"><img src="/assets/indomaret-logo.svg" alt="Indomaret" class="brand-logo-img"/></div>',
      'alfamart': '<div class="brand-logo-badge" title="Alfamart"><img src="/assets/alfamart-logo.svg" alt="Alfamart" class="brand-logo-img"/></div>',
      'alfamidi': '<div class="brand-logo-badge" title="Alfamidi"><img src="/assets/alfamidi-logo.svg" alt="Alfamidi" class="brand-logo-img"/></div>',
      'transmart': '<div class="brand-logo-badge" title="Transmart"><img src="/assets/transmart-logo.svg" alt="Transmart" class="brand-logo-img"/></div>',
      'lottemart': '<div class="brand-logo-badge" title="LotteMart"><img src="/assets/lottemart-logo.svg" alt="LotteMart" class="brand-logo-img"/></div>',
      'lippo': '<div class="brand-logo-badge" title="Lippo Group"><img src="/assets/lippo-logo.svg" alt="Lippo Group" class="brand-logo-img"/></div>',
      'siloam': '<span class="brand-text-badge">Siloam</span>',
      'dc': '<span class="brand-text-badge">Central DC</span>',
      'sublease': '<span class="brand-text-badge">Sublease</span>',
      'vs': '<span class="brand-pill-vs">vs</span>'
    };
    return logoKeys.split(',').map(k => map[k.trim()] || '').join('');
  }

  function updateTowsInspector(target) {
    if (!target) return;
    const item = target.closest('.tows-item');
    const insBox = document.getElementById('tows-ins-box');
    if (!item || !item.dataset.code || !insBox) return;

    const pill = document.getElementById('tows-ins-pill');
    const title = document.getElementById('tows-ins-title');
    const source = document.getElementById('tows-ins-source');
    const body = document.getElementById('tows-ins-body');
    const logos = document.getElementById('tows-ins-logos');

    const type = item.dataset.type || 'SO';
    const pillClass = type === 'SO' ? 'tows-pill-so' : type === 'WO' ? 'tows-pill-wo' : type === 'ST' ? 'tows-pill-st' : 'tows-pill-wt';
    const typeLabel = type === 'SO' ? 'MAXI-MAXI' : type === 'WO' ? 'MINI-MAXI' : type === 'ST' ? 'MAXI-MINI' : 'MINI-MINI';

    const nameText = window.t ? window.t(item.dataset.name) : item.dataset.name;
    const explText = window.t ? window.t(item.dataset.expl) : item.dataset.expl;
    const labelRationale = window.t ? window.t('Strategic Implementation Rationale:') : 'Strategic Implementation Rationale:';
    const labelFactors = window.t ? window.t('Factors:') : 'Factors:';

    if (pill) {
      pill.textContent = item.dataset.code + ' (' + typeLabel + ')';
      pill.className = 'tows-ins-pill ' + pillClass;
    }
    if (title) title.textContent = nameText + ' · ' + labelFactors + ' ' + item.dataset.tags;
    if (logos) logos.innerHTML = renderBrandPills(item.dataset.logos || '');
    if (source) source.textContent = item.dataset.source;
    if (body) body.innerHTML = '<strong>' + labelRationale + '</strong> ' + explText;

    document.querySelectorAll('.tows-item').forEach(i => i.classList.remove('is-active'));
    item.classList.add('is-active');
    insBox.classList.add('is-visible');
  }

  function hideTowsInspector() {
    const insBox = document.getElementById('tows-ins-box');
    if (insBox) insBox.classList.remove('is-visible');
    document.querySelectorAll('.tows-item').forEach(i => i.classList.remove('is-active'));
  }


  listen(document, 'click', function(e) {
    const item = e.target.closest('.tows-item');
    if (item) {
      updateTowsInspector(item);
    } else if (!e.target.closest('#tows-ins-box') && !e.target.closest('.tows-grid')) {
      hideTowsInspector();
    }
  });

  listen(document, 'mouseleave', function(e) {
    hideTowsInspector();
  });


const matrixInspectors = [
  ['space', '.dim-table-row', inspectSpaceFactorRow],
  ['space', '.space-dim-card', inspectSpaceDimensionCard],
  ['space', '.space-comp-btn, .space-vector-group', el => selectSpaceCompany(el.dataset.company)],
  ['bcg', '.bcg-row, .bcg-bubble-group, .bcg-fmt-btn', el => selectBcgDivision(el.dataset.division)],
  ['ie', '.ie-row, .ie-bubble-group, .ie-fmt-btn', el => matrixIeRender?.(el.dataset.division)],
  ['cpm', '.cpm-hoverable', updateCpmInspector],
  ['swot', '.swot-item', updateSwotInspector],
  ['efe', '.efe-row', updateEfeInspector],
  ['ife', '.ife-row', updateIfeInspector],
  ['tows', '.tows-item', updateTowsInspector],
  ['qspm', '.qspm-row'],
  ['gsm', '.gsm-table tbody tr[data-division], .gsm-bubble-group, .gsm-fmt-btn', el => window.selectGsmDivision(el.dataset.division)],
];
const matrixPreview = document.createElement('div');
matrixPreview.className = 'matrix-preview';
matrixPreview.hidden = true;
matrixPreview.setAttribute('aria-hidden', 'true');
const matrixDrawer = document.createElement('dialog');
matrixDrawer.className = 'matrix-detail';
matrixDrawer.setAttribute('aria-labelledby', 'matrix-detail-title');
matrixDrawer.innerHTML = '<div class="matrix-detail-head"><div class="matrix-detail-head-main"><div class="matrix-meta-bar"><span class="matrix-kind-badge"></span><span class="matrix-status-pill"></span></div><h3 id="matrix-detail-title"></h3><p class="matrix-detail-sub"></p></div><button class="matrix-detail-close" type="button" aria-label="Close details" autofocus><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></div><div class="matrix-detail-scroll"></div>';

function findMatrixItem(element) {
  if (element.closest?.('.cpm-td-weight')) {
    element = element.closest('tr').querySelector('.cpm-hoverable');
    if (!element) return null;
  }
  for (const [kind, selector, render] of matrixInspectors) {
    const target = element.closest?.(selector);
    if (target?.closest('.deck-slide')?.querySelector('#' + kind + '-ins-box')) return {kind, target, render};
  }
  return null;
}

const financialRatiosData = {
  current_ratio: {
    title: "Current Ratio · Liquidity Buffer (0.56x → 1.97x)",
    title_id: "Rasio Lancar · Bantalan Likuiditas (0,56x → 1,97x)",
    summary: "Measures MPPA's ability to cover short-term liabilities with liquid assets.",
    summary_id: "Mengukur kemampuan MPPA melunasi liabilitas jangka pendek dengan aset lancar.",
    formula: "Current Assets ÷ Current Liabilities (Audited AR2020 p. 182)",
    formula_id: "Aset Lancar ÷ Liabilitas Jangka Pendek (Laporan Tahunan 2020 hlm. 182)",
    benchmark: "Retail benchmark 1.20x–1.50x. 2020A plummeted to 0.56x (acute cash squeeze); 2023P recovers to 1.97x (+252%) ending cash squeeze.",
    benchmark_id: "Patokan industri ritel 1,20x–1,50x. 2020A anjlok ke 0,56x (krisis likuiditas); 2023P pulih ke 1,97x (+252%) menuntaskan krisis kas.",
    rationale: "Turnaround driver: Inventory reduction and positive operating cash flow from compact fresh stores eliminate the working capital deficit without requiring new bank loans.",
    rationale_id: "Pendorong pemulihan: Pengurangan persediaan dan arus kas operasi positif dari gerai format segar kompak menghapus defisit modal kerja tanpa perlu utang baru."
  },
  quick_ratio: {
    title: "Quick Ratio · Acid-Test Liquidity (0.21x → 1.79x)",
    title_id: "Rasio Cepat · Bantalan Likuiditas Uji Asam (0,21x → 1,79x)",
    summary: "Measures immediate liquid solvency without relying on inventory sales.",
    summary_id: "Mengukur solvabilitas likuid seketika tanpa bergantung pada penjualan persediaan.",
    formula: "(Cash & Cash Equivalents + Current Receivables) ÷ Current Liabilities",
    formula_id: "(Kas & Setara Kas + Piutang Usaha Lancar) ÷ Liabilitas Jangka Pendek",
    benchmark: "1.00x minimum liquidity floor. Surged from distressed 0.21x (2020A) to 1.79x (2023P), lifting quick assets by +752%.",
    benchmark_id: "Batas aman minimal 1,00x. Melonjak dari 0,21x (2020A) menjadi 1,79x (2023P), mengangkat aset likuid cepat sebesar +752%.",
    rationale: "Turnaround driver: Ensures an instant cash buffer to pay trade suppliers on time, permanently eliminating the risk of supplier payment freezes or merchandise embargoes.",
    rationale_id: "Pendorong pemulihan: Memastikan bantalan kas seketika untuk membayar pemasok dagang tepat waktu, mengeliminasi risiko pembekuan pasokan barang."
  },
  debt_to_assets: {
    title: "Total Debt to Total Assets · Balance Sheet Leverage (95.9% → 63.8%)",
    title_id: "Total Liabilitas terhadap Total Aset · Pengungkit Neraca (95,9% → 63,8%)",
    summary: "Proportion of MPPA's asset base financed through debt and lease liabilities.",
    summary_id: "Proporsi aset MPPA yang didanai melalui liabilitas dan sewa pembiayaan.",
    formula: "Total Liabilities ÷ Total Assets (Audited AR2020 Consolidated Balance Sheet)",
    formula_id: "Total Liabilitas ÷ Total Aset (Neraca Konsolidasian AR2020)",
    benchmark: "Prudent retail ceiling < 70.0%. Peaked at 95.9% in 2020A due to Rp2.87T capitalized PSAK 73 lease obligations; de-bulks to 63.8% by 2023P (-32.1 pp).",
    benchmark_id: "Batas aman industri ritel < 70,0%. Memuncak di 95,9% pada 2020A akibat beban sewa PSAK 73 sebesar Rp2,87T; turun ke 63,8% pada 2023P (-32,1 pp).",
    rationale: "Turnaround driver: Subleasing excess hypermarket floorplates and rightsizing anchor mall contracts sheds Rp1.2T in lease liabilities, restoring balance sheet resilience.",
    rationale_id: "Pendorong pemulihan: Sub-sewa kelebihan luas lantai hipermarket dan penyesuaian sewa mal memangkas liabilitas sewa Rp1,2T, memulihkan ketahanan neraca."
  },
  debt_to_equity: {
    title: "Long-term Bank Debt / Equity · Covenant Solvency (0.0% → 0.1%)",
    title_id: "Utang Bank Jangka Panjang / Ekuitas · Solvabilitas Kovenan (0,0% → 0,1%)",
    summary: "Tests compliance with long-term bank financing covenant limits.",
    summary_id: "Menguji kepatuhan terhadap batas kovenan pembiayaan bank jangka panjang.",
    formula: "Long-term Bank Borrowings ÷ Total Stockholders' Equity (AR2020 Note 15 & 18)",
    formula_id: "Pinjaman Bank Jangka Panjang ÷ Total Ekuitas (AR2020 Catatan 15 & 18)",
    benchmark: "BNI Loan Covenant Ceiling: 250% / 2.50x. MPPA long-term bank debt is virtually zero (0.0% in 2020A; 0.1% in 2023P pro forma).",
    benchmark_id: "Batas Atas Kovenan BNI: 250% / 2,50x. Utang bank jangka panjang MPPA mendekati nol (0,0% di 2020A; 0,1% di 2023P proforma).",
    rationale: "Turnaround driver: Entire turnaround and store expansion is self-funded via Rp120B asset sales and operational cash flow, completely avoiding dilutive debt burdens.",
    rationale_id: "Pendorong pemulihan: Seluruh pemulihan didanai mandiri dari pelepasan aset Rp120M dan arus kas operasi, terbebas dari jeratan beban bunga utang baru."
  },
  tie: {
    title: "Times-Interest-Earned (TIE) · Operating Interest Coverage (-0.52x → 5.34x)",
    title_id: "Cakupan Bunga (TIE) · Rasio Pelunasan Bunga Operasional (-0,52x → 5,34x)",
    summary: "Operating profit buffer available to service net finance costs.",
    summary_id: "Kapasitas laba usaha untuk menutupi biaya keuangan neto.",
    formula: "Operating Profit (EBIT) ÷ Net Finance Costs (Matahari.xlsx Part II Row 162)",
    formula_id: "Laba Usaha (EBIT) ÷ Biaya Keuangan Neto (Matahari.xlsx Bagian II Baris 162)",
    benchmark: "BNI Loan Covenant Floor: 2.00x minimum coverage. Sunk to -0.52x in 2020A; surges to 4.89x in 2021P and 5.34x in 2023P, safely above bank covenants.",
    benchmark_id: "Batas Minimal Kovenan BNI: 2,00x. Anjlok ke -0,52x di 2020A; melonjak ke 4,89x (2021P) dan 5,34x (2023P), jauh di atas batas aman bank.",
    rationale: "Turnaround driver: Halts 4 consecutive loss years as EBIT rebounds to Rp1.43T through higher fresh food gross margins and elimination of negative store rental bleed.",
    rationale_id: "Pendorong pemulihan: Menghentikan kerugian 4 tahun berturut-turut seiring laba usaha (EBIT) berbalik ke Rp1,43T berkat margin segar dan pemangkasan sewa gerai rugi."
  },
  inv_turnover: {
    title: "Inventory Turnover · Stock Velocity (5.64x → 7.14x)",
    title_id: "Perputaran Persediaan · Kecepatan Arus Barang (5,64x → 7,14x)",
    summary: "Frequency of inventory cycling and replenishment per year.",
    summary_id: "Frekuensi perputaran dan pembaruan stok persediaan dalam setahun.",
    formula: "Cost of Goods Sold (COGS) ÷ Average Merchandise Inventory",
    formula_id: "Beban Pokok Penjualan (HPP) ÷ Rata-rata Persediaan Barang Dagang",
    benchmark: "Modern grocery retail benchmark 6.0x–8.0x. Accelerates +27% from 5.64x (2020A) to 7.14x across 2021P–2023P.",
    benchmark_id: "Patokan ritel bahan pokok modern 6,0x–8,0x. Meningkat +27% dari 5,64x (2020A) menjadi 7,14x sepanjang 2021P–2023P.",
    rationale: "Turnaround driver: Compact Hyfresh format emphasizes fresh perishables with daily delivery cycles, drastically reducing non-food inventory obsolescence and markdown write-offs.",
    rationale_id: "Pendorong pemulihan: Format Hyfresh kompak berfokus pada pangan segar dengan siklus kirim harian, memangkas persediaan lambat laku dan risiko pembusukan."
  },
  fixed_asset_turnover: {
    title: "Fixed Assets Turnover · Floorplate Productivity (8.54x → 9.47x)",
    title_id: "Perputaran Aset Tetap · Produktivitas Luas Lantai (8,54x → 9,47x)",
    summary: "Sales generation efficiency per unit of net physical retail property & equipment.",
    summary_id: "Efisiensi penjualan neto yang dihasilkan per unit aset tetap fisik gerai.",
    formula: "Net Sales ÷ Net Property, Plant & Equipment (Fixed Assets)",
    formula_id: "Penjualan Neto ÷ Aset Tetap Neto",
    benchmark: "Retail standard 7.0x–9.0x. Improves from 8.54x in 2020A to 9.47x in 2023P, establishing top-tier asset revenue density.",
    benchmark_id: "Standar ritel 7,0x–9,0x. Meningkat dari 8,54x di 2020A ke 9,47x di 2023P, mencapai densitas penjualan aset papan atas.",
    rationale: "Turnaround driver: High revenue density per m² in compact neighborhood supermarkets replaces cavernous, low-yield hypermarket floorplates.",
    rationale_id: "Pendorong pemulihan: Densitas penjualan per m² yang tinggi pada supermarket pemukiman menggantikan gerai hipermarket raksasa yang tidak produktif."
  },
  total_asset_turnover: {
    title: "Total Assets Turnover · Capital Efficiency (1.50x → 1.01x)",
    title_id: "Perputaran Total Aset · Efisiensi Modal (1,50x → 1,01x)",
    summary: "Overall corporate sales throughput relative to total balance sheet assets.",
    summary_id: "Kapasitas penjualan korporat secara keseluruhan terhadap total aset neraca.",
    formula: "Net Sales ÷ Total Corporate Assets (Audited Balance Sheet)",
    formula_id: "Penjualan Neto ÷ Total Aset Korporat (Neraca Auditan)",
    benchmark: "Grocery retail norm 1.0x–1.5x. Moderates from 1.50x in 2020A to 1.01x in 2023P as asset base strengthens with accumulated cash.",
    benchmark_id: "Norma ritel bahan pokok 1,0x–1,5x. Bergerak dari 1,50x di 2020A ke 1,01x di 2023P seiring penguatan aset melalui akumulasi kas likuid.",
    rationale: "Turnaround driver: Total asset base expands with massive cash buildup (Rp3.5T liquid assets by 2023P), stabilizing corporate liquidity.",
    rationale_id: "Pendorong pemulihan: Total aset membesar karena akumulasi kas yang kuat (mencapai Rp3,5T di 2023P), menstabilkan ketahanan likuiditas korporat."
  },
  ar_turnover: {
    title: "Accounts Receivable Turnover · Settlement Speed (34.92x → 14.29x)",
    title_id: "Perputaran Piutang Usaha · Kecepatan Kliring (34,92x → 14,29x)",
    summary: "Speed of customer and partner payment collection across retail channels.",
    summary_id: "Kecepatan penerimaan pembayaran pelanggan dan mitra kanal ritel.",
    formula: "Net Sales ÷ Average Accounts Receivable (Trade & Other Receivables)",
    formula_id: "Penjualan Neto ÷ Rata-rata Piutang Usaha",
    benchmark: "FMCG / Grocery retail benchmark 12.0x–20.0x. Adjusts from 34.92x in 2020A to 14.29x across 2021P–2023P.",
    benchmark_id: "Patokan ritel sembako/konsumsi 12,0x–20,0x. Bergerak dari 34,92x di 2020A ke 14,29x pada 2021P–2023P.",
    rationale: "Turnaround driver: Reflects the strategic expansion of omnichannel on-demand delivery partnerships (GrabMart, Shopee, GoMart) which operate on scheduled 20–25 day clearing terms.",
    rationale_id: "Pendorong pemulihan: Mencerminkan ekspansi kemitraan e-groceries (GrabMart, Shopee, GoMart) dengan siklus penagihan terjadwal 20–25 hari."
  },
  collection_period: {
    title: "Average Collection Period · Days Sales Outstanding (10.5 → 25.6 days)",
    title_id: "Periode Penagihan Rata-rata · Hari Penagihan Piutang (10,5 → 25,6 hari)",
    summary: "Average number of days required to collect trade receivables into cash.",
    summary_id: "Jumlah hari rata-rata yang dibutuhkan untuk mencairkan piutang menjadi kas.",
    formula: "365 Days ÷ Accounts Receivable Turnover",
    formula_id: "365 Hari ÷ Perputaran Piutang Usaha",
    benchmark: "Modern retail standard 15–30 days. Moves from 10.5 days (2020A cash checkout) to 25.6 days (marketplace partner settlements).",
    benchmark_id: "Standar ritel modern 15–30 hari. Bergeser dari 10,5 hari (kasir tunai 2020A) ke 25,6 hari (penyelesaian mitra platform daring).",
    rationale: "Turnaround driver: While direct in-store shoppers pay instantly, marketplace on-demand delivery sales run on 25-day settlement cycles, well within safe working capital limits.",
    rationale_id: "Pendorong pemulihan: Konsumen gerai fisik membayar seketika, sedangkan penjualan lewat mitra e-commerce cair dalam 25 hari, tetap aman dalam batas modal kerja."
  },
  gross_profit_margin: {
    title: "Gross Profit Margin · Merchandising Markup (19.4% → 50.0%)",
    title_id: "Margin Laba Kotor · Nilai Tambah Dagang (19,4% → 50,0%)",
    summary: "Gross merchandising value retained after accounting for direct cost of goods sold.",
    summary_id: "Nilai tambah perdagangan yang tersisa setelah memperhitungkan beban pokok penjualan.",
    formula: "Gross Profit ÷ Net Sales × 100% (Matahari.xlsx Part II Row 156)",
    formula_id: "Laba Kotor ÷ Penjualan Neto × 100% (Matahari.xlsx Bagian II Baris 156)",
    benchmark: "Grocery benchmark 18%–24%; fresh food specialty 28%–35%. Model's upside case reaches 50.0% (illustrative scenario).",
    benchmark_id: "Patokan ritel sembako 18%–24%; gerai segar khusus 28%–35%. Skenario optimis model mencapai 50,0% (skenario ilustratif).",
    rationale: "Turnaround driver: (1) Direct farmgate procurement bypassing middlemen via Balaraja central cold chain; (2) Shifting sales mix to 60%+ fresh produce (28–35% gross margins); (3) Exiting low-margin SmartClub wholesale.",
    rationale_id: "Pendorong pemulihan: (1) Pasokan langsung dari sentra tani via rantai dingin Balaraja; (2) Porsi pangan segar ditingkatkan hingga 60%+ (margin 28–35%); (3) Penghentian grosir SmartClub bermargin tipis."
  },
  operating_profit_margin: {
    title: "Operating Profit Margin · Core Business Earnings (-2.1% → +19.0%)",
    title_id: "Margin Laba Usaha · Keuntungan Operasional Inti (-2,1% → +19,0%)",
    summary: "Operating profit (EBIT) percentage generated from every rupiah of net sales.",
    summary_id: "Persentase laba operasional (EBIT) yang dihasilkan dari setiap rupiah penjualan neto.",
    formula: "Operating Profit (EBIT) ÷ Net Sales × 100%",
    formula_id: "Laba Usaha (EBIT) ÷ Penjualan Neto × 100%",
    benchmark: "Modern supermarket industry standard 4.0%–7.0%. Rebounds from -2.1% in 2020A to +19.0% in 2023P, halting 4 consecutive loss years (-Rp3.53T).",
    benchmark_id: "Standar industri supermarket modern 4,0%–7,0%. Berbalik dari -2,1% di 2020A ke +19,0% di 2023P, menghentikan kerugian 4 tahun berturut-turut (-Rp3,53T).",
    rationale: "Turnaround driver: The Scissors Effect—expanding high-margin compact fresh sales while eliminating Rp180B in mall rental cash burn and reducing SG&A overhead.",
    rationale_id: "Pendorong pemulihan: Efek Gunting (Scissors Effect)—memperluas gerai segar bermargin tinggi sekaligus memangkas beban sewa mal Rp180M dan beban umum usaha."
  },
  roa: {
    title: "Return on Assets (ROA) · Capital Deployment Quality (-9.0% → +11.7%)",
    title_id: "Imbal Hasil atas Aset (ROA) · Mutu Alokasi Modal (-9,0% → +11,7%)",
    summary: "Net bottom-line profitability generated across all corporate assets.",
    summary_id: "Kemampuan seluruh aset korporat dalam menghasilkan laba bersih setelah pajak.",
    formula: "Net Income ÷ Total Assets × 100%",
    formula_id: "Laba Bersih ÷ Total Aset × 100%",
    benchmark: "Supermarket industry peer average 4.5%–6.0%. Recovers from -9.0% in 2020A to +11.7% in 2023P, delivering superior capital productivity.",
    benchmark_id: "Rata-rata industri supermarket 4,5%–6,0%. Pulih dari -9,0% di 2020A ke +11,7% di 2023P, memberikan produktivitas modal prima.",
    rationale: "Turnaround driver: Downsizing hypermarket boxes lifts sales density per invested asset, transforming dead mall space into productive retail.",
    rationale_id: "Pendorong pemulihan: Pengecilan luas hipermarket meningkatkan densitas penjualan per aset investasi, mengubah ruang mal pasif menjadi gerai produktif."
  },
  roe: {
    title: "Return on Equity (ROE) · Shareholder Value Rebound (-219.4% → +32.3%)",
    title_id: "Imbal Hasil atas Ekuitas (ROE) · Nilai Pemegang Saham (-219,4% → +32,3%)",
    summary: "Rate of return generated on shareholders' equity capital.",
    summary_id: "Tingkat pengembalian laba yang dihasilkan atas modal ekuitas pemegang saham.",
    formula: "Net Income ÷ Total Stockholders' Equity × 100%",
    formula_id: "Laba Bersih ÷ Total Ekuitas Pemegang Saham × 100%",
    benchmark: "High-performing retailer hurdle 15.0%–25.0%. Recovers from catastrophic -219.4% in 2020A to +32.3% in 2023P.",
    benchmark_id: "Target kinerja ritel unggul 15,0%–25,0%. Pulih dari posisi ekstrem -219,4% di 2020A menjadi +32,3% di 2023P.",
    rationale: "Turnaround driver: Restores cumulative equity from depleted Rp185B back to Rp2.69T through retained earnings without any dilutive share issuance.",
    rationale_id: "Pendorong pemulihan: Memulihkan ekuitas dari Rp185M menjadi Rp2,69T murni dari akumulasi laba bersih ditahan tanpa hak memesan efek terlebih dahulu (rights issue)."
  }
};

const ieRatioDivisionData = {
  hypermart: {
    name: "Hypermart",
    name_id: "Hypermart",
    sales: "Rp5,698 B",
    share: "84.5%",
    ife: "2.16 (Average)",
    ife_id: "2.16 (Rata-rata)",
    efe: "2.42 (Medium)",
    efe_id: "2.42 (Sedang)",
    cell: "Cell V / VIII Drag",
    presc: "Reducing Store Size & Online Order Centers",
    presc_id: "Perampingan Luas & Hub Pesanan Daring",
    shareExpl: "84.5% revenue concentration indicates high portfolio vulnerability to large-format hypermarket foot-traffic contraction.",
    shareExpl_id: "Pangsa 84,5% menunjukkan konsentrasi pendapatan tinggi dan kerentanan terhadap penurunan kunjungan mal.",
    ifeExpl: "Score 2.16 reflects strong logistics infrastructure offset by high PSAK 73 lease liabilities and consecutive loss years.",
    ifeExpl_id: "Skor 2,16 mencerminkan keunggulan rantai pasok yang terbebani liabilitas sewa PSAK 73 dan kerugian beruntun.",
    efeExpl: "Score 2.42 indicates moderate response to external headwinds; digital delivery partnerships offset mall restrictions.",
    efeExpl_id: "Skor 2,42 mencerminkan respons memadai terhadap tantangan; kemitraan belanja daring mengimbangi pembatasan mal.",
    prescExpl: "Downsize 6,000 m² boxes to 2,500 m² active storefronts with rear multi-platform on-demand delivery dispatch.",
    prescExpl_id: "Perampingan gerai 6.000 m² ke 2.500 m² dengan hub pengantaran daring multi-platform di area belakang."
  },
  foodmart: {
    name: "Foodmart & Primo",
    name_id: "Foodmart & Primo",
    sales: "Rp689 B",
    share: "10.2%",
    ife: "2.38 (Average)",
    ife_id: "2.38 (Rata-rata)",
    efe: "2.52 (Medium)",
    efe_id: "2.52 (Sedang)",
    cell: "Cell V Hold & Maintain",
    presc: "Market Penetration (Gourmet)",
    presc_id: "Penetrasi Pasar (Gourmet)",
    shareExpl: "Contributes 10.2% of MPPA sales across 25 supermarket and gourmet locations.",
    shareExpl_id: "Menyumbang 10,2% penjualan MPPA dari 25 gerai supermarket dan segmen gourmet.",
    ifeExpl: "Established premium brand equity and fresh assortment, constrained by fragmented marketing.",
    ifeExpl_id: "Ekuitas merek premium dan kurasi produk segar baik, namun terpecah oleh fragmentasi pemasaran.",
    efeExpl: "Scores 2.52; affluent residential catchments provide stable basket sizes despite competition.",
    efeExpl_id: "Skor 2,52; perumahan kelas atas memberikan nilai transaksi stabil di tengah persaingan ketat.",
    prescExpl: "Rebrand mainstream Foodmart under the unified \"Hy-\" master brand family while protecting Primo as a premium niche.",
    prescExpl_id: "Penyatuan merek Foodmart ke bawah bendera \"Hy-\" dan mempertahankan Primo untuk ceruk premium."
  },
  hyfresh: {
    name: "Hyfresh",
    name_id: "Hyfresh",
    sales: "Rp135 B",
    share: "2.0%",
    ife: "2.85 (Average-Strong)",
    ife_id: "2.85 (Rata-rata Kuat)",
    efe: "3.10 (High)",
    efe_id: "3.10 (Tinggi)",
    cell: "Cell II Grow & Build",
    presc: "Aggressive Store Rollout",
    presc_id: "Ekspansi Gerai Agresif",
    shareExpl: "Currently 2.0% share (9 stores); represents MPPA's primary turnaround growth vehicle.",
    shareExpl_id: "Saat ini 2,0% pangsa (9 gerai); motor utama pertumbuhan pemulihan MPPA.",
    ifeExpl: "Score 2.85 reflects superior sales density, lean operational costs, and high fresh mix (60%+).",
    ifeExpl_id: "Skor 2,85 berkat densitas penjualan tinggi, biaya operasional ramping, dan bauran segar 60%+.",
    efeExpl: "Score 3.10 capitalizes on neighborhood residential grocery shifts and proximity shopping demand.",
    efeExpl_id: "Skor 3,10 memanfaatkan pergeseran konsumen ke belanja kebutuhan pokok di pemukiman sekitar.",
    prescExpl: "Aggressively expand 500–1,000 m² neighborhood supermarket footprint competing directly with Alfamidi.",
    prescExpl_id: "Ekspansi agresif gerai pemukiman 500–1.000 m² bersaing langsung dengan Alfamidi."
  },
  boston: {
    name: "Boston Health & Beauty",
    name_id: "Boston Health & Beauty",
    sales: "Rp45 B",
    share: "0.7%",
    ife: "2.75 (Average-Strong)",
    ife_id: "2.75 (Rata-rata Kuat)",
    efe: "3.15 (High)",
    efe_id: "3.15 (Tinggi)",
    cell: "Cell II Grow & Build",
    presc: "Online And In-Store & Store-in-Store",
    presc_id: "Daring & Luring serta Toko-dalam-Toko",
    shareExpl: "Contributes 0.7% of sales across 62 pharmacy and personal care locations.",
    shareExpl_id: "Menyumbang 0,7% penjualan dari 62 lokasi apotek dan perawatan diri.",
    ifeExpl: "Strong 28–32% gross margin profile and pharmacy licensing synergies across the store network.",
    ifeExpl_id: "Profil margin kotor kuat 28–32% dan sinergi perizinan farmasi di jaringan gerai.",
    efeExpl: "Score 3.15 is driven by massive pandemic-era health, vitamin, and personal wellness demand.",
    efeExpl_id: "Skor 3,15 didorong lonjakan kebutuhan vitamin, sanitasi, dan kesehatan selama pandemi.",
    prescExpl: "Deploy store-in-store modules inside all Hyfresh and resized Hypermart locations; exit unprofitable standalone mall kiosks.",
    prescExpl_id: "Penerapan konsep toko-dalam-toko di semua Hyfresh dan gerai perampingan Hypermart; keluar dari kios mal mandiri yang rugi."
  },
  smartclub: {
    name: "SmartClub Wholesale",
    name_id: "SmartClub Wholesale",
    sales: "Rp134 B",
    share: "2.0%",
    ife: "1.65 (Weak)",
    ife_id: "1.65 (Lemah)",
    efe: "1.60 (Low)",
    efe_id: "1.60 (Rendah)",
    cell: "Cell IX Harvest / Divest",
    presc: "Liquidation & Lease Exit",
    presc_id: "Likuidasi & Pengakhiran Sewa",
    shareExpl: "2.0% share from 2 wholesale units; subscale operations drag consolidated profitability.",
    shareExpl_id: "Pangsa 2,0% dari 2 gerai grosir; skala kecil membebani profitabilitas konsolidasi.",
    ifeExpl: "Score 1.65 reflects thin wholesale gross margins, high working capital inventory tie-up, and B2B credit risk.",
    ifeExpl_id: "Skor 1,65 karena margin grosir tipis, modal kerja tertahan di persediaan, dan risiko kredit B2B.",
    efeExpl: "Score 1.60 reflects fierce price wars against dominant wholesale incumbents (Lotte Wholesale, IndoGrosir).",
    efeExpl_id: "Skor 1,60 akibat perang harga menghadapi pemain grosir mapan (Lotte Wholesale, IndoGrosir).",
    prescExpl: "Liquidate wholesale inventory and exit leases to release ~Rp70B in working capital to fund Hyfresh expansion.",
    prescExpl_id: "Likuidasi persediaan dan pengakhiran sewa untuk membebaskan ~Rp70M modal kerja guna ekspansi Hyfresh."
  },
  fmx: {
    name: "FMX (Foodmart Xpress)",
    name_id: "FMX (Foodmart Xpress)",
    sales: "Rp46 B",
    share: "0.7%",
    ife: "1.80 (Weak)",
    ife_id: "1.80 (Lemah)",
    efe: "1.85 (Low)",
    efe_id: "1.85 (Rendah)",
    cell: "Cell IX Harvest / Divest",
    presc: "Hy-Express Pilot (12–18 mo gate)",
    presc_id: "Uji Coba Hy-Express (Evaluasi 12–18 Bulan)",
    shareExpl: "0.7% share across 14 convenience kiosks with chronic negative unit economics.",
    shareExpl_id: "Pangsa 0,7% dari 14 kios minimarket dengan ekonomi unit yang merugi berkepanjangan.",
    ifeExpl: "Score 1.80 reflects lack of scale against 30,000+ minimarket incumbents (Indomaret & Alfamart).",
    ifeExpl_id: "Skor 1,80 karena kalah skala jauh dibanding 30.000+ gerai Indomaret & Alfamart.",
    efeExpl: "Score 1.85 indicates inability to compete on convenience store density without billions in capex.",
    efeExpl_id: "Skor 1,85 menunjukkan ketidakmampuan bersaing pada kerapatan gerai tanpa capex raksasa.",
    prescExpl: "Prune chronically loss-making mall kiosks; pilot 5–6 asset-light transit pickup nodes under \"Hy-Express\" with strict milestones.",
    prescExpl_id: "Tutup kios mal yang rugi; uji coba 5–6 titik transit ringan modal \"Hy-Express\" dengan target evaluasi ketat."
  },
  corporate: {
    name: "MPPA Corporate Total",
    name_id: "MPPA Total Konsolidasian",
    sales: "Rp6,747 B",
    share: "100.0%",
    ife: "2.21 (Weighted Average)",
    ife_id: "2.21 (Rata-rata Tertimbang)",
    efe: "2.46 (Weighted Medium)",
    efe_id: "2.46 (Sedang Tertimbang)",
    cell: "Cell V Hold & Maintain",
    presc: "Portfolio Restructuring",
    presc_id: "Restrukturisasi Portofolio",
    shareExpl: "Reconciled audited 2020 net retail sales across all 211 stores in the multi-format portfolio.",
    shareExpl_id: "Total penjualan neto ritel 2020 auditan dari seluruh 211 gerai dalam portofolio.",
    ifeExpl: "Weighted score 2.21 falls below the 2.50 threshold due to 4 consecutive loss years (-Rp3.53T) and PSAK 73 liabilities.",
    ifeExpl_id: "Skor tertimbang 2,21 berada di bawah ambang 2,50 akibat rugi 4 tahun (-Rp3,53T) dan liabilitas PSAK 73.",
    efeExpl: "Weighted score 2.46 indicates moderate external responsiveness, balancing e-grocery strengths against mall traffic restrictions.",
    efeExpl_id: "Skor tertimbang 2,46 menunjukkan responsivitas sedang, mengimbangi kekuatan e-groceries dengan kendala mal.",
    prescExpl: "Execute Alfamart/Alfamidi playbook: Downsize hypermarkets to fund compact fresh rollout and divest non-core wholesale.",
    prescExpl_id: "Jalankan strategi terpadu: Perampingan hipermarket untuk mendanai gerai segar kompak dan divestasi grosir non-inti."
  }
};

function matrixPreviewContent({kind, target}) {
  if (kind === 'financial-ratio') {
    const id = document.documentElement.lang === 'id';
    const key = target.dataset.ratio;
    const item = financialRatiosData[key];
    if (!item) return ['Financial Ratio', '', '', ''];
    const title = id ? item.title_id : item.title;
    const summary = id ? item.summary_id : item.summary;
    const formula = (id ? 'Formula' : 'Formula') + ': ' + (id ? item.formula_id : item.formula) + ' | ' + (id ? 'Patokan' : 'Benchmark') + ': ' + (id ? item.benchmark_id : item.benchmark);
    const rationale = id ? item.rationale_id : item.rationale;
    return [title, summary, rationale, formula];
  }

  if (kind === 'ie-ratio-cell') {
    const id = document.documentElement.lang === 'id';
    const cellType = target.dataset.ratioType;
    const divisionKey = target.closest('tr')?.dataset.division || 'corporate';
    const div = ieRatioDivisionData[divisionKey] || ieRatioDivisionData.corporate;
    const divName = id ? div.name_id : div.name;

    if (cellType === 'share') {
      const title = divName + ' · ' + (id ? 'Rasio Kontribusi Penjualan' : 'Sales Contribution Ratio');
      const summary = div.sales + ' (' + div.share + (id ? ' dari Total Penjualan MPPA Rp6.747 B)' : ' of Total MPPA Sales Rp6,747 B)');
      const formula = (id ? 'Formula: Penjualan Format ÷ Total Penjualan MPPA (Rp6.747 B) × 100%' : 'Formula: Format Sales ÷ Total MPPA Sales (Rp6,747 B) × 100%') + ' | ' + (id ? 'Patokan: Mengukur konsentrasi pendapatan portofolio' : 'Benchmark: Measures revenue dependency across retail formats');
      const rationale = id ? div.shareExpl_id : div.shareExpl;
      return [title, summary, rationale, formula];
    }
    if (cellType === 'ife') {
      const title = divName + ' · IFE ' + (id ? 'Skor Tertimbang' : 'Weighted Score') + ': ' + (id ? div.ife_id : div.ife);
      const summary = id ? 'Skor Evaluasi Faktor Internal pada skala 1,0 (Lemah) hingga 4,0 (Kuat)' : 'Internal Factor Evaluation score on 1.0 (Weak) to 4.0 (Strong) scale';
      const formula = (id ? 'Formula: ∑ (Bobot Faktor Internal × Peringkat)' : 'Formula: ∑ (Internal Factor Weights × Ratings)') + ' | ' + (id ? 'Ambang Batas: Nilai 2,50 membedakan kemampuan lemah (<2,50) dan kuat (≥2,50)' : 'Benchmark: 2.50 threshold divides weak (<2.50) from strong (≥2.50)');
      const rationale = id ? div.ifeExpl_id : div.ifeExpl;
      return [title, summary, rationale, formula];
    }
    if (cellType === 'efe') {
      const title = divName + ' · EFE ' + (id ? 'Skor Tertimbang' : 'Weighted Score') + ': ' + (id ? div.efe_id : div.efe);
      const summary = id ? 'Skor Evaluasi Faktor Eksternal pada skala 1,0 (Rendah) hingga 4,0 (Tinggi)' : 'External Factor Evaluation score on 1.0 (Low) to 4.0 (High) scale';
      const formula = (id ? 'Formula: ∑ (Bobot Faktor Eksternal × Peringkat)' : 'Formula: ∑ (External Factor Weights × Ratings)') + ' | ' + (id ? 'Ambang Batas: Nilai 2,50 membedakan responsivitas rendah (<2,50) dari tinggi (≥2,50)' : 'Benchmark: 2.50 threshold divides low (<2.50) from high (≥2.50) responsiveness');
      const rationale = id ? div.efeExpl_id : div.efeExpl;
      return [title, summary, rationale, formula];
    }
    if (cellType === 'presc') {
      const title = divName + ' · ' + div.cell + ' (' + (id ? div.presc_id : div.presc) + ')';
      const summary = id ? 'Pemetaan 9-Sel Matriks Internal-External Fred David' : 'Fred David 9-Cell Internal-External Matrix positioning';
      const formula = (id ? 'Koordinat: Sumbu X (IFE ' + (id ? div.ife_id : div.ife) + ') & Sumbu Y (EFE ' + (id ? div.efe_id : div.efe) + ')' : 'Coordinates: X-axis (IFE ' + div.ife + ') & Y-axis (EFE ' + div.efe + ')') + ' | ' + (id ? 'Wilayah Strategis: I (Tumbuh/Bangun), II (Pertahankan), III (Panen/Divestasi)' : 'Strategic Region: I (Grow & Build), II (Hold & Maintain), III (Harvest / Divest)');
      const rationale = id ? div.prescExpl_id : div.prescExpl;
      return [title, summary, rationale, formula];
    }
    return [divName, '', '', ''];
  }

  if (kind === 'financial-cell') {
    const id = document.documentElement.lang === 'id';
    const row = target.parentElement;
    const table = target.closest('table');
    const column = target.cellIndex;
    const compact = cell => cell?.innerText.trim().replace(/\s*\n\s*/g, ' · ') || '';
    const item = compact(row.cells[0]);
    const note = row.querySelector('.td-desc');
    const driver = compact(note);
    const margin = note?.dataset.marginWhy;
    const marginBasis = note?.dataset.marginBasis;
    const header = table.tHead.rows[0].cells[column];
    if (target.classList.contains('td-desc')) return [item, '', margin || driver, marginBasis];

    const period = compact(header);
    const title = `${item} · ${period}`;
    const value = compact(target);
    const basis = header.classList.contains('th-hist')
      ? (id ? 'Angka historis dari laporan keuangan auditan MPPA.' : 'Historical figure from MPPA’s audited financial statements.')
      : driver;
    if (margin && !header.classList.contains('th-hist')) return [title, value, margin, marginBasis];
    return [title, value, basis];
  }

  if (kind === 'qspm-strategy') {
    const id = document.documentElement.lang === 'id';
    const expansion = target.dataset.qspmStrategy === '1';
    const reason = expansion
      ? (id ? 'Kami memilih paket ini sebagai opsi pertumbuhan. SO3 membuka gerai Hyfresh kompak dekat pelanggan, dan SO4 menyatukan merek terpilih di bawah Hy-. Keduanya menjawab pertanyaan yang sama: dari mana pertumbuhan penjualan baru akan datang?' : 'We shortlisted this as the growth option. SO3 puts compact Hyfresh stores closer to shoppers, and SO4 brings selected banners under Hy-. Together they answer one question: where can new sales growth come from?')
      : (id ? 'Kami memilih paket ini sebagai opsi untuk memperbaiki gerai yang sudah ada. WO1 mengurangi ruang Hypermart yang kurang produktif, dan SO1 memanfaatkan mitra pengiriman. Bersama-sama, keduanya bisa menekan biaya ruang dan melayani pesanan daring.' : 'We shortlisted this as the option for improving existing stores. WO1 reduces underused Hypermart space, and SO1 brings in delivery partners. Together they can lower space costs and serve online orders.');
    const method = id
      ? 'Pada Langkah 3 QSPM, kami menggabungkan ide TOWS yang terkait dan memilih dua paket yang layak untuk dibandingkan. Ide pendukung seperti pembelian langsung dari petani atau negosiasi sewa bisa dijalankan di dalam paket tersebut. QSPM kemudian menilai paket mana yang diprioritaskan.'
      : 'In QSPM Step 3, we grouped related TOWS ideas into two feasible packages. Supporting ideas such as direct farmer sourcing or rent renegotiation can sit within those packages. QSPM then scores which package should lead.';
    return [target.querySelector('.qspm-card-title').textContent, '', reason, method];
  }

  if (kind === 'qspm') {
    const [, weight, s1, tas1, s2, tas2] = Array.from(target.cells, cell => cell.textContent.trim());
    const id = document.documentElement.lang === 'id';
    const code = target.querySelector('.qspm-factor-detail').textContent.trim();
    const source = /^[SW]/.test(code) ? 'IFE' : 'EFE';
    const translate = value => window.t?.(value) || value;
    const weightReason = `${id ? 'Bobot' : 'Weight'} ${weight} ${id ? 'dari' : 'from'} ${source} ${code}. ${translate(target.dataset.weightReason)}`;
    const math = [
      id ? 'AS menilai kecocokan strategi terhadap faktor (1–4). TAS = bobot × AS.' : 'AS rates how well a strategy addresses the factor (1–4). TAS = weight × AS.',
      `Hyfresh · AS ${s1} · TAS = ${weight} × ${s1} = ${tas1}`,
      `Hypermart · AS ${s2} · TAS = ${weight} × ${s2} = ${tas2}`,
    ].join(' | ');
    return [code, '', translate(target.dataset.hoverReason), weightReason, math];
  }
  const data = target.dataset;
  const id = document.documentElement.lang === 'id';
  const tr = value => (value && window.t ? window.t(value) : value) || '';
  const activeSpaceCompany = getActiveSpaceCompany();
  if (kind === 'tows' && data.hoverMatch) {
    return [`${data.code} · ${tr(data.name)}`, data.tags, tr(data.hoverMatch), tr(data.hoverReason)];
  }
  if (kind === 'cpm' || kind === 'efe' || kind === 'ife') {
    const weightLabel = id ? 'Bobot' : 'Weight';
    const weight = `${weightLabel} ${data.weight}`;
    const weightReason = tr(data.weightReason || target.closest('tr')?.querySelector('[data-weight-reason]')?.dataset.weightReason);
    const title = kind === 'cpm'
      ? [tr(data.factor), data.rating !== '—' && tr(data.company)].filter(Boolean).join(' · ')
      : `${data.code} · ${tr(data.name)}`;
    if (data.rating === '—') return [title, weight, '', weightReason];
    const score = `${tr('Rating')} ${data.rating} (${tr(data.ratingLabel)}) · ${tr('Score')} ${data.score || data.ws} · ${weight}`;
    return [title, score, tr(data.hoverReason || data.rationale || data.evidence), weightReason];
  }
  const company = spaceCompaniesData[data.company || activeSpaceCompany] || spaceCompaniesData.mppa;
  if (kind === 'space' && data.factor) {
    const factor = (spaceFactorsData[activeSpaceCompany] || spaceFactorsData.mppa)[data.factor];
    if (factor) return [id ? factor.title_id : factor.title, id ? factor.defense_id : factor.defense];
  }
  if (kind === 'space') return [tr(data.name || company.shortName), tr(company.dimExpls?.[data.dim] || company.inspectorTitle || company.postureSub)];
  if (kind === 'ie') {
    const divKey = data.division || target.closest('[data-division]')?.dataset.division || 'all';
    const ieData = window.ieDivisionsData || {};
    const div = ieData[divKey] || (typeof matrixIePreview === 'function' ? matrixIePreview(divKey) : null) || ieData.all;
    if (div) {
      const title = id ? (div.title_id || div.title) : div.title;
      const explanation = id ? (div.defense_id || div.defense) : div.defense;
      const efeBasis = id ? (div.efe_basis_id || div.efe_basis) : (div.efe_basis || '');
      const ifeBasis = id ? (div.ife_basis_id || div.ife_basis) : (div.ife_basis || '');
      const method = id ? (div.method_id || div.method) : (div.method || '');
      return [title, explanation, efeBasis, ifeBasis, method];
    }
  }
  const division = kind === 'gsm' ? window.gsmDivisionsData?.[data.division] : kind === 'bcg' ? bcgDivisionsData[data.division] : null;
  if (division) return [id ? division.title_id : division.title, id ? division.defense_id : division.defense];
  return [tr(data.name || data.factor) || target.getAttribute('aria-label') || target.textContent.trim(), tr(data.rationale || data.evidence || data.expl)];
}
function clearMatrixSelection() {
  matrixPreview.hidden = true;
  if (document.getElementById('gsm-ins-box')) window.selectGsmDivision('all');
  if (document.getElementById('bcg-ins-box')) selectBcgDivision('all');
  if (document.getElementById('ie-ins-box')) matrixIeRender?.('all');
  document.querySelectorAll('.cpm-hoverable.is-active,.swot-item.is-active,.efe-row.is-active,.ife-row.is-active,.tows-item.is-active,.dim-table-row.is-inspected,.space-dim-card.is-active,.space-comp-btn.is-active,.space-vector-group.is-active-vector,.space-vector-group.is-dimmed-vector')
    .forEach(item => item.classList.remove('is-active', 'is-inspected', 'is-active-vector', 'is-dimmed-vector'));
}
let previewTarget;
listen(document, 'pointermove', event => {
  const strategy = event.target.closest?.('.qspm-strat-card');
  const financialCell = event.target.closest?.('.financial-slide-wrapper .fin-table tbody td:is(.td-num,.td-desc)');
  const financialRatioRow = event.target.closest?.('.ratios-slide-wrapper .ratio-table tbody tr[data-ratio]');
  const ieRatioCell = event.target.closest?.('.ie-table tbody td:is(.ie-td-share, .ie-td-ife, .ie-td-efe, .ie-td-presc)');
  const match = strategy ? {kind: 'qspm-strategy', target: strategy}
    : financialCell?.parentElement.querySelector('.td-desc') ? {kind: 'financial-cell', target: financialCell}
    : financialRatioRow ? {kind: 'financial-ratio', target: financialRatioRow}
    : ieRatioCell ? {kind: 'ie-ratio-cell', target: ieRatioCell}
    : findMatrixItem(event.target);
  if (!match || matrixDrawer.open || event.pointerType === 'touch') {
    matrixPreview.hidden = true;
    previewTarget = null;
    return;
  }
  const host = document.fullscreenElement || document.body;
  if (matrixPreview.parentNode !== host) host.append(matrixPreview);
  if (previewTarget !== match.target || matrixPreview.hidden) {
    const [title, explanation, rationale, weightReason, math] = matrixPreviewContent(match);
    const heading = document.createElement('strong');
    heading.textContent = title;
    const summary = document.createElement('span');
    const detail = explanation?.replace(/^(Rationale|Rasional):\s*/, '').trim() || '';
    summary.textContent = match.kind === 'ie'
      ? (detail.length > 140 ? detail.slice(0, 140).replace(/\s+\S*$/, '') + '…' : detail)
      : (detail.length > 260 ? detail.slice(0, 260).replace(/\s+\S*$/, '') + '…' : detail);
    const hint = document.createElement('small');
    const id = document.documentElement.lang === 'id';
    hint.textContent = match.kind === 'qspm-strategy'
      ? (id ? 'Klik untuk bukti dan sumber' : 'Click for evidence and sources')
      : (id ? 'Klik dua kali untuk rincian' : 'Double-click for full details');
    const labels = match.kind === 'tows'
      ? (id ? ['Faktor yang kami pasangkan', 'Mengapa kami memilih strategi ini'] : ['Factors we matched', 'Why we chose this strategy'])
      : (id ? ['Mengapa kami memberi nilai ini', 'Mengapa faktor ini diberi bobot ini'] : ['Why we gave this rating', 'Why we chose this weight']);
    const entries = match.kind === 'financial-cell' ? [
      [weightReason ? (id ? 'Mengapa margin bisa naik' : 'Why margin could rise') : (id ? 'Perhitungan dan sumber' : 'Calculation and basis'), rationale],
      [id ? 'Dasar asumsi 50%' : 'Basis for the 50% assumption', weightReason],
    ] : match.kind === 'financial-ratio' ? [
      [id ? 'Formula & Patokan Industri' : 'Formula & Industry Benchmark', weightReason],
      [id ? 'Analisis Pemulihan Strategis' : 'Strategic Turnaround Rationale', rationale],
    ] : match.kind === 'ie-ratio-cell' ? [
      [id ? 'Formula & Metodologi Perhitungan' : 'Calculation Formula & Methodology', weightReason],
      [id ? 'Makna & Implikasi Portofolio' : 'Strategic Meaning & Portfolio Role', rationale],
    ] : match.kind === 'qspm-strategy' ? [
      [id ? 'Mengapa opsi ini masuk daftar' : 'Why this option made the shortlist', rationale],
      [id ? 'Cara kami membentuk dua opsi' : 'How we narrowed it to two', weightReason],
    ] : match.kind === 'qspm' ? [
      [id ? 'Dari mana bobotnya' : 'Where the weight comes from', weightReason],
      [id ? 'Mengapa skor AS berbeda' : 'Why we gave these AS ratings', rationale],
      [id ? 'Cara menghitung TAS' : 'How TAS is calculated', math],
    ] : match.kind === 'ie' ? [
      [id ? 'Dasar Penentuan EFE (Eksternal)' : 'How EFE Was Derived (External)', rationale],
      [id ? 'Dasar Penentuan IFE (Internal)' : 'How IFE Was Derived (Internal)', weightReason],
      [id ? 'Metodologi Fred David & Rekonsiliasi' : 'Fred David Methodology & Reconciliation', math],
    ] : [[labels[0], rationale], [labels[1], weightReason]];
    const sections = entries.filter(([, text]) => text).map(([label, text]) => {
      const section = document.createElement('div');
      section.className = 'matrix-preview-section';
      const heading = document.createElement('strong');
      heading.textContent = label;
      section.append(heading);
      for (const paragraph of text.split(' | ')) {
        const body = document.createElement('p');
        body.textContent = paragraph;
        section.append(body);
      }
      return section;
    });
    matrixPreview.replaceChildren(heading, ...(detail ? [summary] : []), ...sections, ...(match.kind === 'financial-cell' || match.kind === 'financial-ratio' || match.kind === 'ie-ratio-cell' ? [] : [hint]));
    previewTarget = match.target;
  }
  matrixPreview.hidden = false;
  const {width, height} = matrixPreview.getBoundingClientRect();
  const isRightSide = event.clientX > window.innerWidth * 0.52;
  const left = isRightSide ? event.clientX - width - 16 : event.clientX + 16;
  const below = event.clientY + 16;
  const top = (below + height + 8 <= window.innerHeight) ? below : Math.max(8, event.clientY - height - 16);
  matrixPreview.style.left = Math.max(8, Math.min(left, window.innerWidth - width - 8)) + 'px';
  matrixPreview.style.top = Math.max(8, top) + 'px';
});
listen(document, 'pointerout', event => {
  if (previewTarget && !previewTarget.contains(event.relatedTarget)) matrixPreview.hidden = true;
});
function openMatrixDrawer(match) {
  if (!match || document.querySelector('.matrix-detail[open]')) return;
  matrixPreview.hidden = true;
  if (match.render && match.target) match.render(match.target);
  const id = document.documentElement.lang === 'id';
  const kind = match.kind || 'ie';
  const divKey = match.division || match.target?.dataset?.division;
  const ieData = window.ieDivisionsData || (typeof ieDivisionsData !== 'undefined' ? ieDivisionsData : {});
  const bcgData = window.bcgDivisionsData || (typeof bcgDivisionsData !== 'undefined' ? bcgDivisionsData : {});
  const ieCalc = window.ieCalculationsData || (typeof ieCalculationsData !== 'undefined' ? ieCalculationsData : {});
  const bcgCalc = window.bcgCalculationsData || (typeof bcgCalculationsData !== 'undefined' ? bcgCalculationsData : {});

  const divisionData = kind === 'ie' ? (ieData[divKey] || ieData.all)
                     : kind === 'bcg' ? (bcgData[divKey] || bcgData.all)
                     : null;
  const calcData = kind === 'ie' ? ieCalc[divKey]
                 : kind === 'bcg' ? bcgCalc[divKey]
                 : null;

  const read = part => document.getElementById(kind + '-ins-' + part)?.textContent.trim() || '';
  let fullTitle = read('title');
  let explanation = '';
  if (!fullTitle && divisionData) {
    fullTitle = id ? divisionData.title_id : divisionData.title;
    explanation = id ? divisionData.defense_id : divisionData.defense;
  }
  if (!fullTitle && match.target) {
    const [t, exp] = matrixPreviewContent(match);
    fullTitle = t;
    explanation = exp;
  }
  if (!fullTitle) fullTitle = id ? (calcData?.nameId || calcData?.name || '') : (calcData?.name || '');

  // 1. Header Accents
  const headEl = matrixDrawer.querySelector('.matrix-detail-head');
  if (divisionData?.border) {
    headEl.style.borderTopColor = divisionData.border;
  } else {
    headEl.style.borderTopColor = '#df0036';
  }

  const kindNames = {
    ie: id ? 'Matriks IE' : 'IE Matrix',
    bcg: id ? 'Matriks BCG' : 'BCG Matrix',
    space: id ? 'Matriks SPACE' : 'SPACE Matrix',
    swot: 'SWOT Matrix',
    cpm: id ? 'Matriks CPM' : 'CPM Matrix',
    efe: id ? 'Matriks EFE' : 'EFE Matrix',
    ife: id ? 'Matriks IFE' : 'IFE Matrix',
    tows: id ? 'Matriks SWOT (TOWS)' : 'SWOT Matrix (TOWS)',
    qspm: 'QSPM'
  };
  matrixDrawer.querySelector('.matrix-kind-badge').textContent = kindNames[kind] || kind.toUpperCase();

  const statusPill = matrixDrawer.querySelector('.matrix-status-pill');
  const pillText = divisionData ? (id ? divisionData.pill_id : divisionData.pill) : '';
  if (pillText) {
    statusPill.textContent = pillText;
    statusPill.className = 'matrix-status-pill ' + (divisionData.pillClass || '');
    statusPill.style.display = 'inline-flex';
  } else {
    statusPill.style.display = 'none';
  }

  const titleParts = fullTitle.split(' · ');
  const heading = titleParts.shift() || fullTitle;
  const colon = (kind === 'ie' || kind === 'bcg') ? heading.indexOf(': ') : -1;
  const mainTitle = colon >= 0 ? heading.slice(0, colon) : heading;
  matrixDrawer.querySelector('h3').textContent = mainTitle;

  const subEl = matrixDrawer.querySelector('.matrix-detail-sub');
  let subText = '';
  if (calcData?.name && calcData.name !== mainTitle) {
    subText = id ? (calcData.nameId || calcData.name) : calcData.name;
  } else if (colon >= 0) {
    subText = heading.slice(colon + 2);
    if (titleParts.length) subText += ' · ' + titleParts.join(' · ');
  } else if (titleParts.length) {
    subText = titleParts.join(' · ');
  }
  if (subText) {
    subEl.textContent = subText;
    subEl.style.display = 'block';
  } else {
    subEl.style.display = 'none';
  }

  matrixDrawer.querySelector('.matrix-detail-close').setAttribute('aria-label', id ? 'Tutup rincian' : 'Close details');

  const content = matrixDrawer.querySelector('.matrix-detail-scroll');
  content.replaceChildren();
  content.scrollTop = 0;

  if (kind === 'qspm') {
    const [factor, weight, s1, tas1, s2, tas2] = Array.from(match.target.cells, cell => cell.textContent.trim());
    const [, category, factorIndex] = factor.match(/^([SWOT])(\d+)/) || [];
    const factorSource = factor.match(/\(([^()]*)\)\.?$/);
    const section = document.createElement('section');
    section.className = 'matrix-detail-section qspm-detail';
    const evidence = document.createElement('p');
    evidence.textContent = category === 'S' && factorIndex === '4'
      ? (id ? 'Pada akhir 2020, Hypermart Online tersedia di 103 gerai, Chat & Shop di 125 gerai, dan GrabMart di 97 gerai virtual.' : 'At year-end 2020, Hypermart Online covered 103 stores, Chat & Shop covered 125 stores, and GrabMart had 97 virtual stores.')
      : factor.replace(/^[SWOT]\d+\s*/, '');
    const [, , ratingReason, weightReason] = matrixPreviewContent(match);
    section.append(evidence);
    for (const text of [weightReason, ratingReason]) {
      const paragraph = document.createElement('p');
      paragraph.textContent = text;
      section.append(paragraph);
    }
    for (const [name, rating, weightedScore] of [
      [id ? 'Strat. 1 · Perluas Hyfresh' : 'Strat. 1 · Expand Hyfresh', s1, tas1],
      [id ? 'Strat. 2 · Sesuaikan ukuran Hypermart' : 'Strat. 2 · Resize Hypermart', s2, tas2],
    ]) {
      const card = document.createElement('div');
      card.className = 'matrix-card qspm-detail-score';
      const title = document.createElement('h4');
      title.textContent = name;
      const formula = document.createElement('p');
      formula.textContent = weight + ' × ' + rating + ' = ' + weightedScore;
      card.append(title, formula);
      section.append(card);
    }
    const key = document.createElement('p');
    key.className = 'qspm-detail-key';
    key.textContent = id ? 'Bobot × skor daya tarik (AS) = skor tertimbang (TAS).' : 'Factor weight × attractiveness score (AS) = weighted score (TAS).';
    section.append(key);
    const sources = document.createElement('section');
    sources.className = 'qspm-detail-sources';
    const sourcesHeading = document.createElement('h4');
    sourcesHeading.textContent = id ? 'Sumber bukti dan skor' : 'Evidence and scoring sources';
    sources.append(sourcesHeading);
    if (category === 'S' && factorIndex === '4') {
      const report = document.createElement('a');
      report.href = 'AR2020.pdf#page=27';
      report.target = '_blank';
      report.rel = 'noopener';
      report.textContent = id ? 'Laporan Tahunan MPPA 2020, hlm. 25, Ikhtisar Bisnis Online MPPA' : 'MPPA 2020 Annual Report, printed p. 25, Online Business Highlight';
      sources.append(report);
    } else if (factorSource) {
      const citation = document.createElement('p');
      citation.textContent = factorSource[1];
      sources.append(citation);
    }
    const workbook = document.createElement('a');
    workbook.href = 'Matahari.xlsx';
    const workbookRow = { S: 11, W: 25, O: 40, T: 55 }[category] + Number(factorIndex);
    workbook.textContent = workbookRow ? `Matahari.xlsx · QSPM!C${workbookRow}:G${workbookRow}` : 'Matahari.xlsx · QSPM';
    const scoring = document.createElement('p');
    scoring.textContent = id
      ? 'Bobot berasal dari matriks IFE atau EFE. AS adalah penilaian dalam studi kasus untuk masing-masing strategi.'
      : 'The weight comes from the IFE or EFE matrix. Each AS is a case analysis judgment about how well the strategy uses or addresses this factor.';
    sources.append(scoring, workbook);
    if (category === 'S' && factorIndex === '4') {
      const rationale = document.createElement('p');
      rationale.textContent = id
        ? 'Dasar perbandingan: gerai Hypermart yang sudah terhubung dapat langsung mendukung pemenuhan pesanan online pada S2. S1 memerlukan perluasan jaringan Hyfresh.'
        : 'Scoring interpretation: S2 uses the existing Hypermart network directly for online fulfillment. S1 depends on expanding the Hyfresh network.';
      sources.append(rationale);
    }
    section.append(sources);
    content.append(section);
    (document.fullscreenElement || document.body).append(matrixDrawer);
    matrixDrawer.showModal();
    return;
  }

  // 2. Executive KPI Summary Grid
  const kpiSection = document.createElement('section');
  kpiSection.className = 'matrix-detail-section';
  const kpiHeader = document.createElement('div');
  kpiHeader.className = 'matrix-section-header';
  kpiHeader.innerHTML = `
    <span class="matrix-sec-icon">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
    </span>
    <h4>${id ? 'Ringkasan Eksekutif' : 'At a Glance'}</h4>
  `;
  kpiSection.append(kpiHeader);

  const kpiGrid = document.createElement('div');
  kpiGrid.className = 'matrix-kpi-grid';

  if (kind === 'ie' && calcData) {
    const revMatch = fullTitle.match(/(Rp[\d,.]+\s*[BM])\s*\(([^)]+)\)/i);
    const revVal = revMatch ? revMatch[1] : (fullTitle.match(/Rp[\d,.]+\s*[BM]/i)?.[0] || '—');
    const revSub = revMatch ? revMatch[2] : '';
    
    const storeMatch = fullTitle.match(/(\d+)\s*(Stores|Gerai)/i);
    const storeVal = storeMatch ? storeMatch[1] + (id ? ' Gerai' : ' Stores') : '';

    const cellMatch = (calcData.region || fullTitle).match(/Cell\s+[IVXLC]+|Sel\s+[IVXLC]+/i);
    const cellVal = cellMatch ? cellMatch[0] : (id ? 'Sel V' : 'Cell V');
    const regLabel = id ? calcData.regionId : calcData.region;
    const cleanReg = regLabel ? regLabel.replace(/^(?:Region|Wilayah)\s*\d+:\s*(?:Cell|Sel)\s*[IVXLC]+\s*\(([^)]+)\)/i, '$1').replace(/[()]/g, '') : '';

    const ifeRaw = (id ? calcData.ifeScoreId : calcData.ifeScore) || '';
    const efeRaw = (id ? calcData.efeScoreId : calcData.efeScore) || '';
    const ifeNum = ifeRaw.match(/[\d,.]+/)?.[0] || '—';
    const efeNum = efeRaw.match(/[\d,.]+/)?.[0] || '—';
    const ifeDesc = ifeRaw ? ifeRaw.replace(/^[\d,.]+\s*\(([^)]+)\)/, '$1') : '';
    const efeDesc = efeRaw ? efeRaw.replace(/^[\d,.]+\s*\(([^)]+)\)/, '$1') : '';

    if (revVal !== '—') {
      kpiGrid.innerHTML += `
        <div class="matrix-kpi-card">
          <span class="matrix-kpi-label">${id ? 'Pendapatan' : 'Revenue'}</span>
          <div class="matrix-kpi-val-row">
            <span class="matrix-kpi-val">${revVal}</span>
            ${revSub ? `<span class="matrix-kpi-badge">${revSub}</span>` : ''}
          </div>
          <span class="matrix-kpi-sub">${id ? 'Kontribusi Portofolio' : 'Portfolio Contribution'}</span>
        </div>
      `;
    }
    if (storeVal) {
      kpiGrid.innerHTML += `
        <div class="matrix-kpi-card">
          <span class="matrix-kpi-label">${id ? 'Jaringan Gerai' : 'Store Network'}</span>
          <div class="matrix-kpi-val-row">
            <span class="matrix-kpi-val">${storeVal}</span>
          </div>
          <span class="matrix-kpi-sub">${id ? 'Titik Penjualan Aktif' : 'Active Retail Footprint'}</span>
        </div>
      `;
    }
    kpiGrid.innerHTML += `
      <div class="matrix-kpi-card">
        <span class="matrix-kpi-label">${id ? 'Posisi Matriks IE' : 'IE Matrix Position'}</span>
        <div class="matrix-kpi-val-row">
          <span class="matrix-kpi-val">${cellVal}</span>
          ${cleanReg ? `<span class="matrix-kpi-badge">${cleanReg}</span>` : ''}
        </div>
        <span class="matrix-kpi-sub">${id ? 'Wilayah Strategis' : 'Strategic Region'}</span>
      </div>
      <div class="matrix-kpi-card">
        <span class="matrix-kpi-label">${id ? 'Skor Evaluatif' : 'Evaluative Scores'}</span>
        <div class="matrix-kpi-val-row">
          <span class="matrix-kpi-val">IFE ${ifeNum} · EFE ${efeNum}</span>
        </div>
        <span class="matrix-kpi-sub">${ifeDesc} · ${efeDesc}</span>
      </div>
    `;
  } else if (kind === 'bcg' && calcData) {
    const revMatch = fullTitle.match(/(Rp[\d,.]+\s*[BM])\s*\(([^)]+)\)/i);
    const revVal = revMatch ? revMatch[1] : (fullTitle.match(/Rp[\d,.]+\s*[BM]/i)?.[0] || '—');
    const revSub = revMatch ? revMatch[2] : '';
    const rmspMatch = (calcData.rmspCalc || '').match(/=\s*([\d,.]+)/);
    const rmspVal = rmspMatch ? rmspMatch[1] : '';

    if (revVal !== '—') {
      kpiGrid.innerHTML += `
        <div class="matrix-kpi-card">
          <span class="matrix-kpi-label">${id ? 'Pendapatan' : 'Revenue'}</span>
          <div class="matrix-kpi-val-row">
            <span class="matrix-kpi-val">${revVal}</span>
            ${revSub ? `<span class="matrix-kpi-badge">${revSub}</span>` : ''}
          </div>
          <span class="matrix-kpi-sub">${id ? 'Kontribusi Portofolio' : 'Portfolio Share'}</span>
        </div>
      `;
    }
    if (rmspVal) {
      kpiGrid.innerHTML += `
        <div class="matrix-kpi-card">
          <span class="matrix-kpi-label">${id ? 'Pangsa Pasar Relatif' : 'Relative Market Share'}</span>
          <div class="matrix-kpi-val-row">
            <span class="matrix-kpi-val">${rmspVal} RMSP</span>
          </div>
          <span class="matrix-kpi-sub">${id ? 'Terhadap Pemimpin Pasar' : 'vs Category Leader'}</span>
        </div>
      `;
    }
    kpiGrid.innerHTML += `
      <div class="matrix-kpi-card">
        <span class="matrix-kpi-label">${id ? 'Pertumbuhan Industri' : 'Industry Growth Rate'}</span>
        <div class="matrix-kpi-val-row">
          <span class="matrix-kpi-val">${calcData.igrVal}</span>
          <span class="matrix-kpi-badge ${calcData.igrVal.startsWith('+') ? 'calc-pos' : 'calc-neg'}">IGR</span>
        </div>
        <span class="matrix-kpi-sub">${id ? 'Tren Sektor Ritel' : 'Category Sector Trend'}</span>
      </div>
    `;
  } else {
    const summaryItems = [];
    if (colon >= 0) summaryItems.push(heading.slice(colon + 2));
    summaryItems.push(...titleParts);
    const uniqueItems = [...new Set(summaryItems.map(s => s?.trim()).filter(Boolean))];
    for (const item of uniqueItems) {
      kpiGrid.innerHTML += `
        <div class="matrix-kpi-card kpi-full">
          <span class="matrix-kpi-val" style="font-size:14px;font-weight:600;">${item}</span>
        </div>
      `;
    }
  }

  if (kind !== 'tows' && kpiGrid.childElementCount) {
    kpiSection.append(kpiGrid);
    content.append(kpiSection);
  }

  // 3. Strategic Analysis Section
  const calculation = document.getElementById(kind + '-calculation');
  const calcText = selector => calculation?.querySelector(selector)?.textContent.trim();
  const body = (read('body') || explanation || divisionData?.defense || '').replace(/^(?:Division Analysis|Analisis Divisi|Rationale|Rasional):\s*/i, '');
  const [analysis, action] = body.split(/\s*(?:Strategic Action|Aksi Strategis):\s*/i);

  if (analysis?.trim()) {
    const analysisSection = document.createElement('section');
    analysisSection.className = 'matrix-detail-section';
    analysisSection.innerHTML = `
      <div class="matrix-section-header">
        <span class="matrix-sec-icon">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 21H3V3"/><path d="M7 14l4-4 4 4 6-6"/></svg>
        </span>
        <h4>${id ? 'Analisis Strategis' : 'Strategic Analysis'}</h4>
      </div>
      <div class="matrix-card matrix-analysis-card">
        <p>${analysis.trim()}</p>
      </div>
    `;
    content.append(analysisSection);
  }

  // BCG Calculations detail if present
  if (kind === 'bcg' && calcData) {
    const renderEquation = (formula, label, heading) => {
      const [, numerator, denominator, result, note] =
        formula?.match(/^[A-Z]+ = (.+?) ÷ (.+?) = ([+-]?[\d.,]+%?)(?: \((.+)\))?$/) || [];
      if (!numerator) return `<p class="matrix-calc-row">${formula || ''}</p>`;

      const growth = numerator.match(/^(.+?) 2020: (Rp[\d.,]+[BM]) − 2019: (Rp[\d.,]+[BM])[\])]?$/);
      const market = denominator.match(/^(Rp[\d.,]+ [BM]) \((.+)\)$/);
      const benchmark = growth?.[1].replace(/^\[/, '').replace(/ \(([^()]*)$/, ' · $1') || market?.[2];
      const top = growth ? `<mtext>${growth[2]}</mtext><mo>−</mo><mtext>${growth[3]}</mtext>` : `<mtext>${numerator}</mtext>`;
      const bottom = market?.[1] || denominator;

      return `<div class="matrix-equation">
        <h5>${heading} (${label})</h5>
        ${benchmark ? `<p class="matrix-calc-row">${id ? 'Pembanding' : 'Benchmark'} · ${benchmark}</p>` : ''}
        <div class="matrix-equation-scroll"><math display="block"><mrow>
          <mi mathvariant="normal">${label}</mi><mo>=</mo>
          <mfrac><mrow>${top}</mrow><mtext>${bottom}</mtext></mfrac>
          <mo>=</mo><mtext>${result.replace(/^-/,'−')}</mtext>
        </mrow></math></div>
        ${note ? `<p class="matrix-calc-row">${id ? 'Penyesuaian pada grafik' : 'Adjustment shown on chart'} · ${note}</p>` : ''}
      </div>`;
    };
    const calcSection = document.createElement('section');
    calcSection.className = 'matrix-detail-section';
    calcSection.innerHTML = `
      <div class="matrix-section-header">
        <span class="matrix-sec-icon">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="16" y1="2" x2="16" y2="6"/></svg>
        </span>
        <h4>${id ? 'Kalkulasi Matematis' : 'Mathematical Derivations'}</h4>
      </div>
      <div class="matrix-calc-card">
        ${renderEquation(id ? calcData.rmspCalcId : calcData.rmspCalc, 'RMSP', id ? 'Pangsa pasar relatif' : 'Relative market share')}
        ${renderEquation(id ? calcData.igrFormulaId : calcData.igrFormula, 'IGR', id ? 'Laju pertumbuhan industri' : 'Industry growth rate')}
        <p class="matrix-calc-row" style="color:#64748b;font-size:11.5px;margin-top:4px;">${id ? calcData.igrDetailId : calcData.igrDetail}</p>
      </div>
    `;
    content.append(calcSection);
  }

  // IE Derivations and Fred David Reconciliation detail if present
  if (kind === 'ie' && divisionData) {
    const efeText = id ? (divisionData.efe_basis_id || divisionData.efe_basis) : (divisionData.efe_basis || '');
    const ifeText = id ? (divisionData.ife_basis_id || divisionData.ife_basis) : (divisionData.ife_basis || '');
    const methodText = id ? (divisionData.method_id || divisionData.method) : (divisionData.method || '');

    if (efeText || ifeText || methodText) {
      const ieSection = document.createElement('section');
      ieSection.className = 'matrix-detail-section';
      ieSection.innerHTML = `
        <div class="matrix-section-header">
          <span class="matrix-sec-icon" style="color:#0055b8;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="16" y1="2" x2="16" y2="6"/></svg>
          </span>
          <h4>${id ? 'Derivasi Skor IFE & EFE (Metodologi Fred David Bab 6)' : 'IFE & EFE Score Derivations (Fred David Ch. 6 Methodology)'}</h4>
        </div>
        <div class="matrix-calc-card" style="display:flex;flex-direction:column;gap:8px;">
          ${efeText ? `
            <div class="matrix-equation">
              <h5 style="color:#00875a;font-weight:800;font-size:12px;margin-bottom:3px;">
                ${id ? '1. Dasar Penentuan Skor EFE (Dinamika Eksternal Pasar)' : '1. How EFE Score Was Derived (External Sector Drivers)'}
              </h5>
              <p class="matrix-calc-row" style="color:#29272b;line-height:1.45;font-size:12px;">${efeText}</p>
            </div>
          ` : ''}
          ${ifeText ? `
            <div class="matrix-equation">
              <h5 style="color:#0055b8;font-weight:800;font-size:12px;margin-bottom:3px;">
                ${id ? '2. Dasar Penentuan Skor IFE (Ekonomi Unit Internal Format)' : '2. How IFE Score Was Derived (Internal Unit Economics & Leases)'}
              </h5>
              <p class="matrix-calc-row" style="color:#29272b;line-height:1.45;font-size:12px;">${ifeText}</p>
            </div>
          ` : ''}
          ${methodText ? `
            <div class="matrix-equation">
              <h5 style="color:#b45309;font-weight:800;font-size:12px;margin-bottom:3px;">
                ${id ? '3. Metodologi Fred David & Rekonsiliasi Audit Matematis' : '3. Fred David Textbook Methodology & Audit Mathematical Reconciliation'}
              </h5>
              <p class="matrix-calc-row" style="color:#29272b;line-height:1.45;font-size:12px;">${methodText}</p>
            </div>
          ` : ''}
        </div>
      `;
      content.append(ieSection);
    }
  }

  // 4. Strategic Recommendation Section
  const recRaw = action || calcText('.ie-calc-col:nth-child(2) .ie-calc-desc') || (calcData ? (id ? calcData.strategy : (calcData.strategyEn || calcData.strategy)) : '');
  if (recRaw?.trim()) {
    const cleanRec = recRaw.trim();
    const colonIdx = cleanRec.indexOf(': ');
    let recTitle = '';
    let recBody = cleanRec;
    if (colonIdx > 0 && colonIdx < 70) {
      recTitle = cleanRec.slice(0, colonIdx).trim();
      recBody = cleanRec.slice(colonIdx + 2).trim();
    }
    const recSection = document.createElement('section');
    recSection.className = 'matrix-detail-section';
    recSection.innerHTML = `
      <div class="matrix-section-header">
        <span class="matrix-sec-icon" style="color:#df0036;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
        </span>
        <h4>${id ? 'Preskripsi & Rekomendasi' : 'Strategic Recommendation'}</h4>
      </div>
      <div class="matrix-card matrix-rec-card">
        ${recTitle ? `<div class="matrix-rec-title">${recTitle}</div>` : ''}
        <p class="matrix-rec-body">${recBody}</p>
      </div>
    `;
    content.append(recSection);
  }

  // 5. Sources Section
  const srcRaw = read('source') || calcText('.bcg-calc-ft small')?.replace(/^(?:Source & Evidence|Sumber & Bukti):\s*/i, '') || calcData?.source || (divisionData ? (id ? divisionData.source_id : divisionData.source) : '');
  if (srcRaw?.trim()) {
    const sourceItems = srcRaw.split(/\s*;\s*/).map(s => s.trim()).filter(Boolean);
    const sourcesSection = document.createElement('section');
    sourcesSection.className = 'matrix-detail-section matrix-sources-container';
    sourcesSection.innerHTML = `
      <div class="matrix-section-header">
        <span class="matrix-sec-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
        </span>
        <h4>${id ? 'Sumber & Bukti Referensi' : 'Sources & Data Evidence'}</h4>
      </div>
      <div class="matrix-sources-list">
        ${sourceItems.map(src => `
          <span class="matrix-source-pill">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            ${src}
          </span>
        `).join('')}
      </div>
    `;
    content.append(sourcesSection);
  }

  (document.fullscreenElement || document.body).append(matrixDrawer);
  matrixDrawer.showModal();
}
window.openMatrixDrawer = openMatrixDrawer;

try {
  const searchVal = new URLSearchParams(window.location.search).get('drawer');
  const hashVal = window.location.hash.includes('drawer=') ? window.location.hash.split('drawer=')[1].split('&')[0].split('#')[0] : null;
  const drawerDiv = searchVal || hashVal;
  if (drawerDiv) {
    openMatrixDrawer({ kind: 'ie', division: drawerDiv });
  }
} catch(e) {}
listen(document, 'dblclick', event => openMatrixDrawer(findMatrixItem(event.target)));
listen(document, 'click', event => {
  const card = event.target.closest?.('button[data-qspm-strategy]');
  if (card && !document.querySelector('.matrix-detail[open]')) {
    matrixPreview.hidden = true;
    const id = document.documentElement.lang === 'id';
    const expansion = card.dataset.qspmStrategy === '1';
    const [matching, evidence, input] = expansion
      ? [
          id ? 'Matriks SWOT (TOWS) menggabungkan SO3 (membuka supermarket Hyfresh kompak) dan SO4 (menyatukan merek di bawah Hy-).' : 'In the SWOT (TOWS) Matrix, SO3 proposes opening compact Hyfresh supermarkets and SO4 proposes bringing selected banners under Hy-. The case team combined these two ideas into Strategy 1.',
          id ? 'Laporan Tahunan 2020 hlm. 45–46 menunjukkan bahwa Hyfresh sudah beroperasi dan memiliki sembilan gerai pada akhir 2020. Penyatuan merek adalah usulan tim kasus.' : 'The 2020 Annual Report, pp. 45–46, records nine Hyfresh stores at year-end. The rollout and shared brand are proposals from the case analysis.',
          'D325'
        ]
      : [
          id ? 'Matriks SWOT (TOWS) mengaitkan WO1 (mengurangi kelebihan ruang Hypermart) dengan SO1 (kemitraan pengiriman).' : 'In the SWOT (TOWS) Matrix, WO1 proposes reducing excess Hypermart space through subleasing, and SO1 proposes using delivery partners. Strategy 2 combines those ideas by resizing selected stores and using them to fulfill online orders.',
          id ? 'Laporan Tahunan 2020 hlm. 25 dan 46 mencatat Hypermart Online di 103 gerai dan kontribusi Hypermart sebesar 84,5% terhadap penjualan.' : 'The 2020 Annual Report, pp. 25 and 46, reports Hypermart Online at 103 stores and Hypermart accounting for 84.5% of sales. These figures explain why the existing network is a candidate for the proposal.',
          'F325'
        ];
    matrixDrawer.querySelector('.matrix-kind-badge').textContent = 'QSPM';
    matrixDrawer.querySelector('.matrix-status-pill').style.display = 'none';
    matrixDrawer.querySelector('.matrix-detail-head').style.borderTopColor = '';
    matrixDrawer.querySelector('h3').textContent = card.querySelector('.qspm-card-title').textContent;
    const subtitle = matrixDrawer.querySelector('.matrix-detail-sub');
    subtitle.textContent = card.querySelector('.qspm-card-badge').textContent;
    subtitle.style.display = 'block';
    matrixDrawer.querySelector('.matrix-detail-close').setAttribute('aria-label', id ? 'Tutup rincian' : 'Close details');
    const content = matrixDrawer.querySelector('.matrix-detail-scroll');
    content.innerHTML = `
      <section class="matrix-detail-section">
        <div class="matrix-section-header"><h4>${id ? 'Asal strategi' : 'Where the strategy came from'}</h4></div>
        <div class="matrix-card matrix-analysis-card"><p>${matching}</p><p>${evidence}</p></div>
      </section>
      <section class="matrix-detail-section matrix-sources-container">
        <div class="matrix-section-header"><h4>${id ? 'Sumber' : 'Sources'}</h4></div>
        <a href="AR2020.pdf#page=${expansion ? 47 : 27}" target="_blank" rel="noopener">MPPA 2020 Annual Report · ${expansion ? 'pp. 45–46' : 'pp. 25 and 46'}</a>
        <a href="Matahari.xlsx">Matahari.xlsx · PART I!${input} · QSPM row 66</a>
        <p class="qspm-detail-key">${id ? 'David, Bab 6, Tabel 6-4 dan 6-5, menjelaskan metode QSPM.' : 'David’s Chapter 6, Tables 6-4 and 6-5, explains the QSPM method used to compare the case proposals.'}</p>
      </section>
    `;
    const illustration = card.querySelector('.qspm-strategy-image')?.cloneNode();
    if (illustration) {
      illustration.className = 'qspm-detail-image';
      const figure = document.createElement('figure');
      figure.className = 'qspm-detail-figure';
      const caption = document.createElement('figcaption');
      caption.textContent = id ? 'Ilustrasi konsep' : 'Concept illustration';
      figure.append(illustration, caption);
      content.prepend(figure);
    }
    const total = card.querySelector('.qspm-card-tas strong')?.textContent.trim();
    if (total) {
      const score = document.createElement('div');
      score.className = 'matrix-kpi-card qspm-detail-total';
      const label = document.createElement('span');
      label.className = 'matrix-kpi-label';
      label.textContent = id ? 'Total skor QSPM' : 'Total QSPM score';
      const value = document.createElement('strong');
      value.className = 'matrix-kpi-val';
      value.textContent = total;
      score.append(label, value);
      content.prepend(score);
    }
    content.scrollTop = 0;
    (document.fullscreenElement || document.body).append(matrixDrawer);
    matrixDrawer.showModal();
    return;
  }
  const bcgItem = event.target.closest?.('.bcg-row, .bcg-bubble-group, .bcg-fmt-btn:not([data-division="all"])');
  if (bcgItem || event.target.closest?.('.qspm-factor-detail')) openMatrixDrawer(findMatrixItem(event.target));
});

listen(document, 'keydown', event => {
  if (event.key !== 'Enter') return;
  const match = findMatrixItem(event.target);
  if (match) {
    event.preventDefault();
    openMatrixDrawer(match);
  }
});
listen(document, 'click', event => {
  if (matrixDrawer.open) {
    const bounds = matrixDrawer.getBoundingClientRect();
    const outside = event.target === matrixDrawer && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom);
    if (outside || event.target.closest?.('.matrix-detail-close')) matrixDrawer.close();
  } else if (!findMatrixItem(event.target)) {
    clearMatrixSelection();
  }
});
matrixDrawer.addEventListener('close', clearMatrixSelection);
listen(document, 'fullscreenchange', () => { matrixPreview.hidden = true; });

listen(window, 'load', function() {
  setTimeout(function() {
    if (controller.signal.aborted) return;
    try {
      const searchVal = new URLSearchParams(window.location.search).get('drawer');
      const hashVal = window.location.hash.includes('drawer=') ? window.location.hash.split('drawer=')[1].split('&')[0].split('#')[0] : null;
      const drawerDiv = searchVal || hashVal;
      if (drawerDiv) {
        const target = document.querySelector(`[data-division="${drawerDiv}"]`);
        if (target) {
          const match = findMatrixItem(target);
          if (match) openMatrixDrawer(match);
          else openMatrixDrawer({ kind: 'ie', division: drawerDiv });
        } else {
          openMatrixDrawer({ kind: 'ie', division: drawerDiv });
        }
      }
    } catch(e) {}
  }, 120);
});
return () => {
  controller.abort();
  matrixPreview.remove();
  if (matrixDrawer.open) matrixDrawer.close();
  matrixDrawer.remove();
  if (window.openMatrixDrawer === openMatrixDrawer) delete window.openMatrixDrawer;
};

}
