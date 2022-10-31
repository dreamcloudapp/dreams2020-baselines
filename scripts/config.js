const { colors } = require("./modules/colors");

const legends = {
  covidQ1: [
    {
      name: "Increased a lot",
      color: colors.good,
      symbol: "rect",
      units: "percent",
      column: 3,
    },
    {
      name: "Increased somewhat",
      color: colors.ok,
      symbol: "rect",
      units: "percent",
      column: 4,
    },
    {
      name: "Stayed the same",
      color: colors.neutral,
      symbol: "rect",
      units: "percent",
      column: 5,
    },
    {
      name: "Decreased somewhat",
      color: colors.warn,
      symbol: "rect",
      units: "percent",
      column: 6,
    },
    {
      name: "Decreased a lot",
      color: colors.bad,
      symbol: "rect",
      units: "percent",
      column: 7,
    },
  ],
  covidQ2: [
    {
      name: "Yes, I have",
      color: colors.good,
      symbol: "rect",
      units: "percent",
      column: 12,
    },
    {
      name: "No, I haven't",
      color: colors.bad,
      symbol: "rect",
      units: "percent",
      column: 13,
    },
  ],
  covidQ3: [
    {
      name: "Approve",
      color: colors.good,
      symbol: "rect",
      units: "percent",
      column: 16,
    },
    {
      name: "Disapprove",
      color: colors.bad,
      symbol: "rect",
      units: "percent",
      column: 17,
    },
    {
      name: "No opinion",
      color: colors.warn,
      symbol: "rect",
      units: "percent",
      column: 18,
    },
  ],
  // COVID ALL
  covid_totals_Q2: [
    {
      name: "Yes, I have",
      color: colors.good,
      symbol: "rect",
      units: "percent",
      column: 13,
    },
    {
      name: "No, I haven't",
      color: colors.bad,
      symbol: "rect",
      units: "percent",
      column: 14,
    },
  ],

  // Protestant
  // Roman Catholic
  // Mormon
  // Eastern or Greek Orthodox
  // Jewish
  // Muslim
  // Buddhist
  // Hindu
  // Atheist
  // Agnostic
  // Nothing in particular
  // Something else
  blmQ1: [
    {
      name: "Protestant",
      color: colors.categoryColors[0],
      symbol: "rect",
      units: "percent",
      column: 3,
    },
    {
      name: "Roman Catholic",
      color: colors.categoryColors[1],
      symbol: "rect",
      units: "percent",
      column: 4,
    },
    {
      name: "Mormon",
      color: colors.categoryColors[2],
      symbol: "rect",
      units: "percent",
      column: 5,
    },
    {
      name: "Eastern or Greek Orthodox",
      color: colors.categoryColors[3],
      symbol: "rect",
      units: "percent",
      column: 6,
    },
    {
      name: "Jewish",
      color: colors.categoryColors[4],
      symbol: "rect",
      units: "percent",
      column: 7,
    },
    {
      name: "Muslim",
      color: colors.categoryColors[5],
      symbol: "rect",
      units: "percent",
      column: 8,
    },
    {
      name: "Buddhist",
      color: colors.categoryColors[6],
      symbol: "rect",
      units: "percent",
      column: 9,
    },
    {
      name: "Hindu",
      color: colors.categoryColors[7],
      symbol: "rect",
      units: "percent",
      column: 10,
    },
    {
      name: "Atheist",
      color: colors.categoryColors[8],
      symbol: "rect",
      units: "percent",
      column: 11,
    },
    {
      name: "Agnostic",
      color: colors.categoryColors[9],
      symbol: "rect",
      units: "percent",
      column: 12,
    },
    {
      name: "Nothing in particular",
      color: colors.categoryColors[10],
      symbol: "rect",
      units: "percent",
      column: 13,
    },
    {
      name: "Something else",
      color: colors.categoryColors[11],
      symbol: "rect",
      units: "percent",
      column: 14,
    },
  ],
  // blmQ3
  // Almost every morning or more often
  // Several times a week
  // Once a week
  // 1 to 3 times a month
  // Less often than once a month
  // Never
  // Net: Once a week or more
  // Net: Less than once a week
  blmQ3: [
    {
      name: "Almost every morning or more often",
      color: colors.categoryColors[0],
      symbol: "rect",
      units: "percent",
      column: 27,
    },
    {
      name: "Several times a week",
      color: colors.categoryColors[1],
      symbol: "rect",
      units: "percent",
      column: 28,
    },
    {
      name: "Once a week",
      color: colors.categoryColors[2],
      symbol: "rect",
      units: "percent",
      column: 29,
    },
    {
      name: "1 to 3 times a month",
      color: colors.categoryColors[3],
      symbol: "rect",
      units: "percent",
      column: 30,
    },
    {
      name: "Less often than once a month",
      color: colors.categoryColors[4],
      symbol: "rect",
      units: "percent",
      column: 31,
    },
    {
      name: "Never",
      color: colors.categoryColors[5],
      symbol: "rect",
      units: "percent",
      column: 32,
    },
  ],
  blmQ4: [
    {
      name: "Almost every morning or more often",
      color: colors.categoryColors[0],
      symbol: "rect",
      units: "percent",
      column: 37,
    },
    {
      name: "Several times a week",
      color: colors.categoryColors[1],
      symbol: "rect",
      units: "percent",
      column: 38,
    },
    {
      name: "Once a week",
      color: colors.categoryColors[2],
      symbol: "rect",
      units: "percent",
      column: 39,
    },
    {
      name: "1 to 3 times a month",
      color: colors.categoryColors[3],
      symbol: "rect",
      units: "percent",
      column: 40,
    },
    {
      name: "Less often than once a month",
      color: colors.categoryColors[4],
      symbol: "rect",
      units: "percent",
      column: 41,
    },
    {
      name: "Never",
      color: colors.categoryColors[5],
      symbol: "rect",
      units: "percent",
      column: 42,
    },
  ],
  blmQ7: [
    {
      name: "Yes, I have",
      color: colors.good,
      symbol: "rect",
      units: "percent",
      column: 66,
    },
    {
      name: "No, I haven't",
      color: colors.bad,
      symbol: "rect",
      units: "percent",
      column: 67,
    },
  ],
  election_WSB_Q2: [
    {
      name: "Yes, I have",
      color: colors.good,
      symbol: "rect",
      units: "percent",
      column: 81,
    },
    {
      name: "No, I haven't",
      color: colors.bad,
      symbol: "rect",
      units: "percent",
      column: 82,
    },
    {
      name: "Can't recall",
      color: colors.warn,
      symbol: "rect",
      units: "percent",
      column: 83,
    },
  ],
  election_WSB_Q3: [
    {
      name: "Yes, I have",
      color: colors.good,
      symbol: "rect",
      units: "percent",
      column: 86,
    },
    {
      name: "No, I haven't",
      color: colors.bad,
      symbol: "rect",
      units: "percent",
      column: 87,
    },
    {
      name: "Can't recall",
      color: colors.warn,
      symbol: "rect",
      units: "percent",
      column: 88,
    },
  ],
};

const groups = {
  covidQ1: [
    [
      "Increased a lot",
      "Increased somewhat",
      "Stayed the same",
      "Decreased somewhat",
      "Decreased a lot",
    ],
  ],
  covidQ2: [["Yes, I have", "No, I haven't"]],
  covidQ3: [["Approve", "Disapprove", "No opinion"]],
  blmQ1: [
    [
      "Protestant",
      "Roman Catholic",
      "Mormon",
      "Eastern or Greek Orthodox",
      "Jewish",
      "Muslim",
      "Buddhist",
      "Hindu",
      "Atheist",
      "Agnostic",
      "Nothing in particular",
      "Something else",
    ],
  ],
  blmQ3: [
    [
      "Almost every morning or more often",
      "Several times a week",
      "Once a week",
      "1 to 3 times a month",
      "Less often than once a month",
      "Never",
    ],
  ],
  blmQ4: [
    [
      "Almost every morning or more often",
      "Several times a week",
      "Once a week",
      "1 to 3 times a month",
      "Less often than once a month",
      "Never",
    ],
  ],
  blmQ7: [["Yes, I have", "No, I haven't"]],
  election_WSB_Q2: [["Yes, I have", "No, I haven't", "Can't recall"]],
  election_WSB_Q3: [["Yes, I have", "No, I haven't", "Can't recall"]],
  covid_totals_Q2: [["Yes, I have", "No, I haven't"]],
};

const colRanges = {
  total: [0, 2],
  gender: [1, 3],
  age: [3, 6],
  region: [6, 10],
  race: [10, 14],
  education: [14, 18],
  marital: [18, 29],
  parent: [29, 34],
  income: [34, 38],
  socialNetworks: [38, 55],
  marital_blm: [20, 31],
  parent_blm: [31, 36],
  // BLM
  income_blm: [36, 40],
  socialNetworks_blm: [40, 57],
  // Elections
  socialNetworks_elections: [38, 56],
  religion: [56, 68],
  political: [68, 70],
  recallFrequency: [70, 72],
};

const basicConfig = {
  transpose: true,
  sheet: 2,
  maxValue: 99,
  rotateAxis: true,
  unitSuffix: "%",
  chartColors: {
    axisLabel: colors.main,
  },
};

const chartConfig = {
  // COVID TOTALS
  "covid-totals-q2": {
    chartId: "covid-totals-q2",
    excel: "covid-totals",
    firstDataRow: 0,
    lastDataRow: 30,
    colRange: colRanges.total,
    ...basicConfig,
    sheet: 0,
    legends: legends.covid_totals_Q2,
    groups: groups.covid_totals_Q2,
  },

  // COVID APRIL
  // Question 1
  "q1-gender": {
    chartId: "q1-gender",
    title: "Increase in frequency of dream recall, March-April 2020, by gender",
    excel: "covid",
    firstDataRow: 5,
    lastDataRow: 30,
    colRange: colRanges.gender,
    ...basicConfig,
    legends: legends.covidQ1,
    groups: groups.covidQ1,
  },
  "q1-age": {
    chartId: "q1-age",
    title: "Increase in frequency of dream recall, March-April 2020, by age",
    excel: "covid",
    firstDataRow: 5,
    lastDataRow: 30,
    colRange: colRanges.age,
    ...basicConfig,
    legends: legends.covidQ1,
    groups: groups.covidQ1,
  },
  "q1-region": {
    chartId: "q1-region",
    title: "Increase in frequency of dream recall, March-April 2020, by region",
    excel: "covid",
    firstDataRow: 5,
    lastDataRow: 30,
    colRange: colRanges.region,
    ...basicConfig,
    legends: legends.covidQ1,
    groups: groups.covidQ1,
  },
  "q1-race": {
    chartId: "q1-race",
    title: "Increase in frequency of dream recall, March-April 2020, by race",
    excel: "covid",
    firstDataRow: 5,
    lastDataRow: 30,
    colRange: colRanges.race,
    ...basicConfig,
    legends: legends.covidQ1,
    groups: groups.covidQ1,
  },
  "q1-education": {
    chartId: "q1-education",
    title:
      "Increase in frequency of dream recall, March-April 2020, by education",
    excel: "covid",
    firstDataRow: 5,
    lastDataRow: 30,
    colRange: colRanges.education,
    ...basicConfig,
    legends: legends.covidQ1,
    groups: groups.covidQ1,
  },
  "q1-marital-status": {
    chartId: "q1-marital-status",
    title:
      "Increase in frequency of dream recall, March-April 2020, by marital status",
    excel: "covid",
    firstDataRow: 5,
    lastDataRow: 30,
    colRange: colRanges.marital,
    ...basicConfig,
    legends: legends.covidQ1,
    groups: groups.covidQ1,
  },
  "q1-parent": {
    chartId: "q1-parent",
    title:
      "Increase in frequency of dream recall, March-April 2020, by parental status",
    excel: "covid",
    firstDataRow: 5,
    lastDataRow: 30,
    colRange: colRanges.parent,
    ...basicConfig,
    legends: legends.covidQ1,
    groups: groups.covidQ1,
  },
  "q1-income": {
    chartId: "q1-income",
    title: "Increase in frequency of dream recall, March-April 2020, by income",
    excel: "covid",
    firstDataRow: 5,
    lastDataRow: 30,
    colRange: colRanges.income,
    ...basicConfig,
    legends: legends.covidQ1,
    groups: groups.covidQ1,
  },
  "q1-social-networks": {
    chartId: "q1-social-networks",
    title:
      "Increase in frequency of dream recall, March-April 2020, by social network membership",
    excel: "covid",
    firstDataRow: 5,
    lastDataRow: 30,
    colRange: colRanges.socialNetworks,
    ...basicConfig,
    legends: legends.covidQ1,
    groups: groups.covidQ1,
  },
  // Q2
  "q2-gender": {
    chartId: "q2-gender",
    transpose: true,
    excel: "covid",
    firstDataRow: 5,
    lastDataRow: 30,
    firstDataColumn: 1,
    lastDataColumn: 3,
    sheet: 2,
    maxValue: 99,
    rotateAxis: true,
    unitSuffix: "%",
    chartColors: {
      axisLabel: colors.main,
    },
    legends: legends.covidQ2,
    groups: groups.covidQ2,
  },
  "q2-age": {
    chartId: "q2-age",
    transpose: true,
    excel: "covid",
    firstDataRow: 5,
    lastDataRow: 30,
    firstDataColumn: 3,
    lastDataColumn: 6,
    sheet: 2,
    maxValue: 99,
    rotateAxis: true,
    unitSuffix: "%",
    chartColors: {
      axisLabel: colors.main,
    },
    legends: legends.covidQ2,
    groups: groups.covidQ2,
  },
  "q2-region": {
    chartId: "q2-region",
    transpose: true,
    excel: "covid",
    firstDataRow: 5,
    lastDataRow: 30,
    firstDataColumn: 6,
    lastDataColumn: 10,
    sheet: 2,
    maxValue: 99,
    rotateAxis: true,
    unitSuffix: "%",
    chartColors: {
      axisLabel: colors.main,
    },
    legends: legends.covidQ2,
    groups: groups.covidQ2,
  },
  "q2-race": {
    chartId: "q2-race",
    transpose: true,
    excel: "covid",
    firstDataRow: 5,
    lastDataRow: 30,
    firstDataColumn: 10,
    lastDataColumn: 14,
    sheet: 2,
    maxValue: 99,
    rotateAxis: true,
    unitSuffix: "%",
    chartColors: {
      axisLabel: colors.main,
    },
    legends: legends.covidQ2,
    groups: groups.covidQ2,
  },
  "q2-education": {
    chartId: "q2-education",
    transpose: true,
    excel: "covid",
    firstDataRow: 5,
    lastDataRow: 30,
    firstDataColumn: 14,
    lastDataColumn: 18,
    sheet: 2,
    maxValue: 99,
    rotateAxis: true,
    unitSuffix: "%",
    chartColors: {
      axisLabel: colors.main,
    },
    legends: legends.covidQ2,
    groups: groups.covidQ2,
  },
  "q2-marital-status": {
    chartId: "q2-marital-status",
    transpose: true,
    excel: "covid",
    firstDataRow: 5,
    lastDataRow: 30,
    firstDataColumn: 18,
    lastDataColumn: 29,
    sheet: 2,
    maxValue: 99,
    rotateAxis: true,
    unitSuffix: "%",
    chartColors: {
      axisLabel: colors.main,
    },
    legends: legends.covidQ2,
    groups: groups.covidQ2,
  },
  "q2-parent": {
    chartId: "q2-parent",
    transpose: true,
    excel: "covid",
    firstDataRow: 5,
    lastDataRow: 30,
    firstDataColumn: 29,
    lastDataColumn: 34,
    sheet: 2,
    maxValue: 99,
    rotateAxis: true,
    unitSuffix: "%",
    chartColors: {
      axisLabel: colors.main,
    },
    legends: legends.covidQ2,
    groups: groups.covidQ2,
  },
  "q2-income": {
    chartId: "q2-income",
    transpose: true,
    excel: "covid",
    firstDataRow: 5,
    lastDataRow: 30,
    firstDataColumn: 34,
    lastDataColumn: 38,
    sheet: 2,
    maxValue: 99,
    rotateAxis: true,
    unitSuffix: "%",
    chartColors: {
      axisLabel: colors.main,
    },
    legends: legends.covidQ2,
    groups: groups.covidQ2,
  },
  "q2-social-networks": {
    chartId: "q2-social-networks",
    transpose: true,
    excel: "covid",
    firstDataRow: 5,
    lastDataRow: 30,
    firstDataColumn: 38,
    lastDataColumn: 55,
    sheet: 2,
    maxValue: 99,
    rotateAxis: true,
    unitSuffix: "%",
    chartColors: {
      axisLabel: colors.main,
    },
    legends: legends.covidQ2,
    groups: groups.covidQ2,
  },
  // Q3
  "q3-gender": {
    chartId: "q3-gender",
    transpose: true,
    excel: "covid",
    firstDataRow: 5,
    lastDataRow: 30,
    firstDataColumn: 1,
    lastDataColumn: 3,
    sheet: 2,
    maxValue: 99,
    rotateAxis: true,
    unitSuffix: "%",
    chartColors: {
      axisLabel: colors.main,
    },
    legends: legends.covidQ3,
    groups: [["Approve", "Disapprove", "No opinion"]],
  },
  "q3-age": {
    chartId: "q3-age",
    transpose: true,
    excel: "covid",
    firstDataRow: 5,
    lastDataRow: 30,
    firstDataColumn: 3,
    lastDataColumn: 6,
    sheet: 2,
    maxValue: 99,
    rotateAxis: true,
    unitSuffix: "%",
    chartColors: {
      axisLabel: colors.main,
    },
    legends: legends.covidQ3,
    groups: [["Approve", "Disapprove", "No opinion"]],
  },
  "q3-region": {
    chartId: "q3-region",
    transpose: true,
    excel: "covid",
    firstDataRow: 5,
    lastDataRow: 30,
    firstDataColumn: 6,
    lastDataColumn: 10,
    sheet: 2,
    maxValue: 99,
    rotateAxis: true,
    unitSuffix: "%",
    chartColors: {
      axisLabel: colors.main,
    },
    legends: legends.covidQ3,
    groups: [["Approve", "Disapprove", "No opinion"]],
  },
  "q3-race": {
    chartId: "q3-race",
    transpose: true,
    excel: "covid",
    firstDataRow: 5,
    lastDataRow: 30,
    firstDataColumn: 10,
    lastDataColumn: 14,
    sheet: 2,
    maxValue: 99,
    rotateAxis: true,
    unitSuffix: "%",
    chartColors: {
      axisLabel: colors.main,
    },
    legends: legends.covidQ3,
    groups: [["Approve", "Disapprove", "No opinion"]],
  },
  "q3-education": {
    chartId: "q3-education",
    transpose: true,
    excel: "covid",
    firstDataRow: 5,
    lastDataRow: 30,
    firstDataColumn: 14,
    lastDataColumn: 18,
    sheet: 2,
    maxValue: 99,
    rotateAxis: true,
    unitSuffix: "%",
    chartColors: {
      axisLabel: colors.main,
    },
    legends: legends.covidQ3,
    groups: [["Approve", "Disapprove", "No opinion"]],
  },
  "q3-marital-status": {
    chartId: "q3-marital-status",
    transpose: true,
    excel: "covid",
    firstDataRow: 5,
    lastDataRow: 30,
    firstDataColumn: 18,
    lastDataColumn: 29,
    sheet: 2,
    maxValue: 99,
    rotateAxis: true,
    unitSuffix: "%",
    chartColors: {
      axisLabel: colors.main,
    },
    legends: legends.covidQ3,
    groups: [["Approve", "Disapprove", "No opinion"]],
  },
  "q3-parent": {
    chartId: "q3-parent",
    transpose: true,
    excel: "covid",
    firstDataRow: 5,
    lastDataRow: 30,
    firstDataColumn: 29,
    lastDataColumn: 34,
    sheet: 2,
    maxValue: 99,
    rotateAxis: true,
    unitSuffix: "%",
    chartColors: {
      axisLabel: colors.main,
    },
    legends: legends.covidQ3,
    groups: [["Approve", "Disapprove", "No opinion"]],
  },
  "q3-income": {
    chartId: "q3-income",
    transpose: true,
    excel: "covid",
    firstDataRow: 5,
    lastDataRow: 30,
    firstDataColumn: 34,
    lastDataColumn: 38,
    sheet: 2,
    maxValue: 99,
    rotateAxis: true,
    unitSuffix: "%",
    chartColors: {
      axisLabel: colors.main,
    },
    legends: legends.covidQ3,
    groups: [["Approve", "Disapprove", "No opinion"]],
  },
  "q3-social-networks": {
    chartId: "q3-social-networks",
    transpose: true,
    excel: "covid",
    firstDataRow: 5,
    lastDataRow: 30,
    firstDataColumn: 38,
    lastDataColumn: 55,
    sheet: 2,
    maxValue: 99,
    rotateAxis: true,
    unitSuffix: "%",
    chartColors: {
      axisLabel: colors.main,
    },
    legends: legends.covidQ3,
    groups: [["Approve", "Disapprove", "No opinion"]],
  },

  // BLM
  "blm-q3-gender": {
    chartId: "blm-q3-gender",
    excel: "blm",
    firstDataRow: 5,
    lastDataRow: 82,
    colRange: colRanges.gender,
    ...basicConfig,
    legends: legends.blmQ3,
    groups: groups.blmQ3,
  },
  "blm-q3-age": {
    chartId: "blm-q3-age",
    excel: "blm",
    firstDataRow: 5,
    lastDataRow: 82,
    colRange: colRanges.age,
    ...basicConfig,
    legends: legends.blmQ3,
    groups: groups.blmQ3,
  },
  "blm-q3-region": {
    chartId: "blm-q3-region",
    excel: "blm",
    firstDataRow: 5,
    lastDataRow: 82,
    colRange: colRanges.region,
    ...basicConfig,
    legends: legends.blmQ3,
    groups: groups.blmQ3,
  },
  "blm-q3-race": {
    chartId: "blm-q3-race",
    excel: "blm",
    firstDataRow: 5,
    lastDataRow: 82,
    colRange: colRanges.race,
    ...basicConfig,
    legends: legends.blmQ3,
    groups: groups.blmQ3,
  },
  "blm-q3-education": {
    chartId: "blm-q3-education",
    excel: "blm",
    firstDataRow: 5,
    lastDataRow: 82,
    colRange: colRanges.education,
    ...basicConfig,
    legends: legends.blmQ3,
    groups: groups.blmQ3,
  },
  // "blm-q3-marital-status": {
  //   chartId: "blm-q3-marital-status",
  //   excel: "blm",
  //   firstDataRow: 5,
  //   lastDataRow: 82,
  //   colRange: colRanges.marital_blm,
  //   ...basicConfig,
  //   legends: legends.blmQ3,
  //   groups: groups.blmQ3,
  // },
  // "blm-q3-parent": {
  //   chartId: "blm-q3-parent",
  //   excel: "blm",
  //   firstDataRow: 5,
  //   lastDataRow: 82,
  //   colRange: colRanges.parent,
  //   ...basicConfig,
  //   legends: legends.blmQ3,
  //   groups: groups.blmQ3,
  // },
  "blm-q3-income": {
    chartId: "blm-q3-income",
    excel: "blm",
    firstDataRow: 5,
    lastDataRow: 82,
    colRange: colRanges.income_blm,
    ...basicConfig,
    legends: legends.blmQ3,
    groups: groups.blmQ3,
  },
  "blm-q3-social-networks": {
    chartId: "blm-q3-social-networks",
    excel: "blm",
    firstDataRow: 5,
    lastDataRow: 82,
    colRange: colRanges.socialNetworks_blm,
    ...basicConfig,
    legends: legends.blmQ3,
    groups: groups.blmQ3,
  },
  // BLM Q4
  "blm-q4-gender": {
    chartId: "blm-q4-gender",
    excel: "blm",
    firstDataRow: 5,
    lastDataRow: 82,
    colRange: colRanges.gender,
    ...basicConfig,
    legends: legends.blmQ4,
    groups: groups.blmQ4,
  },
  "blm-q4-age": {
    chartId: "blm-q4-age",
    excel: "blm",
    firstDataRow: 5,
    lastDataRow: 82,
    colRange: colRanges.age,
    ...basicConfig,
    legends: legends.blmQ4,
    groups: groups.blmQ4,
  },
  "blm-q4-region": {
    chartId: "blm-q4-region",
    excel: "blm",
    firstDataRow: 5,
    lastDataRow: 82,
    colRange: colRanges.region,
    ...basicConfig,
    legends: legends.blmQ4,
    groups: groups.blmQ4,
  },
  "blm-q4-race": {
    chartId: "blm-q4-race",
    excel: "blm",
    firstDataRow: 5,
    lastDataRow: 82,
    colRange: colRanges.race,
    ...basicConfig,
    legends: legends.blmQ4,
    groups: groups.blmQ4,
  },
  "blm-q4-education": {
    chartId: "blm-q4-education",
    excel: "blm",
    firstDataRow: 5,
    lastDataRow: 82,
    colRange: colRanges.education,
    ...basicConfig,
    legends: legends.blmQ4,
    groups: groups.blmQ4,
  },
  // "blm-q4-marital-status": {
  //   chartId: "blm-q4-marital-status",
  //   excel: "blm",
  //   firstDataRow: 5,
  //   lastDataRow: 82,
  //   colRange: colRanges.marital_blm,
  //   ...basicConfig,
  //   legends: legends.blmQ4,
  //   groups: groups.blmQ4,
  // },
  // "blm-q4-parent": {
  //   chartId: "blm-q4-parent",
  //   excel: "blm",
  //   firstDataRow: 5,
  //   lastDataRow: 82,
  //   colRange: colRanges.parent,
  //   ...basicConfig,
  //   legends: legends.blmQ4,
  //   groups: groups.blmQ4,
  // },
  "blm-q4-income": {
    chartId: "blm-q4-income",
    excel: "blm",
    firstDataRow: 5,
    lastDataRow: 82,
    colRange: colRanges.income_blm,
    ...basicConfig,
    legends: legends.blmQ4,
    groups: groups.blmQ4,
  },
  "blm-q4-social-networks": {
    chartId: "blm-q4-social-networks",
    excel: "blm",
    firstDataRow: 5,
    lastDataRow: 82,
    colRange: colRanges.socialNetworks_blm,
    ...basicConfig,
    legends: legends.blmQ4,
    groups: groups.blmQ4,
  },
  // BLM Q7
  "blm-q7-gender": {
    chartId: "blm-q7-gender",
    excel: "blm",
    firstDataRow: 5,
    lastDataRow: 82,
    colRange: colRanges.gender,
    ...basicConfig,
    legends: legends.blmQ7,
    groups: groups.blmQ7,
  },
  "blm-q7-age": {
    chartId: "blm-q7-age",
    excel: "blm",
    firstDataRow: 5,
    lastDataRow: 82,
    colRange: colRanges.age,
    ...basicConfig,
    legends: legends.blmQ7,
    groups: groups.blmQ7,
  },
  "blm-q7-region": {
    chartId: "blm-q7-region",
    excel: "blm",
    firstDataRow: 5,
    lastDataRow: 82,
    colRange: colRanges.region,
    ...basicConfig,
    legends: legends.blmQ7,
    groups: groups.blmQ7,
  },
  "blm-q7-race": {
    chartId: "blm-q7-race",
    excel: "blm",
    firstDataRow: 5,
    lastDataRow: 82,
    colRange: colRanges.race,
    ...basicConfig,
    legends: legends.blmQ7,
    groups: groups.blmQ7,
  },
  "blm-q7-education": {
    chartId: "blm-q7-education",
    excel: "blm",
    firstDataRow: 5,
    lastDataRow: 82,
    colRange: colRanges.education,
    ...basicConfig,
    legends: legends.blmQ7,
    groups: groups.blmQ7,
  },

  "blm-q7-income": {
    chartId: "blm-q7-income",
    excel: "blm",
    firstDataRow: 5,
    lastDataRow: 82,
    colRange: colRanges.income_blm,
    ...basicConfig,
    legends: legends.blmQ7,
    groups: groups.blmQ7,
  },
  "blm-q7-social-networks": {
    chartId: "blm-q7-social-networks",
    excel: "blm",
    firstDataRow: 5,
    lastDataRow: 82,
    colRange: colRanges.socialNetworks_blm,
    ...basicConfig,
    legends: legends.blmQ7,
    groups: groups.blmQ7,
  },
  // ELECTION RESULTS
  // BLM Q4
  "election-WSB_Q3-gender": {
    chartId: "election-WSB_Q3-gender",
    excel: "election",
    firstDataRow: 5,
    lastDataRow: 120,
    colRange: colRanges.gender,
    ...basicConfig,
    legends: legends.election_WSB_Q3,
    groups: groups.election_WSB_Q3,
  },
  "election-WSB_Q3-age": {
    chartId: "election-WSB_Q3-age",
    excel: "election",
    firstDataRow: 5,
    lastDataRow: 120,
    colRange: colRanges.age,
    ...basicConfig,
    legends: legends.election_WSB_Q3,
    groups: groups.election_WSB_Q3,
  },
  "election-WSB_Q3-region": {
    chartId: "election-WSB_Q3-region",
    excel: "election",
    firstDataRow: 5,
    lastDataRow: 120,
    colRange: colRanges.region,
    ...basicConfig,
    legends: legends.election_WSB_Q3,
    groups: groups.election_WSB_Q3,
  },
  "election-WSB_Q3-race": {
    chartId: "election-WSB_Q3-race",
    excel: "election",
    firstDataRow: 5,
    lastDataRow: 120,
    colRange: colRanges.race,
    ...basicConfig,
    legends: legends.election_WSB_Q3,
    groups: groups.election_WSB_Q3,
  },
  "election-WSB_Q3-education": {
    chartId: "election-WSB_Q3-education",
    excel: "election",
    firstDataRow: 5,
    lastDataRow: 120,
    colRange: colRanges.education,
    ...basicConfig,
    legends: legends.election_WSB_Q3,
    groups: groups.election_WSB_Q3,
  },
  "election-WSB_Q3-income": {
    chartId: "election-WSB_Q3-income",
    excel: "election",
    firstDataRow: 5,
    lastDataRow: 120,
    colRange: colRanges.income,
    ...basicConfig,
    legends: legends.election_WSB_Q3,
    groups: groups.election_WSB_Q3,
  },
  "election-WSB_Q3-social-networks": {
    chartId: "election-WSB_Q3-social-networks",
    excel: "election",
    firstDataRow: 5,
    lastDataRow: 120,
    colRange: colRanges.socialNetworks_elections,
    ...basicConfig,
    legends: legends.election_WSB_Q3,
    groups: groups.election_WSB_Q3,
  },
  "election-WSB_Q3-religion": {
    chartId: "election-WSB_Q3-religion",
    excel: "election",
    firstDataRow: 5,
    lastDataRow: 120,
    colRange: colRanges.religion,
    ...basicConfig,
    legends: legends.election_WSB_Q3,
    groups: groups.election_WSB_Q3,
  },
  "election-WSB_Q3-political": {
    chartId: "election-WSB_Q3-political",
    excel: "election",
    firstDataRow: 5,
    lastDataRow: 120,
    colRange: colRanges.political,
    ...basicConfig,
    legends: legends.election_WSB_Q3,
    groups: groups.election_WSB_Q3,
  },
  "election-WSB_Q3-recall": {
    chartId: "election-WSB_Q3-recall",
    excel: "election",
    firstDataRow: 5,
    lastDataRow: 120,
    colRange: colRanges.recallFrequency,
    ...basicConfig,
    legends: legends.election_WSB_Q3,
    groups: groups.election_WSB_Q3,
  },
  // Elections WSB_Q2. Have you ever had a dream with characters, themes, or settings from a movie?
  "election-WSB_Q2-gender": {
    chartId: "election-WSB_Q2-gender",
    excel: "election",
    firstDataRow: 5,
    lastDataRow: 120,
    colRange: colRanges.gender,
    ...basicConfig,
    legends: legends.election_WSB_Q2,
    groups: groups.election_WSB_Q2,
  },
  "election-WSB_Q2-age": {
    chartId: "election-WSB_Q2-age",
    excel: "election",
    firstDataRow: 5,
    lastDataRow: 120,
    colRange: colRanges.age,
    ...basicConfig,
    legends: legends.election_WSB_Q2,
    groups: groups.election_WSB_Q2,
  },
  "election-WSB_Q2-region": {
    chartId: "election-WSB_Q2-region",
    excel: "election",
    firstDataRow: 5,
    lastDataRow: 120,
    colRange: colRanges.region,
    ...basicConfig,
    legends: legends.election_WSB_Q2,
    groups: groups.election_WSB_Q2,
  },
  "election-WSB_Q2-race": {
    chartId: "election-WSB_Q2-race",
    excel: "election",
    firstDataRow: 5,
    lastDataRow: 120,
    colRange: colRanges.race,
    ...basicConfig,
    legends: legends.election_WSB_Q2,
    groups: groups.election_WSB_Q2,
  },
  "election-WSB_Q2-education": {
    chartId: "election-WSB_Q2-education",
    excel: "election",
    firstDataRow: 5,
    lastDataRow: 120,
    colRange: colRanges.education,
    ...basicConfig,
    legends: legends.election_WSB_Q2,
    groups: groups.election_WSB_Q2,
  },
  "election-WSB_Q2-income": {
    chartId: "election-WSB_Q2-income",
    excel: "election",
    firstDataRow: 5,
    lastDataRow: 120,
    colRange: colRanges.income,
    ...basicConfig,
    legends: legends.election_WSB_Q2,
    groups: groups.election_WSB_Q2,
  },
  "election-WSB_Q2-social-networks": {
    chartId: "election-WSB_Q2-social-networks",
    excel: "election",
    firstDataRow: 5,
    lastDataRow: 120,
    colRange: colRanges.socialNetworks_elections,
    ...basicConfig,
    legends: legends.election_WSB_Q2,
    groups: groups.election_WSB_Q2,
  },
  "election-WSB_Q2-religion": {
    chartId: "election-WSB_Q2-religion",
    excel: "election",
    firstDataRow: 5,
    lastDataRow: 120,
    colRange: colRanges.religion,
    ...basicConfig,
    legends: legends.election_WSB_Q2,
    groups: groups.election_WSB_Q2,
  },
  "election-WSB_Q2-political": {
    chartId: "election-WSB_Q2-political",
    excel: "election",
    firstDataRow: 5,
    lastDataRow: 120,
    colRange: colRanges.political,
    ...basicConfig,
    legends: legends.election_WSB_Q2,
    groups: groups.election_WSB_Q2,
  },
  "election-WSB_Q2-recall": {
    chartId: "election-WSB_Q2-recall",
    excel: "election",
    firstDataRow: 5,
    lastDataRow: 120,
    colRange: colRanges.recallFrequency,
    ...basicConfig,
    legends: legends.election_WSB_Q2,
    groups: groups.election_WSB_Q2,
  },
};

module.exports = { chartConfig };
