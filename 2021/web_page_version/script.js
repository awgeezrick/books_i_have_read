var books = [{
    "title": "Tarkin",
    "author": "James Luceno",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/81AwzEFa+dL.jpg",
    "pages": 354
},
{
    "title": "Dark Lord",
    "author": "James Luceno",
    "cover": "https://d188rgcu4zozwl.cloudfront.net/content/B00513HXAG/resources/1713329629",
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
    "cover": "https://d188rgcu4zozwl.cloudfront.net/content/B00513HX7Y/resources/366133765",
    "pages": 416
},{
    "title": "Dark Force Rising",
    "author": "Timothy Zahn",
    "cover": "https://d188rgcu4zozwl.cloudfront.net/content/B00513HKF4/resources/1863583663",
    "pages": 450
},{
    "title": "The Last Command",
    "author": "Timothy Zahn",
    "cover": "https://d188rgcu4zozwl.cloudfront.net/content/B00513HJXC/images/cover.jpg",
    "pages": 595
},{
    "title": "Resistance Reborn",
    "author": "Rebecca Roanhorse",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/91zJfaEwrxL.jpg",
    "pages": 432
},{
    "title": "Thrawn",
    "author": "Timothy Zahn",
    "cover": "https://d188rgcu4zozwl.cloudfront.net/content/B01ILZO30S/images/cover.jpg",
    "pages": 488
},{
    "title": "Thrawn: Alliances",
    "author": "Timothy Zahn",
    "cover": "https://d374oxlv7wyffd.cloudfront.net/B07692QXW3/f83a49ce/cover.jpeg",
    "pages": 483
},
 {
    "title": "Thrawn: Treason",
    "author": "Timothy Zahn",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/81vnLArJsuL.jpg",
    "pages": 496
},
 {
    "title": "Allegiance",
    "author": "Timothy Zahn",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/91UYdSUnpFL.jpg",
    "pages": 336
},
 {
    "title": "Choices of One",
    "author": "Timothy Zahn",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/81cIJEItXcL.jpg",
    "pages":480
},
 {
    "title": "I, Jedi",
    "author": "Michael A. Stackpole",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/717jFriRA8L.jpg",
    "pages":592
},
 {
    "title": "Lost Stars",
    "author": "Claudia Gray",
    "cover": "https://static.wikia.nocookie.net/starwars/images/2/25/Lost_Stars.png",
    "pages":576
},
 {
    "title": "Deceived",
    "author": "Paul S. Kemp",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/919S9OE8SSL.jpg",
    "pages":352
},
 {
    "title": "Fatal Alliance",
    "author": "Sean Williams",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/81JHIPuZ96L.jpg",
    "pages":512
},
 {
    "title": "Dawn of the Jedi: Into the Void",
    "author": "Tim Lebbon",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/916mJi0SzML.jpg",
    "pages":352
},
 {
    "title": "Lost Tribe of the Sith: The Collected Stories",
    "author": "John Jackson Miller",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/91OngTdLjpL.jpg",
    "pages":432
},
{
    "title": "Lords of the Sith",
    "author": "Paul S. Kemp",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/91bC9qa3yVL.jpg",
    "pages":368
},
 {
    "title": "Dark Disciple",
    "author": "Christie Golden",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/914jILPpk8L.jpg",
    "pages":400
}, {
    "title": "Outbound Flight",
    "author": "Timothy Zahn",
    "cover": "https://d374oxlv7wyffd.cloudfront.net/B00513F9OS/74698d8a/cover.jpeg",
    "pages":420
},
 {
    "title": "Aftermath",
    "author": "Chuck Wendig",
    "cover": "https://images-na.ssl-images-amazon.com/images/I/71A0u-M6MdL.jpg",
    "pages":410
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