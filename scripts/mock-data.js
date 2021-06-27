//Api Key
const apiKey = '282a72274b980e2f97f4';

//Data
const timePeriodValues = {
  3: {
    "query": { count: 1 },
    "date": "2021-06-24",
    "endDate": "2021-06-26",
    "results": {
      "USD_PHP": {
        "id": "USD_PHP",
        "fr": "USD",
        "to": "PHP",
        "val": {
          "2021-06-24": 48.73497,
          "2021-06-25": 48.54517,
          "2021-06-26": 48.54517,
        },
      },
    },
  },
  5: {
    "query": {"count":1},
    "date": "2021-06-22",
    "endDate": "2021-06-26",
    "results": {
      "USD_PHP": {
        "id": "USD_PHP",
        "fr": "USD",
        "to": "PHP",
        "val": {
          "2021-06-22":48.808033,
          "2021-06-23":48.757501,
          "2021-06-24":48.73497,
          "2021-06-25":48.54517,
          "2021-06-26":48.54517
        }
      }
    }
  },
  7: {
    "query": {"count":1},
    "date": "2021-06-20",
    "endDate": "2021-06-26",
    "results": {
      "USD_PHP": {
        "id":"USD_PHP",
        "fr":"USD",
        "to":"PHP",
        "val": {
          "2021-06-20":48.526028,
          "2021-06-21":48.695982,
          "2021-06-22":48.808033,
          "2021-06-23":48.757501,
          "2021-06-24":48.73497,
          "2021-06-25":48.54517,
          "2021-06-26":48.54517
        }
      }
    }
  }
}

//Functions to retrieve the mock data
function getTimePeriodValues() {
  return timePeriodValues;
}
