import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent implements OnInit {

  id: number;
  userId: number;
  completed: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.userId = +params['userId']
      }
    )

    this.completed = this.route.snapshot.queryParams['completed'];
  }

}
