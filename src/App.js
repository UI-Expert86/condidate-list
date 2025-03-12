import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import Dashboard from './pages/Dashboard';
import CandidateDetail from './pages/CandidateDetail';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 bg-[#D0E4FE]">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/candidate/:id" element={<CandidateDetail />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;