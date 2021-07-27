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

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    }


function appendBookLibrary() {
    let bookList = document.getElementById("book-list");
    let bookNameInput = document.getElementById("bookName");
    let authorInput = document.getElementById("authorName");
    let pageCountInput = document.getElementById("bookPages");
    let readOrUnread = document.getElementById("readOrUnread");
    let book = document.createElement("ul"); 
    let title = document.createElement("li");
    let author = document.createElement("li");
    let pageCount = document.createElement("li");
    let readButton = document.createElement("button");
    let deleteButton = document.createElement("button");

            book.className = "book-item";

            title.innerText = bookNameInput.value;
            author.innerText = authorInput.value;
            pageCount.innerText = pageCountInput.value;
            readButton.innerText = readOrUnread.value;
            deleteButton.innerText = "X";

            //Event Listeners
            
            readButton.addEventListener("click", function() {
                if(readButton.innerText == "Unread") {
                    readButton.innerText = "Read";
                }
            })


            deleteButton.addEventListener("click", function() {
                book.closest("ul").remove();
            })

            book.appendChild(deleteButton);
            book.appendChild(readButton);
            book.appendChild(title);
            book.appendChild(author);
            book.appendChild(pageCount);

            bookList.appendChild(book);




    let newBook = new Book(
        title = bookNameInput.value,
        author = authorInput.value,
        pages = pageCountInput.value,
        read = false
    );

    myLibrary[myLibrary.length] = newBook;
    bookNameInput.value = "";
    authorInput.value = "";
    pageCountInput.value = "";
    readOrUnread.value = "";
    
}


function displayLibrary() {
    let bookList = document.getElementById("book-list");

        for(let i = 0; i < myLibrary.length; i++) {

            let book = document.createElement("ul"); 
            let title = document.createElement("li");
            let author = document.createElement("li");
            let pageCount = document.createElement("li");
            let readButton = document.createElement("button");
            let deleteButton = document.createElement("button");

            book.className = "book-item";

            title.innerText = myLibrary[i].title;
            author.innerText = myLibrary[i].author;
            pageCount.innerText = myLibrary[i].pages;
            readButton.innerText = myLibrary[i].read;
            if(readButton.innerText == "true"){
                readButton.innerText = "Read";
            } else if(readButton.innerText == "false"){
                readButton.innerText = "Unread";
            }
            deleteButton.innerText = "X";

            //Event Listeners
            readButton.addEventListener("click", function() {
                if(readButton.innerText == "Unread") {
                readButton.innerText = "Read";
                }
                else if(readButton.innerText == "Read") {
                readButton.innerText = "Unread";
                }
            })

            deleteButton.addEventListener("click", function() {
                book.closest("ul").remove();
            })

            book.appendChild(deleteButton);
            book.appendChild(readButton);
            book.appendChild(title);
            book.appendChild(author);
            book.appendChild(pageCount);

            bookList.appendChild(book);

        }
}


displayLibrary();