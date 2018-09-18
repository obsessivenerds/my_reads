import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './components/search'
import BookList from './components/BookList'

class BooksApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      books: [],
      showSearchPage: false
    }
  }

  componentDidMount = () => {
    BooksAPI.getAll()
    .then(res => this.setState({books: res}))
    .catch(err => {});
  }

  searchBack = () => {
    this.setState({ showSearchPage: false })
  }

  bookSearch = () => {
    this.setState({ showSearchPage: true})
  }

  render() {
    const {books} = this.state;

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search searchBack={this.searchBack}/>
        ) : (
          <BookList books={books} bookSearch={this.bookSearch}/>
        )}
      </div>
    )
  }
}
export default BooksApp
