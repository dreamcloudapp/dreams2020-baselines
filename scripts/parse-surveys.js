const { getSpreadsheetData } = require("./modules/parse-excel");
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
  // Prep: read the photo credits excel file
  const sheetData = getSpreadsheetData(
    __dirname + BASELINES_PATH,
    EXCEL_DATA_RANGE.firstRow,
    EXCEL_DATA_RANGE.lastRow,
    EXCEL_DATA_RANGE.sheetIndex
  );

  console.log(sheetData);

  //   // Pretty print JSON
  //   // it's not enough data to be worth minifying
  //   const jsonText = JSON.stringify(data, null, 2);
  //   fs.writeFileSync(__dirname + "/../public/data/baselines.json", jsonText);
} catch (err) {
  console.error(err);
}
