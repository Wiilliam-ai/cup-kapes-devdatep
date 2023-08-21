import { ToastContainer} from 'react-toastify';
import Header from "../components/Header"
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <ToastContainer/>
    <footer className='bg-gray-600 px-3 py-5 mt-9'>
      <div className='w-full max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between'>
        <p className='text-slate-300'>Web page Develop for Devdatep</p>
        <Link className='text-white font-bold' to="about-us" >Contact</Link>
      </div>
    </footer>
    </>
  )
}

export default Layout