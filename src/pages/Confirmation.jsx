import HomeIcon from '@mui/icons-material/Home';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Confirmation({ setCurrentPage }) {
    return (
        <div className="mt-50">
              <div className="max-w-4xl mx-auto my-10 bg-alice-blue p-10 rounded-lg shadow-md shadow-pale-sky text-center">
                <CheckCircleIcon className="text-[#4E8B68] scale-500 my-15" />
                <h1 className="font-bold">Request Received !</h1>
                <div className="border-b-1 border-gray-400  my-7 w-[80%] mx-auto"></div>
                <p className="max-w-xl mx-auto">A member of our team will review your request and contact you shortly. During business hours, we aim to respond within <span className=" text-[#4E8B68] font-bold">15 minutes</span>.</p>
                <div className="border-b-1 border-gray-400  my-7 w-[90%] mx-auto"></div>
                <p className="max-w-xl mx-auto ">For urgent situations, please call: XXX-XXX-XXXX</p>
                <button className="bg-charcoal text-white hover:bg-pacific-blue font-semibold py-3 px-6 rounded-2xl mt-10 hover:bg-pacific-blue-hover scale-120" onClick={() => setCurrentPage("home")}><HomeIcon className="scale-125 -translate-y-[2px] mr-2" />Back to Home</button>
            </div>
        </div>
    );
}

export default Confirmation;