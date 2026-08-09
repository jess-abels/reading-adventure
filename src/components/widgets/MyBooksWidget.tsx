import  "./MyBooksWidget.css"

export default function MyBooksWidget() {

  return (
    <div>
    <h1>My Books</h1>
    <div className="book-categories">
      <div className="category-card yellow">Want To Read</div>
      <div className="category-card blue">Currently Reading</div>
      <div className="category-card green">Finished</div>
   </div>
    </div>
  )
}
