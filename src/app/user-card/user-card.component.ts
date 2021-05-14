import { ActivatedRoute, Params, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { UsersService } from '../services/users.service';
import { UsersModel } from '../models/users.model';
import { getUrlScheme } from '@angular/compiler';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})

export class UserCardComponent implements OnInit {

  user: UsersModel;
  id: number;
  username: string;

  constructor(
    private route: ActivatedRoute,
    private usersSrv: UsersService
  ) { }

  ngOnInit() {
     
    //this.id = +this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        
        this.usersSrv.getUserById(this.id).subscribe(
           user => this.user = user,
        );
      }
    )

    this.route.queryParams.subscribe(
      (params: Params) => {
        this.username = params['username']
      }
    )
  }
  

}
