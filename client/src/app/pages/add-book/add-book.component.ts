import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private service: BookService) { }

  ngOnInit(): void {
  }

  addBook(book) {
    this.service.addBook(book).subscribe((res) => {
      console.table({res: res})
    })
  }

}
