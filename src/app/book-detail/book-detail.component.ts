import { Component, Input } from '@angular/core';
import { IBook } from '../catalog/book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent {
  @Input() book!: IBook;

  buy(title: string): void {
    alert(`Libro comprado: ${title}`);
  }
}
