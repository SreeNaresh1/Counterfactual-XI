import pandas as pd
import numpy as np

def simulate(state, runs=0):
    sim = state.copy()
    if isinstance(sim, pd.Series):
        sim = sim.to_frame().T
    else:
        sim = sim.copy()
    runs = float(runs)
    sim.loc[:, 'cumulative_runs'] = sim['cumulative_runs'] + runs
    return sim

s = pd.Series({'cumulative_runs': 100})
print(simulate(s, runs=14))
