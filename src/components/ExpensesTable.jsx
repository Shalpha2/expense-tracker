import ExpenseRow from "./ExpenseRow";
import SearchBar from "./SearchBar";

export default function ExpensesTable({expenses, setExpenses}){
    
 
    function handleRemove(indexToRemove) {
        setExpenses((prev) => prev.filter((_, index) => index !== indexToRemove));  
        
      }
    

 
    return(
<div className="col">
    <h3>Expense Tracker</h3>
    <SearchBar/>
 <table className="table table-striped">
     <thead>
     <tr>

      <th>Expense</th>
     <th>Description</th>
     <th>Category</th>
     <th>Amount</th>
     <th>Date</th> 
    </tr>
 </thead>
<tbody>
{expenses.map((exp, index) => (
            <ExpenseRow key={index} expense={exp} handleRemove={()=>handleRemove(index)} />
          ))}
          
  </tbody>
 
     
</table>
</div>  
    )
}