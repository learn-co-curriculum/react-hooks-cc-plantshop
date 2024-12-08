import React, { useState } from "react";

function PlantCard({ plant }) {
  const [isSoldOut, setIsSoldOut] = useState(false);

  const handleSoldOutClick = () => {
    setIsSoldOut(!isSoldOut);
  };

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      <button onClick={handleSoldOutClick}>
        {isSoldOut ? "Sold Out" : "In Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
