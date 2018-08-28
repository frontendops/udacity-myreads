import React from 'react'
//import { Route } from 'react-router-dom'

import Search from './Search.js';
import MainPage from './MainPage.js';

import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
    state = {
        books : []
    }

    componentDidMount() {
        BooksAPI.getAll()
        .then((books) => {
            this.setState({ books: books })
        })
    }

    changeShelf = (book, shelf) => {
        BooksAPI.update(book, shelf)
        .then(response =>{
            this.allBooks();
        });
    }

    allBooks() {
        BooksAPI.getAll().then(books => {
            this.setState({ books: books })
        });
    }

  render() {
    return (
      <div className="app">
      <MainPage books={this.state.books}
        changeShelf={this.changeShelf}
      />
      <Search changeShelf={this.changeShelf}/>
      </div>
    )
  }
}

export default BooksApp
