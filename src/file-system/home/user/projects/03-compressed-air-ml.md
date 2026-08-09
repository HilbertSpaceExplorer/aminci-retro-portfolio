# Compressed-Air System ML

## 2025

### Machine Learning / Sensor Data
### Classification / Regression / Python

![](/images/projects/compressed-air-ml/classification-feature-space.png?aspect=1.45&width=1.2)

Analysing measured compressed-air signals with classification and regression.

The classification data contains four recordings of roughly 15 minutes each: healthy idle, healthy serving, leak idle, and leak serving.

![](/images/projects/compressed-air-ml/operating-state-signals.png?aspect=1.6&width=1.2)

The recordings are divided into non-overlapping 19-second windows. Mean flow and minimum flow are calculated for each window, producing 192 samples with 48 examples per operating state.

![](/images/projects/compressed-air-ml/feature-window-extraction.png?aspect=1.75&width=1.2)

A decision tree was evaluated with a stratified 70/30 train-test split. Depth 5 classified 57 of 58 held-out windows correctly on this split. Deeper trees fitted the training data more closely but performed less consistently on the test set.

![](/images/projects/compressed-air-ml/tree-depth-validation.png?aspect=1.75&width=1.2)

![](/images/projects/compressed-air-ml/classification-results.png?aspect=1.9&width=1.2)

For the regression task, eight constant-flow trials cover nominal setpoints from 300 to 1000 L/min. Mean measured flow is used to estimate mean system power.

![](/images/projects/compressed-air-ml/power-regression.png?aspect=1.45&width=1.2)

Leave-one-experiment-out validation produced an RMSE of 0.213 kW and an R² of 0.985. The dataset is small and controlled, so further recordings would be required before applying the model to other equipment or operating ranges.

![](/images/projects/compressed-air-ml/regression-validation.png?aspect=1.85&width=1.2)
