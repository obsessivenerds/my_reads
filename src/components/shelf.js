import React from 'react'
import Book from './book'

const Shelf = (props) => {
  const {type, books} = props.shelf;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{type}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => <Book book={book} />)}
        </ol>
      </div>
    </div>
  )
}

export default Shelf
