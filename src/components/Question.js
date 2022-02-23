import React, { useState, useEffect, useRef} from 'react'
import { FiArrowRight, FiAlertTriangle } from "react-icons/fi";

const Question = ({ data, onAnswerUpdate, numberofQuestions, activeQuestion, onSetActiveQuestion, onSetStep }) => {
  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');
  const radiosWrapper = useRef();

//   useEffect(() => {
//       const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
//       if(findCheckedInput) {
//         //   findCheckedInput.checked = false;
//       }
//   });

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if(error) {
        setError('');
    }
  }

  const nextClickHandler = (e) => {
      const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
      if(selected === '') {
          return setError('Please select one option!');
      } else {
        findCheckedInput.checked = false;
      }
      
      onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
      setSelected('');
      if(activeQuestion < numberofQuestions - 1) {
          onSetActiveQuestion(activeQuestion + 1);
      } else {
          onSetStep(3);
      }
  }


  return (
    <div className='card'>
        <div className='card-content'>
            {error && <div className='error_msg'><span className='alert_icon'><FiAlertTriangle/></span> {error} </div>}
            <div className='content'>
                <h4><span style={{color: "#1C76D5"}}>Questions: {activeQuestion+1}/{numberofQuestions}</span></h4>
                <h3 className="mb-5">{data.question}</h3>
                <div className='control' ref={radiosWrapper}>
                    {data.choices.map((choice, i) => (
                        <label className='radio' key={i}>
                            <input type="radio" className="radio_btn" name="answer" value={choice} onChange={changeHandler} />
                                {choice}
                        </label>
                    ))}
                </div>
                
                <button className='button' onClick={nextClickHandler}>Next <FiArrowRight style={{verticalAlign:"middle", margin:"1px 15px 2px 0px", float:"right"}}/></button>
            </div>
        </div>
    </div>
  )
 }


export default Question;