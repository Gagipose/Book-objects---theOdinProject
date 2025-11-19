import * as library from "./data.js";
import { displayLibrary } from "./ui.js";


library.addBookToLibrary("testerino", "bananski Jr", 70);
library.addBookToLibrary("testerino1", "bananski Jr", 71);


displayLibrary(library.myLibrary);

// make book form submit
const submitBook = document.getElementById("book-form");
submitBook.addEventListener("submit", event => { // on sumbit:
    event.preventDefault(); // disable default behavior
    addBookFromInput(event); // take input and add to Array
});

// make user input add to array
function addBookFromInput(event) {
    const form = event.target;
    const title = form.elements.title.value;
    const author = form.elements.author.value;
    const pages = form.elements.pages.value;

    library.addBookToLibrary(title, author, pages)

    displayLibrary(library.myLibrary); // display updated Array
    form.reset(); // empty out form afterwards

    // ---- bugfix ----
    console.log(title);
};


// make remove Btn remove
const bookBtn = document.getElementById("remove-book-btn");
bookBtn.addEventListener("click", event => {

})

// remove book on klick
function removeBtn() {

}