// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
    if (idx >= array.length - 1) return true;
    let leftIdx = idx * 2;
    let rightIdx = idx * 2 + 1;

    let leftVal = array[leftIdx];
    let rightVal = array[rightIdx];

    if (leftVal > array[idx] || rightVal > array[idx])  return false;

    return isMaxHeap(array, idx+1);
}


module.exports = {
    isMaxHeap
};