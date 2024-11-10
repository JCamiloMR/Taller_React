import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Main from './pages/main/Main';
import '../src/styles/global.css';
import Detalle from './components/Detalle';
import Cine from './components/cines';



function App() {
  return (
    <BrowserRouter>
      <div className='main-screen' >
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='main' element={<Main />}/>
          <Route path='cines' element={<Cine />}/> 

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
