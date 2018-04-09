import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BooksGrid extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onBookChanged: PropTypes.func.isRequired
  }

  updateShelfForBook(shelf, book) {
    book.shelf = shelf;
    this.props.onBookChanged(book);
  }

  render() {
    const books = this.props.books;

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
                  onShelfChanged={(shelf) => this.updateShelfForBook(shelf, book)}
                />
              </li>
            ))}
          </ol>
        </div>
    );
  }
}

export default BooksGrid;
