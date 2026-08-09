import  "./MyBooksWidget.css"
import {books} from  "../../data/books";

export default function MyBooksWidget() {
    const numWantToRead = books.filter((book) => book.status === "wantToRead").length;
    const currentlyReading = books.filter((book) => book.status === "currentlyReading").length;
    const finishedReading = books.filter((book) => book.status === "finished").length;

  return (
    <div>
    <h1>My Books</h1>
    <div className="book-categories">
      <div className="category-card yellow">Want To Read
        <p>{numWantToRead} books</p>
      </div>
      <div className="category-card blue">Currently Reading
        <p>{currentlyReading} books</p>
      </div>
      <div className="category-card green">Finished
        <p>{finishedReading} books</p>
      </div>
   </div>
    </div>
  )
}
