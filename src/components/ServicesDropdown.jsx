import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import EmergencyOutlinedIcon from "@mui/icons-material/EmergencyOutlined";
import HotelClassIcon from "@mui/icons-material/HotelClass";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import servicesData from "../data/services.json";

function ServicesDropdown({ isOpen, setIsOpen, setCurrentPage, setSelectedServiceId }) {
    return (
        <div className={`absolute top-full left-0 right-0 bg-porcelain shadow-lg border-t border-gray-200 py-8 !transition-all !duration-300 !ease-out ${ isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-3 invisible" }`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}>


            <div className="max-w-6xl mx-auto grid grid-cols-4 gap-10 divide-x divide-gray-200">
                <div className="flex items-center">
                    <button className="font-semibold text-left px-5 py-2 rounded-md hover:bg-charcoal/10" onClick={() => {setCurrentPage("services"); setIsOpen(false)}}>View All Services<KeyboardArrowRightIcon className="ml-2" /> </button>
                </div>

                <div className="pr-6">
                    <h3 className="font-bold text-pacific-blue mb-3"> <HealthAndSafetyOutlinedIcon className="mr-2 inline-block" />Preventive Care</h3>

                    {
                    ["routine-checkups", "dental-cleaning", "fluoride-treatment", "xrays-diagnostics"].map((id) => {
                               
                        const service = servicesData.find((service) => service.id === id);
                        if (!service) return null;
                        
                        return(
                        <button key={service.id} className="navbar-service" onClick={() => { setSelectedServiceId(service.id); setCurrentPage("service-page"); setIsOpen(false)}}> {service.title} <KeyboardArrowRightIcon className="ml-2" /> </button>
                        )
                    })
                    }
                </div>

                <div className="pr-6">
                    <h3 className="font-bold text-pacific-blue mb-3"><HotelClassIcon className="mr-2 inline-block" />Specialized Care</h3>

                    {
                    ["orthodontics", "cosmetic-dentistry", "teeth-whitening"].map((id) => {
                        
                        const service = servicesData.find((service) => service.id === id);
                        if (!service) return null;
                        
                        return(
                        <button key={service.id} className="navbar-service" onClick={() => { setSelectedServiceId(service.id); setCurrentPage("service-page"); setIsOpen(false)}}>{service.title}<KeyboardArrowRightIcon className="ml-2" /></button>
                        )
                    })
                    }
                </div>

                <div className="pr-6">
                    <h3 className="font-bold text-emergency-red mb-3"><EmergencyOutlinedIcon className="mr-2 inline-block" /> Urgent Care</h3>

                    {
                    ["tooth-pain", "broken-tooth", "infection"].map((id) => {
                        const service = servicesData.find((service) => service.id === id);
                        if (!service) return null;

                        return(
                        <button key={service.id} className="navbar-service" onClick={() => { setSelectedServiceId(service.id); setCurrentPage("service-page"); setIsOpen(false)}}>{service.title}<KeyboardArrowRightIcon className="ml-2" /></button>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    );
}

export default ServicesDropdown;