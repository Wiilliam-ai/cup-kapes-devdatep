import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import BookPage from './pages/BookPage';
import CupcakePage from './pages/CupcakePage';
import AboutUsPage from './pages/AboutUsPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='cupcakes' element={<CupcakePage/>}/>
          <Route path='books' element={<BookPage/>}/>
          <Route path='about-us' element={<AboutUsPage/>}/>
        </Route>
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App