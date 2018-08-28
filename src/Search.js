import React, { Component } from 'react';
import Books from './Books.js';

import * as BooksAPI from './BooksAPI'

class Search extends Component {
    state = {
        query: '',
        searchedBooks: []
    }

    updateInput = (query) => {
        this.setState({ query: query })
        this.renderSearchedBooks(query);
    }

    renderSearchedBooks = (query) => {
        if (query) {
            BooksAPI.search(query)
            .then((searchedBooks) => {
                if (searchedBooks.error) {
                    this.setState({ searchedBooks: [] });
                } else {
                this.setState({ searchedBooks : searchedBooks })
            }
        })
            } else {
            this.setState({ searchedBooks : [] });
        }
    }

  render() {
   	return (
      	<div className="search-books">
            <div className="search-books-bar">

              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>

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

              {this.state.searchedBooks.map(searchedBook => (
                      <li key={searchedBook.id}>
                      <Books
                      books = {searchedBook}
                      />
                      </li>
                  ))
              }
              </ol>

            </div>
          </div>
      );
  }
}

export default Search;
