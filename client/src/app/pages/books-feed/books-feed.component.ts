import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-books-feed',
  templateUrl: './books-feed.component.html',
  styleUrls: ['./books-feed.component.css']
})
export class BooksFeedComponent implements OnInit {

  books: any = [];

  constructor(
    private service: BookService,
  ) { }

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks() {
    this.service.getAllBooks().subscribe((book) => {
      this.books = book
      console.log(this.books)
    })
  }

}
