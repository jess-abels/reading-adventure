import  "./MyBooks.css"
import {books} from  "../data/books";

export default function MyBooks() {
  return (
    <div>
    <h1>My Books</h1>
    <ul className="book-card-container">
{books.map((book) =>  (
      <li className="book-card">
        <img src={book.cover}/>
        <div className="book-info">
        <h3>{book.title}</h3>
        <p>{`By: ${book.author}`}</p>
        <p>{book.description}</p>
        </div>
      </li>
))
}
    </ul>
    </div>
  )
}
