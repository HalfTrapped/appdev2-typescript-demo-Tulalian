// Special Type - null
let a: null;

a = null
// a = "Hi"

let b: null | string

b = null
b = "Hi"
// b = 10

// Special Type - undefined
let c: undefined;

c = undefined
// c = null
// c = "Hi"

let d: undefined | string

d = undefined
d = "This is a string"
// d = null
// d = 10

let e: undefined | number | null;

e = undefined
e = null 
e = 5

console.log(a, b, c, d, e)