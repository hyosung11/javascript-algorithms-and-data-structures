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

// function charCount(str) {
//   // do something
//   // return an object with keys that are lowecase alphanumeric characters in the string; values should be the counts of each character in the string
// }

function charCount(str) {
  // make object to return at end
  let result = {};
  // loop over string for each character
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase()
    // if the char is a number/letter AND is a key in object, add one to count
    if (result[char] > 0) {
      result[char]++;
    }
    // if the char is a number/letter AND not in object, add it to object and set value to 1
    else {
      result[char] = 1;
    };
  }
    // if char is something else (space, punctuation, etc.) don't do anything
  // return object at end
  return result;
}

// console.log(charCount('hello'));
// console.log(charCount('Hi there!'));

function charCount2(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;1
      };
    }
  }
  return obj;
}

console.table(charCount2('cheez it now'));
