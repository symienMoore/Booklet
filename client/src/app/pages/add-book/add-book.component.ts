import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/Book.model';
import { FormArray, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book = new Book()
  bookForm: FormGroup

  title: string
  desc: string
  pub_date: Date
  rating: number
  author: string
  genre: string
  imagePath: string

  constructor(
    private service: BookService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // this.bookForm = this.fb.group({
    //   title: '',
    //   desc: '',
    //   pub_date: '',
    //   rating: '',
    //   author: '',
    //   genre: '',
    //   imagePath: ''
      
    //  })
  }

  //TODO: remeber to append the data to formdata

  createTitle(event) {
    this.title = event.target.value;
  }

  createDesc(event) {
    this.desc = event.target.value;
  }

  createPub(event) {
    this.pub_date = event.target.value;
  }

  createRating(event) {
    this.rating = event.target.value;
  }

  createAuthor(event) {
    this.author = event.target.value;
  }

  createGenre(event) {
    this.genre = event.target.value;
  }

  createImagePath(event) {
    this.imagePath = event.target.files[0];
  }

  addBook() {
    const date = new Date(this.pub_date).toUTCString()
    const rate = this.rating.toString()
    const book = new FormData()
    book.append("title", this.title);
    book.append("desc", this.desc);
    book.append("pub_date", date);
    book.append("rating", rate);
    book.append("author", this.author);
    book.append("genre", this.genre);
    book.append("image", this.imagePath, this.title)

    this.service.addBook(book).subscribe((res) => {
      console.table({res: res})
    })
  }

}
