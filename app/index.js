import Book from "./constructor.js";

const booksContainer = document.querySelector("#books-container");
const myLibrary = [];
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent page reload
  const author = document.getElementById("author").value;
  const bookName = document.getElementById("book-name").value;
  const pages = document.getElementById("pages").value;
  addBookToLibrary(bookName, author, pages, false);
});

function addBookToLibrary(name, author, pages, read) {
  const book = new Book(name, author, pages, read);
  myLibrary.push(book);

  updateUI();
}

function updateUI() {
  booksContainer.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    const newBookEl = document.createElement("div");
    newBookEl.textContent = `${myLibrary[i].name}`;

    booksContainer.appendChild(newBookEl);
  }
}

function deleteBookFromLibrary() {}
