import { Injectable } from "@angular/core";
import { User_Data } from "../model/mock";

@Injectable()
export class UserService{
    getUserData(){
        return User_Data;
    }
}