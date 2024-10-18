import React from 'react'

const Header = ({ setCurrentPage, totalCoins }) => {
  return (
    <header>
      <h1>KidsCash Academy</h1>
      <nav>
        <button onClick={() => setCurrentPage('dashboard')}>Home</button>
        <button onClick={() => setCurrentPage('quiz')}>Quiz</button>
        <button onClick={() => setCurrentPage('simulation')}>Money Game</button>
      </nav>
      <div className="coin-counter">
        <span role="img" aria-label="coin">🪙</span> {totalCoins}
      </div>
    </header>
  )
}

export default Header