# JavaScript Algorithms and Data Structures Masterclass

[JavaScript Algorithms and Data Structures Masterclass
The Missing Computer Science and Coding Interview Bootcamp](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/)

Code and Notes from the JavaScript Algorithms and Data Structures Masterclass by Colt Steele

## Section 1: Introduction

1. Curriculum Walkthrough
2. What order should you watch in?
3. How I'm running my code

## Section 2: Big O Notation

### 2.1 Intro to Big O

[Big O Slides](https://cs.slides.com/colt_steele/big-o-notation#/)

#### 2.1.1 Objectives

- Motivate the need for something like Big O Notation
- Describe what Big O Notation is
- Simplify Big O Expressions
- Define "time complexity" and "space complexity"
- Evaluate the time complexity and space complexity of different algorithms using Big O Notation
- Describe what a logarithm is

#### 2.1.2 Who Cares?

- It's important to have a precise vocabulary to talk about how our code performs.
- Useful for discussing trade-offs between different approaches.
- When your code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications.
- Less important: ti comes up in interviews!

### 2.2 Timing Our Code

- An Example

```js
// add-up-to-slower
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

// Timer
let t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

// add-up-to-faster
function addUpTo(n) {
  return n * (n + 1) / 2;
}
```

- What does better mean?
  - faster?
  - less memory-intensive?
  - more readable?

- The Problem with Time
  - Different machines will record different times
  - The same machine will record different times!
  - For fast algorithms, speed measurements may not be precise enough.

### 2.3 Counting Operations

- rather than counting seconds which are so variable, let's count the number of simple operations the computer has to perform.
- depending on what we count, the number of operations can be as low as 2n or as high as 5n + 2
- but regardless of the exact number, the number of operations grows roughly proportionally with n
- If n doubles, the number of operations will also roughly double.

### 2.4 Visualizing Time Complexities

- [Performance Tracker](https://rithmschool.github.io/function-timer-demo/)

### 2.5 Official Intro to Big O

Big O Notation is a way to formalize fuzzy counting. It allows us to talk formally about how the runtime of an algorithm grows as the input grows. We won't care about the details, only the trends.

We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases.

- f(n) could be linear (f(n) = n)
- f(n) could be quadratic (f(n) = n^2)
- f(n) could be constant (f(n) = 1)
- f(n) could be something entirely different

### 2.6 Simplifying Big O Expressions

- Constants Don't Matter
  - ~~O(2n)~~ => O(n)
  - ~~O(500)~~ => O(1)
  - ~~O(13n^2)~~ => O(n^2)

- Smaller Terms Don't Matter
  - O(n + 10) => O(n)
  - O(1000n + 50) => O(n)
  - O(n^2 + 5n + 8) => O(n^2)

- Big O Shorthands
  - Arithmetic operations are constant
  - Variable assignment is constant
  - Accessing elements in an array (by index) or object (by key) is constant
  - In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop

- A Couple Code Examples

```js
// O(n)
function logAtLeast(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i)
  }
}

// O(1)
function lotAtMost(n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
```

- O(1) constant time
- O(n) linear time
- O(n^2) quadratic time

### 2.7 Space Complexity - RRRR

- most primitives (booleans, numbers, undefined, null) are constant space
- strings require O(n) space (where n is the string length)
- reference types are generally O(n) where n is the length (for arrays) or the numbers of keys (for objects)

### Logarithms

- a logarithm is the inverse of exponentiation
- log2(8) = 3 --> 2^3 = 8
- log2(value) = exponent --> 2exponent = value
- the binary logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.
- O(log n) logarithmic complexity

- certain searching algorithms have logarithmic time complexity
- efficient sorting algorithms involve logarithms
- recursion sometimes involves logarithmic space complexity

![Big O](/images/big-o.png)

## Section 3: Analyzing Performance of Arrays and Objects

### Objectives

- understand how objects and arrays work through the lens of Big O
- explain why adding elements to the beginning of an array is costly
- compare and contrast the runtime for arrays and objects, as well as built-in methods

### [The Big O of Objects](https://cs.slides.com/colt_steele/built-in-data-structures-25#/)

- Objects are unordered data structures where everything is stored in unordered, key value pairs

- Use objects:
  - when you don't need order
  - when you need fast access/insertion and removal

- Big O of Objects
  - Insertion O(1)
  - Removal O(1)
  - Searching O(1)
  - Access O(1)

- Big O of Object Methods
  - Object.keys O(n)
  - Object.values O(n)
  - Object.entries O(n)
  - hasOwnProperty O(1)

### The Big O of Arrays

- Use arrays:
  - when you need order
  - when you need fast access/insertion and removal (sort of ...)
  - not as efficient when you have to reindex the array

- Big O of Arrays
  - Insertion - it depends ... push()/pop() vs shift()/unshift()
  - Removal - it depends ...
  - Searching - O(n)
  - Access - O(1)

- Big O of Array Methods
  - push - O(1)
  - pop - O(1)
  - shift - O(n)
  - unshift - O(n)
  - concat - O(n)
  - slice - O(n)
  - splice - O(n)
  - sort - O(n * log n)
  - forEach/map/filter/reduce/etc. - O(n)

## Section 4: [Problem Solving Approach](https://cs.slides.com/colt_steele/problem-solving-patterns#/)

### Introduction to Problem Solving

- an algorithm is a process or set of steps to accomplish a certain task.
- How do you improve?
  1. Devise a plan for solving problems.
  2. Master common problem solving patterns.

- Problem Solving
  - understand the problem
  - explore concrete examples
  - break it down
  - solve/simplify
  - look back and refactor

### Step 1: [Understand the Problem](https://en.wikipedia.org/wiki/How_to_Solve_It)

1. Can I restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs that should come from the solution to the problem?
4. Can the outputs be determined from the inputs? (Do I have enough information?)
5. How should I label the important pieces of data that are a part of the problem?

### Step 2: Concrete Examples

- Coming up with examples can help you understand the problem better.
- Examples also provide sanity checks that your eventual solution works how it should.
- e.g., user stories, unit tests

#### Explore Examples

- start with simple examples
- progress to more complex examples
- explore examples with empty inputs
- explore examples with invalid inputs

### Step 3: Break It Down

- explicitly write out the steps you need to take
  - forces you to think about the code
  - catch any lingering conceptual issues or misunderstandings
  - pseudocode your steps

### Step 4: Solve or Simplify

- find the core difficulty in what you're trying to do
- temporarily ignore that difficulty
- write a simplified solution
- then incorporate that difficulty back in

### Step 5: Look Back and Refactor

- Congrats on solving it, but you're not done!
- consider efficiency and legibility

#### Refactoring Questions

- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glance?
- Can you use the result or method for some other problem?
- Can you improve the performance of your solution?
- Can you think of other ways to refactor?
- How have other people solved this problem?

## Section 5: Problem Solving Patterns

### Intro to Problem Solving Patterns

- [Problem Solving Patterns Slides](https://cs.slides.com/colt_steele/problem-solving-patterns#/)

#### How to Improve

1. Devise a plan for solving problems
2. Master common problem solving patterns

#### Some Patterns

- frequency counter
- multiple pointers
- sliding window
- divide and conquer
- dynamic programming
- greedy algorithms
- backtracking
- many more!

### Frequency Counter Pattern

- This pattern uses objects or sets to collect values/frequencies of values.
- This can often avoid the need for nested loops or O(n^2) operations with arrays/strings.

### Multiple Pointers Pattern

- Creating pointers or values that correspond to an index or position and move towards the beginning, end, or middle based on a certain condition.
- Very efficient for solving problems with minimal space complexity as well.
- Time Complexity - O(n)
- Space Complexity - O(1)

### Sliding Window Pattern

- This pattern involves creating a window which can either be an array or number from one position to another.
- Depending on a certain condition, the window either increases or closes (and a new window is created).
- Very useful for keeping track of a subset of data in an array/string, etc.
- `maxSubarraySum`

### Divide and Conquer

- This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
- This pattern can tremendously decrease time complexity.

## Section 6: Optional Coding Challenges

- Frequency Counter
  - sameFrequency
  - areThereDuplicates

- Multiple Pointers
  - averagePair
  - isSubsequence

- Sliding Window
  - maxSubarraySum
  - minSubarrayLen
  - findLongestSubstring

## Section 7: Recursion

### Story Time: Martin & The Dragon

- [Recursion Slides]()

### Why Use Recursion

- Recursion refers to a process (e.g., a function) that calls itself
- Examples Everywhere
  - JSON.parse / JSON.stringify
  - document.getElementById and DOM traversal algorithms
  - Object traversal
  - Very common with more complex algorithms
  - It's sometimes a cleaner alternative to iteration

### The Call Stack

- It's a stack data structure.
- Any time a function is invoked it is placed (pushed) on the top of the call stack.
- When JavaScript sees the return keyword or when the function ends, the compiler will remove (pop) it.
- But when we write recursive functions, we keep pushing new functions onto the call stack!

### How Recursive Functions Work

- Invoke the same function with a different input until you reach your base case!
- Base case: the condition when the recursion ends.
- Two essential parts of a recursive function
  - Base Case
  - Different Input

- Issues
  - No base case
  - Forgetting to return something or returning the wrong thing!
  - Stack overflow!

- Helper Method Recursion

- Pure Recursion
  - For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them.
  - Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings.
  - To make copies of objects use Object.assign, or the spread operator.

## Section 8: Recursion Problem Set
