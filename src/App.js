
import './App.css';
import LandingPage from './page/LandingPage';
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import HomePage from './page/HomePage';
import AllUsers from './page/AllUsers';



function App() {
  return (
    
    <BrowserRouter>
    <Routes>
    
    <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/home' element={<HomePage/>}></Route>
      <Route path='/all-users' element={<AllUsers/>}></Route>
    
  </Routes>
  </BrowserRouter>
      
  
    
  );
}

export default App;
