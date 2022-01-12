import { Component, Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'Btn',
  templateUrl: './user-button.component.html',
  styleUrls: ['./user-button.component.css']
})
export class UserButtonComponent{
  @Input()
   text:string;

   @Output()
   btnClick=new EventEmitter<any>();

   onBtnClick(event:{target:HTMLInputElement}){
        this.btnClick.emit(event);
   }
}
