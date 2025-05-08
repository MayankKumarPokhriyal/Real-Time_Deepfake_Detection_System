import React, { useState } from 'react';
import { Camera, Upload, Check, AlertTriangle, Shield } from 'lucide-react';
import ModelSelector from './ModelSelector';

interface DetectionControlsProps {
  onDetect: () => void;
  onModelChange: (model: string) => void;
  isDetecting: boolean;
  detectionMode: 'webcam' | 'upload';
  setDetectionMode: (mode: 'webcam' | 'upload') => void;
}

const DetectionControls: React.FC<DetectionControlsProps> = ({
  onDetect,
  onModelChange,
  isDetecting,
  detectionMode,
  setDetectionMode
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <div className="flex flex-col space-y-6">
        <div className="bg-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-medium mb-4">Detection Mode</h3>
          <div className="flex space-x-4">
            <button
              className={`flex-1 py-3 px-4 rounded-md flex items-center justify-center gap-2 transition-colors ${
                detectionMode === 'webcam'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-600 text-gray-200 hover:bg-gray-500'
              }`}
              onClick={() => setDetectionMode('webcam')}
            >
              <Camera className="h-5 w-5" />
              <span>Webcam</span>
            </button>
            <button
              className={`flex-1 py-3 px-4 rounded-md flex items-center justify-center gap-2 transition-colors ${
                detectionMode === 'upload'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-600 text-gray-200 hover:bg-gray-500'
              }`}
              onClick={() => setDetectionMode('upload')}
            >
              <Upload className="h-5 w-5" />
              <span>Upload</span>
            </button>
          </div>
        </div>

        {detectionMode === 'upload' && (
          <div className="bg-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-medium mb-4">Upload Video</h3>
            <div className="border-2 border-dashed border-gray-500 rounded-lg p-6 text-center">
              <input
                type="file"
                accept="video/*,.mp4,.webm,.ogg"
                onChange={handleFileChange}
                className="hidden"
                id="video-upload"
              />
              <label
                htmlFor="video-upload"
                className="cursor-pointer flex flex-col items-center justify-center"
              >
                <Upload className="h-10 w-10 text-gray-400 mb-2" />
                <p className="text-sm text-gray-300 mb-1">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-400">MP4, WebM or Ogg (Max 100MB)</p>
                {selectedFile && (
                  <div className="mt-2 bg-gray-600 px-3 py-1 rounded-full flex items-center">
                    <Check className="h-4 w-4 text-green-400 mr-1" />
                    <span className="text-sm">{selectedFile.name}</span>
                  </div>
                )}
              </label>
            </div>
          </div>
        )}

        <div className="bg-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-medium mb-4">Model Selection</h3>
          <ModelSelector onModelChange={onModelChange} />
          <div className="mt-4 text-xs text-gray-400 flex items-start">
            <AlertTriangle className="h-4 w-4 mr-1 flex-shrink-0 mt-0.5" />
            <p>
              More accurate models may require more processing time and resources. For real-time detection on low-power devices, consider using lighter models.
            </p>
          </div>
        </div>

        <button
          onClick={onDetect}
          disabled={isDetecting || (detectionMode === 'upload' && !selectedFile)}
          className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 ${
            isDetecting || (detectionMode === 'upload' && !selectedFile)
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white transition-colors'
          }`}
        >
          {isDetecting ? (
            <>
              <div className="h-5 w-5 border-t-2 border-r-2 border-white rounded-full animate-spin"></div>
              <span>Analyzing...</span>
            </>
          ) : (
            <>
              <Shield className="h-5 w-5" />
              <span>Start Detection</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default DetectionControls;