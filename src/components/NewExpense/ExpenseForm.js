import "./ExpenseForm.css";
import {useState} from "react";

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState("fsd");
    const [enteredAmount, setEnteredAmount] = useState("312");
    const [enteredDate, setEnteredDate] = useState("2022-01-01");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault(); //чтобы при нажатии на сабмит в форме страница не рестартилась
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }

        props.onSaveExpenseData(expenseData) //вызываем функцию из пропсов и передаем ей в параметры данные с формы. Данные
        //идут вверх к компоненту NewExpense, потому что именно ТАМ по факту вызывается наша функция, а не в этом файле.

        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        required={true}
                        onChange={titleChangeHandler}
                        value={enteredTitle}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        required={true}
                        min="0.01"
                        step="0.01"
                        onChange={amountChangeHandler}
                        value={enteredAmount}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        required={true}
                        min="2019-01-01"
                        max="2022-12-31"
                        onChange={dateChangeHandler}
                        value={enteredDate}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <div>
                    <button onClick={props.onCansel} type='button'>Cansel</button>
                </div>
                <div>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;