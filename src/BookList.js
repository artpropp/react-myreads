import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf';

const BookList = (props) => {
  const { books, onBookChanged } = props;

  return (
    <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Bookshelf
            key="currentlyReading"
            title="Currently Reading"
            books={books.filter(book => book.shelf === 'currentlyReading')}
            onBookChanged={onBookChanged}
          />
          <Bookshelf
            key="wantToRead"
            title="Want to Read"
            books={books.filter(book => book.shelf === 'wantToRead')}
            onBookChanged={onBookChanged}
          />
          <Bookshelf
            key="read"
            title="Read"
            books={books.filter(book => book.shelf === 'read')}
            onBookChanged={onBookChanged}
          />
        </div>
      </div>
      <div className="open-search">
        <Link
          to="/search"
        >Add a book</Link>
      </div>
    </div>
  )
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  onBookChanged: PropTypes.func.isRequired
}

export default BookList;
