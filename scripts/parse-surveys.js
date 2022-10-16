const { getSpreadsheetData } = require("./modules/parse-excel");
const { groupedC3JsonFromExcel } = require("./modules/groupedC3DataFromExcel");
const { chartConfig } = require("./config");
const fs = require("fs");

const SRC_PATH = "/../data";
const BASELINES_PATH = `${SRC_PATH}/results_for_sddb.xlsx`;
const EXCEL_DATA_RANGE = {
  firstRow: 5,
  lastRow: 59,
  sheetIndex: 2,
};

////////////////////////////////////////////////////////////////
// MAIN
////////////////////////////////////////////////////////////////

try {
  // Loop through chart configs
  const chartConfigs = Object.keys(chartConfig);
  chartConfigs.forEach((chartId) => {
    const singleChartConfig = chartConfig[chartId];

    const sheetConfig = [
      singleChartConfig.firstDataRow,
      singleChartConfig.lastDataRow,
      singleChartConfig.sheet,
    ];

    const rowData = getSpreadsheetData(
      __dirname + BASELINES_PATH,
      ...sheetConfig
    );

    const data = groupedC3JsonFromExcel(singleChartConfig, rowData);

    // console.log(data);
    // console.log("====================================");
    // console.log(sheetConfig);

    // Pretty print JSON
    // it's not enough data to be worth minifying
    const jsonText = JSON.stringify(data, null, 2);
    fs.writeFileSync(__dirname + `/../public/data/${chartId}.json`, jsonText);
  });
} catch (err) {
  console.error(err);
}
