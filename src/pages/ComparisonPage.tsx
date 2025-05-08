import React, { useState } from 'react';
import ModelComparison from '../components/ModelComparison';
import ModelPerformance from '../components/ModelPerformance';
import { BarChart2 } from 'lucide-react';

const ComparisonPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('performance');
  
  const modelMetrics = [
    {
      modelName: 'MesoNet (Original)',
      accuracy: 83,
      f1Score: 0.82,
      auc: 0.89,
      inferenceTime: 32,
      memoryUsage: 183,
      realTime: true
    },
    {
      modelName: 'Improved MesoNet',
      accuracy: 88,
      f1Score: 0.87,
      auc: 0.92,
      inferenceTime: 48,
      memoryUsage: 245,
      realTime: true
    },
    {
      modelName: 'Xception',
      accuracy: 91,
      f1Score: 0.90,
      auc: 0.94,
      inferenceTime: 112,
      memoryUsage: 528,
      realTime: true
    },
    {
      modelName: 'EfficientNet-B0',
      accuracy: 92,
      f1Score: 0.91,
      auc: 0.95,
      inferenceTime: 94,
      memoryUsage: 782,
      realTime: true
    },
    {
      modelName: 'CNN-LSTM',
      accuracy: 94,
      f1Score: 0.93,
      auc: 0.96,
      inferenceTime: 267,
      memoryUsage: 1274,
      realTime: false
    },
    {
      modelName: 'Vision Transformer (ViT)',
      accuracy: 95,
      f1Score: 0.94,
      auc: 0.97,
      inferenceTime: 384,
      memoryUsage: 1842,
      realTime: false
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2 flex items-center justify-center">
          <BarChart2 className="h-8 w-8 text-blue-500 mr-2" />
          <span>Model Comparison</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Compare the performance, accuracy, and resource usage of different deepfake detection models.
        </p>
      </div>
      
      <div className="mb-8">
        <ModelPerformance models={modelMetrics} />
      </div>
      
      <div>
        <ModelComparison activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      
      <div className="mt-8 bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Recommended Model Selection</h2>
        <div className="space-y-4">
          <div className="bg-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">For Real-Time Applications</h3>
            <p className="text-gray-300 mb-3">
              When real-time performance is critical (e.g., live video streams, webcam applications):
            </p>
            <div className="flex items-center bg-blue-500 bg-opacity-10 border border-blue-500 rounded-lg p-3">
              <div className="font-medium text-blue-400 mr-2">Recommendation:</div>
              <div className="text-white">Improved MesoNet or EfficientNet-B0</div>
            </div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">For Maximum Accuracy</h3>
            <p className="text-gray-300 mb-3">
              When detection accuracy is the primary concern and processing time is less critical:
            </p>
            <div className="flex items-center bg-blue-500 bg-opacity-10 border border-blue-500 rounded-lg p-3">
              <div className="font-medium text-blue-400 mr-2">Recommendation:</div>
              <div className="text-white">Vision Transformer (ViT) or CNN-LSTM</div>
            </div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">Balanced Performance</h3>
            <p className="text-gray-300 mb-3">
              For a good balance between accuracy and performance:
            </p>
            <div className="flex items-center bg-blue-500 bg-opacity-10 border border-blue-500 rounded-lg p-3">
              <div className="font-medium text-blue-400 mr-2">Recommendation:</div>
              <div className="text-white">Xception or EfficientNet-B0</div>
            </div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">For Resource-Constrained Devices</h3>
            <p className="text-gray-300 mb-3">
              When deploying on mobile devices or systems with limited computational resources:
            </p>
            <div className="flex items-center bg-blue-500 bg-opacity-10 border border-blue-500 rounded-lg p-3">
              <div className="font-medium text-blue-400 mr-2">Recommendation:</div>
              <div className="text-white">MesoNet (Original)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonPage;