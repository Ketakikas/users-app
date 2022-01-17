import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message:string;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(loginForm:NgForm){
    this.message="Form submitted!!";
    console.log(loginForm);
  }
  onReset(loginForm:NgForm){
    loginForm.reset();
  }
}
