   
import dictionaryData from './data/dictionaryData.js';
import letterCounter from './letterCounter.js';
import sortDictionary from './sortDictionary.js';

// SORT RESULT ALPHABETICALLY, VARIANT #1 
// const result = letterCounter(dictionaryData);
// const keys = Object.keys(result);
// keys.sort()
//     .forEach(key => {
//         console.log(key, ': ', result[key]);
//     });

// SORT RESULT ALPHABETICALLY, VARIANT #2
// const result = letterCounter(dictionaryData);
// const sortedResult = sortDictionary(result);
// console.log('result = ', sortedResult);
// sortDictionary(result);
// console.log(result);


// SORT ONLY KEYS, OUTPUT - LETTERS
// const result = letterCounter(dictionaryData);
// const key = Object.keys(result);
// key.forEach(key => {
//     console.log(key);
// });

// SORT ONLY VALUES, OUTPUT - NUMBERS
// const result = letterCounter(dictionaryData);
// const key = Object.keys(result);
// const values = Object.values(result);
// values.sort()
//       .forEach(values => {
//             console.log(values);
//         });

// SORT ONLY VALUES, OUTPUT - NUMBERS ASCEND
// const result = letterCounter(dictionaryData);
// const values = Object.values(result);
// values.sort((a, b) => a - b);
// console.log(values);

// SORT ONLY VALUES, OUTPUT - NUMBERS DESCEND
// const result = letterCounter(dictionaryData);
// const values = Object.values(result);
// const keys = Object.keys(result);
// values.sort((a, b) => b - a);
// console.log(values);


// SORT ONLY VALUES, OUTPUT - KEYS AND NUMBERS DESCEND
const result = letterCounter(dictionaryData);
const massiveLength = dictionaryData.length 
console.log('Total amount of words:', massiveLength);
const sortByValue = (a, b) => b[1] - a[1];
const massiveOfSortedLetters = Object.entries(result);
// console.log('Sorted list of letters in massive: ', massiveOfSortedLetters.sort(sortByValue));
const sortedEntries = massiveOfSortedLetters.sort(sortByValue);
const sortedList = Object.fromEntries(sortedEntries);
console.log('Amout of letters in all words (sorted): ', sortedList);