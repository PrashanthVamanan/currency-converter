const displayChart = () => {
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
      categories: [
        "11-03-2021",
        "12-03-2021",
        "13-03-2021",
        "14-03-2021",
        "15-03-2021",
        "16-03-2021",
      ],
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
      valueSuffix: " PHP",
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
        name: "USD-PHP",
        data: [48.4, 48.49, 48.49, 48.49, 48.54, 48.62],
      },
    ]
  });
};
