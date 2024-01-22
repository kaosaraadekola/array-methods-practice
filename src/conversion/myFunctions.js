//Definitions:
// In all of these example functions and their tests, the following definitions should be used:
//"long":  any string which has a length of 7 or more.
//"odd": any number n for which n % 2 !== 0

/** return the first "long" string in the given array, or undefined if none is found.
 * @param {string[]} inputStrings
 * @return {string|undefined}
 */

function findFirstLongString(inputStrings) {
    return inputStrings.find(str => str.length >= 7);
  }

/** return the first odd number in the given array of numbers, or undefined if none is found.
 * @param {number[]} inputNumbers
 * @return {number|undefined}
 */
function findFirstOddNumber(inputNumbers) {
return inputNumbers.find(number => number % 2 !== 0)
}
//number % 2 !== 0 checks if the remainder of dividing number by 2 is not equal to 0.
//this condition is used to identify odd numbers
//as odd numbers have a remainder of 1 when divided by 2.

/** return the LAST "long" string in the given array of strings, or undefined if none is found.
 * @param {string[]} inputStrings
 * @return {string|undefined}
 */
function findLastLongString(inputStrings) {
    return inputStrings.find(str => str.length >= 8);
  }

/** Given an array of strings of various lengths,
 * return a new array containing only the "long" strings from the input array
 * @param {string[]} inputStrings
 * @returns {string[]}
 * */
function findAllLongStrings(inputStrings) {
    return inputStrings.filter(str => str.length >= 7);
}

/** given an array of numbers, return a new array containing all the odd numbers in the input array.  Returns an empty array if none are found.
 * @param {number[]} inputNumbers
 * @return {number[]}
 */
function findAllOddNumbers(inputNumbers) {
    return inputNumbers.filter(number => number % 2 !== 0)
}

/** Given an array of mixed types of value
 * return a new array containing only those elements of type string.
 * @param {any[]} inputArray
 * @returns {string[]}
 * */

function findAllTheStrings(inputArray) {
        const result = inputArray.filter((item) => typeof item === "string")
        return result
    }

/** Given an array of people objects,
 * return a new array containing only those people objects whose firstName OR secondName (or both) is long.
 * @param {{firstName: string, secondName:string}[]} 
 * @returns {{firstName: string, secondName:string}[]}
 * */
function findAllPeopleWithALongName(inputStrings) {
        return inputStrings.filter(person => 
            person.firstName.length > 7 || person.secondName.length > 7
        );
    }

/** given an array of numbers return true if all of them are odd, else false.
 * @param {number[]} inputNumbers
 * @return {boolean}
 */
function areAllNumbersOdd(inputNumbers) {
        const areAllOdd = inputNumbers.every(number => number % 2 !== 0);
        return areAllOdd;
    }

/** Given an array of strings of various lengths,
 * return true if all of the strings are "long", else false
 * @param {string[]} inputStrings
 * @returns {boolean}
 * */
function areAllStringsLong(inputStrings) {
        return inputStrings.every(str => str.length > 7);
}

/**
 * the .every method returns true if the call back function  returns true for every element in the array
 * If the callback returns false for at least one element, then .every returns false.
 */
export {
    findFirstLongString,
    findFirstOddNumber,
    findLastLongString,
    findAllLongStrings,
    findAllOddNumbers,
    findAllTheStrings,
    findAllPeopleWithALongName,
    areAllNumbersOdd,
    areAllStringsLong,
};
