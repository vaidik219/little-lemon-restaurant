import Footer from './components/Footer';
import Main from './pages/Main';
import Nav from './components/Nav';
import { useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Order from './pages/Order';
import Login from './pages/Login';
import Reservations from './pages/Reservations';

export default function App() {

  const reserveRef = useRef(null);
  const smoothScroll = () => {
    reserveRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <>
      <Nav scroll={smoothScroll} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main ref={reserveRef} />} />
          <Route path='/about' element={<About />} />
          <Route path='/order' element={<Order />} />
          <Route path='/login' element={<Login />} />
          <Route path='/reserve' element={<Reservations />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}