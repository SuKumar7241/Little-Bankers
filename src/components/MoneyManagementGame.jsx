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
  // Add more questions as needed...
];

const MoneyManagementGame = ({ onEarnCoins }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [answerFeedback, setAnswerFeedback] = useState(null);
  const [answered, setAnswered] = useState(false); // New state to track if the question has been answered

  const handleAnswerClick = (selectedOption) => {
    if (answered) return; // Prevent further actions if already answered

    if (selectedOption.correct) {
      setScore(score + 1);
      onEarnCoins(5); // Increase total coins by 5 for a correct answer
      setAnswerFeedback("Correct!");
    } else {
      setAnswerFeedback(`Incorrect! The correct answer is: ${gameData[currentQuestion].options.find(option => option.correct).text}`);
    }
    
    setAnswered(true); // Mark question as answered
  };

  const goToNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < gameData.length) {
      setCurrentQuestion(nextQuestion);
      setAnswered(false); // Reset answered state for the next question
      setAnswerFeedback(null); // Reset feedback for next question
    } else {
      setShowScore(true);
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setAnswerFeedback(null);
    setAnswered(false); // Reset answered state
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
          <button onClick={restartGame} className="restart-button">
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
          {answerFeedback && (
            <div className="answer-feedback">
              <p>{answerFeedback}</p>
              <button onClick={goToNextQuestion} className="next-button">
                Next Question
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MoneyManagementGame;
