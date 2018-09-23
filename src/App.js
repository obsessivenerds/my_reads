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


  componentDidMount = () => {
    BooksAPI.getAll()
    .then(res => this.setState({books: res}))
    .catch(err => {});
  }

  searchBack = () => {
    this.setState({ showSearchPage: false });
  }

  bookSearch = () => {
    this.setState({ showSearchPage: true})
  }

  switchShelf = (modifyBook, newShelf) => {
    BooksAPI.update(modifyBook, newShelf);
    //function to change attributes base on previous state and props
    this.setState((state, props) => {
      const books = state.books;

      if (!books.includes(modifyBook)) {
        modifyBook.shelf = newShelf;
        books.push(modifyBook);
      }
      else {
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
                searchBack={this.searchBack}
                books={books}
                switchShelf={this.switchShelf}
              />
          )}/>

          <Route exact path="/" render={() => (
            <BookList
            books={books}
            bookSearch={this.bookSearch}
            switchShelf={this.switchShelf}
            />
            )}
            />

      </div>
    )
  }
}
export default BooksApp
