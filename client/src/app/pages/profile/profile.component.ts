import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user;
  constructor(private service: UserService) { }
  
  ngOnInit() {
    this.getUserProfile();
   }
 
   getUserProfile() {
     this.service.getProfile().subscribe((res) => {
       if (res !== null || undefined) {
         console.log(res.username + ': this is your response')
         this.user = res;
       } else {
         console.log(res.toString())
       } 
     })
   }
 
  
}
