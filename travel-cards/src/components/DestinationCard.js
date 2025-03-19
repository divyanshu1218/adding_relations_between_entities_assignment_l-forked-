import React from "react";

const DestinationCard = ({ destination }) => {
  const { name, location, image, description, price } = destination;

  return (
    <div className="destination-card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h2>{name}</h2>
        <h3>{location}</h3>
        <p>{description}</p>
        <p className="price">{price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;