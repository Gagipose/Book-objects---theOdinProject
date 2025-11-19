import * as library from "./library.js";
import { displayLibrary } from "./interactive.js";


library.addBookToLibrary("testerino", "bananski Jr", 70);
library.addBookToLibrary("testerino1", "bananski Jr", 71);



console.log(library.myLibrary);
console.log(library.myLibrary[0].id);


displayLibrary(library.myLibrary);