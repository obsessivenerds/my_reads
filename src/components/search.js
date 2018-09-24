import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import Book from './book'
import { Link } from 'react-router-dom'

export default class Search extends Component {

  state = {
    books: [],
    query: ''
  }

/*Special thanks to student @Rodrick for providing a walk-through on
how to manage state between the search and shelf pages. The functions below
were developed from his walk-through at https://drive.google.com/drive/u/0/folders/1SMvuv0-r98pVfZQA2IKToBVfXtOuD01X
*/

  /*function to sync book properties*/
  syncBooks = (queryBooksList) => {
    return(queryBooksList.map(book => {
      /* see if items match and add to shelf */
      const myBook = this.props.books.find(item => item.id === book.id);
      if (myBook) {
        book['shelf'] = myBook.shelf;
      }
      return book;
    }))
  }

  /*get info from item, set state on response, and sync*/
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
            {/*set value of input */}
            <input
              value={this.state.query}
              type="text"
              placeholder="Search by title or author"
              onChange={this.inputChange}/>
          </div>
        </div>

        <div className="search-books-results">
        {/*map over book array, set key, and assign shelf*/}
          <ol className="books-grid">
            {books.map(book => <Book key={book.id} book={book} switchShelf={switchShelf}/>)}
          </ol>
        </div>
      </div>
    )
  }
}
