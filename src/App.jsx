import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <div className="bg-[#1E1040] text-[#EDE8F8] overflow-x-hidden">
      <WhatsAppFloat />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </div>
  );
}