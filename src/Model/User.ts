import { string } from "yup";

export class User{
    constructor(
        public name: string,
        public firstname: string,
        public lastname: string,
        public birthday: Date,
        public adress: string,
        public city: string,
        public phoneNumber: string
    ){}

   

}