const duplicateArray = [14,5,6,14,3,6,7,9];
function uniqueList(duplicateArray){
    return [...new Set(duplicateArray)];
}

console.log(uniqueList(duplicateArray)); //[14,5,6,3,7,9]