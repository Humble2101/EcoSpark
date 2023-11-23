//import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import Signup from "./pages/Signup";
import Forgotten from "./pages/Forgotten";
import Modal from "./components/Modal";
import Team from "./pages/Team";
import Contact from "./pages/Contactus";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white text-black">
      <Header />
      <Outlet />
      <button
        onClick={openModal}
        className="relative left-[64.5em] font-semibold bg-white bottom-[3.5em] lg:block hidden"
      >
        Contact
      </button>
      <button
        onClick={openModal}
        className="relative font-semibold bg-white bottom-[10em] left-[37em] lg:hidden md:block"
      >
        Contact
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/" />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotten" element={<Forgotten />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Contact isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </div>
  );
}

export default App;
