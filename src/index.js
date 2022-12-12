import "./styles.css";

const addDays = (date, days) => {
  date.setDate(date.getDate() + days);
  return date;
};

const getDateWithoutWorkingDates = (date = new Date(), days = 0) => {
  if (date.toString().includes("Sat") || date.toString().includes("Sun")) {
    const newDate = addDays(date, 1);
    return getDateWithoutWorkingDates(newDate, days);
  } else if (days === 0) {
    return date;
  } else {
    const newDate = addDays(date, 1);
    const newDays = days - 1;
    return getDateWithoutWorkingDates(newDate, newDays);
  }
};

const today = new Date();
const daysToAdd = 11;

document.getElementById("app").innerHTML = `Get a date without weekends`;
document.getElementById("date").innerHTML = `Today date: ${today}`;
document.getElementById("daysToAdd").innerHTML = `daysToAdd: ${daysToAdd}`;
document.getElementById(
  "result"
).innerHTML = `result: ${getDateWithoutWorkingDates(today, daysToAdd)}`;
