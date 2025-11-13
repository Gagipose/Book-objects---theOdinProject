// start with pseudo code

// user gives title, author and pages
// Fucntion makes book object named with unique id + added to array

// so website can remember library
export const myLibrary = [];


// input: title, author, pages -> output: book object (with random id)
export function Book(title, author, pages) {
    if (!new.target) {
        throw Error("gotta use the -new- keyword first");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();

    
};

// makes adding unique books to array easier
export function addBookToLibrary(title, author, pages) { 
    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
};

// **change so it uses unique id later**
export function removeBookFromLibrary(title) {
    //find and remove
    const selectByTitle = myLibrary.findIndex(book => book.title === title);

    if (selectByTitle === -1) return; //exits if findIndex did not find anything
    myLibrary.splice(selectByTitle, 1);
}



// ---- FOR TESTING: ----
// addBookToLibrary("cool title", "kalle anka", 170);
// addBookToLibrary("boomzi", "honung Jr", 70);
// addBookToLibrary("321", "honung Jr", 70);


// const testFilter = myLibrary.filter(book => book.pages === 70);
// console.log(testFilter);

// removeBookFromLibrary("boomzi")

// console.log(myLibrary);

// export const mango = 123