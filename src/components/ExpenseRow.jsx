export default function ExpenseRow({ expense, handleRemove }) {
    
    return (
     <tr>
        <td>{expense.name}</td>
        <td>{expense.description}</td>
        <td>{expense.category}</td>
        <td>{expense.amount}</td>
        <td>{expense.date}</td>
        <td>
          <button
            onClick={handleRemove}
            className="btn btn-outline-danger btn-sm" >Remove</button>
        </td>
    </tr>
    );
  }
  