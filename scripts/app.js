//Dom References
const toggles = document.querySelector(".toggles");
const allTimePeriods = document.querySelectorAll(".toggles span");

//Mock Data References
const timePeriodMockResponse = getTimePeriodValues();

//Plot the graph for 3 days time period by default on app load
window.onload = () => {
  performInitialChartSetup();
};

//Switching the active class on the time period selected
toggles.addEventListener("click", toggleActiveClass);

function toggleActiveClass(e) {
  //If any timeline text is selected (i.e) only SPAN's
  if (e.target.tagName === "SPAN") {
    //Get the selected timeline and its value
    let selectedTimePeriodElement = e.target;
    let selectedTimePeriodValue = selectedTimePeriodElement.innerText;

    //Add the active class on the selected timeline
    selectedTimePeriodElement.classList.toggle("active");

    //Remove the active class on all other timelines
    allTimePeriods.forEach((timePeriod) => {
      if (timePeriod.innerText !== selectedTimePeriodValue) {
        timePeriod.classList.remove("active");
      }
    });

    //Plot new graph for the selected time period
    plotPastTrendsGraph(selectedTimePeriodValue);
  }
}

function plotPastTrendsGraph(timePeriod) {
  //Get currently selected time period value as integer
  let newTimePeriod = parseInt(timePeriod.split("")[0]);

  //Generate n - 1 time period dates before the current date and format it
  let nDates = getNDatesBeforeTheCurrentDate(newTimePeriod);

  //TODO:
  //Call api to get range of values by passing first and last values
  //of nDates variable in yyyy-mm-dd format

  //Access the mock response for the selected time period
  let dataForNewTimePeriod = timePeriodValues[newTimePeriod];

  //TODO: Exchange pair to be replaced by the selected pair in the form
  //Format the mock response
  let formattedResponse = formatTimePeriodResponse(
    dataForNewTimePeriod,
    "USD_PHP"
  );

  //Plot the graph for the updated time range
  displayChart(formattedResponse);
}

//Plot the graph for the selected exchange pair for 3 days by default
function performInitialChartSetup() {
  const defaultTimePeriod = 3;
  const defaultDataForTimePeriod = timePeriodValues[defaultTimePeriod];

  //TODO: Exchange pair to be replaced by the selected pair in the form
  let defaultFormattedTimePeriodResponse = formatTimePeriodResponse(
    defaultDataForTimePeriod,
    "USD_PHP"
  );

  displayChart(defaultFormattedTimePeriodResponse);
}