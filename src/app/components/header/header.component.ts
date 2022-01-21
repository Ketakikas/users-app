import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user-model';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedInUser:string;
  constructor(private router:Router,private authService:AuthServiceService) { }

  ngOnInit(): void {
    const userInfo:any=JSON.parse(localStorage.getItem("userInfo"));
    this.loggedInUser= this.isAuthenticated? userInfo.email:null;
    console.log("Header"+userInfo.email);
  }

  isAuthenticated(){
    return this.authService.isAuthenticated();
  }
  onLogOut(){
    this.authService.onLogOut();
    this.router.navigate(['/login']);
  }
}
