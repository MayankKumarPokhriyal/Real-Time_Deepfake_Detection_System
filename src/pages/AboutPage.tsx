import React from 'react';
import { Shield, Cpu, Database, BookOpen, Code } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2 flex items-center justify-center">
          <Shield className="h-8 w-8 text-blue-500 mr-2" />
          <span>About DeepGuard</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Learn more about our real-time deepfake detection system, how it works, and the technology behind it.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="mb-4 flex items-center">
            <Shield className="h-6 w-6 text-blue-500 mr-2" />
            <h2 className="text-xl font-semibold">About the Project</h2>
          </div>
          <p className="text-gray-300 mb-4">
            DeepGuard is an advanced deepfake detection system designed to identify AI-generated or manipulated facial content in images and videos. Using state-of-the-art deep learning models, DeepGuard provides real-time analysis of media content to determine if it has been synthetically altered.
          </p>
          <p className="text-gray-300 mb-4">
            The system can be used through a simple webcam interface or by uploading video files, making it accessible for a wide range of applications including:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
            <li>Media verification for journalists</li>
            <li>Social media content moderation</li>
            <li>Personal verification of suspicious content</li>
            <li>Research on deepfake detection techniques</li>
            <li>Educational demonstrations</li>
          </ul>
          <p className="text-gray-300">
            DeepGuard is continuously improved to keep pace with advancements in deepfake generation technology.
          </p>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="mb-4 flex items-center">
            <Cpu className="h-6 w-6 text-blue-500 mr-2" />
            <h2 className="text-xl font-semibold">Technical Approach</h2>
          </div>
          <p className="text-gray-300 mb-4">
            DeepGuard implements and benchmarks multiple state-of-the-art models for deepfake detection:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><span className="font-medium">MesoNet:</span> Lightweight CNN specifically designed for deepfake detection</li>
            <li><span className="font-medium">Improved MesoNet:</span> Enhanced architecture with attention mechanisms</li>
            <li><span className="font-medium">Xception:</span> Modified deep CNN with depthwise separable convolutions</li>
            <li><span className="font-medium">EfficientNet-B0:</span> Scaled CNN with compound coefficient optimization</li>
            <li><span className="font-medium">Vision Transformer (ViT):</span> Transformer-based approach for image analysis</li>
            <li><span className="font-medium">CNN-LSTM:</span> Hybrid model capturing both spatial and temporal features</li>
          </ul>
          <p className="text-gray-300">
            Each model has been thoroughly evaluated on multiple deepfake datasets, including the Microsoft FaceSynthetics Dataset, to ensure robust performance across different types of manipulations.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="mb-4 flex items-center">
            <Database className="h-6 w-6 text-blue-500 mr-2" />
            <h2 className="text-xl font-semibold">Training Data</h2>
          </div>
          <p className="text-gray-300 mb-4">
            The models are trained on a diverse set of datasets:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Microsoft FaceSynthetics Dataset</li>
            <li>FaceForensics++</li>
            <li>Deepfake Detection Challenge Dataset</li>
            <li>Celeb-DF</li>
            <li>Custom balanced dataset of real and synthetic media</li>
          </ul>
          <p className="text-gray-300 mt-4">
            Using diverse training data ensures the models can detect various deepfake generation techniques and are robust to different lighting conditions, angles, and video qualities.
          </p>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="mb-4 flex items-center">
            <Code className="h-6 w-6 text-blue-500 mr-2" />
            <h2 className="text-xl font-semibold">Implementation</h2>
          </div>
          <p className="text-gray-300 mb-4">
            DeepGuard is implemented as a web application with:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>React frontend for user interaction</li>
            <li>FastAPI backend for model serving</li>
            <li>OpenCV for image processing</li>
            <li>PyTorch for deep learning models</li>
            <li>Redis for caching detection results</li>
            <li>PostgreSQL for persistent storage</li>
          </ul>
          <p className="text-gray-300 mt-4">
            The system features real-time detection capabilities, report generation, and comprehensive model comparison tools to help users understand the strengths and limitations of each approach.
          </p>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="mb-4 flex items-center">
            <BookOpen className="h-6 w-6 text-blue-500 mr-2" />
            <h2 className="text-xl font-semibold">Research & References</h2>
          </div>
          <p className="text-gray-300 mb-4">
            DeepGuard builds on significant research in deepfake detection:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>MesoNet: A Compact Facial Video Forgery Detection Network</li>
            <li>Xception: Deep Learning with Depthwise Separable Convolutions</li>
            <li>EfficientNet: Rethinking Model Scaling for CNNs</li>
            <li>An Image is Worth 16x16 Words: Transformers for Image Recognition</li>
            <li>Recurrent Convolutional Strategies for Face Manipulation Detection in Videos</li>
          </ul>
          <p className="text-gray-300 mt-4">
            For a comprehensive bibliography of our research sources and additional reading, please visit our GitHub repository.
          </p>
        </div>
      </div>
      
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-white mb-1">How accurate is DeepGuard?</h3>
            <p className="text-gray-300">
              Depending on the selected model, DeepGuard achieves 83-95% accuracy on benchmark datasets. Performance may vary based on video quality, lighting conditions, and the sophistication of the deepfake technique used.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-1">Can DeepGuard work offline?</h3>
            <p className="text-gray-300">
              Yes, we offer a downloadable version with optimized models that can run entirely offline on your local machine, ensuring privacy and eliminating the need for an internet connection during analysis.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-1">What types of deepfakes can it detect?</h3>
            <p className="text-gray-300">
              DeepGuard can detect face swaps, face reenactment (manipulating facial expressions), full face synthesis (entirely AI-generated faces), and attribute manipulation (changing specific facial features).
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-1">Are my uploads stored or shared?</h3>
            <p className="text-gray-300">
              By default, uploaded videos are analyzed in memory and not persistently stored. Detection results can be saved to your history if you're logged in, but the original media is not retained unless you explicitly opt-in to help improve our models.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-1">What if a real video is flagged as fake?</h3>
            <p className="text-gray-300">
              False positives can occur, which is why we provide confidence scores with each detection. For critical applications, we recommend using multiple models and considering the context of the media before making final determinations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;