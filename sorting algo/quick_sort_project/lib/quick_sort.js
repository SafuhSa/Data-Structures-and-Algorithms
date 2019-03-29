function quickSort(array) {
    if(array.length <= 1) return array;

    let rand = Math.floor(Math.random() * array.length);
    let pivt = array.splice(rand, 1)[0];

    let left = array.filter(el => (el < pivt));
    let right = array.filter(el => (el >= pivt));

    return [...quickSort(left), pivt, ...quickSort(right)];
}


module.exports = {
    quickSort
};