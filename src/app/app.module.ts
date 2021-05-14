import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserCardComponent } from './user-card/user-card.component';
import { HeaderComponent } from './header/header.component';
import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { PostCardComponent } from './post-card/post-card.component';
import { TodoCardComponent } from './todo-card/todo-card.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    HeaderComponent,
    TodosComponent,
    PageNotFoundComponent,
    HomeComponent,
    UserCardComponent,
    PostCardComponent,
    TodoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
