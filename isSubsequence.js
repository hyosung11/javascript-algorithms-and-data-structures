// Multiple Pointers - isSubsequence

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples

console.log(isSubsequence('hello', 'hello world')) // returns true
console.log(isSubsequence('sing', 'sting')) // returns true
console.log(isSubsequence('abc', 'abracadabra')) // returns true
console.log(isSubsequence('abc', 'acb')) // returns false

// Your solution must have at least the following complexities:
// Time Complexity O(n + m)
// Space Complexity O(1)


// Iterative Solution

// function isSubsequence(str1, str2) {
//     let i = 0;
//     let j = 0;
//     if (!str1) return true;
//     while (j < str2.length) {
//         if (str2[j] === str1[i]) i++;
//         if (i === str1.length) return true;
//         j++;
//     }
//     console.log(str1, str2)
//     return false;
// }


// Recursive Solution but not O(1) Space

function isSubsequence(str1, str2) {
    if (str1.length === 0) return true;
    if (str2.length === 0) return false;
    if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
    return isSubsequence(str1, str2.slice(1))
}