import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from 'rxjs/operators';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/Book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
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



}
