import {Routes, Route} from 'react-router-dom';
import AppGuest from './pages/Guest/AppGuest';
import AppAdmin from './pages/Admin/AppAdmin';
import Nopage from './pages/Nopage/Nopage';

import Home from './pages/Guest/home/Home';
import About from './pages/Guest/about/About';
import Login from './pages/Guest/login/Login';
import Hi from './pages/Admin/Dashboard/Hi';



function App() {
  return (
    <Routes>

      <Route path='/' element={< AppGuest/>} >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
      </Route>

      <Route path='/admin/*' element={<AppAdmin />} />
        
      <Route path='*' element={<Nopage />} />

    </Routes>
  )
}

export default App;