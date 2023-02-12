const months = ['jan', 'feb', 'mar', 'aug', 'mar', 'jun', 'mar', 'jul', 'mar'];
const countDuplicates = months.reduce((obj, month) => {
    obj[month] = (obj[month] || 0) + 1;
    console.log('a',obj[month])
    return obj;
  }, {});
console.log(countDuplicates);