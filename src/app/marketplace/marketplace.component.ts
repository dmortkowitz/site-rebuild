import { Component } from '@angular/core';
import { Book } from '../inventory.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})


export class MarketplaceComponent {

  constructor(private router: Router){}

  books: Book[] = [];

 goToDetailPage(clickedBook: Book) {
    this.router.navigate(['books', clickedBook.id]);
  };
}
