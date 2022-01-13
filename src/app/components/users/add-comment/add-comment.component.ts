import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Comment } from 'src/app/model/comments.model';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  comment:Comment={stars:0,body:"",author:""};

  @Output() 
  onAddEvent=new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }
  onAddComment(){ 
    console.log(this.comment);
    this.onAddEvent.emit(this.comment);
  }
}
