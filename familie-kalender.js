import DATA from './familie-data.js';

const createElement = (tag, props = {}) => Object.assign(document.createElement(tag), props);
// createElement + children
const h = (tag, props = {}, ...children) => {
  const el = createElement(tag, props);
  el.append(...children.flat().filter((c) => c != null && c !== false));
  return el;
};

const MONTHS = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
const MSHORT = ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
const DAYS = ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'];
const DAYSL = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];

const SVG = (paths, size) =>
  `<svg aria-hidden="true" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
const ICONS = {
  b: '<path d="M4 21h16"/><path d="M5 21v-7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7"/><path d="M5 16c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0"/><path d="M12 12V8"/><path d="M12 5.5c.8-.8.8-1.7 0-2.5-.8.8-.8 1.7 0 2.5z"/>',
  w: '<circle cx="9" cy="14" r="5"/><circle cx="15" cy="14" r="5"/><path d="M10 6l2-3 2 3"/>',
  d: '<path d="M10 10h4v11h-4z"/><path d="M12 7.5c1.2-1 1.2-2.4 0-4-1.2 1.6-1.2 3 0 4z"/><path d="M7 21h10"/>',
};
const icon = (t, size = 18) => createElement('span', { className: 'icon', innerHTML: SVG(ICONS[t], size) });

const STYLE = /*css*/ `
:host{
  --accent:#23408E; --bg:#F6F4EE; --ink:#1F2430; --text:#3D4352; --muted:#4A5060; --muted2:#5B6170;
  --line:#E6E3DA; --wed:#9D1D4E; --mem:#55595F; --memtext:#4F535A;
  display:block; background:var(--bg); color:var(--ink); font-family:Inter,system-ui,sans-serif; min-height:100vh;
}
*{box-sizing:border-box}
button{font:inherit}
a{color:var(--accent)} a:hover{color:#16295C}
h1,h2{margin:0;font-family:'Space Grotesk',Inter,sans-serif}
.wrap{max-width:1320px;margin:0 auto;padding:40px 24px 32px;display:flex;flex-direction:column;gap:28px}
.card{background:#fff;border-radius:14px;border:1px solid var(--line);box-shadow:0 1px 2px rgba(20,24,40,.06)}
.pill{border-radius:999px;font-weight:700}
.icon{display:flex}
.t-b{--c:var(--accent)} .t-w{--c:var(--wed)} .t-d{--c:var(--mem)}

header{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;gap:20px}
header .titles{display:flex;flex-direction:column;gap:6px}
h1{font-size:40px;line-height:1.1;font-weight:700;color:var(--accent)}
header p{margin:0;font-size:15px;color:var(--muted)}
.controls{display:flex;flex-wrap:wrap;gap:10px;align-items:center}
.filters{display:flex;gap:4px;padding:4px;background:#fff;border-radius:12px;box-shadow:0 1px 2px rgba(20,24,40,.08)}
.filters button{min-height:40px;padding:0 16px;border:0;border-radius:9px;cursor:pointer;font-size:14px;font-weight:600;background:transparent;color:var(--ink)}
.filters button[aria-pressed="true"]{background:var(--accent);color:#fff}
.mem{min-height:48px;padding:0 16px;border:1px solid #D8D6CF;border-radius:12px;cursor:pointer;font-size:14px;font-weight:600;background:#fff;color:var(--ink);display:flex;align-items:center;gap:10px}
.track{width:34px;height:20px;border-radius:999px;background:#C9C7C0;position:relative;display:inline-block}
.track::after{content:'';position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:999px;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:left .15s}
.mem[aria-pressed="true"] .track{background:var(--accent)}
.mem[aria-pressed="true"] .track::after{left:16px}

.soon{display:flex;flex-direction:column;gap:12px}
.soon .head{display:flex;align-items:baseline;gap:12px}
.soon h2{font-size:22px;font-weight:600}
.soon .head span{font-size:14px;color:var(--muted2)}
.upcoming{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px}
.up{padding:14px 16px;display:flex;flex-direction:column;gap:8px}
.up.today{border:2px solid var(--accent)}
.up .top{display:flex;justify-content:space-between;align-items:center;gap:8px}
.up .when{font-size:13px;padding:3px 10px;background:#F1EFE9;color:var(--text)}
.up.today .when{background:var(--accent);color:#fff}
.up .away{font-size:12.5px;color:var(--muted2)}
.up .who{display:flex;align-items:center;gap:8px;color:var(--c)}
.up .who strong{font-size:16px;color:var(--ink)}
.up.t-d .who strong{color:var(--memtext)}
.up .line{font-size:14px;color:var(--text)}
.none{margin:0;font-size:14px;color:var(--muted2)}

.legend{display:flex;flex-wrap:wrap;gap:8px 22px;align-items:center;font-size:13.5px;color:var(--text);padding:12px 16px;background:#fff;border-radius:12px}
.legend > span{display:flex;align-items:center;gap:6px}
.legend .icon{color:var(--c)}
.legend .crown{min-width:26px;text-align:center;padding:2px 8px;font-size:12.5px;background:var(--accent);color:#fff}

.months{display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:20px}
.month{display:flex;flex-direction:column;overflow:hidden}
.month.current{border:2px solid var(--accent)}
.month .mhead{display:flex;justify-content:space-between;align-items:center;padding:14px 16px 8px}
.month h2{font-size:19px;font-weight:600}
.month.current h2{color:var(--accent)}
.month .mhead .pill{font-size:12px;padding:3px 10px;background:var(--accent);color:#fff}
.rows{display:flex;flex-direction:column;gap:2px;padding:0 6px 10px}
.row{display:grid;grid-template-columns:28px 18px minmax(0,1fr) auto;gap:10px;align-items:center;padding:7px 10px;border-radius:9px}
.row.today{background:#E9EEFA}
.row .day{font-variant-numeric:tabular-nums;font-weight:700;font-size:15px;text-align:right}
.row.past .day{color:#6B7080}
.row .icon{color:var(--c)}
.row .txt{min-width:0;display:flex;flex-direction:column;gap:1px}
.row .name{font-size:15px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.row.t-d .name{color:var(--memtext);font-style:italic}
.row .died{font-weight:500;font-style:normal;font-size:13px;color:var(--mem)}
.row .now{margin-left:6px;font-size:11.5px;font-style:normal;padding:1px 7px;background:var(--accent);color:#fff}
.row .sub{font-size:12.5px;color:var(--muted2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.badge{min-width:30px;text-align:center;padding:3px 8px;font-size:13px;font-variant-numeric:tabular-nums}
.t-b .badge{background:#EDF0F7;color:var(--accent)}
.t-w .badge{background:#FBE9F0;color:#8A1844}
.t-d .badge{background:#EFEEEB;color:var(--memtext)}
.t-b .badge.ms{background:var(--accent);color:#fff}
.t-w .badge.ms{background:var(--wed);color:#fff}
.empty{margin:6px 10px 4px;font-size:13.5px;color:var(--muted2)}

footer{display:flex;flex-wrap:wrap;justify-content:space-between;gap:8px;font-size:14px;color:var(--muted);padding-top:8px;border-top:1px solid #E2DFD6}
`;

customElements.define(
  'familie-kalender',
  class extends HTMLElement {
    static observedAttributes = ['accent'];

    constructor() {
      super();
      this.state = { filter: 'all', showMem: true };
      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      this.render();
      this.scheduleMidnight();
    }

    disconnectedCallback() {
      clearTimeout(this.timer);
    }

    attributeChangedCallback() {
      const accent = this.getAttribute('accent');
      accent ? this.style.setProperty('--accent', accent) : this.style.removeProperty('--accent');
    }

    // ages, "vandaag" and "binnenkort" depend on the date: re-render just after midnight
    scheduleMidnight() {
      const now = new Date();
      const next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 5);
      this.timer = setTimeout(() => (this.render(), this.scheduleMidnight()), next - now);
    }

    setState(patch) {
      Object.assign(this.state, patch);
      this.render();
    }

    render() {
      const { filter, showMem } = this.state;
      const now = new Date();
      const Y = now.getFullYear(), TM = now.getMonth() + 1, TD = now.getDate();
      const today0 = new Date(Y, TM - 1, TD);

      const rel = (e) => (e.r ? (e.rk === 'p' ? 'partner van ' : 'familie van ') + e.r : '');
      const visible = (e) => {
        if (e.t === 'd' && !showMem) return false;
        if (filter === 'b') return e.t === 'b' || e.t === 'd';
        if (filter === 'w') return e.t === 'w';
        return true;
      };
      const milestone = (e, n) =>
        (e.t === 'b' && n > 0 && (n % 10 === 0 || n === 18)) ||
        (e.t === 'w' && !e.fx && n > 0 && (n % 5 === 0 || n === 12));

      // ---- header
      const header = h('header', {},
        h('div', { className: 'titles' },
          h('h1', { textContent: 'Engelman Familie Kalender' }),
          h('p', { textContent: `Verjaardagen, trouwdagen en herdenkingen · vandaag is het ${DAYSL[now.getDay()]} ${TD} ${MONTHS[TM - 1]} ${Y}` })),
        h('div', { className: 'controls' },
          h('div', { className: 'filters', role: 'group', ariaLabel: 'Filter' },
            [['all', 'Alles'], ['b', 'Verjaardagen'], ['w', 'Trouwdagen']].map(([id, label]) =>
              h('button', { type: 'button', textContent: label, ariaPressed: String(filter === id), onclick: () => this.setState({ filter: id }) }))),
          h('button', { type: 'button', className: 'mem', ariaPressed: String(showMem), onclick: () => this.setState({ showMem: !showMem }) },
            createElement('span', { className: 'track', ariaHidden: 'true' }),
            'In memoriam tonen')));

      // ---- binnenkort: komende 30 dagen, max 8
      const upcoming = DATA.filter((e) => e.t !== 'd' || showMem)
        .map((e) => {
          let yr = Y, dt = new Date(yr, e.m - 1, e.d);
          if (dt < today0) dt = new Date(++yr, e.m - 1, e.d);
          return { e, yr, dt, away: Math.round((dt - today0) / 864e5) };
        })
        .filter((x) => x.away <= 30)
        .sort((a, b) => a.away - b.away)
        .slice(0, 8)
        .map(({ e, yr, dt, away }) => {
          const n = yr - e.y;
          const line =
            e.t === 'b' ? (away === 0 ? 'wordt vandaag ' : 'wordt ') + n
            : e.t === 'w' ? (e.fx != null ? `trouwdag (getrouwd in ${e.y})` : `${n} jaar getrouwd`)
            : n <= 100 ? `zou ${n} zijn geworden · † ${e.died}` : `geboren ${e.y} · † ${e.died}`;
          return h('div', { className: `card up t-${e.t}${away === 0 ? ' today' : ''}` },
            h('div', { className: 'top' },
              h('span', { className: 'pill when', textContent: away === 0 ? 'Vandaag' : `${DAYS[dt.getDay()]} ${e.d} ${MSHORT[e.m - 1]}` }),
              h('span', { className: 'away', textContent: away === 0 ? '' : away === 1 ? 'morgen' : `over ${away} dagen` })),
            h('div', { className: 'who' }, icon(e.t), h('strong', { textContent: e.n })),
            h('span', { className: 'line', textContent: line }));
        });

      const soon = h('section', { className: 'soon', ariaLabel: 'Binnenkort' },
        h('div', { className: 'head' }, h('h2', { textContent: 'Binnenkort' }), h('span', { textContent: 'de komende 30 dagen' })),
        upcoming.length
          ? h('div', { className: 'upcoming' }, upcoming)
          : h('p', { className: 'none', textContent: 'Niets in de komende 30 dagen.' }));

      // ---- legenda
      const legendItem = (t, text) => h('span', { className: `t-${t}` }, icon(t, 16), text);
      const legend = h('div', { className: 'legend' },
        h('strong', { textContent: 'Legenda' }),
        legendItem('b', 'Verjaardag (leeftijd die dit jaar bereikt wordt)'),
        legendItem('w', 'Trouwdag (aantal jaren getrouwd)'),
        legendItem('d', 'In memoriam (leeftijd bij overlijden)'),
        h('span', {}, h('span', { className: 'pill crown', textContent: '50' }), 'Kroonjaar'));

      // ---- maanden
      const months = MONTHS.map((name, i) => {
        const m = i + 1;
        const isCurrent = m === TM;
        const rows = DATA.filter((e) => e.m === m && visible(e)).map((e) => {
          const isToday = isCurrent && e.d === TD;
          const past = m < TM || (isCurrent && e.d < TD);
          let num, sub, tip;
          if (e.t === 'b') {
            num = Y - e.y;
            sub = rel(e);
            tip = `${e.n} ${past ? 'werd ' : isToday ? 'wordt vandaag ' : 'wordt '}${num} (geboren ${e.y})`;
          } else if (e.t === 'w') {
            num = e.fx != null ? e.fx : Y - e.y;
            sub = e.fx != null ? `getrouwd in ${e.y}, tot ${e.end}` : `getrouwd in ${e.y}`;
            tip = `${e.n}: ${e.fx != null ? num + ' jaar getrouwd geweest' : num + ' jaar getrouwd in ' + Y}`;
          } else {
            num = e.age;
            sub = rel(e);
            tip = `${e.n}, geboren ${e.y}, overleden in ${e.died} op ${e.age}-jarige leeftijd`;
          }
          return h('div', { className: `row t-${e.t}${isToday ? ' today' : ''}${past ? ' past' : ''}`, title: tip },
            h('span', { className: 'day', textContent: e.d }),
            icon(e.t),
            h('span', { className: 'txt' },
              h('span', { className: 'name' },
                e.n,
                e.t === 'd' && h('span', { className: 'died', textContent: ` · † ${e.died}` }),
                isToday && h('span', { className: 'pill now', textContent: 'vandaag' })),
              sub && h('span', { className: 'sub', textContent: sub })),
            h('span', { className: `pill badge${milestone(e, num) ? ' ms' : ''}`, textContent: num }));
        });
        return h('section', { className: `card month${isCurrent ? ' current' : ''}` },
          h('div', { className: 'mhead' },
            h('h2', { textContent: name[0].toUpperCase() + name.slice(1) }),
            isCurrent && h('span', { className: 'pill', textContent: 'Deze maand' })),
          h('div', { className: 'rows' },
            rows.length ? rows : h('p', { className: 'empty', textContent: 'Niets in deze selectie.' })));
      });

      // ---- footer
      const footer = h('footer', {},
        h('span', {}, 'Aanvullingen of correcties? Mail ', h('a', { href: 'mailto:danny@engelman.nl', textContent: 'danny@engelman.nl' })),
        h('span', { textContent: 'Leeftijden en jubilea worden automatisch berekend vanaf de datum van vandaag.' }));

      // keep keyboard focus on the same control across re-renders
      const focused = this.shadowRoot.activeElement;
      const focusKey = focused && focused.tagName === 'BUTTON' ? focused.textContent : null;

      this.shadowRoot.replaceChildren(
        createElement('style', { textContent: STYLE }),
        h('div', { className: 'wrap' }, header, soon, legend, h('div', { className: 'months' }, months), footer));

      if (focusKey) [...this.shadowRoot.querySelectorAll('button')].find((b) => b.textContent === focusKey)?.focus();
    }
  }
);
