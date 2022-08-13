class BookShelf {
  constructor() {
    this.favouriteBooks = [];
  }
  //Add Favourite Books as per our conditions
  addFavBooks(bookName) {
    if (!bookName.includes("Lost")) {
      this.favouriteBooks.push(bookName);
    }
  }

  //Print Favourite Books
  printFavouriteBooks() {
    console.log(`*Total Books: ${String(this.favouriteBooks.length)}\n`);
    for (let bookName of this.favouriteBooks) {
      console.log(bookName);
    }
    console.log(`\n*Favourite Books: ${String(this.favouriteBooks.length)}\n`);
    console.log(
      `*${this.favouriteBooks.length} Favourite Books are as follows:\n`
    );
    console.log(this.favouriteBooks);
  }
}

function loadBooks(theBookShelf) {
  fakeAJAX(BOOK_API, function onBooks(bookNames) {
    for (let bookName of bookNames) {
      theBookShelf.addFavBooks(bookName);
    }
    theBookShelf.printFavouriteBooks();
  });
}

var BOOK_API = "https://some.url/api";

var myBooks = new BookShelf();
loadBooks(myBooks);

function fakeAJAX(url, cb) {
  setTimeout(function fakeLoadingDelay() {
    cb([
      "In Search of Lost Time by Marcel Proust",
      "Ulysses by James Joyce",
      "Don Quixote by Miguel de Cervantes",
      "One Hundred Years of Solitude by Gabriel Garcia Marquez",
      "Moby Dick by Herman Melville",
      "War and Peace by Leo Tolstoy",
      "Hamlet by William Shakespeare",
    ]);
  }, 500);
}
