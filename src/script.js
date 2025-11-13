import * as library from "./library.js";


library.addBookToLibrary("testerino", "bananski Jr", 70);

const testFilter = library.myLibrary.filter(book => book.title === "testerino")

console.log(testFilter);