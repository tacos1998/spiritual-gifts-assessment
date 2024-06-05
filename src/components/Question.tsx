import { useState } from 'react';

interface QuestionProps {
  statement: string;
  onAnswer: (score: number) => void;
}

function Question(props: QuestionProps) {
  const [score, setScore] = useState(0);

  return (
    <>
      <h2>{props.statement}</h2>
      <form>
        <input
          type="radio"
          id="html"
          name="fav_language"
          value="0"
          onClick={() => setScore(0)}
        ></input>
        <label htmlFor="0">Strongly disagree</label>
        <br />
        <input
          type="radio"
          id="html"
          name="fav_language"
          value="1"
          onClick={() => setScore(1)}
        ></input>
        <label htmlFor="1">Somewhat disagree</label>
        <br />
        <input
          type="radio"
          id="html"
          name="fav_language"
          value="2"
          onClick={() => setScore(2)}
        ></input>
        <label htmlFor="2">Neither agree nor disagree</label>
        <br />
        <input
          type="radio"
          id="html"
          name="fav_language"
          value="3"
          onClick={() => setScore(3)}
        ></input>
        <label htmlFor="3">Somewhat Agree</label>
        <br />
        <input
          type="radio"
          id="html"
          name="fav_language"
          value="4"
          onClick={() => setScore(4)}
        ></input>
        <label htmlFor="4">Strongly Agree</label>
        <br />
      </form>
      <br />
      <button onClick={() => props.onAnswer(score)}>Submit</button>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Hey, a quiz</p>
      </div> */}
    </>
  );
}

export default Question;
