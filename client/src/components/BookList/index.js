import React from "react";
import { Col, Row } from "../Grid";

export function BookList({ children }) {
  return (
    <ul className="list-group">{children}</ul>
  );
};

export function BookListItem({
  googleId,
  title,
  authors,
  description,
  thumbnail,
  href,
  clickEvent,
  saved,
  screenWidth
}) {
  return (
    <li className="list-group-item m-2">

      {screenWidth >= 768 &&
        <div className="float-right">
          {!saved ? (
            <button
              className="btn"
              onClick={event => clickEvent(event, googleId, title, authors, description, href, thumbnail)}>Save</button>
          ) : (
              <button className="btn" onClick={event => clickEvent(event, googleId)}>Unsave</button>
            )
          }
        </div>
      }

      <h4 className="font-weight-bold">{title}</h4>
      <h5>by {authors.length > 1 ? (authors.reduce((prev, curr) => [prev, ", ", curr])) : authors[0]}</h5>
      <Row>
        <div className="col-sm-12 col-md-auto text-center">
          <img src={thumbnail} alt={title} className="mt-1 mb-2" />
        </div>
        <Col>
          <p className={screenWidth < 768 ? "text-justify" : ""}>{description}</p>
        </Col>
      </Row>

      {screenWidth < 768 &&
        <div className="row">
          <Col>
          {!saved ? (
            <button
              className="btn btn-success btn-block"
              onClick={event => clickEvent(event, googleId, title, authors, description, href, thumbnail)}>Save</button>
          ) : (
              <button className="btn btn-danger btn-block" onClick={event => clickEvent(event, googleId)}>Unsave</button>
            )
          }
          </Col>
        </div>
      }

    </li>
  );
};