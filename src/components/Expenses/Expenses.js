import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [expenseYear, setExpenseYear] = useState('2019')
  
  const changeExpenseYear = year => {
    setExpenseYear(year)
    console.log(year)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === expenseYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter changeExpenseYear={changeExpenseYear} />
      </Card>
      <Card className="expenses">
      {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
