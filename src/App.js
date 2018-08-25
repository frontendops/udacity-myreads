import React from 'react'
//import { Route } from 'react-router-dom'

//import Search from './Search.js';
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
            this.setState({ books })
        })
    }

  render() {
    return (
      <div className="app">
      <MainPage books={this.state.books}/>
      </div>
    )
  }
}

export default BooksApp
