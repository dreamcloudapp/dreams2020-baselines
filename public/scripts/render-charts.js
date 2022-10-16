document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");
  // Get everything on the page with the class "chart-container"
  // and render a chart for each one
  var chartContainers = document.getElementsByClassName("svg-chart-container");
  for (var i = 0; i < chartContainers.length; i++) {
    console.log("chartContainers[i].id", chartContainers[i].id);

    var chartContainer = chartContainers[i];
    var chartId = chartContainer.getAttribute("id");
    var chartDataPath = "./data/" + chartId + ".json";

    console.log("chartDataPath", chartDataPath);

    d3.json(chartDataPath).then(function (data) {
      console.log("data", data);
      groupedBarsRender(data);
    });

    console.log("OK");
  }
});

function groupedBarsRender(data) {
  var chartData = data.data;

  console.log("chartDatasss", chartData);

  console.log(data.chartId);

  c3.generate({
    bindto: "#" + data.chartId,
    data: chartData,
    axis: {
      rotated: data.rotateAxis ? true : false,
      x: {
        type: "category", // this is needed to load string x value
        tick: {
          rotate:
            data.rotateXAxisTicks === undefined ? 45 : data.rotateXAxisTicks,
          multiline:
            data.multilineXAxisTicks === undefined
              ? false
              : data.multilineXAxisTicks,
        },
        height: data.xAxisHeight === undefined ? 70 : data.xAxisHeight,
      },
      y: {
        label: {
          text: data.yLabel,
          position: "outer-middle",
        },
        tick: {
          format: numberFormatFunction(
            data.yAxisFormat,
            data.unitSuffix,
            data.unitPrefix
          ),
        },
      },
      y2: {
        show: data.doubleAxis === true,
        label: {
          text: data.doubleYAxisLabel,
          position: "outer-middle",
        },
        tick: {
          format: numberFormatFunction(
            data.doubleYAxisFormat,
            data.doubleYAxisSuffix,
            data.doubleYAxisPrefix
          ),
        },
      },
      ticks: {
        show: false,
      },
    },
    grid: {
      y: {
        show: true,
      },
    },
    legend: {
      show: false,
    },
    point: {
      r: data.pointRadius || 1,
      opacity: 1,
    },
    tooltip: {
      format: {
        value: function (x, ratio, id, index) {
          // HACKS
          if (id.toLowerCase().includes("rhs")) {
            return numberFormatFunction(
              data.doubleYAxisFormat || data.doubleYAxisTooltipFormat,
              data.doubleYAxisTooltipUnitSuffix || data.doubleYAxisSuffix,
              data.doubleYAxisTooltipUnitPrefix || data.doubleYAxisPrefix
            )(x);
          }
          return numberFormatFunction(
            data.yAxisTooltipFormat || data.yAxisFormat,
            data.unitSuffix,
            data.unitPrefix
          )(x);
        },
      },
    },
  });
}

function numberFormatFunction(yAxisFormat, unitSuffix, unitPrefix) {
  switch (yAxisFormat) {
    default:
      return function (d) {
        if (d === null || d === undefined) return "";
        if (typeof d !== "number") {
          return d.toString();
        } else {
          return (unitPrefix || "") + d + (unitSuffix || "");
        }
      };
  }
}

// var chart = c3.generate({
//   // bind to the chart-container div
//   bindto: "#chart-container",
//   data: {
//     columns: [
//       ["data1", -30, 200, 200, 400, -150, 250],
//       ["data2", 130, 100, -100, 200, -150, 50],
//       ["data3", -230, 200, 200, -300, 250, 250],
//     ],
//     type: "bar",
//     groups: [["data1", "data2"]],
//   },
//   grid: {
//     y: {
//       lines: [{ value: 0 }],
//     },
//   },
// });

// setTimeout(function () {
//   chart.groups([["data1", "data2", "data3"]]);
// }, 1000);

// setTimeout(function () {
//   chart.load({
//     columns: [["data4", 100, -50, 150, 200, -300, -100]],
//   });
// }, 1500);

// setTimeout(function () {
//   chart.groups([["data1", "data2", "data3", "data4"]]);
// }, 2000);
