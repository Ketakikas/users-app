import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import {v4} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  token:string=null;
  constructor() { }
  onRegister(email:string,password:string):Promise<any>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        localStorage.setItem('userInfo', JSON.stringify({ email, password }));
        resolve({message : "SUCCESS"})
      },1500)
    });
  }

  onLogin(email:string,password:string):Observable<any>{
    return new Observable((observer) => {
      const user = localStorage.getItem('userInfo');
      if (user) {
        const userObj = JSON.parse(user);
        const { email: userEmail, password: userPassword } = userObj;
        if (email === userEmail && password === userPassword) {
          this.token=v4();
          console.log("Token:"+this.token);
          localStorage.setItem("token",this.token);
          observer.next({ message: 'SUCCESS' });
        }
      } else {
        observer.error(new Error('User does not exist'));
      }
    });
  }

  isAuthenticated(){
    const token=localStorage.getItem("token");
    return token!=null;
  }
  onLogOut(){
    this.token=null;
    localStorage.clear();
  }
}
