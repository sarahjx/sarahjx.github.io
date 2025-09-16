import React, {useEffect, useState} from 'react';
import BookCard from './components/bookcard.jsx';
import './App.css';

function App() {

    const [books, setBooks] = useState([]);
    
    const isbnList = ["9781711470559", "9781593275662"];

      useEffect(() => {
        async function fetchBooks() {
          try {
            const results = await Promise.all(
              isbnList.map((isbn) =>
                fetch(`https://api.itbook.store/1.0/books/${isbn}`).then((res) =>
                    res.json()
          )
  )
  );
      setBooks(results);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
      }

      fetchBooks();
      }, []);

      return (
        <div className='app'>
          <header className="header">
            <h1>Sarah's Awesome Book Catalog</h1>
        </header>

      <main className="content">
        {books.map((book) => (
          <BookCard
            key={book.isbn13}
            image={book.image}
            title={book.title}
            authors={book.authors}
            learnMore={book.url}
            />
    ))}

        <button className='add-button'>Add Book +</button>
          </main>

       <footer className="footer">
        <p>© 2025 Sarah's Book Catalog</p>
      </footer>
      </div>
    );
  }

export default App;