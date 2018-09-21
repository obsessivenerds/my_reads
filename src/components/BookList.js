import React, { Component } from 'react'
import Shelf from './shelf'

export default class BookList extends Component {

  bookShelf = (books) => {

    const current = books.filter(book => book.shelf === 'currentlyReading');
    const want = books.filter(book => book.shelf === 'wantToRead');
    const read = books.filter(book => book.shelf === 'read');

    return [
      {type: 'Currently Reading', books: current},
      {type: 'Want To Read', books: want},
      {type: 'Read', books: read},
    ]
  }

  render () {
    const {bookSearch, books, switchShelf} = this.props;
    const shelves = this.bookShelf(books);

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map(shelf => <Shelf key={shelf.type} shelf={shelf} switchShelf={switchShelf}/>)}
          </div>
        </div>
        <div className="open-search">
          <a onClick={bookSearch}>Add a book</a>
        </div>
      </div>
    )
  }
}
