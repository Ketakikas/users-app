import { Component, OnInit } from '@angular/core';
import { table } from 'console';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-subjects-demo',
  templateUrl: './subjects-demo.component.html',
  styleUrls: ['./subjects-demo.component.css']
})
export class SubjectsDemoComponent implements OnInit{
  ngOnInit(): void {
    // const subject=new Subject();//observable
    // subject.pipe(tap(val=>console.log(val))).subscribe((data)=>{
    //     console.log("subscriber 01",data);
    // });//observer
    // subject.next("First Package");
    // subject.next("Second Package"); // data is emmiting after subscription

    // subject.pipe(tap(val=>console.log(val))).subscribe((dt=>{
    //   console.log("subscriber 02",dt);
    // }));
    // subject.next("Third Package");// it will be emitted for both subscriptions

    //**************************************************************** */
    //Behavior Subject
    // const sub=new BehaviorSubject(99);
    // sub.subscribe(val=>console.log("Subscriber 01 ",val));
    // sub.next(101);
    // sub.subscribe(val=>console.log("Subscriber 02 ",val));
    // sub.next(104);
    // sub.subscribe(val=>console.log("Subscriber 03 ",val));

    //********************************************************************** */
    //Replay Subject
  //if left blank will give all data
    // const subj=new ReplaySubject(2);
    // subj.next(99);
    // subj.next(100);
    // subj.next(101);

    // subj.subscribe(data=>console.log("Subscriber 01",data));
    // subj.next(102);
    // subj.next(103);
    // subj.subscribe(data=>console.log("Subscriber 02",data));

    //********************************************************************* */
    //Async Subject
    const sub=new AsyncSubject();
    sub.subscribe(d=>console.log("Subscriber 01",d));
    sub.next(1);
    sub.next(2);
    sub.next(3);
    sub.subscribe(d=>console.log("Subscriber 02",d));
    sub.next(4);
    sub.next(5);
    
  } 
}