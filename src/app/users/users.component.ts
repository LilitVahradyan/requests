import { Component, OnInit } from '@angular/core';

import { UsersService } from '../services/users.service';
import { UsersModel } from '../models/users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit{
  
  usersList: UsersModel[];
  errorMsg: string = '';

  constructor(
    private usersSrv: UsersService
  ) { }

  ngOnInit(){
    this.usersSrv.getUsers()
      .subscribe(
        (response) => {
          this.usersList = response;
        },
        (error) => {
          this.errorMsg = "There is no users!";
        }
      )
  }
  
  onDeleteUser(index: number){
    this.usersSrv.deleteUser(index)
      .subscribe(
        (response) => {
          this.usersList.splice(index, 1);
        },
        (error) => {
         alert("Something went wronq. Please try again.");
          console.log(this.errorMsg);
        }
    )
  }
}
