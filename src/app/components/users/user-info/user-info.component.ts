import { Component, Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent{
  @Input()
  user:any;
  
  @Output()
  childEvent=new EventEmitter<any>();

  @Output()
  childevent1=new EventEmitter<any>();
  
  onBtnClick(){
    this.childEvent.emit(this.user);
  }

  // changeVotes(elemet:HTMLInputElement){
  //   this.user=elemet.value;
  // }
}