
const libraryEl = document.getElementById("library-list");

// turns array into list on website
function displayLibrary(libraryArray) {
    libraryEl.innerHTML = libraryArray
        .map(book => `
            <li id=${book.id}>
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read Status: ${book.readStatus}</p>
            <button id="remove-book-btn">remove</button>
            <button id="changeReadStatus">Change Read Status</button>
            </li>
            `)
        .join("");
};

export { displayLibrary };