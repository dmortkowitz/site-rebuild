import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Book } from '../inventory.model';
import { BookService } from '../book.service';
import { FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  providers: [BookService]
})


export class BookDetailComponent implements OnInit {
  bookId: string;
  bookToDisplay;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.bookId = urlParameters['id'];
      console.log(this.bookId)
    });
    this.bookToDisplay = this.bookService.getBookById(this.bookId);
  }
}
