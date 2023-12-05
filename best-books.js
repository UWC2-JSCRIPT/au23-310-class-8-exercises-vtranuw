const formEl = document.getElementById("best-books-form");
const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dateEl = document.getElementById("date");
const booksContainer = document.getElementById("books-container");
// const API_KEY ="GpKFiCaSkZyXSlugi3BbleVqh2efAMI2"
// Refer to api-key.js for API key
formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;
  const formattedDate = `${year}-${month}-${date}`;
  const url = `https://api.nytimes.com/svc/books/v3/lists/${formattedDate}/hardcover-fiction?api-key=${API_KEY}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayBooks(data.results.books);
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
});

const displayBooks = (books) => {
  booksContainer.innerHTML = "";
  books.slice(0, 5).forEach((book) => {
    const bookElement = document.createElement("div");
    const bookImageUrl = book.book_image; // For extra credit: for Bestselling Books, also display the image for each book
    bookElement.innerHTML = `
    <h3>${book.title}</h3>
    <p>Author: ${book.author}</p>
    <img src="${bookImageUrl}" alt="Cover image of ${book.title}" style="max-width:100px; height:auto;"> 
    <p>${book.description}</p>
  `;
    booksContainer.appendChild(bookElement);
  });
};
