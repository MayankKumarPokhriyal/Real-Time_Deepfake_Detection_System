import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface Model {
  id: string;
  name: string;
  accuracy: number;
  speed: 'Fast' | 'Medium' | 'Slow';
  description: string;
}

const models: Model[] = [
  {
    id: 'mesonet',
    name: 'MesoNet (Original)',
    accuracy: 83,
    speed: 'Fast',
    description: 'Lightweight model with good performance for real-time applications.'
  },
  {
    id: 'mesonet-improved',
    name: 'Improved MesoNet',
    accuracy: 88,
    speed: 'Medium',
    description: 'Enhanced version with better accuracy while maintaining decent speed.'
  },
  {
    id: 'xception',
    name: 'Xception',
    accuracy: 91,
    speed: 'Medium',
    description: 'Strong performance on a wide range of deepfake types.'
  },
  {
    id: 'efficientnet',
    name: 'EfficientNet-B0',
    accuracy: 92,
    speed: 'Medium',
    description: 'Optimized architecture with excellent accuracy-to-computation ratio.'
  },
  {
    id: 'vit',
    name: 'Vision Transformer (ViT)',
    accuracy: 95,
    speed: 'Slow',
    description: 'State-of-the-art accuracy with higher computational requirements.'
  },
  {
    id: 'cnn-lstm',
    name: 'CNN-LSTM',
    accuracy: 94,
    speed: 'Slow',
    description: 'Captures temporal inconsistencies in video sequences.'
  }
];

interface ModelSelectorProps {
  onModelChange: (model: string) => void;
}

const ModelSelector: React.FC<ModelSelectorProps> = ({ onModelChange }) => {
  const [selectedModel, setSelectedModel] = useState<string>(models[0].id);

  const handleModelChange = (modelId: string) => {
    setSelectedModel(modelId);
    onModelChange(modelId);
  };

  const getSpeedColor = (speed: 'Fast' | 'Medium' | 'Slow') => {
    switch (speed) {
      case 'Fast':
        return 'text-green-400';
      case 'Medium':
        return 'text-yellow-400';
      case 'Slow':
        return 'text-orange-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="space-y-2">
      {models.map((model) => (
        <div
          key={model.id}
          className={`border rounded-lg p-3 cursor-pointer transition-colors ${
            selectedModel === model.id
              ? 'border-blue-500 bg-blue-500 bg-opacity-10'
              : 'border-gray-600 hover:border-gray-500 hover:bg-gray-600'
          }`}
          onClick={() => handleModelChange(model.id)}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="mr-3">
                {selectedModel === model.id ? (
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                ) : (
                  <div className="h-5 w-5 rounded-full border-2 border-gray-500"></div>
                )}
              </div>
              <div>
                <h4 className="font-medium">{model.name}</h4>
                <div className="flex items-center mt-1 text-sm">
                  <span className="text-blue-400 mr-3">Accuracy: {model.accuracy}%</span>
                  <span className={`${getSpeedColor(model.speed)} mr-3`}>Speed: {model.speed}</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-2 pl-8">{model.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ModelSelector;