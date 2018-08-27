import React, { Component } from 'react';

class Books extends Component {
  render() {
      let fetchedThumbnail = this.props.books.imageLinks ? this.props.books.imageLinks.thumbnail : '';
   	return(
      	<div className="book">
                          <div className="book-top">
                              <div className="book-cover" style={{ width: 128, height: 193,
                                   backgroundImage: `url("${fetchedThumbnail}")` }}></div>
                            <div className="book-shelf-changer">

                              <select onChange={(e) =>
                                  this.props.changeShelf(
                                      this.props.books, e.target.value
                                  )}
                                  value = {this.props.books.shelf}
                                  >

                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{this.props.books.title}</div>
                          <div className="book-authors">{this.props.books.authors}</div>
                        </div>
      );
  }
}

export default Books;
