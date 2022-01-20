import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/model/post-model';
import { v4 } from 'uuid';
import { PostsComponent } from '../posts.component';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  title=new FormControl('',[
    Validators.required,
    // Validators.minLength(3)
  ]);
  body=new FormControl('',[
    Validators.required,
    // Validators.minLength(6)
  ]);
  published=new FormControl('',[
    Validators.required
  ]);
  @Output()
  postEvent=new EventEmitter<Post>();

  @Output()
  cancelEvent=new EventEmitter<any>();

  postForm:FormGroup;

  constructor(private fb:FormBuilder) {
    this.postForm=this.fb.group({
      title:this.title,
      body:this.body,
      published:this.published
    })
   }
  onAddPost(){
    const post:Post={
      id:v4(),
      title:this.postForm.value.title,
      body:this.postForm.value.body,
      published:this.postForm.value.published===""?false:true
    };
    console.log(post);
    //console.log(this.postForm.value);
    this.postEvent.emit(post);
  }
  ngOnInit(): void {
  }
  onCancel(){
    this.cancelEvent.emit(false);
   }
}
