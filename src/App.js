import './styles/main.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Login} from './pages/login';
import {Favorites} from './pages/favorites';
import {CardDetails} from './pages/cardDetails';
import {Cards} from './pages/cards';
import {Search} from './pages/search';
import { useSelector } from 'react-redux';

function App() {
  let isAuthenticated = useSelector((state)=> state.authReducer.isAuthenticated)

  let navDisplay = {
    display : isAuthenticated? "flex" : "none"
  }
  
  return (
    <BrowserRouter>
      <div style={navDisplay}>
        <nav className='navigation'>
          <Link to="/search" className='link'>Search</Link>
          <Link to="/favorites" className='link'>Favorites</Link>
        </nav>
        <br/><br/><br/><br/>
      </div>
      <Routes>
        <Route path='/' element={<div></div>}/>
        <Route path='/login' element={<Login />}  />
        <Route path='/search' element={<Search />}  />
        <Route path='/cards' element={<Cards />}  />
        <Route path='/card-details' element={<CardDetails />}  />
        <Route path='/favorites ' element={<Favorites />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
