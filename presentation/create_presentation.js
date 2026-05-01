const pptxgen = require("pptxgenjs");

const prs = new pptxgen();
prs.layout = "LAYOUT_WIDE";
prs.author = "IPL Analytics Team";
prs.company = "IPL XI Command Center";
prs.subject = "IPL Win Probability Analytics";
prs.title = "IPL Win Probability Platform";

const C = {
  bg: "0F172A",
  surface: "1E293B",
  surfaceAlt: "334155",
  gold: "F59E0B",
  cyan: "06B6D4",
  green: "10B981",
  red: "EF4444",
  purple: "8B5CF6",
  white: "F8FAFC",
  muted: "94A3B8"
};

const FONT = { header: "Trebuchet MS", body: "Calibri" };

// Accurate Metrics
const DATA = { matches: 1095, deliveries: 260920 };
const META = { version: "v1.1.0-stacking-ml", features: 25, trainRows: 96000, testRows: 24000, threshold: 0.34 };

const ML_METRICS = [
  { name: 'Stacking Ensemble', acc: 70.16, auc: 79.10 },
  { name: 'Deep Learning (MLP)', acc: 70.03, auc: 78.85 },
  { name: 'Hybrid (ML+DL)', acc: 66.70, auc: 78.85 }
];

function addHeader(slide, title, subtitle) {
  slide.addText(title, { x: 0.5, y: 0.3, w: 12.4, h: 0.6, fontFace: FONT.header, fontSize: 30, bold: true, color: C.gold });
  if (subtitle) slide.addText(subtitle, { x: 0.5, y: 0.95, w: 12.4, h: 0.4, fontFace: FONT.body, fontSize: 13, color: C.muted });
  slide.addShape(prs.ShapeType.line, { x: 0.5, y: 1.35, w: 12.3, h: 0, line: { color: C.surfaceAlt, pt: 1 } });
}

function addBullets(slide, x, y, w, h, bullets) {
  slide.addText(bullets.map(b => ({ text: b, options: { bullet: { indent: 18 } } })), { x, y, w, h, fontFace: FONT.body, fontSize: 15, color: C.white, paraSpaceAfter: 10 });
}

// 0. Title Slide
let slide = prs.addSlide();
slide.background = { color: C.bg };
slide.addText("IPL Win Probability Intelligence", { x: 0, y: 2.5, w: "100%", h: 1, fontFace: FONT.header, fontSize: 46, bold: true, color: C.white, align: "center" });
slide.addText("From Raw Data to Real-Time Tactical Decisions", { x: 0, y: 3.5, w: "100%", h: 0.5, fontFace: FONT.body, fontSize: 20, color: C.gold, align: "center" });

// 1. Problem Definition & Planning
slide = prs.addSlide(); slide.background = { color: C.bg };
addHeader(slide, "1. Problem Definition & Planning", "Why IPL Decisions Need Better Intelligence");
addBullets(slide, 0.5, 1.8, 12.3, 5, [
  "Current Challenge: Captains and analysts make 200+ tactical decisions per match without real-time, quantified probability support.",
  "Limitations: Existing tools (like Duckworth-Lewis) are static and rule-based, preventing dynamic 'what-if' counterfactual simulations.",
  "Objective: Build an explainable, ball-by-ball win probability model integrating historical data with advanced match-state features.",
  "Deliverable: A full-stack pipeline from data ingestion to a deployed API and intuitive dashboard."
]);

// 2. Data Collection
slide = prs.addSlide(); slide.background = { color: C.bg };
addHeader(slide, "2. Data Collection", "Sourcing the Historical Foundations (2007/08 - 2024)");
addBullets(slide, 0.5, 1.8, 6, 5, [
  "Matches Dataset: 1,095 matches including season, venue, toss decisions, and match outcomes.",
  "Deliveries Dataset: 260,920 ball-by-ball records capturing runs, wickets, and extras.",
  "Scope: Focus exclusively on standard innings, excluding super-overs and severe DLS-affected anomalies to preserve data integrity."
]);
slide.addShape(prs.ShapeType.roundRect, { x: 7.0, y: 2.0, w: 2.5, h: 1.5, fill: { color: C.surface }, line: { color: C.surfaceAlt, pt: 1 }, radius: 0.1 });
slide.addText(DATA.matches.toLocaleString(), { x: 7.0, y: 2.2, w: 2.5, h: 0.8, fontFace: FONT.header, fontSize: 32, bold: true, color: C.gold, align: "center" });
slide.addText("Total Matches", { x: 7.0, y: 3.0, w: 2.5, h: 0.4, fontFace: FONT.body, fontSize: 14, color: C.muted, align: "center" });

slide.addShape(prs.ShapeType.roundRect, { x: 10.0, y: 2.0, w: 2.5, h: 1.5, fill: { color: C.surface }, line: { color: C.surfaceAlt, pt: 1 }, radius: 0.1 });
slide.addText(DATA.deliveries.toLocaleString(), { x: 10.0, y: 2.2, w: 2.5, h: 0.8, fontFace: FONT.header, fontSize: 32, bold: true, color: C.cyan, align: "center" });
slide.addText("Total Deliveries", { x: 10.0, y: 3.0, w: 2.5, h: 0.4, fontFace: FONT.body, fontSize: 14, color: C.muted, align: "center" });

// 3. Data Preparation (Cleaning & Wrangling)
slide = prs.addSlide(); slide.background = { color: C.bg };
addHeader(slide, "3. Data Preparation (Cleaning & Wrangling)", "Ensuring Structural Integrity");
addBullets(slide, 0.5, 1.8, 12.3, 5, [
  "Integrity Checks: Removed 'No Result' and 'Abandoned' matches. Dropped missing values in target score pipelines.",
  "Structural Cleaning: Re-mapped discontinued team names (e.g., Delhi Daredevils to Delhi Capitals).",
  "Merging: Joined matches.csv with deliveries.csv using 'match_id' to append match context (target score, batting team) to every ball.",
  "Data Leakage Prevention: Season-aware splitting applied early to ensure future matches do not leak into training sets."
]);

// 4. Exploratory Data Analysis (EDA)
slide = prs.addSlide(); slide.background = { color: C.bg };
addHeader(slide, "4. Exploratory Data Analysis (EDA)", "Discovering Underlying Patterns");
addBullets(slide, 0.5, 1.8, 5.5, 5, [
  "Analyzed target distribution across venues to understand par scores.",
  "Investigated phase dominance: powerplay wickets vs. death over run acceleration.",
  "Correlated current run rate (CRR) and required run rate (RRR) with final match outcomes."
]);
let edaData = [
  { name: 'Powerplay', labels: ['Won', 'Lost'], values: [65, 35] },
  { name: 'Middle', labels: ['Won', 'Lost'], values: [55, 45] },
  { name: 'Death', labels: ['Won', 'Lost'], values: [80, 20] }
];
slide.addChart(prs.ChartType.bar, edaData, { x: 6.5, y: 1.8, w: 6.0, h: 4.5, barDir: 'col', showLegend: true, legendPos: 'b', title: "Win % by Phase Dominance (Mockup EDA)", chartColors: [C.green, C.red], dataLabelColor: C.white });

// 5. Feature Engineering & Selection
slide = prs.addSlide(); slide.background = { color: C.bg };
addHeader(slide, "5. Feature Engineering & Selection", `Distilling ${META.features} Strategic Context Variables`);
addBullets(slide, 0.5, 1.8, 12.3, 5, [
  "Core Mechanics: overs_remaining, wickets_remaining, target, required_run_rate, current_run_rate.",
  "Momentum Metrics: runs_last_6, runs_last_12, momentum_short, momentum_medium, momentum_swing.",
  "Pressure & Risk: rr_pressure, wicket_pressure, pressure_index, collapse_risk, win_pressure.",
  "Phase Context: match_phase_encoded, innings_type, resource_remaining, match_progress, boundary_intensity.",
  "Selection: Kept features demonstrating high SHAP global importance, ensuring deep contextual awareness."
]);

// 6. Model Selection & Training (ML and DL)
slide = prs.addSlide(); slide.background = { color: C.bg };
addHeader(slide, "6. Model Selection & Training", "Baseline to Advanced Architecture");
addBullets(slide, 0.5, 1.8, 12.3, 5, [
  "Baseline Approach: Logistic Regression and simple Random Forest models.",
  "Advanced ML (Stacking): Combined Random Forest, Gradient Boosting, and XGBoost using a Logistic Meta-Learner. Yielded highly calibrated probabilities.",
  "Industry-Grade Deep Learning (DL): Built an MLP neural network architecture optimized with Adam, batch normalization, and dropout layers.",
  `Data Split: ${META.trainRows.toLocaleString()} rows for Training, ${META.testRows.toLocaleString()} rows for Testing.`
]);

// 7. Model Evaluation & Testing (ML and DL)
slide = prs.addSlide(); slide.background = { color: C.bg };
addHeader(slide, "7. Model Evaluation & Testing", "Performance Diagnostics");
let evalData = [
  {
    name: "Accuracy", labels: ML_METRICS.map(m=>m.name),
    values: ML_METRICS.map(m=>m.acc)
  },
  {
    name: "ROC-AUC", labels: ML_METRICS.map(m=>m.name),
    values: ML_METRICS.map(m=>m.auc)
  }
];
slide.addChart(prs.ChartType.bar, evalData, { x: 0.5, y: 1.8, w: 6.0, h: 4.5, barDir: 'bar', showLegend: true, legendPos: 'b', chartColors: [C.cyan, C.gold], dataLabelFormatCode: "0.00", showValue: true, dataLabelColor: C.white, valGridLine: { style: "none" } });
addBullets(slide, 6.8, 1.8, 6.0, 5, [
  "Stacking Ensemble achieved top ROC-AUC (0.7910) and Accuracy (70.16%).",
  "Deep Learning (MLP) tracked closely at 0.7885 AUC and 70.03% Accuracy.",
  "Hybrid configuration evaluated, but Stacking (ML-only mode) was ultimately selected for the final deployment due to calibration stability."
]);

// 8. Hyperparameter Tuning & Calibration
slide = prs.addSlide(); slide.background = { color: C.bg };
addHeader(slide, "8. Hyperparameter Tuning & Calibration", "Optimizing for Deployment");
addBullets(slide, 0.5, 1.8, 12.3, 5, [
  "Tuning: Applied cross-validated Grid Search on tree depths, learning rates (XGBoost), and hidden layer sizes (MLP).",
  `Decision Threshold: Tuned the final decision boundary to ${META.threshold} based on F1-score maximization for unbalanced match states.`,
  "Probability Calibration: Utilized Isotonic Regression to ensure output probabilities represent true real-world likelihoods (Reliability Plot analysis).",
  "Strict No-Leak pipeline guaranteed that hyperparameter decisions were made strictly on validation sets, never on the final test set."
]);

// 9. Model Deployment
slide = prs.addSlide(); slide.background = { color: C.bg };
addHeader(slide, "9. Model Deployment", "Serving Predictions via API");
addBullets(slide, 0.5, 1.8, 12.3, 5, [
  "Framework: Packaged the final model artifacts (joblib format) into a high-performance FastAPI backend.",
  "Endpoints: Established 16 OpenAPI-compliant REST endpoints (e.g., /api/predict, /api/counterfactual).",
  "Architecture: Single-page application frontend securely fetching data from the backend seamlessly.",
  "Portability: Containerized and deployed across scalable infrastructure."
]);

// 10. Monitoring & Maintenance
slide = prs.addSlide(); slide.background = { color: C.bg };
addHeader(slide, "10. Monitoring & Maintenance", "MLOps Governance");
addBullets(slide, 0.5, 1.8, 12.3, 5, [
  "Drift Monitoring: Automatically tracks Population Stability Index (PSI) and Z-Shifts on live inbound data streams.",
  "Performance Flags: Live rolling AUC tracking. Triggers 'retrain_required' status if AUC drops below 0.72.",
  "Audit Logging: Every automated check and maintenance action is saved directly to artifacts/monitoring JSON logs.",
  "Retraining Pipeline: One-click '/api/trigger_retrain' endpoint to automatically pull fresh data, preprocess, and queue a new job."
]);

// 11. Website Features
slide = prs.addSlide(); slide.background = { color: C.bg };
addHeader(slide, "11. Website Features", "The IPL XI Command Center Experience");
addBullets(slide, 0.5, 1.8, 12.3, 5, [
  "System Dashboard: Real-time API connectivity tracking dataset and model metrics.",
  "Live Intelligence: Interactive animated gauge displaying live win probabilities and tactical phase insights.",
  "Simulation Lab: Interactive 'What-If' builder estimating outcome shifts from aggressive or defensive maneuvers.",
  "Momentum Timeline: Plotted chart overlaying win probability with match pressure across 120 deliveries.",
  "Explainability (SHAP): Global importance charts exposing the inner workings of the ensemble.",
  "Franchise Intelligence: Phase dominance radar charts (Powerplay vs Death) and AI-assisted auction insights."
]);

// 12. Conclusion
slide = prs.addSlide(); slide.background = { color: C.bg };
slide.addText("Thank You", { x: 0, y: 3.0, w: "100%", h: 1, fontFace: FONT.header, fontSize: 50, bold: true, color: C.white, align: "center" });

prs.writeFile({ fileName: "IPL_Win_Probability_Platform_V2.pptx" })
  .then(() => console.log("Presentation generated successfully."))
  .catch((err) => console.error("Error generating presentation:", err));
