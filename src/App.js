
import './App.css';
import LandingPage from './page/LandingPage';
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import HomePage from './page/HomePage';



function App() {
  return (
    <div className=' m-10 '>
    <BrowserRouter>
    <Routes>
    
    <Route path='/' element={<LandingPage/>}></Route>
    <Route path='/home' element={<HomePage/>}></Route>
      
    
  </Routes>
  </BrowserRouter>
  </div>
  
    
  );
}

export default App;
