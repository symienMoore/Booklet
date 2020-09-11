import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, FormControl, Form } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
userForm: FormGroup

  name: ''
  username: ''
  email: ''
  password: ''
  imagePath: ''
  error: Boolean

  constructor(
    private service: UserService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  createName(event) {
    this.name = event.target.value
  }

  createUsername(event) {
    this.username = event.target.value
  }

  createEmail(event) {
    this.email = event.target.value
  }

  createPassword(event) {
    this.password = event.target.value
  }

  createImage(event) {
    this.imagePath = event.target.files[0]
  }


  

  doUserSignUp() {
    if (this.name == null || this.username == null || this.email == null || this.password == null) {
      this.error = true
    } else {
      const user = new FormData()
      user.append("name", this.name)
      user.append("username", this.username)
      user.append("email", this.email)
      user.append("password", this.password)
      user.append("image", this.imagePath, this.name)
      console.log(user)
      this.service.addUser(user).subscribe((res) => {
        this.router.navigate(['/user/login'])
      })
      this.router.navigate(['/user/login'])
    }
  }
}

