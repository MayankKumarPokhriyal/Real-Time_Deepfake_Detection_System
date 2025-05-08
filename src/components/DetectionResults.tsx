import React from 'react';
import { ShieldCheck, ShieldAlert, Info } from 'lucide-react';

interface DetectionResultsProps {
  result: {
    isDeepfake: boolean;
    probability: number;
    confidenceScore: number;
    processingTime: number;
    faceDetected: boolean;
    modelUsed: string;
    timestamp: string;
  } | null;
}

const DetectionResults: React.FC<DetectionResultsProps> = ({ result }) => {
  if (!result) {
    return (
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col justify-center items-center h-full">
        <Info className="h-16 w-16 text-gray-500 mb-4" />
        <h3 className="text-xl font-semibold text-gray-300 mb-2">No Detection Results</h3>
        <p className="text-gray-400 text-center">
          Start detection with webcam or upload a video to see the analysis results.
        </p>
      </div>
    );
  }

  if (!result.faceDetected) {
    return (
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col justify-center items-center h-full">
        <AlertTriangle className="h-16 w-16 text-yellow-500 mb-4" />
        <h3 className="text-xl font-semibold text-gray-300 mb-2">No Face Detected</h3>
        <p className="text-gray-400 text-center">
          No face was detected in the input. Please ensure the face is clearly visible.
        </p>
      </div>
    );
  }

  const resultColor = result.isDeepfake ? 'red' : 'green';
  const resultIcon = result.isDeepfake ? (
    <ShieldAlert className={`h-16 w-16 text-${resultColor}-500 mb-4`} />
  ) : (
    <ShieldCheck className={`h-16 w-16 text-${resultColor}-500 mb-4`} />
  );
  
  const resultText = result.isDeepfake ? 'Deepfake Detected' : 'Authentic';
  const resultDescription = result.isDeepfake
    ? 'The analysis indicates this is likely an AI-generated or manipulated face.'
    : 'The analysis indicates this is likely a real, unmanipulated face.';

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <div className="text-center mb-6">
        {resultIcon}
        <h2 className={`text-2xl font-bold text-${resultColor}-500 mb-2`}>{resultText}</h2>
        <p className="text-gray-300">{resultDescription}</p>
      </div>

      <div className="space-y-4">
        <div className="bg-gray-700 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-400 mb-2">Deepfake Probability</h3>
          <div className="relative pt-1">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-gray-600 text-gray-200">
                  {Math.round(result.probability * 100)}%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mt-2 mb-1 text-xs flex rounded bg-gray-600">
              <div
                style={{ width: `${result.probability * 100}%` }}
                className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${resultColor}-500`}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-400">
              <span>Authentic</span>
              <span>Deepfake</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-700 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-400 mb-2">Confidence Score</h3>
          <div className="relative pt-1">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-gray-600 text-gray-200">
                  {Math.round(result.confidenceScore * 100)}%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mt-2 mb-1 text-xs flex rounded bg-gray-600">
              <div
                style={{ width: `${result.confidenceScore * 100}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-400">
              <span>Low</span>
              <span>High</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-700 rounded-lg p-3">
            <h3 className="text-xs font-medium text-gray-400 mb-1">Model Used</h3>
            <p className="text-sm text-gray-200">{result.modelUsed}</p>
          </div>
          <div className="bg-gray-700 rounded-lg p-3">
            <h3 className="text-xs font-medium text-gray-400 mb-1">Processing Time</h3>
            <p className="text-sm text-gray-200">{result.processingTime} ms</p>
          </div>
        </div>

        <div className="bg-gray-700 rounded-lg p-3">
          <h3 className="text-xs font-medium text-gray-400 mb-1">Detection Time</h3>
          <p className="text-sm text-gray-200">{result.timestamp}</p>
        </div>

        <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
          Save Results
        </button>
      </div>
    </div>
  );
};

export default DetectionResults;