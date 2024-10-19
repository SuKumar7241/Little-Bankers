import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './FinancialAcademyGame.css';

const FinancialAcademyGame = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const [selectedGame, setSelectedGame] = useState(null);

  const games = [
    {
      id: 'chores',
      title: 'Earn Money (Chores)',
      description: 'Earn money by doing household chores.',
      image: 'https://via.placeholder.com/300x200.png?text=Chores+Image',
      action: () => alert('Do Chores: Earn $5!'),
    },
    {
      id: 'spending',
      title: 'Spend Money (Candy)',
      description: 'Buy some candy for $2.',
      image: 'https://via.placeholder.com/300x200.png?text=Spending+Image',
      action: () => alert('Buy Candy: Spend $2!'),
    },
    {
      id: 'saving',
      title: 'Save Money',
      description: 'Save $5 and earn interest every 7 days.',
      image: 'https://via.placeholder.com/300x200.png?text=Saving+Image',
      action: () => alert('Save Money: Earn interest on $5!'),
    },
    {
      id: 'investing',
      title: 'Invest Money',
      description: 'Invest $10 and watch your money grow!',
      image: 'https://via.placeholder.com/300x200.png?text=Investing+Image',
      action: () => alert('Invest Money: Grow 20% every 30 days!'),
    },
    {
      id: 'allowance',
      title: 'Daily Allowance',
      description: 'Receive your daily allowance of $1.',
      image: 'https://via.placeholder.com/300x200.png?text=Allowance+Image',
      action: () => alert('Next Day: You received $1 allowance!'),
    },
  ];

  // Update the action for the first game to navigate to StockMarketGame
  games[0].action = () => navigate('/stock-market-game'); // Navigate to Stock Market Game

  const openGame = (game) => {
    setSelectedGame(game);
  };

  const closeGame = () => {
    setSelectedGame(null);
  };

  return (
    <div className="financial-academy-container">
      <h2>Financial Academy - Money Management Games</h2>

      {/* Game Grid with Images */}
      <div className="games-grid">
        {games.map((game) => (
          <div key={game.id} className="game-card" onClick={() => openGame(game)}>
            <img src={game.image} alt={game.title} className="game-image" />
            <div className="game-info">
              <h3>{game.title}</h3>
              <p>{game.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Selected Game */}
      {selectedGame && (
        <div className="game-modal">
          <div className="modal-content1">
            <h3>{selectedGame.title}</h3>
            <p>{selectedGame.description}</p>
            <button onClick={selectedGame.action}>Start Game</button>
            <button onClick={closeGame} className="close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinancialAcademyGame;
