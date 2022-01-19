import { Injectable } from "@angular/core";
import { User_Data } from "../model/mock";

@Injectable({
    providedIn:'root' //self registered app or ypu can register it in root module manually
})
export class UserService{
    getUserData(){
        return User_Data;
    }
}