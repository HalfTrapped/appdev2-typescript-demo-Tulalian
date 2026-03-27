(() => {
    // Literal Types (Alternative to Enum)
    let userRole: 'admin' | 'guest' | 'teacher' | 'student' = 'admin'

    userRole = 'guest'
    // anotherUserRole = 'superadmin'

    function access(role: 'admin' | 'guest' | 'teacher' | 'student') {
        // ...
    }
})