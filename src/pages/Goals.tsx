import { useState } from "react";
import GoalsWidget from "../components/widgets/GoalsWidget";
import { goals } from "../data/goals";
import  "./Goals.css"


export default function Goals() {
    const [selectedGoalTab, setSelectedGoalTab] = useState("active")

    const allGoals = goals;
    const completedGoals = allGoals.filter((goal)=> goal.status === "completed")
    const activeGoals = allGoals.filter((goal) => goal.status === "active")

    function displayGoals(){
        let goals = selectedGoalTab === "active" ? activeGoals : selectedGoalTab === "completed" ? completedGoals : allGoals
                return <div className="goal-info">
                {goals.map((goal)=> {
                return (
                <>
                <h4>{goal.name}</h4>
                <span>{goal.type} goal</span>
                <span>{goal.type === "daily" ? "Daily" : "Ends in 12 days"}</span>
                </>  
                )
            })}
        </div> 
        }

  return (
    <div>
    <h1>Goals</h1>
    <GoalsWidget/>
    <div id="goal-tab-header">
    <div className="active">
        <span onClick={() => setSelectedGoalTab("active")}>Active</span>
    </div>
    <div className="completed">
        <span onClick={() => setSelectedGoalTab("completed")}>Completed</span>
    </div>
    <div className="all">
        <span  onClick={() => setSelectedGoalTab("all")}>All</span>
    </div>
    </div>
    {displayGoals()}
    </div>
  )
}
