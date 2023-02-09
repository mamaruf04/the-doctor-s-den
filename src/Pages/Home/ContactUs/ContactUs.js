import React from "react";
import appointmentBg from "../../../assets/images/appointment.png";
import ButtonComponent from "../../../Components/ButtonComponent/ButtonComponent";

const ContactUs = () => {
  return (
    <div
      className="mt-20 bg-cover md:p-14 p-8 rounded"
      style={{ backgroundImage: `url(${appointmentBg})` }}
    >
      <h4 className="text-secondary font-bold text-center">Contact Us</h4>
      <h1 className="text-4xl text-center text-white">
        Stay connected with us
      </h1>
      <div className="flex flex-col items-center gap-4 mt-5">
        <input
          type="text"
          placeholder="Email address"
          className="input input-bordered input-sm w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input input-bordered input-sm w-full max-w-xs"
        />
        <textarea
          placeholder="message"
          className="textarea text-lg  px-2 py-1 textarea-bordered textarea-lg w-full max-w-xs"
        ></textarea>
        <ButtonComponent>Submit</ButtonComponent>
      </div>
    </div>
  );
};

export default ContactUs;
