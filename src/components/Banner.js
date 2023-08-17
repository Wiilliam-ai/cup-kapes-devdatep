import { Link } from "react-router-dom"

const Banner = () => {
  return (
    <section className="w-screen h-60 md:h-[30rem] bg-princilapPage bg-no-repeat bg-right md:bg-cover md:object-cover flex justify-center items-center p-2">
        <div className="p-2 backdrop-blur-sm bg-white/75 md:backdrop-blur-0 md:bg-black/70 rounded-md">
          <h2 className="text-2xl mb-5 md:text-white">Welcome! Buy a book and enjoy a cake </h2>
          <Link to="/cupcakes" className="text-white font-bold text-xl bg-indigo-500 p-1 rounded-sm mr-3 transition-all hover:bg-indigo-900" >Cupcakes</Link>
          <Link to="/books" className="text-white font-bold text-xl bg-indigo-500 p-1 rounded-sm transition-all hover:bg-indigo-900" >Books</Link>
        </div>
    </section>
  )
}

export default Banner