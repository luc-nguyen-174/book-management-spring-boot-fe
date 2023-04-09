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
                </tr>
                `
            }
            document.getElementById("authorList").innerHTML = authorList;
        }
    })
}
getAllAuthors();

