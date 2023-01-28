// BOOKS
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = state;
    this.type = type;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(state) {
    state < 0 
      ? this._state = 0
      : state > 100 
        ? this._state = 100 
        : this._state = state;
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = "magazine") {
    super(name, releaseDate, pagesCount, state, type);
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = "book") {
    super(name, releaseDate, pagesCount, state, type);
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = "novel") {
    super(author, name, releaseDate, pagesCount, state, type);
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = "fantastic") {
    super(author, name, releaseDate, pagesCount, state, type);
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = "detective") {
    super(author, name, releaseDate, pagesCount, state, type);
  }
}

// LIBRARY
class Library {
  constructor(name, books = []) {
    this.name = String(name);
    this.books = books;
  }

  addBook(book) {
    book?.state 
      ? book.state > 30 
        ? this.books.push(book) 
        : false
      : false
  }

  findBookBy(type, value) {
    const foundBook = this.books.find((book) => book[type] === value);
    return foundBook === undefined ? null : foundBook;
  }

  giveBookByName(bookName) {
    const foundBookIndex = this.books.findIndex((book) => book.name === bookName);
    return foundBookIndex === -1 ? null : this.books.splice(foundBookIndex, 1)[0];
  }
}

const library = new Library();
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));
library.addBook(new DetectiveBook("Автор", "Тест", 1919, 60));

console.log(library.findBookBy("releaseDate", 1919));

const issuedBook = library.giveBookByName("Тест");

console.log(library.books.length);
issuedBook.state = 0;
issuedBook.state = 20;
issuedBook.fix();
issuedBook.fix();

library.addBook(issuedBook);
console.log(library.books.length);
