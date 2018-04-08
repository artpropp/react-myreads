import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class Bookshelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onBookChanged: PropTypes.func.isRequired
  }

  updateShelfForBook(shelf, book) {
    book.shelf = shelf;
    this.props.onBookChanged(book);
  }

  render() {
    const { title, books } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <Book
                  title={book.title}
                  authors={book.authors}
                  shelf={book.shelf}
                  imageURL={book.imageLinks.smallThumbnail}
                  onShelfChanged={(shelf) => this.updateShelfForBook(shelf, book)}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
