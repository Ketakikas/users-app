import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/model/post-model';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  @Output()
  closeEvent=new EventEmitter();
  
  @Output()
  deleteEvent=new EventEmitter<string>();
  
  @Output()
  putEvent=new EventEmitter<Post>();
  
  @Output()
  patchEvent=new EventEmitter<Post>();
  
  @Input()
  post:Post;
  constructor() { }

  ngOnInit(): void {
  }
  onClose(){
    this.closeEvent.emit();
  }
  onDelete(id:string){
    console.log(id);
    this.deleteEvent.emit(id);
  }
  onPut(id:string){
    this.putEvent.emit(this.post);
  }
  onPatch(id:string){
    this.patchEvent.emit(this.post);
  }
}
