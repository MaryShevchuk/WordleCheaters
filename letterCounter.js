export default function letterCounter(eachWord) {
    const dictionary = {};

   eachWord.forEach((text) => {
       for (let i = 0; i < text.length; i++) {
           // console.log(text[i]);

           const letter = text[i].toLowerCase();

           if (dictionary[letter] === undefined) {
               dictionary[letter] = 1; 
           } else{
               dictionary[letter]++;
           }

       }
   });
   return dictionary;
 }



