import React from 'react'
import SearchPage from './SearchPage'
import MainPage from './MainPage'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  /*
  getAll() method:
  Returns a promise which resolves to a JSON 
  object containing a collection of books. 
  This collection represents the books currently
  in the bookshelves in your app.
  */
  getBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  componentDidMount() {
    this.getBooks()
  }

  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);  
    this.getBooks()
  }

  render() {
    return (
      <div className="app">
        <MainPage 
          books={this.state.books}
          moveShelf={this.moveShelf}
        />  

      </div>
    )
  }
}

export default BooksApp
