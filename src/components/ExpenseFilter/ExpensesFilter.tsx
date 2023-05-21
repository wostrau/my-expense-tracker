import React from "react";
import "./ExpensesFilter.css";

type ExpensesFilterPropsType = {
  onFilterChange: (filter: string) => void;
  selectedValue: string;
};

const ExpensesFilter = ({
  onFilterChange,
  selectedValue,
}: ExpensesFilterPropsType) => {
  const dropdownChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onFilterChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selectedValue} onChange={dropdownChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
