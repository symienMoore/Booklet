import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  addBook(book): any {
    return this.http.post('http://localhost:3000/books/add-book', book)
  }

  getAllBooks() {
    return this.http.get('http://localhost:3000/books/all-books')
  }

  getBookById(id) {
    return this.http.get(`http://localhost:3000/books/${id}`)
  }
}
