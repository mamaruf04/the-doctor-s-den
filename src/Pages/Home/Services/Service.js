import React from "react";

const Service = ({service}) => {
    const {serviceName, description, image} = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="service"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{serviceName}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
