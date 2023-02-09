import React from "react";

const Testimonial = ({ testimonial }) => {
  const { name, img, review, location } = testimonial;
  return (
    <div className="card shadow-xl">
      <div className="card-body">
        <p>{review}</p>
        <div className="card-actions items-center gap-4 mt-6">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img}  alt=""/>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <h5 className="font-semibold">{location}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
