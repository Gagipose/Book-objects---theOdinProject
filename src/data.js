
// so website can remember library
export let myLibrary = [];


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
export function removeBookFromLibrary(id) {
    //find and remove
    const selectByID = myLibrary.findIndex(book => book.id === id);

    if (selectByID === -1) return; //exit if findIndex did not find anything
    myLibrary.splice(selectByID, 1);
}



// ---- FOR TESTING: ----
