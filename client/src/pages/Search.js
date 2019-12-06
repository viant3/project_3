import React, { Component } from "react";
import { Row, Container } from "../components/Grid";
import Button from "../components/Button";
import { BookList, BookListItem } from "../components/BookList";
import API from "../utils/API";
import Nav from "../components/Nav";
import Dashboard from "../components/dashboard/Dashboard";
import "./style.css";


class Search extends Component {

  state = {
    books: [],
    bookSearch: "",
    savedBooks: [],
    screenWidth: window.innerWidth,
    searched: ""
  };

  componentDidMount() {
    this.loadSavedBooks();
    window.addEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({screenWidth: window.innerWidth}, () => console.log(this.state.screenWidth))
  }

  loadSavedBooks = () => {
    API.getSavedBooks()
      .then(res => {
        let userBooks = [];
        res.data.map(book => {
          return userBooks.push(book.googleId);
        });
        this.setState({ savedBooks: userBooks })
      })
  }

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      searched: this.state.bookSearch
    });
    API.getBooks(this.state.bookSearch)
      .then(res => this.setState({ books: res.data }, () => console.log(res.data)))
      .catch(err => console.log(err));
    this.setState({
      bookSearch: ""
    });

  };

  deleteSavedBook = (event, googleId) => {
    event.preventDefault();
    API.deleteSavedBook(googleId)
      .then(res => this.loadSavedBooks())
      .catch(err => console.log(err));
  };

  handleSave = (event, googleId, title, authors, description, href, thumbnail) => {
    event.preventDefault();
    API.saveBook({
      googleId: googleId,
      title: title,
      authors: authors,
      description: description,
      href: href,
      thumbnail: thumbnail
    })
      .then(res => this.loadSavedBooks());
  };

  render() {
    return (
    
      <Container>
      <Nav />
      <Dashboard />
        <Row>
          <div className="col rounded bg-light mb-4 mt-4 p-4">
            <h4>Search</h4>
            <form>
              <div className="form-group">
                <label htmlFor="bookSearch">Documents</label>
                <input
                  type="text"
                  className="form-control"
                  id="bookSearch"
                  name="bookSearch"
                  value={this.state.bookSearch}
                  onChange={this.handleInputChange} />
              </div>
              <Button onClick={this.handleFormSubmit}>Search</Button>
            </form>
          </div>
        </Row>
        <Row>
          <div className="col border border-rounded p-3 mb-4">
            {this.state.searched === "" ? (
            <h4>Results</h4>
            ) : (
              <h4>Results for {this.state.searched}</h4>
            )}
            {!this.state.books.length ? (
              <h6 className="text-center">No Documents to display currently</h6>
            ) : (
                <BookList>
                  {this.state.books.map(book => {
                    return (
                      <BookListItem
                        key={book.volumeInfo.infoLink}
                        googleId={book.id}
                        title={book.volumeInfo.title || "Title Unavailable"}
                        authors={book.volumeInfo.authors || ["Unknown Author"]}
                        description={book.volumeInfo.description || "No description available"}
                        thumbnail={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : "img/placeholder.png"}
                        href={book.volumeInfo.infoLink}
                        saved={this.state.savedBooks.indexOf(book.id) > -1
                          ? true
                          : false}
                        clickEvent={this.state.savedBooks.indexOf(book.id) > -1
                          ? this.deleteSavedBook
                          : this.handleSave}
                        screenWidth={this.state.screenWidth}
                      />
                    );
                  })}
                </BookList>
              )}
          </div>
        </Row>
      </Container>
    )
  }
}

export default Search;