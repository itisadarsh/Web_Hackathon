import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/Core/NavBar';
import About from './Pages/About';

function App() {
  return (
    <div className=" bg-pink-10 w-full h-full text-kindgreen-200 flex flex-col font-inter overflow-x-hidden  min-h-screen  relative">

    <NavBar/>

    <Routes> 
    
    <Route path="/" element={<About/>}></Route>
    
     </Routes>

    </div>
  );
}

export default App;
