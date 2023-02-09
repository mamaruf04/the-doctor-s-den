import React from "react";

const InfoCard = ({ card }) => {
  const { name, description, icon , bgColor} = card;
  console.log(card);
  return (
    <div className={`card p-6  text-white md:card-side bg-base-300 shadow-xl ${bgColor}`}>
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
