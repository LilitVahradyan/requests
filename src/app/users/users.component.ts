import { Component } from '@angular/core';


import { RequestsService } from '../services/requests.service';
import { UsersModel } from '../models/users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent{
  usersList: UsersModel[] = [];
  errorMsg: string = '';

  constructor(private usersSrv: RequestsService) { }

  onGetUsers(){
    this.usersSrv.getUsers()
      .subscribe(
        (response) => {
          this.usersList = response;

        },
        (error) => {
          this.errorMsg = "There is no usres!";
        }
      )
  }
 
  onDeleteUser(user: UsersModel){
    this.usersList = this.usersList.filter(u => u !== user);
    this.usersSrv.deleteUser(user)
      
  }

}
