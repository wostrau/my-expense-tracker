import React from "react";
import "./ExpenseItem.css";

type ParamsType = {
  id: string;
  title: string;
  amount: number;
  date: Date;
};

type ExpenseItemPropsType = {
  params: ParamsType;
};

function ExpenseItem(props: ExpenseItemPropsType) {
  const { title, amount, date } = props.params;
  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${amount}</div>
    </div>
  );
}

export default ExpenseItem;
