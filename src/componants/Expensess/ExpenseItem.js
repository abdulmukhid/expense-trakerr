import React from 'react';
// import { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpeseItem = (props) => {
  // const [newTital,setNewTital]=useState("")
  // const [title,setTital]=useState(props.title)

  // const ChangeTital=()=>{

  //   setTital(newTital)
  // }
  // const ChangeHandler=(event)=>{
  //   setNewTital(event.target.value)
  // }

  



  return (
    <div className='expense-item'>
      < ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>

        <div className='expense-item__price'>${props.price}</div>
        {/* <input type="text" value={newTital} onChange={ ChangeHandler } />
        <button onClick={ ChangeTital }>change tital</button>
         */}
      </div>



    </div>
  )
}


export default ExpeseItem;