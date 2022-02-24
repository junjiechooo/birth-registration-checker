import React, { useEffect, useState } from 'react';
import { FiRepeat, FiLogIn } from "react-icons/fi";

const End = ({ results, data, onReset, onInfoCheck }) => {

  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [explanation, setExplanations] = useState([]);
  
  useEffect(() => {
      let correct = 0;
      let explanationArr = [];
      results.forEach((result, index) => {
          if(result.a === data[index].answer) {
              correct++;
          }
          if(result.a != data[index].answer) {
              explanationArr.push(data[index].explanation)
          }
      });
      setCorrectAnswers(correct);
      setExplanations(explanationArr);
  }, []);


  console.log(results);
  console.log(explanation);
//   console.log(quesData);

  return (
    <div className='card'>
        <div className='card-content'>
            <div className='content'>

                {correctAnswers === data.length ? (
                    <>
                    <img src={require("../img/happy_announcement.png")} alt="success" width="300" height="200"/>
                    <h1 className='success'>Congratulation, you are ELIGIBLE!</h1>
                    <div className='message_success'>
                    <p>You fulfilled {correctAnswers} of {data.length} criteria.</p>
                    </div>
                    <a className='spButton' onClick={onInfoCheck}>Login to Singpass <FiLogIn style={{verticalAlign:"middle"}}/></a>
                    {/* <a className='retryButton' onClick={onReset}>Try again</a> */}
                    
                    </>
                ) : (
                    <>
                    <img src={require("../img/feeling_blue.png")} alt="fail" width="300" height="200"/>
                    <h1 className='fail'>Sorry, you are NOT ELIGIBLE!</h1>
                    <p>You fulfilled {correctAnswers} of {data.length} criteria.</p>
                    <div className='message'>
                        <h4 className='messageHeader'>To be eligible for the birth registration application, the following requirements must be fulfilled:</h4>
                        <ul className=''>
                            <li>{explanation.map((reason) => (
                                <li>{reason}</li>
                            ))}</li>
                        </ul>
                    </div>
                    <a className='retryButton2' onClick={onReset}>Try again <FiRepeat style={{verticalAlign:"middle"}}/></a>
                    </>
                )}
                
            </div>
        </div>

    </div>
  )
}

export default End;