import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DetectionPage from './pages/DetectionPage';
import ComparisonPage from './pages/ComparisonPage';
import HistoryPage from './pages/HistoryPage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<DetectionPage />} />
          <Route path="/comparison" element={<ComparisonPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;