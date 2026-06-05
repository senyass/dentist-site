import Hero from "../assets/hero.png";
import CheckIcon from '@mui/icons-material/Check';

function Home({ setCurrentPage }) {
    return (
        <div className="relative w-full mt-5 ">
            <img src={Hero} alt="Dentist Website Hero Image" className="w-full h-[100vh] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-alice-blue/95 via-alice-blue/75 to-transparent"></div>

            <div className="absolute inset-0 flex items-center font-semibold text-left">
                <div className="ml-[5%] max-w-4xl gap-8 flex flex-col items-start">
               

                    <h1 className="!text-[55px] font-bold">
                        Healthy Smiles, <span className="text-pacific-blue ">Confident Lives</span>
                    </h1>

                    <p className="max-w-3xl !text-[25px] leading-relaxed">
                        Quality dental care for every stage of life. From routine checkups to emergency treatment, we're here to help you smile with confidence.
                    </p>

                    <button
                        className="bg-pacific-blue text-alice-blue py-3 px-8 rounded-2xl w-max hover:bg-pacific-blue-hover shadow-md"
                        onClick={() => setCurrentPage("appointment")}
                    >
                        Book an appointment
                    </button>

                    <div className="flex gap-5 mt-2 text-charcoal">
                        <span className="bg-white/80 px-4 py-2 rounded-full shadow-sm"><CheckIcon className="-translate-y-[2px] mr-2" /> Same-Day Appointments</span>
                        <span className="bg-white/80 px-4 py-2 rounded-full shadow-sm"><CheckIcon className="-translate-y-[2px] mr-2" /> Emergency Care</span>
                        <span className="bg-white/80 px-4 py-2 rounded-full shadow-sm"><CheckIcon className="-translate-y-[2px] mr-2" /> Family Dentistry</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;