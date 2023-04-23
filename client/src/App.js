import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import {BrowserRouter, Routes , Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path = '/' index element = {<Home/>}/>
          <Route exact path = '/signup' element = {<Signup/>} />
          <Route exact path = '/login' element = {<Login/>} />
          <Route exact path = '/dashboard' element = {<Dashboard/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
