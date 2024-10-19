import React, { useState } from 'react';
import { Coins } from 'lucide-react';
import GameCard from './GameCard';
import './MoneyManagementGame.css';

const gameData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1574607383476-f517f260d30b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGlnZ3klMjBiYW5rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    question: "What is this object used for?",
    options: [
      { id: 1, text: "Saving money", correct: true },
      { id: 2, text: "Cooking food", correct: false },
      { id: 3, text: "Playing music", correct: false },
      { id: 4, text: "Telling time", correct: false },
    ],
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3JlZGl0JTIwY2FyZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    question: "What is this item called?",
    options: [
      { id: 1, text: "Credit card", correct: true },
      { id: 2, text: "Book", correct: false },
      { id: 3, text: "Phone", correct: false },
      { id: 4, text: "Toy", correct: false },
    ],
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXRtfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    question: "What can you do with this machine?",
    options: [
      { id: 1, text: "Get money", correct: true },
      { id: 2, text: "Buy groceries", correct: false },
      { id: 3, text: "Watch movies", correct: false },
      { id: 4, text: "Make phone calls", correct: false },
    ],
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2FsbGV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    question: "What do you keep in this item?",
    options: [
      { id: 1, text: "Money and cards", correct: true },
      { id: 2, text: "Food", correct: false },
      { id: 3, text: "Clothes", correct: false },
      { id: 4, text: "Toys", correct: false },
    ],
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9uZXl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    question: "What are these paper items called?",
    options: [
      { id: 1, text: "Money", correct: true },
      { id: 2, text: "Leaves", correct: false },
      { id: 3, text: "Tickets", correct: false },
      { id: 4, text: "Cards", correct: false },
    ],
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9uZXklMjBqYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    question: "What is this jar used for?",
    options: [
      { id: 1, text: "Saving money", correct: true },
      { id: 2, text: "Storing cookies", correct: false },
      { id: 3, text: "Keeping toys", correct: false },
      { id: 4, text: "Growing plants", correct: false },
    ],
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzaCUyMHJlZ2lzdGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    question: "What is this machine used for in stores?",
    options: [
      { id: 1, text: "Handling money", correct: true },
      { id: 2, text: "Making food", correct: false },
      { id: 3, text: "Cleaning clothes", correct: false },
      { id: 4, text: "Playing games", correct: false },
    ],
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1621981386829-9b458a2cddde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29pbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    question: "What are these round metal objects?",
    options: [
      { id: 1, text: "Coins", correct: true },
      { id: 2, text: "Buttons", correct: false },
      { id: 3, text: "Toys", correct: false },
      { id: 4, text: "Candies", correct: false },
    ],
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFua3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    question: "What is this building called?",
    options: [
      { id: 1, text: "Bank", correct: true },
      { id: 2, text: "School", correct: false },
      { id: 3, text: "Hospital", correct: false },
      { id: 4, text: "Restaurant", correct: false },
    ],
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b25saW5lJTIwYmFua2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    question: "What can you do with this device?",
    options: [
      { id: 1, text: "Online banking", correct: true },
      { id: 2, text: "Cook food", correct: false },
      { id: 3, text: "Drive a car", correct: false },
      { id: 4, text: "Play sports", correct: false },
    ],
  },
];



const MoneyManagementGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption.correct) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < gameData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="game-container">
      <h1 className="game-title">
        <Coins className="game-icon" /> Money Management Game
      </h1>
      {showScore ? (
        <div className="score-card">
          <h2 className="score-title">Game Over!</h2>
          <p className="score-text">
            You scored {score} out of {gameData.length}
          </p>
          <button
            onClick={restartGame}
            className="restart-button"
          >
            Play Again
          </button>
        </div>
      ) : (
        <>
          <div className="question-counter">
            Question {currentQuestion + 1} of {gameData.length}
          </div>
          <GameCard
            gameData={gameData[currentQuestion]}
            onAnswerClick={handleAnswerClick}
          />
        </>
      )}
    </div>
  );
};

export default MoneyManagementGame;