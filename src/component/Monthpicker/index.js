import React, { useState } from "react";
import { Month, WrapperMonth, WrapperYear } from "./units";

export const MonthPicker = ({ onClickHandler }) => {
  const [date, setDate] = useState({
    year: 2020,
    month: [
      "Янв",
      "Фев",
      "Март",
      "Апр",
      "Май",
      "Июнь",
      "Июль",
      "Авг",
      "Сент",
      "Окт",
      "Ноя",
      "Дек",
    ],
  });
  const dates = [
    new Date(date.year, 0),
    new Date(date.year, 1),
    new Date(date.year, 2),
    new Date(date.year, 3),
    new Date(date.year, 4),
    new Date(date.year, 5),
    new Date(date.year, 6),
    new Date(date.year, 7),
    new Date(date.year, 8),
    new Date(date.year, 9),
    new Date(date.year, 10),
    new Date(date.year, 11),
  ];
  const [firstDate, setFirstDate] = useState(null);
  const [secondDate, setSecondDate] = useState(null);
  const monthHandler = (index) => {
    if ((firstDate && secondDate) || !firstDate) {
      setFirstDate(new Date(date.year, index, 1));
      setSecondDate("");
    } else {
      const dateTo = new Date(date.year, index);
      if (firstDate.getTime() > dateTo.getTime()) {
        setSecondDate(
          new Date(firstDate.getFullYear(), firstDate.getMonth() + 1, 0)
        );
        setFirstDate(dateTo);
      } else {
        setSecondDate(new Date(date.year, index + 1, 0));
      }
    }
  };
  const firstValue = firstDate
    ? date.month[firstDate.getMonth()] + "." + firstDate.getFullYear()
    : "";
  const secondValue = secondDate
    ? "-" + date.month[secondDate.getMonth()] + "." + secondDate.getFullYear()
    : "";

  return (
    <div>
      <h4>Календарь</h4>
      <input placeholder={"Выберите месяцы"} value={firstValue + secondValue} />
      <div>
        <WrapperYear>
          <button onClick={() => setDate({ ...date, year: date.year - 1 })}>
            left
          </button>
          <div>{date.year}</div>
          <button onClick={() => setDate({ ...date, year: date.year + 1 })}>
            right
          </button>
        </WrapperYear>
        <WrapperMonth>
          {dates.reduce((result, count, index) => {
            if (
              (firstDate && count.getTime() === firstDate.getTime()) ||
              (secondDate &&
                count.getMonth() === secondDate.getMonth() &&
                count.getFullYear() === secondDate.getFullYear())
            ) {
              result.push(
                <Month onClick={() => monthHandler(index)} inPeriod select>
                  {date.month[index]}
                </Month>
              );
            } else if (
              firstDate &&
              secondDate &&
              count.getTime() > firstDate.getTime() &&
              count.getTime() < secondDate.getTime()
            ) {
              result.push(
                <Month onClick={() => monthHandler(index)} inPeriod>
                  {date.month[index]}
                </Month>
              );
            } else {
              result.push(
                <Month onClick={() => monthHandler(index)}>
                  {date.month[index]}
                </Month>
              );
            }
            return result;
          }, [])}
        </WrapperMonth>
      </div>
      <button
        onClick={() => {
          onClickHandler(firstDate, secondDate);
          setFirstDate(null);
          setSecondDate(null);
        }}
      >
        Применить
      </button>
    </div>
  );
};
