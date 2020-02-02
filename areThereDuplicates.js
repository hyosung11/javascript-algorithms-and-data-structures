// Frequency Counter - Multiple Pointers - areThereDuplicates

// Implement a function called areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples
areThereDuplicates(1, 2, 3); // returns false
areThereDuplicates(1, 2, 2); // returns true
areThereDuplicates('a', 'b', 'c', 'a'); // returns true

// Restrictions:

// Time O(n)
// Space O(n)

// Bonus:

// Time O(n log n)
// Space O(1)


// Frequency Counter

function areThereDuplicates() {
    let collection = {};
    for (let value in arguments) {
        collection[arguments[value]] = (collection[arguments[value]] || 0) + 1
    }

    for (let key in collection) {
        if (collection[key] > 1) return true
    }
    return false;
}

// console.log(areThereDuplicates(1, 2, 3, 4))
// console.log(areThereDuplicates(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1))

// Multiple Pointers

// function areThereDuplicates2(...args) {
//     // Two pointers
//     args.sort((a, b) => a > b);
//     let start = 0;
//     let next = 1;
//     while (next < args.length) {
//         if (args[start] === args[next]) {
//             return true
//         }
//         start++;
//         next++;
//     }
//     return false;
// }

function areThereDuplicates2(...args) {
    // Two pointers
    args.sort((a, b) => a > b);
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true
        }
        start++
        next++
    }
    return false
}

// console.log(areThereDuplicates2(1, 2, 3, 4, 5, 6, 8, 9, 10, 4))
// console.log(areThereDuplicates2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
// console.log(areThereDuplicates2(111, 5, 6, 7, 5))


// 3. One Line Solution - doesn't seem to work
// const areThereDuplicates3 = () => {
//     return new Set(arguments).size !== arguments.length
// }

// console.log(areThereDuplicates3(1, 2, 3, 3, 5, 6, 7, 8, 9, 10))

function areThereDuplicates4() {
    return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates4(3, 2, 1, 3))
console.log(areThereDuplicates4(10, 9, 5, 6, 7, 5))