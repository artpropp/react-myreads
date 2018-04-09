import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookControl extends Component {
  static propTypes = {
    shelf: PropTypes.string.isRequired,
    onShelfChanged: PropTypes.func.isRequired
  }

  render() {
    const { shelf, onShelfChanged } = this.props;

    return (
      <div className="book-shelf-changer">
        <select value={shelf} onChange={(event) => onShelfChanged(event.target.value)}>
          <option disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }

}

export default BookControl;
