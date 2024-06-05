import { useState } from 'react';

function Quiz() {
  const [isFinished, setIsFinished] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [administrationScore, setAdministrationScore] = useState(0);
  const [healingScore, setHealingScore] = useState(0);
  const [musicianScore, setMusicianScore] = useState(0);
  const [selectedValue, setSelectedValue] = useState('none');
  const [error, setError] = useState(false);

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

  // let scores = {
  //   Administration: 0,
  //   Healing: 0,
  //   Musician: 0,
  // };

  const submitAnswer = () => {
    // scores[questions[currentQuestion].type as keyof typeof scores] += score;
    if (selectedValue === 'none') {
      setError(true);
      return;
    }
    setError(false);
    // console.log('you scored:' + score);
    switch (questions[currentQuestion].type) {
      case 'Administration':
        setAdministrationScore(administrationScore + score);
        break;
      case 'Healing':
        setHealingScore(healingScore + score);
        break;
      case 'Musician':
        setMusicianScore(musicianScore + score);
    }
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
        {/* <Question
          statement={questions[currentQuestion].statement}
          onAnswer={() => submitAnswer()}
        /> */}
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
    // sort scores?
    return (
      <>
        <h2>Scores for each gift</h2>
        <h3>Administration: {administrationScore}</h3>
        <h3>Healing: {healingScore}</h3>
        <h3>Musician: {musicianScore}</h3>
      </>
    );
  }
}

export default Quiz;
