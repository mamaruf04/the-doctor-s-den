import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const date = form.date.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const slot = form.slot.value;

    const booking = {
      appointmentDate: date,
      patient: name,
      email,
      phone,
      slot,
      treatment: treatment.name,
    };
    console.log(booking);

    // when database received the booking data it will close the modal.
    setTreatment(null);
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 mt-8">
            <input
              name="date"
              type="text"
              disabled
              value={date}
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              required
              name="name"
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full"
            />
            <input
              required
              name="phone"
              type="number"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />
            <input
              required
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />
            <input
              className="input w-full bg-accent text-white"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
