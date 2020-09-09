import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user;
  books: any = []
  booksAvailable: Boolean = true;

  constructor(
    private service: UserService,
    private bookSvc: BookService
  ) { }
  
  ngOnInit() {
    this.getUserProfile();
   }
 
   getUserProfile() {
     this.service.getProfile().subscribe((res) => {
       if (res !== null || undefined) {
         this.user = res;
       } else {
         console.log(res.toString())
       } 
     })
   }
 
  getUserBooks() {
    
  }
}
