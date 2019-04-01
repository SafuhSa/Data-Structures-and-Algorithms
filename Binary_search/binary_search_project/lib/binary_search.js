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
3
[1, 2, 3, 4, 5, 6, 7]
function binarySearchIndex(array, target) {
    if(!array.length) return -1;

    let midIdx = Math.floor(array.length / 2);
    let midel = array[midIdx];
    let left = array.slice(0, midIdx);
    let right = array.slice(midIdx+1);

    if(midel === target) {
        return midIdx;
    }else if(midel < target) {
        let ans =  binarySearchIndex(right, target) 
        if(ans > -1) {
            return ans + midIdx + 1;
        } else {
            return ans;
        }
    }else {
        return binarySearchIndex(left, target);
    }
}


module.exports = {
    binarySearch,
    binarySearchIndex
};