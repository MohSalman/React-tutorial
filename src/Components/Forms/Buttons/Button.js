import React from 'react';
import './button.css';

const Button = ({btnClass,btnText, btnClickEvent}) => {
   
    return (
       <button onClick={btnClickEvent} type="" className={`btn ${btnClass}`}>{btnText}</button>
    )
}



export default Button
