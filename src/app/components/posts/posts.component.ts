import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post-model';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:Post[];
  showAddPost:boolean=false;
  showViewPost:boolean=false;
  selectedPost:Post={id:"",title:"",body:""};
  constructor(private postService:PostServiceService) { }

  ngOnInit(): void {
    this.postService.getPosts()
    .subscribe(posts=>{
      this.posts=posts;
    });
  }
  onAddPost(post:Post){
    console.log("Parent comp:",post);
      this.postService.createPost(post)
      .subscribe(post=>{
          this.showAddPost=true;
      });
  }
  onCancel(val:boolean){
      this.showAddPost=val;
  }
  onClose(){
      this.showViewPost=false;
  }
  onClickPost(id:string){
    console.log(id);
     this.postService.getPost(id)
     .subscribe((post:Post)=>{
       console.log(post);
       this.selectedPost=post;
       console.log(this.selectedPost);
       this.showViewPost=true;
     });
  }
  onDelete(id:string){
    this.postService.deletePost(id).subscribe(post=>{
      this.showViewPost=false;
    })
  }
  onPut(post:Post){
    this.postService.putPost(post).subscribe(post=>{
      //this.showViewPost=false;
    });
  }
  onPatch(post:Post){
    this.postService.editPost(post).subscribe();
  }
}
