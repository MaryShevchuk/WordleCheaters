export default function letterCounter(words) {
    const letterCount = {};

    words.forEach((word) => {
        for (let i = 0; i < word.length; i++) {
            const letter = word[i].toLowerCase();
            
            if (letterCount[letter] === undefined) {
                letterCount[letter] = 1; 
            } else {
                letterCount[letter]++;
            }
        }
    });

    return letterCount;
 }