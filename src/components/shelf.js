import React from 'react'
import Book from './book'

const Shelf = (props) => {
  const {shelf, switchShelf} = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.type}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        {/*map over shelf to create elements with book information*/}
          {shelf.books.map(book => <Book key={book.id} book={book} switchShelf={switchShelf}/>)}
        </ol>
      </div>
    </div>
  )
}

export default Shelf
