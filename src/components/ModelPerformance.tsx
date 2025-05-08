import React from 'react';
import { BarChart2, Clock, Cpu } from 'lucide-react';

interface ModelMetrics {
  modelName: string;
  accuracy: number;
  f1Score: number;
  auc: number;
  inferenceTime: number;
  memoryUsage: number;
  realTime: boolean;
}

interface ModelPerformanceProps {
  models: ModelMetrics[];
}

const ModelPerformance: React.FC<ModelPerformanceProps> = ({ models }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="p-5 border-b border-gray-700">
        <h2 className="text-xl font-semibold text-white flex items-center">
          <BarChart2 className="h-5 w-5 mr-2 text-blue-500" />
          Model Performance Comparison
        </h2>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Model
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Accuracy
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                F1 Score
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                AUC
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  Inference (ms)
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                <div className="flex items-center">
                  <Cpu className="h-3 w-3 mr-1" />
                  Memory (MB)
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Real-time
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-700">
            {models.map((model, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-750' : 'bg-gray-800'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                  {model.modelName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <div className="flex items-center">
                    <div className="w-16 bg-gray-600 rounded-full h-2 mr-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${model.accuracy}%` }}
                      ></div>
                    </div>
                    {model.accuracy}%
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <div className="flex items-center">
                    <div className="w-16 bg-gray-600 rounded-full h-2 mr-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${model.f1Score * 100}%` }}
                      ></div>
                    </div>
                    {model.f1Score.toFixed(2)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <div className="flex items-center">
                    <div className="w-16 bg-gray-600 rounded-full h-2 mr-2">
                      <div 
                        className="bg-purple-500 h-2 rounded-full" 
                        style={{ width: `${model.auc * 100}%` }}
                      ></div>
                    </div>
                    {model.auc.toFixed(2)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <span 
                    className={`${
                      model.inferenceTime < 100 
                        ? 'text-green-400' 
                        : model.inferenceTime < 250 
                          ? 'text-yellow-400' 
                          : 'text-red-400'
                    }`}
                  >
                    {model.inferenceTime}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {model.memoryUsage}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    model.realTime 
                      ? 'bg-green-900 text-green-300' 
                      : 'bg-red-900 text-red-300'
                  }`}>
                    {model.realTime ? 'Yes' : 'No'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-4 border-t border-gray-700 text-xs text-gray-400">
        <p>
          <strong>Note:</strong> Performance metrics are based on testing with the Microsoft FaceSynthetics Dataset, 2048x2048 resolution,
          using a system with NVIDIA RTX 3080 GPU, 32GB RAM, and Intel Core i9 processor.
        </p>
      </div>
    </div>
  );
};

export default ModelPerformance;