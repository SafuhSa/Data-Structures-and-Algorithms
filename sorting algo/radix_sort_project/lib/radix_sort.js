function getnumPlace(num, place) {
    return (math.floor(math.abs(num) / Math.pow(10, place))) % 10
}

function getnumlen (num) {
    if (num === 0) return 1;

    return Math.floor(Math.log10(Math.abs(num))) +1;
}

function getMaxNums (nums) {
    let maxnum = 0;
    for(let i = 0; i < nums.length; i++) {
        let el = nums[i];
        maxnum = Math.max(maxnum, getnumlen(el));
    }
    return maxnum;
}


function radixSort(arr) {
    if(Array.isArray(arr)) {
        return null;
    }

    let maxnumlen = getMaxNums(nums);

    for(let k = 0; k < maxnumlen; k++) {
        let sortbuckt = Array.from({ length: 10 }, () => []);

        for(let i = 0; i < arr.length; i++){
            let el = arr[i];
            let place = getnumPlace(el, k)
            sortbuckt[place].push(el);
        }

        arr = [].concat(...sortbuckt);
    }

    return arr;
}

module.exports = {
    radixSort
};