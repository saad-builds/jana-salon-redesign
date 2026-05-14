import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { services } from "../data/saloonData";

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Reserve a Slot"
          title="Book Your"
          accent="Appointment"
          description="Skip the queue. Fill the form and we'll confirm via WhatsApp."
        />

        {!submitted ? (
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-[#3D1F7A]/20 border border-purple-400/20 p-4 outline-none"
            />

            <input
              type="tel"
              placeholder="WhatsApp Number"
              className="bg-[#3D1F7A]/20 border border-purple-400/20 p-4 outline-none"
            />

            <select className="bg-[#3D1F7A]/20 border border-purple-400/20 p-4 outline-none">
              <option value="">Select Service</option>

              {services.map((service, index) => (
                <option key={index} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>

            <input
              type="date"
              className="bg-[#3D1F7A]/20 border border-purple-400/20 p-4 outline-none"
            />

            <textarea
              placeholder="Notes"
              className="md:col-span-2 bg-[#3D1F7A]/20 border border-purple-400/20 p-4 min-h-[140px]"
            />

            <button className="bg-[#5C3AA0] py-4 uppercase tracking-[0.15em] text-xs border border-[#8B65C8]">
              Confirm Appointment
            </button>
          </form>
        ) : (
          <div className="text-center border border-purple-400/20 p-12">
            <h3 className="font-cormorant text-5xl text-[#C4AAEE] mb-4">
              Appointment Requested!
            </h3>

            <p className="text-[#B8AACC]">
              We've received your booking request and will confirm shortly via
              WhatsApp.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
