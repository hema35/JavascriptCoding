const numberArr = [23,45,67,78,88,13,8];

function findMaxVal(arr){
 return arr.reduce((pre, curr) => {
  return pre > curr ? pre : curr;
 });
}

console.log(findMaxVal(numberArr));