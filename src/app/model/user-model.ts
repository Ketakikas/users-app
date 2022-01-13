import {Comment} from './comments.model';

export interface User{
    pic:string;
    firstname:string;
    lastname:string;
    dob:Date,
    isWorking:boolean;
    income:number;
    company:string;
    hobbies:string[];
    votes:number;
    comments:Comment[]
}