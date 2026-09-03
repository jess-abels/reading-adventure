import GoalsWidget from "../components/widgets/GoalsWidget";
import KeepReadingWidget from "../components/widgets/KeepReadingWidget";
import MyBooksWidget from "../components/widgets/MyBooksWidget";

export default function Home() {
  return (
    <div>
    <KeepReadingWidget/>
    <MyBooksWidget/>
    <GoalsWidget/>
    </div>
    
  )
}
