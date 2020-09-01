import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from '../app/pages/add-book/add-book.component';
import { HomeComponent } from '../app/pages/home/home.component';
import { LoginComponent } from '../app/pages/login/login.component';
import { SignupComponent } from '../app/pages/signup/signup.component';
import { AboutComponent } from "../app/pages/about/about.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: "add-book", component: AddBookComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
