import GoalsWidget from "../components/widgets/GoalsWidget";
import { goals } from "../data/goals";
import  "./Goals.css"

export default function Goals() {
    const allGoals = goals

    console.log(allGoals)
  return (
    <div>
    <h1>Goals</h1>
    <GoalsWidget/>
    <div id="goal-tab-header">
    <div className="active">
        <h2>Active</h2>
        <div id="active-goals-container">
            {}
        </div>
    </div>
    <div className="completed">
        <h2>Completed</h2>
        <div id="completed-goals-container">
            
        </div>
    </div>
    <div className="all">
        <h2>All</h2>
        <div id="all-goals-container">
            {allGoals.map((goal)=> {
                return (
                <>
                <h3>{goal.name}</h3>
                <span>{goal.type} goal</span>
                </>
            )
                
            })}
        </div>
    </div>
    </div>
    </div>
  )
}
