import { Link, useLocation,useNavigate} from "react-router-dom"

const sectionPage = [
  {name:"Home",url:"/"},
  {name:"Cupcake",url:"/cupcakes"},
  {name:"Books",url:"/books"},
  {name:"Abaut Us",url:"/about-us"}
]

const Header = () => {
  const {pathname} = useLocation()
  const navigate = useNavigate()
  return (
    <header className="bg-white shadow sticky top-0 z-20">
        <div className="container mx-auto flex items-center p-3 gap-3 flex-col sm:flex-row sm:justify-between">
        <h1 className="text-3xl text-green-700 cursor-default" 
            onClick={()=> navigate("/")}>Devdatep</h1>
            <nav className="flex flex-wrap justify-around sm:justify-normal gap-3 w-full sm:w-auto">
                {sectionPage.map(element => (
                  <Link className={`text-xl text-gray-500 p-1 rounded transition-all hover:bg-green-800 hover:text-white ${(pathname===element.url)?'text-green-800':''}`} 
                           key={element.url} 
                           to={element.url}>
                    {element.name}
                  </Link>
                ))}
            </nav>
        </div>
    </header>
  )
}

export default Header