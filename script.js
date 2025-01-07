const myLibrary = [];

function Book(title, author, numPages, status) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.status = status;
};

function addBookToLibrary(title, author, numPages, status) {
    const book = new Book(title, author, numPages, status);
    myLibrary.push(book)
};

function displayBooks(library) {
    for(let book of library) {
        
    }
};

addBookToLibrary("deded", "dedede", "dedede", "dededed")
addBookToLibrary("frfrfr", "frfr", "frfrfr", "frfrfr")
