import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Layout from './layout';
import UserRegister from './userregister';
import UserSignIn from './usersignin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Layout/>} />
        <Route path='usersignin' element={<UserSignIn/>}/>
        <Route path='userregister' element={<UserRegister/>} />
        
                  
        
      </Routes>
   
    </BrowserRouter>
 );
}

export default App;
