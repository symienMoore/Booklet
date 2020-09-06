import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from '../app/pages/add-book/add-book.component';
import { HomeComponent } from '../app/pages/home/home.component';
import { LoginComponent } from '../app/pages/login/login.component';
import { SignupComponent } from '../app/pages/signup/signup.component';
import { AboutComponent } from "../app/pages/about/about.component";
import { BooksFeedComponent } from "../app/pages/books-feed/books-feed.component";
import { BookDetailComponent } from "../app/pages/book-detail/book-detail.component";
import { UserDetailsComponent } from './pages/user-details/user-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },

  // users route
  { path: 'user/login', component: LoginComponent },
  { path: 'user/signup', component: SignupComponent },
  { path: 'user/profile', component: UserDetailsComponent },

  // books route
  { path: "book/add-book", component: AddBookComponent },
  { path: 'books/feed', component: BooksFeedComponent },
  { path: 'book/:id', component: BookDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
