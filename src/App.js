import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './components/search'
import BookList from './components/BookList'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
      books: [],
      showSearchPage: false,
    }

/*get book list from BooksAPI and set the state for the response*/
  componentDidMount = () => {
    BooksAPI.getAll()
    .then(res => this.setState({books: res}))
    .catch(err => {});
  }

  /*switchShelf updates state of existing book to change shelves*/
  switchShelf = (modifyBook, newShelf) => {
    BooksAPI.update(modifyBook, newShelf);
    /*change attributes based on previous state and props*/
    this.setState((state, props) => {
      /*get books with previous state*/
      const books = state.books;
      /*if the book is not included, add shelf info, and add it to the new array*/
      if (!books.includes(modifyBook)) {
        modifyBook.shelf = newShelf;
        books.push(modifyBook);
      }
      else {
        /*map over books to look for matches and rewrite shelf information*/
        books.map(book => {
          if (book.id === modifyBook.id) {
            book.shelf = newShelf
          }
          return book;
        })
      }
      return {books}
    })
  }

  render() {
    const {books} = this.state;

    return (
      <div className="app">
        <Route path="/search" render={() => (
          <Search
          books={books}
          switchShelf={this.switchShelf}
          />
        )}/>
        <Route exact path="/" render={() => (
          <BookList
          books={books}
          switchShelf={this.switchShelf}
          />
        )}/>
      </div>
    )
  }
}
export default BooksApp
