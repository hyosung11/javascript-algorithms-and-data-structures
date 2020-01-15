# JavaScript Algorithms and Data Structures Masterclass
Code and Notes from the JavaScript Algorithms and Data Structures Masterclass by Colt Steele

## Section 1: Introduction
1. Curriculum Walkthrough
2. What order should you watch in?
3. How I'm running my code

## Section 2: Big O Notation

### Intro to Big O
- [Big O Slides](https://cs.slides.com/colt_steele/big-o-notation#/)

### Timing Our Code
The  Problem with Time
- different machines will record different times
- the same machine will record different times!
- for fast algorithms, speed measurements may not be precise enough?

### Counting Operations
- rather than counting seconds which are so variable, let's count the number of simple operations the computer has to perform.
- depending on what we count, the number of operations can be as low as 2n or as high as 5n + 2
- but regardless of the exact number, the number of operations grows roughly proportionally with n

### Visualizing Time Complexities
- [Performance Tracker](https://rithmschool.github.io/function-timer-demo/)

### Official Intro to Big O & Simplifying Big O Expressions
- O(1) constant time
- O(n) linear time
- O(n^2) quadratic time

### Space Complexity
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

## Section 4: Problem Solving Approach https://cs.slides.com/colt_steele/problem-solving-patterns#/

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

### Step 1: Understand the Problem https://en.wikipedia.org/wiki/How_to_Solve_It
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
- https://cs.slides.com/colt_steele/problem-solving-patterns#/

#### How do you improve?
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
