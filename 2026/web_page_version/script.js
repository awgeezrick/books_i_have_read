var books = [{
  "title": "The Gunslinger",
   "author": "Stephen King",
   "cover": "https://m.media-amazon.com/images/I/71LiCxdD-ZL._SL1500_.jpg",
   "pages": 288,
 "main_genre": "Fiction",
 "sub_genre": "Fantasy"
},
 {
  "title": "The Drawing of the Three",
   "author": "Stephen King",
   "cover": "https://m.media-amazon.com/images/I/71KQ324N9vL._SL1500_.jpg",
   "pages": 496,
 "main_genre": "Fiction",
 "sub_genre": "Fantasy"
},
{
"title": "The Waste Lands",
 "author": "Stephen King",
 "cover": "https://m.media-amazon.com/images/I/81kcyaNSbdL._SL1500_.jpg",
 "pages": 640,
"main_genre": "Fiction",
"sub_genre": "Fantasy"
},
{
"title": "Wizard and Glass",
 "author": "Stephen King",
 "cover": "https://m.media-amazon.com/images/I/81eZ7xI608L._SL1500_.jpg",
 "pages": 928,
"main_genre": "Fiction",
"sub_genre": "Fantasy"
},
{
"title": "Wolves of the Calla",
 "author": "Stephen King",
 "cover": "https://m.media-amazon.com/images/I/71dOKrO5DGL._SL1500_.jpg",
 "pages": 736,
"main_genre": "Fiction",
"sub_genre": "Fantasy"
},
{
"title": "Song of Susannah",
 "author": "Stephen King",
 "cover": "https://m.media-amazon.com/images/I/71ZDE1KvEtL._SL1500_.jpg",
 "pages": 448,
"main_genre": "Fiction",
"sub_genre": "Fantasy"
},
{
"title": "The Dark Tower",
 "author": "Stephen King",
 "cover": "https://m.media-amazon.com/images/I/71rxkomEqdL._SL1500_.jpg",
 "pages": 864,
"main_genre": "Fiction",
"sub_genre": "Fantasy"
},
{
"title": "The Wind Through the Keyhole: A Dark Tower Novel",
 "author": "Stephen King",
 "cover": "https://m.media-amazon.com/images/I/81tUzi16hQL._SL1500_.jpg",
 "pages": 320,
"main_genre": "Fiction",
"sub_genre": "Fantasy"
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