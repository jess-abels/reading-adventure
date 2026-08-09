import  "./KeepReadingWidget.css"
import {books} from  "../../data/books";

export default function KeepReadingWidget() {
  const latestBookReading = books.filter((book)=> book.status === "currentlyReading")[0]
  return (
    <div id="keep-reading-widget">
    <h3>Keep Reading</h3>
    <div className="book-card">
        <img src={latestBookReading.cover}/>
        <div className="book-info">
        <h3>{latestBookReading.title}</h3>
        <p>{`By ${latestBookReading.author}`}</p>
        <button>Continue Reading</button>
        </div>
    </div>
    </div>
  )
}
