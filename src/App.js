import { Routes, Route, Link } from "react-router-dom";

//componentes
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./components/Index";

//Routes
import People from './routes/People';
import Home from "./routes/Home";
import Films from "./routes/Films";
import Planets from "./routes/Planets";

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">

      <Navbar/>
      
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/peliculas" element={<Films/>}/>
        <Route path="/personajes" element={<People/>}/>
        <Route path="/planetas" element={<Planets/>}/>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
