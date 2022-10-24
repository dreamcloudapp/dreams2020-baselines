const { getSpreadsheetData } = require("./modules/parse-excel");
const { groupedC3JsonFromExcel } = require("./modules/groupedC3DataFromExcel");
const { chartConfig } = require("./config");
const fs = require("fs");

const SRC_PATH = "/../data";
const COVID_DATA_PATH = `${SRC_PATH}/results_for_sddb.xlsx`;
const BLM_DATA_PATH = `${SRC_PATH}/blm_results_for_sddb.xlsx`;

////////////////////////////////////////////////////////////////
// MAIN
////////////////////////////////////////////////////////////////

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

    const dataPath =
      singleChartConfig.excel === "covid" ? COVID_DATA_PATH : BLM_DATA_PATH;

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
