import * as library from "./library.js";


library.addBookToLibrary("testerino", "bananski Jr", 70);
library.addBookToLibrary("testerino1", "bananski Jr", 71);

library.removeBookFromLibrary("testerino");

console.log(library.myLibrary);
console.log(library.myLibrary[0].id);