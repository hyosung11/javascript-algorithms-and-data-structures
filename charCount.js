// Write a function which takes in a string and returns counts of each character in the string.

// - start with simple examples
// charCount('aaaa'); // {a: 4, b: 0, c: 0} - absent characters?
// charCount('hello'); // {h: 1, e:1, l: 2, o: 1}

// - progress to more complex examples
// 'My phone number is 182763' // spaces, numbers, invalid phone number
// 'Hello hi' // uppercase and lowercase

// - explore examples with empty inputs
// charCount('') // {}, null, undefined

// - explore examples with invalid inputs
// charCount(3@45)

function charCount(str) {
  // do something
  // return an object with keys that are lowecase alphanumeric characters in the string; values should be the counts of each character in the string
}

function charCount(str) {
  // make object to return at end
  // loop over string for each character
    // if the char is a number/letter AND is a key in object, add one to count
    // if the char is a number/letter AND not in object, add it to object and set value to 1
    // if char is something else (space, punctuation, etc.) don't do anything
  // return object at end

}
