import React, { Component } from 'react';
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
  }

  render() {
    const books = this.state.books;

    return (
      <div>
        <BookList
          books={books}
          onBookChanged={this.updateBook}
        />
      </div>
    );
  }
}

export default App;
