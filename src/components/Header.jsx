import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Header = ({ totalCoins }) => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <header>
      <h1>Little Bankers</h1>
      <nav>
        <button onClick={() => navigate('/dashboard')}>Home</button> {/* Navigate to Dashboard */}
        <button onClick={() => navigate('/quiz')}>Quiz</button>
        <button onClick={() => navigate('/simulation')}>Money Game</button>
      </nav>
      <div className="coin-counter">
        <span role="img" aria-label="coin">🪙</span> {totalCoins}
      </div>
    </header>
  );
}

export default Header;
