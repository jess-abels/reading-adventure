import  "./GoalsWidget.css"
import ProgressBar from "../ProgressBar";

export default function GoalsWidget({goals}:any) {
  console.log(goals)
  return (
    <section id="keep-reading-widget">
    <div>
        <div className="daily-reading-container">
          <div>
          <h2>Daily Reading Goal</h2>
          <p>{`${goals.total} minutes`}</p>
          <ProgressBar progressValue={goals.progress} progressTotal={goals.total} color="red" goalType={goals.type}/>
          </div>
         <img id="reading-girl-img" src="./images/girl-reading.png"/>
        </div>
    </div>
    </section>
  )
}