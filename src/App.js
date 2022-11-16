import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
    {
        id: "e1",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12)},
    {
        id: "e3",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: "e4",
        title: "New Desk (Wooden)",
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

const App = () => {
    const [expenses, setExpenses] = useState(INITIAL_EXPENSES)
    //корректно обновлять state с помощью способа ниже, где мы используем анонимную функцию как колбек внутри setExpenses и автоматически (средствами JS) получаем
    //previousState (в нашем случае prevExpenses), то есть тот стейт, который был до получения новых данных и возвращаем "новый" стейт используя spread operator.
    const addExpenseHandler = expense => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };


    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    );
};

export default App;
