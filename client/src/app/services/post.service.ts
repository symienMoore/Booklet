import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  addBook(book) {
    return this.http.post('http://localhost:3000/books/add-book', book)
  }
}
