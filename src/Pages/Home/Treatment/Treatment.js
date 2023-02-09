import React from "react";
import treatmentImg from "../../../assets/images/treatment.png";
import ButtonComponent from "../../../Components/ButtonComponent/ButtonComponent";

const Treatment = () => {
  return (
    <div className="hero my-12">
      <div className="hero-content gap-8 lg:px-28 flex-col lg:flex-row">
        <img
          src={treatmentImg}
          className="md:max-w-sm rounded-lg shadow-2xl" alt=""
        />
        <div className="md:p-14">
          <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
          <p className="py-6">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.
          </p>
          <ButtonComponent>Get Started</ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
