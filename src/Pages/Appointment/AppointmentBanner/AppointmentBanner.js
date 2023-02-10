import React from "react";
import { DayPicker } from "react-day-picker";
import bgImg from "../../../assets/images/bg.png";
import bannerImg from "../../../assets/images/chair.png";

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
  
  return (
    <header>
      <div
        className="hero md:h-[565px] bg-cover"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="hero-content flex-col gap-12 lg:flex-row-reverse">
          <img
            src={bannerImg}
            className=" md:w-1/2 rounded-lg shadow-2xl"
            alt=""
          />
          <div className="bg-white rounded-lg">
            <DayPicker
              mode="single"
              modifiersClassNames={{
                selected: 'text-black bg-base-200 font-bold',
                today: ''
              }}
              selected={selectedDate}
              onSelect={setSelectedDate}
            ></DayPicker>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
