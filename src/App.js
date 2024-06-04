import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Display from './Components/Display';
import { Routes  ,BrowserRouter as Router , Route } from 'react-router-dom';
import Display_data from './Components/Display_data';
import Inputform from './Components/Inputform';
import Signin from './Components/Signin';
import  Signup from "./Components/Signup";

function App() {
  return (
    <>
    
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/display' Component={Display} />
        <Route path='/disp/:id' Component={Display_data} />
        <Route path='/create' Component={Inputform} />
        <Route path='/signin' Component={Signin} />
        <Route path='/signup' Component={Signup} />
        {/* <Route path='/blogs' Component={Display} /> */}
        <Route path='/' Component={Home} />
        {/* <Route path='/data' Component={Display_data} /> */}
      </Routes>
    </Router>

    </>
  );
}

export default App;
