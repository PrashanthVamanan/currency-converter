function formatTimePeriodResponse(response, currentExchange) {
  //Define the structure of the response to be returned
  let formattedResponse = {
    'data': [],
    'categories': [],
    'exchangePair': '',
    'valueSuffix': ''
  };

  //Access the needed properties from the response
  let results = response["results"][currentExchange];
  let dataValues = results["val"];
  let dataKeys = Object.keys(dataValues).reverse();

  let currentExchangeValues = currentExchange.split("_");

  //Format data keys from yyyy-mm-dd format to dd-mm-yyyy format
  dataKeys = getNDatesInSpecifiedFormat(dataKeys);
  
  //Build the final response object to be passed to the plot graph function
  formattedResponse['categories'] = [...formattedResponse['categories'], ...dataKeys];

  //Change the exchange pair name separated by _ to separated by -
  formattedResponse['exchangePair'] = currentExchangeValues.join("-");

  //Add the value suffix to be shown on hover in the graph plot
  formattedResponse['valueSuffix'] = " " + currentExchangeValues[1];

  for (let key in dataValues) {
    let value = dataValues[key];
    formattedResponse['data'].push(value);
  }

  return formattedResponse;
}
