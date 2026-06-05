import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { useState } from "react";

function Appointment({ setCurrentPage }) {
    const [selectedDates, setSelectedDates] = useState([]);

      const handleSubmit = (e) => {
        e.preventDefault();
        setCurrentPage("confirmation");
    };

    return (
        <div className="mt-50">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="font-semibold mb-4">Book an Appointment</h1>
                <p> We're here to help you achieve a healthy, confident smile. Complete the form below and a member of our team will contact you to confirm your appointment. </p>
            </div>

            <div className="max-w-4xl mx-auto my-10 bg-alice-blue p-10 rounded-lg shadow-md shadow-charcoal/20">
                <p className="text-emergency-red !text-[15px] mb-4">* Mandatory fields</p>
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

                    <div>
                        <label className="form-label">Full Name <span className="text-emergency-red">*</span> </label>
                        <input type="text"  placeholder="John Doe"  className="form-input" required/>
                    </div>

                    <div>
                        <label className="form-label">Email Address <span className="text-emergency-red">*</span> </label>
                        <input type="email"  placeholder="john.doe@example.com"  className="form-input" required />
                    </div>

                    <div>
                        <label className="form-label">Phone Number <span className="text-emergency-red">*</span> </label>
                        <input type="tel"  placeholder="(123) 456-7890" className="form-input" required/>
                    </div>

                    <div>
                        <label className="form-label"> Preferred Date & Time <span className="text-emergency-red">*</span> </label>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <DayPicker className="form-card" mode="multiple" selected={selectedDates} onSelect={setSelectedDates} />

                            <div className="form-card">
                                <p className="font-medium mb-4">  Preferred Time Slots </p>

                                <div className="flex flex-col gap-8 justify-center">
                                    {[
                                        "Morning (8:00 AM - 12:00 PM)", "Afternoon (12:00 PM - 5:00 PM)",  "Evening (5:00 PM - 8:00 PM)",
                                    ].map((time) => (
                                        <label key={time} className="flex items-center gap-3 p-3 rounded-lg border border-gray-300 cursor-pointer hover:border-pacific-blue"  > <input type="checkbox" /> {time}  </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <label className="form-label">Is this a dental emergency? <span className="text-emergency-red">*</span> </label>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2">
                                <input type="radio" name="emergency" value="yes" className="form-radio" required />
                                Yes
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="radio" name="emergency" value="no" className="form-radio" required />
                                No
                            </label>
                        </div>
                    </div>
                    <div>
                        <label className="form-label"> Reason for Visit <span className="text-emergency-red">*</span> </label>

                        <select className="form-select" required>
                            <option value="">Select a reason</option>
                            <option>Routine Checkup</option>
                            <option>Dental Cleaning</option>
                            <option>Tooth Pain</option>
                            <option>Cosmetic Consultation</option>
                            <option>Orthodontic Consultation</option>
                            <option>Emergency Dental Care</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="form-label">Additional Notes</label>
                        <textarea rows="4"  placeholder="Please provide any additional information that may help us prepare for your visit." className="form-textarea"  />
                    </div>
                    <div className="flex flex-col items-end gap-3 mt-3">
                        <button type="submit" className="bg-pacific-blue text-white py-3 px-6 rounded-2xl w-max hover:bg-pacific-blue-hover">Submit</button>

                        <p className="!text-[15px] text-gray-500 max-w-xl text-right">Submitting this form does not guarantee an appointment. A member of our team will contact you to confirmavailability and finalize your booking.</p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Appointment;