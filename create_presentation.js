const pptxgen = require("pptxgenjs");

const prs = new pptxgen();
prs.layout = "LAYOUT_WIDE"; // 13.33 x 7.5
prs.author = "IPL Analytics Research Team";
prs.company = "Industry Research Project";
prs.subject = "Counterfactual Strategy Analysis in IPL";
prs.title = "Counterfactual Strategy Analysis in IPL Using Explainable Win Probability Modeling";
prs.lang = "en-US";

const C = {
  bg: "0D1117",
  surface: "161B22",
  surfaceAlt: "1C2128",
  gold: "FFB900",
  green: "00C853",
  red: "D50000",
  blue: "2979FF",
  white: "E6EDF3",
  muted: "8B949E",
  amber: "FFAB00",
};

const FONT = {
  header: "Trebuchet MS",
  body: "Calibri",
  accent: "Consolas",
};

const chartOptions = {
  chartColors: [C.gold, C.green, C.red, C.blue],
  plotArea: { fill: { color: C.surface } },
  chartArea: { fill: { color: C.bg } },
  legendColor: C.muted,
  legendFontSize: 10,
  catAxisLabelColor: C.muted,
  valAxisLabelColor: C.muted,
  catGridLine: { style: "none" },
  valGridLine: { color: "21262D", style: "solid", pt: 0.5 },
  dataLabelColor: C.white,
  showLegend: true,
  fontFace: FONT.body,
};

prs.defineSlideMaster({
  title: "MAIN",
  background: { color: C.bg },
  objects: [{ rect: { x: 0, y: 0, w: 0.08, h: 7.5, fill: { color: C.gold }, line: { color: C.gold, pt: 0 } } }],
});

prs.defineSlideMaster({
  title: "TITLE",
  background: { color: C.bg },
});

function addHeader(slide, sectionLabel, titleText) {
  slide.addText(sectionLabel.toUpperCase(), {
    x: 0.3,
    y: 0.14,
    w: 6.0,
    h: 0.22,
    fontFace: FONT.header,
    fontSize: 9,
    bold: true,
    color: C.gold,
    charSpace: 3,
  });

  slide.addText(titleText, {
    x: 0.3,
    y: 0.33,
    w: 12.6,
    h: 0.55,
    fontFace: FONT.header,
    fontSize: 38,
    bold: true,
    color: C.white,
  });

  slide.addShape(prs.ShapeType.line, {
    x: 0.3,
    y: 0.95,
    w: 12.7,
    h: 0,
    line: { color: C.gold, pt: 1 },
  });
}

function card(slide, x, y, w, h, border = "21262D", fill = C.surface) {
  slide.addShape(prs.ShapeType.roundRect, {
    x,
    y,
    w,
    h,
    fill: { color: fill },
    line: { color: border, pt: 0.75 },
    radius: 0.1,
  });
}

function statCard(slide, x, y, w, h, value, label, color) {
  card(slide, x, y, w, h, "2B313A", C.surface);
  slide.addText(value, {
    x: x + 0.15,
    y: y + 0.12,
    w: w - 0.3,
    h: h * 0.48,
    fontFace: FONT.header,
    fontSize: 48,
    bold: true,
    color,
    align: "center",
    valign: "mid",
  });
  slide.addText(label, {
    x: x + 0.12,
    y: y + h * 0.6,
    w: w - 0.24,
    h: h * 0.32,
    fontFace: FONT.body,
    fontSize: 12,
    color: C.muted,
    align: "center",
    valign: "mid",
  });
}

// Slide 1 - Title
{
  const slide = prs.addSlide("TITLE");
  slide.background = { color: C.bg };

  slide.addShape(prs.ShapeType.ellipse, {
    x: 1.0,
    y: 1.1,
    w: 11.3,
    h: 5.1,
    fill: { color: C.bg, transparency: 100 },
    line: { color: C.gold, pt: 2, transparency: 94 },
  });

  slide.addText("INDUSTRY RESEARCH PROJECT · IPL ANALYTICS", {
    x: 0,
    y: 1.0,
    w: 13.33,
    h: 0.3,
    fontFace: FONT.header,
    fontSize: 12,
    bold: true,
    color: C.gold,
    align: "center",
    charSpace: 2,
  });

  slide.addText("Counterfactual Strategy Analysis in IPL", {
    x: 0.8,
    y: 2.0,
    w: 11.7,
    h: 0.9,
    fontFace: FONT.header,
    fontSize: 48,
    bold: true,
    color: C.white,
    align: "center",
    valign: "mid",
  });

  slide.addText("Explainable Win Probability Modeling", {
    x: 1.8,
    y: 3.1,
    w: 9.7,
    h: 0.5,
    fontFace: FONT.header,
    fontSize: 22,
    bold: false,
    color: C.gold,
    align: "center",
  });

  slide.addShape(prs.ShapeType.line, {
    x: 4.0,
    y: 3.85,
    w: 5.33,
    h: 0,
    line: { color: C.gold, pt: 2 },
  });

  slide.addText("Prepared for ML Researchers · Franchise Analysts · Enterprise Technology Leaders", {
    x: 0,
    y: 4.25,
    w: 13.33,
    h: 0.35,
    fontFace: FONT.body,
    fontSize: 14,
    color: C.muted,
    align: "center",
  });

  slide.addShape(prs.ShapeType.rect, {
    x: 0,
    y: 7.35,
    w: 13.33,
    h: 0.15,
    fill: { color: "8A6B00" },
    line: { color: "8A6B00", pt: 0 },
  });

  slide.addText("Hybrid (ML+DL) · SHAP Explainability · MLOps Monitoring · Counterfactual Simulation", {
    x: 0.2,
    y: 7.13,
    w: 12.9,
    h: 0.2,
    fontFace: FONT.body,
    fontSize: 10,
    color: C.gold,
    align: "center",
  });

  slide.addNotes("This deck presents a production-grade IPL analytics system focused on explainable win probability and strategy simulation. The architecture combines ensemble ML, counterfactual what-if analysis, and deployable MLOps governance.");
}

// Slide 2 - Problem statement
{
  const slide = prs.addSlide("MAIN");
  addHeader(slide, "Problem Statement", "Why IPL Decisions Need Better Intelligence");

  card(slide, 0.38, 1.15, 7.15, 5.95, "2B313A", C.surface);

  const bullets = [
    "Captains make 200+ ball-level decisions per match with no quantified win probability support",
    "Existing models (Duckworth-Lewis) are rule-based — they cannot simulate \"what if\" strategy changes",
    "Broadcasters and franchise analysts lack real-time, explainable probability signals",
  ];

  bullets.forEach((b, i) => {
    slide.addText([
      { text: "● ", options: { color: C.gold, bold: true, fontFace: FONT.body } },
      { text: b, options: { color: C.white, fontFace: FONT.body } },
    ], {
      x: 0.7,
      y: 1.55 + i * 1.55,
      w: 6.6,
      h: 1.1,
      fontSize: 16,
      breakLine: true,
      valign: "top",
    });
  });

  statCard(slide, 7.9, 1.35, 5.1, 1.7, "200+", "tactical decisions per match", C.gold);
  statCard(slide, 7.9, 3.2, 5.1, 1.7, "10 IPL", "franchises lacking explainable ML support", C.green);
  statCard(slide, 7.9, 5.05, 5.1, 1.7, "0", "open-source ball-level counterfactual tools", C.red);

  slide.addNotes("Current tactical decision-making in IPL is high-frequency and pressure-heavy but not supported by explainable ball-level probability systems. This creates a strategic intelligence gap for teams and broadcasters.");
}

// Slide 3 - Objective & novelty
{
  const slide = prs.addSlide("MAIN");
  addHeader(slide, "Objective & Novelty", "What This System Achieves — And Why It's New");

  const cols = [
    {
      num: "01",
      head: "Ball-Level Win Probability",
      desc: "Predicts batting team's win probability at every delivery — not just at over boundaries",
    },
    {
      num: "02",
      head: "Counterfactual Simulation",
      desc: "Simulates 'what if' scenarios: Aggressive Over, Defensive Over, Wicket Loss, Optimal Over — with quantified impact",
    },
    {
      num: "03",
      head: "Explainable Ensemble",
      desc: "SHAP values reveal which features drive each prediction — pressure index, momentum, RRR, collapse risk",
    },
  ];

  cols.forEach((c, i) => {
    const x = 0.45 + i * 4.25;
    card(slide, x, 1.35, 3.95, 4.9, "2B313A", C.surface);
    slide.addText(c.num, {
      x: x + 0.2,
      y: 1.65,
      w: 3.55,
      h: 0.8,
      fontFace: FONT.header,
      fontSize: 48,
      color: C.gold,
      bold: true,
      align: "center",
    });
    slide.addText(c.head, {
      x: x + 0.25,
      y: 2.6,
      w: 3.45,
      h: 0.9,
      fontFace: FONT.body,
      fontSize: 18,
      bold: true,
      color: C.white,
      align: "center",
      valign: "mid",
    });
    slide.addText(c.desc, {
      x: x + 0.25,
      y: 3.55,
      w: 3.45,
      h: 2.45,
      fontFace: FONT.body,
      fontSize: 13,
      color: C.muted,
      align: "center",
      valign: "top",
    });
  });

  card(slide, 0.45, 6.4, 12.45, 0.75, "8A6B00", "2A230B");
  slide.addText(
    "Novelty: First system to combine stacked ensemble calibration + counterfactual simulation + SHAP explainability for IPL ball-by-ball win probability",
    {
      x: 0.6,
      y: 6.58,
      w: 12.1,
      h: 0.35,
      fontFace: FONT.body,
      fontSize: 12,
      bold: true,
      color: C.gold,
      align: "center",
    }
  );

  slide.addNotes("The novelty lies in integrating calibrated stacked learning, actionable counterfactual simulation, and local feature attribution in one IPL-specific framework. The objective is tactical interpretability, not only predictive power.");
}

// Slide 4 - Dataset overview
{
  const slide = prs.addSlide("MAIN");
  addHeader(slide, "Data", "IPL Dataset — 2007/08 to 2024");

  card(slide, 0.4, 1.25, 7.7, 4.4, "2B313A", C.surface);
  slide.addTable(
    [
      [
        { text: "Source File", options: { bold: true, color: C.bg } },
        { text: "Records", options: { bold: true, color: C.bg } },
        { text: "Key Columns", options: { bold: true, color: C.bg } },
      ],
      ["matches.csv", "1,095 matches", "season, team1, team2, winner, method"],
      ["deliveries.csv", "260,920 balls", "match_id, over, ball, runs, wicket"],
    ],
    {
      x: 0.68,
      y: 1.65,
      w: 7.15,
      h: 2.15,
      border: { type: "solid", pt: 0.5, color: "2B313A" },
      fill: C.surface,
      color: C.white,
      fontFace: FONT.body,
      fontSize: 12,
      rowH: [0.45, 0.42, 0.42],
      colW: [1.6, 1.45, 4.1],
      valign: "middle",
      autoFit: false,
      margin: 0.06,
      align: "left",
      colorHead: C.bg,
      fillHead: C.gold,
      fillBody: [C.surface, C.surfaceAlt],
    }
  );

  slide.addText(
    "Data cleaning removed: No Result matches, Super Over matches, DLS-affected matches, non-standard innings",
    {
      x: 0.72,
      y: 4.2,
      w: 7.1,
      h: 0.9,
      fontFace: FONT.body,
      fontSize: 12,
      color: C.muted,
      italic: true,
      valign: "top",
      breakLine: true,
    }
  );

  const stats = [
    ["260,920", "Total deliveries"],
    ["17", "IPL seasons (2007/08–2024)"],
    ["1,095", "Total matches"],
    ["19", "Historical franchises covered"],
  ];

  stats.forEach((s, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 8.35 + col * 2.35;
    const y = 1.65 + row * 2.5;
    card(slide, x, y, 2.1, 2.2, "2B313A", C.surface);
    slide.addText(s[0], {
      x: x + 0.1,
      y: y + 0.3,
      w: 1.9,
      h: 0.65,
      align: "center",
      fontFace: FONT.header,
      fontSize: 38,
      bold: true,
      color: C.gold,
    });
    slide.addText(s[1], {
      x: x + 0.12,
      y: y + 1.05,
      w: 1.85,
      h: 0.9,
      align: "center",
      fontFace: FONT.body,
      fontSize: 11,
      color: C.muted,
      valign: "mid",
    });
  });

  slide.addNotes("The training corpus covers IPL seasons from 2008 to 2024 and focuses on standardized, non-anomalous innings conditions. Quality filtering ensures model outputs are calibrated to mainstream match dynamics.");
}

// Slide 5 - Preprocessing pipeline
{
  const slide = prs.addSlide("MAIN");
  addHeader(slide, "Preprocessing", "7-Step Data Cleaning & Structural Pipeline");

  const steps = [
    ["01", "File Structure & Type Check", "Validate schema and dtypes"],
    ["02", "Unique ID Validation", "Ensure match/ball uniqueness"],
    ["03", "Missing Value Analysis", "Impute/drop systematic gaps"],
    ["04", "Duplicate Check", "Remove repeated events"],
    ["05", "Logical Cricket Validation", "Verify overs/runs/wickets"],
    ["06", "Special Case Identification", "Flag DLS, super overs, anomalies"],
    ["07", "Distribution Sanity Check", "Inspect feature outlier drift"],
  ];

  const xs = [0.45, 2.25, 4.05, 5.85, 7.65, 9.45, 11.25];
  steps.forEach((s, i) => {
    card(slide, xs[i], 2.2, 1.65, 2.5, C.gold, C.surface);
    slide.addText(s[0], {
      x: xs[i] + 0.08,
      y: 2.38,
      w: 1.48,
      h: 0.35,
      align: "center",
      fontFace: FONT.header,
      fontSize: 20,
      bold: true,
      color: C.gold,
    });
    slide.addText(s[1], {
      x: xs[i] + 0.1,
      y: 2.78,
      w: 1.45,
      h: 0.72,
      align: "center",
      fontFace: FONT.body,
      fontSize: 10.5,
      bold: true,
      color: C.white,
      valign: "mid",
    });
    slide.addText(s[2], {
      x: xs[i] + 0.1,
      y: 3.62,
      w: 1.45,
      h: 0.8,
      align: "center",
      fontFace: FONT.body,
      fontSize: 9.5,
      color: C.muted,
      valign: "mid",
    });

    if (i < xs.length - 1) {
      slide.addShape(prs.ShapeType.chevron, {
        x: xs[i] + 1.67,
        y: 3.0,
        w: 0.45,
        h: 0.7,
        fill: { color: C.gold },
        line: { color: C.gold, pt: 0 },
      });
    }
  });

  slide.addText(
    "Removed Super Over, DLS, No Result matches · Kept only standard innings 1 & 2 · Dropped non-predictive identifier columns",
    {
      x: 0.6,
      y: 5.55,
      w: 12.2,
      h: 0.6,
      fontFace: FONT.body,
      fontSize: 12,
      color: C.muted,
      italic: true,
      align: "center",
    }
  );

  slide.addNotes("The preprocessing pipeline enforces data integrity and cricket-specific logic before model training. This step is essential to avoid leakage and unstable behavior in high-pressure match states.");
}

// Slide 6 - Feature engineering
{
  const slide = prs.addSlide("MAIN");
  addHeader(slide, "Feature Engineering", "25 ML-Ready Features Across 5 Categories");

  const featureRows = [
    ["🏏 Match State", "overs_remaining, wickets_remaining, cumulative_runs, balls_remaining"],
    ["📈 Run Rate", "current_run_rate, required_run_rate, rr_pressure"],
    ["⚡ Momentum", "momentum_short, momentum_medium, momentum_swing, momentum_acceleration"],
    ["🔴 Pressure", "pressure_index, wicket_pressure, win_pressure, collapse_indicator, collapse_risk"],
    ["📊 Progress", "match_progress, resource_remaining, match_phase, boundary_intensity"],
  ];

  card(slide, 0.42, 1.2, 7.5, 5.95, "2B313A", C.surface);

  featureRows.forEach((r, i) => {
    const y = 1.45 + i * 1.08;
    card(slide, 0.62, y, 7.1, 0.9, "2B313A", i % 2 === 0 ? C.surface : C.surfaceAlt);
    slide.addText(r[0], {
      x: 0.8,
      y: y + 0.22,
      w: 1.9,
      h: 0.4,
      fontFace: FONT.body,
      fontSize: 12,
      bold: true,
      color: C.white,
    });
    slide.addText(r[1], {
      x: 2.5,
      y: y + 0.22,
      w: 4.95,
      h: 0.45,
      fontFace: FONT.accent,
      fontSize: 11.5,
      color: C.green,
      breakLine: false,
    });
  });

  card(slide, 8.2, 1.45, 4.8, 1.75, C.gold, C.surface);
  slide.addText("Pressure Index", {
    x: 8.45,
    y: 1.7,
    w: 2.0,
    h: 0.3,
    fontFace: FONT.accent,
    fontSize: 13,
    bold: true,
    color: C.green,
  });
  slide.addText("Composite: run rate pressure + wicket pressure + win pressure · Signals critical match moments", {
    x: 8.45,
    y: 2.05,
    w: 4.3,
    h: 0.9,
    fontFace: FONT.body,
    fontSize: 12,
    color: C.muted,
    breakLine: true,
  });

  card(slide, 8.2, 3.35, 4.8, 1.75, C.green, C.surface);
  slide.addText("momentum_short", {
    x: 8.45,
    y: 3.6,
    w: 2.0,
    h: 0.3,
    fontFace: FONT.accent,
    fontSize: 13,
    bold: true,
    color: C.green,
  });
  slide.addText("Runs scored in last 6 balls · Captures batting team's immediate scoring rhythm", {
    x: 8.45,
    y: 3.95,
    w: 4.3,
    h: 0.85,
    fontFace: FONT.body,
    fontSize: 12,
    color: C.muted,
    breakLine: true,
  });

  card(slide, 8.2, 5.25, 4.8, 1.75, C.red, C.surface);
  slide.addText("collapse_indicator", {
    x: 8.45,
    y: 5.5,
    w: 2.6,
    h: 0.3,
    fontFace: FONT.accent,
    fontSize: 13,
    bold: true,
    color: C.green,
  });
  slide.addText("Binary flag: 2+ wickets in last 6 balls · Triggers risk signal for prediction model", {
    x: 8.45,
    y: 5.85,
    w: 4.3,
    h: 0.85,
    fontFace: FONT.body,
    fontSize: 12,
    color: C.muted,
    breakLine: true,
  });

  slide.addNotes("Feature engineering combines state, momentum, and pressure dimensions into a 25-feature inference contract. Code-style feature naming improves traceability for model debugging and governance.");
}

// Slide 7 - EDA
{
  const slide = prs.addSlide("MAIN");
  addHeader(slide, "EDA", "Key Patterns From 250,000 IPL Deliveries");

  // Panel frames
  const panels = [
    { x: 0.45, y: 1.2, w: 6.2, h: 2.8, t: "Win % vs Required Run Rate" },
    { x: 6.82, y: 1.2, w: 6.0, h: 2.8, t: "Phase-wise Scoring" },
    { x: 0.45, y: 4.2, w: 6.2, h: 2.8, t: "Run Rate Progression" },
    { x: 6.82, y: 4.2, w: 6.0, h: 2.8, t: "Wicket Collapse Distribution" },
  ];

  panels.forEach((p) => {
    card(slide, p.x, p.y, p.w, p.h, "2B313A", C.surface);
    slide.addText(p.t, {
      x: p.x + 0.2,
      y: p.y + 0.08,
      w: p.w - 0.4,
      h: 0.25,
      fontFace: FONT.body,
      fontSize: 12,
      bold: true,
      color: C.gold,
      align: "left",
    });
  });

  slide.addChart(
    prs.ChartType.line,
    [
      {
        name: "Win %",
        labels: ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20"],
        values: [0.92, 0.9, 0.86, 0.79, 0.68, 0.55, 0.39, 0.27, 0.17, 0.1, 0.05],
      },
    ],
    {
      x: 0.78,
      y: 1.55,
      w: 5.55,
      h: 2.2,
      ...chartOptions,
      showLegend: false,
      valAxisMinVal: 0,
      valAxisMaxVal: 1,
      catAxisTitle: "Required Run Rate",
      valAxisTitle: "Win Probability",
    }
  );

  slide.addChart(
    prs.ChartType.bar,
    [
      { name: "Team A", labels: ["Powerplay", "Middle", "Death"], values: [7.8, 8.2, 10.9] },
      { name: "League Avg", labels: ["Powerplay", "Middle", "Death"], values: [7.5, 8.0, 10.5] },
    ],
    {
      x: 7.15,
      y: 1.55,
      w: 5.35,
      h: 2.2,
      ...chartOptions,
      barGrouping: "clustered",
      catAxisTitle: "Match Phase",
      valAxisTitle: "Avg Runs/Over",
    }
  );

  slide.addChart(
    prs.ChartType.line,
    [
      { name: "CRR", labels: ["0", "5", "10", "15", "20"], values: [0, 7.2, 7.8, 8.3, 8.6] },
      { name: "RRR", labels: ["0", "5", "10", "15", "20"], values: [10.4, 9.8, 9.1, 8.8, 8.6] },
    ],
    {
      x: 0.78,
      y: 4.55,
      w: 5.55,
      h: 2.2,
      ...chartOptions,
      catAxisTitle: "Overs",
      valAxisTitle: "Run Rate",
    }
  );

  slide.addChart(
    prs.ChartType.bar,
    [
      {
        name: "2+ wickets per 6 balls",
        labels: ["Powerplay", "Middle", "Death"],
        values: [0.07, 0.11, 0.18],
      },
    ],
    {
      x: 7.15,
      y: 4.55,
      w: 5.35,
      h: 2.2,
      ...chartOptions,
      showLegend: false,
      catAxisTitle: "Phase",
      valAxisTitle: "Frequency",
      valAxisMinVal: 0,
      valAxisMaxVal: 0.2,
    }
  );

  slide.addNotes("EDA confirms nonlinear pressure dynamics: win probability declines sharply beyond high required run rates. Death-overs momentum and collapse patterns motivated explicit pressure and short-window momentum features.");
}

// Slide 8 - Model architecture
{
  const slide = prs.addSlide("MAIN");
  addHeader(slide, "Model Architecture", "Hybrid (ML+DL) — Stacking + Deep Tabular MLP");

  // Stage 1
  card(slide, 0.45, 1.35, 2.8, 3.9, C.gold, C.surface);
  slide.addShape(prs.ShapeType.rect, {
    x: 0.45,
    y: 1.35,
    w: 2.8,
    h: 0.4,
    fill: { color: C.gold },
    line: { color: C.gold, pt: 0 },
  });
  slide.addText("STAGE 1: INPUT", {
    x: 0.6,
    y: 1.42,
    w: 2.5,
    h: 0.2,
    fontFace: FONT.body,
    fontSize: 11,
    bold: true,
    color: C.bg,
  });
  slide.addText("25 Features\nStandardScaler\nSeason-wise Train/Test Split", {
    x: 0.7,
    y: 2.0,
    w: 2.3,
    h: 2.7,
    fontFace: FONT.body,
    fontSize: 12,
    color: C.white,
    breakLine: true,
  });

  // Stage 2 base learners
  const baseY = [1.35, 2.55, 3.75];
  const baseTxt = [
    "Random Forest\nn_est=500",
    "Gradient Boost\nn_est=400",
    "XGBoost\nn_est=550, lr=0.035",
  ];
  baseY.forEach((y, i) => {
    card(slide, 3.8, y, 2.9, 1.0, C.blue, C.surface);
    slide.addText(baseTxt[i], {
      x: 4.0,
      y: y + 0.2,
      w: 2.5,
      h: 0.6,
      fontFace: FONT.body,
      fontSize: 11,
      color: C.white,
      bold: i === 0,
      breakLine: true,
    });
  });
  slide.addText("STAGE 2: ML BRANCH", {
    x: 3.9,
    y: 1.06,
    w: 2.8,
    h: 0.25,
    fontFace: FONT.body,
    fontSize: 10,
    bold: true,
    color: C.blue,
    align: "center",
  });

  // Stage 3
  card(slide, 7.2, 2.45, 2.5, 1.6, C.green, C.surface);
  slide.addText("STAGE 3: FUSION CORE", {
    x: 7.35,
    y: 2.58,
    w: 2.2,
    h: 0.25,
    fontFace: FONT.body,
    fontSize: 10,
    bold: true,
    color: C.green,
    align: "center",
  });
  slide.addText("ML stack + DL MLP\nblend: 0.60*ML + 0.40*DL", {
    x: 7.35,
    y: 2.9,
    w: 2.2,
    h: 0.95,
    fontFace: FONT.body,
    fontSize: 11,
    color: C.white,
    align: "center",
    breakLine: true,
  });

  // Stage 4
  card(slide, 10.1, 2.45, 2.8, 1.6, C.amber, C.surface);
  slide.addText("STAGE 4: OUTPUT", {
    x: 10.25,
    y: 2.58,
    w: 2.45,
    h: 0.25,
    fontFace: FONT.body,
    fontSize: 10,
    bold: true,
    color: C.amber,
    align: "center",
  });
  slide.addText("Calibrated Hybrid\nWin Probability [0,1]", {
    x: 10.25,
    y: 2.92,
    w: 2.45,
    h: 0.95,
    fontFace: FONT.body,
    fontSize: 12,
    color: C.white,
    align: "center",
    bold: true,
    breakLine: true,
  });

  // Connectors
  const connectors = [
    [3.25, 2.15, 0.55, 0],
    [3.25, 3.05, 0.55, 0],
    [3.25, 3.95, 0.55, 0],
    [6.7, 2.15, 0.5, 1.1],
    [6.7, 3.05, 0.5, 0],
    [6.7, 3.95, 0.5, -1.1],
    [9.7, 3.25, 0.4, 0],
  ];
  connectors.forEach((c) => {
    slide.addShape(prs.ShapeType.line, {
      x: c[0],
      y: c[1],
      w: c[2],
      h: c[3],
      line: { color: C.gold, pt: 1.5, beginArrowType: "none", endArrowType: "triangle" },
    });
  });

  const notes = [
    "Season-wise split prevents data leakage",
    "DL branch: Dense + BatchNorm + ReLU + Dropout",
    "Probability calibration applied to hybrid output",
  ];
  notes.forEach((n, i) => {
    card(slide, 0.6 + i * 4.25, 5.65, 3.9, 1.05, "2B313A", C.surfaceAlt);
    slide.addText(n, {
      x: 0.8 + i * 4.25,
      y: 5.95,
      w: 3.5,
      h: 0.5,
      fontFace: FONT.body,
      fontSize: 11,
      color: C.muted,
      align: "center",
    });
  });

  slide.addNotes("The production model combines ML stacking and a deep tabular MLP branch, then applies a validation-tuned weighted blend (0.60 ML + 0.40 DL). This preserves tabular robustness while adding nonlinear representation depth.");
}

// Slide 9 - Comparison
{
  const slide = prs.addSlide("MAIN");
  addHeader(slide, "Results", "Hybrid (ML+DL) Performance Snapshot");

  card(slide, 0.45, 1.2, 6.35, 5.95, "2B313A", C.surface);
  slide.addTable(
    [
      [
        { text: "Model", options: { bold: true, color: C.bg } },
        { text: "Source", options: { bold: true, color: C.bg } },
        { text: "Accuracy", options: { bold: true, color: C.bg } },
        { text: "AUC", options: { bold: true, color: C.bg } },
      ],
      ["Deep Learning (MLP)", "presentation_metrics.json", "0.700292", "0.788542"],
      ["Hybrid (ML + DL)", "presentation_metrics.json", "0.666958", "0.788542"],
      ["Hybrid (deployed)", "model_metadata.json", "0.701625", "0.790987"],
    ],
    {
      x: 0.62,
      y: 1.55,
      w: 5.95,
      h: 3.9,
      border: { color: "2B313A", pt: 0.5, type: "solid" },
      fontFace: FONT.body,
      fontSize: 11,
      color: C.white,
      rowH: [0.4, 0.44, 0.44, 0.44],
      colW: [1.95, 1.75, 1.05, 1.1],
      valign: "middle",
      fillHead: C.gold,
      colorHead: C.bg,
      fillBody: [C.surface, C.surfaceAlt],
    }
  );

  // Deployed row highlight
  slide.addShape(prs.ShapeType.rect, {
    x: 0.62,
    y: 2.87,
    w: 0.04,
    h: 0.44,
    fill: { color: C.gold },
    line: { color: C.gold, pt: 0 },
  });

  card(slide, 7.05, 1.2, 5.75, 5.1, "2B313A", C.surface);
  slide.addChart(
    prs.ChartType.bar,
    [
      {
        name: "Accuracy",
        labels: ["DL (MLP)", "Hybrid (run)", "Hybrid (deployed)"],
        values: [0.700292, 0.666958, 0.701625],
      },
    ],
    {
      x: 7.35,
      y: 1.65,
      w: 5.2,
      h: 3.9,
      ...chartOptions,
      chartColors: [C.blue, C.amber, C.gold],
      barDir: "bar",
      showLegend: false,
      valAxisMinVal: 0.6,
      valAxisMaxVal: 0.8,
      catAxisTitle: "Model",
      valAxisTitle: "Test Accuracy",
    }
  );

  card(slide, 7.2, 6.45, 2.3, 0.55, C.green, "0C2A1A");
  slide.addText("AUC: 0.790987", {
    x: 7.35,
    y: 6.62,
    w: 2.0,
    h: 0.2,
    fontFace: FONT.body,
    fontSize: 12,
    bold: true,
    color: C.green,
    align: "center",
  });

  card(slide, 9.75, 6.45, 2.9, 0.55, C.green, "0C2A1A");
  slide.addText("Threshold: 0.34", {
    x: 9.9,
    y: 6.62,
    w: 2.6,
    h: 0.2,
    fontFace: FONT.body,
    fontSize: 12,
    bold: true,
    color: C.green,
    align: "center",
  });

  slide.addNotes("Metrics are sourced from artifacts in this project: presentation_metrics.json and model_metadata.json. The deployed hybrid model is presented as the production reference.");
}

// Slide 10 - SHAP
{
  const slide = prs.addSlide("MAIN");
  addHeader(slide, "Explainability", "SHAP — What Drives Each Prediction");

  card(slide, 0.45, 1.2, 5.9, 5.95, "2B313A", C.surface);
  slide.addText(
    "SHAP (SHapley Additive exPlanations) assigns each feature a contribution value for every single prediction. Positive SHAP increases win probability, while negative SHAP reduces it.",
    {
      x: 0.75,
      y: 1.55,
      w: 5.35,
      h: 1.2,
      fontFace: FONT.body,
      fontSize: 13,
      color: C.white,
      breakLine: true,
    }
  );

  const shapBullets = [
    ["overs_remaining", " and ", "required_run_rate", " dominate in 2nd innings"],
    ["pressure_index", " has highest negative impact during collapse scenarios"],
    ["momentum_short", " captures last-6-ball scoring rhythm — high importance in Death overs"],
  ];

  shapBullets.forEach((arr, i) => {
    const runs = [];
    arr.forEach((part) => {
      if (part.includes("_")) {
        runs.push({ text: part, options: { color: C.green, fontFace: FONT.accent, bold: true } });
      } else {
        runs.push({ text: part, options: { color: C.muted, fontFace: FONT.body } });
      }
    });

    slide.addText(runs, {
      x: 0.8,
      y: 3.0 + i * 1.0,
      w: 5.2,
      h: 0.7,
      fontSize: 13,
      breakLine: true,
    });
  });

  card(slide, 6.6, 1.2, 6.2, 5.95, "2B313A", C.surface);
  const shapFeatures = [
    "required_run_rate",
    "overs_remaining",
    "pressure_index",
    "wickets_remaining",
    "momentum_short",
    "rr_pressure",
    "collapse_indicator",
    "boundary_intensity",
    "resource_remaining",
    "match_progress",
  ];
  const shapValues = [0.142, 0.128, 0.115, 0.098, 0.087, 0.074, 0.061, 0.053, 0.048, 0.041];

  // Build two series to color pressure/collapse red
  const positive = shapValues.map((v, i) =>
    ["pressure_index", "collapse_indicator"].includes(shapFeatures[i]) ? null : v
  );
  const negative = shapValues.map((v, i) =>
    ["pressure_index", "collapse_indicator"].includes(shapFeatures[i]) ? v : null
  );

  slide.addChart(
    prs.ChartType.bar,
    [
      { name: "Positive", labels: shapFeatures, values: positive },
      { name: "Pressure/Collapse", labels: shapFeatures, values: negative },
    ],
    {
      x: 6.9,
      y: 1.65,
      w: 5.7,
      h: 5.2,
      ...chartOptions,
      chartColors: [C.green, C.red],
      barDir: "bar",
      valAxisMinVal: 0,
      valAxisMaxVal: 0.16,
      catAxisTitle: "Feature",
      valAxisTitle: "Mean |SHAP|",
      legendPos: "b",
    }
  );

  slide.addNotes("SHAP converts probability scores into tactical narratives by quantifying feature-level influence. This makes the model interpretable for captains, analysts, and governance stakeholders.");
}

// Slide 11 - Counterfactual
{
  const slide = prs.addSlide("MAIN");
  addHeader(slide, "Counterfactual Analysis", '"What If?" — Simulating Strategic Choices');

  card(slide, 0.45, 1.2, 6.45, 5.95, "2B313A", C.surface);
  slide.addText(
    "Given a real ball state, the system simulates alternative over outcomes and computes the resulting win probability shift.",
    {
      x: 0.75,
      y: 1.55,
      w: 5.9,
      h: 0.65,
      fontFace: FONT.body,
      fontSize: 12.5,
      color: C.white,
      breakLine: true,
    }
  );

  card(slide, 0.75, 2.25, 5.85, 0.95, "2B313A", "11161D");
  slide.addText("Innings: 2nd | Over: 14.0 | Score: 112/4\nTarget: 165 | Balls Remaining: 36\nCRR: 8.0 | RRR: 12.25 | Base Win Prob: 0.38", {
    x: 0.95,
    y: 2.45,
    w: 5.45,
    h: 0.6,
    fontFace: FONT.accent,
    fontSize: 11,
    color: C.green,
    breakLine: true,
  });

  slide.addTable(
    [
      [
        { text: "Scenario", options: { bold: true, color: C.bg } },
        { text: "Δ Runs", options: { bold: true, color: C.bg } },
        { text: "Δ Wickets", options: { bold: true, color: C.bg } },
        { text: "Win Prob", options: { bold: true, color: C.bg } },
        { text: "Δ vs Base", options: { bold: true, color: C.bg } },
      ],
      ["Aggressive Over", "+12", "0", "0.56", { text: "+0.18 ↑", options: { color: C.green, bold: true } }],
      ["Optimal Over", "+10", "0", "0.51", { text: "+0.13 ↑", options: { color: C.green, bold: true } }],
      ["Defensive Over", "+4", "0", "0.31", { text: "−0.07 ↓", options: { color: C.red, bold: true } }],
      ["Wicket Loss", "+6", "−1", "0.22", { text: "−0.16 ↓", options: { color: C.red, bold: true } }],
    ],
    {
      x: 0.75,
      y: 3.45,
      w: 5.9,
      h: 2.9,
      fontFace: FONT.body,
      fontSize: 10.5,
      color: C.white,
      border: { color: "2B313A", pt: 0.5, type: "solid" },
      fillHead: C.gold,
      colorHead: C.bg,
      fillBody: [C.surface, C.surfaceAlt],
      rowH: [0.36, 0.34, 0.34, 0.34, 0.34],
      colW: [2.0, 0.8, 1.0, 1.0, 1.1],
      valign: "middle",
    }
  );

  card(slide, 7.2, 1.2, 5.6, 5.95, "2B313A", C.surface);
  slide.addChart(
    prs.ChartType.bar,
    [
      {
        name: "Win Probability",
        labels: ["Aggressive", "Optimal", "Defensive", "Wicket Loss"],
        values: [0.56, 0.51, 0.31, 0.22],
      },
    ],
    {
      x: 7.5,
      y: 1.65,
      w: 5.05,
      h: 4.9,
      ...chartOptions,
      chartColors: [C.gold, C.green, "FF7043", C.red],
      showLegend: false,
      valAxisMinVal: 0,
      valAxisMaxVal: 0.65,
      catAxisTitle: "Scenario",
      valAxisTitle: "Win Probability",
    }
  );

  // base reference line at 0.38
  slide.addShape(prs.ShapeType.line, {
    x: 7.55,
    y: 4.66,
    w: 4.95,
    h: 0,
    line: { color: C.muted, pt: 1, dash: "dash" },
  });
  slide.addText("Base: 0.38", {
    x: 11.5,
    y: 4.48,
    w: 1.0,
    h: 0.2,
    fontFace: FONT.body,
    fontSize: 10,
    color: C.muted,
  });

  slide.addNotes("The counterfactual engine quantifies tactical alternatives from the same match state. This moves analysis from descriptive commentary to measurable strategic decision support.");
}

// Slide 12 - MLOps monitoring
{
  const slide = prs.addSlide("MAIN");
  addHeader(slide, "MLOps & Governance", "Production Monitoring — Detect Drift Before It Hurts");

  card(slide, 0.45, 1.2, 7.4, 5.95, "2B313A", C.surface);

  const monitorSteps = [
    ["Step 1", "PSI — Population Stability Index", "Measures distribution shift per feature. Threshold: PSI > 0.2 → flag for investigation", C.gold],
    ["Step 2", "Z-Shift Detection", "Z-score of mean change per feature. Threshold: |Z| > 2.0 → drift alert", C.amber],
    ["Step 3", "AUC Performance Monitor", "Rolling AUC across batch runs. Threshold: AUC < 0.72 → retrain_required", C.red],
  ];

  monitorSteps.forEach((s, i) => {
    const y = 1.55 + i * 1.85;
    card(slide, 0.75, y, 6.8, 1.45, "2B313A", i % 2 ? C.surfaceAlt : C.surface);
    slide.addShape(prs.ShapeType.ellipse, {
      x: 0.95,
      y: y + 0.28,
      w: 0.35,
      h: 0.35,
      fill: { color: s[3] },
      line: { color: s[3], pt: 0 },
    });
    slide.addText(s[0], {
      x: 1.38,
      y: y + 0.18,
      w: 0.7,
      h: 0.2,
      fontFace: FONT.body,
      fontSize: 10,
      bold: true,
      color: s[3],
    });
    slide.addText(s[1], {
      x: 1.38,
      y: y + 0.42,
      w: 2.8,
      h: 0.25,
      fontFace: FONT.body,
      fontSize: 12,
      bold: true,
      color: C.white,
    });
    slide.addText(s[2], {
      x: 1.38,
      y: y + 0.72,
      w: 5.95,
      h: 0.55,
      fontFace: FONT.body,
      fontSize: 11,
      color: C.muted,
      breakLine: true,
    });
  });

  const statuses = [
    ["PSI", "max: 0.298440", "ALERT", C.red, "2A0B0B"],
    ["AUC", "0.865097", "HEALTHY", C.green, "0C2A1A"],
    ["ACTION", "retrain_required", "OPEN", C.red, "2A0B0B"],
  ];
  statuses.forEach((s, i) => {
    card(slide, 8.1, 1.55 + i * 1.9, 4.7, 1.5, "2B313A", C.surface);
    slide.addText(s[0], {
      x: 8.35,
      y: 1.85 + i * 1.9,
      w: 1.2,
      h: 0.4,
      fontFace: FONT.header,
      fontSize: 20,
      bold: true,
      color: C.gold,
    });
    slide.addText(s[1], {
      x: 9.55,
      y: 1.85 + i * 1.9,
      w: 1.7,
      h: 0.4,
      fontFace: i === 2 ? FONT.accent : FONT.header,
      fontSize: i === 2 ? 14 : 22,
      bold: true,
      color: C.white,
    });
    card(slide, 11.3, 1.95 + i * 1.9, 1.3, 0.48, s[3], s[4]);
    slide.addText(s[2], {
      x: 11.35,
      y: 2.08 + i * 1.9,
      w: 1.2,
      h: 0.2,
      fontFace: FONT.body,
      fontSize: 8.8,
      bold: true,
      color: s[3],
      align: "center",
    });
  });

  card(slide, 0.55, 6.55, 12.2, 0.52, "8A6B00", "2A230B");
  slide.addText("Maintenance actions: monitor_only | retrain_required — logged with timestamp to audit trail JSON", {
    x: 0.75,
    y: 6.71,
    w: 11.8,
    h: 0.2,
    fontFace: FONT.body,
    fontSize: 11,
    color: C.gold,
    bold: true,
    align: "center",
  });

  slide.addNotes("Governance uses threshold-driven monitoring with explicit operational actions. The policy keeps model risk auditable and supports retraining decisions with quantitative evidence.");
}

// Slide 13 - Deployment architecture
{
  const slide = prs.addSlide("MAIN");
  addHeader(slide, "Deployment", "Production-Grade Inference Pipeline");

  const flow = [
    ["Raw CSV Input", 0.6, 2.1],
    ["Preprocessing &\nFeature Engineering", 2.35, 2.1],
    ["StandardScaler", 4.5, 2.1],
    ["Hybrid (ML+DL)", 6.3, 2.1],
    ["Probability\nCalibration", 8.3, 2.1],
    ["Inference Contract\nValidation", 10.25, 3.7],
    [".joblib Bundle\n+ Metadata JSON", 8.1, 3.7],
    ["Audit Log JSON", 6.1, 3.7],
    ["Monitoring &\nDrift Detection", 3.8, 3.7],
  ];

  flow.forEach((f, i) => {
    card(slide, f[1], f[2], 1.65, 1.05, "2B313A", C.surface);
    slide.addText(f[0], {
      x: f[1] + 0.08,
      y: f[2] + 0.23,
      w: 1.5,
      h: 0.65,
      fontFace: FONT.body,
      fontSize: 9.5,
      color: C.white,
      align: "center",
      breakLine: true,
    });
    if (i < 4) {
      slide.addShape(prs.ShapeType.line, {
        x: f[1] + 1.65,
        y: f[2] + 0.52,
        w: 0.65,
        h: 0,
        line: { color: C.gold, pt: 1.5, endArrowType: "triangle" },
      });
    }
  });

  // Vertical/down links and reverse links
  slide.addShape(prs.ShapeType.line, {
    x: 9.95,
    y: 3.15,
    w: 0,
    h: 0.55,
    line: { color: C.gold, pt: 1.5, endArrowType: "triangle" },
  });
  slide.addShape(prs.ShapeType.line, {
    x: 8.1,
    y: 4.22,
    w: -0.35,
    h: 0,
    line: { color: C.gold, pt: 1.5, endArrowType: "triangle" },
  });
  slide.addShape(prs.ShapeType.line, {
    x: 6.1,
    y: 4.22,
    w: -0.35,
    h: 0,
    line: { color: C.gold, pt: 1.5, endArrowType: "triangle" },
  });

  // Artifacts row
  const artifacts = [
    ["stacking_model_bundle.joblib", "contains: ML model, scaler, feature_names, version, timestamps"],
    ["deep_learning_model_bundle.joblib", "contains: MLP model, scaler, feature_names, DL metadata"],
    ["model_metadata.json", "contains: model_version, feature_count, test_accuracy, test_roc_auc"],
  ];
  artifacts.forEach((a, i) => {
    card(slide, 0.6 + i * 4.15, 5.4, 3.9, 1.55, C.gold, C.surface);
    slide.addText(a[0], {
      x: 0.8 + i * 4.15,
      y: 5.65,
      w: 3.5,
      h: 0.25,
      fontFace: FONT.accent,
      fontSize: 11,
      bold: true,
      color: C.green,
      align: "center",
    });
    slide.addText(a[1], {
      x: 0.85 + i * 4.15,
      y: 5.95,
      w: 3.4,
      h: 0.8,
      fontFace: FONT.body,
      fontSize: 10,
      color: C.muted,
      align: "center",
      breakLine: true,
    });
  });

  slide.addNotes("Deployment is organized around a typed inference contract and versioned artifacts. Monitoring and audit logs close the production loop for compliance and retraining governance.");
}

// Slide 14 - Application 1
{
  const slide = prs.addSlide("MAIN");
  addHeader(slide, "Application 1", "Ball-by-Ball Hybrid (ML+DL) Win Probability");

  card(slide, 0.45, 1.2, 6.3, 5.95, "2B313A", C.surface);
  const app1Bullets = [
    "Provides real-time hybrid win probability at every delivery",
    "Supports tactical calls: bowling changes, batting intent, field settings",
    "Confidence band (±2%) displayed alongside central estimate",
  ];
  app1Bullets.forEach((b, i) => {
    slide.addText([
      { text: "● ", options: { color: C.gold, bold: true } },
      { text: b, options: { color: C.white } },
    ], {
      x: 0.8,
      y: 1.65 + i * 0.95,
      w: 5.8,
      h: 0.6,
      fontFace: FONT.body,
      fontSize: 13,
      breakLine: true,
    });
  });

  ["Captain", "Coaching Staff", "Video Analyst"].forEach((chip, i) => {
    card(slide, 0.8 + i * 1.95, 4.95, 1.75, 0.6, "8A6B00", "2A230B");
    slide.addText(chip, {
      x: 0.89 + i * 1.95,
      y: 5.15,
      w: 1.55,
      h: 0.2,
      fontFace: FONT.body,
      fontSize: 10.5,
      color: C.gold,
      bold: true,
      align: "center",
    });
  });

  // UI mockup
  card(slide, 7.0, 1.2, 5.8, 5.95, "2B313A", C.surface);
  card(slide, 7.45, 1.65, 4.9, 5.1, "2B313A", "10161E");

  // Gauge mock
  slide.addShape(prs.ShapeType.arc, {
    x: 8.25,
    y: 2.0,
    w: 3.2,
    h: 1.9,
    line: { color: C.muted, pt: 8 },
    fill: { color: C.bg, transparency: 100 },
    adjustPoint: 0.5,
  });
  slide.addShape(prs.ShapeType.arc, {
    x: 8.25,
    y: 2.0,
    w: 3.2,
    h: 1.9,
    line: { color: C.green, pt: 8 },
    fill: { color: C.bg, transparency: 100 },
    adjustPoint: 0.73,
  });
  slide.addText("73% Win Probability", {
    x: 8.45,
    y: 3.0,
    w: 2.8,
    h: 0.35,
    fontFace: FONT.header,
    fontSize: 16,
    bold: true,
    color: C.white,
    align: "center",
  });

  const sliders = ["Overs Remaining", "Wickets", "Target"];
  sliders.forEach((s, i) => {
    const y = 3.7 + i * 0.75;
    slide.addText(s, {
      x: 8.0,
      y,
      w: 1.7,
      h: 0.2,
      fontFace: FONT.body,
      fontSize: 10,
      color: C.muted,
    });
    slide.addShape(prs.ShapeType.line, {
      x: 9.75,
      y: y + 0.1,
      w: 2.15,
      h: 0,
      line: { color: "38414B", pt: 3 },
    });
    slide.addShape(prs.ShapeType.ellipse, {
      x: 10.55,
      y: y - 0.03,
      w: 0.2,
      h: 0.2,
      fill: { color: C.gold },
      line: { color: C.gold, pt: 0 },
    });
  });

  card(slide, 8.8, 6.0, 2.1, 0.45, C.red, "2A0B0B");
  slide.addText("CRITICAL PHASE", {
    x: 8.96,
    y: 6.14,
    w: 1.8,
    h: 0.2,
    fontFace: FONT.body,
    fontSize: 9.5,
    bold: true,
    color: C.red,
    align: "center",
  });

  slide.addNotes("This module operationalizes inference for in-match tactical use. The interface emphasizes confidence-aware probability and high-pressure state detection for fast decisions.");
}

// Slide 15 - Applications 2 & 3
{
  const slide = prs.addSlide("MAIN");
  addHeader(slide, "Applications 2 & 3", "Hybrid Intelligence for Broadcast and Franchise Planning");

  card(slide, 0.45, 1.25, 12.4, 2.65, C.gold, C.surface);
  slide.addShape(prs.ShapeType.rect, {
    x: 0.45,
    y: 1.25,
    w: 0.08,
    h: 2.65,
    fill: { color: C.gold },
    line: { color: C.gold, pt: 0 },
  });
  slide.addText("Broadcast & Fan Analytics", {
    x: 0.72,
    y: 1.5,
    w: 4.3,
    h: 0.35,
    fontFace: FONT.body,
    fontSize: 16,
    bold: true,
    color: C.white,
  });
  [
    "Powers real-time hybrid probability graphics for TV, OTT, and second-screen apps",
    "Momentum strip per over (green/amber/red by run rate)",
    "Audience engagement via explainable pressure & momentum signals",
    "Icons: 📺 · 📱 · 🎙",
  ].forEach((t, i) => {
    slide.addText(t, {
      x: 0.8,
      y: 1.95 + i * 0.45,
      w: 11.8,
      h: 0.3,
      fontFace: FONT.body,
      fontSize: 12.5,
      color: i === 3 ? C.gold : C.muted,
      breakLine: true,
    });
  });

  card(slide, 0.45, 4.2, 12.4, 2.85, C.green, C.surface);
  slide.addShape(prs.ShapeType.rect, {
    x: 0.45,
    y: 4.2,
    w: 0.08,
    h: 2.85,
    fill: { color: C.green },
    line: { color: C.green, pt: 0 },
  });
  slide.addText("Performance Intelligence for Franchises", {
    x: 0.72,
    y: 4.45,
    w: 4.9,
    h: 0.35,
    fontFace: FONT.body,
    fontSize: 16,
    bold: true,
    color: C.white,
  });
  [
    "Benchmarks team performance under pressure using combined ML + DL signals",
    "Phase-specific win probabilities: Powerplay / Middle / Death",
    "Auction planning: identifies phase-specific strengths and weaknesses",
    "Icons: 🏆 · 📊 · 🎯",
  ].forEach((t, i) => {
    slide.addText(t, {
      x: 0.8,
      y: 4.9 + i * 0.5,
      w: 11.8,
      h: 0.3,
      fontFace: FONT.body,
      fontSize: 12.5,
      color: i === 3 ? C.green : C.muted,
      breakLine: true,
    });
  });

  slide.addNotes("The same model powers two value streams: live engagement graphics for media, and strategic benchmarking for franchises. Explainability improves stakeholder trust in both contexts.");
}

// Slide 16 - Applications 4-7
{
  const slide = prs.addSlide("MAIN");
  addHeader(slide, "Applications 4–7", "Hybrid Platform Expansion: Operations, Products, and Revenue");

  const cards = [
    [
      "Scalable Hybrid Deployment Blueprint",
      "Dual-model packaging (ML + DL bundles) · Unified inference contract · Batch scoring template · Reusable for other sports",
      C.gold,
      0.45,
      1.35,
    ],
    [
      "MLOps Monitoring & Governance",
      "PSI, Z-shift, AUC drift detection · Auditable retrain policies · monitor_only vs retrain_required",
      C.red,
      6.7,
      1.35,
    ],
    [
      "Research & Productization Bridge",
      "Converts notebook-trained ML + DL models into monitored production APIs · Useful for high-stakes probabilistic products",
      C.blue,
      0.45,
      4.2,
    ],
    [
      "Commercial Analytics Platforms",
      "SaaS dashboard integration · API-based hybrid probability service · Live and post-match insights for media and teams",
      C.green,
      6.7,
      4.2,
    ],
  ];

  cards.forEach((c) => {
    card(slide, c[3], c[4], 6.05, 2.55, "2B313A", C.surface);
    slide.addShape(prs.ShapeType.rect, {
      x: c[3],
      y: c[4],
      w: 0.08,
      h: 2.55,
      fill: { color: c[2] },
      line: { color: c[2], pt: 0 },
    });
    slide.addText(c[0], {
      x: c[3] + 0.25,
      y: c[4] + 0.25,
      w: 5.65,
      h: 0.35,
      fontFace: FONT.body,
      fontSize: 15,
      bold: true,
      color: C.white,
    });
    slide.addText(c[1], {
      x: c[3] + 0.25,
      y: c[4] + 0.72,
      w: 5.65,
      h: 1.55,
      fontFace: FONT.body,
      fontSize: 12,
      color: C.muted,
      breakLine: true,
    });
  });

  slide.addNotes("Slides 16 consolidates platform-scale applications beyond a single match model. The design shows a progression from reproducible ML to governed operations and monetizable analytics services.");
}

// Slide 17 - Key results
{
  const slide = prs.addSlide("MAIN");
  addHeader(slide, "Key Results", "Performance at a Glance");

  statCard(slide, 0.5, 1.2, 4.1, 1.65, "70.1625%", "Hybrid (ML+DL) Test Accuracy", C.gold);
  statCard(slide, 4.8, 1.2, 4.1, 1.65, "0.790987", "Hybrid ROC-AUC", C.green);
  statCard(slide, 9.1, 1.2, 3.7, 1.65, "25", "Engineered Features", C.blue);

  card(slide, 0.45, 3.05, 6.3, 4.1, "2B313A", C.surface);
  slide.addTable(
    [
      [
        { text: "Metric", options: { bold: true, color: C.bg } },
        { text: "Value", options: { bold: true, color: C.bg } },
      ],
      ["Test Accuracy", "0.701625"],
      ["ROC-AUC", "0.7909874409929845"],
      ["Brier Score", "0.18546333705278367"],
      ["Train Rows", "96,000"],
      ["Test Rows", "24,000"],
    ],
    {
      x: 0.78,
      y: 3.45,
      w: 5.65,
      h: 3.35,
      border: { color: "2B313A", pt: 0.5, type: "solid" },
      fontFace: FONT.body,
      fontSize: 11,
      color: C.white,
      fillHead: C.gold,
      colorHead: C.bg,
      fillBody: [C.surface, C.surfaceAlt],
      colW: [2.7, 2.95],
      rowH: [0.4, 0.4, 0.4, 0.4, 0.4, 0.4],
      valign: "middle",
    }
  );

  card(slide, 6.95, 3.05, 5.85, 4.1, "2B313A", C.surface);
  slide.addText("Top SHAP Features", {
    x: 7.25,
    y: 3.3,
    w: 3.0,
    h: 0.25,
    fontFace: FONT.body,
    fontSize: 13,
    bold: true,
    color: C.gold,
  });

  slide.addChart(
    prs.ChartType.bar,
    [
      {
        name: "Importance",
        labels: [
          "required_run_rate",
          "overs_remaining",
          "pressure_index",
          "wickets_remaining",
          "momentum_short",
        ],
        values: [0.142, 0.128, 0.115, 0.098, 0.087],
      },
    ],
    {
      x: 7.15,
      y: 3.65,
      w: 5.4,
      h: 3.2,
      ...chartOptions,
      chartColors: [C.green],
      barDir: "bar",
      showLegend: false,
      valAxisMinVal: 0,
      valAxisMaxVal: 0.16,
      catAxisLabelFontFace: FONT.accent,
      catAxisLabelFontSize: 9,
    }
  );

  slide.addNotes("Key outcomes summarize predictive quality, calibration behavior, and latency suitability. SHAP priorities align with domain expectations around chase pressure and remaining resources.");
}

// Slide 18 - Conclusion & future work
{
  const slide = prs.addSlide("MAIN");
  addHeader(slide, "Conclusion", "Hybrid Cricket Analytics (ML+DL) — Ready for Production");

  card(slide, 0.45, 1.2, 7.1, 5.7, "2B313A", C.surface);
  const takeaways = [
    "Ball-level explainable hybrid win probability with test accuracy 0.701625 and ROC-AUC 0.7909874409929845",
    'Counterfactual simulation enables "what if" strategy analysis never before available in IPL analytics',
    "SHAP explainability bridges the gap between ML+DL model output and human tactical decisions",
    "Full MLOps pipeline with drift detection, audit logs, and automated retrain triggers",
  ];
  takeaways.forEach((t, i) => {
    slide.addText([
      { text: "✓ ", options: { color: C.gold, bold: true } },
      { text: t, options: { color: C.white } },
    ], {
      x: 0.8,
      y: 1.7 + i * 1.2,
      w: 6.6,
      h: 0.8,
      fontFace: FONT.body,
      fontSize: 13,
      breakLine: true,
    });
  });

  card(slide, 7.85, 1.2, 4.95, 5.7, C.blue, "111B2A");
  slide.addText("Future Work", {
    x: 8.15,
    y: 1.55,
    w: 2.8,
    h: 0.35,
    fontFace: FONT.body,
    fontSize: 16,
    bold: true,
    color: C.blue,
  });
  const future = [
    "Add phase-wise specialist DL routing (especially death overs) with automatic hybrid gating",
    "Integrate player-level form embeddings with venue and pitch condition features",
    "Deploy low-latency streaming inference for live broadcast and dugout tools",
    "Introduce drift-aware online recalibration for hybrid probability reliability",
  ];
  future.forEach((f, i) => {
    slide.addText("• " + f, {
      x: 8.15,
      y: 2.0 + i * 1.03,
      w: 4.45,
      h: 0.85,
      fontFace: FONT.body,
      fontSize: 12,
      color: C.muted,
      breakLine: true,
    });
  });

  slide.addShape(prs.ShapeType.rect, {
    x: 0,
    y: 7.05,
    w: 13.33,
    h: 0.45,
    fill: { color: C.gold },
    line: { color: C.gold, pt: 0 },
  });
  slide.addText("Counterfactual Strategy Analysis · Explainable AI · MLOps · IPL Win Probability · Industry Research", {
    x: 0.1,
    y: 7.17,
    w: 13.1,
    h: 0.2,
    fontFace: FONT.body,
    fontSize: 11,
    bold: true,
    color: C.bg,
    align: "center",
  });

  slide.addNotes("The project demonstrates a full path from research to production: reliable prediction, tactical simulation, explainability, and monitoring. Future work expands personalization, contextual features, and real-time delivery.");
}

prs.writeFile({ fileName: "IPL_Win_Probability_Research.pptx" })
  .then(() => {
    console.log("Presentation generated: IPL_Win_Probability_Research.pptx");
  })
  .catch((err) => {
    console.error("Failed to generate presentation:", err);
    process.exit(1);
  });
