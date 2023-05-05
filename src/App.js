
import './App.css';
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Menu from "./pages/Menu"
import NotFound from "./pages/NotFound"
import Reservation from './pages/Reservation';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path='/register' element={<Register />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/reservation' element={<Reservation />} />
          <Route path='/about' element={<About />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
