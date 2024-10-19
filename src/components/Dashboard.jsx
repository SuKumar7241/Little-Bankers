import React from 'react';
import './Dashboard.css';

const Dashboard = ({ setCurrentPage }) => {
  return (
    <div className="dashboard">
      <div className="parallax-bg"></div>
      <h2 className="animated-title">Welcome to Little Bankers</h2>
      <p className="subtitle">Empowering young minds with financial wisdom</p>
      <div className="dashboard-cards">
        <div className="card5" onClick={() => setCurrentPage('quiz')}>
          <div className="card-content">
            <h3>Quiz Challenge</h3>
            <p>Test your financial knowledge and earn rewards</p>
          </div>
          <div className="card-icon">
            <span role="img" aria-label="quiz">❓</span> {/* Question mark */}
          </div>
        </div>
        <div className="card5" onClick={() => setCurrentPage('simulation')}>
          <div className="card-content">
            <h3>Money Management Simulation</h3>
            <p>Practice budgeting and investment strategies</p>
          </div>
          <div className="card-icon">
            <span role="img" aria-label="money">🐷</span> {/* Pig face emoji */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
