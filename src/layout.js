import './App.css';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="App">
      <h1>This is Layout</h1>
      <a href='/usersignin'>UserSignIn</a> <br />
      <a href='/userregister'>UserRegister</a><br/>
      
      <Outlet/>
    </div>
  );
}

export default Layout;