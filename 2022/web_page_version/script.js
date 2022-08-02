var books = [{
   "title": "Darth Plagueis",
    "author": "James Luceno",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/91Ks5hTuBeL.jpg",
    "pages": 498,
  "main_genre": "Fiction",
  "sub_genre": "Science Fiction"
},{
   "title": "Dooku: Jedi Lost",
    "author": "Cavan Scott",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/81pH9p7BqNL.jpg",
    "pages": 480,
  "main_genre": "Fiction",
  "sub_genre": "Science Fiction"
},{
   "title": "Fahrenheit 451",
    "author": "Ray Bradbury",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/71OFqSRFDgL.jpg",
    "pages": 249,
  "main_genre": "Fiction",
  "sub_genre": "Science Fiction"
},{
   "title": "Master and Apprentice",
    "author": "Claudia Gray",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/91ygGYf+iGL.jpg",
    "pages": 480,
  "main_genre": "Fiction",
  "sub_genre": "Science Fiction"
},
  {
   "title": "The Strain",
    "author": "Guillermo Del Toro, Chuck Hogan",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/5131u2N5LjL.jpg",
    "pages": 432,
  "main_genre": "Fiction",
  "sub_genre": "Horror"
},
  {
   "title": "The Fall",
    "author": "Guillermo Del Toro, Chuck Hogan",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/71EKigt2JoL.jpg",
    "pages": 480,
  "main_genre": "Fiction",
  "sub_genre": "Horror"
},
  {
   "title": "The Night Eternal",
    "author": "Guillermo Del Toro, Chuck Hogan",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/71PCoE9ac1L.jpg",
    "pages": 560,
  "main_genre": "Fiction",
  "sub_genre": "Horror"
},
  {
   "title": "Zen and the Art of Motorcycle Maintenance",
    "author": "Robert M. Pirsig",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/61Geec7n-zL.jpg",
    "pages": 464,
  "main_genre": "Fiction",
  "sub_genre": "Philosophy"
},{
   "title": "Parasite Rex",
    "author": "Carl Zimmer",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/51nMwMxNXtL.jpg",
    "pages": 320,
  "main_genre": "Non-Fiction",
  "sub_genre": "Science"
},
  {
   "title": "Kenobi",
    "author": "John Jackson Miller",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/918lcUe62SL.jpg",
    "pages": 464,
  "main_genre": "Fiction",
  "sub_genre": "Science Fiction"
} , {
   "title": "Solaris",
    "author": "Stanislaw Lem",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/51yQl6pPpeL.jpg",
    "pages": 224,
  "main_genre": "Fiction",
  "sub_genre": "Science Fiction"
},
  {
   "title": "Revenge of the Sith",
    "author": "Matthew Stover",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/71OAJeaOCEL.jpg",
    "pages": 480,
  "main_genre": "Fiction",
  "sub_genre": "Science Fiction"
},
  {
   "title": "Meditations: A New Translation",
    "author": "Marcus Aurelius",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/815Ewv1oJ+L.jpg",
    "pages": 256,
  "main_genre": "Non-Fiction",
  "sub_genre": "Philosophy"
},
    {
   "title": "Madness and Civilization: A History of Insanity in the Age of Reason",
    "author": "Michel Foucault",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/71imS65EvQL.jpg",
    "pages": 320,
  "main_genre": "Non-Fiction",
  "sub_genre": "Philosophy"
},
      {
   "title": "Memoirs of an Addicted Brain: A Neuroscientist Examines his Former Life on Drugs",
    "author": "Marc Lewis",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/91sEn+MOMaL.jpg",
    "pages": 320,
  "main_genre": "Non-Fiction",
  "sub_genre": "Neurology"
},
      {
   "title": "The Paradise Snare: The Han Solo Trilogy: Book 1",
    "author": "A.C.Crispin",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/91xSbZF4QjL.jpg",
    "pages": 320,
  "main_genre": "Fiction",
  "sub_genre": "Science Fiction"
},
      {
   "title": "The Hutt Gambit: The Han Solo Trilogy: Book 2",
    "author": "A.C.Crispin",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/91uyDQXyiuL.jpg",
    "pages": 352,
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