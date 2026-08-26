import  "./MyBooksWidget.css"
import {books} from  "../../data/books";
import { Link } from "react-router-dom";

export default function MyBooksWidget() {
    const numWantToRead = books.filter((book) => book.status === "wantToRead").length;
    const currentlyReading = books.filter((book) => book.status === "currentlyReading").length;
    const finishedReading = books.filter((book) => book.status === "finished").length;

  return (
    <div>
    <div className="mybooks-header">
    <h2>My Books</h2>
    <Link to="/books">See all</Link>
    </div>
    <div className="book-categories">
      <div className="category-card yellow">
        <p className="category-card-header">Want To Read</p>
        <p>{numWantToRead} books</p>
      </div>
      <div className="category-card blue">
        <p className="category-card-header">Currently Reading</p>
        <p>{currentlyReading} books</p>
      </div>
      <div className="category-card green">
        <p className="category-card-header">Finished</p>
        <p>{finishedReading} books</p>
      </div>
   </div>
    </div>
  )
}
