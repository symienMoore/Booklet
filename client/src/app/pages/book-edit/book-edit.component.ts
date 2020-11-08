import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  title: string
  desc: string
  pub_date: Date
  rating: number
  author: string
  genre: string
  imagePath: string

  isLoading: Boolean = false

  book: any;
  constructor(
    private route: ActivatedRoute,
    private service: BookService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        let id = params.get('id');
        return this.service.getBookById(id);
      })
    ).subscribe((res) => {
      console.log(res)
      this.book = res
    })

  }

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
  // addBook() {
  //   this.isLoading = true
  //   const date = new Date(this.pub_date).toUTCString()
  //   const rate = this.rating.toString()
  //   const book = new FormData()
  //   book.append("title", this.title);
  //   book.append("desc", this.desc);
  //   book.append("pub_date", date);
  //   book.append("rating", rate);
  //   book.append("author", this.author);
  //   book.append("genre", this.genre);
  //   book.append("image", this.imagePath, this.title)
  //   this.service.editBook(book).subscribe((res) => {
  //     console.table({res: res})
  //   })
  //   this.isLoading = false
  // }
}
