import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";


const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random(),
            ...enteredExpenseData
        }
        props.onAddExpense(expenseData)
    }

    const [isEditing, setIsEditing] = useState(false)

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const canselEditingHandler = () => {
        setIsEditing(false)
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Item</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCansel={canselEditingHandler}/>}
        </div>
    );
};

export default NewExpense;
