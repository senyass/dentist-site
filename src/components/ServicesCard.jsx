import tooth from "../assets/tooth.png";
import servicesData from "../data/services.json";

function ServicesCard({image, title, description, servicesIds, flip=false, setCurrentPage, setSelectedServiceId}) {
  

    return (
        <div className="bg-alice-blue grid grid-cols-1 lg:grid-cols-2 gap-10 pb-10 lg:pb-0 items-center mb-30 ">
                    <img src={image} alt={title} className={`w-full h-full object-cover rounded-[35px] ${flip ? "lg:order-2" : ""}`}
    />

                    <div className={`flex flex-col h-full justify-center px-10 ${flip ? "lg:order-1" : ""}`}>
                        
                        <div className="text-center">
                            <h2 className="font-semibold mb-5">{title}</h2>

                            <p className="max-w-3xl mx-auto">
                                {description}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-x-10 gap-y-8 mt-12 text-left lg:pl-5">
                            {servicesIds.map((id) => {
                                const service = servicesData.find((service) => service.id === id);
                                if (!service) return null;

                                return (
                                    <div key={service.id} className="flex items-center lg:gap-4 hover:text-pacific-blue">
                                        <img src={tooth} alt="Tooth" className="w-8 h-8"/> 
                                        <button className="!text-[20px] lg:!text-[23px]" onClick={() => { setSelectedServiceId(service.id); setCurrentPage("service-page")}}>
                                            {service.title}
                                        </button>
                                    </div>
                                ) ;
                            })}
                                </div>
                            
                        </div>
                    </div>
        
    );
} 

export default ServicesCard;