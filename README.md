# 🏏 IPL Win Probability Platform

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Python](https://img.shields.io/badge/Python-3.11+-blue.svg)
![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-green.svg)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black.svg)
![Hugging Face](https://img.shields.io/badge/Backend-Hugging_Face-yellow.svg)

A high-performance, full-stack Machine Learning application predicting **ball-by-ball IPL win probability** and providing tactical decision support. The platform features an advanced Stacking ML Ensemble served by a FastAPI backend and a stunning, interactive glassmorphism frontend dashboard.

---

## 🌟 Core Features

1. **Live Match Decision Support:** Real-time probability inference engine driven by 25 dynamically calculated match-state features (CRR, RRR, Pressure Index).
2. **Counterfactual "What-If" Simulation Lab:** Manually override match scenarios (Runs Δ, Wickets Δ) to instantly visualize how specific tactical decisions impact win probability.
3. **Match Momentum Timeline:** Ball-by-ball visualization of historical matches tracking the exact intersection of Win Probability and Team Pressure.
4. **Model Explainability (SHAP):** Transparent AI using SHAP values to expose the global feature importance driving the Stacking Ensemble's decisions.
5. **MLOps Governance Dashboard:** Automated drift detection (PSI/Z-Shift) and performance monitoring (Rolling AUC) triggering systematic `retrain_required` audit logs.
6. **Franchise Intelligence:** Deep dive into phase-specific dominance (Powerplay vs Death Overs) using radar charts and targeted AI insights.

---

## 🏗️ Architecture & Deployment

The application utilizes a completely decoupled, zero-cost, infinitely scalable deployment architecture:

*   **Frontend (UI):** Single-page application (`index.html`) using Vanilla JS and Chart.js, deployed globally on **Vercel's Edge Network**.
*   **Backend (API & Inference):** Python FastAPI application containerized via Docker and hosted on **Hugging Face Spaces** (16GB RAM tier) to seamlessly handle heavy `joblib` inference memory requirements.

### Data Flow Pipeline
```text
Deliveries/Matches CSV → Feature Engineering (25 features) 
→ Stacking ML Ensemble (Accuracy: 0.7745 | AUC: 0.860) 
→ FastAPI REST Endpoints 
→ Vercel Global CDN (Glassmorphism Dashboard)
```

---

## 📊 Model Performance

The current active model is a **Stacking Ensemble Classifier** incorporating non-linear feature interactions and engineered cricket dynamics (Momentum, Run Rates, Wickets).

| Metric | Score | Note |
| :--- | :--- | :--- |
| **Test Accuracy** | `77.45%` | High baseline stability |
| **ROC-AUC** | `0.860` | Excellent discrimination threshold |
| **Decision Threshold** | `0.34` | Calibrated for class imbalance |
| **Active Features** | `25` | Including temporal phase contextualization |

*(Note: The MLOps pipeline actively tracks these metrics in production against input drift).*

---

## 🚀 Local Development Setup

### 1. Clone & Install
```bash
git clone https://github.com/SreeNaresh1/Counterfactual-XI.git
cd Counterfactual-XI
pip install -r requirements.txt
```

### 2. Start the Backend API
Start the FastAPI server locally:
```bash
uvicorn main:app --reload --host 127.0.0.1 --port 8000
```

### 3. Launch the Frontend
You can open `index.html` directly in your browser, or spin up a local server:
```bash
python -m http.server 3000
# Then visit http://localhost:3000 in your browser
```

---

## 📁 Repository Structure

*   `main.py` - FastAPI application and REST endpoints.
*   `index.html` - The interactive frontend dashboard.
*   `Dockerfile` - Container configuration for Hugging Face deployment.
*   `vercel.json` - Configuration forcing Vercel to route traffic exclusively to the static frontend.
*   `artifacts/` - Serialized `.joblib` models, scalers, metadata, and active MLOps audit logs.
*   `dataset/` - Reference data structures (ignored in git for size constraints).
*   `presentation/` - Comprehensive PowerPoint `.pptx` documents detailing the complete ML/DL lifecycle.

---

## ⚙️ Configuration & Environment

When deploying the frontend to Vercel, the `index.html` file utilizes a dynamic API router:
```javascript
// Automatically falls back to localhost during local development, 
// and connects to Hugging Face during production.
const API = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
    ? 'http://127.0.0.1:8000' 
    : 'https://<your-username>-<your-space>.hf.space';
```

---

*Developed for the Advanced IPL Predictive Analytics & Decision Support Initiative.*
