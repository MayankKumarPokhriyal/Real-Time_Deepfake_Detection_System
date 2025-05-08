import React, { useRef, useEffect, useState } from 'react';
import { Camera, CameraOff } from 'lucide-react';
import * as tf from '@tensorflow/tfjs';
import * as faceDetection from '@tensorflow-models/face-detection';

interface WebcamCaptureProps {
  isActive: boolean;
}

const WebcamCapture: React.FC<WebcamCaptureProps> = ({ isActive }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [facesDetected, setFacesDetected] = useState<faceDetection.DetectedFace[]>([]);
  const [detector, setDetector] = useState<faceDetection.FaceDetector | null>(null);

  // Initialize face detector
  useEffect(() => {
    const initializeDetector = async () => {
      await tf.ready();
      const model = faceDetection.SupportedModels.MediaPipeFaceDetector;
      const detector = await faceDetection.createDetector(model, {
        runtime: 'tfjs',
        maxFaces: 1
      });
      setDetector(detector);
    };

    initializeDetector();
  }, []);

  useEffect(() => {
    if (!isActive) return;

    let stream: MediaStream | null = null;
    let animationFrameId: number;

    const startWebcam = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 640 },
            height: { ideal: 480 },
            facingMode: 'user'
          }
        });
        
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setHasPermission(true);

          // Wait for video to be ready
          videoRef.current.onloadedmetadata = () => {
            if (videoRef.current && canvasRef.current) {
              // Set canvas dimensions to match video
              canvasRef.current.width = videoRef.current.videoWidth || 640;
              canvasRef.current.height = videoRef.current.videoHeight || 480;
            }
          };
        }
      } catch (err) {
        console.error('Error accessing webcam:', err);
        setHasPermission(false);
      }
    };

    const detectFaces = async () => {
      if (!detector || !videoRef.current || !canvasRef.current || videoRef.current.readyState < 2) {
        animationFrameId = requestAnimationFrame(detectFaces);
        return;
      }

      try {
        const faces = await detector.estimateFaces(videoRef.current);
        setFacesDetected(faces);

        // Draw face detection boxes
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        if (!ctx) {
          console.error('Could not get 2D context from canvas');
          return;
        }

        // Clear previous drawings
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        faces.forEach(face => {
          const box = face.box;
          ctx.strokeStyle = '#3B82F6';
          ctx.lineWidth = 2;
          ctx.strokeRect(box.xMin, box.yMin, box.width, box.height);
          
          // Draw label
          ctx.fillStyle = '#3B82F6';
          ctx.fillRect(box.xMin, box.yMin - 20, 45, 20);
          ctx.fillStyle = 'white';
          ctx.font = '12px sans-serif';
          ctx.fillText('Face', box.xMin + 5, box.yMin - 5);
        });
      } catch (error) {
        console.error('Error detecting faces:', error);
      }

      animationFrameId = requestAnimationFrame(detectFaces);
    };

    startWebcam();
    detectFaces();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [isActive, detector]);

  if (hasPermission === false) {
    return (
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col justify-center items-center h-full">
        <CameraOff className="h-16 w-16 text-red-500 mb-4" />
        <h3 className="text-xl font-semibold text-red-400 mb-2">Camera Access Denied</h3>
        <p className="text-gray-400 text-center">
          Please allow camera access to use the webcam detection feature.
        </p>
        <button 
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <div className="relative">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-auto rounded-lg bg-gray-900"
          style={{ display: isActive ? 'block' : 'none' }}
        />
        <canvas 
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
        />
        {!isActive && (
          <div className="bg-gray-900 w-full aspect-video rounded-lg flex flex-col justify-center items-center">
            <Camera className="h-16 w-16 text-gray-700 mb-4" />
            <p className="text-gray-600">Webcam is turned off</p>
          </div>
        )}
        {hasPermission === null && isActive && (
          <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center rounded-lg">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
              <p className="text-gray-300">Accessing webcam...</p>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-400">
          {facesDetected.length > 0 ? (
            <span className="text-green-400">Face detected</span>
          ) : (
            <span>No face detected</span>
          )}
        </div>
        <div className="text-sm text-gray-400">
          640 x 480
        </div>
      </div>
    </div>
  );
};

export default WebcamCapture;