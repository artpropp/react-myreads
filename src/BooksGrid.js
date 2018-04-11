import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BooksGrid = (props) => {
  const { books, onBookChanged } = props;

  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book) => (
          <li key={book.id}>
            <Book
              title={book.title}
              authors={book.authors}
              shelf={book.shelf}
              imageLinks={book.imageLinks}
              onShelfChanged={(shelf) => {
                book.shelf = shelf;
                return onBookChanged(book);
              }}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}

BooksGrid.propTypes = {
  books: PropTypes.array.isRequired,
  onBookChanged: PropTypes.func.isRequired
}

export default BooksGrid;
