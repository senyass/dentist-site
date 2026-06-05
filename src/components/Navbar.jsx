import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EmergencyIcon from "@mui/icons-material/Emergency";
import Logo from "../assets/logo.png";
import ServicesDropdown from "./ServicesDropdown";

function Navbar({ currentPage, setCurrentPage, setSelectedServiceId }) {
    const [isOpen, setIsOpen] = useState(false);
    const activeLink = "text-pacific-blue font-semibold pb-5 border-b-2 border-pacific-blue translate-y-[11px]";
    const inactiveLink = "hover:text-pacific-blue";

    return (
        <nav className="fixed z-10000 top-0 left-0 right-0 flex justify-between items-center px-10 bg-alice-blue border-b border-gray-300">
            {/* Logo */}
            <div>
                <img src={Logo} alt="Dentist Website Logo" className="ml-10 translate-y-5 w-50 scale-210 " />
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-15">
                <div className="flex items-center space-x-15">
                    <div className={currentPage === "home" ? activeLink : inactiveLink}>
                        <button onClick={() => setCurrentPage("home")}>Home</button>
                    </div>
                    <div className={currentPage === "services" ? activeLink : inactiveLink} onMouseEnter={() => setIsOpen(true)}>
                        <button onClick={() => {setCurrentPage("services"); setIsOpen(false)}}>Services<KeyboardArrowDownIcon className={`!transition-transform !duration-300 ${isOpen ? "rotate-180" : ""}`} /></button>
                    </div>
                    <div className={currentPage === "about" ? activeLink : inactiveLink}>
                        <button onClick={() => setCurrentPage("about")}>About Us</button>
                    </div>
                </div>

                {/* Appointment and Emergency Buttons */}
                <div className="space-x-5 text-porcelain m-4 font-semibold">
                    <button className="bg-pacific-blue text-alice-blue py-3 px-4 rounded-2xl hover:bg-pacific-blue-hover shadow-md" onClick={() => setCurrentPage("appointment")}> <CalendarMonthIcon className="scale-125 -translate-y-[2px] mr-2" />  Book an appointment  </button>
                    <button className="bg-emergency-red text-alice-blue py-3 px-4 rounded-2xl hover:bg-emergency-red-hover shadow-md" onClick={() => setCurrentPage("emergency")} > <EmergencyIcon className="scale-125 -translate-y-[1px] mr-2" /> Emergency ? </button>
                </div>
            </div>

            {/* Services Dropdown */}
            <ServicesDropdown isOpen={isOpen} setIsOpen={setIsOpen} setCurrentPage={setCurrentPage} setSelectedServiceId={setSelectedServiceId} />
        </nav>
    );
}

export default Navbar;