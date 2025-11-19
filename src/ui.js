
const libraryEl = document.getElementById("library-list");

// turns array into list on website
function displayLibrary(libraryArray) {
    libraryEl.innerHTML = libraryArray
        .map(book => `
            <li id=${book.id}>
            <h3>${book.title}</h3>
            <p></p>
            <button class="remove-book-btn">remove</button>
            </li>
            `)
        .join("");
};

export { displayLibrary };