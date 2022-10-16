// Like it says on the label
// rows become cols, cols become rows.
const transposeTable = (arrayOfArrays, shouldRemoveHeader) => {
  if (!arrayOfArrays) {
    console.log("No array provided to transposeTable");
    return arrayOfArrays;
  }

  const newTable = [];
  // Loop through current rows
  for (let i = 0; i < arrayOfArrays.length; i++) {
    const row = arrayOfArrays[i];
    // Loop through the columns
    for (let j = 0; j < row.length; j++) {
      const cell = row[j];

      // Swap rows and columns
      if (!newTable[j]) {
        newTable[j] = [];
      }
      newTable[j][i] = cell;
    }
  }
  return shouldRemoveHeader ? newTable.slice(1, newTable.length) : newTable;
};

module.exports = { transposeTable };
