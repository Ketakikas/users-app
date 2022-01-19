import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
    //EmployeeRegisterComponent.hasExclamation
  ]);
  confirmPassword=new FormControl('',[
    Validators.required,
    Validators.minLength(6),
    EmployeeRegisterComponent.comparePasswords
  ]);
  country=new FormControl('',[
    Validators.required
  ]);
  userType=new FormControl('',[
    Validators.required
  ]);
  tnC=new FormControl('',[
    Validators.required
  ]);
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
      skills:new FormArray([],[
        Validators.required
      ])
    })
  }

  get skills(){
    return this.empForm.get("skills") as FormArray;
  }

  addSkill(){
    this.skills.push(new FormControl('',[Validators.required]));
  }

  ngOnInit(): void {
  }
  onRegister(){
    console.log(this.empForm);
  }
  onReset(){
    this.empForm.reset();
  }
  //custom validator for matching password and confirm password
  static comparePasswords(control:AbstractControl){
    let password:string="";
    if(control.root.get("password")!==null){  
    password=control.root.get("password").value;
      console.log(password);
  }
    const isSame=control.value===password?true:false;
    console.log("isSame:",isSame);
    return isSame?null:{comparePasswords:true};
  }
  static hasExclamation(control:AbstractControl){
    const hasExcl=control.value.indexOf("!")>=0;
    return hasExcl?null:{hasExclamation:true}
  }
}
