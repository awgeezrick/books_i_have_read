var books = [{
   "title": "A New Dawn",
    "author": "John Jackson Miller",
    "cover": "https://m.media-amazon.com/images/I/71a8lzJpiLL._SL1200_.jpg",
    "pages": 416,
  "main_genre": "Fiction",
  "sub_genre": "Science Fiction"
},
{
   "title": "Armada",
    "author": "Ernest Cline",
    "cover": "https://m.media-amazon.com/images/I/61fuQ7f70UL._SL1200_.jpg",
    "pages": 368,
  "main_genre": "Fiction",
  "sub_genre": "Science Fiction"
},
{
   "title": "Vector Prime",
    "author": "R.A. Salvatore",
    "cover": "https://m.media-amazon.com/images/I/71xqf9pwygL._SL1200_.jpg",
    "pages": 416,
  "main_genre": "Fiction",
  "sub_genre": "Science Fiction"
},
{
   "title": "Onslaught: Dark Tide, Book 1",
    "author": "Michael A. Stackpole",
    "cover": "https://m.media-amazon.com/images/I/811LMhhIYeL._SL1500_.jpg",
    "pages": 304,
  "main_genre": "Fiction",
  "sub_genre": "Science Fiction"
},
{
   "title": "Ruin: Dark Tide, Book 2",
    "author": "Michael A. Stackpole",
    "cover": "https://m.media-amazon.com/images/I/61rBltnAQ5L._SL1200_.jpg",
    "pages": 304,
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