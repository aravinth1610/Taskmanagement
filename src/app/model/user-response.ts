export class UserResponse {

    userId:number;
    name:string;
    password:string;
    gmail:string;
    authority:Authority[];

}

export class Authority{
    roleId:number;
    role:string;
}
