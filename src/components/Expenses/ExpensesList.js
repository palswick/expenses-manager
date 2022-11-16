import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) => {
    //рендерим динамически наши expense-items с помощью map, при этом данные приходят из App.js и, предварительно, фильтруются по году
    if (props.expenses.length === 0) {
        return <h2 className='expenses-list__fallback'>No Expenses Found</h2>
    }
    return (
        <ul className='expenses-list'>
            {props.expenses.map(expense => <ExpenseItem key={expense.id} date={expense.date}
                                                        title={expense.title}
                                                        amount={expense.amount}/>)}
        </ul>
    )
}


export default ExpensesList