import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { PostServiceService } from '../post-service.service';

@Injectable({
  providedIn: 'root'
})
export class PostRosolveService implements Resolve<any>{

  constructor(private postService:PostServiceService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.postService.getPosts();
  }
}
