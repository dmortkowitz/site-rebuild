import { Injectable } from '@angular/core';
import { Book } from './inventory.model';
import { BOOKS } from './mock-books';

@Injectable()
export class BookService {

  constructor() { }

  getBooks() {
   return BOOKS;
 }

}
