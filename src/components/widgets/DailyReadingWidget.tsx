import  "./DailyReadingWidget.css"
import {books} from  "../../data/books";
import ProgressBar from "../ProgressBar";
import Button from "../Button";

export default function DailyReadingWidget() {
  const latestBookReading = books.filter((book)=> book.status === "currentlyReading")[0]
  return (
    <div id="keep-reading-widget">

        <div className="daily-reading-container">
        <h2>Daily Reading Goal</h2>
        <p>15 minutes</p>
        <ProgressBar text="10/15 minutes"color="pink"/>
    </div>
    </div>
  )
}