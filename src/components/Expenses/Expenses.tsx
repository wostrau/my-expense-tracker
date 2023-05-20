import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

type ExpensesPropsType = {
  expenses: Array<{
    id: string;
    title: string;
    amount: number;
    date: Date;
  }>;
};

const Expenses = ({ expenses }: ExpensesPropsType) => {
  return (
    <Card className="expenses">
      {expenses.map((e) => {
        return <ExpenseItem key={e.id} params={e} />;
      })}
    </Card>
  );
};

export default Expenses;
