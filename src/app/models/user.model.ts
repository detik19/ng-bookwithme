export interface User {
    username?: string;
    email?: string;
    password?: string;
}

export class UserModel implements User {
    constructor() {}
}
