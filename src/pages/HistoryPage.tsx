import React, { useState } from 'react';
import HistoryTable from '../components/HistoryTable';
import { History } from 'lucide-react';

const HistoryPage: React.FC = () => {
  // Mock detection records
  const [records, setRecords] = useState([
    {
      id: '1',
      timestamp: '2025-05-10 15:32:45',
      result: true, // true = deepfake, false = authentic
      probability: 0.92,
      confidence: 0.88,
      model: 'Vision Transformer (ViT)',
      source: 'upload' as const,
      filename: 'interview_clip.mp4'
    },
    {
      id: '2',
      timestamp: '2025-05-10 15:20:18',
      result: false,
      probability: 0.12,
      confidence: 0.95,
      model: 'EfficientNet-B0',
      source: 'webcam' as const
    },
    {
      id: '3',
      timestamp: '2025-05-09 18:45:10',
      result: true,
      probability: 0.87,
      confidence: 0.78,
      model: 'Xception',
      source: 'upload' as const,
      filename: 'political_speech.mp4'
    },
    {
      id: '4',
      timestamp: '2025-05-09 12:12:33',
      result: false,
      probability: 0.08,
      confidence: 0.92,
      model: 'Improved MesoNet',
      source: 'webcam' as const
    },
    {
      id: '5',
      timestamp: '2025-05-08 09:05:22',
      result: true,
      probability: 0.95,
      confidence: 0.91,
      model: 'CNN-LSTM',
      source: 'upload' as const,
      filename: 'social_media_clip.mp4'
    }
  ]);

  const handleDelete = (id: string) => {
    setRecords(records.filter(record => record.id !== id));
  };

  const handleDownload = (id: string) => {
    // In a real app, this would trigger a download of the report
    console.log(`Downloading report for detection ${id}`);
  };

  const handleView = (id: string) => {
    // In a real app, this would navigate to a detailed view
    console.log(`Viewing details for detection ${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2 flex items-center justify-center">
          <History className="h-8 w-8 text-blue-500 mr-2" />
          <span>Detection History</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          View past detection results, download reports, and manage your detection history.
        </p>
      </div>
      
      <div className="mb-6 flex justify-between items-center">
        <div className="flex items-center">
          <select 
            className="bg-gray-700 border border-gray-600 text-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Results</option>
            <option value="deepfake">Deepfakes Only</option>
            <option value="authentic">Authentic Only</option>
          </select>
          <select 
            className="bg-gray-700 border border-gray-600 text-gray-300 rounded-lg py-2 px-4 ml-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Sources</option>
            <option value="webcam">Webcam</option>
            <option value="upload">Uploaded</option>
          </select>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search history..."
            className="bg-gray-700 border border-gray-600 text-gray-300 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
          />
          <div className="absolute left-3 top-2.5 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
      
      <HistoryTable 
        records={records} 
        onDelete={handleDelete}
        onDownload={handleDownload}
        onView={handleView}
      />
    </div>
  );
};

export default HistoryPage;