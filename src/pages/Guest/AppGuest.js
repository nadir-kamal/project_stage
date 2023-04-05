import {Routes, Route} from 'react-router-dom';

import Home from './home/Home';
import About from './about/About';
import Login from './login/Login';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

function AppGuest() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
      </Routes>

      <Footer />

    </>
  );
}

export default AppGuest;
