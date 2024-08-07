var books = [{
   "title": "Tempest Runner",
    "author": "Cavan Scott",
    "cover": "https://m.media-amazon.com/images/I/81r1q8VTWXL._SL1500_.jpg",
    "pages": 624,
  "main_genre": "Fiction",
  "sub_genre": "Science Fiction"
},
{
   "title": "Ahsoka",
    "author": "E.K. Johnston",
    "cover": "https://m.media-amazon.com/images/I/81D0a+JREeL._SL1500_.jpg",
    "pages": 384,
  "main_genre": "Fiction",
  "sub_genre": "Science Fiction"
},
{
   "title": "The Great Mortality: An Intimate History of the Black Death, the Most Devastating Plague of All Time",
    "author": "John Kelly",
    "cover": "https://m.media-amazon.com/images/I/71oib5leOBL._SL1360_.jpg",
    "pages": 364,
  "main_genre": "Non-Fiction",
  "sub_genre": "History"
},
{
   "title": "The Graves Are Walking: The Great Famine and the Saga of the Irish People",
    "author": "John Kelly",
    "cover": "https://m.media-amazon.com/images/I/91O0UcO6ebL._SL1500_.jpg",
    "pages": 416,
  "main_genre": "Non-Fiction",
  "sub_genre": "History"
}, {
    "title": "Darth Bane: Path of Destruction",
    "author": "Drew Karpyshyn",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/919IhaKl1qL.jpg",
    "pages": 324,
    "main_genre": "Fiction",
  "sub_genre": "Science Fiction"
}, {
    "title": "Darth Bane: Rule of Two",
    "author": "Drew Karpyshyn",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/91Nsu5lwOkL.jpg",
    "pages": 352,
    "main_genre": "Fiction",
  "sub_genre": "Science Fiction"
}, {
    "title": "Darth Bane: Dynasty of Evil",
    "author": "Drew Karpyshyn",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/91hCdXC3yIL.jpg",
    "pages": 336,
    "main_genre": "Fiction",
  "sub_genre": "Science Fiction"
}, {
    "title": "The Martian",
    "author": "Andy Weir",
    "cover": "https://m.media-amazon.com/images/I/71SRkQ-DwZL._SL1500_.jpg",
    "pages": 387,
    "main_genre": "Fiction",
  "sub_genre": "Science Fiction"
}, {
    "title": "Joyful Recollections of Trauma",
    "author": "Paul Scheer",
    "cover": "https://m.media-amazon.com/images/I/81r7DZj3QjL._SL1500_.jpg",
    "pages": 256,
    "main_genre": "Non-Fiction",
  "sub_genre": "Trauma"
}, {
    "title": "Project Hail Mary",
    "author": "Andy Weir",
    "cover": "https://m.media-amazon.com/images/I/81gYjHx8YmL._SL1500_.jpg",
    "pages": 496,
    "main_genre": "Fiction",
  "sub_genre": "Science Fiction"
},
  {
    "title": "Recursion",
    "author": "Blake Crouch",
    "cover": "https://m.media-amazon.com/images/I/81Hj5g9zmOL._SL1500_.jpg",
    "pages": 336,
    "main_genre": "Fiction",
    "sub_genre": "Science Fiction"
  },
  {
    "title": "Endless Forms: The Secret World of Wasps",
    "author": "Seirian Sumner",
    "cover": "https://m.media-amazon.com/images/I/71IzHgUHSZL._SL1500_.jpg",
    "pages": 408,
    "main_genre": "Non-Fiction",
    "sub_genre": "Entomology"
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