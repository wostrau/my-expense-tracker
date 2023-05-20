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
  const { amount, date } = props.params;

  const [title, setTitle] = React.useState<string>(props.params.title);

  const clickHandler = () => {
    setTitle("Updated!");
  };

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
