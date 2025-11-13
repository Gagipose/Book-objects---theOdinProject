
// construktor for making book objects
// .info() returns title, author, pages, read-status


function Book(title, author, pages, readStatus = false) {
    if (!new.target) {
        throw Error("gotta use the -new- keyword first");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

    this.info = function() {
        const readText = this.readStatus === true ? "Yep, already read" : "Nope, not read yet";

        return `
        Title: ${title}
        Author: ${author}
        Pages: ${pages}
        Read?: ${readText}
        `
    }
}


const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const spooderManBook = new Book("Spoderman", "Hawkins Jr", 365, true);

console.log(theHobbit.info(), spooderManBook.info());
console.log(Object.getPrototypeOf(theHobbit) === Object.getPrototypeOf(spooderManBook));