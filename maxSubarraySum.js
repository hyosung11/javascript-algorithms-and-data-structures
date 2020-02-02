// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// Examples
// maxSubarraySum([1,2,5,2,8,1,5], 2); // returns 10
// maxSubarraySum([1,2,5,2,8,1,5], 4); // returns 17
// maxSubarraySum([4,2,1,6], 1) ; // returns 6
// maxSubarraySum([4,2,1,6,2], 4) ; // returns 13
// maxSubarraySum([], 4) ; // returns null


// 1. Max Sum Naive Version

function maxSubarraySum(array, number) {
    // check if length of array is less than the number
    if (number > array.length) {
        return null;
    }
    let max = -Infinity;
    for (let i = 0; i < array.length; i++) {
        temp = 0;
        for (let j = 0; j < number; j++) {
            temp += array[i + j];
        }
        if (temp > max) {
            max = temp;
        }
        console.log(temp, max);
    }
    return max;
}

console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));