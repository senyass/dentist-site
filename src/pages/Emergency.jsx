import CallIcon from '@mui/icons-material/Call';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


function Emergency({setCurrentPage}) {
    return (
        <div className="mt-45 text-center">
            <div className="max-w-4xl mx-auto">
                <h1 className="font-semibold mb-4">Need Emergency Dental Care?</h1>
                <p>If you are experiencing severe tooth pain, a broken tooth, swelling, or a dental injury, contact us immediately.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-[80%] max-w-4xl mx-auto my-10">
                <div className="bg-alice-blue p-10 rounded-lg shadow-md shadow-charcoal/20 flex flex-col items-center justify-between min-h-[350px]">
                    <div>
                        <h2 className="font-semibold mb-5 !text-[35px]">Contact Us ASAP</h2>
                        <p className="mb-6"> Call us at <a href="tel:+1234567890" className="text-pacific-blue font-medium">+1 (234) 567-890</a> or visit our office at <span className="font-medium">123 Main Street, Anytown, Canada</span>. </p>
                        <p className="text-charcoal/80">Recommended for immediate care</p>
                    </div>

                    <button className="px-6 py-3 bg-charcoal text-white rounded-lg hover:bg-charcoal/80"> <CallIcon className="mr-2 scale-110 -translate-y-[1px]" /> Call Now  </button>
                </div>

                <div className="bg-alice-blue p-10 rounded-lg shadow-md shadow-charcoal/20 flex flex-col items-center justify-between min-h-[350px]">
                    <div>
                        <h2 className="font-semibold mb-5 !text-[35px]">Book Online</h2>
                        <p className="mb-6">Complete our  appointment form and our team will review your request as soon as possible.</p>
                        <p className="text-charcoal/80">Available 24/7 for urgent dental care</p>
                    </div>

                    <button className="px-6 py-3 bg-charcoal text-white rounded-lg mt-5 hover:bg-charcoal/80" onClick={() => setCurrentPage("appointment")}>
                        <CalendarMonthIcon className="mr-2 scale-110 -translate-y-[2px]" /> Book Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Emergency;