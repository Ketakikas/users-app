import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent implements OnInit {

  firstname=new FormControl('',[
    Validators.required
  ]);
  lastname=new FormControl('',[
    Validators.required
  ]);
  email=new FormControl('',[
    Validators.required,
    Validators.email
  ]);
  password=new FormControl('',[
    Validators.required,
    Validators.minLength(6)
  ]);
  confirmPassword=new FormControl('',[
    Validators.required,
    Validators.minLength(6)
  ]);
  country=new FormControl('',[
    Validators.required
  ]);
  userType=new FormControl('',[
    Validators.required
  ]);
  tnC=new FormControl('',[]);
  //skills=new FormArray([]);

  empForm:FormGroup;
  constructor(private fb :FormBuilder) { 
    this.empForm=this.fb.group({
      firstname:this.firstname,
      lastname:this.lastname,
      email:this.email,
      password:this.password,
      confirmPassword:this.confirmPassword,
      country:this.country,
      userType:this.userType,
      tnC:this.tnC,
      skills:new FormArray([])
    })
  }

  get skills(){
    return this.empForm.get("skills") as FormArray;
  }

  addSkill(){
    this.skills.push(new FormControl(''));
  }

  ngOnInit(): void {
  }
  onRegister(){
    console.log(this.empForm);
  }
  onReset(){
    this.empForm.reset();
  }
}
