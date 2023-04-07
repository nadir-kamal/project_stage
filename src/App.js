import {Routes, Route} from 'react-router-dom';
import AppGuest from './pages/Guest/AppGuest';
import AppAdmin from './pages/Admin/AppAdmin';
import Nopage from './pages/Nopage/Nopage';
import Login from './pages/Guest/login/Login';




function App() {
  return (
    <div className='m-0 px-5 py-4'>

      <Routes>

        <Route path='/*' element={<AppGuest />} />

        <Route path='/login' element={<Login />} />

        <Route path='/admin/*' element={<AppAdmin />} />
          
        <Route path='*' element={<Nopage />} />

      </Routes>

    </div>
  )
}

export default App;