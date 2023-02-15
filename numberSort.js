const unSortedArray = [12,4,2,17,8,5,1,9];
const sortedArray = unSortedArray.sort((a, b) => {
    return a - b;
});
console.log(sortedArray);