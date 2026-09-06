import { useState } from "react";
import GoalsWidget from "../components/widgets/GoalsWidget";
import { goals } from "../data/goals";
import  "./Goals.css"
import ProgressBar from "../components/ProgressBar";


export default function Goals() {
    const [selectedGoalTab, setSelectedGoalTab] = useState("active")

    const allGoals = goals;
    const completedGoals = allGoals.filter((goal)=> goal.status === "completed")
    const activeGoals = allGoals.filter((goal) => goal.status === "active")
    const activeDailyGoal = allGoals.filter((goal)=> goal.status === "active" && goal.type === "daily")[0]

    const displayGoals = () => {
        let goals = selectedGoalTab === "active" ? activeGoals : selectedGoalTab === "completed" ? completedGoals : allGoals
                return <div>
                {goals.map((goal)=> {
                return (
                <div className="goal-info">
                <div id="goal-img-container">
                <img className="goal-img" src={goal.type === "daily" ? "./images/clock-icon.png" : "./images/green-book-icon.png"}/>
                </div>
                <div>
                <h4>{goal.name}</h4>
                <span>{goal.type} Goal</span><br/>
                <span>{goal.type === "daily" ? "Daily" : "Ends in 12 days"}</span>
                <ProgressBar color="blue" progressValue={goal.progress} progressTotal={goal.total} goalType={goal.type}/>
               </div>
                </div>  
                )
            })}
        </div> 
        }

  return (
    <div>
    <h1>Goals</h1>
    <GoalsWidget goals={activeDailyGoal}/>
    <div id="goal-tab-header">
    <div className="active-goals">
        <span className={`${selectedGoalTab === "active" ? 'active-tab' : null}`}onClick={() => setSelectedGoalTab("active")}>Active</span>
    </div>
    <div className="completed-goals">
        <span className={`${selectedGoalTab === "completed" ? 'active-tab' : null}`}onClick={() => setSelectedGoalTab("completed")}>Completed</span>
    </div>
    <div className="all-goals">
        <span className={`${selectedGoalTab === "all" ? 'active-tab' : null}`} onClick={() => setSelectedGoalTab("all")}>All</span>
    </div>
    </div>
    {displayGoals()}
    </div>
  )
}
