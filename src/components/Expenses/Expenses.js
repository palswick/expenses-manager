import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022')

    const saveSelectedYearHandler = (year) => {
        setFilteredYear(year)
    }

    const filteredExpenseItems = props.items.filter(expense => expense.date.getFullYear() == filteredYear)

    //рендерим динамически наши expense-items с помощью map, при этом данные приходят пропсами из App.js
    const expenseItems = filteredExpenseItems.map(expense => <ExpenseItem key={expense.id} date={expense.date}
                                                                          title={expense.title}
                                                                          amount={expense.amount}/>)

    return (
        <Card className="expenses">
            <ExpenseFilter onSaveSelectedYear={saveSelectedYearHandler} selected={filteredYear}/>
            {expenseItems}
        </Card>
    );
};

export default Expenses;
