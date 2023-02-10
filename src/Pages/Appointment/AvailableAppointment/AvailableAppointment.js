import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentOptions from "../AppointmentOptions/AppointmentOptions";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointment = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("AppointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);

  return (
    <div className="my-16">
      <h3 className="text-secondary text-center text-xl font-semibold">
        Available Services on {format(selectedDate, "PP")}
      </h3>
      <h4 className="text-gray-400 text-center text-xl">
        Please select a service.
      </h4>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 mx-6">
        {appointmentOptions.map((options) => (
          <AppointmentOptions
            key={options._id}
            appointmentOptions={options}
            setTreatment={setTreatment}
          ></AppointmentOptions>
        ))}
      </div>
      {treatment && <BookingModal treatment={treatment} selectedDate={selectedDate}></BookingModal>}
    </div>
  );
};

export default AvailableAppointment;
