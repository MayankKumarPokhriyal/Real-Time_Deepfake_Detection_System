import React from 'react';
import { Download, Trash2, ExternalLink, ShieldAlert, ShieldCheck } from 'lucide-react';

interface DetectionRecord {
  id: string;
  timestamp: string;
  result: boolean;
  probability: number;
  confidence: number;
  model: string;
  source: 'webcam' | 'upload';
  filename?: string;
}

interface HistoryTableProps {
  records: DetectionRecord[];
  onDelete: (id: string) => void;
  onDownload: (id: string) => void;
  onView: (id: string) => void;
}

const HistoryTable: React.FC<HistoryTableProps> = ({
  records,
  onDelete,
  onDownload,
  onView
}) => {
  if (records.length === 0) {
    return (
      <div className="bg-gray-800 rounded-lg p-8 text-center">
        <p className="text-gray-400">No detection history available.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Date & Time
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Result
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Confidence
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Model
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Source
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-700">
            {records.map((record) => (
              <tr key={record.id} className="hover:bg-gray-750">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {record.timestamp}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {record.result ? (
                      <>
                        <ShieldAlert className="h-5 w-5 text-red-500 mr-2" />
                        <span className="text-sm text-red-400">Deepfake</span>
                      </>
                    ) : (
                      <>
                        <ShieldCheck className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-sm text-green-400">Authentic</span>
                      </>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <div className="flex items-center">
                    <div className="w-16 bg-gray-600 rounded-full h-2 mr-2">
                      <div 
                        className={`h-2 rounded-full ${record.confidence > 0.8 ? 'bg-green-500' : record.confidence > 0.6 ? 'bg-yellow-500' : 'bg-red-500'}`}
                        style={{ width: `${record.confidence * 100}%` }}
                      ></div>
                    </div>
                    {Math.round(record.confidence * 100)}%
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {record.model}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    record.source === 'webcam' 
                      ? 'bg-blue-900 text-blue-300' 
                      : 'bg-purple-900 text-purple-300'
                  }`}>
                    {record.source === 'webcam' ? 'Webcam' : record.filename || 'Upload'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-right">
                  <button
                    onClick={() => onView(record.id)}
                    className="text-blue-400 hover:text-blue-300 mr-3 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => onDownload(record.id)}
                    className="text-green-400 hover:text-green-300 mr-3 transition-colors"
                  >
                    <Download className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => onDelete(record.id)}
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-4 border-t border-gray-700 flex justify-between items-center">
        <div className="text-sm text-gray-400">
          Showing <span className="font-medium">{records.length}</span> results
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm">
            Export All
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm">
            Clear History
          </button>
        </div>
      </div>
    </div>
  );
};

export default HistoryTable;