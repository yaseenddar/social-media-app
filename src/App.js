
import './App.css'
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile'
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import {Routes,Switch,Route,useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "./components/context/AuthContext"

function App() {
  const navigate = useNavigate();
  const {user} = useContext(AuthContext);
  return (
    <div className="App">
    <Routes>
        <Route exact path="/"element={user ? <Home/> : <Login/>}/>

          <Route  path="/login" element={user ? navigate("/") :<Login/>}/>
       
          <Route path="/profile/:name" element={<Profile/>}/>
           <Route path="/register" element={user ? navigate("/") : <Register/>}/>

    </Routes>
    </div>
);
}


 
export default App;
