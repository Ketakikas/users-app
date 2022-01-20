import { Injectable } from '@angular/core';
import { Post } from '../model/post-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  posts=[];
  private baseUrl:string=environment.JsonServerUrl;
  
  constructor(private httpClient:HttpClient) { }

  getPosts():Observable<Post[]>{
    return this.httpClient.get<Post[]>(`${this.baseUrl}/posts`); //will return an observable 
    //which we will consume in the componenet
  }

  createPost(post:Post){
    return this.httpClient.post(`${this.baseUrl}/posts`,post);
  }

  getPost(id:string){
    return this.httpClient.get(`${this.baseUrl}/posts/${id}`)
  }

  putPost(post:Post){
    return this.httpClient.put(`${this.baseUrl}/posts/${post.id}`,post);
  }

  editPost(post:Post){
    return this.httpClient.patch(`${this.baseUrl}/posts/${post.id}`,post);
  }
  deletePost(id:string){
    return this.httpClient.delete(`${this.baseUrl}/posts/${id}`);
  }
}
