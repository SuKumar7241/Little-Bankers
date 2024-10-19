import React, { useState, useEffect } from 'react';
import './Quiz.css'; // Ensure to import the CSS file

const Quiz = ({ onComplete, onEarnCoins }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10); // Set timer for 10 seconds
  const [feedback, setFeedback] = useState('');
  const [feedbackColor, setFeedbackColor] = useState('');
  const [waitingForNext, setWaitingForNext] = useState(false); // Track if waiting for the next button
  const [answered, setAnswered] = useState(false); // Track if the question has been answered

  const questions = [
    {
      question: "What is the purpose of a budget?",
      options: ["To spend more money", "To plan how to use your money", "To earn extra money", "To save receipts"],
      correctAnswer: 1,
    },
    {
      question: "Which of these is considered a need?",
      options: ["Video games", "Food", "Toys", "Concert tickets"],
      correctAnswer: 1,
    },
    // ... Add remaining questions here ...
  ];

  useEffect(() => {
    if (timeLeft > 0 && !showScore && !waitingForNext) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer); // Clear the timer on component unmount
    } else if (timeLeft === 0) {
      handleAnswerClick(-1); // Handle timeout by selecting an incorrect answer
    }
  }, [timeLeft, showScore, waitingForNext]);

  const handleAnswerClick = (selectedAnswer) => {
    if (answered) return; // Prevent further clicks if already answered

    const correctAnswer = questions[currentQuestion].correctAnswer;
    const points = 5; // Points awarded for a correct answer

    // Check if the answer is correct
    if (selectedAnswer === correctAnswer) {
      setScore((prevScore) => prevScore + points); // Update score immediately
      onEarnCoins(points); // Update total coins in App.jsx
      setFeedback(`Correct! You earned ${points} points.`);
      setFeedbackColor('green');
    } else {
      setFeedback(`Incorrect. The correct answer is: ${questions[currentQuestion].options[correctAnswer]}. You earned 0 points.`);
      setFeedbackColor('red');
    }

    setAnswered(true); // Mark this question as answered
    setWaitingForNext(true); // Show the Next button
    setTimeLeft(10); // Reset timer for next question
  };

  const moveToNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setWaitingForNext(false); // Reset waiting for the next button
      setFeedback(''); // Clear feedback after moving to the next question
      setAnswered(false); // Reset answered state for the new question
    } else {
      setShowScore(true);
      onComplete(score); // Call onComplete with the final score
    }
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          <h2>Quiz Complete!</h2>
          <p>You scored {score} out of {questions.length}!</p>
          <p>You earned a total of {score} coins!</p>
          <span role="img" aria-label="celebration" style={{ fontSize: '3rem' }}>
            🎉
          </span>
        </div>
      ) : (
        <>
          {/* Question section */}
          <div className="question-section">
            <div className="question-count">
              Question {currentQuestion + 1}/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].question}</div>
          </div>

          {/* Loading bar timer */}
          <div className="timer-container">
            <div className="loading-bar1" style={{ width: `${(timeLeft / 10) * 100}%`, height: "20px" }} />
            <div className="timer-text">{timeLeft}s</div>
          </div>

          <div className="answer-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerClick(index)}>
                {option}
              </button>
            ))}
          </div>

          {/* Feedback message */}
          {feedback && (
            <div style={{ color: feedbackColor, marginTop: '10px', fontWeight: 'bold' }}>
              {feedback}
            </div>
          )}

          {/* Next button */}
          {waitingForNext && (
            <button onClick={moveToNextQuestion} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px', color: 'white' }}>
              Next
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Quiz;
