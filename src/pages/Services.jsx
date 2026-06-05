import heroImage from "../assets/hero.png";
import ServicesCard from "../components/ServicesCard";

function Services({setCurrentPage, setSelectedServiceId}) {
    return (
        <div className="mt-45 text-center">
            <div className="max-w-2xl mx-auto mb-10">
                <h1 className="font-semibold mb-4">Care for Every Smiles</h1>
                <p>Explore our full range of dental services designed to support your oral health at every stage of life.</p>
            </div>

           <ServicesCard
                title="General Dentistry"
                description="Our general dentistry services focus on preventive care and maintaining your oral health. From routine check-ups to cleanings, we provide comprehensive care to keep your smile healthy and bright."
                servicesIds={["routine-checkups", "dental-cleaning", "fluoride-treatment", "xrays-diagnostics"]}
                image={heroImage}
                setCurrentPage={setCurrentPage}
                setSelectedServiceId={setSelectedServiceId}
            />

            <ServicesCard
                title="Cosmetic Dentistry"
                description="Enhance the beauty of your smile with our cosmetic dentistry services. We offer teeth whitening, veneers, and smile makeovers to help you achieve the confident smile you deserve."
                servicesIds={["orthodontics", "cosmetic-dentistry", "teeth-whitening"]}
                image={heroImage}
                flip={true}
                setCurrentPage={setCurrentPage}
                setSelectedServiceId={setSelectedServiceId}
            />

            <ServicesCard
                title="Urgent Care"
                description="We provide immediate care for dental emergencies and acute pain. Our urgent care services ensure you receive prompt attention to alleviate discomfort and prevent further complications."
                servicesIds={["tooth-pain", "broken-tooth", "infection"]}
                image={heroImage}
                setCurrentPage={setCurrentPage}
                setSelectedServiceId={setSelectedServiceId}
            />

        </div>
    )
}

export default Services;