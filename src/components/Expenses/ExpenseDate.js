import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const dates = {
    day: props.date.toLocaleString("en-US", { day: "2-digit" }),
    month: props.date.toLocaleString("en-US", { month: "short" }),
    year: props.date.getFullYear(),
  };
  return (
    <div className="expense-date">
      <div className="expense-date__day">{dates.day}</div>
      <div className="expense-date__month">{dates.month}</div>
      <div className="expense-date__year">{dates.year}</div>
    </div>
  );
};

export default ExpenseDate;
