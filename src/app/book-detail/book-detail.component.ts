import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Book } from '../inventory.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  providers: [BookService]
})


export class BookDetailComponent implements OnInit {
  bookId: number;
  bookToDisplay: Book;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.bookId = parseInt(urlParameters['id']);
    });
    this.bookToDisplay = this.bookService.getBookById(this.bookId);
  }
}
