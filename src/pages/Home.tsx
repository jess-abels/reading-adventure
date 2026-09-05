import GoalsWidget from "../components/widgets/GoalsWidget";
import KeepReadingWidget from "../components/widgets/KeepReadingWidget";
import MyBooksWidget from "../components/widgets/MyBooksWidget";
import { goals } from "../data/goals";

export default function Home() {
  const activeDailyGoal = () => goals.filter((goal) => goal.type === "daily")[0]

  return (
    <div>
    <KeepReadingWidget/>
    <MyBooksWidget/>
    <GoalsWidget goals={activeDailyGoal()}/>
    </div>
    
  )
}
