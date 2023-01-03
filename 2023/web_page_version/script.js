var books = [{
   "title": "Phasma",
    "author": "Delilah S. Dawson",
    "cover": "https://m.media-amazon.com/images/I/81xWEb3ubSL.jpg",
    "pages": 480,
  "main_genre": "Fiction",
  "sub_genre": "Science Fiction"
}
]




const mainContent = document.getElementById("book-content");

showBooks(books);

function showBooks(books) {
  mainContent.innerHTML = "";
  books.forEach((book) => {
    const bookTitle = book.title;
    const bookCover = book.cover;
    //const bookVote = book.vote_average;
    const bookElm = document.createElement("div");
    bookElm.classList.add(
      "col-xs-12",
      "col-sm-6",
      "col-md-4",
      "col-lg-4",
      "p-0"
    );
    bookElm.innerHTML = `
    <div class="book-card">
              <img
                class="img-fluid book-img"
                src="${bookCover}" />
              <div
                class="book-description p-3 d-flex justify-content-between align-items-center"
              >
                <h3 class="book-title">${bookTitle}</h3>
                
              </div>
            </div>
    `;
    mainContent.appendChild(bookElm);
  });
}