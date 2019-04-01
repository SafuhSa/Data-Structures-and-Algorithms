function binarySearch(array, target) {
    if (!array.length) return false;

    let midIdx = Math.floor(array.length / 2);
    let midel = array[midIdx];
    let left = array.slice(0, midIdx);
    let right = array.slice(midIdx + 1, array.length);

    if (midel === target) {
        return true;
    } else if (midel < target) {
        return binarySearch(right, target);
    } else {
        return binarySearch(left, target);
    }
}

function binarySearchIndex(array, target, lo=0, hi=array.length-1) {
    if(lo === hi) {
        return -1;
    }

    let midIdx = Math.floor( (lo + hi) / 2);

    if(target < array[midIdx]) {
        return binarySearchIndex(array, target, lo, midIdx);
    }else if(target > array[midIdx]) {
        return binarySearchIndex(array, target, midIdx + 1, hi);
    }else {
        return midIdx;
    }
}

// if(!array.length) return -1;

// let midIdx = Math.floor(array.length / 2);
// let midel = array[midIdx];
// let left = array.slice(0, midIdx);
// let right = array.slice(midIdx+1);

// if(midel === target) {
//     return midIdx;
// }else if(midel < target) {
//     let ans =  binarySearchIndex(right, target) 
//     if(ans > -1) {
//         return ans + midIdx + 1;
//     } else {
//         return ans;
//     }
// }else {
//     return binarySearchIndex(left, target);
// }

module.exports = {
    binarySearch,
    binarySearchIndex
};