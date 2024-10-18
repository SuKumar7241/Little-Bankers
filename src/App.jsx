import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Quiz from './components/Quiz'
import SimulationGame from './components/SimulationGame'

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [totalCoins, setTotalCoins] = useState(0)

  const handleEarnCoins = (amount) => {
    setTotalCoins(prevCoins => prevCoins + amount)
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
  )
}

export default App