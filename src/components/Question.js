import React, { useState, useEffect } from 'react';

const Question = (props) => {
  const [answer, setAnswer] = useState("");
  const [answerColor, setAnswerColor] = useState("");

  useEffect(() => {
    if (props.revealed)
      setAnswer(props.correctAnswer);
  },[props.revealed,props.correctAnswer]);

  useEffect(() => {
    if (answer === props.correctAnswer) setAnswerColor("green");
    else setAnswerColor("black")
  },[answer,props.correctAnswer]);

  return (
    <div className="row question">
      <h1>{props.question}</h1>
      <input
        className="answer-input"
        type="text"
        placeholder={props.placeholder}
        maxlength="9"
        value={answer}
        onChange={(event) => {
          const { value } = event.target;
          setAnswer(value);
        }}
      />
      <div className="answer-map">
        <h1 style={{"color":answerColor}}>{answer}</h1>
      </div>
    </div>
  )
}
  
export default Question;