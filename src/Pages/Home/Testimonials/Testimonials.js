import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people2 from "../../../assets/images/people1.png";
import Testimonial from "../Treatment/Testimonial";

const Testimonials = () => {

    const testimonials = [
        {
            _id: 1,
            review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name:"Winson Herry",
            location:"California",
            img: people2,
        },
        {
            _id: 2,
            review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name:"Winson Herry",
            location:"California",
            img: people2,
        },
        {
            _id: 2,
            review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name:"Winson Herry",
            location:"California",
            img: people2,
        },
    ]

  return (
    <section>
      <div className="flex justify-between items-center mt-10">
        <div>
          <h3 className="text-secondary text-xl font-bold">Testimonials</h3>
          <h2 className="text-4xl">What Our Patients Says</h2>
        </div>
        <figure>
            <img className="w-24 lg:w-48" src={quote} alt="" />
        </figure>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
            testimonials.map(testimonial => <Testimonial key={testimonial.id} testimonial={testimonial}></Testimonial>)
        }
      </div>
    </section>
  );
};

export default Testimonials;
