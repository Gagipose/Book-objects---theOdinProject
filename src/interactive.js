
const libraryEl = document.getElementById("library-list");

function displayLibrary(libraryArray) {
    libraryEl.innerHTML = libraryArray
        .map(book => `
            <li>
            <h3 class=${book.id} >${book.title}</h3>
            </li>
            `)
        .join("");
};


export { displayLibrary };