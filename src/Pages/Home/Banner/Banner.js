import React from "react";
import bgImg from "../../../assets/images/bg.png";
import bannerImg from "../../../assets/images/chair.png";
import ButtonComponent from "../../../Components/ButtonComponent/ButtonComponent";

const Banner = () => {
  return (
      <div className="hero md:h-[565px] bg-cover" style={{backgroundImage: `url(${bgImg})`}}>
        <div className="hero-content flex-col gap-3 lg:flex-row-reverse">
          <img
            src={bannerImg}
            className=" md:w-1/2 rounded-lg shadow-2xl"
            alt=""
          />
          <div className="md:p-3">
            <h1 className="md:text-5xl text-4xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <ButtonComponent>Get Started</ButtonComponent>
          </div>
        </div>
      </div>
  );
};

export default Banner;
