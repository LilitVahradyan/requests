import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UsersModel } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(
    private http: HttpClient
  ) { }

  getUsers(){
    return this.http.get<UsersModel[]>(this.url)
  }

  getUserById(id: number) {
      return this.getUsers()
             .pipe(
                 map((users: UsersModel[]) => users.find(user => user.id === id))
              );
  }

  deleteUser(id: number){
    const endpoint = `${this.url}/${id}`;
    return this.http.delete(endpoint);
  }
  
}
