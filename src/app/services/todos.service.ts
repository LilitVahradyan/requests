import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TodosModel } from '../models/todos.model';

@Injectable({
    providedIn: 'root'
})

export class ToDosServive {

    url = 'https://jsonplaceholder.typicode.com/todos';

    constructor( 
        private http: HttpClient,
    ) { }

    getToDos(){
        return this.http.get<TodosModel[]>(this.url)
    }

}