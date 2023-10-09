function isPalindrome(word) {
  const cleanStr = word.toLowerCase().replace(/[^a-z]/g, ''); // Convert to lowercase and remove non-alphabetic characters

  let left = 0;
  let right = cleanStr.length - 1;

  // Check if it's a palindrome
  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

/* 
  Pseudocode:
  - Convert the input string to lowercase and remove non-alphabetic characters.
  - Initialize two pointers, 'left' and 'right', at the beginning and end of the cleaned string respectively.
  - Iterate while 'left' pointer is less than 'right' pointer:
    - If characters at 'left' and 'right' pointers are not equal, return false (not a palindrome).
    - Move 'left' pointer to the right and 'right' pointer to the left.
  - If the loop completes, return true (the string is a palindrome).

  Explanation:
  - We first clean the input string by converting it to lowercase and removing non-alphabetic characters using regular expressions.
  - Then, we use a two-pointer approach to check if the string is a palindrome. We compare characters from the beginning and end of the string, moving towards the center, and return false if we find any mismatch. If we reach the center without finding any mismatches, it's a palindrome and we return true.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
