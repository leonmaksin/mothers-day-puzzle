import './App.css';
import React, { useState, useEffect } from 'react';
import Question from './components/Question.js';

const url = "https://www.google.com/calendar/render?action=TEMPLATE&text=Mama+%3C%3E+Leon+Lunch&details=Taking+you+out+to+lunch+at+Wise+Cafe+tomorrow+if+you%27re+free+%3A%29&location=35+Neptune+Ave%2C+Brooklyn%2C+NY+11235&dates=20220509T160000Z%2F20220509T180000Z";

function App() {
  const [code, setCode] = useState("");
  const [revealed, setRevealed] = useState(false);

  const submitCode = async () => {
    if (code === "violet") window.open(url,'_blank');
    else alert('incorrect, please try again\nhint: what do the numbers mean?');
  }

  const revealAnswers = async () => {
    setRevealed(true);
  }

  useEffect(() => {
    if (revealed)
      setRevealed(false);
  },[revealed]);

  return (
    <div className="App">
      <div className="col">
        <button
          className="reveal-button"
          onClick={ revealAnswers }
        >
          Reveal Answers
        </button>
        <button
          className="submit-button"
          onClick={ submitCode }
        >
          Submit
        </button>
        <div className="row question">
          <h1 className="code">Crack the code: 864839<br></br>Put your answer in the box</h1>
          <input
            className="answer-input"
            type="text"
            placeholder="crack the code :)"
            value={code}
            onChange={(event) => {
              const { value } = event.target;
              setCode(value);
            }}
          />
          <div className="answer-map">
            <h1>123456789</h1>
          </div>
        </div>
        
        <Question
          question="David loves doing activites _________ly"
          placeholder="i________"
          correctAnswer="impulsive"
          revealed={revealed}
        />
        
        <Question
          question="Ilan's favorite building activity is ________"
          placeholder="r_______"
          correctAnswer="robotics"
          revealed={revealed}
        />
        
        <Question
          question="Leon's favorite childhood toy is ____"
          placeholder="l___"
          correctAnswer="lego"
          revealed={revealed}
        />
        
        <Question
          question="Abby walks Simba on the _________ by the beach"
          placeholder="b________"
          correctAnswer="boardwalk"
          revealed={revealed}
        />
        
        <Question
          question='Next year Daniela will be yelling "go big _____"'
          placeholder="g____"
          correctAnswer="green"
          revealed={revealed}
        />
        
        <Question
          question="Michael's favorite video game is _________"
          placeholder="m________"
          correctAnswer="minecraft"
          revealed={revealed}
        />

      </div>
      <div className="block"></div>
    </div>
  );
}

export default App;
