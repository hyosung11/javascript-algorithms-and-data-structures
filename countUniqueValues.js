// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// Time Complexity O(n)
// Space Complexity O(n)

// Bonus: Do it with constant O(1) space and O(n) time

function countUniqueValues(array) {
    if (array.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < array.length; j++) {
        if (array[i] != array[j]) {
            i++;
            array[i] = array[j];
        }
        // console.log(i, j);
    }
    return i + 1;
}

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([7, 8, 9, 10, 10, 11, 11, 12, 15]));