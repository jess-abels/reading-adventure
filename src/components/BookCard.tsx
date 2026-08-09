import  "./BookCard.css"

export default function BookCard({filteredBooks}:any) {

  return (
    <div>
        <ul className="book-card-container">
{filteredBooks.map((book:any) =>  (
      <li className="book-card">
        <img src={book.cover}/>
        <div className="book-info">
        <h3>{book.title}</h3>
        <p>{`By: ${book.author}`}</p>
        <p>{book.description}</p>
        </div>
      </li>
   
))
}   </ul>
    
    </div>
  )
}
