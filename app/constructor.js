export default function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();

  this.toggleReadState = function () {
    if (this.read === false) {
      this.read = true;
    } else if (this.read === true) {
      this.read = false;
    }
  };
}
