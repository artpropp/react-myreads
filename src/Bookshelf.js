import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BooksGrid from './BooksGrid';

class Bookshelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onBookChanged: PropTypes.func.isRequired
  }

  render() {
    const { title, books, onBookChanged } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <BooksGrid
            books={books}
            onBookChanged={onBookChanged}
          />
        </div>
      </div>
    );
  }
}

export default Bookshelf;
