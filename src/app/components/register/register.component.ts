import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup,Validators,FormArray} from '@angular/forms';
import { stringify } from 'querystring';

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
  
  constructor(private fb:FormBuilder) { 
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
    const pwd=control.root.get("password").value;
    const isSame=control.value===pwd?true:false;
    return isSame?null:{ComparePasswords:true}
  }

  onRegister(){
    console.log(this.registrationForm);
  }
  
  onReset(){
    this.registrationForm.reset();
  }

}
