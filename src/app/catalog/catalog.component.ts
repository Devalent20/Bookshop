import { Component } from '@angular/core';
import { IBook } from './book.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  books!: IBook[];
  filter: string = '';

  constructor() {
    this.books = [
      {
        id: 2,
        title: 'Alas de Sangre',
        description:
          'Violet Sorrengail creía que se uniría al Cuadrante de los Escribas para vivir una vida tranquila, sin embargo, por órdenes de su madre, debe unirse a los miles de candidatos que, en el Colegio de Guerra de Basgiath, luchan por formar parte de la élite de Navarre: el Cuadrante de los Jinetes de dragones.',
        gender: 'Fantasy',
        author: 'Rebecca Yarros',
        imgName: 'Alas-de-sangre.png',
        price: 20.0,
        year: 2023,
      },
      {
        id: 3,
        title: 'Alas de Hierro',
        description:
          'Todos esperaban que Violet Sorrengail muriera durante su primer año en el Colegio de Guerra Basgiath, incluso ella misma. Pero la Trilla fue tan solo la primera de una serie de pruebas imposibles destinadas a deshacerse de los indignos y los desafortunados.',
        gender: 'Fantasy',
        author: 'Rebecca Yarros',
        imgName: 'Alas-de-hierro.png',
        price: 23.4,
        year: 2024,
      },
      {
        id: 4,
        title: 'Colección de Sherlock Holmes',
        description:
          'Estuche exclusivo con los tres primeros títulos de Arthur Conan Doyle. El estuche contiene los libros Estudio en Escarlata, El signo de los cuatro y Las aventuras de Sherlock Holmes.',
        gender: 'Policial',
        author: 'Arthur Conan Doyle',
        imgName: 'Sherlock-holmes.png',
        price: 17.0,
        year: 2022,
      },
      {
        id: 5,
        title: 'El Silmarillion',
        description:
          'El Silmarillion cuenta la historia de la Primera Edad, el antiguo drama del que hablan los personajes de El Señor de los Anillos, y en cuyos acontecimientos algunos de ellos tomaron parte, como Elrond y Galadriel… Una obra de auténtica imaginación, una visión inspirada, legendaria o mítica, del interminable conflicto entre el deseo de poder y la capacidad de crear.',
        gender: 'Fantasy',
        author: 'J. R. R. Tolkien',
        imgName: 'Silmarillion.png',
        price: 16.8,
        year: 1996,
      },
      {
        id: 2,
        title: 'Alas de Sangre',
        description:
          'Violet Sorrengail creía que se uniría al Cuadrante de los Escribas para vivir una vida tranquila, sin embargo, por órdenes de su madre, debe unirse a los miles de candidatos que, en el Colegio de Guerra de Basgiath, luchan por formar parte de la élite de Navarre: el Cuadrante de los Jinetes de dragones.',
        gender: 'Fantasy',
        author: 'Rebecca Yarros',
        imgName: 'Alas-de-sangre.png',
        price: 20.0,
        year: 2023,
      },
      {
        id: 3,
        title: 'Alas de Hierro',
        description:
          'Todos esperaban que Violet Sorrengail muriera durante su primer año en el Colegio de Guerra Basgiath, incluso ella misma. Pero la Trilla fue tan solo la primera de una serie de pruebas imposibles destinadas a deshacerse de los indignos y los desafortunados.',
        gender: 'Fantasy',
        author: 'Rebecca Yarros',
        imgName: 'Alas-de-hierro.png',
        price: 23.4,
        year: 2024,
      },
      {
        id: 4,
        title: 'Colección de Sherlock Holmes',
        description:
          'Estuche exclusivo con los tres primeros títulos de Arthur Conan Doyle. El estuche contiene los libros Estudio en Escarlata, El signo de los cuatro y Las aventuras de Sherlock Holmes.',
        gender: 'Policial',
        author: 'Arthur Conan Doyle',
        imgName: 'Sherlock-holmes.png',
        price: 17.0,
        year: 2022,
      },
      {
        id: 5,
        title: 'El Silmarillion',
        description:
          'El Silmarillion cuenta la historia de la Primera Edad, el antiguo drama del que hablan los personajes de El Señor de los Anillos, y en cuyos acontecimientos algunos de ellos tomaron parte, como Elrond y Galadriel… Una obra de auténtica imaginación, una visión inspirada, legendaria o mítica, del interminable conflicto entre el deseo de poder y la capacidad de crear.',
        gender: 'Fantasy',
        author: 'J. R. R. Tolkien',
        imgName: 'Silmarillion.png',
        price: 16.8,
        year: 1996,
      },
    ];
  }

  getAllBooks(): IBook[] {
    return this.filter === ''
      ? this.books
      : this.books.filter((book) => book.gender == this.filter);
  }

  onFilterGenderChange(event: Event): void {
    const selectElement =
      event.target as HTMLSelectElement; /* Take the element from the selector */
    this.filter = selectElement.value; /* Filter the value selected */
  }
}
