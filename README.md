# IPL Win Probability Prediction (ML + Deep Learning)

## Project Title and Problem Statement

This project predicts **ball-by-ball IPL win probability** and provides tactical decision support through:

- Live probability inference
- What-if and counterfactual simulation
- Explainability and monitoring endpoints

### Problem Statement

Given the current match state (score, wickets, balls remaining, momentum, pressure), estimate the batting side’s probability of winning in real time.

---

## Pipeline Diagram (Textual)

Data (deliveries + matches CSV)
→ Preprocessing + feature engineering (25 features)
→ Baseline ML model (stacking ensemble)
→ Deep learning model (MLP neural network)
→ Hybrid blending (ML + DL weighted probability)
→ FastAPI inference endpoints
→ Monitoring + drift logs + retrain trigger

---

## Dataset Details

### Source Files

- [deliveries.csv](deliveries.csv): Ball-by-ball IPL data
- [matches.csv](matches.csv): Match metadata and winners

### Description

- `deliveries.csv` contains per-ball events (runs, wickets, teams, players).
- `matches.csv` contains match-level outcomes and context.
- These are joined using `match_id`/`id` for supervised learning.

---

## Model Details (ML + DL)

### 1) Baseline ML Model

- Stacking-based classifier (artifact: [artifacts/stacking_model_bundle.joblib](artifacts/stacking_model_bundle.joblib))

### 2) Deep Learning Model

- MLP neural network trained via scikit-learn
- Training is executed directly in the notebook section “Review 3 (Compulsory): Deep Learning Integration Inside Notebook” in [ML_Project_Final (1).ipynb](ML_Project_Final%20(1).ipynb)
- Artifact: [artifacts/deep_learning_model_bundle.joblib](artifacts/deep_learning_model_bundle.joblib)

### 3) Integrated Hybrid Pipeline

- API integrates ML + DL outputs in [main.py](main.py)
- Prediction mode is automatic:
	- `hybrid_ml_dl` (both available)
	- `ml_only` or `dl_only` (single model available)
	- `fallback_simulation` (no artifact available)

---

## Performance Evaluation (Required for Review 3)

- Metrics used: Accuracy, ROC-AUC, latency
- Baseline comparison: ML-only vs DL-only vs Hybrid mode
- Hybrid prediction is designed to improve robustness across match conditions

> After training the DL model, metrics are stored in [artifacts/model_metadata.json](artifacts/model_metadata.json).

---

## Justification for Improved Performance

- ML model captures strong tabular interactions from engineered cricket features.
- DL model captures non-linear feature combinations and pressure dynamics.
- Hybrid blending improves stability and reduces model-specific variance.

---

## Optimization Techniques Applied

- Feature scaling (`StandardScaler`)
- Early stopping in neural network training
- Weighted hybrid probability fusion
- Strict CSV input validation and bounded inference paths in API

---

## Steps to Run the Project

### 1) Install dependencies

```bash
pip install -r requirements.txt
```

### 2) (Optional but recommended) Train Deep Learning model

Run the final notebook cells in [ML_Project_Final (1).ipynb](ML_Project_Final%20(1).ipynb) under the section:

- “Review 3 (Compulsory): Deep Learning Integration Inside Notebook”

### 3) Start API

```bash
uvicorn main:app --reload
```

### Deployment Note (Railway / Nixpacks)

To avoid large model artifacts in the repo, the app can download them at runtime. Set these env vars in your deployment:

- `MODEL_BUNDLE_URL`: URL to `stacking_model_bundle.joblib`
- `DL_MODEL_BUNDLE_URL` (optional): URL to `deep_learning_model_bundle.joblib`

### 4) Test key endpoints

- Health: `GET /api/health`
- Predict: `POST /api/predict`
- Metadata: `GET /api/model_metadata`

---

## Required Dependencies/Libraries

- fastapi
- uvicorn
- pydantic
- numpy
- pandas
- joblib
- scikit-learn

Full pinned versions are in [requirements.txt](requirements.txt).

---

## Sample Output / Screenshots

- Interactive frontend: [index.html](index.html)
- API spec: [openapi_spec.yaml](openapi_spec.yaml)
- Monitoring reports: [artifacts/monitoring](artifacts/monitoring)

If needed for viva/demo, capture screenshots of:

1. `/api/predict` response with `prediction_mode` and `components`
2. `/api/model_metadata` response
3. UI dashboard running locally
