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
  constructor(private postService:PostServiceService) { }

  ngOnInit(): void {
    this.posts=this.postService.getPosts();
  }

}
