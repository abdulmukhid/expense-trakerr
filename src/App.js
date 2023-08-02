import { useState} from 'react';
import Expensess from './componants/Expensess/Expensess';
import NewExpensess from './componants/NewExpensess/NewExpensess';
const DUMMY_EXPENSE = 
[
   {
     id:"e1",
     title: "Car Expensess",
     price: 298,
     date: new Date(2023,6,8)
    
    
   }
   ,
   {
     id:"e2",
     title: "Home Expenses",
    price: 340,
     date: new Date(2023,2,25)
    
   },
  {
   id:"e3",
   title: "Shope Expenses",
   price: 28,
    date: new Date(2023,7,15)
    
  },
  {
    id:"e4",
    title: "Bussines Expenses",
    price: 298,
    date: new Date(2023,11,25)
    
   }
 ];


const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  

  const parentResive = (expense) => {
    // recived deta from newexpense.js by using props
    // expense contain recived object
    console.log(expense)
    const updatedExpense = [expense, ...expenses]

    setExpenses(updatedExpense)

  }

  return (
    <div className="App">
      < NewExpensess parentdata={parentResive} />
      <Expensess heading={expenses} />

    </div>

  );
}

export default App;
