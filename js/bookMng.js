

function getAllAuthors() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/authors/",
        success: function (authors) {
            console.log(authors);
            let authorList = "";
            for (let i = 0; i < authors.length; i++) {
                authorList += `
                <tr>
                    <td>${authors[i].id}</td>
                    <td>${authors[i].authorName}</td>
                    <td><button onclick="deleteAuthorById(${authors[i].id})">DEL</button></td>
                </tr>
                `
            }
            document.getElementById("authorList").innerHTML = authorList;
        }
    })
}
getAllAuthors();

function addAuthor() {
    let authorName = document.getElementById("authorName").value;
    let newAuthor = {
        "authorName" : authorName
    }
    $.ajax({
        headers : {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        data : JSON.stringify(newAuthor),
        type : "POST",
        url : " http://localhost:8080/authors/create",
        success : function() {
            alert("Author created");
            getAllAuthors();
        }
    })
    event.preventDefault();
}

function deleteAuthorById(id) {
    $.ajax({
        type: "DELETE",
        url: "http://localhost:8080/authors/delete/" + id,
        success : function() {
            alert("Deleted");
            getAllAuthors();
        }
    })
}

function getBookList() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/books/",
        success: function (books,author) {
            console.log(books);
            console.log(author)
            let bookList = "";
            for (let i = 0; i < books.length; i++) {
                bookList += `
                <tr>
                    <td>${books[i].id}</td>
                    <td>${books[i].bookId}</td>
                    <td>${books[i].bookName}</td>
                    <td>${books[i].author.authorName}</td>
                    <td>${books[i].price}</td>
                </tr>
                `
            }
            document.getElementById("bookList").innerHTML = bookList;
        }
    })
}

getBookList();

function addBook() {
    let bookId = document.getElementById("bookId").value;
    let bookName = document.getElementById("bookName").value;
    let authorId = document.getElementById("authorId").value;
    let price = document.getElementById("price").value;

    let newBook = {
        "bookId" : bookId,
        "bookName" : bookName,
        "author" : {
            "id": authorId
        },
        "price": price
    }
    $.ajax({
        headers : {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        data : JSON.stringify(newBook),
        type : "POST",
        url : "http://localhost:8080/books/create",
        success : function() {
            alert("Book created");
            getBookList();
        }
    })
    event.preventDefault();
}

function getAuthorOption() {
    $.ajax({
        headers : {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        type : "GET",
        url : "http://localhost:8080/authors/",
        success : function(data) {
            let authorId = "";
            for (let i = 0; i < data.length; i++) {
                authorId += "<option value='" + data[i].id + "'>" + data[i].authorName + "</option>";
            }
            document.getElementById("authorId").innerHTML = authorId;
        }
    })
}
getAuthorOption();