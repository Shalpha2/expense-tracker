
import './App.css';
import { useState } from 'react';
import ExpensesTable from './components/ExpensesTable';
import ExpenseForm from './components/ExpenseForm';


function App() {
  const [search, setSearch] = useState("");
  const [expenses,setExpenses]= useState([
    {
    type:"Ugali Matumbo",
    description:"Wednesday lunch",
    category: "Food" , 
     amount:500,
     date: new Date().toISOString().split("T")[0] 

    }
])
  return (
    <div className="container">
      <div className='d-flex flex-row'>
      
      
      
      <ExpenseForm setExpenses={setExpenses}/>
       <ExpensesTable expenses={expenses} setExpenses={setExpenses}
       search={search} setSearch={setSearch}/>
       
       </div>
   
    </div>
  );
}

export default App;
