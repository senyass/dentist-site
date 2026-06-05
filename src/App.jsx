import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Appointment from './pages/Appointment';
import Emergency from './pages/Emergency';
import Confirmation from './pages/Confirmation';
import ServicePage from './components/ServicePage';
import Footer from './components/Footer';
import About from './pages/About'

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  return (
    <>
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setSelectedServiceId={setSelectedServiceId}
      />

      {currentPage === "home" && (
        <Home setCurrentPage={setCurrentPage} />
      )}

      {currentPage === "services" && (
        <Services setCurrentPage={setCurrentPage} setSelectedServiceId={setSelectedServiceId} />
      )}

      {currentPage === "about" && (
        <About />
      )}

      {currentPage === "appointment" && (
        <Appointment setCurrentPage={setCurrentPage} />
      )}

      {currentPage === "emergency" && (
        <Emergency setCurrentPage={setCurrentPage} />
      )}

      {currentPage === "confirmation" && (
        <Confirmation setCurrentPage={setCurrentPage} />
      )}

      {currentPage === "service-page" && (
        <ServicePage setCurrentPage={setCurrentPage} selectedServiceId={selectedServiceId} />
      )}

      <Footer />
    </>
  );
}

export default App;