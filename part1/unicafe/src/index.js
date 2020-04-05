import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { FeedbackButtons } from "./button"
import { Statistics } from "./statistics"

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const stateFunctions = {
    setBad() {
      setBad(bad + 1);
    },
    setNeutral() {
      setNeutral(neutral + 1);
    },
    setGood() {
      setGood(good + 1);
    }
  };

  return (
    <div>
      <FeedbackButtons handleClick= {(feedback) => (() => stateFunctions["set"+feedback]())}/>
      <Statistics data={[good,neutral,bad]}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
);