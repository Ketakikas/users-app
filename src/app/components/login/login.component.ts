import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message:string;
  constructor(private router:Router,
    private authService:AuthServiceService) { }

  ngOnInit(): void {
  }
  onSubmit(loginForm:NgForm){
    const {email, password} = loginForm.value;
    this.authService.onLogin(email, password)
      .subscribe((response : any) => {
        if(response.message === "SUCCESS"){
          this.router.navigate(['/users'])
        }
      })
  }
  onReset(loginForm:NgForm){
    loginForm.reset();
  }
}
