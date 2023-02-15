const ids = [23,45,67,78,23,13,8];

const filteredids = ids.filter((ele, index, arr) => {
    console.log(ele, index, arr, arr.indexOf(ele))
    return arr.indexOf(ele) == index})

console.log(filteredids.sort((a, b)=> a - b));