import React, { Component } from 'react'

export default class Book extends Component {
  render () {
    const {title, author, shelf, bookCover} = this.props.book;
    const { width, height, image } = bookCover;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: width, height: height, backgroundImage: image }}></div>
            <div className="book-shelf-changer">
              <select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">{shelf}</option>
                <option value="wantToRead">{shelf}</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{author}</div>
        </div>
      </li>
    )
  }
}
