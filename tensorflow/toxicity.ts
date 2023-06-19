import * as tfjs from "@tensorflow/tfjs";
import * as toxicity from "@tensorflow-models/toxicity";

export const detectToxicText = async (text: string): Promise<boolean> => {
  const minPredictionConfidence = 0.9;

  const model = await toxicity.load(minPredictionConfidence, []);
  const predictions = await model.classify(text);

  console.log("XXXXXX", predictions);

  for (const prediction of predictions) {
    const { label, results } = prediction;
    const match = results.some((classification) => classification.match);
    if (match) return true;
  }

  return false;
};
