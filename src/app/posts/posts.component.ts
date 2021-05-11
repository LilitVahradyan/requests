import { Component } from '@angular/core';
import { filter, switchMap, map } from 'rxjs/operators';
import { of, from } from 'rxjs';

import { RequestsService } from '../services/requests.service';
import { PostsModel } from '../models/posts.model';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent{

  postsList: PostsModel[] = [];
  errorMsg: string = '';

  constructor(private requestSrv: RequestsService) { }
  

  onGetPosts(){
   this.requestSrv.getPosts()
      .subscribe(
        (response: PostsModel[]) => {
          this.postsList = response;
         
        },
        (error) => {
          this.errorMsg = "There is no usres!";
        }
      )
  }
 
}
