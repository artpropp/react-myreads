import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookControl from './BookControl';
import CoverFallBack from './images/cover.svg'

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

  imageDidLoad = () => {
    if (!this.image) {
      return;
    }
    this.setState({width: this.image.width, height: this.image.height});
  }

  componentDidMount() {
    const imageLinks = this.props.imageLinks;

    this.image = new Image();
    this.image.src = (imageLinks) ? imageLinks.smallThumbnail : CoverFallBack;
    this.image.onload = this.imageDidLoad;
  }

  componentWillUnmount() {
    if (!this.image) {
      return;
    }

    this.imageDidLoad = () => {};
    delete this.image;
  }

  render() {
    const { title, imageLinks, onShelfChanged } = this.props;
    let { authors, shelf } = this.props;

    const width = this.state.width;
    const height = this.state.height;

    const imageURL = (imageLinks) ? imageLinks.smallThumbnail : CoverFallBack;

    // make sure we don't try to render some undefined
    authors = (authors) ? authors : [];
    shelf = (shelf) ? shelf : 'none';

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
