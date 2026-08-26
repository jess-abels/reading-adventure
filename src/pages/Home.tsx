import KeepReadingWidget from "../components/widgets/KeepReadingWidget";
import MyBooksWidget from "../components/widgets/MyBooksWidget";
import DailyReadingWidget from "../components/widgets/DailyReadingWidget"

export default function Home() {
  return (
    <div>
    <KeepReadingWidget/>
    <MyBooksWidget/>
    <DailyReadingWidget/>
    </div>
    
  )
}
