import React, { Component } from 'react'
import Shelf from './shelf'
import { Link } from 'react-router-dom';
export default class BookList extends Component {

  bookShelf = (books) => {
    {/*filter books by shelf and return array of shelves*/}
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
    const {books, switchShelf} = this.props;
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
          <Link to="/search" >Add a book</Link>
        </div>
      </div>
    )
  }
}
