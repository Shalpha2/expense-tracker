import './App.css';
import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpensesTable from './components/ExpensesTable';

function App() {
  const [search, setSearch] = useState("");
  const [expenses, setExpenses] = useState([
    {
      name: "Ugali Matumbo",
      description: "Wednesday lunch",
      category: "Food",
      amount: 500,
      date: "2025-04-15"
    },
    {
      name: "Wi-Fi Subscription",
      description: "Monthly bill",
      category: "Utilities",
      amount: 2500,
      date: "2025-03-21"
    },
    {
      name: "Pay loan",
      description: "Bank loan",
      category: "loan",
      amount: 25000,
      date: "2025-03-15"
    },

    {
      name: "Buy Shoes",
      description: "Add to my shoe collection",
      category: "Growth",
      amount: 3500,
      date: "2025-04-23"
    },

  ]);

  
    return (
      <div className="container my-4">
        <div className="mb-4"> 
          <h2 className="fw-bold">Expense Tracker</h2>
          <p className="text-muted">
            Track your spending, stay on budget, and manage your money smarter.
          </p>
        </div>
        <div className="row">
        <div className="col-md-4">
            <ExpenseForm setExpenses={setExpenses} />
          </div>

          <div className="col-md-8">
            <ExpensesTable
              expenses={expenses}
              setExpenses={setExpenses}
              search={search}
              setSearch={setSearch}
            />
          </div>
        </div>
      </div>
    );
    
}

export default App;
