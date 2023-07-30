import React from 'react'
import "./ExpenseForm.css"
import { useState } from 'react'

export default function ExpenseForm(props) {
    const [enteredTital, setEnteredTital] = useState("")

    const [enteredAmount, setEnteredAmount] = useState("")
    const [enteredDate, setEnteredDate] = useState("")

    const titalChangeHandler = (event) => {
        setEnteredTital(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)

    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)

    }

    const submitHandler=(event)=>{
        event.preventDefault();

    
    const expenseDeta={
        title:enteredTital,
        price:enteredAmount,
        date:new Date(enteredDate)
    }
// transfer data from child componant to parent componant
// by using props
    props.reciveProps(expenseDeta)
    console.log(expenseDeta)
    setEnteredTital("")
    setEnteredAmount("")
    setEnteredDate("")

    };
   
    return (

        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>tital</label>
                    <input type="text" value={enteredTital} onChange={ titalChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__action'>
                <button type='submit'>Add expense</button>
            </div>
        </form>

    )
}
