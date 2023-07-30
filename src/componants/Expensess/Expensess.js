import React from 'react'
import ExpeseItem from './ExpenseItem'
import './Expensess.css'

export default function Expensess(props) {
  return (
    <div className='Expensess'>
      {
        props.heading.map(
          expense => (
            < ExpeseItem
              date={expense.date}
             title={expense.title}
              price={expense.price} />
          )
 
        )

      }
    </div>
  )
}




