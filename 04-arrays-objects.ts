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
    hobbies: Array<string>, //FORMATTING SA ARRAY AY Array<insert dito datatype and then pwede maglagay ng "|" para dagdag ng value for example number 
    role: {
        description: string,
        id: number
    }
} = {
    name: "Matt", 
    age: 21,
    hobbies: ["Eating", "Sleeping"],
    role: {
        description: 'admin',
        id: 1
    }
}

// Must not null or undefined
let val: {} = "Matt"

// Flexible Object - Record Type
let data: Record<string, number | string>

data = {
    1: 1,
    name: 'Elmer'
    // isPartTimeInstructor: true
}