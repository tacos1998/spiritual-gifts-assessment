import { useState } from 'react';

function Quiz() {
  const [isFinished, setIsFinished] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedValue, setSelectedValue] = useState('none');
  const [error, setError] = useState(false);
  const [giftScores, setGiftScores] = useState([
    { gift: 'Administration', score: 0 },
    { gift: 'Healing', score: 0 },
    { gift: 'Musician', score: 0 }
  ]);

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  const questions = [
    {
      id: 0,
      statement: 'I find great joy in leading people to accomplish goals.',
      type: 'Administration',
    },
    {
      id: 1,
      statement:
        'I enjoy the opportunity to pray with and for a person who is physically ill.',
      type: 'Healing',
    },
    {
      id: 2,
      statement:
        'I like to sing hymns and songs either alone or with other people.',
      type: 'Musician',
    },
    {
      id: 3,
      statement:
        'People seem to enjoy following my leadership in undertaking an important work.',
      type: 'Administration',
    },
    {
      id: 4,
      statement:
        'I have prayed with a person who was in distress, and the person was comforted.',
      type: 'Healing',
    },
    {
      id: 5,
      statement:
        'God has given me the ability to play a musical instrument and I enjoy it.',
      type: 'Musician',
    },
    {
      id: 6,
      statement: 'I like to organize people for more effective ministry.',
      type: 'Administration',
    },
    {
      id: 7,
      statement:
        'I feel called to be a part of the healing ministry of the church.',
      type: 'Healing',
    },
    {
      id: 8,
      statement:
        'I have enjoyed being involved with Church, school and/or local musical productions.',
      type: 'Musician',
    },
  ];

  const submitAnswer = () => {
    if (selectedValue === 'none') {
      setError(true);
      return;
    }
    setError(false);

    let newScores = giftScores;
    try {
      newScores.find(item => {
        return item.gift == questions[currentQuestion].type;
      })!.score += score;
    } catch (error) {
      console.error(error);
    }
    
    setGiftScores(newScores);
    setScore(0);
    setSelectedValue('none');
    if (currentQuestion + 1 == questions.length) {
      setIsFinished(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  if (!isFinished) {
    var errorMsg;
    if (error) {
      errorMsg = (
        <span className="error-msg">
          Please select one of the above options.
        </span>
      );
    }
    return (
      <>
        <h2>{questions[currentQuestion].statement}</h2>
        <form>
          <input
            type="radio"
            id="html"
            name="answers"
            required
            value="0"
            onClick={() => setScore(0)}
            checked={selectedValue === 'option1'}
            onChange={() => handleRadioChange('option1')}
          ></input>
          <label htmlFor="0">Strongly disagree</label>
          <br />
          <input
            type="radio"
            id="html"
            name="answers"
            value="1"
            onClick={() => setScore(1)}
            checked={selectedValue === 'option2'}
            onChange={() => handleRadioChange('option2')}
          ></input>
          <label htmlFor="1">Somewhat disagree</label>
          <br />
          <input
            type="radio"
            id="html"
            name="answers"
            value="2"
            onClick={() => setScore(2)}
            checked={selectedValue === 'option3'}
            onChange={() => handleRadioChange('option3')}
          ></input>
          <label htmlFor="2">Neither agree nor disagree</label>
          <br />
          <input
            type="radio"
            id="html"
            name="answers"
            value="3"
            onClick={() => setScore(3)}
            checked={selectedValue === 'option4'}
            onChange={() => handleRadioChange('option4')}
          ></input>
          <label htmlFor="3">Somewhat Agree</label>
          <br />
          <input
            type="radio"
            id="html"
            name="answers"
            value="4"
            onClick={() => setScore(4)}
            checked={selectedValue === 'option5'}
            onChange={() => handleRadioChange('option5')}
          ></input>
          <label htmlFor="4">Strongly Agree</label>
          <br />
        </form>
        <br />
        <button onClick={() => submitAnswer()}>Submit</button>
        <br />
        <br />
        {errorMsg}
      </>
    );
  } else {
    return (
      <>
        <h2>Your Scores:</h2>
        {giftScores.sort((a, b) => b.score - a.score).map((item) => (
          <h3>{item.gift}: {item.score}</h3>
        ))}
        <h2>Understanding Your Scores</h2>
        <p><strong>12-10: </strong>You are either doing this, or you should be.</p>
        <p><strong>9-7: </strong>You could easily do this if you want to.</p>
        <p><strong>6-4: </strong>You would have to work hard to do this gracefully.</p>
        <p><strong>3-0: </strong>You would probably not enjoy doing this.</p>
        <br />
        <button type="button" onClick={() => window.location.reload()}> <span>Start Over</span> </button>
      </>
    );
  }
}

export default Quiz;
