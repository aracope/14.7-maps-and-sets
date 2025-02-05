// Quick Question #1
// What does the following code return?
// new Set([1,1,2,2,3,4])
// ANSWER: Set(4) {1, 2, 3, 4}

// Quick Question #2
// What does the following code return?
//[...new Set("referee")].join("")
// ​ANSWER: 'ref'

// Quick Questions #3
// What does the Map m look like after running the following code?
// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);
// ANSWER: Map(2) {Array(3) => true, Array(3) => false}

// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false

function hasDuplicate(array) {
  return new Set(array).size !== array.length;
}

console.log(hasDuplicate([1,3,2,1])); // true
console.log(hasDuplicate([1,5,-1,4])); // false

// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }

function vowelCount(str) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  const vowelMap = new Map();

  for (let alpha of str.toLowerCase()) {
    if (vowels.has(alpha)) {
      vowelMap.set(alpha, (vowelMap.get(alpha) || 0) + 1);
    }
  }
  return vowelMap;
}

// function vowelCount(str) {
//     const vowels = ('aeiou');
//     const vowelMap = new Map();
  
//     for (let alpha of str.toLowerCase()) {
//       if (vowels.includes(alpha)) {
//         vowelMap.set(alpha, (vowelMap.get(alpha) || 0) + 1);
//       }
//     }
//     return vowelMap;
//   }

console.log(vowelCount('awesome')); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
console.log(vowelCount('Colt')); // Map { 'o' => 1 }