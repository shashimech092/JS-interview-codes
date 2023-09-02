// const Person = {
//     name: 'Shashi',
//     greet() {
//         console.log(`Hello, my name is ${this.name}`)
//     }
// }

// const myFun=Person.greet;
// const newMyFun=myFun.bind(Person)
// newMyFun()


// const arr=[1, 2, 3]
// console.log(Array.isArray(arr))

// const arr= { a:1, b:2}
// const cloneObj = Object.assign({}, arr)

// or 

// const cloneObj2 = {...arr}

const numbers=[1, 2, 3, 4]
const square = numbers.map((num) => num*num)
console.log(square)

console.log(myVariable); // Undefined (hoisting)
var myVariable = 5;


function createUser(name, score) {
    this.name=name;
    this.score=score;
}

createUser.prototype.login=function() {
    console.log(`login with ${this.name} and score ${this.score}`)
}

const user1=new createUser('shashi', 4)
user1.login()