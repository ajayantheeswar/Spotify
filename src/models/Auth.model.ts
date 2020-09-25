
export class User {
    constructor(public name : string, public email:string) {}
}

export class EmailSignUpDTO {
    constructor (public email: string,public name: string,public password : string,public dob : string,public gender : string) {}
}

export class EmailSignInDTO {
    constructor (public email: string, public password : string) {}
}