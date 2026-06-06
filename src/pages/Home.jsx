import Hero from "../assets/hero.png";
import CheckIcon from '@mui/icons-material/Check';

function Home({ setCurrentPage }) {
    return (
        <div className="relative w-full min-h-screen md:pt-10">
            <img src={Hero} alt="Dentist Website Hero Image" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-alice-blue/98 via-alice-blue/85 to-transparent"></div>

            <div className="relative z-10 min-h-screen flex items-start pt-32 min-[500px]:items-center min-[500px]:pt-0  justify-center font-semibold text-center px-6 min-[500px]:justify-start min-[500px]:text-left min-[500px]:px-6 sm:px-10">
                <div className="w-full max-w-4xl gap-6 min-[500px]:gap-10 flex flex-col items-center min-[500px]:items-start min-[500px]:ml-[5%]">
               

                    <h1 className="!text-[38px] sm:!text-[45px] lg:!text-[55px] font-bold leading-tight">
                        Healthy Smiles, <span className="text-pacific-blue ">Confident Lives</span>
                    </h1>

                    <p className="max-w-3xl !text-[18px] min-[500px]:!text-[25px] leading-relaxed">
                        Quality dental care for every stage of life. From routine checkups to emergency treatment, we're here to help you smile with confidence.
                    </p>

                    <div className="flex flex-col  items-center min-[430px]:flex-row gap-4">
                    <button className="bg-pacific-blue text-porcelain py-3 !text-[18px] min-[500px]:!text-[20px] px-5 min-[500px]:px-4 sm:px-8 rounded-2xl w-max hover:bg-pacific-blue-hover shadow-md" onClick={() => setCurrentPage("appointment")} > Book an appointment </button>
                    <button className="bg-porcelain text-emergency-red py-3 !text-[18px] min-[500px]:!text-[20px] px-5 min-[500px]:px-4 sm:px-8 rounded-2xl w-max hover:bg-gray-200 shadow-md" onClick={() => setCurrentPage("emergency")} > Emergency care </button>

                    </div>

                    <div className="flex flex-wrap justify-center min-[500px]:justify-start gap-3 sm:gap-5 mt-2 text-charcoal">
                        <span className="bg-white/80 px-4 py-2 rounded-full shadow-sm"><CheckIcon className="-translate-y-[2px] mr-2" /> Same-Day Appointments</span>
                        <span className="bg-white/80 px-4 py-2 rounded-full shadow-sm"><CheckIcon className="-translate-y-[2px] mr-2" /> Emergency Care</span>
                        <span className="hidden min-[400px]:block bg-white/80 px-4 py-2 rounded-full shadow-sm"><CheckIcon className="-translate-y-[2px] mr-2" /> Family Dentistry</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;