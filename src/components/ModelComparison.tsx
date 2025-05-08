import React from 'react';
import { LayoutGrid, FileCheck, Gauge, Clock } from 'lucide-react';

interface ModelComparisonProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const ModelComparison: React.FC<ModelComparisonProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg">
      <div className="border-b border-gray-700">
        <nav className="flex -mb-px">
          <button
            onClick={() => setActiveTab('performance')}
            className={`py-4 px-6 text-center border-b-2 font-medium text-sm flex items-center ${
              activeTab === 'performance'
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-500'
            }`}
          >
            <Gauge className="h-4 w-4 mr-2" />
            Performance Metrics
          </button>
          <button
            onClick={() => setActiveTab('accuracy')}
            className={`py-4 px-6 text-center border-b-2 font-medium text-sm flex items-center ${
              activeTab === 'accuracy'
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-500'
            }`}
          >
            <FileCheck className="h-4 w-4 mr-2" />
            Accuracy Analysis
          </button>
          <button
            onClick={() => setActiveTab('resources')}
            className={`py-4 px-6 text-center border-b-2 font-medium text-sm flex items-center ${
              activeTab === 'resources'
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-500'
            }`}
          >
            <LayoutGrid className="h-4 w-4 mr-2" />
            Resource Usage
          </button>
          <button
            onClick={() => setActiveTab('speed')}
            className={`py-4 px-6 text-center border-b-2 font-medium text-sm flex items-center ${
              activeTab === 'speed'
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-500'
            }`}
          >
            <Clock className="h-4 w-4 mr-2" />
            Processing Speed
          </button>
        </nav>
      </div>
      <div className="p-6">
        {activeTab === 'performance' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-medium mb-4 text-gray-200">Overall Accuracy</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Vision Transformer (ViT)</span>
                    <span className="font-medium">95%</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>CNN-LSTM</span>
                    <span className="font-medium">94%</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>EfficientNet-B0</span>
                    <span className="font-medium">92%</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Xception</span>
                    <span className="font-medium">91%</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '91%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Improved MesoNet</span>
                    <span className="font-medium">88%</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>MesoNet (Original)</span>
                    <span className="font-medium">83%</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '83%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-medium mb-4 text-gray-200">F1 Score</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Vision Transformer (ViT)</span>
                    <span className="font-medium">0.94</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>CNN-LSTM</span>
                    <span className="font-medium">0.93</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '93%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>EfficientNet-B0</span>
                    <span className="font-medium">0.91</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '91%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Xception</span>
                    <span className="font-medium">0.90</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Improved MesoNet</span>
                    <span className="font-medium">0.87</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '87%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>MesoNet (Original)</span>
                    <span className="font-medium">0.82</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '82%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'accuracy' && (
          <div className="space-y-6">
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-medium mb-4 text-gray-200">Detection by Deepfake Type</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Face Swapping</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>ViT</span>
                      <span>96%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>CNN-LSTM</span>
                      <span>95%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>EfficientNet</span>
                      <span>93%</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Face Reenactment</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>ViT</span>
                      <span>94%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>CNN-LSTM</span>
                      <span>93%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>EfficientNet</span>
                      <span>91%</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Face Synthesis</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>ViT</span>
                      <span>97%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>CNN-LSTM</span>
                      <span>96%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>EfficientNet</span>
                      <span>94%</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Expression Manipulation</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>ViT</span>
                      <span>93%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>CNN-LSTM</span>
                      <span>92%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>EfficientNet</span>
                      <span>90%</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Attribute Manipulation</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>ViT</span>
                      <span>95%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>CNN-LSTM</span>
                      <span>93%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>EfficientNet</span>
                      <span>91%</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Neural Talking Heads</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>ViT</span>
                      <span>96%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>CNN-LSTM</span>
                      <span>95%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>EfficientNet</span>
                      <span>92%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-medium mb-4 text-gray-200">False Positive/Negative Analysis</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-300 mb-3">False Positive Rate</h4>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>MesoNet (Original)</span>
                        <span>7.2%</span>
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-1.5">
                        <div className="bg-red-500 h-1.5 rounded-full" style={{ width: '7.2%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Improved MesoNet</span>
                        <span>5.8%</span>
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-1.5">
                        <div className="bg-red-500 h-1.5 rounded-full" style={{ width: '5.8%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Xception</span>
                        <span>4.5%</span>
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-1.5">
                        <div className="bg-red-500 h-1.5 rounded-full" style={{ width: '4.5%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>EfficientNet-B0</span>
                        <span>3.8%</span>
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-1.5">
                        <div className="bg-red-500 h-1.5 rounded-full" style={{ width: '3.8%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>CNN-LSTM</span>
                        <span>3.2%</span>
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-1.5">
                        <div className="bg-red-500 h-1.5 rounded-full" style={{ width: '3.2%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Vision Transformer (ViT)</span>
                        <span>2.6%</span>
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-1.5">
                        <div className="bg-red-500 h-1.5 rounded-full" style={{ width: '2.6%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-300 mb-3">False Negative Rate</h4>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>MesoNet (Original)</span>
                        <span>9.8%</span>
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-1.5">
                        <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '9.8%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Improved MesoNet</span>
                        <span>6.4%</span>
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-1.5">
                        <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '6.4%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Xception</span>
                        <span>5.1%</span>
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-1.5">
                        <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '5.1%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>EfficientNet-B0</span>
                        <span>4.2%</span>
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-1.5">
                        <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '4.2%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>CNN-LSTM</span>
                        <span>3.5%</span>
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-1.5">
                        <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '3.5%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Vision Transformer (ViT)</span>
                        <span>2.8%</span>
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-1.5">
                        <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '2.8%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'resources' && (
          <div className="space-y-6">
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-medium mb-4 text-gray-200">Memory Usage</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Vision Transformer (ViT)</span>
                      <span className="font-medium">1842 MB</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '92.1%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>CNN-LSTM</span>
                      <span className="font-medium">1274 MB</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '63.7%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>EfficientNet-B0</span>
                      <span className="font-medium">782 MB</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '39.1%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Xception</span>
                      <span className="font-medium">528 MB</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '26.4%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Improved MesoNet</span>
                      <span className="font-medium">245 MB</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '12.3%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>MesoNet (Original)</span>
                      <span className="font-medium">183 MB</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '9.2%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-medium mb-4 text-gray-200">GPU Utilization</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Vision Transformer (ViT)</span>
                      <span className="font-medium">86%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '86%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>CNN-LSTM</span>
                      <span className="font-medium">74%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '74%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>EfficientNet-B0</span>
                      <span className="font-medium">58%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '58%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Xception</span>
                      <span className="font-medium">42%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '42%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Improved MesoNet</span>
                      <span className="font-medium">28%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '28%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>MesoNet (Original)</span>
                      <span className="font-medium">22%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '22%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'speed' && (
          <div className="space-y-6">
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-medium mb-4 text-gray-200">Inference Time (milliseconds)</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>MesoNet (Original)</span>
                    <span className="font-medium text-green-400">32 ms</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '8%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Improved MesoNet</span>
                    <span className="font-medium text-green-400">48 ms</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '12%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>EfficientNet-B0</span>
                    <span className="font-medium text-yellow-400">94 ms</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '23.5%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Xception</span>
                    <span className="font-medium text-yellow-400">112 ms</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '28%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>CNN-LSTM</span>
                    <span className="font-medium text-orange-400">267 ms</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '66.75%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Vision Transformer (ViT)</span>
                    <span className="font-medium text-red-400">384 ms</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '96%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-medium mb-4 text-gray-200">Frames Per Second</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-300 mb-3">GPU Performance</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-center text-sm">
                        <span>MesoNet (Original)</span>
                        <span className="font-medium text-green-400">32 FPS</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Improved MesoNet</span>
                        <span className="font-medium text-green-400">24 FPS</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center text-sm">
                        <span>EfficientNet-B0</span>
                        <span className="font-medium text-yellow-400">12 FPS</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Xception</span>
                        <span className="font-medium text-yellow-400">10 FPS</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center text-sm">
                        <span>CNN-LSTM</span>
                        <span className="font-medium text-red-400">4 FPS</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Vision Transformer (ViT)</span>
                        <span className="font-medium text-red-400">3 FPS</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-300 mb-3">CPU Performance</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-center text-sm">
                        <span>MesoNet (Original)</span>
                        <span className="font-medium text-yellow-400">8 FPS</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Improved MesoNet</span>
                        <span className="font-medium text-yellow-400">6 FPS</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center text-sm">
                        <span>EfficientNet-B0</span>
                        <span className="font-medium text-red-400">3 FPS</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Xception</span>
                        <span className="font-medium text-red-400">2 FPS</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center text-sm">
                        <span>CNN-LSTM</span>
                        <span className="font-medium text-red-400">0.8 FPS</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Vision Transformer (ViT)</span>
                        <span className="font-medium text-red-400">0.5 FPS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModelComparison;