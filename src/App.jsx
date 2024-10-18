import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Quiz from './components/Quiz';
import SimulationGame from './components/SimulationGame';
import LoadingPage from './components/LoadingPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('loading');
  const [totalCoins, setTotalCoins] = useState(0);

  const handleEarnCoins = (amount) => {
    setTotalCoins(prevCoins => prevCoins + amount);
  };

  const handleLoadingComplete = () => {
    setCurrentPage('dashboard');
  };

  if (currentPage === 'loading') {
    return <LoadingPage onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="app">
      <Header setCurrentPage={setCurrentPage} totalCoins={totalCoins} />
      <main>
        {currentPage === 'dashboard' && <Dashboard setCurrentPage={setCurrentPage} />}
        {currentPage === 'quiz' && <Quiz onComplete={handleEarnCoins} />}
        {currentPage === 'simulation' && <SimulationGame onEarn={handleEarnCoins} />}
      </main>
    </div>
  );
};

export default App;
