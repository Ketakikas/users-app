import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customoperator-obervable',
  templateUrl: './customoperator-obervable.component.html',
  styleUrls: ['./customoperator-obervable.component.css']
})
export class CustomoperatorObervableComponent implements AfterViewInit {
  obs$=new Observable((observer)=>{
    setTimeout(() => {
      observer.next("First Package");  
    }, 1000);
    setTimeout(() => {
      observer.next("Second Package");  
    }, 2000);
    setTimeout(() => {
      //observer.next("Third Package");  
      observer.error(new Error("something bad happened"));
    }, 3000);
    setTimeout(() => {
      observer.complete();
    }, 4000);
    });
  onSubscribe(){
    this.obs$.subscribe({
      next:(data)=>{console.log(data)},
      error:err=>{console.log(err)},
      complete:()=>console.log("Completed")
    });
  }
  constructor() { }
  ngAfterViewInit(): void {
  }


}
