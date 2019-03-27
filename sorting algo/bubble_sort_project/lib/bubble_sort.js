function swap(array, idx1, idx2) {
   let temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
    return array;
}

function bubbleSort(array) {
    let sorting = true;

    while(sorting) {
        sorting = false;

        for(let i = 0; i < array.length-1; i++) {
            let el = array[i];
            let next = array[i + 1];

            if (el > next) {
                swap(array, i, i+1)
                sorting = true;
            }
        }
    }

    return array;
}


module.exports = {
    bubbleSort,
    swap
};