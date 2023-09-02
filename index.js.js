// function outer() {
//     let message='Hello, Shashi'
//     function inner() {
//         console.log(message)
//     }
//     return inner()
// }
// outer()

// function Person(name) {
//     this.name=name
// }

// Person.prototype.greet = function() {
//     console.log(`Hello my name is ${this.name}`)
// }

// const person1=new Person('Ravi')
// person1.greet()

// const person={
//     name: 'Shashikant',
//     greet() {
//         console.log(`Hello my name is ${this.name}`)
//     }
// }

// const myname=person.greet;  
// // // const bindFunc =   myname.bind(person)
// // // bindFunc()
// // person.greet()

// console.log(5=='5')
// console.log(5==='5')


// const arr2 = [1, 3, 4, 2]
// const reducer=arr2.reduce((e, e1) => {
//   return e*e1
// })
// console.log(reducer)

const arr2 = [1, 3, 4, 2]
const reducer=arr2.filter((e) => {
  return e>3
})
console.log(reducer)

const person = {name: 'shashi', age: 32}
for (let key in person) {
    console.log(key)
}



