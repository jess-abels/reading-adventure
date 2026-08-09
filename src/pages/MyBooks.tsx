import  "./MyBooks.css"
import {books} from  "../data/books";

export default function MyBooks() {
  const wantToRead = books.filter((book) => book.status === "wantToRead");
  const currentlyReading = books.filter((book) => book.status === "currentlyReading");
  const finishedReading = books.filter((book) => book.status === "finished")
  return (
    <div>
    <h1>My Books</h1>
    <h3>Want to Read</h3>
    <ul className="book-card-container">
{wantToRead.map((book) =>  (
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
    <h3>Currently Reading</h3>
        <ul className="book-card-container">
{currentlyReading.map((book) =>  (
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

    <h3>Finished</h3>
        <ul className="book-card-container">
{finishedReading.map((book) =>  (
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
