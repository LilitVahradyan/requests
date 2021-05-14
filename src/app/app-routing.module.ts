import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostCardComponent } from  './post-card/post-card.component';
import { UserCardComponent } from './user-card/user-card.component';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { PostsComponent } from './posts/posts.component';
import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent, 
      children: [{ path: ':id', component: UserCardComponent }] 
    },
    { path: 'posts', component: PostsComponent,
      children: [{ path: ':id/:userId', component: PostCardComponent }]
    },
    { path: 'todos', component: TodosComponent, 
      children: [{ path: ':id/:userId',component: TodoCardComponent }]
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{ }