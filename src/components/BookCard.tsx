import  "./BookCard.css"
import { Book } from "./types/Book";

interface BookProps {
  filteredBooks: Book[];
}

export default function BookCard({filteredBooks}: BookProps) {

  return (
        <ul className="book-card-container">
{filteredBooks.map((book) =>  (
      <li className="book-card">
        <img src={book.cover}/>
        <div className="book-info">
        <h3>{book.title}</h3>
        <p>{`By: ${book.author}`}</p>
        <p>{book.description}</p>
        </div>
      </li>
))
}   </ul>
  )
}
