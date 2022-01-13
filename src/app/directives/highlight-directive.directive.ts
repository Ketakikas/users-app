import { Directive,ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[app-highlight]'
})
export class HighlightDirectiveDirective {
//ElementRef class gives the lement on which this directive is applied like <p>
  // constructor(private elementRef:ElementRef) {
  //   console.log(this.elementRef.nativeElement);
  //   this.elementRef.nativeElement.style.backgroundColor="grey";

  //HostBinding class will create properties for styles
  @Input()
  favcolor:any;

  @HostBinding('style.backgroundColor') 
  bgColor:any;

  @HostBinding('style.color')
  fColor:any;

  @HostBinding('style.fontWeight')
  fontWeight:any;

  @HostBinding('style.fontSize')
  fontSize:any;
  
  //HostListener class will listne to all the html events
  @HostListener('mouseenter') 
  onMouseEnter(){
    this.bgColor= this.favcolor;
    this.fColor='green';
    this.fontWeight='bold';
    this.fontSize="25px";
  }

  @HostListener('mouseleave') 
  onMouseLeave(){
    this.bgColor= 'transparent';
    this.fColor='black';
    this.fontWeight='bold';
    this.fontSize="15px";
  }
}
