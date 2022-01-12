import { AfterContentChecked,Input, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-demo',
  templateUrl: './life-cycle-demo.component.html',
  styleUrls: ['./life-cycle-demo.component.css']
})
export class LifeCycleDemoComponent implements OnInit,OnChanges,DoCheck,AfterContentChecked,AfterContentInit,AfterViewInit,AfterViewChecked,OnDestroy {

  @Input()
  title: string;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges',changes);
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngOnChangengOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChange');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

}
