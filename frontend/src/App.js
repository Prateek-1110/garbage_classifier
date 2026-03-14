import { BrowserRouter,Routes,Route } from "react-router-dom";

// import Navbar from "./components/navbar.js";
import Navbar from "./ components/navbar";
import Home from "./pages/home";
import Upload from "./pages/upload";
import History from "./pages/history";
function App() {

  return (

    <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/upload" element={<Upload/>}/>
        <Route path = "/history" element={<history/>}/>
      </Routes>

    </BrowserRouter>

  );
}

export default App;