var books = [{
                "title": "1984",
                "author": "George Orwell",
                "cover": "https://images-na.ssl-images-amazon.com/images/I/51K84pomCRL._SX305_BO1,204,203,200_.jpg",
                "pages": 336
            }, {
                "title": "Timescape",
                "author": "Gregory Benford",
                "cover": "https://m.media-amazon.com/images/I/510gF2m-+DL.jpg",
                "pages": 514
            },
            {
                "title": "The Judgement and In the Penal Colony",
                "author": "Franz Kafka",
                "cover": "https://images-na.ssl-images-amazon.com/images/I/51wtznVSb4L._SX372_BO1,204,203,200_.jpg",
                "pages": 55
            },
            {
                "title": "On the Otherside of Hyperactivity: An Anthropology of ADHD",
                "author": "Marc Andrew Goodwin",
                "cover": "https://via.placeholder.com/230x338?text=No+Cover",
                "pages": 152
            },
            {
                "title": "Otherland Vol.1",
                "author": "Tad Williams",
                "cover": "https://images-na.ssl-images-amazon.com/images/I/51kjPMqNXwL._SX298_BO1,204,203,200_.jpg",
                "pages": 800
            },
            {
                "title": "The Outsider",
                "author": "Stephen King",
                "cover": "https://images-na.ssl-images-amazon.com/images/I/51dosvdSlQL._SX320_BO1,204,203,200_.jpg",
                "pages": 576
            },
            {
                "title": "The Obstacle is the Way",
                "author": "Ryan Holiday",
                "cover": "https://images-na.ssl-images-amazon.com/images/I/41d+aa6UYCL._SX352_BO1,204,203,200_.jpg",
                "pages": 224
            },
            {
                "title": "A Guide to the Good Life",
                "author": "William B. Irvine",
                "cover": "https://images-na.ssl-images-amazon.com/images/I/41UJYnqgwjL._SX355_BO1,204,203,200_.jpg",
                "pages": 336
            },
            {
                "title": "Homo Deus: A Brief History of Tomorrow ",
                "author": "Yuval Noah Harari",
                "cover": "https://images-na.ssl-images-amazon.com/images/I/41MJoxwmKfL._SX327_BO1,204,203,200_.jpg",
                "pages": 528
            },
            {
                "title": "Otherland Vol.2",
                "author": "Tad Williams",
                "cover": "https://images-na.ssl-images-amazon.com/images/I/51VtCVGia9L._SX304_BO1,204,203,200_.jpg",
                "pages": 784
            },
            {
                "title": "Otherland Vol.3",
                "author": "Tad Williams",
                "cover": "https://images-na.ssl-images-amazon.com/images/I/513Z20c3xaL._SX311_BO1,204,203,200_.jpg",
                "pages": 704
            },
            {
                "title": "White Fragility",
                "author": "Robin Diangelo",
                "cover": "https://images4.penguinrandomhouse.com/cover/9780807047415",
                "pages": 192
            },
            {
                "title": "The Damnation Game",
                "author": "Clive Barker",
                "cover": "https://images-na.ssl-images-amazon.com/images/I/51r4PnxF4ZL._SX301_BO1,204,203,200_.jpg",
                "pages": 433
            },
            {
                "title": "Otherland Vol.4",
                "author": "Tad Williams",
                "cover": "https://m.media-amazon.com/images/I/51xQqhA4EzL.jpg",
                "pages": 1072
            },
            {
                "title": "Past the Shallows",
                "author": "Favel Parrett",
                "cover": "https://m.media-amazon.com/images/I/41kmGKd4CxL.jpg",
                "pages": 288
            },
             {
               "title": "It's Not About You",
                "author": "Tom Rath",
                "cover": "https://m.media-amazon.com/images/I/41t8hPSY0oL.jpg",
                "pages": 34
             },
             {
               "title": "Guns, Germs, and Steel",
                "author": "Jared Diamond",
                "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1562257627l/76919._SY475_.jpg",
                "pages": 496
             },
             {
               "title": "Hyperion",
                "author": "Dan Simmons",
                "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405546838l/77566.jpg",
                "pages": 482
             },
             {
               "title": "QBQ! The Question Behind the Question",
                "author": "John G. Miller",
                "cover": "https://images-na.ssl-images-amazon.com/images/I/51sSpOJwVpL._SX329_BO1,204,203,200_.jpg",
                "pages": 115
             },
             {
               "title": "Animal Farm",
                "author": "George Orwell",
                "cover": "https://images-na.ssl-images-amazon.com/images/I/51Pwj4CrP4L._SX305_BO1,204,203,200_.jpg",
                "pages": 112
             },
             {
               "title": "The Fall of Hyperion",
                "author": "Dan Simmons",
                "cover": "https://images-na.ssl-images-amazon.com/images/I/51OVMT60y4L._SX300_BO1,204,203,200_.jpg",
                "pages": 528
             },
             {
               "title": "Time Travel",
                "author": "James Gleick",
                "cover": "https://images-na.ssl-images-amazon.com/images/I/31lJMlO2ZwL._SX400_BO1,204,203,200_.jpg",
                "pages": 352
             },
             {
               "title": "Time Machines",
                "author": "Bill Adler, Jr.",
                "cover": "https://images-na.ssl-images-amazon.com/images/I/511P1YFJVVL._SX308_BO1,204,203,200_.jpg",
                "pages": 400
             },
             {
               "title": "Slaughterhouse-Five",
                "author": "Kurt Vonnegut",
                "cover": "https://images-na.ssl-images-amazon.com/images/I/41utBtkGdTL._SX326_BO1,204,203,200_.jpg",
                "pages": 288
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