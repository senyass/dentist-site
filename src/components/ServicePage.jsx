import servicesData from "../data/services.json";
import pattern from "../assets/pattern.png";
import hero from "../assets/hero.png"


function ServicePage({ selectedServiceId }) {
    const service = servicesData.find(
        service => service.id === selectedServiceId
    );

    return (
        <div className="mt-50 text-center" >
            <div className="p-10" style={{ backgroundImage: `linear-gradient(#E8F0F299), url(${[pattern]})`, backgroundPosition: 'center' }}>


                <h2>Services</h2>
                <h1 className="font-bold mb-4">{service?.title}</h1>
                <p>{service?.shortDescription}</p>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mx-10 mt-10">
                <img src={hero} alt={""} className="w-full h-full object-cover rounded-[35px] "
                />

                <div className="flex flex-col h-full justify-center px-10">

                    <div className="text-center">
                        <h2 className="font-semibold mb-5">Overview</h2>
                        <p>{service.overview}</p>
                        <h2 className="font-semibold mb-5">Benefits</h2>

                        <ul>
                        {service.benefits.map((benefits) => {
                            if (!service) return null;

                            return (
                                <div key={benefits} className="flex items-center gap-4 hover:text-pacific-blue">
                                        <li>{benefits}</li>
                                </div>
                            );
                        })}
                        </ul>
                    </div>


                </div>
            </div>

        </div>
    );
}

export default ServicePage;