import { User } from "./user-model";
import {} from './comments.model';

export const User_Data:User[]=[{
    firstname:"Bill",
    lastname:"Gates",
    dob:new Date("Dec 21, 1965"),
    isWorking:true,
    income:10000,
    company:"Microsoft",
    hobbies:["Gaming","Dancing","Studying","Reading"],
    votes:100,
    pic:"https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg",
    comments : [
        {stars : 5, body : "Great work", author : "test@test.com"},
        {stars : 4, body : "Well done", author : "foo@test.com"},
      ]
},
{
    firstname:"Steve",
    lastname:"Jobs",
    dob:new Date("Jan 21, 1965"),
    isWorking:false,
    income:0,
    company:"Apple",
    hobbies:["Gaming","Reading"],
    votes:120,
    pic:"https://www.cheatsheet.com/wp-content/uploads/2021/06/Steve-Jobs-1.jpg",
    comments:[]
},
{
    firstname:"Tim B.",
    lastname:"Lee",
    dob:new Date("Aug 21, 1965"),
    isWorking:true,
    income:13000,
    company:"World Wide Web",
    hobbies:["Gaming","Studying","Reading"],
    votes:200,
    pic:"https://upload.wikimedia.org/wikipedia/commons/4/4e/Sir_Tim_Berners-Lee_%28cropped%29.jpg",
    comments : [
        {stars: 4, body : "Nicely done", author: "test@test.com"}
      ]
}];