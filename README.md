# JavaScript Algorithms and Data Structures Masterclass
Code and Notes from the JavaScript Algorithms and Data Structures Masterclass by Colt Steele

## Section 1: Introduction
1. Curriculum Walkthrough
2. What order should you watch in?
3. How I'm running my code

## Section 2: Big O Notation

### Intro to Big O
- Big O Slides https://cs.slides.com/colt_steele/big-o-notation#/

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
- Performance Tracker https://rithmschool.github.io/function-timer-demo/

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
