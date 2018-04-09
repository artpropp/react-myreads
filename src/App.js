import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import * as BooksAPI from './BooksAPI';
import BookList from './BookList';

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
      return prevState.books.map(b => {
        if(b.id === book.id) {
          return book;
        } else {
          return b;
        }
      });
    });
    BooksAPI.update(book, book.shelf);
  }

  render() {
    const books = this.state.books;

    return (
      <div>
        <Route exact path="/" render={() => (
          <BookList
            books={books}
            onBookChanged={this.updateBook}
          />
        )} />
        <Route path="/search" render={({ history }) => (
          <p>seaching...</p>
        )} />
      </div>
    );
  }
}

export default App;
