import React from 'react'

const Dashboard = ({ setCurrentPage }) => {
  return (
    <div className="dashboard">
      <h2>Welcome to Little Banker</h2>
      <p>Learn about money and become a finance superhero!</p>
      <div className="dashboard-cards">
        <div className="card" onClick={() => setCurrentPage('quiz')}>
          <h3>Quiz Challenge</h3>
          <p>Test your money knowledge and earn coins!</p>
          <span role="img" aria-label="quiz">❓</span>
        </div>
        <div className="card" onClick={() => setCurrentPage('simulation')}>
          <h3>Money Management Game</h3>
          <p>Learn to save and spend wisely!</p>
          <span role="img" aria-label="game">🎮</span>
        </div>
      </div>
    </div>
  )
}

export default Dashboard