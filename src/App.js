import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import * as BooksAPI from './BooksAPI';
import BookList from './BookList';
import BookSearch from './BookSearch';

class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    document.title = 'MyReads'

    BooksAPI.getAll().then((books) => {
      this.setState((prevState) => ({books}));
    });
  }

  updateBook = (book) => {
    this.setState((prevState) => {
      // if the updated book is in state.books
      // then just update it
      let books = prevState.books.map((b) => {
        return (b.id === book.id) ? book : b;
      });

      // if the updated book was not in the state.books before
      // then just add it
      if (!books.find(b => b.id === book.id)) {
        books.push(book);
      }

      prevState.books = books;
      return prevState;
    });
    BooksAPI.update(book, book.shelf);
  }

  render() {
    const books = this.state.books;

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookList
            books={books}
            onBookChanged={this.updateBook}
          />
        )} />
        <Route path="/search" render={() => (
          <BookSearch
            books={books}
            onBookChanged={this.updateBook}
          />
        )} />
      </div>
    );
  }
}

export default App;
