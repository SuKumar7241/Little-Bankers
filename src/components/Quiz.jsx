import React, { useState } from 'react'

const Quiz = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const questions = [
    {
      question: "What is a piggy bank used for?",
      options: ["Storing toys", "Saving money", "Cooking food", "Playing games"],
      correctAnswer: 1
    },
    {
      question: "Which of these is NOT a coin?",
      options: ["Penny", "Nickel", "Dollar", "Dime"],
      correctAnswer: 2
    },
    {
      question: "What do you call the money you earn from working?",
      options: ["Allowance", "Gift", "Salary", "Bonus"],
      correctAnswer: 2
    }
  ]

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
      onComplete(score * 5) // Award 5 coins per correct answer
    }
  }

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          <h2>Quiz Complete!</h2>
          <p>You scored {score} out of {questions.length}!</p>
          <p>You earned {score * 5} coins!</p>
          <span role="img" aria-label="celebration" style={{ fontSize: '3rem' }}>🎉</span>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              Question {currentQuestion + 1}/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].question}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerClick(index)}>
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Quiz