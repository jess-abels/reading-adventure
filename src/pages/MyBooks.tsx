import {books} from  "../data/books";
import BookCard from "../components/BookCard";

export default function MyBooks() {
  const wantToRead = books.filter((book) => book.status === "wantToRead");
  const currentlyReading = books.filter((book) => book.status === "currentlyReading");
  const finishedReading = books.filter((book) => book.status === "finished")
  return (
    <div>
    <h1>My Books</h1>
    <h3>Want to Read</h3>
    <BookCard filteredBooks={wantToRead}/>
     <h3>Currently Reading</h3>
    <BookCard filteredBooks={currentlyReading}/>
     <h3>Finished</h3>
     <BookCard filteredBooks={finishedReading}/>
     
    </div>
  )
}
