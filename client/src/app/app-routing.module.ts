import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from '../app/pages/add-book/add-book.component';
import { HomeComponent } from '../app/pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: "add-book", component: AddBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
