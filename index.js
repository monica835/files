// console.log('welcome to nodejs')


//  var person = require('./person.js').default
// // // new person('monica','dinglasa').greet();
//  new person=person();


var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`What's your name? `, (name) => {
    // console.log(`Hi I'm ${name}!`)
readline.question(`how old are you? `,(age)=>{
    // console.log(`Im aleady ${age} years old!`)
readline.question(`where are you from? `,(address)=>{
    // console.log(`I came from  ${address}!`)
readline.question(`Your Classschedules `,(classsched)=>{
     console.log(`${name} your schedules are ${classsched}`)
readline.question(`do you want to add a classsched? Please type yes/no! `,function(answer){
    
readline.close()
})
})
})
})
})