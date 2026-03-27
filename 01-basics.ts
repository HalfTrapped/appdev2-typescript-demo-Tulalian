// console.log("Hello World!")

let userName: string = "Matthew";
let userAge = 21;

// ...

userAge = 21

console.log(`Username - ${userName}`)
console.log(`Age - ${userAge}`)

function add(a: number, b = 1) {
    return a + b
}

console.log(add(11))
// add('10')
console.log(add(10, 20))
// console.log(add(10, '6'))