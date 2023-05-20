import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

type ParamsType = {
  id: string;
  title: string;
  amount: number;
  date: Date;
};

type ExpenseItemPropsType = {
  params: ParamsType;
};

const ExpenseItem = (props: ExpenseItemPropsType) => {
  const { title, amount, date } = props.params;
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
      const savedValue = e.currentTarget.value
      return savedValue
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${amount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;