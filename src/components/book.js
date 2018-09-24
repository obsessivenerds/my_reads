import React, { Component } from 'react'

export default class Book extends Component {

  state = {
      shelf: ''
    }

/*update state after component mounts */
  componentDidMount = () => {
    this.setState({shelf: this.props.book.shelf})
  }

/*function to change the shelf state of a book */
  switchShelf = (event) => {
    const shelf = event.target.value;
    /*pass new shelf into book */
    this.props.switchShelf(this.props.book, shelf);
    this.setState({shelf});
  }

  render () {
    /*destructure elements */
    const {book} = this.props;
    const {shelf} = this.state;
    /*set imageLinks and author values to clear error for unassigned values*/
    const {imageLinks=[], authors=['unknown'], title} = book;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select value={shelf ? shelf : 'none'} onChange={this.switchShelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want To Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          {authors.map(authors => (<div key={authors} className="book-authors">{authors}</div>))}
        </div>
      </li>
    )
  }
}
Book.defaultProps = {
  book: {
    authors: ['']
  }
}
