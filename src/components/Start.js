import React from 'react';
import { FiCheckCircle } from "react-icons/fi";

const Start = ({onSurveyStart}) => {
  return (
    <div className='card'>
        <div className='card-content'>
            <div className='content'>
                <img src={require("../img/undraw_task_list.png")} alt="" width="350" height="200"/>
                <h1>Birth Registration Eligibility Checker</h1>
                <p style={{ color: "#686868" }}>All users of the birth registration application will need to fulfil a few basic criteria before you can
use the application.</p>
                <p style={{ color: "#686868" }}>🕐 <b>2 mins</b></p>
                <button className='button' onClick={onSurveyStart}>Check Eligibility <FiCheckCircle style={{verticalAlign:"middle", margin:"auto"}}/></button>
            </div>
        </div>
    </div>
  )
}

export default Start;