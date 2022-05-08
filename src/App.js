import './App.css';
import React, { useState } from 'react';

const url = "https://www.google.com/calendar/render?action=TEMPLATE&text=Mama+%3C%3E+Leon+Lunch&details=Taking+you+out+to+lunch+at+Wise+Cafe+tomorrow+if+you%27re+free+%3A%29&location=35+Neptune+Ave%2C+Brooklyn%2C+NY+11235&dates=20220509T160000Z%2F20220509T180000Z";

function App() {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [code, setCode] = useState("");

  const submitCode = async () => {
    if (code === "violet") window.open(url,'_blank');
    else alert('incorrect, please try again\nhint: what do the numbers mean?');
  }

  return (
    <div className="App">
      <div className="col">
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

        <div className="row question">
          <h1>David loves doing activites _________ly</h1>
          <input
            className="answer-input"
            type="text"
            placeholder="i________"
            maxlength="9"
            value={answer2}
            onChange={(event) => {
              const { value } = event.target;
              setAnswer2(value);
            }}
          />
          <div className="answer-map">
            <h1>{answer2}</h1>
          </div>
        </div>

        <div className="row question">
          <h1>Ilan's favorite building activity is ________</h1>
          <input
            className="answer-input"
            type="text"
            placeholder="r_______"
            maxlength="9"
            value={answer1}
            onChange={(event) => {
              const { value } = event.target;
              setAnswer1(value);
            }}
          />
          <div className="answer-map">
            <h1>{answer1}</h1>
          </div>
        </div>

        <div className="row question">
          <h1>Leon's favorite childhood toy is ____</h1>
          <input
            className="answer-input"
            type="text"
            placeholder="l___"
            maxlength="9"
            value={answer4}
            onChange={(event) => {
              const { value } = event.target;
              setAnswer4(value);
            }}
          />
          <div className="answer-map">
            <h1>{answer4}</h1>
          </div>
        </div>

        <div className="row question">
          <h1>Abby walks Simba on the _________ by the beach</h1>
          <input
            className="answer-input"
            type="text"
            placeholder="b________"
            maxlength="9"
            value={answer5}
            onChange={(event) => {
              const { value } = event.target;
              setAnswer5(value);
            }}
          />
          <div className="answer-map">
            <h1>{answer5}</h1>
          </div>
        </div>

        <div className="row question">
          <h1 className="question-statement">Next year Daniela will be yelling "go big _____"</h1>
          <input
            className="answer-input"
            type="text"
            placeholder="g____"
            maxlength="9"
            value={answer6}
            onChange={(event) => {
              const { value } = event.target;
              setAnswer6(value);
            }}
          />
          <div className="answer-map">
            <h1>{answer6}</h1>
          </div>
        </div>
        
        <div className="row question">
          <h1>Michael's favorite video game is _________</h1>
          <input
            className="answer-input"
            type="text"
            placeholder="m________"
            maxlength="9"
            value={answer3}
            onChange={(event) => {
              const { value } = event.target;
              setAnswer3(value);
            }}
          />
          <div className="answer-map">
            <h1>{answer3}</h1>
          </div>
        </div>

      </div>
      <div className="block"></div>
    </div>
  );
}

export default App;
