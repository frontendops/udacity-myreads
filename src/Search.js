import React, { Component } from 'react';
import Books from './Books.js';
import { Link } from 'react-router-dom';

import * as BooksAPI from './BooksAPI'

class Search extends Component {
    state = {
        query: '',
        searchedBooks: []
    }

    updateInput = (query) => {
        this.setState({
            query: query
        })
        this.renderSearchedBooks(query);
    }

    renderSearchedBooks = (query) => {
        if (query) {
            BooksAPI.search(query).then((searchedBooks) => {
                if (searchedBooks.error) {
                    this.setState({ searchedBooks: [] });
                } else {
                    this.setState({ searchedBooks: searchedBooks })
                }
              })
            } else {
                this.setState({ searchedBooks: [] });
        }
    }



  render() {
   	return (
      	<div className="search-books">
            <div className="search-books-bar">

              <Link to= "" className="close-search"> Close</Link>

              <div className="search-books-input-wrapper">
                {
                }
                <input type="text" placeholder="Search by title or author"
                value={this.state.query}
                onChange={(e) => this.updateInput(e.target.value)}
                />

              </div>

            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {this.state.searchedBooks.map(searchedBook => {
                  let shelfState = "none";

                  this.props.books.map(book => (
                      book.id === searchedBook.id ? shelfState = book.shelf : ''

                    ));
                    return(
                      <li key={searchedBook.id}>
                      <Books
                      book = {searchedBook}
                      changeShelf={this.props.changeShelf}
                      currentShelf= {shelfState}
                      />
                      </li>
                    );
                  })
              }
              </ol>

            </div>
          </div>
      );
  }
}

export default Search;
