import React from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export type ExpenseType = {
  id: string;
  title: string;
  amount: number;
  date: Date;
};

export type ExpensesPropsType = {
  expenses: Array<ExpenseType>;
};

const Expenses = ({ expenses }: ExpensesPropsType) => {
  const [selectedYear, setSelectedYear] = React.useState("2020");

  const filterChangeHandler = (selectedYear: string) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (e) => e.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterChange={filterChangeHandler}
        selectedValue={selectedYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
