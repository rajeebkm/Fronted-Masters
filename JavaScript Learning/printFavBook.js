var printFavBook = [];
var bookNames = [];

//Add Favourite Books as per our conditions
function addFavBooks(bookName) {
  bookNames.push(bookName);

  if (!bookName.includes("Lost")) {
    printFavBook.push(bookName);
  }
}

//Print Favourite Books
function printFavouriteBooks() {
  console.log(`*Total Books: ${bookNames.length}\n`);
  for (let book of bookNames) {
    console.log(book);
  }
  console.log(`\n*Favourite Books: ${printFavBook.length}\n`);
  console.log(`*${printFavBook.length} Favourite Books are as follows:\n`);
  console.log(printFavBook);
}

addFavBooks("In Search of Lost Time by Marcel Proust");
addFavBooks("Ulysses by James Joyce");
addFavBooks("Don Quixote by Miguel de Cervantes");
addFavBooks("One Hundred Years of Solitude by Gabriel Garcia Marquez");
addFavBooks("Moby Dick by Herman Melville");
addFavBooks("War and Peace by Leo Tolstoy");
addFavBooks("Hamlet by William Shakespeare");

printFavouriteBooks();
