function countingSort(arr, max) {
    if(arr.length < 2) return arr;

    let counter = new Array(max+1).fill(0);

    for(let i = 0; i < arr.length; i++) {
        let el = arr[i];
        counter[el]++;
    }
    let sorted = [];
    for(let j = 0; j < counter.length; j++) {
        while(counter[j] > 0) {
            sorted.push(j);
            counter[j] -= 1;
        }
    }
    return sorted;
}


module.exports = {
    countingSort
};