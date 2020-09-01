import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email: '';
password: '';

  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
  }

  login() {
   const user = {
      email: this.email,
      password: this.password
    }
    return this.service.userLogin(user).subscribe((res) => {
      localStorage.setItem('authtoken', res['token']);
    })
  }

}

