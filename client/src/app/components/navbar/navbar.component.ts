import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user = localStorage.getItem('authtoken')
  userLoggedIn: Boolean = false
  constructor() { }

  ngOnInit(): void {
    this.checkUserLoggedIn()
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
}
