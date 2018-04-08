import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf';

class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onBookChanged: PropTypes.func.isRequired
  }

  state = {
    books: []
  }

  render() {
    const { books, onBookChanged } = this.props;

    return (
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
    )
  }

}

export default BookList;
