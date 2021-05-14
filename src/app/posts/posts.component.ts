import { Component, OnInit } from '@angular/core';

import { PostsService } from '../services/posts.service';
import { PostsModel } from '../models/posts.model';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{

  postsList: PostsModel[];
  errorMsg: string = '';


  constructor(
    private requestSrv: PostsService
   
  ) { }
  
  ngOnInit(): void{
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
  
  onDeletePost(index: number){
    this.requestSrv.deletePost(index)
      .subscribe(
        (response) => {
          this.postsList.splice(index, 1)
        },
        (error) => {
          alert('Something went wrong. Please try agin.')
        }
      )
  }
 
}
