import React, { useState, useEffect } from "react";

useEffect(() => {
    async function fetchBooks() {
      try {
        const results = await Promise.all(
        isbnList.map((isbn) =>
          fetch(`https://api.itbook.store/1.0/books/${isbn}`).then((response) =>
            response.json()
          )
        )
        );
      } catch (error) {
        console.error("No books found", error);
  }
}

fetchBooks();
}, []);

// function BookDisplay(props) {
//   const linkLabel = "Learn More";
//   (
//     <div>
//       <img className="book-image">{props.image}</img>
//       <h2 className="book-title">{props.title}</h2>
//       <h3 className="book-author">{props.author}</h3>
//       <a className="book-link">{linkLabel}</a>
//     </div>
// );
// }