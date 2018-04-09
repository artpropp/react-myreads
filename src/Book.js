import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookControl from './BookControl';

class Book extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    authors : PropTypes.arrayOf(PropTypes.string),
    shelf : PropTypes.string,
    imageLinks: PropTypes.object,
    onShelfChanged: PropTypes.func.isRequired
  }

  state = {
    width: 0,
    height: 0
  }

  componentDidMount() {
    const imageLinks = this.props.imageLinks;
    if (!imageLinks) return;

    const image = new Image();
    image.src = imageLinks.smallThumbnail;
    image.onload = () => {
      this.setState({width: image.width, height:image.height});
    }
  }

  render() {
    const { title, imageLinks, onShelfChanged } = this.props;
    let { authors, shelf } = this.props;
    const width = this.state.width;
    const height = this.state.height;

    if (!authors) {
      authors = [];
    }
    if (!shelf) {
      shelf = 'none';
    }
    const imageURL = (imageLinks) ? imageLinks.smallThumbnail : '';

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{width: width, height: height, backgroundImage: `url(${imageURL})`}}
          ></div>
          <BookControl shelf={shelf} onShelfChanged={(shelf) => onShelfChanged(shelf)}/>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors.join(', ')}</div>
      </div>
    );
  }
}

export default Book;
