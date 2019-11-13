import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { BookList, BookListItem } from "../BookList";
import Nav from "../Nav";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
  
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hi,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
          
               
              </p>
            </h4>
            <Container>
      <Nav />
        <Row>
          <div className="col rounded text-center bg-info mt-4 p-4">
            <h1>Google Book Search</h1>
          </div>
        </Row>
        <Row>
          <div className="col rounded bg-light mb-4 mt-4 p-4">
            <h4>Search</h4>
            <form>
              <div className="form-group">
                <label htmlFor="bookSearch">Book</label>
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
              <h6 className="text-center">No books to display currently</h6>
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
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);