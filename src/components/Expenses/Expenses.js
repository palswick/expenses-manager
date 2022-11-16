import "./Expenses.css";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022')

    const saveSelectedYearHandler = (year) => {
        setFilteredYear(year)
    }

    const filteredExpenseItems = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear)

    return (
        <Card className="expenses">
            <ExpenseFilter onSaveSelectedYear={saveSelectedYearHandler} selected={filteredYear}/>
            <ExpensesList expenses={filteredExpenseItems}/>
        </Card>
    );
};

export default Expenses;
