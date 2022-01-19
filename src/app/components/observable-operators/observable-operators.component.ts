import { viewClassName } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import {fromEvent, interval, observable, Observable, of} from 'rxjs';
import {distinct, take, takeUntil, takeWhile,filter, tap, map, debounceTime, mergeAll, mergeMap, scan} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';

@Component({
  selector: 'app-observable-operators',
  templateUrl: './observable-operators.component.html',
  styleUrls: ['./observable-operators.component.css']
})
export class ObservableOperatorsComponent implements AfterViewInit{

  interval1$=interval(1000);
  @ViewChild("btnTakeUntil")
  btnTakeUntil:ElementRef;
  @ViewChild("search")
  searchtxt:ElementRef<any>;
  source2$:Observable<any>;
  @ViewChildren("div1")
  div1:ElementRef<any>;
  repoNames:[];
  nums$=of(1,2,3);
  notifier$:Observable<any>;
  source1$=of(1,2,4,"Abc","xyz","Abc",4);
  constructor(){
    // this.source1$.pipe(
    //   tap(val=>console.log("TAP1",val)),
    //   distinct(),
    //   filter(v=>v>3),
    //   tap(val=>console.log("TAP2",val))
    // ).subscribe(console.log);
    this.nums$.pipe(
      //get the sum of numbers coming in
      scan((total,n)=>total+n),
      map((sum,index)=>sum/(index+1))
    ).subscribe(console.log);
  }
  ngAfterViewInit(): void {
    // this.notifier$=fromEvent(this.btnTakeUntil.nativeElement,"click");
    // //this.notifier$.subscribe(console.log);
    // this.interval1$.pipe(
    //   //take(5)
    //   //takeWhile(v=>v<5)
    //   takeUntil(this.notifier$)
    // ).subscribe(console.log);
    // this.source2$=fromEvent(document,"click");
    // this.source2$.pipe(
    //   filter(ev=>ev.target.tagName==="BUTTON")
    // ).subscribe(console.log);
    // const source$ = fromEvent(this.searchtxt.nativeElement, "input");
    // source$.pipe(
    //   debounceTime(1000),
    //   map((eventdata : any) => eventdata.target.value),
    //   mergeMap((searchTerm : string) => {
    //     return ajax.getJSON(`https://api.github.com/users/${searchTerm}/repos`)
    //   }),
    //   // mergeAll()
    // )
    // .subscribe((repos : Array<any>) => {
    //   //repos.forEach((repo:any) => this.repoNames.push(repo)
    // })
    // .subscribe(obs$=>{
    //   obs$.subscribe(console.log);
    // });
  }
}
