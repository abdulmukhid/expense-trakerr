import React from 'react'
import './NewExpensess.css';
import ExpenseForm from './ExpenseForm';

export default function NewExpensess(props) {
// this fuction recived chaild deta by using props from 
  const saveNewExpenseDeta=(chaildData)=>{
    console.log(chaildData)
    const expensedata={
      ...chaildData,
      id:Math.random().toString()
    }
    props.parentdata(expensedata)
    // this props sending deta or object frome newexpense to app .js

  }
  return (
    <div className='new-expense'>
        <ExpenseForm  reciveProps={saveNewExpenseDeta}/>

    </div>
  )
}
