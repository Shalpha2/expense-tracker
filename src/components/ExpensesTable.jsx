import ExpenseRow from "./ExpenseRow";
import SearchBar from "./SearchBar";

export default function ExpensesTable({ expenses, setExpenses, search, setSearch }) {

  function handleRemove(indexToRemove) {
    setExpenses(expenses.filter((_, index) => index !== indexToRemove));
  }

  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(search.toLowerCase()) ||
    expense.description.toLowerCase().includes(search.toLowerCase()) ||
    expense.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />
      <table className="table table-striped table-hover table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount (KES)</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map((expense, index) => (
            <ExpenseRow
              key={index}
              expense={expense}
              handleRemove={() => handleRemove(index)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

