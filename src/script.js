// start with pseudo code

// user gives title, author and pages
// Fucntion makes book object named with unique id + added to array



const myLibrary = [];

// input: title, author, pages -> output: book object (with random id)
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();

    
};

// makes adding unique books to array easier
function addBookToLibrary(title, author, pages) {
    
    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
    
};

// **change so it uses unique id later**
function removeBookFromLibrary(title) {
    const selectByTitle = myLibrary.findIndex(book => book.title === title)
    myLibrary.splice(selectByTitle, 1);
}

addBookToLibrary("cool title", "kalle anka", 170);
addBookToLibrary("boomzi", "honung Jr", 70);
addBookToLibrary("321", "honung Jr", 70);


// const testFilter = myLibrary.filter(book => book.pages === 70);
// console.log(testFilter);

removeBookFromLibrary("boomzi")

console.log(myLibrary);