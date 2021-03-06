var books = [{
    "title": "Tarkin",
    "author": "James Luceno",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/81AwzEFa+dL.jpg",
    "pages": 354
},
{
    "title": "Dark Lord",
    "author": "James Luceno",
    "cover": "https://m.media-amazon.com/images/I/51jzFL3-77L.jpg",
    "pages": 369
}, {
    "title": "Revan",
    "author": "Drew Karpyshyn",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/81pVtrJRfhL.jpg",
    "pages": 368
}, {
    "title": "Darth Bane: Path of Destruction",
    "author": "Drew Karpyshyn",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/919IhaKl1qL.jpg",
    "pages": 324
}, {
    "title": "Darth Bane: Rule of Two",
    "author": "Drew Karpyshyn",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/91Nsu5lwOkL.jpg",
    "pages": 352
}, {
    "title": "Darth Bane: Dynasty of Evil",
    "author": "Drew Karpyshyn",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/91hCdXC3yIL.jpg",
    "pages": 336
}, {
    "title": "Heir to the Empire",
    "author": "Timothy Zahn",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/51N-guk0CbL.jpg",
    "pages": 416
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
      "col-lg-3",
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