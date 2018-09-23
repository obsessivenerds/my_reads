import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import Book from './book'
import { Link } from 'react-router-dom'

export default class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: [],
      query: ''
    }
  }

  syncBooks = (queryBooksList) => {
    return(queryBooksList.map(book => {
      const myBook = this.props.books.find(item => item.id === book.id);
      if (myBook) {
        book['shelf'] = myBook.shelf;
      }
      return book;
    }))
  }

  inputChange = (event) => {
    const query = event.target.value;
    this.setState({query});
    BooksAPI.search(query).then(res => this.setState({books: Array.isArray(res) ? this.syncBooks(res) : [] }));
  }
  render () {

    const {switchShelf} = this.props;
    const {books} = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              value={this.state.query}
              type="text"
              placeholder="Search by title or author"
              onChange={this.inputChange}/>

          </div>
        </div>

        <div className="search-books-results">
        {/*{books.length < 1 && (<div>No results found!</div>)}*/}
          <ol className="books-grid">
            {books.map(book => <Book key={book.id} book={book} switchShelf={switchShelf}/>)}
          </ol>
        </div>
      </div>
    )
  }
}
