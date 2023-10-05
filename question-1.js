// James MacAloney - 101362896
// COMP 3123 - Lab Test 1
// October 5th 2023
//QUESTION #1 ----------------------------------------------------------------------------------
//User Create a script with a function named lowerCaseWords that takes a mixed array as input.
//The function will do the following: 
    //return a promise that is resolved or rejected
    //filter the non-strings and lower case the remaining words
//----------------------------------------------------------------------------------------------

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

const lowerCaseWords = (arr) => {
    return new Promise((resolve, reject) => {
        if(!Array.isArray(arr) || arr.length === 0){
            reject("ERROR; Invalid input, must be Array!")
        }
        
        const newLowerCaseWords = arr.filter(item => typeof item === 'string').map(word => word.toLowerCase());

        if(newLowerCaseWords.length == 0){
            reject('No Strings found in the array')
        }

        resolve(newLowerCaseWords)
        
    }); 
}

lowerCaseWords(mixedArray)
    .then((result) => console.log(result))
    .catch((error) => console.log(error))