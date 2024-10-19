import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Quiz from './components/Quiz';
import FinancialAcademyGame from './components/FinancialAcademyGame';
import StockMarketGame from './components/StockMarketGame'; // Import your StockMarketGame component
import LoadingPage from './components/LoadingPage';

const App = () => {
  const [totalCoins, setTotalCoins] = useState(0);

  const handleEarnCoins = (amount) => {
    setTotalCoins(prevCoins => prevCoins + amount);
  };

  const handleLoadingComplete = () => {
    // Navigate to dashboard or set an appropriate state
  };

  const handleQuizComplete = (score) => {
    // Handle quiz completion logic
  };

  return (
    <Router>
      <div className="app">
        <Header totalCoins={totalCoins} />
        <main>
          <Routes>
            <Route path="/" element={<LoadingPage onLoadingComplete={handleLoadingComplete} />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/quiz" element={<Quiz onComplete={handleQuizComplete} onEarnCoins={handleEarnCoins} />} />
            <Route path="/simulation" element={<FinancialAcademyGame />} />
            <Route path="/stock-market-game" element={<StockMarketGame totalCoins={totalCoins}/>} /> {/* Add route for StockMarketGame */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
