import React from "react";
import "./button.css";

const Button = ({text, handleClick}) => (
    <>
        <button className="Button" onClick={handleClick}>
        {text}
        </button>
    </>
)

export const FeedbackButtons = ({handleClick}) => (
    <div id="feedbackDiv">
      <h2>Give feedback</h2>
      <div>
        <Button text="good" handleClick={handleClick("Good")} />
        <Button text="neutral" handleClick={handleClick("Neutral")} />
        <Button text="bad" handleClick={handleClick("Bad")} />
      </div>
    </div>
)