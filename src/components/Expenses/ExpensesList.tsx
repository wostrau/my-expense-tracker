import React from "react";
import ExpenseItem from "./ExpenseItem";
import { ExpensesPropsType } from "./Expenses";
import "./ExpensesList.css";

const ExpensesList = ({ expenses }: ExpensesPropsType) => {
  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {expenses.map((e) => (
        <ExpenseItem key={e.id} params={e} />
      ))}
    </ul>
  );
};

export default ExpensesList;
