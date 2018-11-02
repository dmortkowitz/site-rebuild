import { Injectable } from '@angular/core';
import { Book } from './inventory.model';
import { BOOKS } from './mock-books';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class InventoryService {
  books: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
 }

}
