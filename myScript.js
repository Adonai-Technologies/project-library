function Book(title, author) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.getDetails = function () {
        return this.title + " written by " + this.author;
    }
}

var book = new Book("Fiction", "Peter King");

console.log(book.getDetails());        // => Fiction written by Peter King




let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}
