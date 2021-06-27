const displayChart = config => {
  let { categories, data, exchangePair, valueSuffix} = config;

  Highcharts.chart("container", {
    chart: {
      backgroundColor: "#f9f7f7",
    },
    title: {
      text: "Past Trends for the Selected Exchange",
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories,
      tickmarkPlacement: "on",
      title: {
        enabled: false,
      },
    },
    yAxis: {
      gridLineWidth: 0,
      title: {
        text: "Exchange Value",
      },
    },
    tooltip: {
      split: true,
      valueSuffix
    },
    plotOptions: {
      series: {
        lineColor: "#112d4e",
        marker: {
          fillColor: "#07689f",
        },
      },
    },
    series: [
      {
        name: exchangePair,
        data,
      },
    ]
  });
};
