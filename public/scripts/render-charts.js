document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");
  // Get everything on the page with the class "chart-container"
  // and render a chart for each one
  var chartContainers = document.getElementsByClassName("svg-chart-container");
  for (var i = 0; i < chartContainers.length; i++) {
    var chartContainer = chartContainers[i];
    var chartId = chartContainer.getAttribute("id");
    var chartDataPath = "./media/" + chartId + ".json";

    d3.json(chartDataPath).then(function (data) {
      console.log("data", data);
      groupedBarsRender(data);
    });
  }
});

function groupedBarsRender(data) {
  var chartData = data.data;

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
        ...(data.maxValue !== undefined && { max: data.maxValue }),
        // min: data.minValue || 0,
        // min: 0,
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
      show: true,
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
            data.yAxisTooltipUnitSuffix || data.unitSuffix,
            data.yAxisTooltipUnitPrefix || data.unitPrefix
          )(x);
        },
      },
    },
  });
}

function numberFormatFunction(yAxisFormat, unitSuffix, unitPrefix) {
  switch (yAxisFormat) {
    case "eleven":
      return function (d) {
        return Math.floor(d / 11) + unitSuffix;
      };
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
