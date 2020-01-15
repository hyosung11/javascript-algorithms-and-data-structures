function validAnagram(first, second) {
  // check lengths of strings
  if (first.length !== second.length) {
    return false;
  }
  // create object to hold values
  const lookup = {};

  // iterate through first string
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup);

  // iterate through second string
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

console.log(validAnagram('anagrams', 'nagaramm'));
console.log(validAnagram('cat', 'act'));
console.log(validAnagram('cato', 'act'));
