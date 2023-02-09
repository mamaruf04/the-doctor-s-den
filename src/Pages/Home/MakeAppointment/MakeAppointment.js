import React from "react";
import appointmentBg from '../../../assets/images/appointment.png';
import doctor from "../../../assets/images/doctor-small.png";
import ButtonComponent from "../../../Components/ButtonComponent/ButtonComponent";

const MakeAppointment = () => {
  return (
    <section className="bg-cover md:mt-32 rounded" style={{backgroundImage: `url(${appointmentBg})`}}>
      <div className="hero">
        <div className="hero-content py-0 px-8 lg:w-4/5 flex-col lg:flex-row">
          <img
            src={doctor}
            className="max-w-[460px] -mt-16 hidden md:block" alt=""
          />
          <div className="py-10">
            <h3 className="text-primary font-bold">Appointment</h3>
            <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
            <p className="py-6 text-white">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <ButtonComponent>Appointment</ButtonComponent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
