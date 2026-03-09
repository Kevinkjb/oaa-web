// src/App.js
import './App.css';
// import { useEffect } from "react";
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import Navbar from './components/NavComponents/Navbar';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
// import { initGA,  } from "./analytics";


// function GAListener() {
//   const location = useLocation();

//   useEffect(() => {
//     logPageView(location.pathname + location.search);
//   }, [location]);

//   return null;
// }

function App() {
  
function ScrollHandler() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  return null;
}
  // useEffect(() => {
  //   initGA();  // 
  // }, []);

  return (
    <BrowserRouter>
    <ScrollToTop/>
      {/* <GAListener /> */}
      <Navbar />
      <ScrollHandler />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        {/* Default route */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
