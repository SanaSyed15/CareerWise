import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Quiz from './components/Quiz';
import Recommendations from './components/Recommendations';
import JobTrends from './components/JobTrends';
import Visualization from './components/Visualization';
import Profile from './components/Profile';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/features" element={<Features />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/job-trends" element={<JobTrends />} />
        <Route path="/visualization" element={<Visualization />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
