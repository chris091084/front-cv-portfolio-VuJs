import { string } from "yup";

export class User{
    constructor(
        public name: string,
        public firstname: string,
        public lastname: string,
        public birthday: Date,
        public email: string,
        public adress: string,
        public city: string,
        public phoneNumber: string,
        public password: string,
    ){}

   

}