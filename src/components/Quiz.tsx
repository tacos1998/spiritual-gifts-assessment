import './Quiz.css';
import { useState } from 'react';

function Quiz() {
  const [isFinished, setIsFinished] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedValue, setSelectedValue] = useState('none');
  const [error, setError] = useState(false);
  const [giftScores, setGiftScores] = useState([
    { gift: 'Administration', score: 0 },
    { gift: 'Apostleship', score: 0 },
    { gift: 'Caregiving', score: 0 },
    { gift: 'Communication', score: 0 },
    { gift: 'Craftsmanship', score: 0 },
    { gift: 'Discernment', score: 0 },
    { gift: 'Evangelization', score: 0 },
    { gift: 'Encouragement', score: 0 },
    { gift: 'Faith', score: 0 },
    { gift: 'Generosity', score: 0 },
    { gift: 'Healing', score: 0 },
    { gift: 'Hospitality', score: 0 },
    { gift: 'Intercession', score: 0 },
    { gift: 'Knowledge', score: 0 },
    { gift: 'Mercy', score: 0 },
    { gift: 'Mission', score: 0 },
    { gift: 'Musicianship', score: 0 },
    { gift: 'Servant Leadership', score: 0 },
    { gift: 'Trust', score: 0 },
    { gift: 'Prophet', score: 0 },
    { gift: 'Service', score: 0 },
    { gift: 'Teacher', score: 0 },
    { gift: 'Wisdom', score: 0 },
  ]);

  const handleRadioChange = (value: string, selectedScore: number) => {
    setSelectedValue(value);
    setScore(selectedScore);
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
        'I feel called to be a leader in the church.',
      type: 'Apostleship',
    },
    {
      id: 2,
      statement:
        'I look for opportunities to assist people who have trouble doing for themselves.',
      type: 'Caregiving',
    },
    {
      id: 3,
      statement:
        'I find the repair and maintenance of things in my environment come easily to me.',
      type: 'Craftsmanship',
    },
    {
      id: 4,
      statement:
        'I find it easy to perceive whether what a person is doing is honest or dishonest.',
      type: 'Discernment',
    },
    {
      id: 5,
      statement:
        'I enjoy sharing about God with people who are not church-goers.',
      type: 'Evangelization',
    },
    {
      id: 6,
      statement: 'I enjoy motivating people to a higher spiritual commitment.',
      type: 'Encouragement',
    },
    {
      id: 7,
      statement:
        'I try to do God’s will, even when it’s not the popular thing to do.',
      type: 'Faith',
    },
    {
      id: 8,
      statement:
        'It is satisfying to me to give generously of my money for God’s work.',
      type: 'Generosity',
    },
    {
      id: 9,
      statement:
        'I enjoy the opportunity to pray with and for a person who is physically ill.',
      type: 'Healing',
    },
    {
      id: 10,
      statement:
        'I like having people in my home.',
      type: 'Hospitality',
    },
    {
      id: 11,
      statement:
        'I feel great compassion for the problems of others.',
      type: 'Mercy',
    },
    {
      id: 12,
      statement:
        'I adapt easily in a culture different from mine.',
      type: 'Mission',
    },
    {
      id: 13,
      statement:
        'I like to sing hymns and songs either alone or with other people.',
      type: 'Musicianship',
    },
    {
      id: 14,
      statement:
        'I am quick to pitch in and help out.',
      type: 'Servant Leadership',
    },
    {
      id: 15,
      statement:
        'I am ready to try the impossible, because I have great trust in God.',
      type: 'Trust',
    },
    {
      id: 16,
      statement:
        'I like to talk about spirituality with other Christians.',
      type: 'Prophet',
    },
    {
      id: 17,
      statement:
        'I enjoy doing “chores” around the church.',
      type: 'Service',
    },
    {
      id: 18,
      statement:
        'I’m excited about helping people discover important insights in the Scriptures and the teachings of the Church.',
      type: 'Teacher',
    },
    {
      id: 19,
      statement:
        'I communicate easily with people of a different culture or language background.',
      type: 'Communication',
    },
    {
      id: 20,
      statement:
        'People with spiritual problems have come to me for advice and counsel.',
      type: 'Wisdom',
    },
    {
      id: 21,
      statement:
        'People seem to enjoy following my leadership in undertaking an important work.',
      type: 'Administration',
    },
    {
      id: 22,
      statement:
        'I feel that God gives me wisdom in leading people in spiritual matters.',
      type: 'Apostleship',
    },
    {
      id: 23,
      statement:
        'I enjoy helping with the emergency tasks around the Church.',
      type: 'Caregiving',
    },
    {
      id: 24,
      statement:
        'I have enjoyed creating various kinds of arts and/or crafts.',
      type: 'Craftsmanship',
    },
    {
      id: 25,
      statement:
        'I have a knack for bringing out the best in others.',
      type: 'Encouragement',
    },
    {
      id: 26,
      statement:
        'I’m willing to keep trying, even when a task is tedious and seems unending.',
      type: 'Faith',
    },
    {
      id: 27,
      statement:
        'I have prayed with a person who was in distress, and the person was comforted.',
      type: 'Healing',
    },
    {
      id: 28,
      statement:
        'I pray for others often and for significant periods of time.',
      type: 'Intercession',
    },
    {
      id: 29,
      statement:
        'Through study I have learned many helpful insights.',
      type: 'Knowledge',
    },
    {
      id: 30,
      statement:
        'Visiting people in retirement homes or the hospital gives me great satisfaction.',
      type: 'Mercy',
    },
    {
      id: 31,
      statement:
        'It is easy for me to move into a new community and make friends.',
      type: 'Mission',
    },
    {
      id: 32,
      statement:
        'God has given me the ability to sing and/or play a musical instrument, and I enjoy it.',
      type: 'Musicianship',
    },
    {
      id: 33,
      statement:
        'I notice needs in my parish, and I step up to help fill them.',
      type: 'Servant Leadership',
    },
    {
      id: 34,
      statement:
        'I am often ready to believe God will lead us through a situation which others feel is impossible.',
      type: 'Trust',
    },
    {
      id: 35,
      statement:
        'I enjoy doing routine tasks for the glory of God.',
      type: 'Service',
    },
    {
      id: 36,
      statement:
        'I have enjoyed teaching individuals and/or classes.',
      type: 'Teacher',
    },
    {
      id: 37,
      statement:
        'I enjoy helping others to find solutions to difficult problems in life.',
      type: 'Wisdom',
    },
    {
      id: 38,
      statement:
        'I like to organize people for more effective ministry.',
      type: 'Administration',
    },
    {
      id: 39,
      statement:
        'I have little fear in leading people in spiritual matters.',
      type: 'Apostleship',
    },
    {
      id: 40,
      statement:
        'I don\'t mind helping people who are sick or disabled.',
      type: 'Caregiving',
    },
    {
      id: 41,
      statement:
        'I like to create things with my hands.',
      type: 'Craftsmanship',
    },
    {
      id: 42,
      statement:
        'I seem to have a knack for sensing the difference between truth and error.',
      type: 'Discernment',
    },
    {
      id: 43,
      statement:
        'I am drawn to share my faith in God with others.',
      type: 'Evangelization',
    },
    {
      id: 44,
      statement:
        'I like to encourage inactive church members to become involved again.',
      type: 'Encouragement',
    },
    {
      id: 45,
      statement:
        'I am sure of God’s loving presence, even when things go wrong.',
      type: 'Faith',
    },
    {
      id: 46,
      statement:
        'I appreciate the opportunity to give of my skills and energy in a critical situation.',
      type: 'Generosity',
    },
    {
      id: 47,
      statement:
        'People seem very comfortable in my home.',
      type: 'Hospitality',
    },
    {
      id: 48,
      statement:
        'God consistently answers my prayers in tangible ways.',
      type: 'Intercession',
    },
    {
      id: 49,
      statement:
        'I have learned much about God from Scripture, books and observing life.',
      type: 'Knowledge',
    },
    {
      id: 50,
      statement:
        'I experience joy in comforting people in difficult situations.',
      type: 'Mercy',
    },
    {
      id: 51,
      statement:
        'I am able to relate to and communicate with people of different locations or cultures.',
      type: 'Mission',
    },
    {
      id: 52,
      statement:
        'I have enjoyed being involved with Church, school and/or local musical productions.',
      type: 'Musicianship',
    },
    {
      id: 53,
      statement:
        'I believe that when I am doing God’s will, God can and does work through me.',
      type: 'Trust',
    },
    {
      id: 54,
      statement:
        'I enjoy relating God’s Word to the issues of the day and sharing this with others.',
      type: 'Prophet',
    },
    {
      id: 55,
      statement:
        'When there is something to be done for the church, I\'m glad to help, but I don\'t want to be in charge.',
      type: 'Service',
    },
    {
      id: 56,
      statement:
        'It seems that people learn readily when I teach them.',
      type: 'Teacher',
    },
    {
      id: 57,
      statement:
        'I can communicate well with people who are limited by a physical or mental handicap.',
      type: 'Communication',
    },
    {
      id: 58,
      statement:
        'I seem to be able to help people find the truths they seek.',
      type: 'Wisdom',
    },
    {
      id: 59,
      statement:
        'I have helped people to discover God’s will in their lives.',
      type: 'Discernment',
    },
    {
      id: 60,
      statement:
        'I have sometimes shared spiritual experiences with a neighbor who doesn\'t attend church.',
      type: 'Evangelization',
    },
    {
      id: 61,
      statement:
        'People who are feeling perplexed often come to me for encouragement and comfort.',
      type: 'Encouragement',
    },
    {
      id: 62,
      statement:
        'If I cannot give money to support God’s work, I try to give generously of my time.',
      type: 'Generosity',
    },
    {
      id: 63,
      statement:
        'I feel peace when I am with a person who is sick or injured.',
      type: 'Healing',
    },
    {
      id: 64,
      statement:
        'When missionaries or church leaders come to our church I like (or would like) to have them come to my home.',
      type: 'Hospitality',
    },
    {
      id: 65,
      statement:
        'I faithfully pray for others recognizing that their effectiveness and total well-being depends on God.',
      type: 'Intercession',
    },
    {
      id: 66,
      statement:
        'Knowledge of the Bible and of Church teachings helps me to solve problems in daily life and in the life of the Church.',
      type: 'Knowledge',
    },
    {
      id: 67,
      statement:
        'I feel secure that my musical ability will be of benefit to the people with whom I come in contact.',
      type: 'Musicianship',
    },
    {
      id: 68,
      statement:
        'People often ask for my help with solving problems.',
      type: 'Servant Leadership',
    },
    {
      id: 69,
      statement:
        'People seem to think of me as one who believes that with God everything is possible.',
      type: 'Trust',
    },
    {
      id: 70,
      statement:
        'It is important for me to speak out against wrong when I see it in the world.',
      type: 'Prophet',
    },
    {
      id: 71,
      statement:
        'One of the joys of my ministry is training people to be more effecting in living out their faith.',
      type: 'Teacher',
    },
    {
      id: 72,
      statement:
        'I can understand and communicate specialized or technical information.',
      type: 'Communication',
    },
    {
      id: 73,
      statement:
        'I feel that I have insight in selecting workable alternatives in difficult situations.',
      type: 'Wisdom',
    },
    {
      id: 74,
      statement:
        'When I am in a disorganized group, I tend to be the first one to step forward to get us organized.',
      type: 'Administration',
    },
    {
      id: 75,
      statement:
        'I enjoy training the volunteers and even the staff in the parish.',
      type: 'Apostleship',
    },
    {
      id: 76,
      statement:
        'If a family is facing a serious crisis, I enjoy the opportunity to help them.',
      type: 'Caregiving',
    },
    {
      id: 77,
      statement:
        'I find pleasure in designing, creating and building things.',
      type: 'Craftsmanship',
    },
    {
      id: 78,
      statement:
        'I often look beneath the surface and discover richer meanings.',
      type: 'Discernment',
    },
    {
      id: 79,
      statement:
        'I feel a deep concern for the people in my community who are not coming to Church.',
      type: 'Evangelization',
    },
    {
      id: 80,
      statement:
        'Even when it seems that my prayers are not answered, I keep praying.',
      type: 'Faith',
    },
    {
      id: 81,
      statement:
        'I give sacrificially of my time, talents and resources because I know that God will meet my needs.',
      type: 'Generosity',
    },
    {
      id: 82,
      statement:
        'I feel strongly that my prayers for a sick person are important.',
      type: 'Healing',
    },
    {
      id: 83,
      statement:
        'I have opened my home to someone in need.',
      type: 'Hospitality',
    },
    {
      id: 84,
      statement:
        'I find myself praying even while I am doing other things.',
      type: 'Intercession',
    },
    {
      id: 85,
      statement:
        'I find in-depth study of the Bible or Church teaching to be fulfilling.',
      type: 'Knowledge',
    },
    {
      id: 86,
      statement:
        'I find great satisfaction in visiting people who are confined to their homes.',
      type: 'Mercy',
    },
    {
      id: 87,
      statement:
        'I have a strong desire to meet people of other communities and countries to talk about our respective understandings of God.',
      type: 'Mission',
    },
    {
      id: 88,
      statement:
        'I enjoy a close relationship with people in a one to one situation.',
      type: 'Servant Leadership',
    },
    {
      id: 89,
      statement:
        'I feel called to stand up for what is right even if it irritates others.',
      type: 'Prophet',
    },
    {
      id: 90,
      statement:
        'I like to do things without attracting much attention.',
      type: 'Service',
    },
    {
      id: 91,
      statement:
        'I have a knack for foreign languages, ASL or Braille.',
      type: 'Communication',
    }
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
        <div className="container">
          <h2 id="question">{questions[currentQuestion].statement}</h2>
        </div>
        <form>
          <input
            type="radio"
            id="html"
            name="answers"
            required
            value="0"
            checked={selectedValue === 'option1'}
            onChange={() => handleRadioChange('option1', 0)}
          ></input>
          <label
            htmlFor="0"
            onClick={() => handleRadioChange('option1', 0)}
          >Strongly Disagree</label>
          <br />
          <input
            type="radio"
            id="html"
            name="answers"
            value="1"
            checked={selectedValue === 'option2'}
            onChange={() => handleRadioChange('option2', 1)}
          ></input>
          <label
            htmlFor="1"
            onClick={() => handleRadioChange('option2', 1)}
          >Somewhat Disagree</label>
          <br />
          <input
            type="radio"
            id="html"
            name="answers"
            value="2"
            checked={selectedValue === 'option3'}
            onChange={() => handleRadioChange('option3', 2)}
          ></input>
          <label
            htmlFor="2"
            onClick={() => handleRadioChange('option3', 2)}
          >Neither Agree nor Disagree</label>
          <br />
          <input
            type="radio"
            id="html"
            name="answers"
            value="3"
            checked={selectedValue === 'option4'}
            onChange={() => handleRadioChange('option4', 3)}
          ></input>
          <label
            htmlFor="3"
            onClick={() => handleRadioChange('option4', 3)}
          >Somewhat Agree</label>
          <br />
          <input
            type="radio"
            id="html"
            name="answers"
            value="4"
            checked={selectedValue === 'option5'}
            onChange={() => handleRadioChange('option5', 4)}
          ></input>
          <label
            htmlFor="4"
            onClick={() => handleRadioChange('option5', 4)}
          >Strongly Agree</label>
          <br />
        </form>
        <br />
        <button id="submit" onClick={() => submitAnswer()}>Submit</button>
        <br />
        <br />
        {errorMsg}
      </>
    );
  } else {
    return (
      <>
        <h2>Understanding Your Scores</h2>
        <p><strong>16-13: </strong>You are either doing this, or you should be.</p>
        <p><strong>12-9: </strong>You could easily do this if you want to.</p>
        <p><strong>8-5: </strong>You would have to work hard to do this gracefully.</p>
        <p><strong>4-0: </strong>You would probably not enjoy doing this.</p>
        <h2>Your Scores:</h2>
        {giftScores.sort((a, b) => b.score - a.score).map((item) => (
          <h3>{item.gift}: {item.score}</h3>
        ))}
        <button type="button" onClick={() => window.location.reload()}> <span>Start Over</span> </button>
      </>
    );
  }
}

export default Quiz;
