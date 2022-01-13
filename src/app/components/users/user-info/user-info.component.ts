import { Component, Input,EventEmitter,Output } from '@angular/core';
import { User } from 'src/app/model/user-model';
import {Comment} from 'src/app/model/comments.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent{
  @Input()
  user:User;
  tab:number=1;
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
  AddComment(comment:Comment){
    this.user.comments.push(comment);
     this.tab = 1;
  }
  
}