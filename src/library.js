
// so website can remember library
export const myLibrary = [];


// new book template + unique id
function Book(title, author, pages) {
    if (!new.target) {
        throw Error("gotta use the -new- keyword first"); //forces dev to use "new" keyword
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();

    
};

// make new book + add to array for management
export function addBookToLibrary(title, author, pages) { 
    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
    console.log(`
        new book made and added:
        title: ${newBook.title}
        id: ${newBook.id}
        `)
};

// ****change so it uses unique id later****
export function removeBookFromLibrary(title) {
    //find and remove
    const selectByTitle = myLibrary.findIndex(book => book.title === title);

    if (selectByTitle === -1) return; //exit if findIndex did not find anything
    myLibrary.splice(selectByTitle, 1);
}



// ---- FOR TESTING: ----
