export default function sortDictionary(dictionary) {
    const keys = Object.keys(dictionary);
    
    const sortedKeys = keys.sort();
    const sortedDictionary = {};

    sortedKeys.forEach((key) => {
        sortedDictionary[key] = dictionary[key];
    });

    return sortedDictionary;
}
        