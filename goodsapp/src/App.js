

import NavBar from './Components/common/NavBar';
import Login from './Components/auth/Login';
import Signup from './Components/auth/Signup';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';

import VerifyEmail from './Pages/VerifyEmail';

function App() {
  return (
    <div className=" bg-pink-25 w-full h-full text-kindgreen-200 flex flex-col font-inter overflow-x-hidden  min-h-screen  relative">

    <NavBar/>

    <Routes> 
    
    <Route path="/" element={<Home/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/verify-email" element={<VerifyEmail/>}></Route>
    
     </Routes>

    </div>
  );
}

export default App;
