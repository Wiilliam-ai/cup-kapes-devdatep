import { ToastContainer} from 'react-toastify';
import Header from "../components/Header"
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <ToastContainer/>
    </>
  )
}

export default Layout