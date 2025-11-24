
// so website can remember library
let myLibrary = [];


// new book template + unique id
function Book(title, author, pages) {
    if (!new.target) {
        throw Error("gotta use the -new- keyword first"); //forces dev to use "new" keyword
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
    this.readStatus = false;


    this.readToggle = function() {
        if (this.readStatus === false) {
            this.readStatus = true;
        } else {
            console.log("spaghetti")
            this.readStatus = false;
        };
    }
};

// make new book + add to array for management
function addBookToLibrary(title, author, pages) { 
    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
    console.log(`
        new book made and added:
        title: ${newBook.title}
        id: ${newBook.id}
        `)
};


function removeBookFromLibrary(id) {
    //find and remove
    const arrayIndex = myLibrary.findIndex(book => book.id === id);

    if (arrayIndex === -1) return; //exit if findIndex did not find anything
    myLibrary.splice(arrayIndex, 1);
}

function changeReadStatus(id) {
    const arrayIndex = myLibrary.findIndex(book => book.id === id);

    if (arrayIndex === -1) return;
    myLibrary[arrayIndex].readToggle()
    
}

export {
    removeBookFromLibrary, 
    addBookToLibrary,
    changeReadStatus, 
    myLibrary
};

// ---- FOR TESTING: ----
