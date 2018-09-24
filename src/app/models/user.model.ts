export interface User {
    username?: string;
    email?: string;
    password?: string;
// passwordConf?: string;
}

export class UserModel implements User {
    constructor() {}
}
