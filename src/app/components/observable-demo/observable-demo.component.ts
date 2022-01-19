import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Button } from 'protractor';
import {from, interval, of, Subscription,fromEvent} from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements AfterViewInit{
  
  //by convention, use $ at the end of name which holds the observable value
  @ViewChild('btnObservable') //viewchild refers the template controls
  btn :ElementRef<any>;
  
  @ViewChild("txtName")
  txtName:ElementRef<any>;

  source$=interval(1000);//after 1 second, it will emit a value
  
  fruits=["apple","banana","orange","grapes"];
  
  source2$=from(this.fruits); //observable from collection
  
  source3$=of("apple",101,true,"Hello World"); //observable from any type
  
  unSub$:Subscription;
  
  source4$=fromEvent(document,"click");
  
  constructor() { 
    this.unSub$=this.source4$.subscribe((eventData)=>{
      console.log("document click",eventData);
    });
  }
  
  //ngAfterViewInit loads after view or template have been initialized
  ngAfterViewInit(): void {
    //observable after click event on button element
    let source6$=fromEvent(this.btn.nativeElement,"click");
    source6$.subscribe((eventData)=>{
      console.log("button click",eventData);
    });
    //observable after keyup event on input element
    let source7$=fromEvent(this.txtName.nativeElement,"keyup");
    source7$.subscribe((eData)=>{
      console.log("KeyUp of Input",eData);
    });
  }
  
  onSubscribe(){
    //subscribe methods consumes the observable value.
    this.unSub$=this.source$.subscribe({
      next:data=>{console.log(data)},//called everytime when interval method emit any data
      error:err=>{},//handles error occured while data emission
      complete:()=>{console.log("Completed")}
    });
    // this.source2$.subscribe({
    //   next:data=>{console.log(data)},//called everytime when interval method emit any data
    //   error:err=>{},//handles error occured while data emission
    //   complete:()=>{console.log("Completed")}
    // });
    // this.source3$.subscribe({
    //   next:data=>{console.log(data)},//called everytime when interval method emit any data
    //   error:err=>{},//handles error occured while data emission
    //   complete:()=>{console.log("Completed")}
    // });
    // this.unSub$=this.source4$.subscribe({
    //   next:data=>{console.log(data)},//called everytime when interval method emit any data
    //   error:err=>{},//handles error occured while data emission
    //   complete:()=>{console.log("Completed")}
    // });
  }
  
  onUnsubscribe(){
    console.log("Unsubscribed");
      this.unSub$.unsubscribe();
  }
}
