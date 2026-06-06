import servicesData from "../data/services.json";
import pattern from "../assets/pattern.png";
import hero from "../assets/hero.png";
import CheckIcon from '@mui/icons-material/Check';

function ServicePage({ selectedServiceId, setCurrentPage }) {
    const service = servicesData.find(
        service => service.id === selectedServiceId
    );


    return (
        <div className="mt-45 text-center mb-10">
            <div className="p-16" style={{ backgroundImage: `linear-gradient(#E8F0F299, #E8F0F299), url(${pattern})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                <h2 className="font-semibold mb-3"> Services </h2>

                <h1 className="font-bold mb-4"> {service.title} </h1>

                <p className="max-w-2xl mx-auto"> {service.shortDescription} </p>
            </div>

            <div className="mt-16 px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <img src={service.image} alt={service.title}  className="w-full h-[550px] object-cover rounded-[40px]"/>

                    <div className="bg-white rounded-[35px] p-10 shadow-md text-left">
                        <p className="text-pacific-blue font-semibold mb-3"> {service.category} </p>

                        <h2 className="font-bold mb-5">Overview</h2>

                        <p className="text-xl leading-relaxed mb-8">{service.overview}</p>

                        <h2 className="font-bold mb-5">Benefits</h2>

                        <ul className="space-y-3 mb-8">
                            {service.benefits.map((benefit) => (
                                <li key={benefit} className="flex items-start gap-3 text-xl">
                                    <span className="text-pacific-blue font-bold"><CheckIcon/></span>
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                            <p className="font-medium"> Average duration: {service.duration} </p>

                            <button onClick={() => setCurrentPage("appointment")}  className="bg-pacific-blue text-porcelain px-7 py-3 rounded-[18px] font-semibold shadow-md hover:bg-pacific-blue-hover">Book an appointment </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicePage;