import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UsersModel } from '../models/users.model';
import { PostsModel } from '../models/posts.model';


@Injectable({
  providedIn: 'root'
})

export class RequestsService {

  constructor(private http: HttpClient) { }

  getUsers(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<UsersModel[]>(url)
  }

  getPosts(){
    const url = 'https://jsonplaceholder.typicode.com/posts'
    return this.http.get<PostsModel[]>(url)
  }

  deleteUser(user: UsersModel){
    const endpoint = 'https://jsonplaceholder.typicode.com/users';
    const url =  `${endpoint}/${user}`;
    return this.http.delete(url);

  }
}
