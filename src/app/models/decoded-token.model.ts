export interface DecodedToken {
    exp?: number;
    username?: string;
    iat?: string;
}

export class DecodedTokenModel {
    constructor(
        exp?: number, username?: string, iat?: string
    ) {}

}
