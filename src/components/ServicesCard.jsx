import tooth from "../assets/tooth.png";
import servicesData from "../data/services.json";

function ServicesCard({image, title, description, servicesIds, flip=false, setCurrentPage, setSelectedServiceId}) {
  

    return (
        <div className="max-w-[1700px] mx-auto bg-alice-blue grid grid-cols-1 lg:grid-cols-2 gap-10 pb-10 lg:pb-0 items-center mb-30 rounded-[30px] border border-black/5 shadow-sm overflow-hidden">
                    <img src={image} alt={title} className={`w-full h-full object-cover rounded-[35px] aspect-[4/3] lg:aspect-[5/4] ${flip ? "lg:order-2" : ""}`}
    />

                    <div className={`flex flex-col h-full justify-center  px-8 lg:px-14 py-10 ${flip ? "lg:order-1" : ""}`}>
                        
                        <div className="text-center">
                            <p className="uppercase tracking-[0.25em] text-pacific-blue font-semibold mb-3">Dental Services </p>
                            <h2 className="font-semibold mb-5">{title}</h2>

                            <p className="max-w-2xl mx-auto leading-relaxed">
                                {description}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-x-10 gap-y-8 mt-12 text-left lg:pl-5">
                            {servicesIds.map((id) => {
                                const service = servicesData.find((service) => service.id === id);
                                if (!service) return null;

                                return (
                                    
                                    <div key={service.id} className="flex items-center gap-4  min-[500px]:py-3 pl-4 border-l-3 border-pacific-blue hover:translate-x-1 hover:text-pacific-blue ">
                                        <button className="!text-[20px] lg:!text-[23px]" onClick={() => { setSelectedServiceId(service.id); setCurrentPage("service-page")}}> {service.title}</button>  
                                    </div>
                                ) ;
                            })}
                                </div>
                            
                        </div>
                    </div>
        
    );
} 

export default ServicesCard;