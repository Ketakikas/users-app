import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup,Validators,FormArray} from '@angular/forms';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username=new FormControl('',
  [Validators.required,
  Validators.email
  ]);

  password=new FormControl('',[
    Validators.required,
    Validators.minLength(6),
    RegisterComponent.hasExclamation
  ]);

  confirmPassword=new FormControl('',[
    Validators.required,
    Validators.minLength(6),
    RegisterComponent.hasExclamation,
    RegisterComponent.comparePasswords
  ]);

  courses=new FormArray([]);
  hobbies = new FormArray([]);

  addCourse(){
    this.courses.push(new FormControl(''));
  }

  deleteCourse(index:number){
    this.courses.removeAt(index);
  }

  addHobby(){
    const hobby = new FormGroup({
      hobbyName : new FormControl(''),
      frequency : new FormControl('')
    })
    this.hobbies.push(hobby);
  }

  registrationForm:FormGroup;
  
  constructor(private fb:FormBuilder,
    private router:Router,
    private authService:AuthServiceService) { 
    this.registrationForm=this.fb.group({
      username:this.username,
      password:this.password,
      confirmPassword:this.confirmPassword,
      books:new FormArray([])
    });
  }

  get books(){
    return this.registrationForm.get("books") as FormArray;
  }

  addBook(){
    this.books.push(new FormControl(''));
  }

  //Custom validator
  static hasExclamation(control:AbstractControl){
    const hasExcl=control.value.indexOf("!")>=0;
    return hasExcl?null:{hasExclamation:true}
  }

  static comparePasswords(control:AbstractControl){
    let pwd:string="";
    if(control.root.get("password")){
      pwd=control.root.get("password").value;
    }
    const isSame=control.value===pwd?true:false;
    return isSame?null:{ComparePasswords:true}
  }

  onRegister(){
    console.log(this.registrationForm);
    //localStorage.setItem("loggedIn",JSON.stringify(this.registrationForm.value));
    const { username, password } = this.registrationForm.value;
    this.authService.onRegister(username, password)
      .then((response : any) => {
        if(response.message === "SUCCESS"){
          this.router.navigate(['/login'])
        }
      });
  }
  
  onReset(){
    this.registrationForm.reset();
  }
  shoudlLeave(){
    return confirm("Are you want that you want to leave the page?")?true:false;
  }
}
