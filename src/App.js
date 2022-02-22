import React, { useState } from 'react'; 
import './App.css';
import styled from 'styled-components';

import Start from './components/Start';
import Question from './components/Question';
import End from './components/End';
import quesData from './data/questions.json';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

const Page = styled.div`
  margin: auto;
  @media ${device.mobile} { 
    min-width: 320px;
  }

  @media ${device.laptop} { 
    min-width: 800px;
  }

  @media ${device.desktop} {
    min-width: 1400px;
  }
`;

const App = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const quesStartHandler = () => {
    setStep(2);
  }

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
  }

  return (
    <Page>
    <div className="App">
      { step === 1 && <Start onSurveyStart={quesStartHandler}/> }
      { step === 2 && <Question 
        data={quesData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberofQuestions={quesData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      /> }
      { step === 3 && <End 
        results={answers}
        data={quesData.data}
        // onInfoCheck={() => setShowModal(true)}
        onReset={resetClickHandler}
      />}
        
      {/* {showModal && <Modal 
        onClose={() => setShowModal(false)}
        results={answers}
        data={quesData.data} 
      />} */}
    </div>
    </Page>
  );
}

export default App;
