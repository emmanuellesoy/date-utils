import "./styles.css";

const addDays = (date, days) => {
  date.setDate(date.getDate() + days);
  return date;
};

const getDateWithoutWorkingDates = (date = new Date(), days = 0) => {
  if ((days = 0 && !date.toString().includes(["SAT", "SUN"]))) {
    return date;
  } else if (date.toString().includes(["SAT", "SUN"])) {
    const newDate = addDays(date, 1);
    return getDateWithoutWorkingDates(newDate, days);
  } else {
    const newDate = addDays(date, 1);
    const newDays = days - 1;
    return getDateWithoutWorkingDates(newDate, newDays);
  }
};

const today = new Date();
const daysToAdd = 5;

document.getElementById("app").innerHTML = `Get a date without weekends`;

document.getElementById("date").innerHTML = `Date: ${today}`;

document.getElementById("daysToAdd").innerHTML = `Days to add: ${daysToAdd}`;

document.getElementById(
  "result"
).innerHTML = `Result: ${getDateWithoutWorkingDates(today, daysToAdd)}`;
