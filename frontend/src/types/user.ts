export interface User {
    id: number,
    email: string,
    password_hash: string,
    name: string,
    role: Role,
    active: boolean,
    created_at: string,
}

enum Role {
    "MEMBER",
    "LIBRARIAN",
    "ADMIN",
}