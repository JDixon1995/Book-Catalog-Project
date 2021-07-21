//Book Catalog

let myLibrary = [
    {
        "title": "Lord Of The Rings",
        "author": "Tolkien, J.R.R.",
        "pages": 456,
        "read": false 
    },
    {
        "title": "Human Accomplishment",
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
    },
    {
        "title": "Rise and Fall of the Roman Empire",
        "author": "Gibbons",
        "pages": 763,
        "read": false
    },
    {
        "title": "Resident Evil: The Umbrella Conspiracy",
        "author": "S.D. Perry",
        "pages": 262,
        "read": true
    }
];

class Book {
    constructor(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    }
}

function appendBookLibrary() {

    let newBook = new Book(
        title = document.getElementById("bookName").value,
        author = document.getElementById("authorName").value,
        pages = document.getElementById("bookPages").value,
        read = false
    );

    myLibrary = [myLibrary + newBook];
    console.log(newBook);
    displayLibrary();
}


function displayLibrary() {
    let bookList = document.getElementById("book-list");

        for(i = 0; i < myLibrary.length; i++) {
            let book = document.createElement("ul");
            book.className = "book-item";
            let readButton = document.createElement("button");
            readButton.innerText = "Unread";
            book.appendChild(readButton);
            readButton.addEventListener("click", function() {
                if(this.innerText = "Unread") {
                readButton.innerText = "Read";
                }
            })

            let deleteButton = document.createElement("button");
            deleteButton.innerText = "X";
            deleteButton.addEventListener("click", function() {
                book.closest("ul").remove();
            })
            book.appendChild(deleteButton);
            let title = document.createElement("li");
            let author = document.createElement("li");
            let pageCount = document.createElement("li");
            title.innerText = myLibrary[i].title;
            author.innerText = myLibrary[i].author;
            pageCount.innerText = myLibrary[i].pages;
            book.appendChild(title);
            book.appendChild(author);
            book.appendChild(pageCount);
            bookList.appendChild(book);

        }
}

displayLibrary();
