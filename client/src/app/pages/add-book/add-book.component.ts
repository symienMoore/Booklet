import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/Book.model'
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book = new Book()

  constructor(private service: BookService) { }

  ngOnInit(): void {
  }

  addBook() {
    this.service.addBook(this.book).subscribe((res) => {
      console.table({res: res})
    })
  }

}
