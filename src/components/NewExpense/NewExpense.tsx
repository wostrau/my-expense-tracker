import React from "react";
import "./NewExpense.css";
import ExpenseForm, { ExpenseDataFormType } from "./ExpenseForm";
import { ExpenseType } from "../Expenses/Expenses";

type NewExpensePropsType = {
  onAddExpense: (arg: ExpenseType) => void;
};

const NewExpense = ({ onAddExpense }: NewExpensePropsType) => {
  const [isEditing, setIsEditing] = React.useState(false);

  const saveExpenseDataHandler = (EnteredExpenseData: ExpenseDataFormType) => {
    const newId = Math.floor(Math.random() * 1001).toString();
    onAddExpense({ id: newId, ...EnteredExpenseData });
    setIsEditing(false);
  };

  const startEditingHandler = () => setIsEditing(true);
  const stopEditingHandler = () => setIsEditing(false);

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
