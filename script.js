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
    let bookList = document.getElementById("book-list");

        for(i = 0; i < myLibrary.length; i++) {
            let book = document.createElement("ul");
            book.className = "book-item";
            let readButton = document.createElement("button");
            readButton.innerText = "Unread";
            book.appendChild(readButton);
            readButton.addEventListener("click", function() {
                readButton.innerText = "Read"
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
            let readStatus = document.createElement("li");
            title.innerText = myLibrary[i].title;
            author.innerText = myLibrary[i].author;
            pageCount.innerText = myLibrary[i].pages;
            readStatus.innerText = myLibrary[i].read;
            book.appendChild(title);
            book.appendChild(author);
            book.appendChild(pageCount);
            book.appendChild(readStatus);
            bookList.appendChild(book);

        }
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

displayLibrary();
