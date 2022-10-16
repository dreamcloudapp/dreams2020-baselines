function formatCellFloat(rawValue, legend, decimals) {
  const value = rawValue === "na" ? 0 : rawValue;
  const units = legend ? legend.units : "";
  const decimalPlaces = decimals || decimals === 0 ? decimals : 2;
  switch (units) {
    case "percent":
      return parseFloat(parseFloat(value * 100).toFixed(decimalPlaces));
    case "millions":
      return parseFloat(parseFloat(value / 1000000).toFixed(decimalPlaces));
    default:
      return parseFloat(parseFloat(value).toFixed(decimalPlaces));
  }
}

const groupedC3JsonFromExcel = (chartConfig, rowData) => {
  const keyColumn = chartConfig.keyColumn || 0;

  // Let's forget about multiple sheets for now
  const rawFirstSheetData = rowData[0];
  const firstSheetData = rawFirstSheetData;

  // Colors
  const colors = chartConfig.legends.reduce((acc, legend) => {
    return {
      ...acc,
      [legend.name]: legend.color,
    };
  }, {});

  // Types
  const types = chartConfig.legends.reduce((acc, legend) => {
    const type = legend.symbol === "rect" ? "bar" : legend.symbol;
    return {
      ...acc,
      [legend.name]: type,
    };
  }, {});

  // Axes
  const axes = chartConfig.legends.reduce((acc, legend) => {
    const axis = legend.doubleAxis ? "y2" : "y";
    return {
      ...acc,
      [legend.name]: axis,
    };
  }, {});

  // Groups
  const rawGroups = firstSheetData.map((row) => {
    return row[keyColumn];
  });
  const groups = ["x", ...rawGroups];

  // Columns
  const rawColumns = chartConfig.legends.map((legend) => {
    const colData = firstSheetData.map((row) => {
      const val = row[legend.column];
      const formattedVal = formatCellFloat(val, legend);

      const emptyValue = val !== 0 && !val;
      return emptyValue ? null : formattedVal;
    });
    return [legend.name, ...colData];
  });

  const columns = [groups, ...rawColumns];

  const exportJson = {
    data: {
      x: "x",
      columns: columns,
      axes: axes,
      types: types,
      colors: colors,
      groups: chartConfig.groups || [],
      regions: chartConfig.regions || {},
    },
    ...chartConfig,
  };

  return exportJson;
};

module.exports = { groupedC3JsonFromExcel };
