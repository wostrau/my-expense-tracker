import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";

export type ExpenseType = {
  id: string;
  title: string;
  amount: number;
  date: Date;
};

type ExpensesPropsType = {
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
      {filteredExpenses.map((e) => {
        return <ExpenseItem key={e.id} params={e} />;
      })}
    </Card>
  );
};

export default Expenses;
