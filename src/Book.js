import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookControl from './BookControl';

class Book extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    authors : PropTypes.arrayOf(PropTypes.string).isRequired,
    shelf : PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    onShelfChanged: PropTypes.func.isRequired
  }

  state = {
    width: 0,
    height: 0
  }

  componentDidMount() {
    const imageURL = this.props.imageURL;

    const image = new Image();
    image.src = imageURL;
    image.onload = () => {
      this.setState({width: image.width, height:image.height});
    }
  }

  render() {
    const { title, authors, shelf, imageURL, onShelfChanged } = this.props;
    const width = this.state.width;
    const height = this.state.height;

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
