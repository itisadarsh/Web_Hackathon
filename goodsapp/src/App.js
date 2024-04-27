

import NavBar from './Components/common/NavBar';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className=" bg-pink-10 w-full h-full text-kindgreen-200 flex flex-col font-inter overflow-x-hidden  min-h-screen  relative">

    <NavBar/>

    <Routes> 
    
    <Route path="/" element={<Home/>}></Route>
    
     </Routes>

    </div>
  );
}

export default App;
