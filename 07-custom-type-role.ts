(() => {
    // Type Aliases or Custom Types
    // use `type` keyword to create custom type
    type Role = 'admin' | 'guest' | 'teacher' | 'student' | 'customType:Matthew'

    // Complex Object Type Definition
    type User = {
        name: string;
        age: number;
        role: Role; // you can use as well the Role type in Object type
        permission: string[];
    }

    let userRole: Role = 'customType:Matthew'

    // ...

    function access(role: Role) {
        console.log(`Accessing as ${role}`)
    }
})