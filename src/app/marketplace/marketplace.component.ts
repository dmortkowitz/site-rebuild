import { FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { Book } from '../inventory.model';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [BookService]
})

export class MarketplaceComponent implements OnInit {
  books: FirebaseListObservable<any[]>;

  constructor(private router: Router, private bookService: BookService) {}



  ngOnInit(){
    this.books = this.bookService.getBooks();
  }

  goToDetailPage(clickedBook: Book) {
    this.router.navigate(['books', clickedBook.id]);
  };
}
