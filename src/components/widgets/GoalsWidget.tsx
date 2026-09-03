import  "./GoalsWidget.css"
import ProgressBar from "../ProgressBar";

export default function GoalsWidget({goals}:any) {
  console.log(goals)
  return (
    <section id="keep-reading-widget">
    <div>
        <div className="daily-reading-container">
        <h2>Daily Reading Goal</h2>
        <p>15 minutes</p>
        <ProgressBar text="10/15 minutes"color="pink"/>
    </div>
    </div>
    </section>
  )
}