import  "./KeepReadingWidget.css"
import {books} from  "../../data/books";
import ProgressBar from "../ProgressBar";
import Button from "../Button";

export default function KeepReadingWidget() {
  const latestBookReading = books.filter((book)=> book.status === "currentlyReading")[0]
  return (
    <div id="keep-reading-widget">

    <div className="book-card">
        <div className="keep-reading-header">
        <h2>Keep Reading</h2>
        <img src={latestBookReading.cover}/>
        </div>
        <div className="book-info">
        <h3>{latestBookReading.title}</h3>
        <p>{`By ${latestBookReading.author}`}</p>
        <ProgressBar text="80%"/>
        <Button text="Keep Reading"/>
        </div>
    </div>
    </div>
  )
}
