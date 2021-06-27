function getDateInSpecifiedFormat(dateValue, format = "ddmmyyyy", separator = "-") {
  let result = '';

  //Get day, month and year values from date object
  let day = dateValue.getDate();
  let month = dateValue.getMonth() + 1;
  let year = dateValue.getFullYear();

  //If month is not and above October, pad zeroes to left to make it two digits
  if (month < 10) {
    month = padZeroesToMonth(month);
  }

  //Return the formatted string with the specified separator in the specified format
  switch(format) {
    case "ddmmyyyy":
      result = `${day}${separator}${month}${separator}${year}`;
      break;
    case "yyyymmdd":
      result = `${year}${separator}${month}${separator}${day}`;
      break;
    default:
      console.log("Unsupported date format!");
      break;
  }
  
  return result;
}

function getNDatesBeforeTheCurrentDate(n) {
  let previousDates = [];

  //Store current date and the timestamp in milliseconds of the current date
  let currentDate = new Date();
  let yesterday = new Date(currentDate.getTime());

  //Loop over n - 1 times to generate dates for the previous n days
  for (let i = 0; i < n; i++) {

    //Get previous day's date by subtracting current value of i with current date value
    let beforeDate = new Date(yesterday.setDate(currentDate.getDate() - i));

    previousDates.push(beforeDate);
  }

  return previousDates;
}

function getNDatesInSpecifiedFormat(dates, format = "ddmmyyyy") {
  let formattedDates = [];

  dates.forEach(date => {
    date = date.constructor.name !== 'Date' ? new Date(date) : date;
    formattedDates.push(getDateInSpecifiedFormat(date, format));
  }); 

  return formattedDates;
}

function padZeroesToMonth(month) {
  return "0" + month;
}
