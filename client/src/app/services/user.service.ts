import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
authtoken: any;
API_URL = "http://localhost:3000/"

  constructor(
    private http: HttpClient,
    ) { }

  addUser(user) {
    return this.http.post(`${this.API_URL}users/register`, user);
  }

  userLogin(user) {
    return this.http.post(`${this.API_URL}users/login`, user)
  }

  getProfile(): any {
    return this.http.get(`${this.API_URL}users/profile`);
  }

  loadToken() {
    return localStorage.getItem('authtoken');
  }

  getAllUser() {
    return this.http.get(`${this.API_URL}users/all-users`);
  }
}
