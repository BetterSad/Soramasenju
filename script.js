const HERO_BG = 'assets/bg-main.jpg';

const PAGE_BG = {
  sistema:      'assets/bg-ranks.jpg',
  rekomendacii: 'assets/bg-rec.jpg',
  ierarhiya:    'assets/bg-hier.jpg',
  pomestya:     'assets/bg-estates.jpg',
  chs:          'assets/bg-blacklist.jpg',
  kvota:        'assets/bg-quota.jpg'
};

const RECOMMENDATIONS = [
  'Приходи на тренировки вовремя: ритм любит дисциплину.',
  'Докладывай о миссиях честно и громко.',
  'Фотографируй строй и захват: скрины нужны для повышения.'
];

const RULES = [
  'Много и смешно шутить',
  'Быть ярким и блестательным',
  'Сиять как никогда'
];

const LADDER = [
  ['top',   'Вершина',         'Хашира Звука',          'Тенген Узуй. Глава Дыхания Звука.'],
  ['wives', 'Жёны Тенгена',    'Хинацуру, Макио, Сума', 'Правая рука Хашира.'],
  ['mid',   'Старший состав',  'Цугуко',                'Помощник Хашира, ведёт и проверяет.'],
  ['mid',   'Обучение',        'Инструктор',            'Проводит тренировки и учит новичков.'],
  ['low',   'Основной состав', 'Истребитель',           'Миссии, вылазки, повышение рангов.'],
  ['low',   'Новички',         'Ученик',                'Учит устав и слушает ритм.']
];

const HASHIRAS = [
  ['Кёджуро Ренгоку', 'Хашира Пламени'],
  ['Тенген Узуй',     'Хашира Звука']
];

const ESTATE_LADDER = 'Цугуко → Инструктор → Истребитель → Ученик';

const GALLERY = [
  ['estate-gate',  'Ворота поместья с фонарями'],
  ['estate-sign',  'Табличка «Поместье Пламени Кеджуро Ренгоку»'],
  ['estate-path',  'Тропа из камней к дому'],
  ['estate-yard',  'Двор между бамбуковыми заборами'],
  ['estate-house', 'Главный дом ночью']
];

const BLACKLIST = [
  ['Не шутишь вообще',                    'Правило №1 никто не отменял.'],
  ['Ходишь тусклым и унылым',             'Блеск обязателен, хотя бы в клинке.'],
  ['Бросил своих на вылазке',             'Сбежать «за водичкой» не считается отступлением.'],
  ['Врёшь в отчёте',                      'Липовые скрины быстро находятся.'],
  ['Три опоздания без смешной отговорки', 'Отговорка с юмором засчитывается.'],
  ['Обижаешь жён Хашира',                 'Это плохая идея. Очень.'],
  ['Грязный клинок и фальшивая улыбка',   'Клинок должен сиять.'],
  ['Просишь Тенгена «сделать потише»',    'Тише у нас не бывает.']
];

const BLACKLIST_NOTE = 'Попал в ЧС? Извинись громко и блестяще — и, возможно, помилуют.';

const QUOTAS = [
  ['Ученик',              '15', 'Слушай ритм.'],
  ['Истребитель',         '30', 'Миссии и блеск.'],
  ['Цугуко и Инструктор', '45', 'Ведут строй и учат.']
];

const WIVES = {
  title: 'Жёны Хашира',
  minutes: '45',
  phrases: [
    'Приходите, как на праздник: праздник начинается вместе с вами.',
    'Сорок пять минут — не повинность, а выход на сцену.',
    'Сияйте, а поместье подстроится.'
  ]
};

const MECHANICS = [
  ['Что считается',   'Время в игре на делах поместья: тренировки, вылазки, миссии, РП.'],
  ['Можно по частям', 'Минуты за день суммируются.'],
  ['Отчёт',           'Скрин со временем и ником в конце дня.'],
  ['Пропуск',         'Предупреждение. Три подряд — разговор с цугуко.'],
  ['Отпуск',          'Предупреди заранее — квота снимается.']
];

const pad = i => String(i + 1).padStart(2, '0');
const numbered = (list, cls, fn) => list.map((x, i) => fn(x, pad(i))).join('');

const bgImageEl = document.getElementById('bgImage');
function setBackground(path){
  if (!bgImageEl) return;
  bgImageEl.style.backgroundImage = path ? `url("${path}")` : 'none';
}

const MARK_SVG = `
<svg class="page__mark" viewBox="0 0 100 100" aria-hidden="true">
  <circle cx="50" cy="50" r="46" fill="none" stroke="#ff77a8" stroke-width="2" opacity=".8"/>
  <circle cx="50" cy="50" r="32" fill="none" stroke="#ffd166" stroke-width="1.3" stroke-dasharray="4 5"/>
  <circle cx="50" cy="50" r="18" fill="none" stroke="#c6b6e3" stroke-width="1.4" opacity=".6"/>
  <circle cx="50" cy="50" r="5" fill="#ff77a8"/>
</svg>`;

const RANKS = [
  { from: 'Мидзуното', to: 'Мидзуноэ', kd: 'КД 2 дня', tasks: [
    'Проверить знания устава у Инструктора / Цугуко / Столпа',
    'Пройти ПМП в поместье бабочки',
    'Создать мед. карту в поместье бабочки'
  ]},
  { from: 'Мидзуноэ', to: 'Каното', kd: 'КД 2 дня', tasks: [
    'Убить 3 демонов',
    'Лопнуть маленький панкун (минимум 5 рп-действий и 1 /try)',
    'Участие в 1 тренировке от инструктора / цугуко / столпа'
  ]},
  { from: 'Каното', to: 'Каноэ', kd: 'КД 2 дня', tasks: [
    'Участие в 1 тренировке от инструктора / цугуко / столпа',
    'Участие в одной вылазке с истребителями',
    'Убить 5 демонов'
  ]},
  { from: 'Каноэ', to: 'Тсучиното', kd: 'КД 4 дня', tasks: [
    'Блестяще убить 7 демонов',
    'Выполнить одно поручение от своего цугуко / столпа',
    'Научиться при помощи дыхания останавливать лёгкое кровотечение'
  ]},
  { from: 'Тсучиното', to: 'Тсучиноэ', kd: 'КД 4 дня', tasks: [
    'Научиться с помощью техники дыхания выводить яды из организма',
    'Создать своё украшение и отдать своему Столпу звука (минимум 15 рп-действий)',
    'Смастерить 3 взрывных бусины',
    'Очистить свой клинок (минимум 10 рп-действий)'
  ]},
  { from: 'Тсучиноэ', to: 'Хиното', kd: 'КД 4 дня', tasks: [
    'Блестяще уничтожить 10 демонов',
    'Ярко выполнить поручение от любого столпа',
    'Выполнить поручение от любого члена поместья бабочки',
    'Победить истребителя любого дыхания на гальке'
  ]},
  { from: 'Хиното', to: 'Хиноэ', kd: 'КД 4 дня', tasks: [
    'Поучаствовать в миссии совместно со столпом звука (вылазка, ивент, мероприятие)',
    'Научиться останавливать тяжёлые кровотечения с помощью дыхания',
    'Лопнуть 1 средний панкун (минимум 15 рп-действий)',
    'Провести вылазку для истребителей (скрин строя + 4 скрина захвата)'
  ]},
  { from: 'Хиноэ', to: 'Киното', kd: 'КД 7 дней', tasks: [
    'Блестяще убить 12 демонов',
    'Победить любого цугуко на гальке',
    'Блестяще выполнить два поручения от любого столпа',
    'Обучиться постоянной концентрации дыхания',
    'Провести вылазку для истребителей (скрин строя + 3 скрина захвата)'
  ]},
  { from: 'Киното', to: 'Киноэ', kd: 'КД 7 дней', tasks: [
    'Блестяще убить 15 демонов',
    'Докажи, что ты самый яркий и блестящий — сразись со столпом звука (снести 50% ХП)',
    'Создай блестящий аксессуар и подари его любому столпу (минимум 15 рп-действий)',
    'Получи одобрение от цугуко и столпа звука',
    'Провести вылазку для истребителей (скрин строя + 3 скрина захвата)'
  ]}
];

const LORE_HTML = `
  <div class="callout callout--lore">
    <strong>Предыстория.</strong> Дыхание Звука — ответвление от Дыхания Грома, которое веками передавалось в шиноби-клане Узуя.
  </div>
`;

const HYPE_LINES = [
  'Всё, что я делаю — блестяще, иначе я не берусь!',
  'Слушай ритм боя — и ты никогда не пропустишь удар.',
  'Тихий клинок — мёртвый клинок. Мой звучит громко.',
  'Демон не должен услышать твой страх — только твой такт.',
  'Работа истребителя должна быть эффектной, точка.',
  'Дыши так как тебе нравится — и тогда никогда тебя не подведёт - никто.',
  'Скромность — не про Дыхание Звука.',
  'Восхищение - это последнее, что видеть твой противник.',
  'Услышь-предвидь - станцуй на могиле врага.',
  'Каждая победа - это доказательство твоего звучания.'
];

function initHypeButton(){
  const btn = document.getElementById('hypeBtn');
  const out = document.getElementById('hypeLine');
  if (!btn || !out) return;
  btn.addEventListener('click', () => {
    const line = HYPE_LINES[Math.floor(Math.random() * HYPE_LINES.length)];
    out.textContent = '«' + line + '»';
  });
}

function renderRankEntry(rank, index){
  const num = String(index + 1).padStart(2, '0');
  const tasksHtml = rank.tasks.map((t, ti) => `
    <li class="task" data-rank="${index}" data-task="${ti}">
      <input type="checkbox" id="t-${index}-${ti}" />
      <label for="t-${index}-${ti}">${t}</label>
    </li>
  `).join('');

  return `
    <div class="entry">
      <div class="entry__rank">${num}</div>
      <div>
        <h3>${rank.from} &rarr; ${rank.to} <span class="tag tag--gold">${rank.kd}</span></h3>
        <ul class="task-list">${tasksHtml}</ul>
      </div>
    </div>
  `;
}

function initRanksPage(){
  const listEl = document.getElementById('ranksList');
  if (!listEl) return;
  listEl.innerHTML = RANKS.map(renderRankEntry).join('');
  bindTaskCheckboxes();
  initHypeButton();
}

function bindTaskCheckboxes(){
  document.querySelectorAll('.task input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', () => {
      cb.closest('.task').classList.toggle('is-done', cb.checked);
    });
  });
}

const pages = {

  sistema: {
    num: '01',
    nav: 'Система повышения',
    eyebrow: 'Дыхание Звука',
    title: 'Система повышения',
    intro: 'Полный путь от Мидзуното до Киноэ. У каждой ступени свой набор требований и общий кулдаун группы — отмечайте выполненное галочками.',
    html: `
      ${LORE_HTML}
      <div class="hype-row">
        <button class="hype-row__btn" id="hypeBtn" type="button">Клич резонанса</button>
        <p class="hype-row__line" id="hypeLine">«Нажми — и услышишь, о чём думает Дыхание Звука».</p>
      </div>
      <div class="seal-divider">ступени ранга</div>
      <div id="ranksList"></div>
    `
  },

  rekomendacii: {
    num: '02',
    nav: 'Рекомендации',
    eyebrow: 'Дыхание Звука',
    title: 'Рекомендации',
    intro: 'Советы тем, кто хочет подниматься быстро и блестяще.',
    html: `<ul class="rec-list">${numbered(RECOMMENDATIONS, '', (t, n) => `<li class="rec"><span class="rec__n">${n}</span>${t}</li>`)}</ul>`
  },

  ierarhiya: {
    num: '03',
    nav: 'Иерархия',
    eyebrow: 'Кто кому отвечает',
    title: 'Иерархия Дыхания Звука',
    intro: 'От Хашира звука до Ученика: порядок сверху вниз.',
    html: `<div class="rank-grid rank-grid--hierarchy">${LADDER.map(([tier, lvl, name, txt]) => `<div class="rank-card" data-tier="${tier}"><span class="rank-card__level">${lvl}</span><h4>${name}</h4><p>${txt}</p></div>`).join('<div class="hierarchy-arrow">↓</div>')}</div>`
  },

  pomestya: {
    num: '04',
    nav: 'Иерархия поместья',
    eyebrow: 'Наше поместье',
    title: 'Иерархия поместья',
    intro: 'Хаширы и лестница, по которой живёт поместье.',
    html: `
      <div class="estate-grid">
        <div class="estate">
          <span class="rank-card__level">Хаширы</span>
          ${HASHIRAS.map(([name, title]) => `<p><strong>${name}</strong> — ${title}</p>`).join('')}
        </div>
        <div class="estate">
          <span class="rank-card__level">Лестница</span>
          <h4>${ESTATE_LADDER}</h4>
        </div>
      </div>
      <div class="seal-divider">фото поместья</div>
      <div class="gallery">${GALLERY.map(([f, t]) => `<figure class="shot" data-src="assets/${f}.jpg"><img src="assets/${f}.jpg" alt="${t}" loading="lazy"><figcaption>${t}</figcaption></figure>`).join('')}</div>
    `
  },

  pravila: {
    num: '05',
    nav: 'Правила поместья',
    eyebrow: 'Закон поместья',
    title: 'Правила поместья',
    intro: 'Три правила, которые знает каждый, кто входит в ворота.',
    html: `<ol class="rules">${numbered(RULES, '', (t, n) => `<li class="rule"><span class="rule__n">${Number(n)}</span><span>${t}</span></li>`)}</ol>`
  },

  chs: {
    num: '06',
    nav: 'Чёрный список',
    eyebrow: 'Закон поместья',
    title: 'Чёрный список',
    intro: 'За что можно вылететь из поместья.',
    html: `
      <ol class="ban-list">${numbered(BLACKLIST, '', ([t, d], n) => `<li class="ban"><span class="ban__n">${n}</span><div><h4>${t}</h4><p>${d}</p></div></li>`)}</ol>
      <div class="callout">${BLACKLIST_NOTE}</div>
    `
  },

  kvota: {
    num: '07',
    nav: 'Квота',
    eyebrow: 'Ежедневный минимум',
    title: 'Квота',
    intro: 'Сколько времени в день проводить в делах поместья.',
    html: `
      <div class="quota-grid">${QUOTAS.map(([r, t, d]) => `<div class="quota"><span class="rank-card__level">${r}</span><div class="quota__time">${t}<small>мин / день</small></div><p>${d}</p></div>`).join('')}</div>
      <div class="quota quota--wives">
        <span class="quota__crown">${WIVES.title}</span>
        <div class="quota__time">${WIVES.minutes}<small>минут в день</small></div>
        ${WIVES.phrases.map(p => `<p class="quota__phrase">${p}</p>`).join('')}
      </div>
      <div class="seal-divider">механика</div>
      <ol class="ban-list ban-list--gold">${numbered(MECHANICS, '', ([t, d], n) => `<li class="ban"><span class="ban__n">${n}</span><div><h4>${t}</h4><p>${d}</p></div></li>`)}</ol>
    `
  }
};

const order = ['sistema', 'rekomendacii', 'ierarhiya', 'pomestya', 'pravila', 'chs', 'kvota'];

const navLinksEl = document.getElementById('navLinks');
const pageView   = document.getElementById('pageView');
const heroEl     = document.getElementById('hero');
const utilBarEl  = document.getElementById('utilBar');

function buildNav(){
  navLinksEl.innerHTML = `<a class="side-link" data-page="" href="#home"><span class="side-link__num">00</span>Главная</a>` + order.map(id => {
    const p = pages[id];
    return `<a class="side-link" data-page="${id}" href="#${id}">
      <span class="side-link__num">${p.num}</span>${p.nav}
    </a>`;
  }).join('');

  navLinksEl.querySelectorAll('.side-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      navigate(link.dataset.page);
      closeMenu();
    });
  });
}

function buildUtilBar(){
  if (!utilBarEl) return;
  utilBarEl.innerHTML = `<span class="util-link" data-page="" data-home="1">Главная</span>` +
    order.map(id => `<span class="util-link" data-page="${id}">${pages[id].nav}</span>`).join('');

  utilBarEl.querySelectorAll('.util-link').forEach(link => {
    link.addEventListener('click', () => {
      navigate(link.dataset.home ? null : link.dataset.page);
    });
  });
}

function setActiveNav(pageId){
  navLinksEl.querySelectorAll('.side-link').forEach(a => {
    a.classList.toggle('is-active', a.dataset.page === (pageId || ''));
  });
}

function renderPage(pageId){
  if (!pageId || !pages[pageId]){
    document.body.classList.remove('is-page');
    pageView.classList.remove('is-visible');
    setActiveNav(null);
    setBackground(HERO_BG);
    return;
  }
  const p = pages[pageId];
  document.body.classList.add('is-page');
  setBackground(PAGE_BG[pageId] || HERO_BG);

  pageView.innerHTML = `
    ${MARK_SVG}
    <div class="page__header">
      <p class="page__eyebrow">${p.eyebrow}</p>
      <h2 class="page__title">${p.title}</h2>
      <p class="page__intro">${p.intro}</p>
    </div>
    ${p.html}
  `;
  pageView.classList.add('is-visible');
  pageView.classList.remove('is-animating');
  void pageView.offsetWidth;
  pageView.classList.add('is-animating');

  if (pageId === 'sistema'){
    initRanksPage();
  }
  if (pageId === 'pomestya'){
    initGallery();
  }

  setActiveNav(pageId);
}

function navigate(pageId, push = true){
  if (push) history.pushState({ page: pageId || null }, '', pageId ? '#' + pageId : '#home');
  renderPage(pageId);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openMenu(){ document.body.classList.add('menu-open'); }
function closeMenu(){ document.body.classList.remove('menu-open'); }

document.getElementById('menuToggle').addEventListener('click', () => {
  document.body.classList.contains('menu-open') ? closeMenu() : openMenu();
});
document.getElementById('overlay').addEventListener('click', closeMenu);

document.getElementById('brandHome').addEventListener('click', () => { navigate(null); closeMenu(); });
document.getElementById('brandHome').addEventListener('keypress', e => {
  if (e.key === 'Enter' || e.key === ' ') { navigate(null); closeMenu(); }
});
document.getElementById('heroCta').addEventListener('click', () => navigate('sistema'));

document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  buildUtilBar();
  setBackground(HERO_BG);
  const hash = location.hash.replace('#', '');
  if (hash && hash !== 'home' && pages[hash]) {
    renderPage(hash);
  } else {
    renderPage(null);
  }
});

window.addEventListener('popstate', () => {
  const hash = location.hash.replace('#', '');
  if (hash && hash !== 'home' && pages[hash]) {
    renderPage(hash);
  } else {
    renderPage(null);
  }
});

function initGallery(){
  document.querySelectorAll('.shot').forEach(s => s.addEventListener('click', () => {
    const lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML = `<img src="${s.dataset.src}" alt="">`;
    lb.addEventListener('click', () => lb.remove());
    document.body.appendChild(lb);
  }));
}
