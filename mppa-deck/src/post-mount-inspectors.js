// Post-mount matrix inspectors and DOM event listeners
export function initPostMountInspectors({
  inspectSpaceFactorRow, inspectSpaceDimensionCard, selectSpaceCompany,
  selectBcgDivision, bcgDivisionsData, spaceCompaniesData, spaceFactorsData,
  getActiveSpaceCompany, matrixIeRender, matrixIePreview,
}) {
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


  document.addEventListener('click', function(e) {
    const row = e.target.closest('.efe-row');
    if (row) {
      updateEfeInspector(row);
    } else if (!e.target.closest('#efe-ins-box') && !e.target.closest('.efe-matrix-wrap')) {
      hideEfeInspector();
    }
  });

  document.addEventListener('mouseleave', function(e) {
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


  document.addEventListener('click', function(e) {
    const row = e.target.closest('.ife-row');
    if (row) {
      updateIfeInspector(row);
    } else if (!e.target.closest('#ife-ins-box') && !e.target.closest('.ife-matrix-wrap')) {
      hideIfeInspector();
    }
  });

  document.addEventListener('mouseleave', function(e) {
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


  document.addEventListener('click', function(e) {
    const item = e.target.closest('.swot-item');
    if (item) {
      updateSwotInspector(item);
    } else if (!e.target.closest('#swot-ins-box') && !e.target.closest('.swot-grid')) {
      hideSwotInspector();
    }
  });

  document.addEventListener('mouseleave', function(e) {
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


  document.addEventListener('click', function(e) {
    const cell = e.target.closest('.cpm-hoverable');
    if (cell) {
      updateCpmInspector(cell);
    } else if (!e.target.closest('#cpm-ins-box') && !e.target.closest('.cpm-table-wrap')) {
      hideCpmInspector();
    }
  });

  document.addEventListener('mouseleave', function(e) {
    hideCpmInspector();
  });


// Live SWOT Matrix (TOWS) (Slide 23) Inspector
    // Helper to render real brand logos dynamically
  function renderBrandPills(logoKeys) {
    if (!logoKeys) return '';
    const map = {
      'hypermart': '<div class="brand-logo-badge" title="Hypermart"><img src="assets/hypermart-logo.png" alt="Hypermart" class="brand-logo-img"/></div>',
      'hyfresh': '<div class="brand-logo-badge" title="Hyfresh"><img src="assets/hyfresh-logo.png" alt="Hyfresh" class="brand-logo-img"/></div>',
      'grab': '<div class="brand-logo-badge" title="GrabMart"><img src="assets/grab-logo.svg" alt="Grab" class="brand-logo-img"/></div>',
      'ovo': '<div class="brand-logo-badge" title="OVO"><img src="assets/ovo-logo.svg" alt="OVO" class="brand-logo-img"/></div>',
      'shopee': '<div class="brand-logo-badge" title="Shopee"><img src="assets/shopee-logo.svg" alt="Shopee" class="brand-logo-img"/></div>',
      'happyfresh': '<div class="brand-logo-badge" title="HappyFresh"><img src="assets/happyfresh-logo.svg" alt="HappyFresh" class="brand-logo-img"/></div>',
      'indomaret': '<div class="brand-logo-badge" title="Indomaret"><img src="assets/indomaret-logo.svg" alt="Indomaret" class="brand-logo-img"/></div>',
      'alfamart': '<div class="brand-logo-badge" title="Alfamart"><img src="assets/alfamart-logo.svg" alt="Alfamart" class="brand-logo-img"/></div>',
      'alfamidi': '<div class="brand-logo-badge" title="Alfamidi"><img src="assets/alfamidi-logo.svg" alt="Alfamidi" class="brand-logo-img"/></div>',
      'transmart': '<div class="brand-logo-badge" title="Transmart"><img src="assets/transmart-logo.svg" alt="Transmart" class="brand-logo-img"/></div>',
      'lottemart': '<div class="brand-logo-badge" title="LotteMart"><img src="assets/lottemart-logo.svg" alt="LotteMart" class="brand-logo-img"/></div>',
      'lippo': '<div class="brand-logo-badge" title="Lippo Group"><img src="assets/lippo-logo.svg" alt="Lippo Group" class="brand-logo-img"/></div>',
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


  document.addEventListener('click', function(e) {
    const item = e.target.closest('.tows-item');
    if (item) {
      updateTowsInspector(item);
    } else if (!e.target.closest('#tows-ins-box') && !e.target.closest('.tows-grid')) {
      hideTowsInspector();
    }
  });

  document.addEventListener('mouseleave', function(e) {
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
  for (const [kind, selector, render] of matrixInspectors) {
    const target = element.closest?.(selector);
    if (target?.closest('.deck-slide')?.querySelector('#' + kind + '-ins-box')) return {kind, target, render};
  }
  return null;
}
function matrixPreviewContent({kind, target}) {
  if (kind === 'qspm') {
    const [, weight, s1, tas1, s2, tas2] = Array.from(target.cells, cell => cell.textContent.trim());
    const weightLabel = document.documentElement.lang === 'id' ? 'Bobot' : 'Weight';
    return [target.querySelector('.qspm-factor-detail').textContent, `${weightLabel} ${weight} · Strat. 1 AS ${s1} → TAS ${tas1} · Strat. 2 AS ${s2} → TAS ${tas2}`];
  }
  const data = target.dataset;
  const id = document.documentElement.lang === 'id';
  const tr = value => (value && window.t ? window.t(value) : value) || '';
  const activeSpaceCompany = getActiveSpaceCompany();
  if (kind === 'cpm') {
    const title = [tr(data.factor), tr(data.company)].filter(Boolean).join(' · ');
    const score = data.rating === '—' ? '' : tr('Rating') + ' ' + data.rating + ' · ' + tr('Score') + ' ' + data.score + '. ';
    return [title, score + tr(data.evidence)];
  }
  const company = spaceCompaniesData[data.company || activeSpaceCompany] || spaceCompaniesData.mppa;
  if (kind === 'space' && data.factor) {
    const factor = (spaceFactorsData[activeSpaceCompany] || spaceFactorsData.mppa)[data.factor];
    if (factor) return [id ? factor.title_id : factor.title, id ? factor.defense_id : factor.defense];
  }
  if (kind === 'space') return [tr(data.name || company.shortName), tr(company.dimExpls?.[data.dim] || company.inspectorTitle || company.postureSub)];
  const division = kind === 'gsm' ? window.gsmDivisionsData?.[data.division] : kind === 'bcg' ? bcgDivisionsData[data.division] : kind === 'ie' ? matrixIePreview?.(data.division) : null;
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
document.addEventListener('pointermove', event => {
  const match = findMatrixItem(event.target);
  if (!match || matrixDrawer.open || event.pointerType === 'touch') {
    matrixPreview.hidden = true;
    previewTarget = null;
    return;
  }
  const host = document.fullscreenElement || document.body;
  if (matrixPreview.parentNode !== host) host.append(matrixPreview);
  if (previewTarget !== match.target || matrixPreview.hidden) {
    const [title, explanation] = matrixPreviewContent(match);
    const heading = document.createElement('strong');
    heading.textContent = title;
    const summary = document.createElement('span');
    const detail = explanation?.replace(/^(Rationale|Rasional):\s*/, '').trim() || '';
    summary.textContent = detail.length > 260 ? detail.slice(0, 260).replace(/\s+\S*$/, '') + '…' : detail;
    const hint = document.createElement('small');
    hint.textContent = document.documentElement.lang === 'id' ? 'Klik dua kali untuk rincian' : 'Double-click for full details';
    matrixPreview.replaceChildren(heading, ...(detail ? [summary] : []), hint);
    previewTarget = match.target;
  }
  matrixPreview.hidden = false;
  const {width, height} = matrixPreview.getBoundingClientRect();
  const below = event.clientY + 16;
  const top = below + height + 8 <= window.innerHeight ? below : event.clientY - height - 16;
  matrixPreview.style.left = Math.max(8, Math.min(event.clientX + 12, window.innerWidth - width - 8)) + 'px';
  matrixPreview.style.top = Math.max(8, top) + 'px';
});
document.addEventListener('pointerout', event => {
  if (previewTarget && !previewTarget.contains(event.relatedTarget)) matrixPreview.hidden = true;
});
function openMatrixDrawer(match) {
  if (!match) return;
  if (matrixDrawer.open) matrixDrawer.close();
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
    section.append(evidence);
    for (const [name, rating, weightedScore] of [
      [id ? 'S1 · Perluas Hyfresh' : 'S1 · Expand Hyfresh', s1, tas1],
      [id ? 'S2 · Sesuaikan ukuran Hypermart' : 'S2 · Resize Hypermart', s2, tas2],
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
        <p class="matrix-calc-row"><strong>RMSP:</strong> ${id ? calcData.rmspCalcId : calcData.rmspCalc}</p>
        <p class="matrix-calc-row"><strong>IGR:</strong> ${id ? calcData.igrFormulaId : calcData.igrFormula}</p>
        <p class="matrix-calc-row" style="color:#64748b;font-size:11.5px;margin-top:4px;">${id ? calcData.igrDetailId : calcData.igrDetail}</p>
      </div>
    `;
    content.append(calcSection);
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
document.addEventListener('dblclick', event => openMatrixDrawer(findMatrixItem(event.target)));
document.addEventListener('click', event => {
  const card = event.target.closest?.('button[data-qspm-strategy]');
  if (card && !matrixDrawer.open) {
    matrixPreview.hidden = true;
    const id = document.documentElement.lang === 'id';
    const expansion = card.dataset.qspmStrategy === '1';
    const [matching, evidence, input] = expansion
      ? [
          id ? 'Matriks SWOT slide 22 menggabungkan SO3 (membuka supermarket Hyfresh kompak) dan SO4 (menyatukan merek di bawah Hy-).' : 'On SWOT Matrix slide 22, SO3 proposes opening compact Hyfresh supermarkets and SO4 proposes bringing selected banners under Hy-. The case team combined these two ideas into Strategy 1.',
          id ? 'Laporan Tahunan 2020 hlm. 45–46 menunjukkan bahwa Hyfresh sudah beroperasi dan memiliki sembilan gerai pada akhir 2020. Penyatuan merek adalah usulan tim kasus.' : 'The 2020 Annual Report, pp. 45–46, records nine Hyfresh stores at year-end. The rollout and shared brand are proposals from the case analysis.',
          'D325'
        ]
      : [
          id ? 'Matriks SWOT slide 22 mengaitkan WO1 (mengurangi kelebihan ruang Hypermart) dengan SO1 (kemitraan pengiriman).' : 'On SWOT Matrix slide 22, WO1 proposes reducing excess Hypermart space through subleasing, and SO1 proposes using delivery partners. Strategy 2 combines those ideas by resizing selected stores and using them to fulfill online orders.',
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
    content.scrollTop = 0;
    (document.fullscreenElement || document.body).append(matrixDrawer);
    matrixDrawer.showModal();
    return;
  }
  if (event.target.closest?.('.qspm-factor-detail') && !matrixDrawer.open) openMatrixDrawer(findMatrixItem(event.target));
});

document.addEventListener('keydown', event => {
  if (event.key !== 'Enter') return;
  const match = findMatrixItem(event.target);
  if (match) {
    event.preventDefault();
    openMatrixDrawer(match);
  }
});
document.addEventListener('click', event => {
  if (matrixDrawer.open) {
    const bounds = matrixDrawer.getBoundingClientRect();
    const outside = event.target === matrixDrawer && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom);
    if (outside || event.target.closest?.('.matrix-detail-close')) matrixDrawer.close();
  } else if (!findMatrixItem(event.target)) {
    clearMatrixSelection();
  }
});
matrixDrawer.addEventListener('close', clearMatrixSelection);
document.addEventListener('fullscreenchange', () => { matrixPreview.hidden = true; });

window.addEventListener('load', function() {
  setTimeout(function() {
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
}
