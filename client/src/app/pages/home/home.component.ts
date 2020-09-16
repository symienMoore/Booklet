import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedInUser
  user = localStorage.getItem('authtoken')
  userLoggedIn: Boolean = false
  isLoading: Boolean = false

  constructor(
    private service: UserService,
  ) { }

  ngOnInit(): void {
    this.checkUserLoggedIn()
    this.getUser()
  }

  checkUserLoggedIn() {
    if (this.user !== undefined || this.user !== null) {
      this.userLoggedIn = true
      console.log(this.userLoggedIn)
    } else {
      this.userLoggedIn = false
      console.log(this.userLoggedIn)
    }
  }

  getUser() {
    this.isLoading = true
    this.service.getProfile().subscribe(res => {
      this.loggedInUser = res
      this.isLoading = false
    })
  }
}
