import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import About from "./components/AboutMe/About";
import Home from "./components/Home/Home";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Project/Projects";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="*" element={<Navigate to="/"/>} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
