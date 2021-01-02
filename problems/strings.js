/**
 * Returns the first character of a string passed in.
 * @param {string} - str
 * @returns {string} - first char
 */
const firstChar = (str) => {
  if (str === "") {
<<<<<<< HEAD
    return "";
  } else return str[0];
};
//console.log(firstChar("Corey"));

=======
    return ""
  } else {
    return str[0]
  }
}
>>>>>>> 2a42fcc3107f9969da5aea4427a9735d5d49b5e4
/**
 * Returns the length of a string
 * @param {string} - str
 * @returns {number} - length of string
 */

function stringLength(str) {
  return str.length;
<<<<<<< HEAD
};
=======
}
>>>>>>> 2a42fcc3107f9969da5aea4427a9735d5d49b5e4

/**
 * Returns the last character of any string
 * @param {string} - str
 * @returns {string} - last letter
 */

<<<<<<< HEAD
//function lastLetter() {}
const lastLetter = (str) => {
=======
function lastLetter(str) {
>>>>>>> 2a42fcc3107f9969da5aea4427a9735d5d49b5e4
  if (str === "") {
    return ""
  } else {
    return str[str.length - 1]
  }
<<<<<<< HEAD
};
=======
}

>>>>>>> 2a42fcc3107f9969da5aea4427a9735d5d49b5e4
/**
 * Takes a single string variable and returns a copy of the string with the
 * letter capitalized.
 * @param {string} - str 'jimmy'
 * @returns {string} - 'jimmY'
 */

<<<<<<< HEAD
//function capitalizeLastLetter() {}
const capitalizeLastLetter = (str) => {
=======
// function capitalizeLastLetter(str) {
  const capitalizeLastLetter = (str) => {
    if (str === "") {
      return "";
    } else {
      return str.slice(0, str.length - 1) + str[str.length - 1].toUpperCase();
    }
  
  
    //   return str.toLowerCase().split(" ").map(function(str) {
  //     return str.slice(0, -1) + str.slice(-1).toUpperCase();
  // }).join(" ");
};
>>>>>>> 2a42fcc3107f9969da5aea4427a9735d5d49b5e4

  if ( str === "") {
    return "";
  } else {
   return str.slice(0, str.length - 1) + str[str.length - 1].toUpperCase(); ;
  }
};
/**
 *  Create a drEvil function that will take a single number variable, and log the '<variableAmount> dollars',
and should add '(pinky)' at the end of the amount if it's 1 million or more. For example:

```js
let amount = 10
// => 10 dollars
let amount = 1000000
// =>  1000000 dollars (pinky)
```
* @param {number}
* @returns {string}
 */
// function drEvil(number) {}
const drEvil = (number) => {
  if(number >= 1000000){
    return number + " dollars " +`(pinky)`
  } else {
    return number + " dollars"
}
}
/**
 * 
 * Create a `verbing` function.
 * It should take a single string variable. 
 * If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', 
 * in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. 
 * @param {string}
 * @returns {string}
For example:

```js
verbing('box')
// => 'boxing'
verbing('train')
// => 'training'
verbing('swimming')
// =>  'swimmingly'
verbing('go')
// =>  'go'
```
 
 */

// function verbing() {}
const verbing = (string) => {
  if(string.length >= 3) {
    if(string.slice(string.length-3) === 'ing'){
      return string + 'ly'
    } else {
    return string + 'ing'
    }
  } else {
    return string
  }
  
}

/**
 * Takes a single sentence and returns a copy of the string without the
 * last word.
 * @param {string}
 * @returns {string}
 */

function removeLastWord() {}

/**
 * Takes a string and returns a new string that has only the even
 * indexed characters.
 * Do NOT split the string into an array.
 * @param {string}
 * @returns {string}
 */

function everyOtherLetter() {}

/**
 * Takes in a string and returns a new string that has all the vowels removed.
 * @param {string}
 * @returns {string}
 */
function disemvowel() {}

/**
 * Takes a string sentence and returns a new sentence.
 * Any word that has a length of 5 or more characters should be disemvoweled.
 * @param {string}
 * @returns {string}
 */

function disemvowelLongWords() {}

/**
 * Takes in a string and returns the middle char.
 * If there is no character in the middle return the middle two characters
 * @param {string}
 * @returns {string}
 */
function middleCharacter() {}

/**
 * Takes in a string and reverses it.
 * Do not use split
 * @param {string}
 * @returns {string}
 */

function reverseString() {}

/**
 * Takes in a sentence string and reverses each word but not the
 * order of the words.
 * @param {string}
 * @returns {string}
 */

function reverseSentenceWords() {}

module.exports = {
  firstChar,
  stringLength,
  lastLetter,
  capitalizeLastLetter,
  drEvil,
  verbing,
  removeLastWord,
  everyOtherLetter,
  disemvowel,
  disemvowelLongWords,
  middleCharacter,
  reverseString,
  reverseSentenceWords,
};
