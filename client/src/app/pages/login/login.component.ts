import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email: '';
password: '';
error: Boolean;
  
  constructor(
    private service: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    if (this.email == null || this.password == null) {
      this.error = true;
    } else {
      const user = {
         email: this.email,
         password: this.password
       }
      return this.service.userLogin(user).subscribe((res) => {
         this.error = false;
        //  console.table({ res: res })
        localStorage.setItem('authtoken', res['token']);
        this.router.navigate(['/user/profile']);
      })
    }
  }
}

