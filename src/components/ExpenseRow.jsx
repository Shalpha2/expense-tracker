export default function ExpenseRow({ expense,handleRemove }) {

    const formattedDate = new Date(expense.date).toLocaleDateString("en-KE", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    return (
      <tr>
        <td>{expense.type}</td>
        <td>{expense.description}</td>
        <td>{expense.category}</td>
        <td>{expense.amount}</td>
        <td>{formattedDate}</td>
        <td>
          <button onClick={handleRemove} >Remove</button>
        </td>
      </tr>
    );
  }
  