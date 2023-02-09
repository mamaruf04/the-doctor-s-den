import React from "react";
import cavity from "../../../assets/images/cavity.png";
import Fluoride from "../../../assets/images/fluoride.png";
import Whitening from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      id: 1,
      serviceName: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      image: cavity,
    },
    {
      id: 2,
      serviceName: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      image: Fluoride,
    },
    {
      id: 3,
      serviceName: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      image: Whitening,
    },
  ];
  return (
    <>
    <div className="text-center mt-28">
        <h4 className="text-primary text-xl font-bold">Services</h4>
        <h3 className="text-3xl">Services We Provide</h3>
    </div>
      <div className="grid mt-16 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </>
  );
};

export default Services;
