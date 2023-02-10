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
- Less important: it comes up in interviews!

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
function logAtMost(n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
```

- O(1) constant time
- O(n) linear time
- O(n^2) quadratic time

### Time Complexity Quiz

1. What is the time complexity for the following function?

    ```js
    function logUpTo(n) {
      for (var i = 1; i <= n; i++) {
        console.log(i);
      }
    }
    ```

    O(n)

2. What is the time complexity for the following function?

    ```js
    function logAtMost10(n) {
      for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
      }
    }
    ```

    O(1)

3. What is the time complexity for the following function?

    ```js
    function logAtLeast10(n) {
      for (var i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
      }
    }
    ```

    O(n)

4. What is the time complexity for the following function?

    ```js
    function onlyElementsAtEvenIndex(array) {
      var newArray = Array(Math.ceil(array.length / 2));
      for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
           newArray[i / 2] = array[i];
        }
      }
      return newArray;
    }
    ```

    O(n)

5. What is the time complexity for the following function?

    ```js
    function subtotals(array) {
      var subtotalArray = Array(array.length);
      for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
          subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
      }
      return subtotalArray;
    }
    ```

    O(n^2)

### 2.7 Space Complexity

- We can also use Big O notation to analyze space complexity: how much additional memory do we need to allocate in order to run the code in our algorithm?

- What about the inputs?
  - Sometimes you'll hear the term **auxiliary space complexity** to refer to space required by the algorithm, not including space taken up by the inputs.
  - Unless otherwise noted, when we talk about space complexity, technically we'll be talking about auxiliary space complexity.

- Space Complexity in JavaScript Rules of Thumb
  - Most primitives (booleans, numbers, undefined, null) are constant space
  - Strings require O(n) space (where n is the string length)
  - Reference types are generally O(n) where n is the length (for arrays) or the numbers of keys (for objects)

- Example of Space Complexity

  ```js
  function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
  ```

  - Just two variables `total` and `i` representing numbers.
  - Space complexity is O(1) or constant space because it's always the same no matter the size of the input.

- Another Example

  ```js
  function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(2 * arr[i]);
    }
    return newArr;
  }
  ```

  - O(n) space

### Big O Space Complexity Quiz

Question 1: Determine the space complexity for the following function.

```js
function logUpTo(n) {
  for (var i = 1; i <= n; i++) {
    console.log(i);
  }
}
```

O(1) Constant Space

Question 2: Determine the space complexity for the following function.

```js
function logAtMost10(n) {
  for (var i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}
```

O(1) Constant Space

Question 3: Determine the space complexity for the following function:

```js
function logAtMost10(n) {
  for (var i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}
```

O(1) Constant Space

Question 4: Determine the space complexity for the following function:

```js
function onlyElementsAtEvenIndex(array) {
  var newArray = Array(Math.ceil(array.length / 2));
  for (var i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray[i / 2] = array[i];
    }
  }
  return newArray;
}
```

O(n) Linear Space

Question 5: Determine the space complexity for the following function:

```js
function subtotals(array) {
  var subtotalArray = Array(array.length);
  for (var i = 0; i < array.length; i++) {
    var subtotal = 0;
    for (var j = 0; j <= i; j++) {
      subtotal += array[j];
    }
    subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}
```

O(n)

### 2.8 Logarithms

- We've encountered some of the most common complexities; O(1), O(n), O(n^2).
- Sometimes Big O expressions involve more complex mathematical expressions.
- One that appears more often than you might like is the algorithm

- What's a logarithm again?
  - A logarithm is the inverse of exponentiation
  - log2(8) = 3 --> 2^3 = 8
    - log base 2 of 8 equals 3
    - i.e., 2 to what power equals 8?
    - We omit the 2, so log === log2
  - log2(value) = exponent --> 2exponent = value
  - can have log3,log5, log10, but the binary algorithm (log2) is the most common

- The binary logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.

- Logarithmic Examples
  - 8 => (8 / 2 = 4) => (4 / 2 = 2) => (2 / 2 = 1) => log(8) = 3
  - 25 => (25 / 2 = 12.5) => (12.5 / 2 = 6.25) => (6.25 / 2 = 3.125) => (3.125 / 2 = 1.5625) => (1.5625 / 2 = 0.78125) => log(25) ~ 4.64

- Logarithmic Complexity
  - Logarithmic time complexity is great!
  - O(log n) logarithmic complexity compares favorably with O(n)

- Importance of Logarithmic Time Complexity
  - Certain searching algorithms have logarithmic time complexity.
  - Efficient sorting algorithms involve logarithms.
  - Recursion sometimes involves logarithmic **space** complexity.

- Common Big O Notation (slowest to fastest)
  - O(n^2)
  - O(nlog n)
  - O(n)
  - O(log n)
  - O(1)

![Big O](/images/big-o.png)

- Recap
  - To analyze the performance of an algorithm, we use Big O Notation
  - Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
  - Big O Notation doesn't care about precision, only about general trends (linear? quadratic? constant?)
  - The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm
  - Big O Notation is everywhere, so get lots of practice!

## Section 3: Analyzing Performance of Arrays and Objects

### 3.1 Objects

[The Big O of Objects](https://cs.slides.com/colt_steele/built-in-data-structures-25#/)

- Objectives
  - Understand how objects and arrays work through the lens of Big O
  - Explain why adding elements to the beginning of an array is costly
  - Compare and contrast the runtime for arrays and objects, as well as built-in methods

- Objects are unordered data structures where everything is stored in unordered, key-value pairs

- When to use Objects (unordered, key-value pairs)
  - When you don't need order
  - When you need fast access/insertion and removal

- Big O of Objects
  - Insertion O(1)
  - Removal O(1)
  - Searching O(n)
  - Access O(1)

- Big O of Object Methods
  - Object.keys O(n)
  - Object.values O(n)
  - Object.entries O(n)
  - hasOwnProperty O(1)

### Object Operations Quiz

- Question 1: What is the Big O for adding a key and value into an object?
  - O(1)

- Question 2: What is the big O for accessing a key in an object?
  - O(1)

- Question 3: What is the big O of removing a key in an object
  - O(1)

### 3.2 Arrays

- Use arrays:
  - When you need order
  - When you need fast access/insertion and removal (sort of ...)
  - not as efficient when you have to reindex the array

- Big O of Arrays
  - Insertion: it depends ...
    - push()/pop() => O(1)
    - shift()/unshift() => O(n)
  - Removal: it depends ...
  - Searching O(n)
  - Access O(1)

- Big O of Array Methods
  - push O(1)
  - pop O(1)
  - shift O(n)
  - unshift O(n)
  - concat O(n)
  - slice O(n)
  - splice O(n)
  - sort O(n * log n)
  - forEach/map/filter/reduce/etc. O(n)

- Array Limitation
  - Inserting at the beginning of an array is not as easy as we might think. There are more efficient data structures for that.

### Array Operations Quiz

1. What is the big O for pushing into an array?
    - O(1)

2. What is the big O for shifting into an array?
    - O(n)

3. What is the big O for the forEach function
    - O(n)

## Section 4: Problem Solving Approach

[Problem Solving Approach](https://cs.slides.com/colt_steele/problem-solving-patterns#/)

### Introduction to Problem Solving

- Objectives
  - Define what an algorithm is
  - Devise a plan to solve algorithms
  - Compare and contrast problem solving patterns including frequency counters, two pointer problems, and divide and conquer

- What is an algorithm?
  - An algorithm is a process or set of steps to accomplish a certain task.
  - Almost everything that you do in programming involves some kind of algorithm
  - It's the foundation for being a successful problem solving developer
  - Interviews

- How do you improve?
  1. *Devise* a plan for solving problems.
  2. *Master* common problem solving patterns.

- Problem Solving Strategies (version of PEDAC)
  - Understand the problem
  - Explore concrete examples
  - Break it down
  - Solve/simplify
  - Look back and refactor

- Note: many of these strategies are adapted from George Polya, whose book *How To Solve It* is a great resource for anyone who wants to become a better problem solver

### Step 1: Understand the Problem

[Understand the Problem](https://en.wikipedia.org/wiki/How_to_Solve_It)

1. Can I restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs that should come from the solution to the problem?
4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
   - You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.
5. How should I label the important pieces of data that are a part of the problem?

### Step 2: Concrete Examples

- Coming up with examples can help you understand the problem better.
- Examples also provide sanity checks that your eventual solution works how it should.
- e.g., user stories, unit tests

- Explore Examples
  - Start with simple examples
  - Progress to more complex examples
  - Explore examples with empty inputs
  - Explore examples with invalid inputs

- Problem: Write a function that takes in a string and returns counts of each character in the string
  - Simple Examples
    - `charCount('aaaa'); // {a: 4}
    - `charCount('hello'); // {h: 1, e: 1, l: 2, o: 1}
  - More Complex Examples
    - "my phone number is 1823433'
      - numbers
      - spaces
      - non-letters
    - "Hello hi"
      - uppercase
      - lowercase
  - Examples with Empty Inputs
    - `charCount("")` // => {} | null | undefined | Error?
  - Examples with Invalid Inputs
    - edge cases

### Step 3: Break It Down

- Explicitly write out the steps you need to take.
  - This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well.
- E.g., pseudocode your steps

- Problem: Write a function that takes in a string and returns counts of each character in the string.

```js
function charCount(str) {
  // make object to return at end
  // loop over string, for each char
    // if the char is a number/letter AND is a key in object, add one to count
    // if the char is a number/letter AND not in object, add it and set value to 1
    //  if char not a letter/number don't do anything
  // return object at end
}

// Test Case
charCount("Your PIN number is 1234!")
```

### Step 4: Solve or Simplify

- Solve the problem. If you can't solve a simpler problem!

- Simplify
  - Find the core difficulty in what you're trying to do
  - Temporarily ignore that difficulty
  - Write a simplified solution
  - Then incorporate that difficulty back in

### Step 5: Look Back and Refactor - RRRR

- Congrats on solving it, but you're not done!
- consider efficiency and legibility

### Refactoring Questions

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
