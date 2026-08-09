import  "./MyBooksWidget.css"

export default function MyBooksWidget() {
  return (
    <div>
    <h1>My Books</h1>
    <div className="book-categories">
      <div className="category-card">Want To Read</div>
      <div className="category-card">Currently Reading</div>
      <div className="category-card">Finished</div>
   </div>
    </div>
  )
}
