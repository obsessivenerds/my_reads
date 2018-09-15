import React, {Component} from 'react'
import './App.css'
import Book from './components/book'

class Books extends Component {
  bookshelf: {
    shelves: [
      {
        type:'Currently Reading',
        books: [
          {
            bookCover: {
              width: 128,
              height: 188,
              image: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")'
            },
            title: 'Ender's Game,
            author: 'Orson Scott Card',
            shelf: 'currentlyReading'
          },
        ]
      }
    ]
  }
}
