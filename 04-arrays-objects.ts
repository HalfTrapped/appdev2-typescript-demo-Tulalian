let hobbies = ["Eating", "Watching"]

hobbies.push("Sleeping")

console.log(hobbies)

let userList: (string | number)[];
//let userList: Array<string | number>;
userList = ["Matt", "Hue0110", 123676767]

console.log(userList)

let user: {
    name: string;
    age: number;
    hobbies: Array<string>,
    role: {
        description: string,
        id: number
    }
} = {
    name: "Elmer",
    age: 31,
    hobbies: ["Eating", "Sleeping"],
    role: {
        description: 'admin',
        id: 1
    }
}

// Must not null or undefined
let val: {} = "Elmer Alvarado"

// Flexible Object - Record Type
let data: Record<string, number | string>

data = {
    1: 1,
    name: 'Elmer'
    // isPartTimeInstructor: true
}