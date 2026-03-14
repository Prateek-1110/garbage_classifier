import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./ components/navbar";
import Footer from "./ components/footer";
import Home from "./pages/home";
// import Upload from "./pages/upload";
import Upload from "./pages/upload";
import History from "./pages/history";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: "#080808" }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;