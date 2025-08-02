import Book from "./constructor.js";

const booksContainer = document.querySelector("#books-container");
const myLibrary = [];

addBookToLibrary("harry potter", "jk r", 300, false);

function addBookToLibrary(name, author, pages, read) {
  const book = new Book(name, author, pages, read);
  myLibrary.push(book);

  updateUI();
}

function updateUI() {
  for (let i = 0; i < myLibrary.length; i++) {
    const newBookEl = document.createElement("div");
    newBookEl.textContent = `${myLibrary[i].name}`;

    booksContainer.appendChild(newBookEl);
  }
}

function deleteBookFromLibrary() {}
