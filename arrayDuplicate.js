const duplicateArray = [14,5,6,14,3,6,7,9];

const duplicates = duplicateArray.filter((ele, index, arr) => arr.indexOf(ele) !== index);

console.log('ele:',duplicates);