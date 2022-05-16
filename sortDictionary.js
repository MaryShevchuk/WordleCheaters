


export default function sortDictionary(dictionary) {
    const letters = Object.keys(dictionary);
    // console.log('letters in all words', letters); 

    const alphabetLetters = letters.sort();
    const sortedDictionary = {};
    // console.log('letters in alphabetical order', alphabetLetters);

    alphabetLetters.forEach((letter) => {
        sortDictionary[letter] = dictionary[letter];
    

    })
    return dictionary;
}
        