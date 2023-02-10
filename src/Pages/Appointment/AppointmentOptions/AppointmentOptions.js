import React from "react";

const AppointmentOptions = ({ appointmentOptions, setTreatment }) => {
  const { name, slots } = appointmentOptions;
  return (
    <div className="card shadow-xl">
      <div className="card-body">
        <h2 className="text-2xl text-center text-secondary font-semibold">
          {name}
        </h2>
        <p className="text-center">
          {slots.length > 0 ? slots[0] : "Please try another day."}
        </p>
        <p className="text-center">
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-end mx-auto mt-3">
          <label
          disabled ={slots.length === 0}
            className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white"
            onClick={() => setTreatment(appointmentOptions)}
            htmlFor="booking-modal"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOptions;
