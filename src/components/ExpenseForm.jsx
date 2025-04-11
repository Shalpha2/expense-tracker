import { useState } from "react"

export default function ExpenseForm({setExpenses}){
    
    const[formData,setFormData] = useState({
        type:"",
        description:"",
        category: "",
        amount: 1,
        date:"25/5/2025",
    })

    function handleSubmit(event){
        event.preventDefault()
        setExpenses(prev => [...prev, formData]);
  setFormData({
    type: "",
    description: "",
    category: "",
    amount: 1,
    date: "25/5/2025"
  });

    }

    const handleOnChange= (event)=>{
        setFormData ({...formData, [event.target.name] : event.target.value})   
    }
    return(
        <div className="col-3">
        <form onSubmit ={handleSubmit} className="p-2 m-4 border rounded" >
        <h6>Add Expenses</h6>
      <div className="mb-3">
        <label htmlFor="expenseType" className="form-label">
          Expense Type
        </label>
        <input
          type="text"
          className="form-control form-control-sm"
          id="expenseType"
          placeholder="e.g.Ugali Matumbo"
          name="type"
          value={formData.type}
          onChange={handleOnChange}
          />
      </div>
      <div className="mb-3">
        <label htmlFor="expenseDescription" className="form-label">
          Expense Description
        </label>
        <input
          type="text"
          className="form-control form-control-sm"
          id="expenseDescription"
          placeholder="e.g.wednesday lunch"
          name="description"
          value={formData.description}
          onChange={handleOnChange}
          
        />
      </div>
      <div className="mb-3">
        <label htmlFor="expenseCategory" className="form-label">
          Expense Category
        </label>
        <input
          type="text"
          className="form-control form-control-sm"
          id="expenseCategory"
          placeholder="e.g.Food"
          name="category"
          value={formData.category}
          onChange={handleOnChange}
          
        />
      </div>
      <div className="mb-3">
        <label htmlFor="expenseAmount" className="form-label">
          Expense Amount
        </label>
        <input
          type="number"
          className="form-control form-control-sm"
          id="expenseAmount"
          min={1}
          name="amount"
          value={formData.amount}
          onChange={handleOnChange}
          
        />
      </div>
      <div className="mb-3">
        <label htmlFor="expenseDate" className="form-label">
          Expense Date
        </label>
        <input
          type="date"
          className="form-control form-control-sm"
          id="expenseDate"
          name="date"
          value={formData.date}
          onChange={handleOnChange}
          
          
        />
      </div>
      <div className="d-grid gap-2 col-12 mx-auto">
        <button className="btn btn-dark btn-sm" type="submit">Submit</button>
      </div>
      </form>
      </div>

    )
}