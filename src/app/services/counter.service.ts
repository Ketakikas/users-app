import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter:number=0;
  constructor() { }
  incrementCounter(){
      this.counter=this.counter+1;
  }
  
  get Counter() : number {
    return this.counter;
  }
  set Counter(value : number) {
    this.counter=value;
  }
  
  
}
