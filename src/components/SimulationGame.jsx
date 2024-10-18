import React, { useState, useEffect } from 'react'

const SimulationGame = ({ onEarn }) => {
  const [money, setMoney] = useState(10)
  const [day, setDay] = useState(1)
  const [savings, setSavings] = useState(0)

  useEffect(() => {
    if (day % 7 === 0) {
      const interest = Math.floor(savings * 0.1)
      setSavings(prevSavings => prevSavings + interest)
      alert(`You earned ${interest} coins in interest on your savings!`)
    }
  }, [day, savings])

  const earnMoney = () => {
    const earned = 5
    setMoney(prevMoney => prevMoney + earned)
    onEarn(earned)
  }

  const spendMoney = () => {
    if (money >= 2) {
      setMoney(prevMoney => prevMoney - 2)
    } else {
      alert("You don't have enough money!")
    }
  }

  const saveMoney = () => {
    if (money >= 5) {
      setMoney(prevMoney => prevMoney - 5)
      setSavings(prevSavings => prevSavings + 5)
    } else {
      alert("You need at least $5 to save!")
    }
  }

  const nextDay = () => {
    setDay(prevDay => prevDay + 1)
    setMoney(prevMoney => prevMoney + 1) // Daily allowance
    onEarn(1)
  }

  return (
    <div className="simulation-game">
      <h2>Money Management Game</h2>
      <div className="game-info">
        <p>Day: {day}</p>
        <p>Money: ${money}</p>
        <p>Savings: ${savings}</p>
      </div>
      <div className="game-actions">
        <button onClick={earnMoney}>Do Chores (+$5)</button>
        <button onClick={spendMoney}>Buy Candy (-$2)</button>
        <button onClick={saveMoney}>Save Money ($5)</button>
        <button onClick={nextDay}>Next Day</button>
      </div>
    </div>
  )
}

export default SimulationGame