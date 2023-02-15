const numberArr = [23,45,67,78,88,13,8];

const total = numberArr.reduce((a , b) => {
    return a + b;
},0)

const arrLength = numberArr.length

console.log((total/arrLength));