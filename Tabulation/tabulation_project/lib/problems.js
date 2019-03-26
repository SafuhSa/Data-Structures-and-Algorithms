// Write a function, stepper(nums), that takes in an array of non negative numbers.
// Each element of the array represents the maximum number of steps you can take from that position in the array.
// The function should return a boolean indicating if it is possible to travel from the 
// first position of the array to the last position.
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// stepper([3, 1, 0, 5, 10]);           // => true, because we can step through elements 3 -> 5 -> 10
// stepper([3, 4, 1, 0, 10]);           // => true, because we can step through elements 3 -> 4 -> 10
// stepper([2, 3, 1, 1, 0, 4, 7, 8])    // => false, there is no way to step to the end
// function stepper(nums, startIdx=0,  memo={}) {
//     memo[0] = true;
//     let len = nums.length;
//     if(len in memo) return true;
//     let el = nums[startIdx];

//     for (let i = 1; i <= el; i++) {
//         memo[startIdx + i] = true;
//         if (startIdx + i >= len) return true;

//         stepper(nums, startIdx + i, memo)
//     }
    
//     return memo[len] ? true : false
// }
function stepper(nums) {
    let arr = new Array(nums.length).fill(false);
    arr[0] = true;

    let i = 0;
    while(arr[i]) {
        let el = nums[i];

        for(let j = 1; j <= el; j++) {
            if((j+i) >= arr.length) return true;
            arr[j+i] = true;
        }
        i++;
    }

    return arr[nums.length - 1]
}


// Write a function, maxNonAdjacentSum(nums), that takes in an array of nonnegative numbers.
// The function should return the maximum sum of elements in the array we can get if we cannot take
// adjacent elements into the sum.
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// maxNonAdjacentSum([2, 7, 9, 3, 4])   // => 15, because 2 + 9 + 4
// maxNonAdjacentSum([4,2,1,6])         // => 10, because 4 + 6 
function maxNonAdjacentSum(nums) {

    let prev = 0;
    let beforePrev = 0;
    for (let i = 0; i < nums.length; i++) {
        let el = nums[i];
        let temp = prev;
        prev = Math.max(beforePrev + el, prev);
        beforePrev = temp;
    }
    return prev;
}


// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
//
// You've seen this problem before with memoization, but now solve it using the Tabulation strategy!
//
// Examples:
//
// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100
function minChange(coins, amount) {
    let arr = new Array(amount + 1).fill(amount*3);
    arr[0] = 0

    for(let i = 1; i <= amount; i++) {
        for(coin of coins) {
            if(i < coin) continue;
            arr[i] = Math.min(arr[i], arr[i-coin]+1)
        }
    }

    return arr[amount] >= amount*13 ? 0 : arr[amount];
}


module.exports = {
    stepper,
    maxNonAdjacentSum,
    minChange
};