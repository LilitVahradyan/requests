import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PostsModel } from '../models/posts.model';

@Injectable({
    providedIn: 'root'
})

export class PostsService{

    url = 'https://jsonplaceholder.typicode.com/posts';

    constructor(
        private http: HttpClient
    ){ }

    getPosts(){
       return  this.http.get<PostsModel[]>(this.url)
        
    }

    deletePost(id: number){
        const endpoint = `${this.url}/${id}`;
        return this.http.delete(endpoint);
    }

}