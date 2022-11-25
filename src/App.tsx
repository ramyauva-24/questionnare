import React, { useState } from 'react';
import './App.css';
import Question from './components/question';
import ViewAnswers from './components/viewAnswers';
import { quesionnaireData } from './data/data';
import { questionType } from './models/questionAnswer';

const TOTAL_QUESTIONS = 3;

const App: React.FC = () => {
  const [number, setNumber] = useState(0);
  const [viewQA, setViewQA] = useState(false);
  const [allQA, setAllQA] = useState(quesionnaireData)

  const nextQuestion = () => {
    const nextQ = number + 1;
    if (nextQ === TOTAL_QUESTIONS) {
      setViewQA(true)
    } else {
      setNumber(nextQ);
    }
  };

  const changeValue = (updatedValue: questionType) => {  
    const updatedQA = allQA.map((QA, QAindex) => (QAindex === number ? updatedValue : QA));
    console.log(updatedQA, number);
    setAllQA(updatedQA)
  }

  return (
    <div className='App'>
      <header>
        <h5 className="header">Questionnaire App</h5>
      </header>
      <div className="App-body">
        <div className='container card-container'>
          {viewQA
            ? <ViewAnswers allQA={allQA} />
            : <>
              <Question questionData={allQA[number]} changeValue={changeValue} />
              {<button disabled={!allQA[number].userInput} className='button' onClick={nextQuestion}>
                Next
              </button>}
            </>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
