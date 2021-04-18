var books = [{
    "title": "Shantaram",
    "author": "Gregory David Robertson",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/51fk-WfzitL._SX331_BO1,204,203,200_.jpg",
    "pages": 944
}, {
    "title": "The Dinner",
    "author": "Herman Koch",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/51aeM33DulL._SX322_BO1,204,203,200_.jpg",
    "pages": 320
},
{
    "title": "The Black Book",
    "author": "James Patterson",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/516fW+caq8L._SX327_BO1,204,203,200_.jpg",
    "pages": 448
},
{
    "title": "Precious Cargo",
    "author": "Craig Davidson",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/51n7g4nRbAL._SX346_BO1,204,203,200_.jpg",
    "pages": 320
},
{
    "title": "Night",
    "author": "Elie Wiesel",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/41kkT0WKkXL._SX310_BO1,204,203,200_.jpg",
    "pages": 120
},
{
    "title": "Dawn",
    "author": "Elie Wiesel",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/41QOcVOusCL._SX327_BO1,204,203,200_.jpg",
    "pages": 81
},
{
    "title": "Day",
    "author": "Elie Wiesel",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/41EG8BjvslL._SX331_BO1,204,203,200_.jpg",
    "pages": 109
},
{
    "title": "Overcoming Life's Disappointments",
    "author": "Harold S. Kushner",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/41M+gZ-KLKL._SX322_BO1,204,203,200_.jpg",
    "pages": 192
},
{
    "title": "The Girl Who Loved Tom Gordon",
    "author": "Stephen King",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/51bcAiqnUlL._SX273_BO1,204,203,200_.jpg",
    "pages": 320
},
{
    "title": "Dive Into Design Patterns",
    "author": "Alexander Schvets",
    "cover": "https://refactoring.guru/images/patterns/book/web-cover-en-2x.png",
    "pages": 406
},
{
    "title": "Sapiens",
    "author": "Yuval Noah Harari",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/41lZKXt1+ML._SX332_BO1,204,203,200_.jpg",
    "pages": 464
},
{
    "title": "In A Cottage In A Wood",
    "author": "Cass Green",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/51BR4QBBZ9L._SX323_BO1,204,203,200_.jpg",
    "pages": 320
},
{
    "title": "The Soul of Sponsorship: The Friendship of Fr.Ed Dowling, S.J., and Bill Wilson in Letters",
    "author": "Robert Fitzgerald, S.J.",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/51ALhG+PdAL._SY344_BO1,204,203,200_.jpg",
    "pages": 160
},
{
    "title": "Duma Key",
    "author": "Stephen King",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/51Md+Jj+MXL._SX321_BO1,204,203,200_.jpg",
    "pages": 640
},
{
    "title": "A New Pair of Glasses",
    "author": "Chuck 'C'",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/41RoomWQmLL._SX308_BO1,204,203,200_.jpg",
    "pages": 201
},
 {
   "title": "Darth Plagueis",
    "author": "James Luceno",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/51NJOD0ItCL._SX314_BO1,204,203,200_.jpg",
    "pages": 498
 },
 {
   "title": "Meditations",
    "author": "Macus Aurelius",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/41LA3932v4L._SX322_BO1,204,203,200_.jpg",
    "pages": 256
 },
 {
   "title": "The Obstacle is the Way",
    "author": "Ryan Holiday",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/41YYbVCk+fL._SY344_BO1,204,203,200_.jpg",
    "pages": 224
 },
 {
   "title": "Open Veins of Latin America",
    "author": "Eduardo Galeano",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/51Ivgbp9teL._SX331_BO1,204,203,200_.jpg",
    "pages": 360
 },
 {
   "title": "The Enchiridion",
    "author": "Epictetus",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/51SxWYZ1C0L._SX311_BO1,204,203,200_.jpg",
    "pages": 64
 },
 {
   "title": "Old Man and the Sea",
    "author": "Ernest Hemingway",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/412WMYR6s6L._SX326_BO1,204,203,200_.jpg",
    "pages": 128
 },
 {
   "title": "The Art of Living",
    "author": "Epictetus",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/41UhSraFSxL._SX311_BO1,204,203,200_.jpg",
    "pages": 144
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