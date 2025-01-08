const myLibrary = [
    { title: 'Book 1', author: 'Author 1', numPages: 300, status: 'Not read' },
    { title: 'Book 2', author: 'Author 2', numPages: 250, status: 'Read' },
    { title: 'Book 3', author: 'Author 3', numPages: 300, status: 'Read' },
    { title: 'Book 4', author: 'Author 4', numPages: 250, status: 'Read' },
    { title: 'Book 5', author: 'Author 5', numPages: 300, status: 'Not read' },
    { title: 'Book 6', author: 'Author 6', numPages: 250, status: 'Read' },
    { title: 'Book 7', author: 'Author 7', numPages: 300, status: 'Not read' },
    { title: 'Book 8', author: 'Author 8', numPages: 250, status: 'Read' }
];

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


const newBook = document.querySelector(".new-book");

newBook.addEventListener('click', function() {
    const dialog = document.createElement('dialog');

    dialog.innerHTML = `
    <form>
        <h3>Add a new book</h3>
        <label for="title">Title:</label>
        <input type="text" id="title" name="title">
        <br><br>
        <label for="author">Author:</label>
        <input type="text" id="author" name="author">
        <br><br>
        <label for="pages">Number of pages:</label>
        <input type="number" id="pages" name="pages">
        <br><br>
        <button type='button' id="toggleButton" class="toggle-off">Read</button>
        <menu>
        <button value="cancel" class='closeModal'>Cancel</button>
        <button value="submit" class='submit'>Submit</button>
        </menu>
    </form>`

    

    const library = document.querySelector('.library');
    library.appendChild(dialog);
    dialog.showModal();

    const toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', function () {
        if (toggleButton.classList.contains('toggle-off')) {
          toggleButton.classList.remove('toggle-off');
          toggleButton.classList.add('toggle-on');
          toggleButton.textContent = 'Not read'; 
        } else {
          toggleButton.classList.remove('toggle-on');
          toggleButton.classList.add('toggle-off');
          toggleButton.textContent = 'Read';
        }
      });

    
    const saveBook = document.querySelector('.submit');
    saveBook.addEventListener('click', (event) => {
        const bookTitle = document.querySelector('#title').value;
        const bookAuthor = document.querySelector('#author').value;
        const bookPages = document.querySelector('#pages').value;
        const bookRead = document.querySelector('#toggleButton').textContent;

        addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);
       
        console.log(myLibrary)
        event.preventDefault();
        dialog.close();
        dialog.remove();
        displayBooks(myLibrary)
    })

    const closeModal = document.querySelector('.closeModal');
    closeModal.addEventListener('click', () => {
        dialog.close();
        dialog.remove()
    })

});

function displayBooks(myLibrary) {

    const library = document.querySelector('.library');
    library.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <p >${book.title}</p>
            <br><br>
            <p>${book.author}</p>
            <br><br>
            <p>${book.numPages}</p>
            <br><br>
            <button type='button' class='delete-button'>Delete</button>
            <button type='button' data-index="${index}" class="status-button">${book.status}</button>
            
        `
        
        library.appendChild(card);

        const readButton = card.querySelector('.status-button');
        readButton.addEventListener('click', () => {
            if (myLibrary[readButton.dataset.index].status === 'Not read') {
                myLibrary[readButton.dataset.index].status = 'Read'
            } else {
                myLibrary[readButton.dataset.index].status = 'Not read';
            }

            readButton.textContent = myLibrary[readButton.dataset.index].status;
        });

        const deleteButton = card.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => {
            card.remove();
            myLibrary.splice(index, 1);
            console.log(myLibrary);
            displayBooks(myLibrary)
        });
    })
};

displayBooks(myLibrary)



