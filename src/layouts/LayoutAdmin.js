import { Link, Outlet, useLocation } from "react-router-dom"
const LayoutAdmin = () => {
  const {pathname} = useLocation()
  return (
    <div className="flex flex-col md:flex-row">
        <aside className="w-full md:max-w-[18rem] md:h-screen p-4 border-b-2 shadow-2xl bg-white border-white md:border-r-2">
            <h1 className="text-center font-bold text-4xl bg-green-800 text-white rounded-md py-5">Admin Devdatep</h1>
            <nav className="flex justify-around my-3 md:flex-col md:justify-start gap-2">
                <Link className={`text-xl border-2 rounded font-bold flex items-center gap-3 p-2 hover:text-green-600 ${(pathname === "/admin")&&'text-green-600'}`}
                      to="/admin">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    Home</Link>
                <Link className={`text-xl border-2 rounded font-bold flex items-center gap-3 p-2 hover:text-green-600 ${(pathname === "/admin/emails")&&'text-green-600'}`}
                      to="emails">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    Emails</Link>
            </nav>
        </aside>
        <div className="w-full p-5">
            <main>
                <Outlet/>
            </main>
        </div>
    </div>
  )
}

export default LayoutAdmin