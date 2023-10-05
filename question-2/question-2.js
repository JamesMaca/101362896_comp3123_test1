// James MacAloney - 101362896
// COMP 3123 - Lab Test 1
// October 5th 2023
//QUESTION #2 ----------------------------------------------------------------------------------
//Given the script file callbacks.js, write a script that does the following:
    //Create a method resolvedPromise that is similar to delayedSuccess and resolves a message after a timeout of 500ms.
    //Create a method rejectedPromise that is similar to delayedException and rejects an error message after a timeout of 500ms.
    //Call both promises separately and handle the resolved and reject results and then output to the console
//----------------------------------------------------------------------------------------------

const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve({'message': 'delayed success!'}))
    }, 500)
}

const rejectPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(reject({'error': 'delayed exceptions!'}))
    }, 500)
}

resolvedPromise().then((message) => console.log(message))
rejectPromise().catch((error) => console.log(error))