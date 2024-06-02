import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Display from './Components/Display';
import { Routes  ,BrowserRouter as Router , Route } from 'react-router-dom';
import Display_data from './Components/Display_data';
import Inputform from './Components/Inputform';

function App() {
  return (
    <>
    
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/display' Component={Display} />
        <Route path='/disp/:id' Component={Display_data} />
        <Route path='/create' Component={Inputform} />
        {/* <Route path='/blogs' Component={Display} /> */}
        <Route path='/' Component={Home} />
        {/* <Route path='/data' Component={Display_data} /> */}
      </Routes>
    </Router>

    </>
  );
}

export default App;
