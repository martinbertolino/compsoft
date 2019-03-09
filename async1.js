'use strict'

const axios = require('axios')

const theUrl = 'https://jsonplaceholder.typicode.com/todos/2'

console.log('start')

const result = (async () => {
    try {
        let result = await axios.get(theUrl)
        return result.data
    } catch (error) {
        console.error(error)
    }
})();   //  needs a ; here!

console.log(result);
(async () => { console.log(await result) })()

axios.get(theUrl)
    .then((response) => {
        console.log(`response ${response.data}`)
    })
    .catch((error) => {
        console.error(error)
    }) 

console.log('end')

