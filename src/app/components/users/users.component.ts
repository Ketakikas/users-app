import {Component, ViewEncapsulation} from '@angular/core';
import { User } from 'src/app/model/user-model';

@Component({
    selector:"app-users",
    // template:`
    // <h4>Hello from Users Component</h4>
    // `,
    // styles:[`
    // h4{
    //     color:yellow;
    //     background-color:black;
    //     padding:10px;
    // }
    // `]
    templateUrl:"./users.component.html",
    styleUrls:['./users.component.css'],
    encapsulation:ViewEncapsulation.Emulated
})
export class UsersComponent{
    user: User={
        pic:"https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg",
        firstname:"Bill",
        lastname:"Gates",
        dob:new Date("Dec 21, 1965"),
        isWorking:true,
        income:10000,
        company:"Microsoft",
        hobbies:["Gaming","Dancing","Studying","Reading"],
        votes:100
    };
    
    onMoreInfo(user){
        alert(`${user.firstname} ${user.lastname} with votes ${user.votes}`);
    }

    // changeVotes(){

    // }
}
