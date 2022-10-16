const { colors } = require("./modules/colors");

const chartConfig = {
  "q1-gender": {
    chartId: "q1-gender",
    firstDataRow: 9,
    lastDataRow: 15,
    sheet: 2,
    chartColors: {
      axisLabel: colors.main,
    },
    legends: [
      {
        name: "Male",
        color: "red",
        symbol: "rect",
        units: "percent",
        column: 2,
      },
      {
        name: "Female",
        color: "blue",
        symbol: "rect",
        units: "percent",
        column: 3,
      },
    ],
  },
};

module.exports = { chartConfig };
