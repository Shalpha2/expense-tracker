import { useState } from "react";

export default function ExpenseForm({ setExpenses }) {

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    amount: "",
    date: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    setExpenses((prev) => [...prev, formData]);

    setFormData({
      name: "",
      description: "",
      category: "",
      amount: "",
      date: "",
    });

  }

  function handleOnChange(event) {

    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <div className="card shadow-sm p-3 mb-3 bg-light rounded">
      <form onSubmit={handleSubmit}>
        
        <h5 className="fw-bold mb-3">Add Expense</h5>

        <div className="mb-3">
          <label htmlFor="expenseName" className="form-label"></label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="expenseType"
            placeholder="Enter expense name"
            name="name"
            value={formData.name}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="expenseDescription" className="form-label"> </label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="expenseDescription"
            placeholder="Enter expense description"
            name="description"
            value={formData.description}
            onChange={handleOnChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="expenseCategory" className="form-label"> </label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="expenseCategory"
            placeholder="Enter category"
            name="category"
            value={formData.category}
            onChange={handleOnChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="expenseAmount" className="form-label"> </label>
          <input
            type="number"
            className="form-control form-control-sm"
            id="expenseAmount"
            placeholder="Enter amount"
            name="amount"
            value={formData.amount}
            onChange={handleOnChange}
            
          />
        </div>

        <div className="mb-3">
          <label htmlFor="expenseDate" className="form-label"></label>
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
  );
}
