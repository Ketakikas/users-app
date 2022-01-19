import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { User_Data } from 'src/app/model/mock';
import { User } from 'src/app/model/user-model';
import {Comment} from 'src/app/model/comments.model';
import { UserService } from 'src/app/services/user.service';

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
export class UsersComponent implements OnInit{
    users: User[];
    constructor(private userService:UserService){//injecting service in constructor

    }
    ngOnInit(): void {
        this.users=this.userService.getUserData(); //getting data from service
        //this.users=User_Data; //getting data directly from data source
        //console.log(User_Data);
    }

    onMoreInfo(user){
        alert(`${user.firstname} ${user.lastname} with votes ${user.votes}`);
    }

    // changeVotes(){

    // }
}
