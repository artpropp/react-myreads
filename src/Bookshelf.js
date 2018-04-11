import React from 'react';
import PropTypes from 'prop-types';
import BooksGrid from './BooksGrid';


const Bookshelf = (props) => {
  const { title, books, onBookChanged } = props;

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

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onBookChanged: PropTypes.func.isRequired
}

export default Bookshelf;
