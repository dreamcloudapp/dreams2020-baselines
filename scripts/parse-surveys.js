const { getSpreadsheetData } = require("./modules/parse-excel");
const { groupedC3JsonFromExcel } = require("./modules/groupedC3DataFromExcel");
const { chartConfig } = require("./config");
const fs = require("fs");

const SRC_PATH = "/../data";
const COVID_DATA_PATH = `${SRC_PATH}/pandemic_april_results_for_sddb.xlsx`;
const BLM_DATA_PATH = `${SRC_PATH}/blm_results_for_sddb.xlsx`;
const ELECTION_DATA_PATH = `${SRC_PATH}/election_results_for_sddb.xlsx`;

////////////////////////////////////////////////////////////////
// MAIN
////////////////////////////////////////////////////////////////

const getSheetByName = (sheetName) => {
  switch (sheetName) {
    case "covid":
      return COVID_DATA_PATH;
    case "blm":
      return BLM_DATA_PATH;
    case "election":
      return ELECTION_DATA_PATH;
    default:
      console.log("No sheet name provided");
      return COVID_DATA_PATH;
  }
};

try {
  // Loop through chart configs
  const chartConfigs = Object.keys(chartConfig);
  chartConfigs.forEach((chartId) => {
    const singleChartConfig = chartConfig[chartId];

    const colRange = singleChartConfig.colRange
      ? singleChartConfig.colRange
      : [singleChartConfig.firstDataColumn, singleChartConfig.lastDataColumn];

    const sheetConfig = [
      singleChartConfig.firstDataRow,
      singleChartConfig.lastDataRow,
      singleChartConfig.sheet,
      ...colRange,
    ];

    const dataPath = getSheetByName(singleChartConfig.excel);

    const rowData = getSpreadsheetData(__dirname + dataPath, ...sheetConfig);

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
