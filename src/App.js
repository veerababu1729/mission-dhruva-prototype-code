import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import HomeDesign from './components/HomeDesign';
import Hport from './components/Hports';
import Port from './components/Port';
import Op from './components/Op';
import Branded from './components/Branded';
import Login from './components/Login';
import Register from './components/Register';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* <App/> */}

      <Route path='/' element={<HomeDesign/>}/>
      <Route path='/Hport' element={<Hport/>}/>
      <Route path='/port' element={<Port/>}/>
      <Route path='/Op' element={<Op/>}/>
      <Route path='/Branded' element={<Branded/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
