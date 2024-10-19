import React from 'react';
import './Dashboard.css';

const Dashboard = ({ setCurrentPage }) => {
  return (
    <div className="dashboard">
      <div className="parallax-bg"></div>
      <h2 className="animated-title">Welcome to KidsCash Academy</h2>
      <p className="subtitle">Empowering young minds with financial wisdom</p>
      <div className="dashboard-cards">
        <div className="card" onClick={() => setCurrentPage('quiz')}>
          <div className="card-content">
            <h3>Quiz Challenge</h3>
            <p>Test your financial knowledge and earn rewards</p>
          </div>
          <div className="card-icon">
            <span role="img" aria-label="quiz">📚</span>
          </div>
          <div className="card-floating-items">
            <span className="floating-item">❓</span>
            <span className="floating-item">💡</span>
            <span className="floating-item">🏆</span>
          </div>
        </div>
        <div className="card" onClick={() => setCurrentPage('simulation')}>
          <div className="card-content">
            <h3>Money Management Simulation</h3>
            <p>Practice budgeting and investment strategies</p>
          </div>
          <div className="card-icon">
            <span role="img" aria-label="game">💼</span>
          </div>
          <div className="card-floating-items">
            <span className="floating-item">💰</span>
            <span className="floating-item">📊</span>
            <span className="floating-item">🚀</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
