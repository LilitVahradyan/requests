import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  id: number;
  userId: number;

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

  }

}
