import {Component} from '@angular/core';

@Component({
    selector:"app-users",
    template:`
    <h4>Hello from Users Component</h4>
    `,
    styles:[`
    h4{
        color:yellow;
        background-color:black;
        padding:10px;
    }
    `]
})
export class UsersComponent{

}