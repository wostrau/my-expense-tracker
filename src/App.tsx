import React from "react";
import Expenses, { ExpenseType } from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const InitialExpenses: Array<ExpenseType> = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
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
]

const App = () => {
  const [expenses, setExpenses] = React.useState<Array<ExpenseType>>(InitialExpenses);

  const addExpenseHandler = (expense: ExpenseType) => {
    setExpenses(prevState => [expense, ...prevState])
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
