import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import {Route, Routes} from "react-router-dom"
import Team from "./components/Team";

const App = () => {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/team" element={<Team/>} />

      </Routes>
    </>
  );
}

export default App;
