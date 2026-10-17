/* HCKD RAIL – Quiz auf der Startseite */
'use strict';

/* =====================================================================
   QUIZ: drei Levels, Fragen aus js/daten/quiz.js.
   Während des Quiz wird nichts als richtig oder falsch angezeigt,
   erst die Auswertung am Schluss zeigt Prozent und alle Antworten.
   ===================================================================== */
(() => {
  const LEVELS = [
    { id: 'einfach', name: 'Einfach', text: 'Bekannte Züge erkennen und Grundwissen zur Bahn.' },
    { id: 'normal', name: 'Normal', text: 'Fahrzeuge, Zahlen und Strecken für Bahnfans.' },
    { id: 'schwierig', name: 'Schwierig', text: 'Technik, Geschichte und Details für Profis.' }
  ];
  const BEST_KEY = 'hckd-quiz-best';
  const box = $('#quiz-box');
  let best = {};
  try { best = JSON.parse(localStorage.getItem(BEST_KEY) || '{}') || {}; } catch (e) { best = {}; }
  let run = null; // { level, fragen: [{ f, bild, zug, info, opts: [...], ok: index }], wahl: [], i }

  const mix = list => { const a = list.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const levelOf = id => LEVELS.find(l => l.id === id);
  // keep the quiz in view when its height changes
  const inView = () => { const top = box.getBoundingClientRect().top; if (top < 64 || top > innerHeight * 0.6) scrollTo({ top: top + scrollY - 84, behavior: reduce ? 'auto' : 'smooth' }); };

  function startScreen() {
    run = null;
    box.innerHTML = `<ul class="qz-levels">${LEVELS.map(l => {
      const n = QUIZ[l.id].length, b = best[l.id];
      return `<li><button class="qz-level" type="button" data-level="${l.id}">
        <span class="qz-lv-name">${esc(l.name)}</span>
        <span class="qz-lv-text">${esc(l.text)}</span>
        <span class="qz-lv-foot"><span>${n} Fragen</span>${b != null ? `<span class="qz-best">Bestes Ergebnis ${b} %</span>` : ''}<span class="go">Starten ${arrow}</span></span>
      </button></li>`;
    }).join('')}</ul>`;
  }

  function start(level) {
    run = {
      level,
      fragen: mix(QUIZ[level]).map(q => {
        const opts = mix(q.a.map((t, k) => ({ t, ok: k === 0 })));
        return { ...q, opts: opts.map(o => o.t), ok: opts.findIndex(o => o.ok) };
      }),
      wahl: [], i: 0
    };
    frage();
    inView();
  }

  function frage() {
    const { fragen, wahl, i, level } = run, q = fragen[i], n = fragen.length, last = i === n - 1;
    box.innerHTML = `<div class="qz-run">
      <div class="qz-top"><span class="qz-tag">${esc(levelOf(level).name)}</span><span class="qz-count">Frage ${i + 1} von ${n}</span><button class="qz-stop" type="button">Abbrechen</button></div>
      <div class="qz-prog" aria-hidden="true"><i style="width:${i / n * 100}%"></i></div>
      <div class="qz-card${q.bild ? ' has-pic' : ''}">
        ${q.bild ? `<div class="qz-pic"><img src="${esc(q.bild)}" alt="Foto zur Frage" draggable="false"></div>` : ''}
        <div class="qz-body">
          <h3 class="qz-q" id="qz-q" tabindex="-1">${esc(q.f)}</h3>
          <div class="qz-opts" role="radiogroup" aria-labelledby="qz-q">${q.opts.map((t, k) =>
            `<button class="qz-opt" type="button" role="radio" aria-checked="${wahl[i] === k}" data-k="${k}"><span class="qz-key" aria-hidden="true">${'ABCD'[k]}</span><span>${esc(t)}</span></button>`).join('')}</div>
        </div>
      </div>
      <div class="qz-nav">
        <button class="qz-btn ghost" type="button" data-nav="-1"${i ? '' : ' disabled'}>Zurück</button>
        <button class="qz-btn" type="button" data-nav="1"${wahl[i] == null ? ' disabled' : ''}>${last ? 'Auswerten' : 'Weiter'}</button>
      </div>
    </div>`;
    $('#qz-q').focus({ preventScroll: true });
  }

  function auswertung() {
    const { fragen, wahl, level } = run, n = fragen.length;
    const richtig = fragen.filter((q, i) => wahl[i] === q.ok).length, pct = Math.round(richtig / n * 100);
    const neu = best[level] == null || pct > best[level];
    if (neu) { best[level] = pct; try { localStorage.setItem(BEST_KEY, JSON.stringify(best)); } catch (e) { /* private window */ } }
    const lob = pct === 100 ? 'Perfekt! Alles richtig.' : pct >= 80 ? 'Sehr stark, du kennst dich aus.' : pct >= 60 ? 'Gut gemacht!' : pct >= 40 ? 'Nicht schlecht, da geht noch mehr.' : 'Noch etwas üben, dann klappt es.';
    run.ergebnis = { pct, richtig, n };
    box.innerHTML = `<div class="qz-result">
      <div class="qz-score">
        <button class="qz-size" type="button" aria-expanded="true" aria-controls="qz-list">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 15l6-6 6 6"/></svg><span>Verkleinern</span>
        </button>
        <div class="qz-ring" style="--p:${pct}"><b>${pct}<small>%</small></b></div>
        <div class="qz-sum">
          <span class="kicker">Auswertung · ${esc(levelOf(level).name)}</span>
          <h3>${richtig} von ${n} richtig</h3>
          <p>${esc(lob)}${neu && pct > 0 ? ' Neues bestes Ergebnis in diesem Level.' : ''}</p>
          <div class="qz-again">
            <button class="qz-btn" type="button" data-again="${level}">Nochmals spielen</button>
            <button class="qz-btn ghost" type="button" data-levels>Anderes Level</button>
            <button class="qz-btn ghost qz-share" type="button"><span>Ergebnis teilen</span></button>
          </div>
        </div>
      </div>
      <ol class="qz-list" id="qz-list">${fragen.map((q, i) => {
        const ok = wahl[i] === q.ok, z = q.zug && zugOf(q.zug);
        return `<li class="${ok ? 'ok' : 'no'}">
          <span class="qz-mark">${ok ? 'Richtig' : 'Falsch'}</span>
          <p class="qz-lq"><span>${i + 1}.</span> ${esc(q.f)}</p>
          <p class="qz-la">Deine Antwort: <b>${esc(q.opts[wahl[i]])}</b></p>
          ${ok ? '' : `<p class="qz-la">Richtig wäre: <b>${esc(q.opts[q.ok])}</b></p>`}
          ${q.info ? `<p class="qz-info">${esc(q.info)}</p>` : ''}
          ${z ? `<a class="qz-link" href="#${z.id}">Mehr zu ${esc(z.name)} ${arrow}</a>` : ''}
        </li>`;
      }).join('')}</ol>
    </div>`;
    inView();
  }

  box.addEventListener('click', e => {
    const lv = e.target.closest('[data-level]'), opt = e.target.closest('.qz-opt'), nav = e.target.closest('[data-nav]');
    if (lv) start(lv.dataset.level);
    else if (opt && run) {
      run.wahl[run.i] = +opt.dataset.k;
      $$('.qz-opt', box).forEach(b => b.setAttribute('aria-checked', b === opt ? 'true' : 'false'));
      $('[data-nav="1"]', box).disabled = false;
    }
    else if (nav && run) {
      const d = +nav.dataset.nav;
      if (d > 0 && run.i === run.fragen.length - 1) auswertung();
      else { run.i = Math.max(0, run.i + d); frage(); inView(); }
    }
    else if (e.target.closest('.qz-size')) {
      // shrink the result to one line, or open it again
      const b = e.target.closest('.qz-size'), res = $('.qz-result', box), offen = b.getAttribute('aria-expanded') === 'true';
      res.classList.toggle('klein', offen);
      b.setAttribute('aria-expanded', offen ? 'false' : 'true');
      $('span', b).textContent = offen ? 'Vergrössern' : 'Verkleinern';
      inView();
    }
    else if (e.target.closest('.qz-share') && run && run.ergebnis) {
      const { pct, richtig, n } = run.ergebnis, lv = levelOf(run.level).name;
      const text = `Ich habe im HCKD RAIL Bahn-Quiz (Level ${lv}) ${richtig} von ${n} Fragen richtig, das sind ${pct} %. Schaffst du mehr?`;
      const url = seitenLink('quiz');
      teilen({ title: 'HCKD RAIL Bahn-Quiz', text, url, kopie: text + ' ' + url }, $('.qz-share span', box));
    }
    else if (e.target.closest('.qz-stop')) { startScreen(); inView(); }
    else if (e.target.closest('[data-again]')) start(e.target.closest('[data-again]').dataset.again);
    else if (e.target.closest('[data-levels]')) { startScreen(); inView(); }
  });
  // keys 1–4 or A–D choose an answer, Enter goes on
  box.addEventListener('keydown', e => {
    if (!run || !$('.qz-opts', box) || e.ctrlKey || e.metaKey || e.altKey) return;
    const k = '1234'.indexOf(e.key) >= 0 ? '1234'.indexOf(e.key) : 'abcd'.indexOf(e.key.toLowerCase());
    const opts = $$('.qz-opt', box);
    if (k >= 0 && opts[k]) { e.preventDefault(); opts[k].click(); opts[k].focus(); }
    else if (e.key === 'Enter' && e.target.classList.contains('qz-opt')) {
      const next = $('[data-nav="1"]', box);
      if (!next.disabled) { e.preventDefault(); next.click(); }
    }
  });
  startScreen();
})();
