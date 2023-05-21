import React from "react";
import ExpenseItem from "./ExpenseItem";
import { ExpenseType } from "./Expenses";
import "./ExpensesList.css";

type ExpensesListPropsType = {
  expenses: Array<ExpenseType>;
};

const ExpensesList = ({ expenses }: ExpensesListPropsType) => {
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
