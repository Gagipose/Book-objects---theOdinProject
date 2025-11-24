// ---- IMPORTS ----

import * as library from "./data.js";
import { displayLibrary } from "./ui.js";



// ---- DOM SETUP ----
const bookForm = document.getElementById("book-form");
const libraryList = document.getElementById("library-list");


// ---- FUNCTIONS ----
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

// remove book on klick
function removeBtn(id) {
    library.removeBookFromLibrary(id);
    
    displayLibrary(library.myLibrary);
}


// ---- EVENT LISTENERS ----

// make book form submit
bookForm.addEventListener("submit", event => { // on sumbit:
    event.preventDefault(); // disable default behavior
    addBookFromInput(event); // take input and add to Array
});

// make remove Btn remove --- note: triggers when whole list is clicked
// use bubbeling to see what element go clicked then use .closest
libraryList.addEventListener("click", event => {
    console.log(event.target.matches("#remove-book-btn"));
    if (!event.target.matches("#remove-book-btn")) return;
    
    // if target is a button, grab id of closest parent li
    const parentLi = event.target.closest("li");
    const bookID = parentLi.id;
    
    removeBtn(bookID);
    
    console.log("dang you hit it yay!");
    
});


// ---- CALLING FUNCTIONS ----
//bugfixers
library.addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310);
library.addBookToLibrary("1984", "George Orwell", 328);
library.addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 277);
library.addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 336);

displayLibrary(library.myLibrary);