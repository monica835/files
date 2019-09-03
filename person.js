// firstname = null
// lastname = null
// class person {
//     constructor(firstname, lastname) {

//         this.firstname = firstname;
//         this.lastname = lastname
//     }
//     greet() {
//         console.log(`hi ${this.firstname} ${this.lastname},welcome to nodejs`)
//         console.log(__filename)
//         console.log(__dirname)
//         console.log(module)
//         console.log(exports)
//     }
// }

var student1;
var student2;
var student3;

name=null
classschedule = null
class student {
    constructor(name, classschedule) {
        this.name=name;
        this.classschedule = classschedule
    }
    getinfo() {
        console.log(`Enter a name: ${this.name }` )
    }
    addschedule() {
        
   
    }
}
// var readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// readline.question(`What's your name? `, (name) => {
//     // console.log(`Hi I'm ${name}!`)
// readline.question(`how old are you? `,(age)=>{
//     // console.log(`Im aleady ${age} years old!`)
// readline.question(`where are you from? `,(address)=>{
//     // console.log(`I came from  ${address}!`)
// readline.question(`Your Classschedules `,(classsched)=>{
//      console.log(`${name} your schedules are ${classsched}`)
// readline.question(`do you want to add a classsched? Please type yes/no! `,function(answer){
//     if(answer==='yes'){
//         readline.question(`your other sched `,(classsched)=>{
//             // console.log(`your another schedules are shown  ${classsched}`)
//         })
    
//     }else{
//         console.log(`Thanks have a nica day!!1`)
//     }
// readline.close()
// })
// })
// })
// })
// })

module.exports = student;

