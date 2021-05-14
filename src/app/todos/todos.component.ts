import { Component, OnInit } from '@angular/core';

import { ToDosServive } from '../services/todos.service';
import { TodosModel } from '../models/todos.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todosList: TodosModel[];
  errorMsg: string = '';

  constructor(
    private todosSrv: ToDosServive
  ) { }

  ngOnInit(){
    this.todosSrv.getToDos()
      .subscribe(
        (response) => {
          this.todosList = response
        },
        (error) => {
          this.errorMsg = "There is no todos!";
        }
      )
  }

}
