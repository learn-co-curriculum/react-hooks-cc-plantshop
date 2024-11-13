import React, { useState } from "react";

function PlantCard({ plant, onDelete, onMarkSoldOut }) {
  const [isSoldOut, setIsSoldOut] = useState(plant.soldOut || false);

  const handleSoldOutClick = () => {
    setIsSoldOut(!isSoldOut);
    onMarkSoldOut(plant.id); // Calls the passed function from the parent
  };

  const handleDelete = () => {
    onDelete(plant.id); // Calls the delete function from the parent
  };

  return (
    <div className="card">
      <img src={plant.image} alt={plant.name} />
      <h2>{plant.name}</h2>
      <p>Price: ${plant.price}</p>
      <button onClick={handleSoldOutClick}>
        {isSoldOut ? "Mark as Available" : "Mark as Sold Out"}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default PlantCard;
