function merge(array1, array2) {
    let result = [];

    while(array1.length && array2.length) {
        if(array1[0] < array2[0]) {
            result.push(array1.shift())
        }else {
            result.push(array2.shift())
        }
    }

    return result.concat(array1).concat(array2);
}

function mergeSort(array) {
    if (array.length <= 1) return array;

    let midpoint = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, midpoint));
    let right = mergeSort(array.slice(midpoint));

    return merge(left, right);
}

module.exports = {
    merge,
    mergeSort
};