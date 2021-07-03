const NO_OF_MILLISECONDS_IN_A_DAY = 24 * 60 * 60 * 1000;

function getDateInSpecifiedFormat(dateValue, format = "ddmmyyyy", separator = "-") {
  let result = '';

  //Get day, month and year values from date object
  let day = dateValue.getDate();
  let month = dateValue.getMonth() + 1;
  let year = dateValue.getFullYear();

  //If date's day value is less than 10, pad zeroes to left to make it two digits
  day = day < 10 ? padZeroesToValue(day) : day;

  //If month is not and above October, pad zeroes to left to make it two digits
  month = month < 10 ? padZeroesToValue(month) : month;

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

  //Store current date
  let currentDate = new Date();
  previousDates.push(currentDate);

  //Loop over n - 1 times to generate dates for the previous n days
  for (let i = 1; i < n; i++) {

    //Get previous day's date by multiplying the milliseconds 
    //in a day and the current ith day 
    let dateOffset = NO_OF_MILLISECONDS_IN_A_DAY * i;

    let beforeDate = new Date();

    //Generate the ith previous date by subtracting the 
    //current milliseconds with the date offset
    beforeDate.setTime(beforeDate.getTime() - dateOffset);

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

function padZeroesToValue(value) {
  return "0" + value;
}
