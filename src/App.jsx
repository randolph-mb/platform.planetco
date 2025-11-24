import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dashboard from './components/Dashboard';
import DataAnalysisPage from './pages/DataAnalysisPage';
import FineTuningPage from './pages/FineTuningPage';
import ChatbotPage from './pages/ChatbotPage';
import VoiceAgentPage from './pages/VoiceAgentPage';
import AnalyticsPage from './pages/AnalyticsPage';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-slate-50 font-sans">
        <Sidebar />
        <div className="flex-1 md:ml-64 flex flex-col">
          <Header />
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/data-analysis" element={<DataAnalysisPage />} />
              <Route path="/fine-tuning" element={<FineTuningPage />} />
              <Route path="/chatbot" element={<ChatbotPage />} />
              <Route path="/voice-agent" element={<VoiceAgentPage />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
