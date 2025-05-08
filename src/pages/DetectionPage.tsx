import React, { useState } from 'react';
import WebcamCapture from '../components/WebcamCapture';
import VideoUpload from '../components/VideoUpload';
import DetectionControls from '../components/DetectionControls';
import DetectionResults from '../components/DetectionResults';
import { Shield } from 'lucide-react';

const DetectionPage: React.FC = () => {
  const [isDetecting, setIsDetecting] = useState(false);
  const [detectionMode, setDetectionMode] = useState<'webcam' | 'upload'>('webcam');
  const [selectedModel, setSelectedModel] = useState('mesonet');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [detectionResult, setDetectionResult] = useState<{
    isDeepfake: boolean;
    probability: number;
    confidenceScore: number;
    processingTime: number;
    faceDetected: boolean;
    modelUsed: string;
    timestamp: string;
  } | null>(null);

  const handleDetect = () => {
    setIsDetecting(true);
    
    // Simulate detection process with a delay
    setTimeout(() => {
      // Mock detection result
      const isDeepfake = Math.random() > 0.5;
      const probability = isDeepfake 
        ? 0.7 + (Math.random() * 0.3) 
        : 0.1 + (Math.random() * 0.2);
      
      const confidenceScore = 0.7 + (Math.random() * 0.3);
      const processingTime = Math.floor(100 + (Math.random() * 400));
      const faceDetected = true;
      
      // Get model name based on selectedModel
      let modelUsed = 'MesoNet (Original)';
      switch(selectedModel) {
        case 'mesonet-improved':
          modelUsed = 'Improved MesoNet';
          break;
        case 'xception':
          modelUsed = 'Xception';
          break;
        case 'efficientnet':
          modelUsed = 'EfficientNet-B0';
          break;
        case 'vit':
          modelUsed = 'Vision Transformer (ViT)';
          break;
        case 'cnn-lstm':
          modelUsed = 'CNN-LSTM';
          break;
        default:
          modelUsed = 'MesoNet (Original)';
      }
      
      const timestamp = new Date().toLocaleString();
      
      setDetectionResult({
        isDeepfake,
        probability,
        confidenceScore,
        processingTime,
        faceDetected,
        modelUsed,
        timestamp
      });
      
      setIsDetecting(false);
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2 flex items-center justify-center">
          <Shield className="h-8 w-8 text-blue-500 mr-2" />
          <span>Real-Time Deepfake Detection</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Upload a video or use your webcam to detect AI-generated deepfakes with our advanced neural network models.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {detectionMode === 'webcam' ? (
            <WebcamCapture isActive={true} />
          ) : (
            <VideoUpload file={selectedFile} />
          )}
        </div>
        
        <div>
          <DetectionControls 
            onDetect={handleDetect}
            onModelChange={setSelectedModel}
            isDetecting={isDetecting}
            detectionMode={detectionMode}
            setDetectionMode={setDetectionMode}
          />
        </div>
      </div>
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Detection Results</h2>
        <DetectionResults result={detectionResult} />
      </div>
    </div>
  );
};

export default DetectionPage;