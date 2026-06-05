import teamPhoto from "../assets/team-photo.jpg";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function About() {
    return (
        <div className="mt-45 bg-porcelain text-center px-8">
            <div className="max-w-3xl mx-auto mb-20">
                <h1 className="font-semibold mb-4">About Navy Dental</h1>
                <p>
                    Providing compassionate, high-quality dental care for patients of all ages in a welcoming and comfortable environment.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <img src={teamPhoto} alt="Navy Dental team" className="w-full h-[500px] object-cover rounded-[35px] shadow-md" />

                <div className="bg-alice-blue rounded-[35px] p-10 shadow-md shadow-charcoal/20 text-left">
                    <p className="text-pacific-blue font-semibold mb-2">Our Mission</p>
                    <h2 className="font-semibold mb-5"> Caring for Smiles, One Patient at a Time</h2>
                    <p className="mb-5">At Navy Dental, we believe every patient deserves personalized care in a welcoming and comfortable environment. Our team is committed to helping individuals and families achieve healthy smiles through preventive, cosmetic, and emergency dental services. </p>
                    <p> We combine professional expertise with a patient-first approach, taking the time to listen, educate, and provide treatment plans tailored to each person's needs.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
                <div className="bg-white rounded-[30px] p-8 shadow-md shadow-charcoal/10 text-left">
                    <h2 className="font-semibold mb-6"> Business Information</h2>

                    <div className="flex flex-col gap-5">
                        <p><span className="font-semibold">Name:</span>{" "}Navy Dental</p>
                        <p> <LocationOnIcon className="text-pacific-blue mr-2" />  123 Main Street, Anytown, Canada </p>
                        <p><LocalPhoneIcon className="text-pacific-blue mr-2" />+1 (234) 567-890</p>
                        <p><EmailIcon className="text-pacific-blue mr-2" />contact@navydental.ca</p>
                        <p><AccessTimeIcon className="text-pacific-blue mr-2" />Monday – Friday, 8:00 AM – 6:00 PM</p>
                    </div>
                </div>

                <div className="bg-white rounded-[30px] p-8 shadow-md shadow-charcoal/10 text-left">
                    <p className="text-pacific-blue font-semibold mb-2">Site Designer</p>

                    <h2 className="font-semibold mb-6">Yassmine Senouci</h2>

                    <div className="space-y-5"><div>
                            <p className="text-sm uppercase tracking-wider text-charcoal/80">Role </p>
                            <p>Designer & Developer</p>
                        </div>

                        <div>
                            <p className="text-sm uppercase tracking-wider text-charcoal/80">Program</p>
                            <p>Software Engineering, University of Ottawa</p>
                        </div>

                  
                    </div>

                    <div className="border-t border-gray-200 mt-6 pt-6">
                        <p className="text-charcoal/80">Designed and developed by Yassmine Senouci.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;