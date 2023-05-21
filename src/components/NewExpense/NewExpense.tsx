import React from "react";
import "./NewExpense.css";
import ExpenseForm, { ExpenseDataFormType } from "./ExpenseForm";
import { ExpenseType } from "../Expenses/Expenses";

type NewExpensePropsType = {
  onAddExpense: (arg: ExpenseType) => void;
};

const NewExpense = ({ onAddExpense }: NewExpensePropsType) => {
  const saveExpenseDataHandler = (EnteredExpenseData: ExpenseDataFormType) => {
    const expenseData = {
      ...EnteredExpenseData,
      id: Math.floor(Math.random() * 1001).toString(),
    };

    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
