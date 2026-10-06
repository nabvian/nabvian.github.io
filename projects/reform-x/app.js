// RE-FORM X showcase page: screenshot lightbox, fixture gallery and four small
// charts. Every number below is copied from the project's own validation
// reports (old-to-new-validation.json and the showcase test report).
(() => {
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const fmt = (v, d = 2) => Number(v).toFixed(d);

  // ---------- screenshots ----------
  const SHOTS = {
    "01": ["01-overview", "Workspace overview (fixture)"],
    "02": ["02-formulation-science-history", "Saved scientific calculations and formulation work (fixture)"],
    "03": ["03-model-predictions", "Stored research predictions (fixture)"],
    "04": ["04-experiment-execution", "Assay-bound laboratory execution records (fixture)"],
    "05": ["05-material-lots", "Released material lots and exact remaining quantities (fixture)"],
    "06": ["06-samples-instruments", "Instruments, calibration, samples and aliquots (fixture)"],
    "07": ["07-instrument-files", "Retained instrument CSV exports and import provenance (fixture)"],
    "08": ["08-quality-investigations", "Quality investigations with independent closure (fixture)"],
    "09": ["09-benchmark-protocol", "Approved, frozen benchmark protocol (fixture)"],
    "10": ["10-model-validation", "Model registry and completed benchmark (fixture)"],
    "11": ["11-jobs", "Durable background job history (fixture)"],
    "12": ["12-audit-integrity", "Valid 151-event audit hash chain (fixture)"],
    "13": ["13-public-data-overview", "Registry project overview: NCT02252965"],
    "14": ["14-public-source-permissions", "Explicit source policy and allowed operations"],
    "15": ["15-public-evidence-library", "Retained official source snapshot with digest"],
    "16": ["16-public-product-register", "Study-arm products, no approval inferred"],
    "17": ["17-public-observation-review", "50 traceable aggregate observations and review states"],
    "18": ["18-public-target-profile", "Research target with declared unknowns"],
    "19": ["19-public-screening-decision", "Conservative evidence-readiness decision"],
    "20": ["20-public-screening-detail", "Screening detail: insufficient evidence, missing prerequisites"],
    "21": ["21-public-import-job", "Completed structured import job"],
    "22": ["22-public-audit-integrity", "Valid 71-event registry audit chain"],
    "23": ["23-old-to-new-overview", "Replay project overview"],
    "24": ["24-old-reference-product", "Published Glucophage XR 500 mg reference profile"],
    "25": ["25-public-reference-evidence", "Four independently reviewed literature observations"],
    "26": ["26-reformulation-target", "Declared research target: lower-mass 500 mg sustained-release tablet, max 900 mg"],
    "27": ["27-readiness-boundary", "Screening boundary: regulatory route out of scope; hypothesis generation only"],
    "28": ["28-new-possible-formulation", "Generated 844.59 mg P3 research candidate"],
    "29": ["29-confirmation-experiment-design", "Nine-run factorial confirmation design"],
    "30": ["30-public-benchmark-protocol", "Independently approved, prespecified benchmark protocol"],
    "31": ["31-model-selection", "Ridge promoted for research; random forest withheld"],
    "32": ["32-new-candidate-prediction", "In-domain P3 prediction: f2 55.68, interval 49.94–61.42"],
    "33": ["33-out-of-domain-abstention", "5% HPMC input outside the domain: no numerical prediction"],
    "34": ["34-old-to-new-audit", "Append-only activity trail for the replay"],
  };
  // Keys like "10" are integer-like, so Object.keys would put them before "01"; sort explicitly.
  const ORDER = Object.keys(SHOTS).sort();

  const fixtures = ORDER.slice(0, 12);
  $("#fixture-gallery").innerHTML = fixtures.map((id) => `<figure><button type="button" class="shot-btn" data-shot="${id}"><img src="thumbs/${SHOTS[id][0]}.jpg" alt="${esc(SHOTS[id][1])}" width="800" height="450" loading="lazy"></button><figcaption>${esc(SHOTS[id][1].replace(" (fixture)", ""))}</figcaption></figure>`).join("");

  const box = $("#lightbox"), boxImg = box.querySelector("img"), boxCap = box.querySelector("figcaption");
  let current = null, opener = null;
  const show = (id) => {
    current = id;
    boxImg.src = `shots/${SHOTS[id][0]}-full-hd.png`;
    boxImg.alt = SHOTS[id][1];
    boxCap.textContent = `${Number(id)} / ${ORDER.length} · ${SHOTS[id][1]}`;
  };
  const open = (id, from) => { opener = from; show(id); box.classList.add("on"); box.querySelector(".close").focus(); };
  const close = () => { box.classList.remove("on"); boxImg.removeAttribute("src"); opener?.focus(); };
  const step = (d) => show(ORDER[(ORDER.indexOf(current) + d + ORDER.length) % ORDER.length]);
  document.addEventListener("click", (e) => { const b = e.target.closest("[data-shot]"); if (b) open(b.dataset.shot, b); });
  box.querySelector(".close").addEventListener("click", close);
  box.querySelector(".prev").addEventListener("click", () => step(-1));
  box.querySelector(".next").addEventListener("click", () => step(1));
  box.addEventListener("click", (e) => { if (e.target === box) close(); });
  document.addEventListener("keydown", (e) => {
    if (!box.classList.contains("on")) return;
    if (e.key === "Escape") close(); else if (e.key === "ArrowRight") step(1); else if (e.key === "ArrowLeft") step(-1);
  });

  // ---------- chart helpers ----------
  const tip = document.createElement("div");
  tip.className = "tip";
  document.body.appendChild(tip);
  document.addEventListener("pointermove", (e) => {
    const t = e.target.closest?.("[data-tip]");
    if (!t) { tip.classList.remove("on"); return; }
    tip.innerHTML = t.dataset.tip;
    const r = tip.getBoundingClientRect();
    const x = Math.min(e.clientX + 14, innerWidth - r.width - 8), y = e.clientY - r.height - 12;
    tip.style.left = `${x + scrollX}px`; tip.style.top = `${(y < 8 ? e.clientY + 18 : y) + scrollY}px`;
    tip.classList.add("on");
  });
  const table = (el, head, rows) => { $(el).innerHTML = `<table><thead><tr>${head.map((h, i) => `<th${i ? ' class="num"' : ""}>${h}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c, i) => `<td${i ? ' class="num"' : ""}>${c}</td>`).join("")}</tr>`).join("")}</tbody></table>`; };
  const ticks = (x, y0, y1, vals, f = (v) => v) => vals.map((v) => `<line class="gridline" x1="${x(v)}" x2="${x(v)}" y1="${y0}" y2="${y1}"/><text x="${x(v)}" y="${y1 + 16}" text-anchor="middle">${f(v)}</text>`).join("");

  // ---------- 1. model error with bootstrap intervals ----------
  const MODELS = [
    { name: "Ridge regression", c: "var(--s1)", mae: [1.481, 1.059, 1.903], rmse: [1.559, 1.079, 1.943], r2: 0.797, width: 11.48, promoted: true },
    { name: "Random forest", c: "var(--s2)", mae: [9.117, 5.364, 13.587], rmse: [10.207, 5.874, 14.249], r2: -7.715, width: 36.40, promoted: false },
  ];
  {
    const W = 520, L = 120, R = 70, panelH = 74, top = 6;
    const x = (v) => L + (v / 15) * (W - L - R);
    let svg = "";
    ["mae", "rmse"].forEach((m, p) => {
      const y0 = top + p * (panelH + 12);
      svg += `<text class="lbl" x="0" y="${y0 + 12}">${m.toUpperCase()}</text>`;
      MODELS.forEach((mo, i) => {
        const [v, lo, hi] = mo[m], y = y0 + 22 + i * 26;
        const t = `<b>${mo.name}</b><br>${m.toUpperCase()} ${fmt(v)} f2 units<br>95% bootstrap ${fmt(lo)}–${fmt(hi)}`;
        svg += `<text x="${L - 8}" y="${y + 13}" text-anchor="end">${mo.name.replace(" regression", "")}</text>`;
        svg += `<rect x="${L}" y="${y + 2}" width="${Math.max(2, x(v) - L)}" height="14" rx="4" fill="${mo.c}"/>`;
        svg += `<line x1="${x(lo)}" x2="${x(hi)}" y1="${y + 9}" y2="${y + 9}" stroke="var(--text-primary)" stroke-width="1.5"/><line x1="${x(lo)}" x2="${x(lo)}" y1="${y + 4}" y2="${y + 14}" stroke="var(--text-primary)" stroke-width="1.5"/><line x1="${x(hi)}" x2="${x(hi)}" y1="${y + 4}" y2="${y + 14}" stroke="var(--text-primary)" stroke-width="1.5"/>`;
        svg += `<text class="lbl" x="${x(hi) + 6}" y="${y + 13}">${fmt(v)}</text>`;
        svg += `<rect x="${L}" y="${y - 2}" width="${W - L}" height="22" fill="transparent" data-tip="${esc(t)}"/>`;
      });
    });
    const yb = top + 2 * (panelH + 12) - 4;
    svg = `<g>${ticks(x, top + 16, yb, [0, 5, 10, 15])}</g>` + svg;
    $("#chart-models").innerHTML = `<svg viewBox="-4 0 ${W + 8} ${yb + 24}" role="img" aria-label="Test MAE and RMSE with bootstrap intervals: ridge about 1.5, random forest about 9 to 10 f2 units">${svg}</svg>`;
    table("#table-models", ["Model", "MAE", "MAE 95% CI", "RMSE", "RMSE 95% CI", "R²", "Interval width", "Gates"], MODELS.map((m) => [m.name, fmt(m.mae[0]), `${fmt(m.mae[1])}–${fmt(m.mae[2])}`, fmt(m.rmse[0]), `${fmt(m.rmse[1])}–${fmt(m.rmse[2])}`, fmt(m.r2, 3), fmt(m.width), m.promoted ? "Passed · promoted" : "5 failed · withheld"]));
  }

  // ---------- 2. observed vs predicted per test formulation ----------
  const TEST = [
    { id: "E4", inD: false, obs: 47.68, ridge: 46.83, rf: 58.06 },
    { id: "E5", inD: false, obs: 42.40, ridge: 43.50, rf: 59.40 },
    { id: "E6", inD: false, obs: 50.70, ridge: 52.61, rf: 59.40 },
    { id: "P1", inD: true, obs: 49.85, ridge: 51.99, rf: 55.88 },
    { id: "P2", inD: true, obs: 52.41, ridge: 53.82, rf: 55.88 },
  ];
  {
    const W = 520, L = 116, R = 16, rowH = 46, top = 6;
    const x = (v) => L + ((v - 40) / 22) * (W - L - R);
    const yb = top + TEST.length * rowH;
    let svg = `<g>${ticks(x, top, yb, [40, 45, 50, 55, 60])}</g>`;
    TEST.forEach((t, i) => {
      const y = top + i * rowH + rowH / 2;
      const tipTxt = `<b>Test formulation ${t.id}</b> · ${t.inD ? "in domain" : "outside domain"}<br>observed ${fmt(t.obs)}<br>ridge ${fmt(t.ridge)} (error ${fmt(t.ridge - t.obs)})<br>random forest ${fmt(t.rf)} (error ${fmt(t.rf - t.obs)})`;
      svg += `<text x="${L - 12}" y="${y - 3}" text-anchor="end" class="lbl">${t.id}</text><text x="${L - 12}" y="${y + 12}" text-anchor="end" font-size="11">${t.inD ? "in domain" : "outside domain"}</text>`;
      const lo = Math.min(t.obs, t.ridge, t.rf), hi = Math.max(t.obs, t.ridge, t.rf);
      svg += `<line x1="${x(lo)}" x2="${x(hi)}" y1="${y}" y2="${y}" stroke="var(--grid)" stroke-width="2"/>`;
      svg += `<circle cx="${x(t.rf)}" cy="${y}" r="5.5" fill="var(--s2)" stroke="var(--surface-1)" stroke-width="2"/>`;
      svg += `<circle cx="${x(t.ridge)}" cy="${y}" r="5.5" fill="var(--s1)" stroke="var(--surface-1)" stroke-width="2"/>`;
      svg += `<circle cx="${x(t.obs)}" cy="${y}" r="6" fill="none" stroke="var(--text-primary)" stroke-width="2"/>`;
      svg += `<rect x="0" y="${y - rowH / 2}" width="${W}" height="${rowH}" fill="transparent" data-tip="${esc(tipTxt)}"/>`;
    });
    $("#chart-obs").innerHTML = `<svg viewBox="-4 0 ${W + 8} ${yb + 24}" role="img" aria-label="Observed and predicted f2 for five test formulations; ridge predictions lie close to observed, random forest predictions are higher">${svg}</svg>`;
    table("#table-obs", ["Test formulation", "Domain", "Observed f2", "Ridge", "Random forest"], TEST.map((t) => [t.id, t.inD ? "in" : "outside", fmt(t.obs), fmt(t.ridge), fmt(t.rf)]));
  }

  // ---------- 3. P3 composition ----------
  const COMP = [
    { n: "Metformin HCl", v: 500.00, c: "var(--s1)" },
    { n: "HPMC K15M", v: 152.03, c: "var(--s2)" },
    { n: "Cetyl alcohol", v: 150.34, c: "var(--s3)" },
    { n: "Magnesium stearate", v: 42.23, c: "var(--s4)" },
  ];
  {
    const total = 844.59, W = 520, H = 92, y = 30, h = 26;
    const x = (v) => (v / total) * W;
    let acc = 0, svg = "";
    COMP.forEach((c, i) => {
      const x0 = x(acc), w = Math.max(1, x(c.v) - (i < COMP.length - 1 ? 2 : 0));
      const t = `<b>${c.n}</b><br>${fmt(c.v)} mg · ${fmt((c.v / total) * 100, 1)}% of tablet mass`;
      svg += `<rect x="${x0}" y="${y}" width="${w}" height="${h}" rx="${i === 0 || i === COMP.length - 1 ? 4 : 0}" fill="${c.c}" data-tip="${esc(t)}"/>`;
      const mid = x0 + w / 2;
      svg += i % 2 === 0
        ? `<text x="${mid}" y="${y - 8}" text-anchor="middle" class="lbl">${fmt(c.v)} mg</text>`
        : `<text x="${mid}" y="${y + h + 18}" text-anchor="middle" class="lbl">${fmt(c.v)} mg</text>`;
      acc += c.v;
    });
    $("#chart-comp").innerHTML = `<svg viewBox="-24 0 ${W + 48} ${H}" role="img" aria-label="P3 composition: metformin HCl 500 mg, HPMC K15M 152.03 mg, cetyl alcohol 150.34 mg, magnesium stearate 42.23 mg; total 844.59 mg">${svg}</svg>`;
    table("#table-comp", ["Component", "Mass (mg)", "Share"], [...COMP.map((c) => [c.n, fmt(c.v), `${fmt((c.v / total) * 100, 1)}%`]), ["<b>Total</b>", "<b>844.59</b>", "100%"]]);
  }

  // ---------- 4. P3 prediction interval ----------
  {
    const W = 520, L = 10, R = 10, y = 22;
    const x = (v) => L + ((v - 40) / 30) * (W - L - R);
    const t = "<b>P3 · ridge, in domain</b><br>f2 estimate 55.68<br>interval 49.94–61.42<br>model estimate, not a measurement";
    let svg = `<g>${ticks(x, 6, 38, [40, 45, 50, 55, 60, 65, 70])}</g>`;
    svg += `<rect x="${x(49.94)}" y="${y - 7}" width="${x(61.42) - x(49.94)}" height="14" rx="4" fill="var(--s1)" opacity=".28"/>`;
    svg += `<circle cx="${x(55.68)}" cy="${y}" r="6.5" fill="var(--s1)" stroke="var(--surface-1)" stroke-width="2"/>`;
    svg += `<text x="${x(49.94)}" y="${y - 12}" text-anchor="middle">49.94</text><text x="${x(61.42)}" y="${y - 12}" text-anchor="middle">61.42</text>`;
    svg += `<rect x="0" y="0" width="${W}" height="40" fill="transparent" data-tip="${esc(t)}"/>`;
    $("#chart-pred").innerHTML = `<svg viewBox="-4 -14 ${W + 8} 72" role="img" aria-label="Predicted f2 55.68 with interval 49.94 to 61.42">${svg}</svg>`;
  }
})();
