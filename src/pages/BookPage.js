import Book from "../components/Book"
import Containers from "../layouts/Containers"
import useData from "../hooks/useData"

const BookPage = () => {
  const {data:books,error,load} = useData("/books")
  return (
    <>
      <div>
        <main className="container mx-auto p-5">
          <Containers title="Books">
            {
              error ? error : load ? "Loading...." : (
                  books?.length ? books.map(book=>(
                    <Book key={book.id} 
                          title={book.title}
                          price={book.price} 
                          img={book.img} />
                )) : "No books available"
              )
            }
          </Containers>   
        </main>
      </div>
    </>
  )
}

export default BookPage