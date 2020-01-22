// Constructor
function Book(title, author, year) {
    console.log('Book Initialized..');
    this.title = title;
    this.author = author;
    this.year = year;
}
// Instatiate an Object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');

console.log(book1.title);
