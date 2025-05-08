import React, { useRef, useState } from 'react';
import { Play, Pause, SkipBack } from 'lucide-react';

interface VideoUploadProps {
  file: File | null;
}

const VideoUpload: React.FC<VideoUploadProps> = ({ file }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
  };

  const resetVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setCurrentTime(0);
      if (!isPlaying) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!file) {
    return (
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col justify-center items-center h-full">
        <div className="text-gray-400 text-center">
          No video file selected. Please upload a video.
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <div className="relative">
        <video
          ref={videoRef}
          className="w-full h-auto rounded-lg bg-gray-900"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          src={URL.createObjectURL(file)}
        />
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <div className="flex items-center justify-between text-white mb-1">
            <span className="text-xs">{formatTime(currentTime)}</span>
            <span className="text-xs">{formatTime(duration)}</span>
          </div>
          <input
            type="range"
            min="0"
            max={duration || 100}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-1 bg-gray-500 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
      
      <div className="flex justify-center mt-4 space-x-4">
        <button 
          onClick={resetVideo}
          className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
        >
          <SkipBack className="h-5 w-5 text-gray-300" />
        </button>
        <button 
          onClick={togglePlay}
          className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
        >
          {isPlaying ? (
            <Pause className="h-5 w-5 text-white" />
          ) : (
            <Play className="h-5 w-5 text-white" />
          )}
        </button>
      </div>
      
      <div className="mt-4 text-sm text-gray-400">
        <p>File: {file.name}</p>
        <p>Size: {(file.size / (1024 * 1024)).toFixed(2)} MB</p>
      </div>
    </div>
  );
};

export default VideoUpload;