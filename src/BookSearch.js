import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BooksGrid from './BooksGrid';
import * as BooksAPI from './BooksAPI';

class BookSearch extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onBookChanged: PropTypes.func.isRequired
  }

  state = {
    books: [],
    query: ''
  }

  updateQuery = (query) => {
    query = query.trim();

    // make a quick update to the input
    this.setState((prevState) => {
      prevState.query = query;
      return prevState;
    });

    // then also fire a bit expensive search
    // on the backend server and update the books list
    BooksAPI.search(query).then((books) => {
      this.setState((prevState) => {
        if (!books || books.error) {
          prevState.books = [];
        } else {
          // update the shelf state on books that are
          // already in one of our shelves
          const pBooks = this.props.books;
          books = books.map((book) => {
            for (let i = 0; i < pBooks.length; ++i) {
              if (pBooks[i].id === book.id) {
                return pBooks[i];
              }
            }
            return book;
          });
          prevState.books = books;
        }
        return prevState;
      });
    });
    // TODO: implement debounce on backend query
  }

  render() {
    const { books, query } = this.state;
    const { onBookChanged } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
          >Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BooksGrid
            books={books}
            onBookChanged={onBookChanged}
          />
        </div>
      </div>
    )
  }
}

export default BookSearch;
