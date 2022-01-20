import { Injectable } from '@angular/core';
import { Post } from '../model/post-model';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  posts=[];
  
  getPosts(){
    return [...this.posts];//copy of posts
  }

  createPost(post:Post){
    this.posts.push(post);
  }
  
  constructor() { }
}
