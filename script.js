//Book Catalog

let myLibrary = [
    {
        "title": "Lord Of The Rings",
        "author": "Tolkien, J.R.R.",
        "pages": 456,
        "read": false 
    },
    {
        "title": "Human Accoplishment",
        "author": "Murray, Charles",
        "pages": 588,
        "read" : true,
    },
    {
        "title": "The Republic",
        "author": "Plato",
        "pages": 368,
        "read" : false
    },
    {
        "title": "Fundamentals of Logic",
        "author": "Sullivan, Daniel J.",
        "pages": 364,
        "read" : true,
    }
];

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

function addBookToLibrary() {
    
}

function displayLibrary() {
    for(i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i].title);
        console.log(myLibrary[i].author);
        console.log(myLibrary[i].pages);
        console.log(myLibrary[i].read);
    }
}

displayLibrary();
