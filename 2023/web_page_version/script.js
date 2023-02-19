var books = [{
   "title": "Phasma",
    "author": "Delilah S. Dawson",
    "cover": "https://m.media-amazon.com/images/I/81xWEb3ubSL.jpg",
    "pages": 480,
  "main_genre": "Fiction",
  "sub_genre": "Science Fiction"
},
  {
   "title": "Star Wars: From a Certain Point of View",
    "author": "Cavan Scott, et al.",
    "cover": "https://m.media-amazon.com/images/I/81G9gUCpS9L.jpg",
    "pages": 496,
  "main_genre": "Fiction",
  "sub_genre": "Science Fiction"
},
 {
   "title": "The Cabin at the End of the World",
    "author": "Paul Tremblay",
    "cover": "https://m.media-amazon.com/images/I/91nA6q3LGOL.jpg",
    "pages": 336,
  "main_genre": "Fiction",
  "sub_genre": "Thriller"
},
 {
   "title": "Ambush at Corellia - Book 1 of the Corellian Triology",
    "author": "Roger MacBride Allen",
    "cover": "https://m.media-amazon.com/images/I/91u+MlV8NTL.jpg",
    "pages": 320,
  "main_genre": "Fiction",
  "sub_genre": "Science Fiction"
},
 {
   "title": "The Order of Time",
    "author": "Carlo Rovelli",
    "cover": "https://m.media-amazon.com/images/I/718F8skkmML.jpg",
    "pages": 256,
  "main_genre": "Non-Fiction",
  "sub_genre": "Physics"
},
 {
   "title": "Assault at Selonia - Book 2 of the Corellian Triology",
    "author": "Roger MacBride Allen",
    "cover": "https://m.media-amazon.com/images/I/91AWpA1dj4L.jpg",
    "pages": 320,
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