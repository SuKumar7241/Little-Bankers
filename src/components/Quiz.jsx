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
    {
      question: "What should you do if you want to save money for a big purchase?",
      options: ["Spend all your money", "Save little by little", "Borrow money from friends", "Wait for a gift"],
      correctAnswer: 1,
    },
    {
      question: "What does 'interest' mean in terms of saving money?",
      options: ["Money you lose when you save", "Extra money you earn from saving", "A fee for spending", "A type of tax"],
      correctAnswer: 1,
    },
    {
      question: "If you have $10 and want to buy something that costs $15, what should you do?",
      options: ["Borrow $5", "Save more money", "Spend the $10", "Ask for a discount"],
      correctAnswer: 1,
    },
    {
      question: "Which of these is a good financial habit?",
      options: ["Spending all your money", "Saving and planning", "Borrowing from others", "Ignoring your budget"],
      correctAnswer: 1,
    },
    {
      question: "What does 'investing' mean?",
      options: ["Spending money on fun things", "Putting money somewhere it can grow", "Giving money to friends", "Lending money for free"],
      correctAnswer: 1,
    },
    {
      question: "Why is it important to have an emergency fund?",
      options: ["For a surprise gift", "To cover unexpected expenses", "To lend to friends", "For buying new clothes"],
      correctAnswer: 1,
    },
    {
      question: "What is the best way to save for a long-term goal?",
      options: ["Spend now, save later", "Save a little each month", "Wait until you get more money", "Borrow to make up the difference"],
      correctAnswer: 1,
    },
    {
      question: "Which of these is an example of a 'want'?",
      options: ["Rent", "Groceries", "Clothing", "Video games"],
      correctAnswer: 3,
    },
    {
      question: "What should you do if you accidentally overspend your budget?",
      options: ["Ignore it", "Cut back on future spending", "Borrow money", "Stop saving"],
      correctAnswer: 1,
    },
    {
      question: "What is one benefit of saving your money in a bank?",
      options: ["Your money can grow with interest", "It becomes harder to spend", "You get to keep all the cash", "You avoid paying taxes"],
      correctAnswer: 0,
    },
    {
      question: "Which of these is a way to keep your money safe?",
      options: ["Carrying it in your pocket", "Keeping it in a bank", "Lending it to friends", "Hiding it at home"],
      correctAnswer: 1,
    },
    {
      question: "What is the safest way to make a large purchase?",
      options: ["Use a credit card and not worry", "Save until you can afford it", "Borrow from friends", "Spend all your savings at once"],
      correctAnswer: 1,
    },
    {
      question: "What should you do with money that’s left over after paying for needs?",
      options: ["Spend it all on wants", "Save or invest it", "Give it away", "Buy more wants"],
      correctAnswer: 1,
    },
    {
      question: "What is a smart way to handle money when you get your first job?",
      options: ["Spend it all on fun things", "Save some, spend some, and invest", "Borrow money for big purchases", "Don’t worry about saving"],
      correctAnswer: 1,
    },
    {
      question: "What is a good financial goal to have?",
      options: ["Saving for a rainy day", "Spending as much as possible", "Borrowing money for every purchase", "Ignoring your budget"],
      correctAnswer: 0,
    },
    {
      question: "What should you do if you want to buy something but don’t have enough money?",
      options: ["Save up for it", "Borrow from others", "Spend what you have", "Ignore your budget"],
      correctAnswer: 0,
    },
    {
      question: "Why should you avoid borrowing too much money?",
      options: ["You’ll have to pay it back with interest", "You don’t need it", "It makes you rich", "You’ll lose it all"],
      correctAnswer: 0,
    },
    {
      question: "How can you make sure you’re making smart money decisions?",
      options: ["Spend everything now", "Plan, budget, and save regularly", "Borrow and spend", "Ignore budgeting"],
      correctAnswer: 1,
    },
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

    setWaitingForNext(true); // Set to true to show the Next button
    setTimeLeft(10); // Reset timer for next question
  };

  const moveToNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setWaitingForNext(false); // Reset waiting for the next button
      setFeedback(''); // Clear feedback after moving to the next question
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
            <button onClick={moveToNextQuestion} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
              Next
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Quiz;
