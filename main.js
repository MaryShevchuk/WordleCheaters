   
    import dictionaryData from './data/dictionaryData.js';
    import letterCounter from './letterCounter.js';
    import sortDictionary from './sortDictionary.js';

    // import dictionaryJSON from './data/dictionaryy.json' assert { type: 'json' }; - another variant for import method 

    // console.log('data', dictionaryData) - to see the output from import data from dictionaryData.js
    //console.log('dictionaryJSON', dictionaryJSON)  - to see the output from import data from dictionaryy.json


    // import * as bla from './data/other.js'; - another example to learn import methods
    // console.log('bla', bla)

    


    //  function letterCounter(eachWord) {
    //      const dictionary = {};

    //     eachWord.forEach((text) => {
    //         for (let i = 0; i < text.length; i++) {
    //             // console.log(text[i]);

    //             const letter = text[i].toLowerCase();

    //             if (dictionary[letter] === undefined) {
    //                 dictionary[letter] = 1; 
    //             } else{
    //                 dictionary[letter]++;
    //             }
    //         }
    //     });
    //     return dictionary;
    //   }


    // export default function sortDictionary(dictionary) {
    //     const letters = Object.keys(dictionary);
    //     console.log('letters in all words', letters); 
    
    //     const alphabetLetters = letters.sort();
    //     const sortedDictionary = {};
    //     console.log('letters in alphabetical order', alphabetLetters);
    
    //     alphabetLetters.forEach((letter) => {
    //         sortDictionary[letter] = dictionary[letter];
    //     })
    // }
    

const result = letterCounter(dictionaryData);
console.log('result = ', JSON.stringify(result, null, 2));
sortDictionary(result);
// console.log('result = ', JSON.stringify(result, null, 2));




